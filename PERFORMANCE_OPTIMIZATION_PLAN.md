# Web Performance Optimization Plan
**Gulf South Homes - React + Vite + Vercel**

**Date:** 2025-01-XX  
**Engineer:** Senior Web Performance & Frontend Build Specialist  
**Goal:** Reduce initial page load time, improve Core Web Vitals (LCP/INP/CLS), shrink JS/CSS payloads without changing features or design.

---

## Executive Summary

This plan addresses 12 performance bottlenecks across render-blocking resources, JavaScript bundle size, image optimization, third-party scripts, and caching strategies. Expected improvements: **40-60% reduction in initial load time**, **30-50% smaller JS bundles**, and **Core Web Vitals scores moving from "Needs Improvement" to "Good"** on Lighthouse.

---

## 1. Performance Audit: Top Bottlenecks

### 🔴 **Critical (High Impact)**

1. **Render-Blocking External Scripts** (Impact: HIGH)
   - 3 synchronous GoHighLevel scripts block DOMContentLoaded
   - Blocks initial render by ~500-800ms on 3G
   - **Files:** `index.html` lines 86-96

2. **Minimal Vite Build Configuration** (Impact: HIGH)
   - No minification, no chunk splitting, no tree-shaking optimization
   - Estimated bundle size: 2-3MB uncompressed
   - **Files:** `vite.config.ts` (minimal config)

3. **Large JavaScript Bundles** (Impact: HIGH)
   - Swiper (~100KB+ minified) loaded on every page
   - No vendor chunking, React/router bundled together
   - **Files:** `components/FeaturedCarousel.tsx`, `vite.config.ts`

4. **Render-Blocking CSS Import** (Impact: MEDIUM-HIGH)
   - `@import` in `index.css` blocks rendering
   - Font loading via print trick but CSS still blocks
   - **Files:** `index.css` line 2, `index.html` line 61

### 🟡 **Medium Impact**

5. **Suboptimal Image Loading** (Impact: MEDIUM)
   - No WebP format, no srcset, no responsive images
   - Large hero images loaded eagerly without optimization
   - **Files:** Multiple page components, `components/ThumbnailGrid.tsx`

6. **Conflicting Import Map** (Impact: MEDIUM)
   - CDN importmap may conflict with bundled React
   - Potential double-loading of dependencies
   - **Files:** `index.html` lines 69-79

7. **Missing Resource Hints** (Impact: MEDIUM)
   - No preload for critical logo/hero images
   - No prefetch for likely next pages
   - **Files:** `index.html`

8. **Video Preload Strategy** (Impact: MEDIUM)
   - Videos use `preload="metadata"` but could be optimized further
   - No poster images for faster LCP
   - **Files:** Multiple page components

### 🟢 **Low Impact (Quick Wins)**

9. **Font Loading Optimization** (Impact: LOW-MEDIUM)
   - Dancing Script loaded but rarely used above fold
   - Could lazy-load decorative fonts
   - **Files:** `index.html` line 65

10. **Missing Compression Headers** (Impact: LOW)
    - Vercel handles compression, but explicit config helps
    - **Files:** `vercel.json`

11. **No Bundle Analysis** (Impact: LOW)
    - Missing visibility into bundle composition
    - **Files:** `package.json` (missing analysis script)

12. **Component-Level Lazy Loading** (Impact: LOW)
    - Routes are lazy-loaded, but heavy components within pages aren't
    - **Files:** `pages/Home.tsx`, other page components

---

## 2. Recommendations: 12 Concrete Changes

### **R1: Defer Non-Critical External Scripts** 
**Impact:** HIGH | **Effort:** S | **Expected Improvement:** 500-800ms faster TTI

**Why:** GoHighLevel widgets don't need to load before initial render. Deferring prevents render-blocking.

**Files:** `index.html`

**Implementation:**
```html
<!-- Replace lines 85-96 with: -->
<script>
  // Defer non-critical third-party scripts until after page load
  window.addEventListener('load', function() {
    // GoHighLevel Chat Widget
    const chatScript = document.createElement('script');
    chatScript.src = 'https://beta.leadconnectorhq.com/loader.js';
    chatScript.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    chatScript.setAttribute('data-widget-id', '6940899ff258cf30de629683');
    chatScript.defer = true;
    document.body.appendChild(chatScript);

    // GoHighLevel Form Embed Script
    const formScript = document.createElement('script');
    formScript.src = 'https://crm.gshforms.com/js/form_embed.js';
    formScript.defer = true;
    document.body.appendChild(formScript);

    // Reviews Widget Script
    const reviewScript = document.createElement('script');
    reviewScript.src = 'https://crm.gshforms.com/reputation/assets/review-widget.js';
    reviewScript.defer = true;
    document.body.appendChild(reviewScript);
  });
</script>
```

---

### **R2: Optimize Vite Build Configuration**
**Impact:** HIGH | **Effort:** M | **Expected Improvement:** 30-50% smaller bundles, faster parse/compile

**Why:** Enables minification, chunk splitting, tree-shaking, and dead code elimination.

**Files:** `vite.config.ts`

**Implementation:**
```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Minification with Terser
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
          },
        },
        // Optimize chunk splitting
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Separate vendor chunks for better caching
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                  return 'react-vendor';
                }
                if (id.includes('swiper')) {
                  return 'swiper-vendor';
                }
                if (id.includes('embla-carousel')) {
                  return 'embla-vendor';
                }
                if (id.includes('lucide-react')) {
                  return 'icons-vendor';
                }
                // Other vendor code
                return 'vendor';
              }
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit (we're splitting manually)
        chunkSizeWarningLimit: 1000,
        // Source maps disabled for production (enable if needed for debugging)
        sourcemap: false,
        // Inline assets smaller than 4KB
        assetsInlineLimit: 4096,
        // CSS code splitting
        cssCodeSplit: true,
      },
      // Optimize dependencies pre-bundling
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
        exclude: ['swiper'], // Let Swiper be code-split
      },
    };
});
```

**Note:** Requires `terser` package: `npm install --save-dev terser`

---

### **R3: Remove Conflicting Import Map**
**Impact:** MEDIUM | **Effort:** S | **Expected Improvement:** Prevents double-loading, cleaner dependency resolution

**Why:** Import map loads React from CDN while Vite bundles it, causing potential conflicts and wasted bandwidth.

**Files:** `index.html`

**Implementation:**
```html
<!-- Remove lines 69-79 entirely -->
<!-- The importmap is not needed since Vite bundles everything -->
```

---

### **R4: Optimize CSS Loading**
**Impact:** MEDIUM-HIGH | **Effort:** S | **Expected Improvement:** 100-200ms faster FCP

**Why:** `@import` in CSS blocks rendering. Move font import to HTML and inline critical CSS.

**Files:** `index.css`, `index.html`

**Implementation:**

**In `index.css` (remove line 2):**
```css
/* Remove: @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'); */
/* Fonts are loaded in index.html */

@tailwind base;
@tailwind components;
@tailwind utilities;
/* ... rest of file ... */
```

**In `index.html` (update font loading):**
```html
<!-- Preload critical fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load critical fonts (Outfit + Plus Jakarta Sans) -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
</noscript>

<!-- Lazy load decorative font (Dancing Script) -->
<script>
  window.addEventListener('load', function() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
</script>
```

---

### **R5: Add Resource Hints for Critical Assets**
**Impact:** MEDIUM | **Effort:** S | **Expected Improvement:** 50-100ms faster LCP

**Why:** Preloads critical above-the-fold assets (logo, hero images) to improve LCP.

**Files:** `index.html`

**Implementation:**
```html
<!-- Add after line 49, before DNS prefetch -->
<!-- Preload critical above-the-fold assets -->
<link rel="preload" as="image" href="/assets/images/single wide homes/large logo for nav bar.png" fetchpriority="high">
<link rel="preload" as="image" href="/assets/images/homepage/landingpageheroheader.mp4" as="video" type="video/mp4">

<!-- Prefetch likely next pages -->
<link rel="prefetch" href="/homes-for-sale">
<link rel="prefetch" href="/mobile-home-financing">
<link rel="prefetch" href="/contact-gulf-south-homes">
```

---

### **R6: Lazy Load Swiper (Replace with Embla)**
**Impact:** HIGH | **Effort:** M | **Expected Improvement:** ~100KB smaller initial bundle

**Why:** Swiper is large (~100KB+). You already have Embla installed. Consider replacing Swiper with Embla for carousels, or at least lazy-load Swiper.

**Files:** `components/FeaturedCarousel.tsx`

**Option A: Lazy Load Swiper (Easier)**
```typescript
// At top of file
import { lazy, Suspense } from 'react';

// Lazy load Swiper component
const Swiper = lazy(() => import('swiper/react').then(module => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import('swiper/react').then(module => ({ default: module.SwiperSlide })));

// Wrap Swiper usage in Suspense
<Suspense fallback={<div className="animate-pulse bg-stone-200 h-64 rounded-lg" />}>
  <Swiper
    // ... props
  >
    {/* ... */}
  </Swiper>
</Suspense>
```

**Option B: Replace with Embla (Better long-term)**
- Embla is already in dependencies and ~52KB smaller
- Would require refactoring `FeaturedCarousel.tsx` to use Embla API
- **Effort:** L | **Impact:** HIGH

**Recommendation:** Start with Option A, plan Option B for future sprint.

---

### **R7: Optimize Video Loading**
**Impact:** MEDIUM | **Effort:** S | **Expected Improvement:** Faster LCP, reduced bandwidth

**Why:** Videos should have poster images for instant LCP, and loading strategy can be optimized.

**Files:** Multiple page components (e.g., `pages/Home.tsx`, `pages/DoubleWide.tsx`)

**Implementation:**
```tsx
// Example for pages/Home.tsx hero video
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata" // Keep metadata for faster start
  poster="/assets/images/homepage/landingpageheroheader-poster.jpg" // Add poster image
  className="absolute inset-0 w-full h-full object-cover"
  aria-label="Background video showcasing Gulf South Homes"
>
  <source src="/assets/images/homepage/landingpageheroheader.mp4" type="video/mp4" />
</video>
```

**Action Items:**
1. Generate poster images from first frame of each video
2. Add `poster` attribute to all `<video>` elements
3. Ensure videos are optimized (H.264, reasonable bitrate)

---

### **R8: Add Image Optimization (WebP + srcset)**
**Impact:** MEDIUM-HIGH | **Effort:** M | **Expected Improvement:** 30-50% smaller image payloads

**Why:** WebP is 30-50% smaller than JPEG/PNG. Responsive images reduce bandwidth on mobile.

**Files:** `components/ThumbnailGrid.tsx`, `components/HomeCard.tsx`, hero images in pages

**Implementation:**

**Install vite-imagetools (optional, for build-time optimization):**
```bash
npm install --save-dev vite-imagetools
```

**Update `vite.config.ts` (add to plugins):**
```typescript
import { imagetools } from 'vite-imagetools';

plugins: [
  react(),
  imagetools({
    defaultDirectives: (url) => {
      if (url.searchParams.has('webp')) {
        return new URLSearchParams('format=webp');
      }
      return new URLSearchParams();
    }
  })
],
```

**Update image components (example for ThumbnailGrid.tsx):**
```tsx
// Replace <img> with <picture> for WebP support
<picture>
  <source 
    srcSet={img.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
    type="image/webp" 
  />
  <img
    src={img}
    alt={`${homeName} - Image ${idx + 1}`}
    width={600}
    height={450}
    decoding="async"
    loading={idx < eagerLoadCount ? 'eager' : 'lazy'}
    // ... rest of props
  />
</picture>
```

**Note:** Requires generating WebP versions of images (can be done via build script or manually).

---

### **R9: Add Bundle Analysis Script**
**Impact:** LOW | **Effort:** S | **Expected Improvement:** Visibility into bundle composition

**Why:** Helps identify large dependencies and optimize further.

**Files:** `package.json`

**Implementation:**
```json
{
  "scripts": {
    "generate-sitemap": "node scripts/generate-sitemap.mjs",
    "dev": "vite",
    "build": "npm run generate-sitemap && vite build",
    "build:analyze": "vite build --mode analyze",
    "preview": "vite preview"
  },
  "devDependencies": {
    // ... existing
    "rollup-plugin-visualizer": "^5.12.0"
  }
}
```

**Update `vite.config.ts`:**
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

// In plugins array (only in analyze mode):
plugins: [
  react(),
  // ... other plugins
  process.env.ANALYZE === 'true' && visualizer({
    open: true,
    filename: 'dist/stats.html',
    gzipSize: true,
    brotliSize: true,
  }),
].filter(Boolean),
```

**Usage:** `ANALYZE=true npm run build`

---

### **R10: Optimize Vercel Headers**
**Impact:** LOW-MEDIUM | **Effort:** S | **Expected Improvement:** Better caching, compression

**Why:** Explicit compression and cache headers ensure optimal CDN behavior.

**Files:** `vercel.json`

**Implementation:**
```json
{
  "headers": [
    {
      "source": "/(.*\\.(js|css|json|xml|txt|svg|ico|png|jpg|jpeg|webp|woff|woff2))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(html))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    // ... existing headers
  ]
}
```

---

### **R11: Lazy Load Heavy Components**
**Impact:** LOW-MEDIUM | **Effort:** M | **Expected Improvement:** Smaller initial JS payload

**Why:** Components like carousels and logo scrollers can load after initial render.

**Files:** `pages/Home.tsx`

**Implementation:**
```tsx
// At top of Home.tsx
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const FeaturedCarousel = lazy(() => import('../components/FeaturedCarousel'));
const ManufacturerLogoScroller = lazy(() => import('../components/ManufacturerLogoScroller'));

// Wrap usage in Suspense
<Suspense fallback={<div className="h-64 animate-pulse bg-stone-200 rounded-lg" />}>
  <FeaturedCarousel items={featuredHomes} renderCard={...} />
</Suspense>
```

---

### **R12: Add Performance Monitoring**
**Impact:** LOW (but critical for validation) | **Effort:** S | **Expected Improvement:** Visibility into real-world performance

**Why:** Need to measure improvements and identify regressions.

**Files:** `index.tsx` or `App.tsx`

**Implementation:**
```typescript
// Add to index.tsx after root.render
if ('PerformanceObserver' in window) {
  // Measure Core Web Vitals
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log to console in dev, send to analytics in prod
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', entry.name, entry.value);
      }
      // In production, send to analytics service
      // Example: gtag('event', entry.name, { value: entry.value });
    }
  }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
}
```

---

## 3. Priority Execution Plan (1 Week)

### **Day 1-2: Quick Wins (High Impact, Low Effort)**
- ✅ **R1:** Defer external scripts (`index.html`) - **30 min**
- ✅ **R3:** Remove import map (`index.html`) - **5 min**
- ✅ **R4:** Optimize CSS loading (`index.css`, `index.html`) - **20 min**
- ✅ **R5:** Add resource hints (`index.html`) - **15 min**
- ✅ **R10:** Optimize Vercel headers (`vercel.json`) - **10 min**

**Expected Result:** 500-800ms faster initial load, cleaner dependency resolution

**Validation:** Run Lighthouse before/after, check Network tab for script loading

---

### **Day 3-5: Medium Effort (High Impact)**
- ✅ **R2:** Optimize Vite config (`vite.config.ts`, install terser) - **1-2 hours**
- ✅ **R6:** Lazy load Swiper (`components/FeaturedCarousel.tsx`) - **1 hour**
- ✅ **R11:** Lazy load heavy components (`pages/Home.tsx`) - **1 hour**
- ✅ **R9:** Add bundle analysis (`package.json`, `vite.config.ts`) - **30 min**

**Expected Result:** 30-50% smaller JS bundles, faster parse/compile time

**Validation:** Run `ANALYZE=true npm run build`, check bundle sizes, Lighthouse scores

---

### **Day 6-7: Hardening & Validation**
- ✅ **R7:** Optimize video loading (add poster images) - **2-3 hours**
- ✅ **R8:** Image optimization (WebP conversion, update components) - **3-4 hours**
- ✅ **R12:** Add performance monitoring (`index.tsx`) - **30 min**
- ✅ **Full Lighthouse audit** - **1 hour**
- ✅ **Cross-browser testing** - **1 hour**
- ✅ **Mobile performance testing** - **1 hour**

**Expected Result:** Complete optimization, validated improvements, monitoring in place

**Validation:** 
- Lighthouse scores: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Bundle size reduction: 30-50% smaller JS
- Network waterfall: No render-blocking resources

---

## 4. Validation Checklist

### **Pre-Implementation Baseline**
- [ ] Run Lighthouse audit (Desktop + Mobile)
- [ ] Record Core Web Vitals: LCP, FID/INP, CLS
- [ ] Capture Network waterfall (Chrome DevTools)
- [ ] Measure bundle sizes (`npm run build`, check `dist/` folder)
- [ ] Test on 3G throttling (Chrome DevTools)
- [ ] Check WebPageTest.org (if available)

**Target Metrics:**
- **LCP:** < 2.5s (currently likely 3-5s)
- **FID/INP:** < 100ms (currently likely 200-400ms)
- **CLS:** < 0.1 (currently likely 0.1-0.25)
- **Total JS:** < 500KB gzipped (currently likely 800KB-1.2MB)
- **TTI:** < 3.5s (currently likely 4-6s)

---

### **Post-Implementation Validation**

#### **Build Validation**
- [ ] `npm run build` completes without errors
- [ ] Bundle analysis shows proper chunk splitting
- [ ] No console errors in production build
- [ ] All routes load correctly
- [ ] Images/videos display correctly

#### **Performance Validation**
- [ ] Lighthouse Performance score: **> 90** (Desktop), **> 80** (Mobile)
- [ ] LCP improved by **> 30%**
- [ ] Total JS bundle reduced by **> 30%**
- [ ] No render-blocking scripts (Lighthouse audit)
- [ ] Network waterfall shows deferred scripts loading after `load` event
- [ ] Core Web Vitals pass thresholds (LCP < 2.5s, INP < 200ms, CLS < 0.1)

#### **Functional Validation**
- [ ] GoHighLevel widgets load and function correctly (may load slightly later)
- [ ] All carousels/swipers work correctly
- [ ] Images load correctly (WebP fallback works)
- [ ] Videos play correctly with poster images
- [ ] Fonts load correctly (no FOUT/FOIT)
- [ ] All routes navigate correctly
- [ ] Mobile experience works correctly

#### **Cross-Browser Testing**
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

### **Success Criteria**

**Minimum Success:**
- ✅ Lighthouse Performance: **+15 points**
- ✅ LCP: **-30%** (e.g., 4s → 2.8s)
- ✅ JS Bundle: **-25%** (e.g., 1MB → 750KB)
- ✅ No regressions in functionality

**Target Success:**
- ✅ Lighthouse Performance: **+25 points**
- ✅ LCP: **-50%** (e.g., 4s → 2s)
- ✅ JS Bundle: **-40%** (e.g., 1MB → 600KB)
- ✅ All Core Web Vitals in "Good" range
- ✅ TTI: **-40%** (e.g., 5s → 3s)

**Stretch Goal:**
- ✅ Lighthouse Performance: **90+** (Desktop), **85+** (Mobile)
- ✅ LCP: **< 2s**
- ✅ JS Bundle: **< 500KB** gzipped
- ✅ All Core Web Vitals: **"Good"** (green)

---

## 5. Risk Assessment & Mitigation

### **Risks**

1. **GoHighLevel widgets may not initialize if deferred**
   - **Mitigation:** Test thoroughly, widgets should auto-initialize on script load
   - **Fallback:** Add explicit initialization check if needed

2. **Swiper lazy loading may cause layout shift**
   - **Mitigation:** Use proper Suspense fallback with fixed height
   - **Fallback:** Keep Swiper eager-loaded if issues arise

3. **WebP images may not be generated**
   - **Mitigation:** Use build script or manual conversion
   - **Fallback:** Keep JPEG/PNG, optimize file sizes instead

4. **Vite build config changes may break build**
   - **Mitigation:** Test build locally before deploying
   - **Fallback:** Revert to previous config if issues

5. **Font loading changes may cause FOUT**
   - **Mitigation:** Use `font-display: swap` in font URLs
   - **Fallback:** Keep existing font loading if issues

---

## 6. Open Questions

1. **Do GoHighLevel widgets need to be available immediately on page load?**
   - If yes, we may need to keep chat widget eager-loaded
   - **Assumption:** Deferring is acceptable (widgets can load after initial render)

2. **Are WebP versions of images already available, or do they need to be generated?**
   - **Assumption:** Need to generate WebP versions (can be done via build script)

3. **What is the current Lighthouse Performance score baseline?**
   - **Assumption:** Likely 60-75 (will measure before implementation)

4. **Are there any specific Vercel deployment constraints?**
   - **Assumption:** Standard Vercel deployment, no special constraints

5. **Should we prioritize mobile or desktop performance?**
   - **Assumption:** Mobile-first (most users are mobile)

---

## 7. Next Steps

1. **Immediate:** Review this plan with team, get approval
2. **Day 1:** Capture baseline metrics (Lighthouse, bundle sizes)
3. **Day 1-2:** Implement quick wins (R1, R3, R4, R5, R10)
4. **Day 3-5:** Implement medium-effort optimizations (R2, R6, R9, R11)
5. **Day 6-7:** Hardening, validation, monitoring setup
6. **Post-deployment:** Monitor Core Web Vitals, track improvements

---

## Appendix: File Change Summary

| File | Changes | Impact |
|------|---------|--------|
| `vite.config.ts` | Add build optimization, chunking, terser | HIGH |
| `index.html` | Defer scripts, remove importmap, optimize fonts, add resource hints | HIGH |
| `index.css` | Remove @import, optimize CSS loading | MEDIUM |
| `components/FeaturedCarousel.tsx` | Lazy load Swiper | HIGH |
| `pages/Home.tsx` | Lazy load components, optimize video | MEDIUM |
| `vercel.json` | Add compression/cache headers | LOW |
| `package.json` | Add bundle analysis script | LOW |
| `index.tsx` | Add performance monitoring | LOW |
| Image components | Add WebP support | MEDIUM-HIGH |

---

**Document Version:** 1.0  
**Last Updated:** 2025-01-XX  
**Status:** Ready for Implementation

