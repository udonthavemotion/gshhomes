# Gulf South Homes Inc. — Brand Identity Guide

**Louisiana's Trusted Manufactured & Modular Home Dealer Since 1995**

---

## Table of Contents

1. [Brand Discovery & Strategy](#1-brand-discovery--strategy)
2. [Logo System](#2-logo-system)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Design Tokens (Developer-Ready)](#5-design-tokens-developer-ready)
6. [Component Style Guardrails](#6-component-style-guardrails)
7. [Photography & Imagery Style](#7-photography--imagery-style)
8. [Voice & Messaging (Brand Tone)](#8-voice--messaging-brand-tone)
9. [Implementation Notes for Designers](#9-implementation-notes-for-designers)
10. [Usage Scenarios](#10-usage-scenarios)

---

## 1. Brand Discovery & Strategy

### Brand Personality

Gulf South Homes embodies these core attributes:

- **Trustworthy & Transparent** — 30 years of honest service, no hidden fees
- **Modern & Professional** — Contemporary design with premium execution
- **Family-Oriented & Warm** — Louisiana-rooted, generational expertise
- **Accessible Yet Premium** — Quality homes without the luxury price tag
- **Community-Focused** — Serving Southeast Louisiana families since 1995

### Brand Promise

**What customers get when they choose Gulf South Homes:**

✓ **Quality Homes** — America's top manufacturers (Champion, Franklin, Sunshine)
✓ **Trusted Service** — Family-owned business with BBB accreditation
✓ **Transparent Financing** — In-house options with clear, upfront pricing
✓ **Complete Solutions** — One-stop shop for permits, delivery, setup, and parts
✓ **Louisiana Expertise** — Deep understanding of regional codes and climate needs

### Visual Enemies (What We Deliberately Avoid)

❌ **Cheap/Discount Vibes** — No garish sales banners, no "bargain basement" aesthetics
❌ **Overly Corporate Coldness** — We're family-owned, not a faceless corporation
❌ **Trendy/Disposable Feel** — Our homes last 30+ years; our brand should too
❌ **Generic Stock Photography** — We use real team photos and actual inventory
❌ **Cluttered Layouts** — Clean, spacious design reflects home quality

### Why This Identity?

**Navy Blue (#1E3A5F) — "Gulf Coast Modern"**
→ Evokes trust, stability, and professionalism (financial/insurance industry standards)
→ Reflects the Gulf Coast waters of Louisiana (local connection)
→ Premium without being pretentious

**Bright Red (#D32F2F) — Call-to-Action**
→ Creates urgency and decisiveness ("Act Now" on Hurricane Francine grants)
→ Stands out boldly against navy for maximum contrast
→ Energetic and action-oriented

**Accent Blue (#4A90E2) — Approachable Highlight**
→ Lighter, friendly blue balances the seriousness of navy
→ Modern tech feel (reflects website sophistication)
→ Great for links, hover states, and interactive elements

**Outfit Font (Headings)**
→ Geometric, bold, modern — professional but not cold
→ Excellent readability at large sizes (hero sections)
→ Strong brand presence

**Plus Jakarta Sans (Body)**
→ Warm, humanist sans-serif — friendly and readable
→ High readability at small sizes (body text, forms)
→ Pairs perfectly with Outfit's geometric shapes

---

## 2. Logo System

### Primary Logo Description

**Full-Color Logo with Tagline**
[Visual Placeholder: Gulf South Homes logo with house icon and tagline "Louisiana's Trusted Home Dealer Since 1995"]

**Elements:**
- **Icon:** Stylized house silhouette (roof + walls)
- **Wordmark:** "GULF SOUTH HOMES" in Outfit Bold
- **Tagline:** "Since 1995" or "Louisiana's Trusted Home Dealer"
- **Colors:** Navy (#1E3A5F) + Red (#D32F2F) accents

### Logo Variants Needed

| Variant | Use Case | File Format |
|---------|----------|-------------|
| **Full Color (Horizontal)** | Website header, letterhead, email signatures | SVG, PNG (2x, 3x) |
| **Full Color (Stacked/Vertical)** | Social media profile images, mobile app icon | SVG, PNG (2x, 3x) |
| **Icon/Mark Only** | Favicon, app icons, small touch targets | SVG, PNG (16px, 32px, 64px, 128px) |
| **Wordmark (Type Only)** | Sponsorships, partner materials | SVG, PNG (2x, 3x) |
| **1-Color Dark (Navy)** | Light backgrounds, print on white paper | SVG, PNG |
| **1-Color Light (White)** | Dark backgrounds, hero video overlays | SVG, PNG |
| **Favicon Variant** | Browser tabs, bookmarks | ICO, PNG (16px, 32px) |
| **Social Media Square** | Facebook, Instagram, LinkedIn avatars | PNG (1200x1200px) |

### Clearspace Rules

**Minimum Padding Around Logo:**
→ Clearspace = Height of the "H" in "HOMES"
→ No text, graphics, or other elements within this zone
→ Maintains visual breathing room

[Visual Placeholder: Logo with dotted clearspace boundary]

### Minimum Size

**Digital:**
- Horizontal logo: 180px wide minimum
- Vertical logo: 100px wide minimum
- Icon only: 32px × 32px minimum

**Print:**
- Horizontal logo: 1.5 inches wide minimum
- Vertical logo: 0.85 inches wide minimum

### Do's and Don'ts

#### ✅ PROPER USAGE

✓ Use official logo files only (no recreations)
✓ Maintain original proportions (locked aspect ratio)
✓ Use on solid backgrounds with proper contrast
✓ Provide adequate clearspace
✓ Use approved color variations only

#### ❌ COMMON MISTAKES TO AVOID

❌ **DO NOT** stretch or distort the logo
❌ **DO NOT** add drop shadows, glows, or effects
❌ **DO NOT** change colors (use approved variants)
❌ **DO NOT** rotate the logo
❌ **DO NOT** place on busy backgrounds without a solid backdrop
❌ **DO NOT** separate the icon from the wordmark (unless using icon-only variant)

[Visual Placeholder: Side-by-side examples of correct vs. incorrect logo usage]

→ **Implementation Notes:**
Designers should receive logo files in SVG format for scalability. PNG files at 2x and 3x resolution ensure crisp display on retina screens. Always use SVG for web when possible.

---

## 3. Color System

### Primary Colors

| Color Name | HEX Value | RGB | Usage |
|------------|-----------|-----|-------|
| **Gulf Navy** | `#1E3A5F` | rgb(30, 58, 95) | Primary brand color, navigation, hero sections, main buttons |
| **Gulf Navy Dark** | `#142840` | rgb(20, 40, 64) | Button hover states, darker accents, footer |
| **Gulf Navy Light** | `#2D5380` | rgb(45, 83, 128) | Lighter accents, tinted backgrounds |

**Why Navy?**
Navy conveys trust and stability (think banking, insurance). It's professional yet warm enough for a family business. The "Gulf Coast Modern" blue ties directly to Louisiana's coastal waters.

[Color Swatch: Navy #1E3A5F — Large rectangle with HEX/RGB values]

### Secondary Colors

| Color Name | HEX Value | RGB | Usage |
|------------|-----------|-----|-------|
| **Action Red** | `#D32F2F` | rgb(211, 47, 47) | CTA buttons, urgency messages, "Call Now" buttons |
| **Action Red Dark** | `#B02626` | rgb(176, 38, 38) | Red button hover states |
| **Action Red Light** | `#E05656` | rgb(224, 86, 86) | Red button active/pressed states |

**Why Red?**
Red creates urgency and action. Used sparingly for primary CTAs like "Call Now" and "Check Your Eligibility" (Restore Louisiana grants).

[Color Swatch: Red #D32F2F — Large rectangle]

### Accent Colors

| Color Name | HEX Value | RGB | Usage |
|------------|-----------|-----|-------|
| **Accent Blue** | `#4A90E2` | rgb(74, 144, 226) | Links, hover states, decorative accents, icons |
| **Accent Blue Dark** | `#3A7BC8` | rgb(58, 123, 200) | Accent hover states |

**Why Accent Blue?**
Lighter, friendlier blue balances the seriousness of navy. Great for interactive elements (links, tooltips).

[Color Swatch: Accent Blue #4A90E2 — Large rectangle]

### Neutral Scale (Stone Palette)

| Color Name | HEX Value | Usage |
|------------|-----------|-------|
| **Stone 50** | `#FAFAF9` | Page backgrounds, lightest surfaces |
| **Stone 100** | `#F5F5F4` | Card backgrounds, subtle dividers |
| **Stone 200** | `#E7E5E4` | Borders, dividers, input fields |
| **Stone 300** | `#D6D3D1` | Inactive elements, placeholder text |
| **Stone 400** | `#A8A29E` | Disabled buttons, secondary text |
| **Stone 500** | `#78716C` | Tertiary text, subtle icons |
| **Stone 600** | `#57534E` | Secondary text, captions |
| **Stone 700** | `#44403C` | Body text (high contrast) |
| **Stone 800** | `#292524` | Dark text, near-black backgrounds |
| **Stone 900** | `#1C1917` | Headings, primary text, maximum contrast |

**Why Stone?**
Stone is warmer than pure gray — evokes natural materials (homes, foundations). More inviting than cold grays.

[Color Palette: Stone 50 → Stone 900 gradient]

### Semantic Colors

| Color Name | HEX Value | Usage |
|------------|-----------|-------|
| **Success Green** | `#10B981` | Confirmation messages, "In Stock" badges, checkmarks |
| **Warning Amber** | `#F59E0B` | Alerts, "Limited Time" labels, caution messages |
| **Error Red** | `#EF4444` | Form validation errors, destructive actions |
| **Info Blue** | `#3B82F6` | Informational messages, tooltips, help text |

### Accessibility Notes

**WCAG AA Compliance (Minimum 4.5:1 contrast ratio for text):**

✅ **Safe Combinations:**
- Navy (#1E3A5F) text on White (#FFFFFF) = 9.2:1 ✓
- Stone 900 (#1C1917) text on White = 19.7:1 ✓
- White text on Navy (#1E3A5F) = 9.2:1 ✓
- Stone 700 (#44403C) text on White = 11.8:1 ✓

❌ **Avoid These Combinations:**
- Accent Blue (#4A90E2) text on White = 3.4:1 ❌ (Use for icons only, not body text)
- Stone 300 (#D6D3D1) text on White = 1.6:1 ❌ (Placeholder text only)

→ **Implementation Notes:**
Always test color combinations with a contrast checker (WebAIM, Stark plugin). For small text (under 18px), maintain 4.5:1 minimum. For large text (18px+ or 14px+ bold), 3:1 is acceptable.

---

## 4. Typography System

### Heading Font: Outfit

**Font Family:** Outfit
**Weights Used:** Bold (700), Semibold (600)
**Source:** Google Fonts
**Fallback Stack:** `'Outfit', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`

**Usage:**
- Page titles (H1, H2)
- Section headers (H3, H4)
- Button labels
- Card titles
- Navigation menu items
- Hero text

**Character Traits:**
- Geometric sans-serif
- Wide letter spacing (tracking)
- Strong vertical emphasis
- Modern, bold presence

**Letter-Spacing Rules:**
- Display/H1: `-0.02em` (tighter)
- H2: `-0.01em`
- H3-H6: `0` (default)

[Font Sample: "Your Dream Home Awaits" in Outfit Bold 56px]

### Body Font: Plus Jakarta Sans

**Font Family:** Plus Jakarta Sans
**Weights Used:** Regular (400), Medium (500), Semibold (600)
**Source:** Google Fonts
**Fallback Stack:** `'Plus Jakarta Sans', system-ui, sans-serif`

**Usage:**
- Body text / paragraphs
- Form labels and inputs
- Descriptions and captions
- Footer text
- Meta information (dates, locations)

**Character Traits:**
- Humanist sans-serif
- Warm, friendly curves
- Excellent readability at small sizes
- Slightly rounded terminals

**Line-Height Rules:**
- Headings (Outfit): `1.2–1.4`
- Body (Plus Jakarta Sans): `1.6–1.7`

[Font Sample: "Explore our most popular models, ready for delivery across Southeast Louisiana." in Plus Jakarta Sans Regular 16px]

### Type Scale

| Element | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing |
|---------|--------------|-------------|--------|-------------|----------------|
| **Display** | 64px | 48px | Bold (700) | 1.1 | -0.02em |
| **H1** | 56px | 40px | Bold (700) | 1.2 | -0.01em |
| **H2** | 48px | 36px | Semibold (600) | 1.25 | -0.01em |
| **H3** | 36px | 28px | Semibold (600) | 1.3 | 0 |
| **H4** | 28px | 24px | Semibold (600) | 1.4 | 0 |
| **Body Large** | 18px | 16px | Regular (400) | 1.7 | 0 |
| **Body** | 16px | 14px | Regular (400) | 1.6 | 0 |
| **Body Small** | 14px | 12px | Regular (400) | 1.5 | 0 |
| **Caption** | 12px | 11px | Medium (500) | 1.4 | 0.02em |

### Typography in Action

**Hero Section Example:**
```
H1 (56px Bold): "New Single-Wide Homes For Sale"
Body (18px Regular): "Explore our most popular models, ready for delivery."
```

**Card Example:**
```
H3 (36px Semibold): "The Granite — Franklin Homes"
Body (16px Regular): "3 bedrooms, 2 bathrooms, 1,200 sqft"
```

→ **Implementation Notes:**
Load fonts asynchronously using `preload` to avoid render-blocking. Use `font-display: swap` to show fallback fonts immediately. Always specify weights explicitly to avoid faux-bold rendering.

---

## 5. Design Tokens (Developer-Ready)

### CSS Variables Block

Copy-paste this into your global stylesheet:

```css
:root {
  /* ===========================
     BRAND COLORS
     =========================== */

  /* Primary (Navy) */
  --color-primary: #1E3A5F;
  --color-primary-dark: #142840;
  --color-primary-light: #2D5380;

  /* Secondary (Red) */
  --color-secondary: #D32F2F;
  --color-secondary-dark: #B02626;
  --color-secondary-light: #E05656;

  /* Accent (Blue) */
  --color-accent: #4A90E2;
  --color-accent-dark: #3A7BC8;

  /* Neutrals (Stone) */
  --color-stone-50: #FAFAF9;
  --color-stone-100: #F5F5F4;
  --color-stone-200: #E7E5E4;
  --color-stone-300: #D6D3D1;
  --color-stone-400: #A8A29E;
  --color-stone-500: #78716C;
  --color-stone-600: #57534E;
  --color-stone-700: #44403C;
  --color-stone-800: #292524;
  --color-stone-900: #1C1917;

  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* ===========================
     SPACING SCALE
     =========================== */

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* ===========================
     BORDER RADIUS
     =========================== */

  --radius-sm: 8px;   /* Inputs, small buttons */
  --radius-md: 12px;  /* Buttons, badges */
  --radius-lg: 16px;  /* Cards */
  --radius-xl: 24px;  /* Hero sections, large containers */
  --radius-full: 9999px; /* Pills, circular elements */

  /* ===========================
     SHADOWS
     =========================== */

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-primary: 0 4px 14px rgba(30, 58, 95, 0.4);
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 20px 40px rgba(0, 0, 0, 0.15);

  /* ===========================
     ANIMATION TIMING
     =========================== */

  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ===========================
     TYPOGRAPHY
     =========================== */

  --font-heading: 'Outfit', system-ui, -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  --font-size-display: 64px;
  --font-size-h1: 56px;
  --font-size-h2: 48px;
  --font-size-h3: 36px;
  --font-size-h4: 24px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-body-sm: 14px;
}
```

### Tailwind Config Snippet

Add this to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          dark: '#142840',
          light: '#2D5380',
        },
        secondary: {
          DEFAULT: '#D32F2F',
          dark: '#B02626',
          light: '#E05656',
        },
        accent: {
          DEFAULT: '#4A90E2',
          dark: '#3A7BC8',
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',  // 72px
        20: '5rem',    // 80px
        22: '5.5rem',  // 88px
        24: '6rem',    // 96px
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
        primary: '0 4px 14px rgba(30, 58, 95, 0.4)',
      },
    },
  },
};
```

→ **Implementation Notes:**
CSS variables allow runtime theming. Tailwind config provides build-time utility classes. Use both for maximum flexibility.

---

## 6. Component Style Guardrails

### Buttons

#### Primary Button (Navy)
```css
/* Navy background, white text, rounded corners */
background: #1E3A5F;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 12px;
font-weight: 600;
box-shadow: 0 4px 14px rgba(30, 58, 95, 0.4);
transition: all 300ms ease;

/* Hover State */
hover {
  background: #142840;
  box-shadow: 0 6px 20px rgba(30, 58, 95, 0.5);
  transform: translateY(-2px);
}

/* Active/Pressed State */
active {
  transform: scale(0.98);
}

/* Disabled State */
disabled {
  background: #A8A29E;
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Secondary Button (Red)
```css
background: #D32F2F;
color: #FFFFFF;
/* All other properties same as Primary */
```

#### Ghost/Outline Button
```css
background: transparent;
color: #1E3A5F;
border: 2px solid #E7E5E4;
padding: 12px 24px;
border-radius: 12px;

hover {
  border-color: #1E3A5F;
  background: rgba(30, 58, 95, 0.05);
}
```

**Button Sizing:**
- **Small:** `padding: 8px 16px; font-size: 14px;`
- **Medium (Default):** `padding: 12px 24px; font-size: 16px;`
- **Large:** `padding: 16px 32px; font-size: 18px;`

### Cards

```css
/* Home Card, Feature Card, etc. */
background: #FFFFFF;
border-radius: 16px;
padding: 24px;
border: 1px solid #E7E5E4;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
transition: all 300ms ease;

hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
```

**Card Spacing:**
- **Padding:** 24px–32px (comfortable breathing room)
- **Gap Between Cards:** 24px (mobile), 32px (desktop)

### Links

```css
/* Default Link */
color: #1E3A5F;
text-decoration: none;
font-weight: 500;

hover {
  text-decoration: underline;
  color: #142840;
}

/* Focus State (Keyboard Navigation) */
focus {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Icons

**Icon Library:** Lucide React (consistent stroke-based icons)

**Stroke Weight:** 2px (consistent across all icons)
**Style:** Outline (not filled) for navigation and UI elements
**Filled Icons:** Use for CTAs and emphasis (e.g., Star icons in testimonials)

**Size Scale:**
- **Small:** 16px (inline with text)
- **Medium:** 20px (buttons, cards)
- **Large:** 24px (section icons)
- **Extra Large:** 32px (hero sections, feature blocks)

**Color:**
- Navigation icons: Stone 700 (#44403C)
- Interactive icons: Primary (#1E3A5F) or Accent (#4A90E2)
- Status icons: Semantic colors (green for success, red for error)

### Dividers & Borders

```css
/* Horizontal Divider */
border-top: 1px solid #E7E5E4; /* Stone 200 */
margin: 24px 0;

/* Card Border */
border: 1px solid #E7E5E4;

/* Input Border */
border: 1px solid #D6D3D1; /* Stone 300 */
focus {
  border-color: #4A90E2; /* Accent Blue */
}
```

→ **Implementation Notes:**
Consistent border-radius (8px, 12px, 16px, 24px) creates visual rhythm. Shadows are layered (small → large) for depth perception. All transitions use 300ms for smooth, non-jarring interactions.

---

## 7. Photography & Imagery Style

### Home Photos (Inventory)

**Requirements:**
- **Resolution:** 1920px wide minimum (for desktop hero images)
- **Aspect Ratio:** 16:9 (landscape) or 4:3 (vertical detail shots)
- **Lighting:** Well-lit, natural daylight (avoid harsh shadows)
- **Composition:** Show full rooms (wide angles), highlight premium features

**Content:**
- ✅ Clean, staged interiors (remove clutter)
- ✅ Exterior shots showing full home + landscaping
- ✅ Detail shots (kitchen counters, bathroom fixtures, flooring)
- ✅ Before/after (if applicable for renovations)
- ❌ No dark or underexposed photos
- ❌ No distorted wide-angle lens effects

[Visual Placeholder: Before/After examples of good vs. poor home photography]

### Team Photos (About Page)

**Style:**
- Candid, professional (not stiff corporate headshots)
- Show personality (smiling, approachable)
- Uniform backgrounds (office, showroom, in front of homes)

**Format:**
- Square crop (1:1) for team member portraits
- Group photos: Horizontal (16:9)

### Hero Videos

**Specifications:**
- **Resolution:** 1280×720 (720p) optimized for web
- **Duration:** 15–30 seconds (looping)
- **File Size:** Under 5 MB per 30-second clip
- **Format:** MP4 (H.264 codec + AAC audio)
- **Compression:** CRF 28 (high quality, web-optimized)

**Content:**
- Slow panning shots of homes (interior/exterior)
- Smooth, cinematic camera movements (gimbal or tripod)
- Natural lighting (golden hour preferred)

**Technical:**
- Use `preload="metadata"` to prevent autoload on mobile
- Always include fallback poster image
- No audio required (videos are muted and looped)

[Visual Placeholder: Screenshot of hero video with overlay gradient]

### Overlays & Filters

**Gradient Overlays (for text legibility on images/videos):**
```css
/* Dark gradient bottom (for white text) */
background: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.6) 100%
);

/* Full dark overlay */
background: rgba(30, 58, 95, 0.4); /* Primary color at 40% opacity */
```

**Filters:**
- **No Instagram-style filters** (keep photography natural)
- **Slight warm tone acceptable** for Louisiana feel (1.05 warmth)
- **Contrast boost:** +5% maximum

### Stock Photography Rules

**When to use stock photos:**
- Generic lifestyle shots (families, handshakes, keys)
- Abstract backgrounds (textures, patterns)

**What to avoid:**
- Generic homes that don't match inventory
- Overused stock models
- Photos with watermarks or low resolution

→ **Implementation Notes:**
All images should be optimized (compressed) before upload. Use WebP format for modern browsers with JPEG fallback. Lazy-load images below the fold using `loading="lazy"`.

---

## 8. Voice & Messaging (Brand Tone)

### Trustworthy

**Characteristics:**
- Transparent pricing (no hidden fees)
- Honest about timelines and processes
- No hype or exaggeration

**Example Messaging:**
> "We've been serving Southeast Louisiana families for over 30 years. Our BBB accreditation and LHMA membership reflect our commitment to ethical business practices."

### Warm & Family-Oriented

**Characteristics:**
- Conversational (not corporate jargon)
- Personal stories (owners by name: "Scott and Lisa")
- Community-focused (local references)

**Example Messaging:**
> "From our family to yours, we're here to help you find the perfect home. As a Louisiana-owned business, we understand what it means to put down roots in this community."

### Professional & Knowledgeable

**Characteristics:**
- Expert guidance (financing, permits, codes)
- Industry terminology explained simply
- Detailed specifications (sqft, dimensions, materials)

**Example Messaging:**
> "Our team handles all permits, site prep, and delivery logistics. We're experts in Louisiana's building codes and flood zone requirements, so you don't have to be."

### Local & Louisiana-Rooted

**Characteristics:**
- References to Southeast Louisiana (Houma, Thibodaux, Lafourche Parish)
- Hurricane preparedness and Restore Louisiana grants
- Bayou culture and community pride

**Example Messaging:**
> "Serving Houma, Thibodaux, and all of Southeast Louisiana since 1995. We're not just selling homes—we're helping neighbors rebuild after Hurricane Francine."

### Accessible (Not Pretentious)

**Characteristics:**
- Explain complex topics simply (financing, modular vs. manufactured)
- No industry gatekeeping ("You don't need perfect credit")
- Welcoming to first-time buyers

**Example Messaging:**
> "Don't let financing worries hold you back. Our in-house team works with all credit levels to find a solution that fits your budget."

### Tone Matrix

| Context | Tone | Example |
|---------|------|---------|
| **Homepage Hero** | Bold, Welcoming | "New Single-Wide Homes For Sale — Serving Southeast Louisiana" |
| **Product Descriptions** | Detailed, Helpful | "The Granite by Franklin Homes: 1,200 sqft, 3 bed/2 bath, energy-efficient appliances included" |
| **CTAs (Call to Action)** | Urgent, Clear | "Call Now: (985) 876-0222 — Speak with a Home Specialist Today" |
| **About Page** | Warm, Personal | "Gulf South Homes is a family-owned business. Scott and Lisa have been helping Louisiana families find affordable homes since 1995." |
| **Error Messages** | Helpful, Apologetic | "Oops! We couldn't find that page. Let us help you find what you're looking for." |

→ **Implementation Notes:**
Tone should match the user's emotional state. High-intent users (Restore Louisiana grants) need urgency. Browsers need education. Always end with a clear next step (CTA).

---

## 9. Implementation Notes for Designers

### WCAG AA Accessibility Compliance

✅ **All color combinations tested for contrast:**
- Navy (#1E3A5F) on White = 9.2:1 ✓
- Stone 900 (#1C1917) on White = 19.7:1 ✓
- White on Navy = 9.2:1 ✓

✅ **Focus states** on all interactive elements (buttons, links, inputs):
- 2px outline in Accent Blue (#4A90E2)
- 2px offset for visibility

✅ **Alt text** on all images:
- Descriptive (not "image1.jpg")
- Context-aware ("Gulf South Homes team at 2025 Bayou's Best Awards ceremony")

### Font Loading Strategy

**Current Implementation:**
- Google Fonts loaded asynchronously
- `font-display: swap` to prevent FOIT (Flash of Invisible Text)
- Fallback: system-ui ensures instant rendering

**Designer Action:**
- Always specify font weights explicitly (400, 500, 600, 700)
- Avoid faux-bold (browser-generated bold on Regular weight)

### Shadow System Design

**Scientifically Designed (Not Random):**
- Small shadows: `0 1px 2px` (subtle depth)
- Medium shadows: `0 4px 6px` (cards, buttons)
- Large shadows: `0 10px 15px` (modals, dropdowns)
- Extra Large: `0 20px 25px` (hero cards, premium elements)

**Layering:**
- Base shadow + accent shadow = depth perception
- Example: `0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)`

### Spacing Grid (4px + 8px System)

**Why 4px/8px?**
- Scalable (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- Divisible by 2 (easy to center)
- Industry-standard (iOS, Material Design)

**Usage:**
- Small gaps: 8px, 12px
- Medium gaps: 16px, 24px
- Large gaps: 32px, 48px
- Section spacing: 64px, 80px, 96px

### Animation Performance

**Web Performance Best Practices:**
- Animate `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left` (causes reflow)
- Use `will-change: transform` for elements that will animate
- Timing: 300ms for most interactions, 500ms for complex transitions

### Responsive Breakpoints

| Breakpoint | Width | Use Case |
|------------|-------|----------|
| **Mobile (sm)** | 640px | Phones, small tablets |
| **Tablet (md)** | 768px | Tablets, small laptops |
| **Desktop (lg)** | 1024px | Laptops, small desktops |
| **Large Desktop (xl)** | 1280px | Desktops, large monitors |
| **Extra Large (2xl)** | 1440px | Max content width (container) |

**Design for Mobile First:**
- Start with 375px width (iPhone SE)
- Scale up progressively (not down from desktop)

→ **Implementation Notes:**
All components tested on Chrome, Safari, Firefox, Edge. Video backgrounds use fallback poster images for older browsers.

---

## 10. Usage Scenarios (Where Brand Shows Up)

### 1. Website (Primary Brand Touchpoint)

**Full Brand Identity Applied:**
- Hero sections with navy overlays and white text
- Primary buttons (navy) for main CTAs
- Secondary buttons (red) for urgent actions
- Cards with 16px border-radius and shadow-card
- Outfit font for all headings
- Plus Jakarta Sans for body text

**Key Pages:**
- Homepage (hero video, featured homes carousel)
- Catalog pages (Single-Wide, Double-Wide, Modular)
- About page (team photos, company story)
- Contact page (GoHighLevel form embed)

### 2. Social Media

**Platforms:**
- Facebook, Instagram, LinkedIn, YouTube

**Brand Assets Needed:**
- Profile image: Square logo (1200×1200px)
- Cover photos: Horizontal (1920×1080px) with navy gradient overlay
- Post templates: Consistent color palette, Outfit font for headlines

**Instagram Story Templates:**
- 1080×1920px vertical
- Navy background with white text
- Logo in top corner (icon-only variant)

### 3. Email Marketing

**Brand Elements:**
- Header: Full-color logo (horizontal)
- Accent color: Navy for headers, Red for CTAs
- Button styling: Same as website (12px radius, shadow)

**Typography:**
- Email-safe fonts: Arial (fallback for Outfit), Georgia (fallback for Plus Jakarta Sans)
- Use web-safe alternatives, then provide web-embedded fonts

### 4. Print Collateral

**Business Cards:**
- Logo: Full-color horizontal (front)
- Contact info: Plus Jakarta Sans (back)
- Navy and red accent elements

**Brochures (Tri-Fold, Flyers):**
- Convert HEX to CMYK for print-safe colors
  - Navy #1E3A5F → CMYK: C=100 M=75 Y=20 K=30
  - Red #D32F2F → CMYK: C=0 M=85 Y=80 K=0
- Print resolution: 300 DPI minimum
- Bleed: 0.125" (for full-bleed designs)

### 5. Ads (Google Ads, Facebook Ads)

**Display Ads:**
- Simplified logo (icon + wordmark, no tagline)
- High-contrast (navy + white or red + white)
- Clear CTA button ("Call Now", "View Homes")

**Responsive Sizes:**
- 300×250 (Medium Rectangle)
- 728×90 (Leaderboard)
- 1200×628 (Facebook Feed)

### 6. CRM & Forms (GoHighLevel Integration)

**Form Styling:**
- Match website button styles (navy primary, red secondary)
- Input fields: 8px border-radius, Stone 300 borders
- Submit button: Navy background, 12px radius, shadow-primary

**Embedded Forms:**
- Contact form (homepage, contact page)
- Home inquiry form (individual home pages)

---

## Summary & Next Steps

### What This Guide Provides

✅ **Strategic Foundation** — Why navy, red, and accent blue were chosen
✅ **Logo System** — Variants, sizing, clearspace, do's/don'ts
✅ **Color Palette** — Primary, secondary, accent, neutral, semantic colors
✅ **Typography** — Outfit (headings), Plus Jakarta Sans (body), type scale
✅ **Design Tokens** — CSS variables and Tailwind config (copy-paste ready)
✅ **Component Styles** — Buttons, cards, links, icons, dividers
✅ **Photography Guide** — Home photos, team photos, hero videos
✅ **Voice & Tone** — Messaging guidelines for trustworthy, warm, professional communication
✅ **Implementation Notes** — Accessibility, performance, responsive design
✅ **Usage Scenarios** — Website, social media, email, print, ads, CRM

### For Designers

**Create These Assets:**
1. Logo variants (horizontal, vertical, icon-only, 1-color dark/light)
2. Social media templates (Instagram stories, Facebook covers)
3. Email header graphics
4. Print-ready business cards and brochures

### For Developers

**Implementation Checklist:**
- [ ] Load Outfit and Plus Jakarta Sans from Google Fonts
- [ ] Add CSS variables to global stylesheet
- [ ] Update Tailwind config with brand colors and spacing
- [ ] Ensure all buttons use defined styles (primary, secondary, ghost)
- [ ] Test color contrast ratios (WCAG AA minimum)
- [ ] Optimize images (WebP with JPEG fallback)
- [ ] Lazy-load images below the fold
- [ ] Test on mobile, tablet, desktop breakpoints

### For Content Team

**Messaging Guidelines:**
- Use trustworthy, transparent language (no hype)
- Reference Louisiana localities (Houma, Thibodaux)
- Explain complex topics simply (financing, permits)
- Always include clear CTAs ("Call Now", "View Homes")

---

**Document Version:** 1.0
**Last Updated:** December 27, 2025
**Prepared For:** Gulf South Homes Inc.
**Contact:** 1986 LA-182, Houma, LA 70364 | (985) 876-0222

---

*This brand identity guide is a living document. Update as the brand evolves, but maintain core elements (navy, red, Outfit, Plus Jakarta Sans) for consistency.*
