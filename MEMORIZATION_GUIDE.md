# Gulf South Homes - Personal Memorization & Knowledge Base

## Quick Navigation
- [System Overview](#system-overview)
- [How Homes Are Managed](#how-homes-are-managed)
- [Company Info & Configuration](#company-info--configuration)
- [Quick Updates Guide](#quick-updates-guide)
- [File Locations](#file-locations)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

---

## System Overview

This is a **React + Vite + TypeScript** website for Gulf South Homes Inc., a Louisiana manufactured/modular home dealership.

### The Stack (Simple Version)
- **Frontend Framework:** React 19 (JavaScript UI library)
- **Build Tool:** Vite (fast compiler)
- **Language:** TypeScript (JavaScript with type checking)
- **Styling:** Tailwind CSS (utility-based styling)
- **Deployment:** Vercel (automatic when you push to GitHub)
- **Forms:** GoHighLevel (CRM - handles all form submissions)

### Key Principle
Everything is **data-driven**. Change the data → website updates automatically.

---

## How Homes Are Managed

### The Single Source of Truth
**File:** `data/homes.ts`

This is the **only place** where home inventory lives. Every single home listing on the website pulls data from this file.

### Home Data Structure

Each home is an object with this shape:

```typescript
{
  id: 'robertson',                    // Unique identifier (used in URLs)
  name: "The Robertson",              // Display name
  manufacturer: "Franklin",           // Brand/maker
  type: "Single Wide",                // Type: Single Wide | Double Wide | Modular
  beds: 3,                            // Number of bedrooms
  baths: 2,                           // Number of bathrooms
  sqft: 1312,                         // Square footage
  price: "$58,900",                   // Optional: selling price
  description: "Experience the...",   // Long marketing copy
  features: [                         // List of amenities
    "3 Bedrooms",
    "Open Floor Plan",
    "Modern Kitchen"
  ],
  imageUrl: "/assets/images/...",     // Main/cover photo
  gallery: [                          // Photo gallery array
    "/assets/images/...",
    "/assets/images/..."
  ],
  isFeatured: true                    // Show on homepage? true/false
}
```

### To Update a Specific Home

1. Open `data/homes.ts`
2. Find the home by its `id` (e.g., `id: 'robertson'`)
3. Update any field:
   - Change `name` → name updates everywhere
   - Change `price` → price updates everywhere
   - Change `description` → description updates everywhere
   - Change `isFeatured: true` → appears on homepage
   - Change `isFeatured: false` → removed from homepage
4. Save file → website auto-updates (if dev server running)

### To Add a New Home

1. Open `data/homes.ts`
2. Copy an existing home object as template
3. Change these required fields:
   - `id` (must be unique, lowercase, no spaces)
   - `name`
   - `manufacturer`
   - `type`
   - `beds`, `baths`, `sqft`
   - `description`
   - `features` array
   - `imageUrl` and `gallery` paths
4. Save → home automatically appears in relevant catalog pages

### To Remove a Home

1. Open `data/homes.ts`
2. Delete the entire home object
3. Save → home disappears from website

### Image Folder Structure

All home images follow this pattern:

```
public/assets/images/single wide homes/
├── [MANUFACTURER NAME]/
│   └── [Home Model Name]/
│       ├── cover photo.png          (Main image)
│       ├── cover photo.webp         (Optional: web format)
│       └── gallery_*.png            (Additional gallery images)
```

**Example for "The Robertson" by Franklin:**
```
public/assets/images/single wide homes/FRANKLIN HOMES/Robertson/
├── cover photo.png
└── gulf_south_homes_robertson_gallery_1-1920w.webp
└── gulf_south_homes_robertson_gallery_2-1920w.webp
```

When you add images:
- Use the exact folder structure above
- Use web-friendly formats (PNG, WEBP, JPG)
- Filenames must match what's in `data/homes.ts`
- Images should be optimized (under 500KB for gallery images)

---

## Company Info & Configuration

### Master Configuration File
**File:** `constants.ts`

All company-wide information is stored here:

```typescript
COMPANY_INFO = {
  name: "Gulf South Homes Inc",
  address: "1986 LA-182, Houma, LA 70364",
  phone: "(985) 876-0222",
  email: "info@gulfsouthhomesinc.com",

  // Sales team hours
  salesHours: {
    weekdays: "8:00 AM - 5:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "Closed"
  },

  // Parts store hours (different from sales!)
  partsHours: {
    weekdays: "8:00 AM - 5:00 PM",
    saturday: "Closed",
    sunday: "Closed"
  }
}
```

### Quick Updates to Company Info

Want to change phone number, address, or hours?

1. Open `constants.ts`
2. Update the relevant field in `COMPANY_INFO`
3. Save → updates everywhere the site uses it

**What Automatically Updates:**
- Navigation menu
- Footer
- Contact page
- Location maps
- All form default values

---

## Quick Updates Guide

### Scenario 1: Change Business Hours

**File:** `constants.ts` → `COMPANY_INFO.salesHours` or `COMPANY_INFO.partsHours`

```typescript
// Change this:
salesHours: {
  weekdays: "8:00 AM - 5:00 PM",
  saturday: "8:00 AM - 5:00 PM",
}

// To this:
salesHours: {
  weekdays: "8:00 AM - 6:00 PM",
  saturday: "9:00 AM - 4:00 PM",
}
```

### Scenario 2: Change Contact Phone/Email

**File:** `constants.ts` → `COMPANY_INFO`

```typescript
phone: "(985) 876-0222",  // Change this
email: "info@gulfsouthhomesinc.com",  // Or this
```

### Scenario 3: Feature a Home on Homepage

**File:** `data/homes.ts`

Find the home and change:
```typescript
isFeatured: false   // Change to:
isFeatured: true
```

### Scenario 4: Add Testimonial

**File:** `constants.ts` → `TESTIMONIALS` array

```typescript
TESTIMONIALS.push({
  name: "John Smith",
  location: "Houma, LA",
  text: "Great service and friendly staff!",
  rating: 5
})
```

### Scenario 5: Update Lending Partners

**File:** `constants.ts` → `LENDING_PARTNERS` array

```typescript
LENDING_PARTNERS = [
  { name: "21st Mortgage Corporation", href: undefined },
  // Add new lender here:
  { name: "New Lender Name", href: undefined },
]
```

---

## File Locations

### Critical Files (Core System)

| File | Purpose | When to Edit |
|------|---------|--------------|
| `data/homes.ts` | All home inventory | Add/update/remove homes |
| `constants.ts` | Company info, testimonials, lenders | Change business details |
| `types.ts` | TypeScript interfaces | Adding new home fields |
| `index.css` | Global styles & colors | Brand colors, spacing |
| `tailwind.config.ts` | Tailwind configuration | Extend utilities |

### Pages (Routes)

| File | URL | Purpose |
|------|-----|---------|
| `pages/Home.tsx` | `/` | Landing/homepage |
| `pages/SingleWide.tsx` | `/single-wide` | Single-wide catalog |
| `pages/DoubleWide.tsx` | `/double-wide` | Double-wide catalog |
| `pages/Modular.tsx` | `/modular-homes` | Modular homes catalog |
| `pages/Contact.tsx` | `/contact` | Contact form |
| `pages/About.tsx` | `/about` | Company story |
| `pages/Financing.tsx` | `/financing` | Financing info |

### Components (Reusable UI)

| File | What It Does |
|------|-------------|
| `components/Navbar.tsx` | Top navigation bar |
| `components/Footer.tsx` | Bottom footer |
| `components/HomeCard.tsx` | Single home listing card |
| `components/HomeFilters.tsx` | Price/bedroom filters |
| `components/GoHighLevelForm.tsx` | Contact form handler |
| `components/CookieConsentBanner.tsx` | Cookie/privacy banner |
| `components/LenderRibbon.tsx` | Lenders carousel |

### Static Assets

| Folder | Contains |
|--------|----------|
| `public/assets/images/` | All website images |
| `public/assets/video/` | Hero videos |
| `public/` | Favicon, manifest, sitemap |

---

## Common Tasks

### Task 1: Add a New Home to Inventory

**Time Required:** 5-10 minutes

**Steps:**

1. Prepare your home images in the correct folder:
   ```
   public/assets/images/single wide homes/[Manufacturer]/[Model Name]/
   ├── cover photo.png
   ├── gallery_1.png
   └── gallery_2.png
   ```

2. Open `data/homes.ts`

3. Find the section for your home type (Single Wide, Double Wide, or Modular)

4. Add a new object:
   ```typescript
   {
     id: 'unique-home-id',
     name: "Home Name",
     manufacturer: "Franklin",
     type: "Single Wide",
     beds: 3,
     baths: 2,
     sqft: 1312,
     description: "Beautiful 3-bedroom home with...",
     features: ["Feature 1", "Feature 2", "Feature 3"],
     imageUrl: "/assets/images/single wide homes/Franklin/[Model]/cover photo.png",
     gallery: [
       "/assets/images/single wide homes/Franklin/[Model]/cover photo.png",
       "/assets/images/single wide homes/Franklin/[Model]/gallery_1.png",
     ],
     isFeatured: true  // Show on homepage
   }
   ```

5. Save the file → Home appears on website automatically

### Task 2: Remove a Home from Inventory

**Time Required:** 2 minutes

**Steps:**

1. Open `data/homes.ts`
2. Find the home by searching for its `name`
3. Delete the entire object (from `{` to `}`)
4. Save → Home disappears from website

**Optional:** Keep the home object but change to:
```typescript
isFeatured: false  // Just hide it instead of deleting
```

### Task 3: Update Home Details

**Time Required:** 2-5 minutes

**Example:** Change Robertson's price from $75,000 to $72,500

1. Open `data/homes.ts`
2. Find Robertson (search for `id: 'robertson'`)
3. Update any field:
   ```typescript
   name: "The Robertson",              // Change name
   price: "$72,500",                   // Change price
   description: "Updated description", // Change marketing copy
   features: ["New feature"],          // Change amenities
   isFeatured: true/false,             // Show/hide on homepage
   ```
4. Save → Changes live immediately

### Task 4: Update Company Hours

**Time Required:** 2 minutes

**Steps:**

1. Open `constants.ts`
2. Find `COMPANY_INFO.salesHours` (sales team) or `COMPANY_INFO.partsHours` (parts store)
3. Update the time strings:
   ```typescript
   salesHours: {
     weekdays: "8:00 AM - 5:00 PM",  // Mon-Fri
     saturday: "8:00 AM - 5:00 PM",  // Saturday
     sunday: "Closed"                 // Sunday
   }
   ```
4. Save → Updates everywhere on site

### Task 5: Change Contact Information

**Time Required:** 2 minutes

**Steps:**

1. Open `constants.ts`
2. Update any field in `COMPANY_INFO`:
   ```typescript
   name: "Gulf South Homes Inc",
   phone: "(985) 876-0222",
   email: "info@gulfsouthhomesinc.com",
   address: "1986 LA-182, Houma, LA 70364",
   ```
3. Save → Updates in header, footer, contact form

---

## How the Website Works (Data Flow)

### Simple Version
1. **Data Source:** `data/homes.ts` contains all homes
2. **Display:** Pages import data and render it
3. **User sees:** Updated inventory automatically

### Detailed Flow for Single Home

```
data/homes.ts (The Source)
    ↓
pages/SingleWide.tsx (imports homes)
    ↓
components/HomeCard.tsx (displays each home)
    ↓
User sees formatted home listing on website
```

### When You Update `data/homes.ts`
1. File saves locally
2. Dev server detects change (hot reload)
3. Page re-renders with new data
4. User sees updated content immediately

### When You Deploy
1. Push changes to GitHub
2. Vercel automatically builds
3. Website updates live (takes 1-2 minutes)

---

## Deployment Process

### Local Testing
```bash
npm run dev      # Start dev server (localhost:3000)
```

### Before Pushing to Production
```bash
npm run build    # Creates optimized build
npm run preview  # Test production version locally
```

### Deploy to Live Website
```bash
git add .
git commit -m "Update home inventory"
git push origin main
```

**That's it!** Vercel automatically:
1. Detects the push
2. Runs `npm run build`
3. Updates the live website (2-3 minutes)

---

## GoHighLevel Integration

### What It Does
GoHighLevel is a CRM (Customer Relationship Management) system that:
- Collects form submissions (contact forms, home inquiries)
- Stores customer info
- Sends confirmations
- Tracks leads

### Forms Currently Integrated

| Form | Purpose | Used On |
|------|---------|---------|
| Contact Form | General inquiries | Contact page |
| Home Inquiry Form | "I'm interested in this home" | Home detail pages |

### Form IDs (Hard-Coded in Code)

```typescript
// In constants.ts:
CONTACT_FORM_ID: "ZRYIIk3TWJ6OI96TkkBg"
HOME_INQUIRY_FORM_ID: "9bhfQTzobvZQx4nLQjRc"
CRM_DOMAIN: "crm.gshforms.com"
```

**Important:** These IDs are NOT secrets. They're CRM identifiers that can be safely public.

### To Change Form IDs

1. Create new form in GoHighLevel
2. Copy the form ID
3. Open `constants.ts`
4. Update the ID
5. Save & deploy

---

## Brand Colors (Important!)

### Design System
All colors are defined in `index.css` as **CSS variables**. Never hardcode HEX values.

```css
/* In index.css */
:root {
  --color-primary: #1E3A5F;      /* Gulf Navy Blue - main color */
  --color-secondary: #D32F2F;    /* CTA Red - buttons */
  --color-accent: #4A90E2;       /* Bright Blue - accents */
}
```

### Using Colors in Components

**Wrong way (hardcoded):**
```tsx
<div style={{ color: '#1E3A5F' }}>  ❌ Bad
```

**Right way (Tailwind):**
```tsx
<div className="text-blue-900">  ✅ Good
```

### Color Reference for Updates

| Color Name | Hex Value | Use Cases | Tailwind Class |
|-----------|-----------|-----------|----------------|
| Gulf Navy Blue | #1E3A5F | Primary, headers, main text | `text-blue-900` |
| CTA Red | #D32F2F | Buttons, CTAs, important highlights | `text-red-600`, `bg-red-600` |
| Bright Blue | #4A90E2 | Accents, secondary elements | `text-blue-500` |

---

## Troubleshooting

### Problem: Changes aren't showing on website

**Solution:**
1. Check if file was saved (look for dot in editor tab)
2. Is the dev server running? (`npm run dev`)
3. Refresh browser (Cmd+Shift+R or Ctrl+Shift+R for hard refresh)
4. Check console for errors (F12 → Console tab)

### Problem: Home appears on homepage but shouldn't

**Solution:**
1. Open `data/homes.ts`
2. Find the home
3. Change `isFeatured: true` to `isFeatured: false`
4. Save

### Problem: Image not showing

**Solution:**
1. Check folder structure matches pattern:
   ```
   public/assets/images/single wide homes/[Manufacturer]/[Model]/
   ```
2. Verify filename matches what's in `data/homes.ts` exactly (case-sensitive)
3. Check file extension (.png, .webp, .jpg)
4. Verify file exists (no typos)

### Problem: Form submissions not working

**Solution:**
1. Check GoHighLevel form IDs in `constants.ts` are correct
2. Verify CRM domain: `crm.gshforms.com`
3. Check GoHighLevel account is active and form is published
4. Look in browser console for errors (F12)

### Problem: Website looks broken after changes

**Solution:**
1. Check for syntax errors (red squiggly lines in editor)
2. Run `npm run build` to see full errors
3. Check you didn't break TypeScript types
4. Revert changes: `git checkout -- filename`

---

## Quick Reference Cheat Sheet

### Most Common Updates

| Task | File | Field |
|------|------|-------|
| Add home | `data/homes.ts` | Add object to array |
| Remove home | `data/homes.ts` | Delete object |
| Feature home | `data/homes.ts` | `isFeatured: true` |
| Change hours | `constants.ts` | `COMPANY_INFO.salesHours` |
| Change phone | `constants.ts` | `COMPANY_INFO.phone` |
| Change address | `constants.ts` | `COMPANY_INFO.address` |
| Add testimonial | `constants.ts` | `TESTIMONIALS` array |
| Update home price | `data/homes.ts` | Find home, update `price` field |
| Update home features | `data/homes.ts` | Find home, update `features` array |

---

## Project Structure Map

```
gshhomes/
├── data/
│   ├── homes.ts              ← HOME INVENTORY (Most Important!)
│   └── (other data files)
│
├── pages/                    ← Website pages
│   ├── Home.tsx
│   ├── SingleWide.tsx
│   ├── DoubleWide.tsx
│   ├── Contact.tsx
│   └── (more pages...)
│
├── components/               ← Reusable UI pieces
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HomeCard.tsx
│   └── (more components...)
│
├── public/
│   └── assets/
│       ├── images/          ← All website images
│       └── video/           ← All hero videos
│
├── constants.ts             ← COMPANY INFO (Second Most Important!)
├── types.ts                 ← TypeScript definitions
├── index.css                ← Global styles & brand colors
└── (config files...)
```

---

## Getting Help

### If Something Breaks

1. **Check recent changes:** What was the last thing you modified?
2. **Read error message:** Browser console (F12) usually tells you what's wrong
3. **Revert changes:** `git checkout -- filename` to undo last save
4. **Search CLAUDE.md:** The project instructions have lots of detail

### Common Error Messages

| Error | Meaning | Fix |
|-------|---------|-----|
| `Cannot find module` | Missing import or file | Check file path |
| `Property does not exist` | TypeScript type error | Check field names match `types.ts` |
| `Image not found (404)` | Image path wrong | Verify folder structure |
| `Form not submitting` | GoHighLevel issue | Check form ID in `constants.ts` |

---

## Next Steps for Handoff

When handing this project to someone else:

1. **Share this document** - It has all the critical knowledge
2. **Share CLAUDE.md** - Full technical documentation
3. **Show them the data flow** - How `data/homes.ts` drives everything
4. **Walk through one update** - Add a home or change hours as demo
5. **Let them practice** - Have them make 2-3 small changes

### Key Things They Need to Know

✅ All homes in `data/homes.ts`
✅ Company info in `constants.ts`
✅ Forms use GoHighLevel (IDs in `constants.ts`)
✅ Images in `public/assets/images/`
✅ Deploy via `git push origin main`
✅ Dev server: `npm run dev`
✅ Build: `npm run build`

---

## Final Notes

This system is designed to be **simple and maintainable**. Most updates require only editing two files:
- `data/homes.ts` (home inventory)
- `constants.ts` (company info)

Everything else flows from those two sources. No complex databases, no server setup needed. Just data → render → display.

**Good luck!**

---

*Last Updated: December 28, 2024*
*Created as personal knowledge base for Gulf South Homes project*
