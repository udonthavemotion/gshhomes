# TODO Tracker - Gulf South Homes

**Last Updated:** December 28, 2024
**Next Review:** December 29, 2024

---

## P0 - Critical Path (Dec 28-29)

### Production Testing & QA
- [ ] Run production build: `npm run build`
- [ ] Run preview mode: `npm run preview`
- [ ] Test all 14+ main pages load correctly
- [ ] Test all home detail pages (single-wide, double-wide, modular)
- [ ] Verify hero videos load and play on all pages
- [ ] Test contact form submission to GoHighLevel
- [ ] Test home inquiry form submission
- [ ] Check console for all errors/warnings
- [ ] Verify no 404s on internal links

### Mobile Testing
- [ ] Test on iPhone (iOS Safari) - all pages
- [ ] Test on Android (Chrome) - all pages
- [ ] Verify hero video plays on mobile
- [ ] Test form inputs on mobile
- [ ] Test navigation menu open/close on mobile
- [ ] Test carousel swipes on mobile
- [ ] Check font sizes readability
- [ ] Verify button/CTA touch targets (44px min)

### Google Analytics 4 Setup
- [ ] Create GA4 property in Google Analytics
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add to .env.local as VITE_GA4_MEASUREMENT_ID
- [ ] Install @react-ga/core
- [ ] Initialize GA4 in main.tsx
- [ ] Track page views on route changes
- [ ] Track form submission as conversion event
- [ ] Track CTA clicks (buttons with data-event attributes)
- [ ] Test GA4 events in real-time dashboard
- [ ] Document event names in analytics.md

---

## P1 - High Priority (Dec 29-30)

### Error Handling
- [ ] Create Error Boundary component
- [ ] Add 404 Not Found page
- [ ] Update App.tsx routes with fallback
- [ ] Set up Sentry account and DSN
- [ ] Install @sentry/react package
- [ ] Initialize Sentry in main.tsx
- [ ] Add error logging to form submissions
- [ ] Test error catching with intentional error

### Automated Testing
- [ ] Install Vitest + @testing-library/react
- [ ] Create vitest.config.ts
- [ ] Create vitest.setup.ts
- [ ] Write tests for useHomeFilters hook
- [ ] Write tests for useClickOutside hook
- [ ] Write tests for useEscapeKey hook
- [ ] Write tests for useScrollLock hook
- [ ] Write tests for Button component
- [ ] Write E2E test for contact form submission
- [ ] Set up GitHub Actions CI/CD workflow
- [ ] Run tests locally: `npm test`
- [ ] Verify test coverage > 80%

### SEO & Search Console
- [ ] Verify sitemap.xml exists and is valid
- [ ] Check robots.txt configuration
- [ ] Verify all 36 URLs in sitemap
- [ ] Go to Google Search Console
- [ ] Add/verify site property
- [ ] Submit sitemap: `https://gulfsouthhomesinc.com/sitemap.xml`
- [ ] Request indexing of top 5 pages
- [ ] Monitor coverage report
- [ ] Check for crawl errors
- [ ] Verify structured data (JSON-LD)

---

## P2 - Medium Priority (Dec 30-31)

### Code Quality
- [ ] Install ESLint and @eslint/js
- [ ] Create eslint.config.js
- [ ] Install Prettier
- [ ] Create .prettierrc
- [ ] Add lint scripts to package.json
- [ ] Run `npm run lint` on entire codebase
- [ ] Fix any linting errors
- [ ] Install Husky
- [ ] Create .husky/pre-commit hook
- [ ] Set up lint-staged
- [ ] Create CONTRIBUTING.md with standards

### Security & Environment
- [ ] Review .env.local template
- [ ] Document all required env variables
- [ ] Plan backend API for Gemini key migration
- [ ] Create /api/generate-description endpoint (future)
- [ ] Generate list of secrets needed for Vercel
- [ ] Set up Vercel environment variables
- [ ] Review .gitignore for sensitive files

### PWA & Performance
- [ ] Create public/sw.js (Service Worker)
- [ ] Create public/offline.html
- [ ] Register Service Worker in main.tsx
- [ ] Verify manifest.json is valid
- [ ] Test PWA on mobile (add to home screen)
- [ ] Run Lighthouse audit
- [ ] Document performance metrics
- [ ] Identify optimization opportunities

### Documentation
- [ ] Create TESTING.md with test instructions
- [ ] Create DEPLOYMENT.md with checklist
- [ ] Create analytics.md with event list
- [ ] Update CLAUDE.md with new tools/features
- [ ] Create CONTRIBUTING.md with standards
- [ ] Document all GA4 events and tracking
- [ ] Create ERRORS.md for known issues

---

## P3 - Nice to Have (Jan 1+)

### Analytics Deep-Dive
- [ ] Set up conversion funnels in GA4
- [ ] Create custom dashboard for home views
- [ ] Track which filters users apply most
- [ ] Track which homes get most views
- [ ] Create alerts for high-traffic events
- [ ] Monitor bounce rate by page
- [ ] Analyze user acquisition sources

### Optimization
- [ ] Implement image lazy loading
- [ ] Compress all images (WebP format)
- [ ] Implement font optimization
- [ ] Add code splitting for large pages
- [ ] Optimize bundle with tree-shaking
- [ ] Implement caching strategy
- [ ] Monitor Core Web Vitals weekly

### Features
- [ ] Implement heatmap tracking (Hotjar)
- [ ] Add session replay (LogRocket)
- [ ] Create admin dashboard for analytics
- [ ] Implement A/B testing framework
- [ ] Add live chat support
- [ ] Implement comparison tool for homes

---

## 🔄 In Progress

Currently working on:
- [ ] (Add current task here)

---

## ✅ Completed

### December 28, 2024

#### Completed by: Claude Code (Developer)

**Features Shipped:**
- ✅ Financing page with hero video
- ✅ LenderRibbon component
- ✅ Lenders carousel (LogoScroller)
- ✅ Dynamic sitemap generation (36 URLs)
- ✅ Brand compliance fixes
  - Hardcoded HEX → Tailwind tokens
  - Code splitting (63% bundle reduction)
  - Video overlay darkness (30%)

**Commits:**
- ✅ e9ae428: Update pages and components: add LenderRibbon component and update styling
- ✅ 3a7e297: Add Lenders Carousel components and update navigation
- ✅ a167546: Update manufacturer carousel, styling, and page components
- ✅ (Previous commits dating back to Dec 24)

---

## 📊 Completion Rate

| Category | Completed | Total | % |
|----------|-----------|-------|---|
| P0 Tasks | 0 | 24 | 0% |
| P1 Tasks | 0 | 18 | 0% |
| P2 Tasks | 0 | 16 | 0% |
| **TOTAL** | **0** | **58** | **0%** |

---

## 🎯 Daily Goals

### December 28
- [ ] Complete all P0 production testing (12 items)
- [ ] Complete GA4 setup (10 items)
- **Target: 22 items completed**

### December 29
- [ ] Complete all error handling (7 items)
- [ ] Complete automated testing setup (12 items)
- [ ] Complete SEO submission (6 items)
- **Target: 25 items completed (47 total)**

### December 30
- [ ] Complete code quality setup (11 items)
- [ ] Complete security/environment (3 items)
- **Target: 14 items completed (61 total)**

### December 31
- [ ] Complete PWA features (5 items)
- [ ] Complete documentation (6 items)
- [ ] Deploy to production
- **Target: 11 items completed (all done!)**

---

## ⚠️ Blockers & Notes

- **Blocker:** None currently
- **Risk:** Mobile testing might reveal unexpected responsive issues
- **Note:** GA4 property must be created before setup can begin
- **Note:** Sentry account needed for error logging integration

---

## 🔗 Related Documents

- [DAILY_PROGRESS.md](./DAILY_PROGRESS.md) - Detailed daily work log
- [SPRINT_PLAN.md](./SPRINT_PLAN.md) - Sprint timeline and breakdown
- [CLAUDE.md](./CLAUDE.md) - Project context and standards
- [QA_CHECKLIST_GOHIGHLEVEL_FORM.md](./QA_CHECKLIST_GOHIGHLEVEL_FORM.md) - Form testing

---

## 💾 How to Update This File

**When you complete a task:**
```markdown
- [x] Task name - COMPLETED
```

**When you start a task:**
```markdown
- [ ] Task name (🔄 IN PROGRESS)
```

**When you encounter a blocker:**
```markdown
- [ ] Task name (⚠️ BLOCKED - reason)
```

**Update the completion rate:**
Edit the table to reflect: `Completed / Total`

**Update the "In Progress" section** at the top of the file to show current work.

---

*This file is a living document. Update it daily to track progress toward deployment.*
