# How It Works Page - Implementation Plan

**Project:** Gulf South Homes Website
**Page:** `/how-it-works` (HowItWorks.tsx)
**Status:** Ready for Implementation
**Target:** Client Handover
**Last Updated:** December 27, 2024

---

## Executive Summary

Replace placeholder step visuals with actual lifestyle photography showing real Louisiana families going through the home-buying process. The images are already staged at `public/assets/images/buyingprocess/` and need to be integrated into the existing 5-step process section. This is a simple image swap with lazy-loading optimization — no structural changes to layout or content.

---

## Design Updates

### What's Changing

**Current State (Lines 200-213):**
- Each step displays a placeholder card with centered icon and step number
- Background gradient: `from-stone-100 to-stone-200`
- Aspect ratio: `4/3`
- Content: Duplicated icon from the left column + step title

**New State:**
- Replace placeholder card with actual lifestyle photography
- Same aspect ratio (`4/3`) preserved for consistency
- Images lazy-loaded for performance
- Responsive srcset for mobile/desktop optimization
- Subtle overlay gradient to ensure readability if text overlays are added later

### Image Details

| Step | File Name | Subject Matter | Image Path |
|------|-----------|----------------|------------|
| **Step 1** | `step_1_choose_your_home.jpg` | Young couple outside their Louisiana home (bayou setting) | `/assets/images/buyingprocess/step_1_choose_your_home.jpg` |
| **Step 2** | `step_2_financing_and_budget.jpg` | Family having financing discussion in bright, windowed room | `/assets/images/buyingprocess/step_2_financing_and_budget.jpg` |
| **Step 3** | `step_3_land_and_permits.jpg` | Man evaluating land at sunset with stakes marked | `/assets/images/buyingprocess/step_3_land_and_permits.jpg` |
| **Step 4** | `step_4_delivery_and_setup.jpg` | Delivery truck with crew installing manufactured home | `/assets/images/buyingprocess/step_4_delivery_and_setup.jpg` |
| **Step 5** | `step_5_move_in.jpg` | Happy family with moving boxes outside their new home | `/assets/images/buyingprocess/step_5_move_in.jpg` |

---

## Implementation Tasks

### Task 1: Replace Placeholder Visual with Image Component

**File:** `pages/HowItWorks.tsx`
**Lines to Modify:** 200-213

**Current Code:**
```tsx
{/* Visual Side */}
<div className="flex-1 lg:sticky lg:top-24">
  <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 lg:p-10">
    <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
          {step.icon}
        </div>
        <p className="text-2xl font-bold text-stone-900">Step {step.number}</p>
        <p className="text-stone-600 mt-2">{step.title}</p>
      </div>
    </div>
  </div>
</div>
```

**New Code:**
```tsx
{/* Visual Side */}
<div className="flex-1 lg:sticky lg:top-24">
  <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
    <div className="aspect-[4/3] relative">
      <img
        src={`/assets/images/buyingprocess/step_${step.number}_${step.title.toLowerCase().replace(/\s+/g, '_').replace(/&/g, 'and')}.jpg`}
        alt={`${step.title} - Gulf South Homes buying process`}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      {/* Optional subtle overlay for future text overlay capability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </div>
  </div>
</div>
```

**Why This Works:**
- Dynamic image path construction based on step number and title
- Maintains existing card styling (white background, rounded corners, shadow)
- Removes padding (`p-8 lg:p-10`) so image fills the card edge-to-edge
- Adds `overflow-hidden` to parent card to clip image to rounded corners
- Lazy-loading via native `loading="lazy"` attribute
- Subtle gradient overlay for future-proofing (non-intrusive)

---

### Task 2: Update Step Data Structure (Optional Enhancement)

**File:** `pages/HowItWorks.tsx`
**Lines:** 22-92

**Current Structure:**
```tsx
const steps = [
  {
    number: 1,
    title: 'Choose Your Home',
    icon: <Home size={32} />,
    description: '...',
    details: [...],
    cta: { text: '...', link: '...' }
  },
  // ... 4 more steps
];
```

**Optional Enhanced Structure:**
```tsx
const steps = [
  {
    number: 1,
    title: 'Choose Your Home',
    slug: 'choose_your_home', // Explicit slug for image path
    icon: <Home size={32} />,
    description: '...',
    details: [...],
    cta: { text: '...', link: '...' },
    image: {
      src: '/assets/images/buyingprocess/step_1_choose_your_home.jpg',
      alt: 'Young couple outside their new Louisiana home with bayou in background'
    }
  },
  // ... 4 more steps
];
```

**Then Update Image Rendering:**
```tsx
<img
  src={step.image.src}
  alt={step.image.alt}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

**Decision:** This is **optional**. The dynamic path construction works fine, but explicit image paths are more maintainable if filenames change later.

---

### Task 3: Verify Image Optimization

**Location:** `public/assets/images/buyingprocess/`

**Check for:**
1. File size: Each image should be < 300 KB (ideally 100-200 KB)
2. Dimensions: 1200px wide × 900px tall (4:3 aspect ratio) max
3. Format: `.jpg` with 80-85% quality or `.webp` for modern browsers

**If Images Need Optimization:**

```bash
# Install sharp (if not already available)
npm install --save-dev sharp

# Create optimization script (optional)
# Or use online tools: TinyPNG, Squoosh, ImageOptim
```

**Manual Optimization via ImageMagick (if installed):**
```bash
cd public/assets/images/buyingprocess
magick mogrify -resize 1200x900^ -gravity center -extent 1200x900 -quality 85 *.jpg
```

**Current Files to Check:**
- `step_1_choose_your_home.jpg`
- `step_2_financing_and_budget.jpg`
- `step_3_land_and_permits.jpg`
- `step_4_delivery_and_setup.jpg`
- `step_5_move_in.jpg`

---

### Task 4: Add WebP Format Support (Optional Performance Boost)

**If Time Allows:**

Convert images to `.webp` format for ~30% smaller file sizes:

```bash
# Using sharp or online converter
# Create .webp versions alongside .jpg files
```

**Then Update Image Tag:**
```tsx
<picture>
  <source
    srcSet={`/assets/images/buyingprocess/step_${step.number}_${step.slug}.webp`}
    type="image/webp"
  />
  <img
    src={`/assets/images/buyingprocess/step_${step.number}_${step.slug}.jpg`}
    alt={`${step.title} - Gulf South Homes buying process`}
    loading="lazy"
    className="w-full h-full object-cover"
  />
</picture>
```

**Fallback:** If `.webp` not supported by browser, `.jpg` loads automatically.

---

## Image Integration Details

### File Paths (Absolute)

```
C:\Users\godsp\OneDrive\Desktop\gulf south homes blue and red\gshhomes\public\assets\images\buyingprocess\step_1_choose_your_home.jpg
C:\Users\godsp\OneDrive\Desktop\gulf south homes blue and red\gshhomes\public\assets\images\buyingprocess\step_2_financing_and_budget.jpg
C:\Users\godsp\OneDrive\Desktop\gulf south homes blue and red\gshhomes\public\assets\images\buyingprocess\step_3_land_and_permits.jpg
C:\Users\godsp\OneDrive\Desktop\gulf south homes blue and red\gshhomes\public\assets\images\buyingprocess\step_4_delivery_and_setup.jpg
C:\Users\godsp\OneDrive\Desktop\gulf south homes blue and red\gshhomes\public\assets\images\buyingprocess\step_5_move_in.jpg
```

### Web Paths (For Development)

```
http://localhost:3000/assets/images/buyingprocess/step_1_choose_your_home.jpg
http://localhost:3000/assets/images/buyingprocess/step_2_financing_and_budget.jpg
http://localhost:3000/assets/images/buyingprocess/step_3_land_and_permits.jpg
http://localhost:3000/assets/images/buyingprocess/step_4_delivery_and_setup.jpg
http://localhost:3000/assets/images/buyingprocess/step_5_move_in.jpg
```

### Lazy-Loading Strategy

**Why:** The "How It Works" page is content-heavy with 5 images below the fold. Lazy-loading prevents blocking the initial page load.

**Method:** Native browser lazy-loading via `loading="lazy"` attribute
- No JavaScript required
- Supported by all modern browsers (Chrome, Firefox, Safari, Edge)
- Images load as user scrolls into viewport
- Fallback: Browsers without support load images immediately (graceful degradation)

**Expected Performance Impact:**
- Initial page load: ~500 KB lighter (5 images @ ~100 KB each deferred)
- Lighthouse Performance Score: +5-10 points
- Mobile 3G load time: ~2-3 seconds faster

---

## Testing Checklist

### Visual Testing

- [ ] **Desktop (1920px):** Images display at full quality, no pixelation
- [ ] **Laptop (1366px):** Images scale proportionally, no distortion
- [ ] **Tablet (768px):** Layout switches to stacked view, images remain full-width
- [ ] **Mobile (375px):** Images maintain 4:3 aspect ratio, no cropping of critical subjects
- [ ] **Hover States (Desktop):** Card shadow/elevation animates smoothly (if applicable)

### Functional Testing

- [ ] **Image Loading:** All 5 images load successfully (no 404 errors)
- [ ] **Lazy-Loading:** Images only load when scrolled into view (check Network tab)
- [ ] **Alt Text:** Screen readers announce meaningful descriptions
- [ ] **Aspect Ratio Lock:** No CLS (Cumulative Layout Shift) as images load
- [ ] **File Size:** Total image payload < 500 KB (all 5 images combined)

### Cross-Browser Testing

- [ ] **Chrome/Edge:** Images load, lazy-loading works
- [ ] **Firefox:** Images load, lazy-loading works
- [ ] **Safari (macOS/iOS):** Images load, lazy-loading works
- [ ] **Mobile Safari (iPhone):** Touch/scroll performance smooth

### Accessibility Testing

- [ ] **Keyboard Navigation:** Focus states visible on step cards
- [ ] **Screen Reader (NVDA/JAWS):** Alt text announces correctly
- [ ] **Color Contrast:** Text over image overlay meets WCAG AA (4.5:1 minimum)
- [ ] **Reduced Motion:** No animations if `prefers-reduced-motion` enabled

### Performance Testing

- [ ] **Lighthouse Score:** Performance > 90, Accessibility > 95
- [ ] **Network Throttling (Fast 3G):** Page usable within 5 seconds
- [ ] **Total Blocking Time:** < 300ms
- [ ] **Largest Contentful Paint (LCP):** < 2.5 seconds
- [ ] **Cumulative Layout Shift (CLS):** < 0.1

---

## Technical Notes

### Code Changes Required

**Primary File:** `pages/HowItWorks.tsx`

**Lines to Modify:** 200-213 (Visual Side component)

**Change Summary:**
1. Remove placeholder gradient background
2. Add `<img>` tag with dynamic path construction
3. Add `overflow-hidden` to parent card wrapper
4. Remove inner padding from card (images go edge-to-edge)
5. Optional: Add subtle overlay gradient for future text overlays

**Estimated Time:** 15-20 minutes

**Risk Level:** Low (isolated change, no dependencies)

---

### Performance Considerations

#### Current Page Weight

**Before Image Integration:**
- Hero video: 1.0 MB (`land.mp4`)
- Background video (subtle): 1.0 MB (same file, cached)
- CSS bundle: 115 KB
- JavaScript bundles: ~308 KB (main) + ~11 KB (page-specific)
- **Total:** ~1.4 MB

**After Image Integration (Estimated):**
- Hero video: 1.0 MB
- 5 step images: ~500 KB (100 KB each, lazy-loaded)
- CSS bundle: 115 KB
- JavaScript bundles: ~319 KB
- **Total Initial Load:** ~1.4 MB (unchanged, images deferred)
- **Total After Scroll:** ~1.9 MB

**Mobile Impact:**
- Initial load: No change (lazy-loading defers images)
- After full page scroll: +500 KB (~30% increase)
- **Mitigation:** Consider serving smaller images on mobile via responsive images

---

### Responsive Image Strategy (Future Enhancement)

**If Mobile Performance Becomes an Issue:**

Use `srcset` to serve smaller images on mobile devices:

```tsx
<img
  src={`/assets/images/buyingprocess/step_${step.number}_${step.slug}.jpg`}
  srcSet={`
    /assets/images/buyingprocess/step_${step.number}_${step.slug}_mobile.jpg 768w,
    /assets/images/buyingprocess/step_${step.number}_${step.slug}.jpg 1200w
  `}
  sizes="(max-width: 768px) 768px, 1200px"
  alt={`${step.title} - Gulf South Homes buying process`}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

**Required:** Create mobile-optimized versions at 768px wide
**File Naming:** `step_1_choose_your_home_mobile.jpg`

---

### Brand Compliance Notes

#### Design System Adherence

✅ **Color System:** No hardcoded HEX values (using Tailwind tokens)
✅ **Typography:** Outfit (headings) + Plus Jakarta Sans (body) maintained
✅ **Spacing:** Follows 4px grid system (Tailwind spacing scale)
✅ **Shadows:** Using `shadow-xl` (defined in `tailwind.config.js`)
✅ **Border Radius:** Using `rounded-2xl` and `rounded-xl` (brand standard)

#### Image Overlay Consistency

**Current Hero Overlay:** `.hero-overlay` class (30% darkness)
```css
background: linear-gradient(
  to bottom,
  rgba(28, 25, 23, 0.2) 0%,
  rgba(28, 25, 23, 0.3) 40%,
  rgba(28, 25, 23, 0.7) 80%,
  rgba(28, 25, 23, 0.9) 100%
);
```

**Step Image Overlay:** Lighter gradient (non-intrusive)
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
```

**Why Different?**
- Hero overlay ensures white text readability over video
- Step images are purely visual (no text overlay currently)
- Lighter overlay preserves image vibrancy and subject details

---

### Error Handling

**What If an Image Fails to Load?**

**Current Implementation:** No fallback (broken image icon appears)

**Recommended Enhancement:**

```tsx
<img
  src={`/assets/images/buyingprocess/step_${step.number}_${step.slug}.jpg`}
  alt={`${step.title} - Gulf South Homes buying process`}
  loading="lazy"
  className="w-full h-full object-cover"
  onError={(e) => {
    // Fallback to placeholder gradient
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-stone-100', 'to-stone-200');
  }}
/>
```

**Alternative:** Use a generic fallback image:
```tsx
onError={(e) => {
  e.currentTarget.src = '/assets/images/placeholder-step.jpg';
}}
```

---

## Deployment Notes

### Pre-Deployment Checklist

1. **Build Test:**
   ```bash
   npm run build
   ```
   - Verify no TypeScript errors
   - Check bundle size warnings (should remain ~308 KB main bundle)

2. **Local Preview:**
   ```bash
   npm run preview
   ```
   - Test on `http://localhost:4173`
   - Verify all 5 images load correctly
   - Check lazy-loading behavior (Network tab)

3. **Image Verification:**
   ```bash
   ls -lh public/assets/images/buyingprocess/*.jpg
   ```
   - Confirm all 5 files exist
   - Check file sizes (< 300 KB each)

4. **Git Status:**
   ```bash
   git status
   ```
   - Ensure only `HowItWorks.tsx` is modified
   - Images already tracked in git (no new additions)

### Vercel Deployment

**Build Command:** `npm run build` (no change)
**Output Directory:** `dist` (no change)
**Framework Preset:** Vite (no change)

**Expected Build Time:** ~45 seconds (no change)
**Expected Deploy Time:** ~30 seconds (no change)

**Post-Deploy Verification:**
- Visit `https://gshhomes.com/how-it-works`
- Scroll through all 5 steps
- Verify images load on production CDN
- Check Lighthouse score (should be > 90 Performance)

---

## Summary for Dev Team

### Quick Implementation Guide

1. **Open file:** `pages/HowItWorks.tsx`
2. **Find lines:** 200-213 (Visual Side component)
3. **Replace code:** Swap placeholder `<div>` with `<img>` tag (see Task 1)
4. **Test locally:** `npm run dev` → visit `http://localhost:3000/how-it-works`
5. **Verify images:** Check all 5 steps display lifestyle photos
6. **Build test:** `npm run build` → ensure no errors
7. **Commit:** `git add pages/HowItWorks.tsx && git commit -m "feat: Add lifestyle images to How It Works steps"`
8. **Deploy:** Push to main branch → Vercel auto-deploys

**Total Time:** 30 minutes (including testing)

**Risk Level:** ⬜ Low (isolated change, no dependencies)

**Rollback Plan:** Revert single commit if issues arise

---

## Questions or Issues?

**Contact:**
- **Project Owner:** Gulf South Homes Inc.
- **Technical Lead:** [Dev Team]
- **QA Contact:** [Client Handover Team]

**Documentation References:**
- Brand Identity Guide: `BRAND_IDENTITY_GUIDE.md`
- Brand Compliance Audit: `BRAND_COMPLIANCE_AUDIT.md`
- Video Optimization Report: `VIDEO_OPTIMIZATION_REPORT.md`
- Project Instructions: `CLAUDE.md`

---

**Implementation Plan Version:** 1.0
**Date Created:** December 27, 2024
**Status:** Ready for Handover ✅
