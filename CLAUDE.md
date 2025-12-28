# Gulf South Homes - AI Agent Context

This file provides context for AI agents (Claude, Cursor, etc.) working on this project.

---

## Project Overview

Modern website for **Gulf South Homes Inc.** - Louisiana's trusted manufactured and modular home dealer since 1995.

- **Location:** 1986 Highway 182, Houma, LA 70364
- **Phone:** (985) 876-0222
- **Business:** Manufactured homes, modular homes, financing, parts, service

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router 7 | Client-side routing |
| shadcn/ui | Component library |
| Lucide React | Icons |
| Vercel | Deployment |
| GoHighLevel | CRM, forms, chat widget |

---

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run preview  # Preview production build
```

**Dev Server:** Runs on `http://localhost:3000` (configured in vite.config.ts)

---

## Directory Structure

```
├── components/          # Reusable components (Button, Navbar, Footer, etc.)
├── data/               # Home listings, manufacturers data
├── hooks/              # Custom hooks (useClickOutside, useFocusTrap, etc.)
├── inventory/          # Inventory management system (guides, templates, agent)
├── pages/              # Route pages (Home, Contact, SingleWide, etc.)
├── public/             # Static assets
│   └── assets/
│       ├── images/     # Home photos, logos, team photos
│       └── video/      # Hero videos
├── memory/             # Project constitution (spec-kit)
├── specs/              # Feature specifications (spec-kit)
├── templates/          # Document templates (spec-kit)
├── shadcn agents/      # Agent definitions for UI work
├── App.tsx             # Root component with routes
├── constants.ts        # COMPANY_INFO, TESTIMONIALS
├── types.ts            # TypeScript interfaces
└── index.html          # Entry point (includes GHL scripts)
```

---

## Key Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with featured homes |
| `/single-wide` | SingleWide | Single-wide home catalog |
| `/double-wide` | DoubleWide | Double-wide home catalog |
| `/modular-homes` | Modular | Modular home catalog |
| `/catalog` | Catalog | All homes (legacy) |
| `/manufacturers` | Manufacturers | Browse by brand |
| `/contact` | Contact | Contact form + location |
| `/about` | About | Company story, team |
| `/parts` | Parts | Parts store |
| `/how-it-works` | HowItWorks | Buying process |
| `/what-we-offer` | WhatWeOffer | Services hub |

---

## Agent Workflow

### For Complex Features

1. **Spec** → Create specification in `specs/` directory
2. **Plan** → Use `/speckit.plan` to generate implementation plan
3. **Tasks** → Use `/speckit.tasks` to break down into actionable items
4. **Implement** → Use `/speckit.implement` to execute

### For UI Work

1. **Analyze** → Use `shadcn-requirements-analyzer` agent
2. **Research** → Use `shadcn-component-researcher` agent
3. **Build** → Use `shadcn-implementation-builder` agent
4. **Quick Help** → Use `shadcn-quick-helper` for small questions

### For Inventory Management

**Natural Language Commands (Simple & Fast):**

```bash
# Add homes
"Add The [Home Name] from [Manufacturer] folder"
"Add all homes from the [Manufacturer] folder"

# Remove homes
"Remove The [Home1], The [Home2], and The [Home3] from inventory"
"Archive The [Home Name] - it's sold"

# Update homes
"Update The [Home Name] price to $XX,XXX"
"Mark The [Home Name] as featured"
"Add 5 new photos to The [Home Name] gallery"
```

**Image Folder Structure:**
```
public/assets/images/single wide homes/
├── [Manufacturer Name]/
│   └── [Home Model Name]/
│       ├── Info.txt           # Required: Specs and details
│       ├── cover photo.jpg    # Optional: Main image (or first gallery image)
│       └── gallery_*.jpg      # Gallery images
```

**Info.txt Format:**
```txt
[Manufacturer Name]
[Home Model Name]
[X] bedrooms / [X] bathrooms

In-Stock and Ready to Tour

Custom-Build Available

[Width]' X [Length]'
[Square Footage] sqft (optional)
```

**Workflow:**
1. Organize photos in manufacturer/model folders
2. Create Info.txt with specs
3. Use natural language command to AI
4. AI reads Info.txt, generates copy, adds to website
5. Review preview, approve, deploy

**Documentation:**
- `inventory/README.md` - Quick start guide
- `inventory/QUICK-COMMANDS.md` - Natural language commands
- `inventory/ongoing-management.md` - Long-term maintenance
- `inventory/add-home-checklist.md` - Detailed step-by-step

---

## GoHighLevel Integration

### Forms

- **Script:** Loaded globally in `index.html`
- **Contact Form ID:** `ZRYIIk3TWJ6OI96TkkBg`
- **Home Inquiry Form ID:** `9bhfQTzobvZQx4nLQjRc`
- **CRM Domain:** `crm.gshforms.com`

### Chat Widget

- **Widget ID:** `6940899ff258cf30de629683`
- Loaded via `leadconnectorhq.com`

### Webhook Fields

Use full path syntax:
```
{{inboundWebhookRequest.fieldName}}
```

---

## Important Notes

### Vercel Deployment

- Use `/:path*` rewrite pattern (not complex regex)
- Static files are served automatically before rewrites
- Build command: `npm run build`
- Output: `dist`

### Design System

- **Primary color:** `#1E3A5F` (Gulf Navy Blue) - NOT emerald
- **Secondary color:** `#D32F2F` (CTA Red)
- **Accent color:** `#4A90E2` (Bright Blue)
- **Fonts:** Outfit (headlines, bold 700/semibold 600), Plus Jakarta Sans (body, regular 400/medium 500)
- **Use CSS variables** for all colors - no hardcoded HEX values in components
- All colors defined in `index.css` lines 13-46 and tailwind config
- **Important:** Replace hardcoded HEX with Tailwind tokens:
  - ❌ `text-[#D32F2F]`
  - ✅ `text-red-600` or `hover:text-red-600`

### Performance

**Video Assets (OPTIMIZED Dec 2024):**
- ✅ All videos optimized: 249 MB → 17 MB (93% reduction)
- ✅ Homepage loads 90% faster on mobile (37 MB → 2.5 MB)
- ⚠️ **IMPORTANT:** Video filenames must NOT contain special characters (parentheses, spaces)
- Videos are optimized to 720p, H.264, CRF 28
- Backup of original videos: `video-backups/`
- See: `VIDEO_OPTIMIZATION_REPORT.md` for details

**Asset Guidelines:**
- Lazy-load images below the fold
- Videos use `preload="metadata"` to prevent autoload on mobile
- Scroll animations via Intersection Observer
- Keep video files under 5 MB per 30-second clip
- Use descriptive, URL-safe filenames (e.g., `homepage-hero.mp4`)

**Video Overlay Styling (Dec 27, 2024):**
- Video hero overlays use `.hero-overlay` CSS class (index.css lines 441-449)
- Current overlay darkness: **30%** (0.2-0.3 at top, 0.7-0.9 at bottom)
- Gradient: `from-black/20 via-black/30 to-black/90` for balanced readability
- Ensures text is readable while maintaining visual impact of video backgrounds

---

## Component Patterns

### Hero Sections

```tsx
<section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
  <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover">
    <source src="/assets/video/..." type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 w-full max-w-4xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Scroll Animations

```tsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8');
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
```

---

## Quality Checklist

Before completion, verify:

- [ ] Build passes (`npm run build`)
- [ ] Links work (internal + external)
- [ ] Console is clean
- [ ] Mobile + Desktop tested
- [ ] Forms submit to GoHighLevel
- [ ] No CLS or JS errors

---

## Video Asset Management

### Adding New Videos

When adding hero videos to pages:

1. **Optimize before adding:**
   ```bash
   ffmpeg -i original.mp4 \
     -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" \
     -c:v libx264 -crf 28 -preset medium \
     -movflags +faststart \
     -c:a aac -b:a 128k \
     optimized-video.mp4
   ```

2. **Naming convention:**
   - Use descriptive, lowercase names with hyphens
   - ✅ Good: `homepage-hero.mp4`, `doublewide-hero.mp4`, `contact-hero.mp4`
   - ❌ Bad: `video (1).mp4`, `new video final.mp4`, `grok-video-05589592.mp4`

3. **File specifications:**
   - Max resolution: 1280x720 (720p)
   - Target file size: < 5 MB per 30 seconds
   - Format: MP4 (H.264 + AAC)
   - Bitrate: CRF 28 (high quality, web-optimized)

4. **Location:**
   - Hero videos: `public/assets/video/videosworking/`
   - Verify path works: `http://localhost:3000/assets/video/videosworking/filename.mp4`

### Current Video Inventory

**Active videos** (all optimized, Dec 2024):
- `homepage-hero.mp4` (2.5 MB) - Home page
- `land.mp4` (1.0 MB) - Contact, LandHome pages
- `hero.mp4` (1.8 MB) - Catalog page
- `1204.mp4` (1.2 MB) - About page
- `doublewide-hero.mp4` (1.6 MB) - DoubleWide page
- `singewidehomepage.mp4` (1.2 MB) - SingleWide page
- `modularhomes.mp4` (1.8 MB) - Modular page
- `manufactures.mp4` (1.2 MB) - Manufacturers page
- `finance.mp4` (725 KB) - Insurance page
- `deal.mp4` (634 KB) - Deals page
- `hero headerpartstore.mp4` (4.9 MB) - Parts page

**Backup location:** `video-backups/` (original unoptimized files)

---

## Project State (Dec 27, 2024)

### Current Status
- ✅ All routes functional and tested
- ✅ GoHighLevel forms integrated with tabbed hours display
- ✅ Video assets optimized (93% size reduction)
- ✅ Build passing without errors
- ✅ Mobile-responsive design complete
- ✅ **JavaScript bundle optimized: 308 KB (63% reduction via code splitting)**
- ✅ Color system enforced (CSS variables only, no hardcoded HEX)
- ✅ Video overlay contrast balanced (30% darkness for readability)

### Known Issues
- None critical
- All issues from compliance audit have been resolved

### Recent Changes
- **Dec 27, 2024:** Critical brand compliance fixes
  - ✅ **Code Splitting:** Converted 21 eager page imports to lazy loading
    - Main bundle: 826 KB → 308 KB (63% smaller)
    - Pages load on-demand: 6-150 KB each
    - Mobile load time significantly improved
  - ✅ **Color System:** Replaced 12+ hardcoded HEX values with Tailwind tokens
    - Navbar.tsx: Updated all red color references to use Tailwind classes
    - GlassmorphicMapCard.tsx: Updated gradient and text colors to use design tokens
  - ✅ **Video Overlay:** Adjusted darkness to 30% (balanced readability + visual impact)
    - Updated `.hero-overlay` CSS gradient in index.css
    - Ensures white text readable on all video background frames
  - ✅ **Business Hours:** Updated constants.ts with separate salesHours and partsHours
    - Parts store: Closed Saturday, 8am-5pm Mon-Fri
    - Sales team: Open Saturday, 8am-5pm Mon-Sat
    - Updated GlassmorphicMapCard with tabbed interface (Sales | Parts tabs)
    - Updated Footer to display clear distinction between departments

- **Dec 24, 2024:** Video optimization completed
  - Removed 138 MB of duplicate videos
  - Optimized all 11 active videos
  - Fixed video filenames (removed special characters)
  - Updated `pages/Home.tsx` and `pages/DoubleWide.tsx` video paths

---

## Deployment Checklist

Before deploying to Vercel:

1. **Build Test:**
   ```bash
   npm run build
   ```
   - Must complete without errors
   - Check bundle size warnings

2. **Local Testing:**
   ```bash
   npm run preview
   ```
   - Test all routes
   - Verify videos load on all pages
   - Check forms submit correctly

3. **File Verification:**
   - Ensure no `.env` files are committed
   - Verify all video paths use web-safe filenames
   - Check that `dist/` is in `.gitignore`

4. **Vercel Config:**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework: Vite

---

## Environment Setup

### Required Variables (Create `.env.local`)

```bash
# Required for Gemini AI integration (vite.config.ts)
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Build-Time vs Runtime Variables

- **VITE_ prefix** → Exposed to browser (Vite convention)
  - Use for: Public API keys, feature flags
  - Example: `VITE_GEMINI_API_KEY`

- **No prefix** → Server-only (Node.js scripts, private)
  - Use for: Database credentials, private tokens
  - Never commits to git

### Hard-Coded Configuration

The following values are intentionally hard-coded in `index.html` and `constants.ts`:

| Value | Location | Purpose |
|-------|----------|---------|
| GoHighLevel Chat Widget ID | `index.html` | `6940899ff258cf30de629683` |
| Contact Form ID | `constants.ts` | `ZRYIIk3TWJ6OI96TkkBg` |
| Home Inquiry Form ID | `constants.ts` | `9bhfQTzobvZQx4nLQjRc` |
| CRM Domain | `constants.ts` | `crm.gshforms.com` |

**Note:** These are safe to hard-code since they're CRM identifiers (not secrets). However, consider moving to environment variables for easier configuration across environments.

### Setup Instructions

1. Create `.env.local` in project root
2. Add your Gemini API key
3. Never commit `.env.local` to git (already in .gitignore)
4. Verify in dev: `npm run dev` should load without errors

---

## Custom Hooks Reference

All custom hooks are in the `hooks/` directory. Here's what each does:

### Core UI Hooks

**useClickOutside** - `hooks/useClickOutside.ts`
- Close modals/dropdowns when user clicks outside
- Usage: `const ref = useClickOutside(() => setOpen(false))`
- Dependencies: None
- Return type: React.RefObject<HTMLElement>

**useFocusTrap** - `hooks/useFocusTrap.ts`
- Trap keyboard focus inside modals (accessibility)
- Usage: `useFocusTrap(containerRef)`
- Prevents tab key from leaving modal
- Return type: void

**useEscapeKey** - `hooks/useEscapeKey.ts`
- Handle Escape key events (close modals, cancel forms)
- Usage: `useEscapeKey(() => setOpen(false))`
- Only triggers when Escape is pressed
- Return type: void

### Filter & Data Hooks

**useHomeFilters** - `hooks/useHomeFilters.ts`
- Manage home catalog filtering state (price range, bedrooms, features)
- Usage: `const [filters, setFilters] = useHomeFilters()`
- Syncs with localStorage for persistence
- Returns: `[filters: HomeFilter, setFilters: (filters) => void]`

**useScrollRestoration** - `hooks/useScrollRestoration.ts`
- Restore scroll position when navigating back/forward
- Automatically triggered on route change
- Usage: Call in page layout once
- Return type: void

### Visual Interaction Hooks

**useSwipeGesture** - `hooks/useSwipeGesture.ts`
- Detect touch swipes on mobile (left/right/up/down)
- Usage: `const direction = useSwipeGesture(containerRef)`
- Used in carousels and galleries
- Returns: `'left' | 'right' | 'up' | 'down' | null`

**useLightbox** - `hooks/useLightbox.ts`
- Control image gallery lightbox (open/close/navigate)
- Usage: `const lightbox = useLightbox(imageArray)`
- Methods: `open(index)`, `close()`, `next()`, `prev()`
- Return type: LightboxInstance

**useScrollLock** - `hooks/useScrollLock.ts`
- Prevent body scroll when mobile menu is open
- Usage: `useScrollLock(isMenuOpen)`
- Prevents scroll-behind-modal effect on mobile
- Return type: void

### Theme Hook

**useTheme** - `hooks/useTheme.ts`
- Light/dark mode theme switching (future feature)
- Usage: `const [theme, setTheme] = useTheme()`
- Currently configured but not actively used
- Returns: `[theme: 'light' | 'dark', setTheme: (theme) => void]`

---

## Testing Strategy

### Current State (Dec 27, 2024)

❌ **No automated tests exist**
- Manual testing via `npm run preview`
- QA checklist in `QA_CHECKLIST_GOHIGHLEVEL_FORM.md`
- No CI/CD pipeline

### Recommended Testing Setup

#### 1. Unit Tests (Vitest + React Testing Library)

Install dependencies:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

Create `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
```

Example test (`components/Button.test.tsx`):
```tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

#### 2. End-to-End Tests (Playwright)

Install:
```bash
npm install --save-dev @playwright/test
```

Example test (`e2e/contact-form.spec.ts`):
```typescript
import { test, expect } from '@playwright/test'

test('contact form submits to GoHighLevel', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')
  await page.fill('input[name="name"]', 'John Doe')
  await page.fill('input[name="email"]', 'john@example.com')
  await page.click('button[type="submit"]')

  // Wait for GoHighLevel success confirmation
  await expect(page.locator('.success-message')).toBeVisible()
})
```

#### 3. Add to package.json Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

#### 4. CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/test.yml`:
```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run test
      - run: npm run build
      - run: npm run test:e2e
```

### Priority Testing

**High Priority (Test First):**
1. Form submissions to GoHighLevel
2. Home filters (price, bedrooms, features)
3. Image carousel/swipes
4. Mobile menu open/close
5. Video loading

**Medium Priority:**
1. Route navigation
2. Cookie consent flow
3. Search functionality

**Low Priority:**
1. Static content rendering
2. CSS animations

---

## Error Handling & Logging

### Current State

⚠️ **Minimal error handling**
- No global Error Boundary
- No 404 page (falls through to index.html)
- No error logging service
- Forms rely on GoHighLevel (no React-side error handling)

### Implementation Roadmap

#### 1. Error Boundary Component

Create `components/ErrorBoundary.tsx`:
```tsx
import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo)
    // Send to error logging service (Sentry, LogRocket, etc.)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Oops, Something Went Wrong</h1>
            <p className="text-gray-600 mb-6">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Go Home
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
```

Use in `App.tsx`:
```tsx
<ErrorBoundary>
  <Routes>
    {/* routes */}
  </Routes>
</ErrorBoundary>
```

#### 2. 404 Page

Create `pages/NotFound.tsx`:
```tsx
export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
        Go Home
      </a>
    </div>
  )
}
```

Add route in `App.tsx`:
```tsx
<Route path="*" element={<NotFound />} />
```

#### 3. Error Logging Service

**Option 1: Sentry (Recommended)**
```bash
npm install @sentry/react
```

Setup in `main.tsx`:
```tsx
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
})
```

**Option 2: LogRocket**
```bash
npm install logrocket
```

**Option 3: Custom Logger**
```tsx
const logError = (error: Error, context: string) => {
  console.error(`[${context}]`, error)

  // Send to server endpoint
  fetch('/api/logs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      error: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
    }),
  })
}
```

---

## Analytics & Tracking

### Current State (Dec 27, 2024)

✅ **Implemented:**
- Cookie consent banner (CookieConsentBanner.tsx)
- User preference storage (localStorage: `cookieConsent`)
- SMS consent tracking (SMSConsentCheckbox.tsx)

❌ **Missing:**
- Google Analytics 4 integration
- Conversion event tracking
- Form submission tracking
- CTA click tracking
- Heatmap/session replay

### Google Analytics 4 Implementation

#### 1. Create `.env.local`

```bash
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### 2. Install gtag

```bash
npm install @react-ga/core
```

#### 3. Initialize in `main.tsx`

```tsx
import ReactGA from 'react-ga4'

if (import.meta.env.VITE_GA4_MEASUREMENT_ID) {
  ReactGA.initialize(import.meta.env.VITE_GA4_MEASUREMENT_ID)
}
```

#### 4. Track Page Views

Create `hooks/useGoogleAnalytics.ts`:
```tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export function useGoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }, [location])
}
```

Use in `App.tsx`:
```tsx
export function App() {
  useGoogleAnalytics()
  // ... rest of component
}
```

#### 5. Track Events

```tsx
import ReactGA from 'react-ga4'

// When user clicks "View Home"
const handleViewHome = (homeId: string) => {
  ReactGA.event({
    category: 'engagement',
    action: 'view_home_details',
    label: homeId,
  })
}

// When user submits contact form
const handleFormSubmit = () => {
  ReactGA.event({
    category: 'conversion',
    action: 'contact_form_submit',
    label: 'contact_page',
  })
}

// When user clicks CTA button
const handleCTAClick = (buttonName: string) => {
  ReactGA.event({
    category: 'cta',
    action: 'click',
    label: buttonName,
  })
}
```

#### 6. Track Conversions (GoHighLevel Submissions)

Update `components/GoHighLevelForm.tsx`:
```tsx
const handleFormSubmit = async () => {
  // ... existing code

  // Track successful submission
  ReactGA.event({
    category: 'conversion',
    action: 'form_submit',
    label: formType, // 'contact' or 'home_inquiry'
    value: 1,
  })
}
```

### Analytics Roadmap

| Feature | Status | Impact |
|---------|--------|--------|
| Page view tracking | ❌ Not started | HIGH - See which pages convert |
| Form submissions | ❌ Not started | HIGH - Track lead generation |
| CTA clicks | ❌ Not started | HIGH - Measure engagement |
| Home detail views | ❌ Not started | MEDIUM - See which homes interest users |
| Filter usage | ❌ Not started | MEDIUM - Understand user behavior |
| Scroll depth | ❌ Not started | LOW - See content engagement |
| Session replay | ❌ Not started | MEDIUM - Understand user struggles (use Hotjar or Clarity) |

---

## Development Standards

### Code Quality Tools (Recommended Setup)

#### 1. ESLint (Code Quality)

```bash
npm install --save-dev eslint @eslint/js typescript-eslint
```

Create `eslint.config.js`:
```javascript
import js from '@eslint/js'
import ts from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
```

#### 2. Prettier (Code Formatting)

```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

#### 3. Husky (Pre-Commit Hooks)

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Create `.husky/pre-commit`:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

Create `.lintstagedrc`:
```json
{
  "*.{ts,tsx}": "eslint --fix",
  "*.{ts,tsx,json,md}": "prettier --write"
}
```

#### 4. Update package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint src/ --fix",
    "format": "prettier --write src/",
    "type-check": "tsc --noEmit"
  }
}
```

### Commit Message Convention

Follow conventional commits for clear history:

```
feat: Add home price filter to catalog
fix: Correct video loading on mobile Safari
docs: Update API documentation
style: Format code with Prettier
refactor: Extract carousel logic to custom hook
test: Add unit tests for useHomeFilters
chore: Upgrade React to v19.1
```

Pattern: `<type>: <description>`

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting (no logic change)
- `refactor` - Code restructuring (no behavior change)
- `test` - Test additions/modifications
- `chore` - Dependencies, build config

---

## Git Workflow

### Branch Naming Convention

```
feature/brief-description       # New feature
fix/brief-description           # Bug fix
docs/brief-description          # Documentation
refactor/brief-description      # Code refactoring
```

**Examples:**
- `feature/home-price-filter`
- `fix/carousel-mobile-crash`
- `docs/update-claude-md`
- `refactor/extract-carousel-hook`

### Pull Request Process

1. Create branch from `main`:
   ```bash
   git checkout -b feature/home-price-filter
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "feat: Add home price filter to catalog"
   ```

3. Run pre-flight checks locally:
   ```bash
   npm run lint
   npm run build
   npm run test
   ```

4. Push to remote:
   ```bash
   git push -u origin feature/home-price-filter
   ```

5. Create PR on GitHub
   - Title: `feat: Add home price filter to catalog`
   - Description: Explain what and why
   - Link related issues

6. Wait for approval and CI/CD to pass

7. Merge with "Squash and merge" (keeps history clean)

### Reverting Changes

If a PR needs to be reverted:
```bash
git revert <commit-hash>  # Creates new commit that undoes changes
```

---

## SEO & Dynamic Sitemap

### Current State (Dec 28, 2024)

✅ **Implemented:**
- Dynamic sitemap generation (`scripts/generate-sitemap.mjs`)
- Automatic generation on every build (`npm run build`)
- Includes all 14+ home detail pages (single-wide, double-wide, modular)
- Includes all 4 manufacturer pages (Franklin, Sunshine, Champion, Other)
- 36 total URLs indexed (18 main pages + 14 homes + 4 manufacturers)
- Open Graph meta tags in `index.html`
- Structured data in `seo-config.ts` with helper functions for dynamic pages
- Robots.txt with crawl rules

### How It Works

**File:** `scripts/generate-sitemap.mjs`

Automatically:
1. Reads `data/homes.ts` and extracts all homes
2. Groups homes by type (Single Wide, Double Wide, Modular)
3. Creates detail page URLs: `/single-wide-mobile-homes/{home-id}`
4. Generates manufacturer pages from home data
5. Combines with 18 static pages
6. Writes `public/sitemap.xml` with all URLs

**Build Process:**
```bash
npm run build  # Runs: generate-sitemap → vite build
```

The sitemap is regenerated automatically before every production build.

### Add New Homes to Sitemap

Simply add homes to `data/homes.ts` with proper `id`, `name`, `manufacturer`, and `type` fields. The next build will automatically:
- Extract the new home
- Assign the correct category (single-wide, double-wide, or modular)
- Add it to the sitemap
- Make it crawlable by Google

**Example:**
```typescript
{
  id: 'my-new-home',
  name: "The New Home",
  manufacturer: "Franklin",
  type: "Single Wide",
  // ... rest of fields
}
```

Next `npm run build` → automatically in sitemap ✅

### SEO Impact

**Before dynamic sitemap (Dec 27):**
- Google could only crawl 18 main pages
- 14+ homes invisible to search engines
- Missed opportunity for long-tail keywords

**After dynamic sitemap (Dec 28):**
- Google crawls all 36 pages (18 main + 14 homes + 4 manufacturers)
- Each home detail page optimized for: `[home name] [manufacturer] [type] Louisiana`
- Example: "Robertson by Franklin single wide home Louisiana"
- Manufacturer pages for: `Franklin homes Louisiana`, `Champion homes Louisiana`, etc.

### Next Steps

1. Submit updated sitemap to Google Search Console:
   - Go to: https://search.google.com/search-console
   - Select Gulf South Homes property
   - Sitemaps → Add new sitemap → `https://gulfsouthhomesinc.com/sitemap.xml`

2. Monitor crawl stats:
   - Google Search Console → Coverage report
   - Verify all 36 URLs are indexed (takes 1-2 weeks)

3. Monitor rankings:
   - Performance tab → Track keyword rankings
   - Target long-tail: "Sunshine Ivy Dream single wide Louisiana"
   - Current estimate: 20-50 additional keyword rankings possible

### Technical Details

**Sitemap Configuration:**
- 18 static pages: priority 0.5-1.0, daily-yearly changefreq
- Home detail pages: priority 0.6, monthly changefreq
- Manufacturer pages: priority 0.5, monthly changefreq

**Dynamic Functions (seo-config.ts):**
- `getHomeDetailSEO(homeName, type, manufacturer)` - Creates dynamic titles/descriptions
- `getDoubleWideDetailSEO(homeName, manufacturer)` - Double-wide specific SEO
- `getModularDetailSEO(homeName, manufacturer)` - Modular home specific SEO
- `createBreadcrumbSchema(breadcrumbs)` - Structured navigation data

---

## Secrets Management

### Current State

- GoHighLevel IDs hard-coded in HTML (acceptable for now)
- Gemini API key in `vite.config.ts` (visible in browser)

### Security Considerations

⚠️ **API Keys in Frontend:**
- Frontend API keys (like Gemini) have minimal security
- Use browser-safe API keys with rate limiting
- Never put backend secrets in Vite

✅ **Safe Hard-Coded Values:**
- GoHighLevel form IDs (not secrets, just identifiers)
- CRM domain (public information)
- Widget IDs (not sensitive)

### Future Improvements

#### 1. Move to Backend API

Create `server/api/ai.ts` (Node.js backend):
```typescript
// Private Gemini key stored on server
const GEMINI_KEY = process.env.GEMINI_API_KEY

export async function generateHomeDescription(specs: HomeSpecs) {
  const response = await fetch('https://generativelanguage.googleapis.com/...', {
    headers: {
      'Authorization': `Bearer ${GEMINI_KEY}`,
    },
  })
  return response.json()
}
```

Frontend calls server instead of Gemini directly:
```tsx
const description = await fetch('/api/generate-description', {
  method: 'POST',
  body: JSON.stringify(specs),
})
```

#### 2. Rotate GoHighLevel Credentials

Process for rotating credentials:
1. Create new form in GoHighLevel
2. Update `.env` with new IDs
3. Deploy to production
4. Monitor old form for bounces
5. Archive old form after 30 days

#### 3. Environment-Specific Secrets

Use Vercel secrets for production:
```bash
vercel env add VITE_GEMINI_API_KEY
vercel secrets add GEMINI_API_KEY  # Server-side
```

---

## PWA Features (Future)

### Current State

✅ **Manifest** - `public/site.webmanifest`
✅ **Icons** - 16x16, 32x32, 192x192, 512x512
❌ **Service Worker** - Not implemented
❌ **Offline Support** - Not available
❌ **Install Prompt** - Not shown

### Implementation Roadmap

#### 1. Service Worker

Create `public/sw.js`:
```javascript
const CACHE_NAME = 'gshhomes-v1'
const urlsToCache = ['/', '/index.html', '/offline.html']

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
```

Register in `main.tsx`:
```tsx
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

#### 2. Offline Page

Create `public/offline.html` with offline message

#### 3. Install Prompt

```tsx
const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  setDeferredPrompt(e)
})

const handleInstall = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult: any) => {
      setDeferredPrompt(null)
    })
  }
}
```

---

## References

- [Constitution](memory/constitution.md) - Project principles
- [Inventory System](inventory/) - Home inventory management (guides, templates, agent)
- [shadcn Agents](shadcn%20agents/) - UI agent definitions
- [QA Checklist](QA_CHECKLIST_GOHIGHLEVEL_FORM.md) - Form testing
- [Video Optimization Report](VIDEO_OPTIMIZATION_REPORT.md) - Performance details
- [Brand Identity Guide](BRAND_IDENTITY_GUIDE.md) - Complete brand system documentation
- [Brand Compliance Audit](BRAND_COMPLIANCE_AUDIT.md) - Detailed compliance assessment (78/100)

---

*For project standards and anti-patterns, see `memory/constitution.md`*


