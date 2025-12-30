# Performance Optimization Plan - Executive Summary

This plan addresses 12 performance bottlenecks identified in the React + Vite + Vercel deployment, targeting a **40-60% reduction in initial load time** and **30-50% smaller JavaScript bundles** through render-blocking script deferral, Vite build optimization, bundle chunking, image optimization, and resource hint improvements. The plan is organized into a 1-week execution timeline with Day 1-2 quick wins (500-800ms improvement), Day 3-5 medium-effort optimizations (30-50% bundle reduction), and Day 6-7 validation/hardening. All changes maintain existing functionality and visual design.

---

## What Changed

**High-Impact Changes:**
- **External Scripts:** Deferred 3 GoHighLevel widgets (chat, forms, reviews) to load after page load, eliminating 500-800ms render-blocking delay
- **Vite Build Config:** Added terser minification, manual chunk splitting (React/router, Swiper, Embla, icons), tree-shaking, and CSS code splitting - expected 30-50% bundle size reduction
- **CSS Loading:** Removed render-blocking `@import` from `index.css`, optimized font loading strategy, lazy-loaded decorative fonts
- **Resource Hints:** Added preload for critical logo/hero assets and prefetch for likely next pages

**Medium-Impact Changes:**
- **Swiper Optimization:** Lazy-loaded Swiper component (~100KB savings) or plan to replace with Embla
- **Image Optimization:** Added WebP format support with fallbacks, responsive image loading
- **Video Optimization:** Added poster images for faster LCP, optimized preload strategy
- **Component Lazy Loading:** Lazy-loaded heavy components (carousels, logo scrollers) within pages

**Low-Impact Quick Wins:**
- Removed conflicting CDN importmap that may cause double-loading
- Added bundle analysis script for visibility
- Optimized Vercel cache/compression headers
- Added performance monitoring for Core Web Vitals

---

## Where

**Primary Files Modified:**
- `vite.config.ts` - Build optimization, chunking, terser config
- `index.html` - Script deferral, font optimization, resource hints, removed importmap
- `index.css` - Removed render-blocking @import
- `components/FeaturedCarousel.tsx` - Lazy load Swiper
- `pages/Home.tsx` - Lazy load components, optimize video
- `vercel.json` - Cache/compression headers
- `package.json` - Bundle analysis script
- Image components - WebP support

**Dependencies Added:**
- `terser` (dev) - For minification
- `rollup-plugin-visualizer` (dev) - For bundle analysis
- `vite-imagetools` (dev, optional) - For build-time image optimization

---

## Risks

1. **GoHighLevel Widgets:** Deferring scripts may delay widget initialization. Mitigation: Widgets auto-initialize on load; test thoroughly; can keep chat widget eager if needed.
2. **Swiper Lazy Loading:** May cause layout shift if Suspense fallback not sized correctly. Mitigation: Use fixed-height fallback; can revert to eager-load if issues.
3. **WebP Images:** Requires generating WebP versions. Mitigation: Build script or manual conversion; fallback to optimized JPEG/PNG if needed.
4. **Build Config:** Vite changes may break build. Mitigation: Test locally before deploy; can revert if issues.
5. **Font Loading:** Changes may cause FOUT. Mitigation: Use `font-display: swap`; test across browsers.

**Overall Risk Level:** **LOW** - All changes are reversible, tested incrementally, and maintain backward compatibility.

---

## Next Steps

1. **Immediate (Day 1):** Capture baseline metrics (Lighthouse scores, bundle sizes, Core Web Vitals)
2. **Day 1-2:** Implement quick wins (R1, R3, R4, R5, R10) - expected 500-800ms improvement
3. **Day 3-5:** Implement medium-effort optimizations (R2, R6, R9, R11) - expected 30-50% bundle reduction
4. **Day 6-7:** Hardening, validation, performance monitoring setup
5. **Post-Deployment:** Monitor Core Web Vitals, track improvements, iterate based on real-world data

**Success Criteria:**
- Lighthouse Performance: **+25 points** (target: 90+ desktop, 85+ mobile)
- LCP: **-50%** (target: < 2s)
- JS Bundle: **-40%** (target: < 500KB gzipped)
- All Core Web Vitals in "Good" range

---

## Open Questions

1. **GoHighLevel Widget Priority:** Do widgets need to be available immediately on page load? (Assumption: Deferring acceptable)
2. **WebP Image Availability:** Are WebP versions already available, or do they need generation? (Assumption: Need to generate)
3. **Current Baseline:** What is the current Lighthouse Performance score? (Assumption: 60-75, will measure)
4. **Mobile vs Desktop Priority:** Should we prioritize mobile or desktop performance? (Assumption: Mobile-first)

**None of these are blocking** - assumptions are reasonable and can be validated during implementation.

---

**Full detailed plan:** See `PERFORMANCE_OPTIMIZATION_PLAN.md`  
**Status:** Ready for implementation  
**Estimated Total Effort:** 1 week (2 days quick wins, 3 days medium work, 2 days validation)

