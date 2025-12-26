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

- Primary color: `emerald-600` / `primary`
- Fonts: Outfit (headlines), Plus Jakarta Sans (body)
- Use existing Tailwind tokens; don't add new colors

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

## Project State (Dec 2024)

### Current Status
- ✅ All routes functional and tested
- ✅ GoHighLevel forms integrated
- ✅ Video assets optimized (93% size reduction)
- ✅ Build passing without errors
- ✅ Mobile-responsive design complete
- ⚠️ JavaScript bundle: 700 KB (consider code splitting for future optimization)

### Known Issues
- None critical
- Bundle size warning (>500 KB) - consider lazy loading routes in future

### Recent Changes
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

## References

- [Constitution](memory/constitution.md) - Project principles
- [shadcn Agents](shadcn%20agents/) - UI agent definitions
- [QA Checklist](QA_CHECKLIST_GOHIGHLEVEL_FORM.md) - Form testing
- [Video Optimization Report](VIDEO_OPTIMIZATION_REPORT.md) - Performance details

---

*For project standards and anti-patterns, see `memory/constitution.md`*


