# GULF SOUTH HOMES - IMPLEMENTATION CHECKLIST
## Section-by-Section Refactor Tasks

---

## PHASE 1: HIGH-IMPACT, LOW-RISK (3-4 hours)

### Task 1.1: Home Page - Customer Stories Video Background
**File:** `pages/Home.tsx`
**Current Component Location:** Find testimonials/customer stories section

**What to Change:**
- [ ] Locate section with `bg-stone-900` class (dark background)
- [ ] Replace with video background container
- [ ] Add video overlay with `bg-primary/40`
- [ ] Update text styles for contrast (add `drop-shadow-md` to testimonial text)
- [ ] Adjust avatar styling if needed (ensure contrast on video bg)

**Technical Implementation:**
```tsx
// Current (likely):
<section className="py-20 sm:py-28 bg-stone-900 text-white">
  {/* testimonials content */}
</section>

// Change to:
<section className="py-20 sm:py-28 relative overflow-hidden text-white">
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/video/videosworking/homepage-hero.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-primary/40"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* testimonials with drop-shadow-md on text */}
  </div>
</section>
```

**Testing Checklist:**
- [ ] Text is readable on video background (white text with shadow)
- [ ] Video autoplays on desktop
- [ ] Mobile: Video doesn't cause performance issues
- [ ] Testimonial cards remain properly styled
- [ ] Avatar circles contrast properly against video
- [ ] Star ratings visible (gold/amber color should show against video)

**Estimated Time:** 45 minutes

---

### Task 1.2: Financing Page - Insurance-Appropriate Overlay
**File:** `pages/Financing.tsx`
**Current Component Location:** Find hero section with `finance.mp4`

**What to Change:**
- [ ] Locate hero section with video background
- [ ] Current overlay: `bg-black/50` or similar
- [ ] Change overlay to `bg-indigo-600/70` for insurance-appropriate branding
- [ ] Verify text contrast remains acceptable
- [ ] No structural changes needed (this is purely overlay color adjustment)

**Technical Implementation:**
```tsx
// Current (likely):
<section className="relative overflow-hidden">
  <video className="absolute inset-0 w-full h-full object-cover">
    <source src="/assets/video/videosworking/finance.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/50"></div>
  {/* content */}
</section>

// Change overlay line to:
<div className="absolute inset-0 bg-indigo-600/70"></div>

// OR if using primary color currently:
// Keep as-is, rationale: primary (emerald) works fine, this may not need change
// Only change if feedback suggests insurance messaging feels off-brand
```

**Testing Checklist:**
- [ ] Overlay color looks professional (indigo-600 at 70% opacity)
- [ ] Text contrast unchanged (already optimized)
- [ ] Color doesn't clash with buttons/CTAs
- [ ] Visually distinct from other pages (indigo helps differentiate from emerald-heavy pages)

**Estimated Time:** 15 minutes

---

### Task 1.3: Parts Page - Professional Installation Video
**File:** `pages/Parts.tsx`
**Current Component Location:** Find "Professional Installation" section

**What to Change:**
- [ ] Locate section with gradient background (primary to primary-dark)
- [ ] Add video background layer behind gradient
- [ ] Layer structure: Video → Overlay → Content
- [ ] Keep gradient overlay to maintain color branding
- [ ] Test text readability on layered background

**Technical Implementation:**
```tsx
// Current (likely):
<section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
  {/* content */}
</section>

// Change to:
<section className="py-20 relative overflow-hidden text-white">
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/video/videosworking/manufactures.mp4" type="video/mp4" />
  </video>

  {/* Gradient Overlay (on top of video) */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-85"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* installation section content */}
  </div>
</section>
```

**Testing Checklist:**
- [ ] Video shows through gradient (opacity 85% should allow visibility)
- [ ] Text remains readable (gradient + overlay provides sufficient contrast)
- [ ] CTA buttons visible and clickable
- [ ] Video doesn't distract from main message
- [ ] Mobile: Gradient overlay weight appropriate for smaller screens

**Estimated Time:** 45 minutes

**Total Phase 1 Time:** ~1.75 hours (under 3-4 hour estimate)

---

## PHASE 2: MEDIUM-IMPACT, MEDIUM-COMPLEXITY (6-8 hours)

### Task 2.1: About Page - Project Gallery Subtle Video
**File:** `pages/About.tsx`
**Current Component Location:** Find "PROJECT GALLERY" or masonry gallery section

**What to Change:**
- [ ] Locate gallery section with current background styling
- [ ] Add subtle video background (15-20% opacity)
- [ ] Adjust overlay darkness (make less heavy than current)
- [ ] Ensure gallery images remain focal point (not video)
- [ ] Keep all hover effects and masonry structure

**Technical Implementation:**
```tsx
// Current (likely):
<section className="py-24 md:py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
  {/* masonry gallery grid */}
</section>

// Change to:
<section className="py-24 md:py-32 relative overflow-hidden">
  {/* Video Background - VERY SUBTLE */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  >
    <source src="/assets/video/videosworking/1204.mp4" type="video/mp4" />
  </video>

  {/* Overlay - lighter than before */}
  <div className="absolute inset-0 bg-stone-900/80"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* masonry gallery - keep all existing structure */}
  </div>
</section>
```

**Testing Checklist:**
- [ ] Video is barely visible (15-20% opacity is intentional and subtle)
- [ ] Gallery images are the clear focal point
- [ ] Hover overlays still work smoothly
- [ ] Text contrast maintained
- [ ] Masonry layout unaffected
- [ ] Gallery lightbox still functions
- [ ] Mobile: Gallery grid responsive

**Estimated Time:** 1 hour

---

### Task 2.2: LandHome Page - Add Mid-Page Anchor Video Section
**File:** `pages/LandHome.tsx`
**Current Component Location:** Between "Benefits" and "Timeline" sections

**What to Add (New Component):**
- [ ] Create new section between existing sections
- [ ] Background: land.mp4 with overlay
- [ ] Content: 2-3 benefit callouts + "See how it works" button
- [ ] Height: ~40vh (reasonable scroll pause point)
- [ ] Purpose: Transition from benefits explanation to timeline process

**Technical Implementation:**
```tsx
// NEW SECTION - Insert between Benefits and Timeline sections

<section className="py-16 sm:py-24 relative overflow-hidden bg-stone-50">
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/video/videosworking/land.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-stone-900/70"></div>

  {/* Content */}
  <div className="container relative z-10 mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
        See a Land Package in Action
      </h2>

      <p className="text-lg text-white/90 mb-8 drop-shadow-md">
        Watch how we transform your land into your dream home
      </p>

      <button className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:scale-105 transition-transform">
        View the Process
      </button>
    </div>
  </div>
</section>

// Then existing Timeline section continues below
```

**Content to Write:**
- [ ] Section heading: "See a Land Package in Action"
- [ ] Supporting text: 1 sentence explaining what happens
- [ ] CTA: Link to timeline section or process explanation

**Testing Checklist:**
- [ ] Section placed correctly between Benefits and Timeline
- [ ] Video background appropriate for land/development theme
- [ ] Text readable on video background
- [ ] Button visible and clickable
- [ ] Scroll flow natural (section feels like process introduction)
- [ ] Mobile: Section height responsive, not too tall on small screens
- [ ] Page load time acceptable (new video added)

**Estimated Time:** 1.5 hours (includes content writing + testing)

---

### Task 2.3: SingleWide Page - Add Pre-CTA Context Section
**File:** `pages/SingleWide.tsx`
**Current Component Location:** BEFORE existing "Found the Perfect Home?" CTA section

**What to Add (New Component):**
- [ ] Create new section showing single-wide lifestyle benefits
- [ ] Background: singewidehomepage.mp4 with overlay
- [ ] Content: 3-4 benefit callouts with icons
- [ ] Purpose: Bridge from product grid to CTA (emotional connection)

**Technical Implementation:**
```tsx
// NEW SECTION - Insert BEFORE existing CTA section

<section className="py-16 sm:py-24 relative overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/video/videosworking/singewidehomepage.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-stone-900/60"></div>

  {/* Content */}
  <div className="container relative z-10 mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
        Single-Wide Living Made Simple
      </h2>
      <p className="text-lg text-white/90 drop-shadow-md">
        Affordable, efficient, and beautifully designed for modern families
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Benefit Card 1 */}
      <div className="text-center">
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 drop-shadow-lg">
          {/* Icon */}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Affordable</h3>
        <p className="text-white/80">Lower price point without sacrificing quality</p>
      </div>

      {/* Benefit Card 2 */}
      <div className="text-center">
        <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 drop-shadow-lg">
          {/* Icon */}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Efficient</h3>
        <p className="text-white/80">Optimized layouts make the most of your space</p>
      </div>

      {/* Benefit Card 3 */}
      <div className="text-center">
        <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 drop-shadow-lg">
          {/* Icon */}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Modern</h3>
        <p className="text-white/80">Updated designs and premium finishes included</p>
      </div>
    </div>
  </div>
</section>

// Then existing CTA section continues below
```

**Content to Write:**
- [ ] 3-4 benefit titles (Affordable, Efficient, Modern, Fast Delivery, etc.)
- [ ] Short benefit descriptions (1 sentence each)
- [ ] Icons to use (use existing Lucide icons)

**Testing Checklist:**
- [ ] Section placed correctly before CTA
- [ ] Video background supports "living" narrative (shows family/lifestyle)
- [ ] Benefit cards visually appealing on mobile (stack vertically)
- [ ] Text readable on video background
- [ ] Icons visible and properly colored
- [ ] Scroll flow natural (leads into CTA)
- [ ] CTA button placement clear after benefit cards

**Estimated Time:** 1.5 hours

**Total Phase 2 Time:** ~4 hours

---

## PHASE 3: STRATEGIC REORGANIZATION (4-6 hours)

### Task 3.1: Modular Page - Relocate "Visit Us" Section
**File:** `pages/Modular.tsx`
**Current State:** Visit Us section at bottom of page
**Target State:** Move to mid-page after home grid, add video context

**What to Change:**
- [ ] Cut "Visit Us" section from bottom
- [ ] Identify home grid/catalog section
- [ ] Insert "Visit Us" section after grid (before footer area)
- [ ] Add context section before Visit Us explaining why to visit
- [ ] Add badge/small text: "Visit Our Showroom"

**Technical Implementation:**

Step 1: Create context section (new):
```tsx
<section className="py-16 sm:py-24 relative overflow-hidden">
  {/* Subtle background video OR solid background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  >
    <source src="/assets/video/videosworking/land.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-white/80"></div>

  <div className="container relative z-10 mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
      Why Visit In Person?
    </h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
      <div>
        <h3 className="font-bold text-primary mb-2">See Multiple Homes</h3>
        <p className="text-stone-600">Browse our full inventory in one convenient location</p>
      </div>
      <div>
        <h3 className="font-bold text-primary mb-2">Test the Layout</h3>
        <p className="text-stone-600">Walk through homes and experience the space firsthand</p>
      </div>
      <div>
        <h3 className="font-bold text-primary mb-2">Talk to Experts</h3>
        <p className="text-stone-600">Get personalized guidance from our knowledgeable team</p>
      </div>
    </div>
  </div>
</section>
```

Step 2: Move existing Visit Us section:
- [ ] Find current Visit Us section code
- [ ] Add small badge above heading:
```tsx
<span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
  Visit Our Showroom
</span>
```
- [ ] Insert after "Why Visit" section

**Testing Checklist:**
- [ ] Relocated section appears after grid, before footer area
- [ ] "Why Visit" context makes sense before address/hours
- [ ] Video background subtle on light section (opacity 30%)
- [ ] Address, hours, contact info clearly displayed
- [ ] Mobile: Sections stack properly, no layout breaks
- [ ] All links within section work (phone, map links if any)

**Estimated Time:** 1.5 hours

---

### Task 3.2: HowItWorks Page - Add Subtle Video Context
**File:** `pages/HowItWorks.tsx`
**Current Component Location:** Background of step-by-step section

**What to Change:**
- [ ] Locate the section containing step cards/instructions
- [ ] Add subtle video background (15-20% opacity)
- [ ] Keep white overlay to maintain text readability
- [ ] Ensure step numbers and icons remain clearly visible

**Technical Implementation:**
```tsx
// Locate the steps container (likely a flex/grid section)
// Current (likely):
<section className="py-20 sm:py-28 bg-white">
  {/* step cards */}
</section>

// Change to:
<section className="py-20 sm:py-28 relative overflow-hidden">
  {/* Video Background - VERY SUBTLE */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover opacity-15"
  >
    <source src="/assets/video/videosworking/land.mp4" type="video/mp4" />
  </video>

  {/* White Overlay - maintains readability */}
  <div className="absolute inset-0 bg-white/90"></div>

  {/* Content */}
  <div className="container relative z-10 mx-auto px-4">
    {/* step cards - keep all existing structure */}
  </div>
</section>
```

**Testing Checklist:**
- [ ] Video is barely visible (opacity 15% is very subtle)
- [ ] White overlay ensures text remains black/readable
- [ ] Step numbers visible
- [ ] Icons properly colored
- [ ] Hover states work
- [ ] Mobile: Layout unaffected
- [ ] Accessibility: Text contrast ratio still meets WCAG standards

**Estimated Time:** 45 minutes

**Total Phase 3 Time:** ~2.25 hours

---

## PHASE 4: PERFORMANCE & POLISH (3-4 hours)

### Task 4.1: Mobile Video Optimization
**File:** Check `public/assets/video/` directory

**What to Verify:**
- [ ] All videos have responsive/mobile variants in subdirectory
- [ ] Mobile videos are 50-60% file size of desktop versions
- [ ] Naming convention consistent (same name, different folder)
- [ ] Update `<source>` tags with `media` attribute for responsive loading

**Implementation Pattern:**
```tsx
<video autoPlay muted loop playsInline preload="metadata" className="...">
  {/* Desktop version (1280x720) */}
  <source
    src="/assets/video/videosworking/homepage-hero.mp4"
    type="video/mp4"
    media="(min-width: 768px)"
  />
  {/* Mobile version (640x360) */}
  <source
    src="/assets/video/responsive/homepage-hero.mp4"
    type="video/mp4"
    media="(max-width: 767px)"
  />
</video>
```

**Testing Checklist:**
- [ ] iOS Safari: Check autoplay restrictions (should work with muted flag)
- [ ] Android Chrome: Test on 3G network simulator
- [ ] Desktop Firefox: Verify video playback smooth
- [ ] iPad: Check video scales properly

**Estimated Time:** 1.5 hours

---

### Task 4.2: Performance Audit
**File:** Run locally and on preview

**What to Test:**
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` loads without performance regression
- [ ] Core Web Vitals check:
  - [ ] LCP (Largest Contentful Paint): < 2.5s
  - [ ] INP (Interaction to Next Paint): < 200ms
  - [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] Bundle size: Check JavaScript bundle didn't increase
- [ ] Video load time: Monitor in Network tab (should be async)

**Tools:**
- [ ] Chrome DevTools Lighthouse
- [ ] PageSpeed Insights (https://pagespeed.web.dev/)
- [ ] WebPageTest (optional, for detailed analysis)

**Testing Checklist:**
- [ ] Lighthouse score maintained or improved
- [ ] No performance regression on mobile
- [ ] Videos load asynchronously (don't block page rendering)
- [ ] No console errors

**Estimated Time:** 1 hour

---

### Task 4.3: Browser/Device Testing
**Devices to Test:**
- [ ] iPhone 12/14 (iOS Safari)
- [ ] Samsung Galaxy (Android Chrome)
- [ ] iPad (iPad Safari)
- [ ] MacBook (Desktop Chrome/Firefox/Safari)
- [ ] Windows (Desktop Chrome/Edge)

**What to Test on Each:**
- [ ] Videos autoplay properly
- [ ] Text readable on video backgrounds
- [ ] Forms submittable
- [ ] Navigation responsive
- [ ] Images load properly
- [ ] No layout shifts or jank
- [ ] Touch targets > 44px on mobile

**Testing Checklist:**
- [ ] iOS: Videos autoplay with sound muted ✅
- [ ] Android: Smooth video playback on 3G ✅
- [ ] Desktop: No visual glitches ✅
- [ ] Mobile: Overlay opacity appropriate for screen size ✅
- [ ] All pages: No console errors ✅

**Estimated Time:** 1.5 hours

**Total Phase 4 Time:** ~4 hours

---

## SUMMARY CHECKLIST

### Phase 1 Tasks (Estimated: 1.75 hours)
- [ ] Task 1.1: Home Page - Customer Stories (45 min)
- [ ] Task 1.2: Financing Page - Overlay Color (15 min)
- [ ] Task 1.3: Parts Page - Professional Installation (45 min)

### Phase 2 Tasks (Estimated: 4 hours)
- [ ] Task 2.1: About Page - Gallery Video (1 hour)
- [ ] Task 2.2: LandHome - Mid-Page Section (1.5 hours)
- [ ] Task 2.3: SingleWide - Pre-CTA Section (1.5 hours)

### Phase 3 Tasks (Estimated: 2.25 hours)
- [ ] Task 3.1: Modular - Relocate Visit Us (1.5 hours)
- [ ] Task 3.2: HowItWorks - Subtle Video (45 min)

### Phase 4 Tasks (Estimated: 4 hours)
- [ ] Task 4.1: Mobile Optimization (1.5 hours)
- [ ] Task 4.2: Performance Audit (1 hour)
- [ ] Task 4.3: Device Testing (1.5 hours)

**TOTAL PROJECT TIME: ~12 hours**

**Recommended Timeline:**
- Week 1: Phase 1 (1.75 hours) + Phase 2 (4 hours) = 5.75 hours
- Week 2: Phase 3 (2.25 hours) + Phase 4 (4 hours) = 6.25 hours

---

## GIT COMMIT STRATEGY

### Commits per Phase

**Phase 1 Commit:**
```
feat: Add video backgrounds to customer stories, financing, and parts sections

- Add video background to Home page testimonials section
- Update Financing page overlay to indigo-based branding
- Add video background to Parts professional installation section
- Improve text contrast on all video backgrounds with drop shadows
```

**Phase 2 Commits:**
```
feat: Add context videos and new sections to About, LandHome, SingleWide

- Add subtle video background to About page project gallery
- Add "See Land Package in Action" section to LandHome page
- Add "Single-Wide Living Made Simple" pre-CTA section to SingleWide page
```

```
feat: Reorganize Modular page with "Why Visit" context
- Move Visit Us section to mid-page after home grid
- Add context section explaining benefits of in-person visit
- Add showroom badge and improved information hierarchy
```

```
feat: Add subtle video context to HowItWorks step-by-step section
- Add background video to steps section for visual interest
- Maintain high contrast white overlay for text readability
```

**Phase 4 Commit:**
```
perf: Optimize videos for mobile and verify Core Web Vitals

- Add responsive video loading with media queries
- Verify Core Web Vitals metrics within thresholds
- Test on iOS Safari, Android Chrome, desktop browsers
```

---

## ROLLBACK PLAN (If Needed)

If any phase introduces performance regressions or design issues:

1. **Identify Issue:** Use Chrome DevTools or Lighthouse to pinpoint problem
2. **Revert Commit:** `git revert [commit-hash]`
3. **Analyze:** Check if video opacity, overlay color, or placement caused issue
4. **Adjust:** Modify CSS (opacity, colors) rather than removing feature
5. **Redeploy:** Test locally, then push again

Example adjustments:
- Video making section too dark? → Reduce overlay opacity (e.g., `bg-black/30` → `bg-black/20`)
- Text not readable? → Increase drop-shadow or use white overlay instead of color overlay
- Performance impact? → Add `preload="metadata"` if not present, verify lazy-loading on below-fold videos

