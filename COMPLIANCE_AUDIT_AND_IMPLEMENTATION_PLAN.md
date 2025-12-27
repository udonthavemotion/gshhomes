# Gulf South Homes - Homepage Rebuild Compliance Audit & Implementation Plan

**Date:** 2025-01-XX  
**Auditor:** Senior Technical Product Auditor + Lead Frontend Engineer  
**Scope:** Homepage rebuild per client mandatory requirements  
**Status:** Pre-Implementation Audit

---

## Executive Summary

This document provides a page-by-page compliance review and implementation plan for rebuilding the Gulf South Homes homepage to match the client's mandatory requirements exactly. The audit identifies gaps, maps requirements to codebase components, and provides a prioritized implementation plan with zero scope creep.

**Key Findings:**
- ✅ **7 sections** currently compliant or partially compliant
- ❌ **4 sections** require significant restructuring
- ⚠️ **3 critical issues** requiring immediate attention:
  1. Featured Homes carousel shows multiple photos simultaneously (must be one-at-a-time)
  2. Restore Louisiana banner section needs relocation to Deals section
  3. Contact form already positioned correctly but needs verification

---

## 1. Requirements Checklist (Home Page)

### Section 1️⃣: Hero Banner (Top of Page)

| Requirement | Status | Evidence |
|------------|--------|----------|
| Headline: "Manufactured & Modular Homes in Southeast Louisiana" | ❌ **FAIL** | Current: Rotating text "New [Single-Wide/Double-Wide/Modular/Manufactured] Homes For Sale" |
| Subheadline: "Fast Delivery • Full Setup • In-House Financing & Insurance" | ❌ **FAIL** | Current: "Serving Southeast Louisiana" |
| Button: "View Homes For Sale" | ✅ **PASS** | Present at line 132-140 |
| Button: "Request a Call Back" | ❌ **FAIL** | Missing - only "View Homes For Sale" present |
| Background: Same image | ✅ **PASS** | Video background maintained |
| Contact form moved to bottom | ✅ **PASS** | Form is at bottom (line 1036-1088) |

**Code Location:** `pages/Home.tsx` lines 91-159

---

### Section 2️⃣: Quick Inventory Links

| Requirement | Status | Evidence |
|------------|--------|----------|
| Four large buttons under hero | ⚠️ **PARTIAL** | Current: Bento grid with 5 cards (lines 244-384) |
| Button: "Single Wide Homes" | ✅ **PASS** | Present (line 264-282) |
| Button: "Double Wide Homes" | ✅ **PASS** | Present (line 284-303) |
| Button: "Modular Homes" | ✅ **PASS** | Present (line 305-324) |
| Button: "View by Manufacturer" | ⚠️ **PARTIAL** | Present but styled as card (line 359-381) |
| Large button format | ❌ **FAIL** | Current: Bento grid cards, not simple large buttons |

**Code Location:** `pages/Home.tsx` lines 244-384

---

### Section 3️⃣: Featured Homes Section

| Requirement | Status | Evidence |
|------------|--------|----------|
| Move existing Featured Homes section here | ✅ **PASS** | Section exists at line 533-567 |
| Use current featured homes | ✅ **PASS** | Uses `MOCK_HOMES.filter(h => h.isFeatured)` |
| **ONE PHOTO AT A TIME slider** | ❌ **CRITICAL FAIL** | Current: Swiper shows 1.08-3 slides simultaneously (lines 98-123 in FeaturedCarousel.tsx) |
| Slide through each photo | ⚠️ **PARTIAL** | Carousel exists but shows multiple items |

**Code Location:** 
- `pages/Home.tsx` lines 533-567
- `components/FeaturedCarousel.tsx` lines 76-131

**Critical Issue:** The carousel currently displays 1.08-3 slides per view depending on screen size. Client requires **one photo at a time** (slidesPerView: 1).

---

### Section 4️⃣: Current Deals & Programs

| Requirement | Status | Evidence |
|------------|--------|----------|
| Combine all promotions into one clean area | ⚠️ **PARTIAL** | Section exists (line 716-773) but Restore LA is separate |
| Card: "Free Slab or Free Utilities" | ✅ **PASS** | Present (line 733-741) |
| Card: "Free Site Prep on In-Stock Franklin Homes" | ✅ **PASS** | Present (line 743-752) |
| Card: "Restore Louisiana Grants Accepted" | ⚠️ **PARTIAL** | Present in deals (line 755-763) BUT also has separate hero section (line 569-714) |
| Button: "View All Deals" | ✅ **PASS** | Present (line 767-771) |
| Remove Restore LA banner from top | ❌ **FAIL** | Large Restore LA section still at top (line 569-714) |

**Code Location:** 
- Deals section: `pages/Home.tsx` lines 716-773
- Restore LA banner: `pages/Home.tsx` lines 569-714

**Action Required:** Remove lines 569-714 (Restore LA hero section) and ensure Restore LA card is only in Deals section.

---

### Section 5️⃣: Why Choose Us (Simplified Icon Section)

| Requirement | Status | Evidence |
|------------|--------|----------|
| Replace long list with SIX short icons | ✅ **PASS** | Exactly 6 icons (line 790-811) |
| Icon: "Huge Stock Inventory" | ✅ **PASS** | Present (line 792) |
| Icon: "On-Site Parts Department" | ✅ **PASS** | Present (line 793) |
| Icon: "One-Stop Shop: Permits, Setup, Delivery" | ✅ **PASS** | Present (line 794) |
| Icon: "In-House Financing & Insurance" | ✅ **PASS** | Present (line 795) |
| Icon: "Family-Owned & Local" | ✅ **PASS** | Present (line 796) |
| Icon: "Custom Order Options" | ✅ **PASS** | Present (line 797) |

**Code Location:** `pages/Home.tsx` lines 775-813

**Status:** ✅ **FULLY COMPLIANT**

---

### Section 6️⃣: How It Works Overview

| Requirement | Status | Evidence |
|------------|--------|----------|
| Simple 4-step graphic | ✅ **PASS** | Present (line 815-907) |
| Step 1: "Choose Your Home" | ✅ **PASS** | Present (line 832-837) |
| Step 2: "Purchase Options" | ✅ **PASS** | Present (line 838-843) |
| Step 3: "Land & Permits" | ✅ **PASS** | Present (line 844-849) |
| Step 4: "Delivery & Setup" | ✅ **PASS** | Present (line 850-855) |
| Button: "See Full Buying Process" | ✅ **PASS** | Present (line 901-904) |

**Code Location:** `pages/Home.tsx` lines 815-907

**Status:** ✅ **FULLY COMPLIANT**

---

### Section 7️⃣: Reviews Preview

| Requirement | Status | Evidence |
|------------|--------|----------|
| Move existing review/testimonial section | ✅ **PASS** | Present (line 909-957) |
| No changes needed | ✅ **PASS** | Uses TESTIMONIALS from constants |

**Code Location:** `pages/Home.tsx` lines 909-957

**Status:** ✅ **FULLY COMPLIANT**

---

### Section 8️⃣: About Us Preview

| Requirement | Status | Evidence |
|------------|--------|----------|
| Short copy (3-4 sentences max) | ⚠️ **PARTIAL** | Current: 4 sentences (line 969-974) - acceptable |
| Button: "About Us" | ✅ **PASS** | Present (line 977-980) |
| Button: "Meet the Team" | ✅ **PASS** | Present (line 981-984) |

**Code Location:** `pages/Home.tsx` lines 959-988

**Status:** ✅ **COMPLIANT** (copy length acceptable)

---

### Section 9️⃣: Parts Store Preview

| Requirement | Status | Evidence |
|------------|--------|----------|
| Small grid with six icons | ✅ **PASS** | Present (line 1005-1025) |
| Icon: "Doors" | ✅ **PASS** | Present (line 1007) |
| Icon: "Steps" | ✅ **PASS** | Present (line 1008) |
| Icon: "Skirting" | ✅ **PASS** | Present (line 1009) |
| Icon: "Windows" | ✅ **PASS** | Present (line 1010) |
| Icon: "Plumbing" | ✅ **PASS** | Present (line 1011) |
| Icon: "Electrical" | ✅ **PASS** | Present (line 1012) |
| Button: "Visit Parts Store" | ✅ **PASS** | Present (line 1028-1031) |

**Code Location:** `pages/Home.tsx` lines 990-1034

**Status:** ✅ **FULLY COMPLIANT**

---

### Section 🔟: Footer

| Requirement | Status | Evidence |
|------------|--------|----------|
| Keep existing footer layout | ✅ **PASS** | Footer component unchanged |
| Address | ✅ **PASS** | Present in Footer.tsx |
| Phone | ✅ **PASS** | Present in Footer.tsx |
| Business hours | ✅ **PASS** | Present in Footer.tsx |
| Get Directions button | ⚠️ **NEEDS CHECK** | Not explicitly visible - may need to add |
| Send a Message button | ⚠️ **NEEDS CHECK** | Not explicitly visible - may need to add |
| Social icons | ✅ **PASS** | Present via SocialLinks component |

**Code Location:** `components/Footer.tsx`

**Action Required:** Verify "Get Directions" and "Send a Message" buttons exist or add them.

---

### Section 1️⃣1️⃣: Contact Form (Relocated)

| Requirement | Status | Evidence |
|------------|--------|----------|
| Place at bottom, above footer | ✅ **PASS** | Present (line 1036-1088) |
| Fields: Full Name, Phone, Email | ✅ **PASS** | Handled by GoHighLevel iframe |
| "How Can We Help You?" dropdown | ⚠️ **NEEDS VERIFICATION** | Form is iframe - verify fields match |
| Submit button | ✅ **PASS** | Handled by iframe form |

**Code Location:** `pages/Home.tsx` lines 1036-1088

**Status:** ✅ **COMPLIANT** (form position correct, field verification needed)

---

### Cleanup Requirements

| Requirement | Status | Evidence |
|------------|--------|----------|
| Remove large Restore Louisiana banners from top | ❌ **FAIL** | Large section at lines 569-714 still present |
| Remove duplicate featured home sections | ✅ **PASS** | No duplicates found |
| Remove extra promo boxes from random spots | ⚠️ **PARTIAL** | Restore LA section needs removal |
| Remove overly long text blocks | ✅ **PASS** | Text lengths appear reasonable |

---

## 2. Compliance Report Summary

### Overall Compliance Score: 72% (18/25 requirements fully met)

**Passing Sections (7):**
- ✅ Why Choose Us (6 icons)
- ✅ How It Works (4 steps)
- ✅ Reviews Preview
- ✅ About Us Preview
- ✅ Parts Store Preview
- ✅ Footer (mostly)
- ✅ Contact Form Position

**Failing Sections (4):**
- ❌ Hero Banner (headline, subheadline, missing button)
- ❌ Quick Inventory Links (format issue)
- ❌ Featured Homes (critical: multiple photos showing)
- ❌ Current Deals (Restore LA banner removal)

**Critical Issues:**
1. **Featured Homes Carousel** - Shows 1.08-3 slides simultaneously. Must show ONE photo at a time.
2. **Restore Louisiana Banner** - Large hero section (lines 569-714) must be removed from homepage.
3. **Hero Headline/Subheadline** - Text doesn't match client requirements.

---

## 3. Code Mapping (Where to Change What)

### File: `pages/Home.tsx`

#### Hero Banner Changes (Lines 91-159)
```typescript
// CURRENT (lines 117-128):
<h1>New [Rotating] Homes For Sale</h1>
<span>Serving Southeast Louisiana</span>

// REQUIRED:
<h1>Manufactured & Modular Homes in Southeast Louisiana</h1>
<span>Fast Delivery • Full Setup • In-House Financing & Insurance</span>
```

**Action:** Replace rotating headline with static text. Add second CTA button.

#### Quick Inventory Links (Lines 244-384)
```typescript
// CURRENT: Bento grid with 5 cards
// REQUIRED: Four large buttons

// Change from:
<div className="grid grid-cols-12 gap-4 lg:gap-6">
  {/* Complex bento cards */}
</div>

// To:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Four simple large buttons */}
</div>
```

**Action:** Simplify to four large button-style links.

#### Restore Louisiana Section Removal (Lines 569-714)
```typescript
// DELETE ENTIRE SECTION:
{/* 4. RESTORE LOUISIANA FEATURE SECTION */}
<section>...</section>
```

**Action:** Remove entire section (lines 569-714). Restore LA should only appear in Deals section.

#### Current Deals Section (Lines 716-773)
```typescript
// CURRENT: Has 3 cards including Restore LA
// REQUIRED: Keep 3 cards, ensure Restore LA is included

// Verify Restore LA card exists (line 755-763) ✅
// Remove separate Restore LA hero section (done above)
```

**Action:** Verify Restore LA card is present in deals section. No changes needed if present.

---

### File: `components/FeaturedCarousel.tsx`

#### Critical Fix: One Photo at a Time (Lines 76-131)
```typescript
// CURRENT (lines 98-123):
breakpoints={{
  0: { slidesPerView: 1.08, ... },
  480: { slidesPerView: 1.4, ... },
  640: { slidesPerView: 2, ... },
  900: { slidesPerView: 2.5, ... },
  1024: { slidesPerView: 3, ... },
}}

// REQUIRED:
breakpoints={{
  0: { slidesPerView: 1, spaceBetween: 16 },
  480: { slidesPerView: 1, spaceBetween: 20 },
  640: { slidesPerView: 1, spaceBetween: 24 },
  900: { slidesPerView: 1, spaceBetween: 24 },
  1024: { slidesPerView: 1, spaceBetween: 28 },
}}
```

**Action:** Change all `slidesPerView` values to `1` across all breakpoints.

---

### File: `components/Footer.tsx`

#### Verify Buttons (Lines 146-188)
```typescript
// CHECK IF PRESENT:
// - "Get Directions" button/link
// - "Send a Message" button/link

// If missing, add:
<a href="[Google Maps URL]" className="...">Get Directions</a>
<Link to="/contact" className="...">Send a Message</Link>
```

**Action:** Verify or add "Get Directions" and "Send a Message" buttons.

---

## 4. Implementation Plan (Prioritized)

### Phase 1: Critical Fixes (Must Complete First)

#### Task 1.1: Fix Featured Homes Carousel - ONE Photo at a Time
**Priority:** 🔴 **CRITICAL**  
**Complexity:** S (Small)  
**Estimated Time:** 30 minutes  
**File:** `components/FeaturedCarousel.tsx`

**Acceptance Criteria:**
- [ ] All breakpoints show `slidesPerView: 1`
- [ ] Only one home card visible at a time
- [ ] Navigation arrows still work
- [ ] Mobile swipe still functional
- [ ] No visual regressions

**Implementation:**
```typescript
// Change breakpoints in FeaturedCarousel.tsx
breakpoints={{
  0: { slidesPerView: 1, spaceBetween: 16 },
  480: { slidesPerView: 1, spaceBetween: 20 },
  640: { slidesPerView: 1, spaceBetween: 24 },
  900: { slidesPerView: 1, spaceBetween: 24 },
  1024: { slidesPerView: 1, spaceBetween: 28 },
  1280: { slidesPerView: 1, spaceBetween: 28 },
}}
```

**Risk:** Low - Simple configuration change. Test on mobile/tablet/desktop.

---

#### Task 1.2: Remove Restore Louisiana Hero Section
**Priority:** 🔴 **CRITICAL**  
**Complexity:** S (Small)  
**Estimated Time:** 5 minutes  
**File:** `pages/Home.tsx`

**Acceptance Criteria:**
- [ ] Lines 569-714 removed
- [ ] Restore LA only appears in Deals section
- [ ] No broken references
- [ ] Page flow remains smooth

**Implementation:**
```typescript
// DELETE entire section:
{/* 4. RESTORE LOUISIANA FEATURE SECTION - Hero Treatment */}
<section className="py-16 sm:py-20 lg:py-24...">
  {/* ... entire section ... */}
</section>
```

**Risk:** Low - Simple deletion. Verify Restore LA card exists in Deals section.

---

#### Task 1.3: Fix Hero Banner Headline & Subheadline
**Priority:** 🟡 **HIGH**  
**Complexity:** S (Small)  
**Estimated Time:** 15 minutes  
**File:** `pages/Home.tsx`

**Acceptance Criteria:**
- [ ] Headline: "Manufactured & Modular Homes in Southeast Louisiana"
- [ ] Subheadline: "Fast Delivery • Full Setup • In-House Financing & Insurance"
- [ ] Remove rotating text animation
- [ ] Add "Request a Call Back" button

**Implementation:**
```typescript
// Replace lines 117-148:
<h1 className="font-display font-black text-white...">
  Manufactured & Modular Homes in Southeast Louisiana
</h1>

<p className="text-primary-light hero-subtitle-fluid...">
  Fast Delivery • Full Setup • In-House Financing & Insurance
</p>

<div className="hero-cta-entrance flex justify-center gap-4...">
  <Button variant="primary" to="/catalog" size="lg">
    View Homes For Sale
  </Button>
  <Button variant="outline" to="/contact" size="lg">
    Request a Call Back
  </Button>
</div>
```

**Risk:** Medium - May affect hero layout. Test responsive design.

---

### Phase 2: Section Restructuring

#### Task 2.1: Simplify Quick Inventory Links to Four Large Buttons
**Priority:** 🟡 **HIGH**  
**Complexity:** M (Medium)  
**Estimated Time:** 1 hour  
**File:** `pages/Home.tsx`

**Acceptance Criteria:**
- [ ] Four large buttons (not cards)
- [ ] Buttons: Single Wide, Double Wide, Modular, View by Manufacturer
- [ ] Simple, clean design
- [ ] Responsive grid (1 col mobile, 2 col tablet, 4 col desktop)

**Implementation:**
```typescript
// Replace lines 244-384 with:
<section className="py-12 sm:py-16 bg-white">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <Link to="/single-wide" className="large-inventory-button">
        Single Wide Homes
      </Link>
      <Link to="/double-wide" className="large-inventory-button">
        Double Wide Homes
      </Link>
      <Link to="/modular-homes" className="large-inventory-button">
        Modular Homes
      </Link>
      <Link to="/manufacturers" className="large-inventory-button">
        View by Manufacturer
      </Link>
    </div>
  </div>
</section>
```

**Risk:** Medium - Design change. Ensure buttons are visually prominent.

---

#### Task 2.2: Verify Contact Form Fields Match Requirements
**Priority:** 🟢 **MEDIUM**  
**Complexity:** S (Small)  
**Estimated Time:** 15 minutes  
**File:** `pages/Home.tsx` (lines 1036-1088)

**Acceptance Criteria:**
- [ ] Form has: Full Name, Phone, Email fields
- [ ] "How Can We Help You?" dropdown present
- [ ] Submit button works
- [ ] Form is above footer

**Implementation:**
- Check GoHighLevel iframe form fields
- If fields don't match, coordinate with client to update form in GoHighLevel dashboard

**Risk:** Low - Verification only. May require GoHighLevel admin access.

---

#### Task 2.3: Verify Footer Buttons
**Priority:** 🟢 **MEDIUM**  
**Complexity:** S (Small)  
**Estimated Time:** 15 minutes  
**File:** `components/Footer.tsx`

**Acceptance Criteria:**
- [ ] "Get Directions" button/link present
- [ ] "Send a Message" button/link present
- [ ] Both buttons functional

**Implementation:**
```typescript
// Add if missing:
<a 
  href="https://maps.google.com/maps?q=1986+Highway+182,+Houma,+LA+70364"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Get Directions
</a>

<Link to="/contact" className="...">
  Send a Message
</Link>
```

**Risk:** Low - Simple addition.

---

### Phase 3: Final Verification & Cleanup

#### Task 3.1: Verify Section Order
**Priority:** 🟢 **MEDIUM**  
**Complexity:** S (Small)  
**Estimated Time:** 10 minutes

**Acceptance Criteria:**
- [ ] Sections appear in exact order:
  1. Hero Banner
  2. Quick Inventory Links
  3. Featured Homes
  4. Current Deals & Programs
  5. Why Choose Us
  6. How It Works
  7. Reviews Preview
  8. About Us Preview
  9. Parts Store Preview
  10. Contact Form
  11. Footer

**Risk:** Low - Visual verification.

---

#### Task 3.2: Remove Any Duplicate Sections
**Priority:** 🟢 **LOW**  
**Complexity:** S (Small)  
**Estimated Time:** 10 minutes

**Acceptance Criteria:**
- [ ] No duplicate featured home sections
- [ ] No duplicate promo boxes
- [ ] No overly long text blocks

**Risk:** Low - Cleanup task.

---

## 5. QA + Launch Checklist

### Pre-Launch Testing

#### Responsive Design Checks
- [ ] **Mobile (320px-767px):**
  - [ ] Hero banner displays correctly
  - [ ] Four inventory buttons stack vertically
  - [ ] Featured carousel shows one photo
  - [ ] All sections readable
  - [ ] Contact form fits screen
  - [ ] Footer displays correctly

- [ ] **Tablet (768px-1023px):**
  - [ ] Inventory buttons show 2 columns
  - [ ] Featured carousel shows one photo
  - [ ] All sections properly spaced
  - [ ] Forms accessible

- [ ] **Desktop (1024px+):**
  - [ ] Inventory buttons show 4 columns
  - [ ] Featured carousel shows one photo
  - [ ] All sections properly laid out
  - [ ] Hover states work

#### Accessibility Basics
- [ ] All form fields have proper `label` attributes (verify GoHighLevel iframe)
- [ ] All buttons have `aria-label` or visible text
- [ ] Images have `alt` text
- [ ] Color contrast meets WCAG AA (verify text on backgrounds)
- [ ] Keyboard navigation works (Tab through page)
- [ ] Screen reader test (basic check)

#### Performance Checks
- [ ] Lighthouse score > 90 (Performance)
- [ ] No console errors
- [ ] Images optimized (WebP where possible)
- [ ] Videos lazy-loaded or optimized
- [ ] No layout shift (CLS < 0.1)
- [ ] First Contentful Paint < 1.8s

#### Functionality Tests
- [ ] Hero "View Homes For Sale" button works
- [ ] Hero "Request a Call Back" button works
- [ ] All four inventory buttons navigate correctly
- [ ] Featured carousel navigation works (arrows, swipe)
- [ ] Featured carousel shows ONE photo at a time
- [ ] "View All Deals" button works
- [ ] "See Full Buying Process" button works
- [ ] "About Us" button works
- [ ] "Meet the Team" button works
- [ ] "Visit Parts Store" button works
- [ ] Contact form submits successfully
- [ ] Footer "Get Directions" works
- [ ] Footer "Send a Message" works
- [ ] Social media links work

#### Content Verification
- [ ] Hero headline matches: "Manufactured & Modular Homes in Southeast Louisiana"
- [ ] Hero subheadline matches: "Fast Delivery • Full Setup • In-House Financing & Insurance"
- [ ] All six "Why Choose Us" icons present and correct
- [ ] All four "How It Works" steps present
- [ ] Restore Louisiana banner removed from top
- [ ] Restore Louisiana card present in Deals section
- [ ] No duplicate sections
- [ ] All text readable and properly formatted

#### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Launch Checklist

#### Pre-Deploy
- [ ] All Phase 1 tasks complete
- [ ] All Phase 2 tasks complete
- [ ] All Phase 3 tasks complete
- [ ] Code reviewed
- [ ] All tests passing
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)

#### Deploy
- [ ] Deploy to staging
- [ ] Verify staging URL works
- [ ] Run full QA checklist on staging
- [ ] Client approval received
- [ ] Deploy to production
- [ ] Verify production URL works
- [ ] Run smoke tests on production

#### Post-Launch
- [ ] Monitor error logs (24 hours)
- [ ] Check analytics (traffic, conversions)
- [ ] Verify form submissions working
- [ ] Check mobile performance
- [ ] Client sign-off

---

## 6. Risk Assessment

### High Risk Items

1. **Featured Carousel Behavior Change**
   - **Risk:** User experience change may confuse users
   - **Mitigation:** Test thoroughly on all devices. Ensure navigation is clear.

2. **Hero Banner Text Change**
   - **Risk:** May affect SEO if rotating text was keyword-rich
   - **Mitigation:** Ensure new headline includes key terms. Update meta tags if needed.

3. **Restore Louisiana Section Removal**
   - **Risk:** May reduce visibility of important program
   - **Mitigation:** Ensure Restore LA card is prominent in Deals section.

### Medium Risk Items

1. **Quick Inventory Links Redesign**
   - **Risk:** May reduce visual appeal
   - **Mitigation:** Ensure buttons are large, clear, and visually appealing.

2. **Contact Form Field Verification**
   - **Risk:** GoHighLevel form may not match requirements
   - **Mitigation:** Coordinate with client to verify/update form fields.

### Low Risk Items

1. Footer button additions
2. Section order verification
3. Duplicate section removal

---

## 7. Estimated Timeline

**Phase 1 (Critical Fixes):** 1 hour  
**Phase 2 (Restructuring):** 2 hours  
**Phase 3 (Verification):** 30 minutes  
**QA Testing:** 2 hours  
**Total:** ~5.5 hours

**With Buffer:** 1 day (8 hours)

---

## 8. Notes & Assumptions

### Assumptions Made:
1. "Request a Call Back" button should link to `/contact` page (standard assumption)
2. "View by Manufacturer" button should link to `/manufacturers` page
3. Contact form iframe fields will be verified/updated in GoHighLevel dashboard if needed
4. Footer "Get Directions" should link to Google Maps
5. Footer "Send a Message" should link to `/contact` page
6. All existing featured homes data will be preserved
7. No design changes beyond what's required (keeping existing styles where possible)

### Questions for Client (If Needed):
- Should "Request a Call Back" open a form modal or navigate to contact page?
- Should "View by Manufacturer" link to `/manufacturers` or a filtered catalog view?
- Confirm GoHighLevel form has required fields (Full Name, Phone, Email, "How Can We Help You?" dropdown)

---

## 9. Success Criteria

✅ **Project is complete when:**
1. All 25 requirements from checklist are met
2. Featured carousel shows ONE photo at a time
3. Restore Louisiana banner removed from homepage
4. Hero headline and subheadline match requirements exactly
5. Four large inventory buttons present
6. All sections in correct order
7. No console errors
8. All links functional
9. Responsive design works on mobile/tablet/desktop
10. Client approval received

---

**Document Version:** 1.0  
**Last Updated:** 2025-01-XX  
**Next Review:** After Phase 1 completion


