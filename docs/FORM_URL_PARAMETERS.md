# How to Pass URL Parameters to GoHighLevel Forms

## The Problem We Solved

When someone fills out a form on a home detail page (like "The Robertson"), we need to tell GoHighLevel **which home** they're interested in and **what page** they came from. This helps you track which homes get the most inquiries.

The tricky part: GoHighLevel forms are loaded inside an iframe (like a window inside a window), and sometimes they don't automatically see the information we're trying to send them.

## The Solution

We built a system that sends the home information in **three different ways** to make sure GoHighLevel always gets it:

1. **In the iframe URL** - The form's web address includes the home info
2. **In the parent page URL** - The main page URL also includes the home info  
3. **Via PostMessage** - We send a direct message to the form after it loads

This triple-approach ensures the form gets the data no matter which method GoHighLevel prefers.

## What Information Gets Passed?

Every time someone views a home detail page, we automatically send:

- **`home`** - The name of the home (e.g., "The Robertson")

**Note:** We only pass the home name (not the URL path) to keep the data clean and readable in GoHighLevel. This makes it easier to see which homes are popular without cluttering your CRM with long URLs.

## When Adding New Homes

**Good news:** You don't need to do anything special! The system is already set up.

When you add a new home to your data files (`data/homes.ts`, `data/double-wide-homes.ts`, or `data/modular-homes.ts`), the form component automatically:

- Gets the home name from your data
- Gets the page URL from the browser
- Passes both to GoHighLevel automatically

**Just make sure:**
- The home has a `name` property (this is what gets passed to GoHighLevel - e.g., "The Robertson")
- The home has an `id` property (for the slug/URL)
- The page uses the `InquireFormEmbed` component

## GoHighLevel Setup (One-Time Configuration)

In your GoHighLevel account, you need to configure the form to **receive** this information:

1. Go to your form settings (Form ID: `9bhfQTzobvZQx4nLQjRc`)
2. Find or create a hidden field called `home` (this will store the home name like "The Robertson")
3. Set it to read from URL parameter: `{{home}}` or `{{inboundWebhookRequest.home}}`

**Note:** The exact syntax depends on your GoHighLevel version. Check their documentation for "URL parameter mapping" or "hidden field from URL." The field will receive clean, readable home names like "The Robertson" instead of long URL paths.

## How to Test It Works

1. Go to any home detail page (e.g., `/single-wide-mobile-homes/robertson`)
2. Open browser DevTools (press F12)
3. Look at the browser address bar - you should see `?home=The Robertson` (or whatever the home name is)
4. Right-click the form → "Inspect" → Check the iframe `src` - it should have `?home=The Robertson`
5. Submit a test form
6. Check your GoHighLevel dashboard - the `home` field should be filled in with the clean home name (e.g., "The Robertson")

## Why This Matters

- **Track which homes are popular** - See which models get the most inquiries (e.g., "The Robertson" appears 50 times)
- **Better lead follow-up** - Know exactly which home someone was looking at (clean, readable names)
- **Marketing insights** - Understand which homes convert best without URL clutter
- **Clean CRM data** - Home names are easy to read and search in your GoHighLevel dashboard

---

## For Developers / AI Agents

### Component: `InquireFormEmbed`

**Location:** `components/InquireFormEmbed.tsx`

**Props:**
- `homeSlug` (string) - Home ID/slug
- `homeTitle` (string, optional) - Display name (falls back to slug)
- `currentPath` (string) - Current page path from `location.pathname`
- `formId` (string, optional) - Defaults to `'9bhfQTzobvZQx4nLQjRc'`

**How It Works:**

The component passes parameters via:

1. **Iframe URL:** `https://crm.gshforms.com/widget/form/${formId}?home=${encodeURIComponent(homeValue)}`
   - Only passes the home name (e.g., "The Robertson") for clean, readable data

2. **Parent URL:** Uses `window.history.replaceState()` to add `home` parameter to parent window URL

3. **PostMessage:** Sends `home` data via `iframe.contentWindow.postMessage()` after iframe loads

**Usage Example:**

```tsx
<InquireFormEmbed
  homeSlug={home.id}
  homeTitle={home.name}
  currentPath={location.pathname}
/>
```

**Implementation Details:**

- Parameters are URL-encoded to handle special characters
- PostMessage includes error handling (CORS-safe)
- Event listeners are properly cleaned up on unmount
- Iframe ref is used to detect load state

**Files Using This Component:**

- `pages/HomeDetails.tsx` - Single-wide homes
- `pages/DoubleWideDetail.tsx` - Double-wide homes  
- `pages/ModularDetail.tsx` - Modular homes

**When Adding New Home Types:**

1. Import `InquireFormEmbed` component
2. Use `useLocation()` hook to get `location.pathname` (still needed for prop, but not passed to form)
3. Pass `home.id`, `home.name`, and `location.pathname` as props
4. Component automatically extracts `home.name` and passes only that to GoHighLevel

**Note:** The `currentPath` prop is still required by the component interface but is no longer passed to GoHighLevel. Only the `home.name` value is sent to keep data clean.

