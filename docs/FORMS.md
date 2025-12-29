# Form Inventory

This document tracks all forms integrated into the Gulf South Homes website. All forms use **GoHighLevel** for CRM integration and lead capture.

---

## Form Infrastructure

### Global Scripts (index.html)
All GoHighLevel forms depend on two global scripts loaded in `index.html`:

1. **Chat Widget Script:**
   ```html
   <script
     src="https://beta.leadconnectorhq.com/loader.js"
     data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
     data-widget-id="6940899ff258cf30de629683"
   ></script>
   ```

2. **Form Embed Script:**
   ```html
   <script src="https://crm.gshforms.com/js/form_embed.js"></script>
   ```

**CRITICAL:** These scripts must remain in `index.html` for all forms to function.

---

## Form 1: Contact Form (Main)

- **Form Name:** Contact Us
- **Form ID:** `ZRYIIk3TWJ6OI96TkkBg`
- **Form Type:** General inquiry / Contact request
- **CRM Domain:** `crm.gshforms.com`

### Locations:
1. **Contact Page** (`pages/Contact.tsx`)
   - Line 128: Direct iframe embed
   - Appears in right column of 2-column layout
   - Minimum height: 825px

2. **Home Page** (`pages/Home.tsx`)
   - Line 1073: Direct iframe embed
   - Appears in "Get In Touch" section at bottom of homepage
   - Minimum height: 825px

### Implementation:
```tsx
<iframe
  src="https://crm.gshforms.com/widget/form/ZRYIIk3TWJ6OI96TkkBg"
  style={{
    width: '100%',
    height: '100%',
    border: 'none',
    minHeight: '825px'
  }}
  id="inline-ZRYIIk3TWJ6OI96TkkBg"
  data-layout='{"id":"INLINE"}'
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Contact Us"
  data-height="825"
  data-layout-iframe-id="inline-ZRYIIk3TWJ6OI96TkkBg"
  data-form-id="ZRYIIk3TWJ6OI96TkkBg"
  title="Contact Us"
/>
```

### Required Environment Variables:
- None (form uses hardcoded CRM domain and form ID)

### Success Behavior:
- Submits lead data to GoHighLevel CRM
- Form displays success message (handled by GHL iframe)
- No redirect or analytics tracking implemented

### Related Files:
- `pages/Contact.tsx` (lines 125-149)
- `pages/Home.tsx` (lines 1070-1095)
- `index.html` (lines 86-95 for global scripts)

---

## Form 2: Home Inquiry Form

- **Form Name:** THE EDEN (Home Inquiry)
- **Form ID:** `9bhfQTzobvZQx4nLQjRc`
- **Form Type:** Specific home inquiry / sales lead
- **CRM Domain:** `crm.gshforms.com`

**📘 Important:** See [`FORM_URL_PARAMETERS.md`](./FORM_URL_PARAMETERS.md) for how URL parameters (`home` and `home_url`) are passed to forms. This is critical for tracking which homes generate inquiries.

### Locations:
1. **GoHighLevel Form Component** (`components/GoHighLevelForm.tsx`)
   - Reusable component for individual home inquiry forms
   - Line 40: Direct iframe embed
   - Minimum height: 1268px
   - Accepts `homeName` prop (currently not used in iframe src)

### Implementation:
```tsx
<iframe
  src="https://crm.gshforms.com/widget/form/9bhfQTzobvZQx4nLQjRc"
  style={{
    width: '100%',
    height: '100%',
    border: 'none',
    minHeight: '1268px',
    background: 'transparent',
    display: 'block'
  }}
  id="inline-9bhfQTzobvZQx4nLQjRc"
  data-layout='{"id":"INLINE"}'
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="THE EDEN"
  data-height="1268"
  data-layout-iframe-id="inline-9bhfQTzobvZQx4nLQjRc"
  data-form-id="9bhfQTzobvZQx4n4LQjRc"
  title="THE EDEN"
/>
```

### Required Environment Variables:
- None (form uses hardcoded CRM domain and form ID)

### Success Behavior:
- Submits lead data to GoHighLevel CRM with home-specific context
- Form displays success message (handled by GHL iframe)
- Component includes fallback phone number: (985) 876-0222

### Related Files:
- `components/GoHighLevelForm.tsx` (lines 24-75)
- `index.html` (lines 86-95 for global scripts)

### Usage Note:
**The component accepts a `homeName` prop but does NOT currently pass it to the form.** To enable dynamic home inquiry tracking:
1. Update the iframe `src` to include home name as URL parameter, OR
2. Use GoHighLevel webhooks to capture the home context from page URL

---

## Chat Widget

- **Widget Type:** GoHighLevel Live Chat
- **Widget ID:** `6940899ff258cf30de629683`
- **Location:** Global (loaded in `index.html` line 86)
- **Behavior:** Appears on all pages (bottom-right corner)
- **Script Source:** `https://beta.leadconnectorhq.com/loader.js`

### Required Environment Variables:
- None (widget uses hardcoded widget ID)

### Related Files:
- `index.html` (lines 86-90)

---

## Form Maintenance Checklist

When making changes to the repository structure:

- [ ] Verify `index.html` remains in root directory
- [ ] Verify global GoHighLevel scripts remain in `index.html` body
- [ ] Verify `pages/Contact.tsx` remains in shippable code
- [ ] Verify `pages/Home.tsx` remains in shippable code
- [ ] Verify `components/GoHighLevelForm.tsx` remains in shippable code
- [ ] After deployment, test all forms submit successfully
- [ ] Verify chat widget appears on all pages

---

## Testing Forms

### Manual Test Steps:
1. Navigate to Contact page (`/contact`)
2. Fill out contact form with test data
3. Submit and verify success message appears
4. Navigate to Home page (`/`)
5. Scroll to "Get In Touch" section
6. Fill out contact form with test data
7. Submit and verify success message appears
8. Check GoHighLevel CRM dashboard for test lead entries
9. Verify chat widget appears and loads correctly

### Expected Results:
- Form submits without JavaScript errors
- Success message displays in iframe
- Lead appears in GoHighLevel CRM within 1 minute
- Chat widget loads without blocking page render

---

## Environment Variables

**NO ENVIRONMENT VARIABLES REQUIRED** for current form implementation.

All form IDs, CRM domains, and widget IDs are hardcoded in source files. This is intentional to prevent deployment issues.

---

## Troubleshooting

### Form Not Appearing:
1. Check browser console for script loading errors
2. Verify `index.html` contains both GoHighLevel scripts
3. Check iframe src matches exact form ID
4. Verify CRM domain `crm.gshforms.com` is accessible

### Form Not Submitting:
1. Open browser DevTools Network tab
2. Submit form and check for failed requests
3. Verify GoHighLevel account is active
4. Check form ID matches active form in GoHighLevel dashboard

### Chat Widget Not Loading:
1. Check widget ID matches GoHighLevel dashboard
2. Verify script source is accessible: `https://beta.leadconnectorhq.com/loader.js`
3. Check browser console for CORS or CSP errors
4. Ensure ad blockers are not blocking chat widget domain

---

## Future Enhancements

Potential improvements to form implementation:

1. **Dynamic Home Inquiry Forms:**
   - Pass `homeName` prop to form URL or webhook
   - Enable per-home lead tracking in GoHighLevel

2. **Analytics Integration:**
   - Add Google Analytics event tracking on form submission
   - Track form conversion rates per page

3. **Form Validation:**
   - Add client-side validation before iframe submission
   - Improve user experience with inline error messages

4. **Success Redirects:**
   - Redirect to thank-you page after successful submission
   - Add conversion tracking pixel

---

**Last Updated:** 2025-12-27
**Maintained By:** Development Team
**GoHighLevel Account Owner:** Gulf South Homes Inc.
