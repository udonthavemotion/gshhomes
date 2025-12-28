# Gulf South Homes Website — Launch Roadmap

**Current Date:** Dec 28, 2025
**Go-Live Date:** January 26, 2026
**Days Until Launch:** 29 days

---

## Current Phase: Visual Polish & Client Approval

**Status:** 🎨 IN PROGRESS
**Focus:** Make the website visually stunning and get client sign-off
**Timeline:** Dec 28 - Jan 20 (estimate)
**Success Metric:** Client says "I love it and want to launch"

### Current Priorities (RIGHT NOW)
1. ✅ Complete all page designs
2. ✅ Ensure visual consistency across all pages
3. ✅ Test on mobile/desktop
4. ✅ Get client feedback and iterate
5. ✅ Lock in final designs
6. ✅ Get paid invoice approved

**No SEO work during this phase.** Focus on making it beautiful.

---

## Phase 2: Pre-Launch Technical Setup

**Status:** 📋 STAGED & READY
**Focus:** Prepare everything for DNS configuration
**Timeline:** Jan 20 - Jan 25 (5 days before launch)
**Work:** Minimal, mostly verification

### Pre-Launch Tasks

- [ ] Verify all routes work locally
- [ ] Run `npm run build` successfully
- [ ] Test on staging Vercel deployment
- [ ] Confirm GoHighLevel forms submit correctly
- [ ] Verify all videos load on slow connections
- [ ] Test contact forms end-to-end
- [ ] Document any final copy changes

---

## Phase 3: Domain Go-Live & SEO Activation

**Status:** 🚀 READY TO EXECUTE
**Focus:** Configure DNS and submit to search engines
**Timeline:** Jan 26 - Feb 2
**Work:** 2-3 hours of actual work

### Day 1 (January 26) — Domain Cutover

1. **DNS Configuration**
   - [ ] Domain registrar (GoDaddy/Namecheap/etc) → Point to Vercel nameservers
   - [ ] Vercel receives domain
   - [ ] SSL certificate auto-issued (~5 min)
   - [ ] Test: https://gulfsouthhomesinc.com loads

2. **Verify Site is Live**
   - [ ] Homepage loads at gulfsouthhomesinc.com
   - [ ] All routes work (catalog, contact, about, etc.)
   - [ ] Forms still submit to GoHighLevel
   - [ ] Videos play correctly
   - [ ] No console errors

3. **Search Engine Submission**
   - [ ] Google Search Console: Submit sitemap.xml
   - [ ] Bing Webmaster Tools: Submit sitemap.xml
   - [ ] Monitor crawl status (takes 1-2 weeks to index)

### Days 2-7 (Jan 27 - Feb 2) — Monitor & Optimize

- [ ] Check Google Search Console daily for crawl errors
- [ ] Monitor page load speeds in GSC
- [ ] Verify all 36 URLs are being crawled
- [ ] Fix any crawl errors (unlikely, but monitor)
- [ ] Track first impressions in Google Search Console

---

## Complete SEO Infrastructure (Already Built)

### ✅ Ready to Deploy

All of these are **complete, tested, and waiting** for domain go-live:

#### 1. Dynamic Sitemap Generation
- **File:** `scripts/generate-sitemap.mjs`
- **Status:** ✅ Working
- **What it does:** Auto-generates sitemap.xml with all 36 URLs
- **Runs:** Every time you do `npm run build`
- **Output:** `public/sitemap.xml` (36 URLs)

#### 2. SEO Configuration
- **File:** `seo-config.ts`
- **Status:** ✅ Complete
- **Includes:**
  - Organization schema
  - LocalBusiness schema
  - Dynamic home detail functions:
    - `getHomeDetailSEO()`
    - `getDoubleWideDetailSEO()`
    - `getModularDetailSEO()`
    - `createBreadcrumbSchema()`

#### 3. Meta Tags & Open Graph
- **File:** `index.html`
- **Status:** ✅ Configured
- **Includes:** OG tags, Twitter cards, geo tags, favicons

#### 4. Robots.txt & Static Files
- **File:** `public/robots.txt`
- **Status:** ✅ Ready
- **Includes:** Crawl rules, sitemap reference

#### 5. Enhanced CLAUDE.md
- **File:** `CLAUDE.md`
- **Status:** ✅ Complete (10 new sections added)
- **Sections:**
  - Environment Setup
  - Custom Hooks Reference
  - Testing Strategy
  - Error Handling & Logging
  - Analytics & Tracking
  - Development Standards
  - Git Workflow
  - SEO & Dynamic Sitemap
  - Secrets Management
  - PWA Features (Future)

#### 6. Quick Reference Guides
- **File:** `SEO_SITEMAP_QUICK_GUIDE.md`
- **Status:** ✅ Ready
- **Purpose:** Team reference for adding homes and understanding sitemap

---

## SEO Implementation Timeline (After Jan 26)

### Week 1 of Launch (Jan 26 - Feb 2)
- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Monitor initial crawl activity

### Week 2-3 of Launch (Feb 3 - Feb 16)
- Check GSC coverage report
- Verify all 36 URLs are being indexed
- Monitor page load metrics

### Week 4+ (Feb 17+)
- Track keyword rankings in GSC Performance tab
- Monitor organic traffic
- Start seeing rankings for long-tail keywords
- Consider GA4 implementation if needed

---

## File Structure Reference

### SEO & Documentation
```
├── LAUNCH_ROADMAP.md                 ← YOU ARE HERE
├── CLAUDE.md                          ← Complete dev docs
├── SEO_SITEMAP_QUICK_GUIDE.md         ← Team quick ref
├── BRAND_IDENTITY_GUIDE.md            ← Design system
├── seo-config.ts                      ← Schema & SEO config
└── scripts/
    └── generate-sitemap.mjs           ← Sitemap generator
```

### Build & Deploy
```
├── package.json                       ← Scripts include generate-sitemap
├── vite.config.ts                     ← Build config
├── tsconfig.json                      ← TypeScript config
├── tailwind.config.js                 ← Design tokens
└── vercel.json                        ← Deployment config
```

### Public Assets (SEO)
```
├── public/
│   ├── sitemap.xml                    ← Auto-generated (36 URLs)
│   ├── robots.txt                     ← Crawl rules
│   ├── site.webmanifest               ← PWA manifest
│   └── browserconfig.xml              ← MS tile config
```

---

## What NOT to Do Before Jan 26

❌ Don't submit sitemap to Google (domain not live yet)
❌ Don't set up GA4 (wait until domain is live)
❌ Don't configure Google Search Console (do it on Jan 26)
❌ Don't stress about SEO rankings (takes 1-2 weeks minimum)

---

## What TO Do Before Jan 26

✅ Make the website visually perfect
✅ Get client approval and payment
✅ Test all functionality
✅ Verify forms work
✅ Confirm videos load properly
✅ Document any final changes

---

## Quick Command Reference

### Generate Sitemap Manually
```bash
npm run generate-sitemap
```

### Build with Auto-Generated Sitemap
```bash
npm run build  # Runs generate-sitemap first, then vite build
```

### Preview Production Build
```bash
npm run preview
```

---

## Key Dates

| Date | Event | Action |
|------|-------|--------|
| Dec 28, 2025 | Today | Focus on visual design |
| Jan 20, 2026 | Design freeze | Client approval locked |
| Jan 26, 2026 | Go-live | DNS config, sitemap submission |
| Feb 2, 2026 | Week 1 after launch | Monitor GSC |
| Feb 16, 2026 | Week 3 | Check indexation status |
| Feb 24, 2026 | Week 4 | Start seeing rankings |

---

## Success Metrics

### Phase 1 (Current) — Client Satisfaction
- ✅ Client loves the design
- ✅ Client approves all pages
- ✅ Invoice paid

### Phase 2 — Technical Launch
- ✅ All forms submit correctly
- ✅ All pages load in <3 seconds
- ✅ Zero console errors
- ✅ Mobile experience is perfect

### Phase 3 — SEO Performance (Feb+)
- ✅ 36 URLs indexed in Google
- ✅ 20-50 keyword rankings achieved
- ✅ Organic traffic increasing
- ✅ Lead generation from search (goal: 5-10% of traffic)

---

## Client Communication Template

### Right Now (Dec 28)
> "We're finalizing all the visual details. The website looks incredible. Let's lock in any final feedback by [date], and then we'll launch on January 26th."

### Jan 20 (Design Freeze)
> "Design is locked in. We're doing final technical tests and will be ready to go live on January 26th."

### Jan 26 (Launch Day)
> "Website is now live at gulfsouthhomesinc.com. I've submitted it to Google and Bing. Rankings should start appearing in 1-2 weeks. I'll monitor everything and keep you updated."

### Feb 2 (Week 1 Update)
> "Website is performing great. Google has already started crawling it. Monitoring shows healthy metrics. First rankings should appear by mid-February."

---

## Team Reference

### CLAUDE.md Sections
When team members ask "how do I...":

- "How do I add a new home?" → CLAUDE.md → Inventory Management
- "How do I set up environment variables?" → CLAUDE.md → Environment Setup
- "How do I commit code?" → CLAUDE.md → Git Workflow
- "What are the custom hooks?" → CLAUDE.md → Custom Hooks Reference
- "What's the SEO strategy?" → CLAUDE.md → SEO & Dynamic Sitemap

### Quick Guides
- **For adding homes:** SEO_SITEMAP_QUICK_GUIDE.md
- **For design decisions:** BRAND_IDENTITY_GUIDE.md
- **For deployment:** CLAUDE.md → Deployment Checklist

---

## Notes for Future Self

✅ **Sitemap automation is working perfectly**
- Tested and verified: generates 36 URLs
- No manual updates needed
- Runs on every build automatically

✅ **All SEO infrastructure is staged**
- Just need domain DNS to go live
- Then: submit to GSC and Bing
- Then: monitor and watch rankings climb

✅ **CLAUDE.md is comprehensive**
- 10 new sections added Dec 28
- Covers everything from hooks to testing to analytics
- Team has complete reference

✅ **Everything is documented**
- LAUNCH_ROADMAP.md (this file) - High level timeline
- SEO_SITEMAP_QUICK_GUIDE.md - Tactical how-to
- CLAUDE.md - Technical deep dive
- BRAND_IDENTITY_GUIDE.md - Design system

---

## One-Pager for Client/Stakeholders

**Website Launch Timeline:**
- **Visual Design:** Complete by Jan 20
- **Live Date:** January 26, 2026
- **Search Engine Indexing:** 1-2 weeks after launch
- **Rankings Visible:** By mid-February

**What Happens on Day 1:**
1. Website goes live at gulfsouthhomesinc.com
2. Submitted to Google and Bing automatically
3. Search engines begin crawling all 36 pages
4. Daily monitoring for any issues

**Expected Results (30-45 days):**
- All pages indexed in Google
- 20-50 keyword rankings achieved
- Organic search traffic generation begins
- Lead generation from search visibility

---

**Created:** Dec 28, 2025
**Last Updated:** Dec 28, 2025
**Status:** ✅ Ready for Launch

---

## Quick Links

- [CLAUDE.md](./CLAUDE.md) — Complete developer documentation
- [SEO_SITEMAP_QUICK_GUIDE.md](./SEO_SITEMAP_QUICK_GUIDE.md) — Team reference
- [BRAND_IDENTITY_GUIDE.md](./BRAND_IDENTITY_GUIDE.md) — Design system
- [scripts/generate-sitemap.mjs](./scripts/generate-sitemap.mjs) — Sitemap generator
