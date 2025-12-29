# Home Page - Mobile Storytelling Audit

**Route:** `/`
**Component:** `pages/Home.tsx`
**Primary Purpose:** Landing page, brand introduction, inventory preview
**Primary Audience:** First-time visitors searching for manufactured/modular homes in Louisiana

---

## Current Section Order

### Mobile Viewport Flow (Scroll Depth %)

1. **Hero Section (0-15%)** - Full-screen video, animated headline, 2 CTAs
2. **Marquee Trust Banner (15-18%)** - Scrolling awards/contact info
3. **Bento Grid Inventory Links (18-35%)** - 6 category cards (Single/Double/Modular/All/Brands)
4. **Award Showcase (35-55%)** - Bayou's Best 2025 + team photo + manufacturer logos
5. **Featured Homes Carousel (55-70%)** - 7 home cards + "View All Homes" CTA
6. **Restore Louisiana Section (70-80%)** - Grant program feature with video background
7. **Current Deals (80-90%)** - 3 deal cards + "View All Deals" CTA
8. **Why Choose Us (90-110%)** - 6 benefit cards
9. **How It Works (110-130%)** - 4-step process cards
10. **Reviews Preview (130-145%)** - Testimonial widget embed
11. **About Preview (145-160%)** - "Family-Owned Since 1995" paragraph + CTAs
12. **Parts Store Preview (160-175%)** - 6 category icons + CTA
13. **Contact Form (175-190%)** - GoHighLevel form embed

**Total scroll depth:** ~190% (1.9x viewport height on mobile)

---

## Conversion Scores (1-10)

| Metric | Score | Notes |
|--------|-------|-------|
| **Hook Clarity** | 9/10 | Hero delivers "New [Rotating Type] Homes For Sale" + "Serving Southeast Louisiana" + trust badges ("Est. 1995, Family-Owned, 2025 Bayou's Best") - Clear identity + location |
| **Speed to CTA** | 6/10 | **Issue:** Primary inventory CTA buried at 55-70% scroll depth. Hero CTAs are good ("View Homes" + "Request Call Back"), but redundant "View All" appears 3x down the page |
| **Trust Stacking** | 8/10 | **Good:** Marquee banner (15%) shows awards immediately. Award showcase (35%) reinforces. **Issue:** Could be earlier (trust ribbon at 10% would be stronger) |
| **Info Density** | 7/10 | **Mixed:** Hero is clean. Bento grid is visual. BUT: "About Preview" section (145-160%) has 100-word paragraph (WALL_OF_TEXT risk). Rest is scannable |
| **Friction** | 7/10 | **Issues:** (1) Too many "View Homes" CTAs (hero, bento, featured carousel = 3x redundancy). (2) Contact form at bottom = high scroll effort. (3) No sticky phone CTA |
| **Visual Rhythm** | 8/10 | **Strong:** Good variety (video hero → marquee → cards → carousel → video → cards). Breathing room between sections. Each section visually distinct |

**Overall Mobile Conversion Score:** 7.5/10 (Above Average - but fixable gaps)

---

## Risk Flags

### 🔴 Critical Issues

1. **CTA_TOO_LATE**
   - **Location:** Featured Homes "View All Homes" button at ~65% scroll depth
   - **Issue:** Users who want to browse inventory must scroll past 4 sections (hero → marquee → bento → award showcase) to see home cards
   - **Mobile Reality:** 47-second attention span = user bounces before reaching carousel
   - **Fix:** Move Featured Homes section to position #3 (after marquee, before bento grid)

2. **SECTION_REDUNDANCY**
   - **Locations:**
     - Hero: "View Homes For Sale" (CTA #1)
     - Bento grid: "View All Homes" card (CTA #2)
     - Featured Homes: "View All Homes" button (CTA #3)
   - **Issue:** 3 identical CTAs within 70% scroll depth = button fatigue
   - **User confusion:** "Which one do I click? What's the difference?"
   - **Fix:** Keep hero CTA, remove bento "View All" card (bento cards are clickable), keep Featured Homes CTA (contextual - after seeing homes)

### 🟡 Warning Signs

3. **WALL_OF_TEXT**
   - **Location:** About Preview section (lines 988-1000)
   - **Text block:** ~100 words in single paragraph ("Gulf South Homes has been serving Southeast Louisiana families for over 30 years...")
   - **Mobile Impact:** Gray paragraph blob = instant scroll-past
   - **Fix:** Convert to 3 bullets:
     - "30+ years serving Southeast Louisiana families"
     - "Family-owned business committed to quality & service"
     - "Most trusted manufactured & modular home dealer in the region"
   - **Add:** "Read Our Story →" toggle for full paragraph

4. **MISSING_NEXT_STEP** (Parts Store Preview)
   - **Location:** Section 12 (160-175%)
   - **Content:** 6 icon cards (Doors, Steps, Skirting, Windows, Plumbing, Electrical)
   - **Issue:** No context - "Why am I seeing this? Is this for sale? Can I order online?"
   - **Fix:** Add 1-sentence intro: "Need repairs or upgrades? Visit our on-site parts store for everything from doors to electrical."

### 🟢 Optimizations

5. **Trust Proof Timing** (Good, Could Be Better)
   - **Current:** Marquee at 15%, Award Showcase at 35%
   - **Optimization:** Add trust ribbon immediately after hero (5-10% depth) with:
     - "📍 1986 Highway 182, Houma, LA | 📞 (985) 876-0222"
     - "🏆 2025 Bayou's Best Choice | 🏠 Est. 1995 | ⭐ BBB Accredited"
   - **Impact:** Identity + trust within first 10% = higher engagement

6. **Hero Video Overlay** (Minor Adjustment)
   - **Current:** Gradient overlay `from-black/20 via-black/30 to-black/90`
   - **Issue:** Top text (headline) has lower contrast (20-30% dark)
   - **Fix:** Invert gradient → `from-black/40 via-black/30 to-black/80` (darker at top for headline readability)

---

## First Meaningful CTA Location

### Primary CTA: "View Homes For Sale" (Hero)
- **Scroll Depth:** 5-10% (visible above fold after headline)
- **✅ GOOD:** Immediate access to inventory

### Secondary CTA: "Request a Call Back" (Hero)
- **Scroll Depth:** 5-10% (next to primary CTA)
- **✅ GOOD:** Alternative action for users who want to talk first

### Phone Number (Clickable)
- **Scroll Depth:** 15% (marquee banner) + footer (~190%)
- **❌ ISSUE:** Not visible in hero. Users must scroll to marquee or footer to call.
- **Fix:** Add phone number to sticky mobile CTA bar (bottom of viewport)

### Tertiary CTA: "View All Homes" (Featured Carousel)
- **Scroll Depth:** 65%
- **⚠️ WARNING:** Too late for impatient users
- **Fix:** Move carousel to 20-30% scroll depth (after trust ribbon, before bento grid)

---

## Recommended Mobile-First Section Order

### Before (Current Desktop-Optimized Order)
1. Hero (0-15%)
2. Marquee (15-18%)
3. Bento Grid (18-35%)
4. Award Showcase (35-55%)
5. Featured Homes (55-70%) ← **Inventory too late**
6. Restore LA (70-80%)
7. Deals (80-90%)
8. Why Choose Us (90-110%)
9. How It Works (110-130%)
10. Reviews (130-145%)
11. About (145-160%)
12. Parts (160-175%)
13. Contact Form (175-190%)

### After (Mobile-Optimized Order)
1. **Hero** (0-10%) - Keep as-is (strong hook)
2. **Trust Ribbon** (10-12%) - NEW: "📍 Houma, LA | 📞 (985) 876-0222 | 🏆 2025 Bayou's Best"
3. **Featured Homes Carousel** (12-30%) - MOVED UP: Show inventory immediately
4. **Bento Grid** (30-45%) - Category exploration (after seeing sample homes)
5. **Why Choose Us** (45-60%) - MOVED UP: Trust stacking ("Huge Stock, On-Site Parts, Family-Owned")
6. **Award Showcase** (60-75%) - Keep (visual break + trust reinforcement)
7. **Current Deals** (75-85%) - Affordability signal ("$5,000 Off, Free Slab")
8. **Restore Louisiana** (85-95%) - Grant program (affordability + urgency)
9. **How It Works** (95-110%) - Process clarity (after interest is established)
10. **Reviews Preview** (110-125%) - Social proof (final trust layer before contact)
11. **Contact Form** (125-140%) - Lead capture (after full story arc)
12. **About Preview** (140-150%) - COMPRESSED: 3 bullets + "Read More" toggle
13. **Parts Store Preview** (150-160%) - COMPRESSED: 3 icons + 1-sentence intro

**New Total Scroll Depth:** ~160% (reduced from 190% by compressing About + Parts)

---

## Keep / Change / Remove List

### ✅ Keep (Works on Mobile)

1. **Hero Section** - Strong hook, clear CTAs, rotating product types = engaging
2. **Marquee Banner** - Scrolling trust + contact info = mobile-friendly, attention-grabbing
3. **Bento Grid** - Visual category exploration, good hover states (translate to tap on mobile)
4. **Award Showcase** - Team photo + badge + manufacturers = authentic trust proof
5. **Reviews Widget** - Social proof with visual cards (iframe loads well on mobile)
6. **How It Works (4 steps)** - Clear process, scannable cards
7. **Deals Section (3 cards)** - Affordability proof, colorful gradient cards = eye-catching

### 🔄 Change (Needs Mobile Optimization)

8. **Featured Homes Carousel**
   - **Change:** Move from section 5 → section 3 (after trust ribbon)
   - **Reason:** Inventory must be visible within first 30% scroll depth
   - **Keep:** Swiper carousel (works well on mobile)

9. **About Preview Paragraph**
   - **Change:** Convert 100-word paragraph to 3 bullets + "Read More" toggle
   - **Reason:** WALL_OF_TEXT on mobile = bounce risk
   - **Keep:** Team photo carousel idea (if exists), 2 CTA buttons (About + Team)

10. **Parts Store Preview**
   - **Change:** Add 1-sentence intro above icons ("Need repairs? Visit our parts store.")
   - **Change:** Reduce 6 icons → 3 on mobile (Doors, Windows, Plumbing), show rest in "See All →" link
   - **Reason:** 6 icons = visual clutter on small screens

11. **Why Choose Us**
   - **Change:** Move from section 8 → section 5 (after bento grid)
   - **Reason:** Trust proof should appear earlier (before 60% depth)
   - **Keep:** 6 cards (good variety), gradient icon badges

12. **Contact Form Section**
   - **Change:** Add phone CTA above form: "Prefer to talk? Call (985) 876-0222"
   - **Reason:** Form abandonment on mobile = 70%, phone is faster
   - **Keep:** GoHighLevel iframe (works on mobile)

### ❌ Remove (Redundant or Low Value)

13. **Bento Grid "View All Homes" Card**
   - **Remove:** Entire card (line 345-375)
   - **Reason:** Redundant with hero CTA + featured carousel CTA
   - **Replace with:** "Schedule a Tour" card (different action, new value)
   - **New card copy:**
     - Headline: "Visit Our Showroom"
     - Subhead: "See homes in person at our Houma location"
     - CTA: "Get Directions →"

14. **Restore Louisiana Section (Conditional)**
   - **Consider removing** if grant program is inactive/expired
   - **If active:** Keep but compress (remove duplicate CTAs, keep 1 CTA max)
   - **Current issue:** 2 CTAs in one section ("Check Eligibility" + "Call Now") = choice overload

---

## Mobile Compression Plan (Editorial Surgery)

| Location (Component/Section) | Current Purpose | Problem | Convert To | New Structure (Sketch) |
|------------------------------|-----------------|---------|------------|------------------------|
| **About Preview Paragraph** (lines 995-999) | Explain company history + values | 100-word paragraph = WALL_OF_TEXT on mobile | 3-bullet list + "Read More" toggle | **Bullets:**<br>• 30+ years serving Louisiana families<br>• Family-owned, quality-focused<br>• Most trusted dealer in the region<br>**Toggle:** "Read Full Story →" |
| **Parts Store Icons** (lines 1032-1051) | Show product categories | 6 icons = cluttered on mobile (320px wide) | 3 icons on mobile + "See All Parts →" link | **Mobile (<=640px):**<br>Show: Doors, Windows, Plumbing<br>Hide: Steps, Skirting, Electrical<br>**Desktop:** Show all 6 |
| **Restore LA Section CTAs** (lines 646-663, 721-738) | Drive grant applications + calls | 2 CTAs per layout (mobile + desktop) = redundant | 1 CTA max ("Check Eligibility"), remove phone CTA (already in sticky bar) | **Remove:** Phone CTA button<br>**Keep:** "Check Your Eligibility" primary button<br>**Add:** Small text link: "Questions? Call us" |
| **Featured Carousel "View All" Button** (lines 578-583) | Navigate to full catalog | Redundant (hero CTA does same thing) | Differentiate copy: "Browse All 50+ Homes →" | **Change:** Add inventory count to create new value ("View All" → "Browse All 50+ Homes") |
| **Bento "View All Homes" Card** (lines 345-375) | Navigate to catalog | Redundant with hero + carousel CTAs | Replace with "Schedule Tour" card | **New Card:**<br>Headline: "Visit Our Showroom"<br>Subhead: "See homes in person"<br>CTA: "Get Directions →"<br>Icon: MapPin |
| **Contact Form Section Heading** (lines 1070-1076) | Introduce form | Generic "Get In Touch" = no urgency | Add urgency + phone alternative | **New Heading:**<br>"Ready to Find Your Home?"<br>**New Subhead:**<br>"Submit the form below or call (985) 876-0222 now"<br>**Impact:** Phone CTA visible before form |

---

## Acceptance Criteria (Testable)

### Identity & Location
- [ ] Company name visible in hero (logo or text) within first screen
- [ ] Location "Houma, LA" or "Southeast Louisiana" visible within 10% scroll depth
- [ ] Phone number "(985) 876-0222" clickable within 15% scroll depth (marquee or sticky CTA)

### Inventory Access
- [ ] Primary "View Homes" CTA visible within 0-10% scroll depth (hero)
- [ ] Featured Homes carousel visible within 12-30% scroll depth (section 3)
- [ ] At least 3-5 home cards visible before user scrolls past 30% depth

### Affordability Signals
- [ ] "Deals" or "Financing" mention appears within 50% scroll depth
- [ ] Price range or "Starting at $X" visible in Featured Homes cards
- [ ] At least 1 affordability indicator (deal badge, grant mention) before 60% depth

### Trust Proof
- [ ] "Est. 1995" or "Family-Owned" visible within 15% scroll depth (marquee or ribbon)
- [ ] "2025 Bayou's Best Choice" award visible within 20% scroll depth
- [ ] At least 3 trust signals (award, years in business, BBB) visible before 40% depth

### Primary Action
- [ ] Phone CTA visible within 0-2 swipes on iPhone SE (375px width, ~667px height)
- [ ] Sticky mobile CTA bar appears on scroll past hero (10%+ depth)
- [ ] Contact form appears before 150% scroll depth (reduced from 190%)

### Content Density
- [ ] No single text block exceeds 80 words on mobile (without "Read More" toggle)
- [ ] About Preview paragraph compressed to 3 bullets or less
- [ ] Parts Store icons reduced to 3 on mobile (<=640px)

### CTA Rationalization
- [ ] Max 2 "View Homes" CTAs on entire page (hero + featured carousel)
- [ ] Each CTA has differentiated copy (e.g., "Browse All 50+ Homes" vs. "View Homes For Sale")
- [ ] Bento "View All Homes" card replaced with "Schedule Tour" (new action)

### Visual Rhythm
- [ ] Each section has clear visual separation (whitespace, background color change, or divider)
- [ ] Max 6 cards per grid on mobile (2 columns x 3 rows max before feeling overwhelming)
- [ ] Video sections (hero, Restore LA) have gradient overlays for text readability

### Scroll Depth Optimization
- [ ] Total page scroll depth reduced to <=170% (from 190%)
- [ ] Featured Homes carousel moved to section 3 (from section 5)
- [ ] Why Choose Us moved to section 5 (from section 8)

---

## Mobile-Specific Behavior Notes

### Thumb Zone Considerations
- **Current:** Hero CTAs are center-aligned (neutral thumb zone)
- **Optimization:** Sticky CTA bar at bottom (prime thumb zone) for persistent access to phone/visit actions

### Scroll Velocity Impact
- **Video Sections:** Hero + Restore LA videos create "scroll pause" (users watch 3-5 seconds)
- **Long Carousels:** Featured Homes swiper can slow scroll (users swipe through 3-5 homes)
- **Text Blocks:** About paragraph creates "scroll skip" (users avoid reading, jump to next section)

### Decision Timeline
- **3 seconds:** User sees hero → "New Homes For Sale + Serving SE Louisiana" = Identity confirmed ✅
- **15 seconds:** User scrolls to marquee → "2025 Bayou's Best + Est. 1995 + Phone Number" = Trust established ✅
- **30 seconds:** User reaches bento grid or featured carousel → Inventory preview shown ✅
- **47 seconds (Decision Point):** User either:
  - A) Clicks "View Homes" (engaged)
  - B) Clicks phone number (high intent)
  - C) Scrolls to contact form (moderate intent)
  - D) Bounces (if CTAs too late or unclear)

**Current Page:** Passes 3s + 15s checks, risks losing users at 30-47s mark if carousel is too far down

---

## Implementation Priority (Quick Wins First)

### Week 1: High-ROI, Low-Effort
1. **Move Featured Carousel** (Section 5 → Section 3) - 1 hour
2. **Add Sticky Mobile CTA** (Phone + Visit buttons at bottom) - 2 hours
3. **Compress About Paragraph** (100 words → 3 bullets) - 30 minutes
4. **Remove Bento "View All" Card** (Replace with "Schedule Tour") - 1 hour

**Total:** 4.5 hours
**Expected Impact:** +15-25% increase in carousel engagement, +10-15% increase in phone calls

### Week 2: Section Reordering
5. **Move Why Choose Us** (Section 8 → Section 5) - 1 hour
6. **Add Trust Ribbon** (After hero, before carousel) - 2 hours
7. **Reduce Parts Icons** (6 → 3 on mobile with "See All" link) - 1 hour

**Total:** 4 hours
**Expected Impact:** +10-15% increase in trust perception, +5-10% increase in parts page visits

### Week 3: CTA Rationalization
8. **Differentiate Featured CTA Copy** ("View All" → "Browse All 50+ Homes") - 15 minutes
9. **Add Phone CTA Above Contact Form** ("Prefer to talk? Call...") - 30 minutes
10. **Remove Restore LA Duplicate CTA** (Keep 1 primary, remove phone button) - 30 minutes

**Total:** 1.25 hours
**Expected Impact:** +5-10% reduction in CTA confusion, +3-5% increase in form submissions

---

## Business Alignment Check

### Revenue Source Priority
1. ✅ **Phone Calls:** Visible in marquee (15%), sticky CTA (all pages), contact form intro
2. ✅ **In-Person Visits:** New bento card "Schedule Tour" encourages showroom visits
3. ✅ **Form Submissions:** Contact form at 125-140% (reduced from 175-190%)
4. ⚠️ **SMS/Text:** Not implemented (opportunity: add "Text Us" option to sticky CTA)

### Conversion Hierarchy Compliance
- ✅ Phone CTA prioritized (sticky bar, marquee)
- ✅ Visit CTA added (bento card replacement)
- ✅ Form CTA preserved (bottom of page)
- ❌ Email CTA not present (correct - lowest priority)

**Recommendation:** Add SMS option to sticky CTA bar for mobile users:
```tsx
<a href="sms:9858760222" className="text-white text-sm underline">
  Or text us →
</a>
```

---

**End of Home Page Audit**

**Next Steps:**
1. Review with stakeholders (prioritize Week 1 quick wins)
2. Implement sticky mobile CTA (highest impact)
3. Test mobile scroll depth with real devices (iPhone SE, Galaxy A series)
4. Monitor analytics for featured carousel engagement (before vs. after move)

**Questions?** See INDEX.md for global recommendations and other page audits.
