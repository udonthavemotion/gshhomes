# Contact Page - Mobile Storytelling Audit

**Route:** `/contact-gulf-south-homes`
**Component:** `pages/Contact.tsx`
**Primary Purpose:** Lead capture via form submission, provide location/hours/contact info
**Primary Audience:** Qualified leads ready to schedule visit or request quote

---

## Current Section Order

1. **Hero Section (0-20%)** - Video, GSH logo, "Contact Us" headline
2. **Glassmorphic Map Card (20-50%)** - Interactive map + contact details (phone, address, hours tabs)
3. **Contact Form Section (50-100%)** - GoHighLevel form embed + "Send us a Message" heading

**Total scroll depth:** ~100% (focused, efficient page)

---

## Conversion Scores (1-10)

| Metric | Score | Notes |
|--------|-------|-------|
| **Hook Clarity** | 9/10 | "Contact Us" + "We're Here to Help" badge + logo = clear purpose. Location visible in map (20%) |
| **Speed to CTA** | 10/10 | **Perfect:** Phone number clickable at 20% (map card), form visible at 50% |
| **Trust Stacking** | 7/10 | Logo in hero, map shows physical location. **Missing:** Awards, "Est. 1995", BBB badge |
| **Info Density** | 10/10 | Clean, scannable. Map card has tabbed hours (Sales vs. Parts), no text walls |
| **Friction** | 8/10 | Form is embedded (good), but **no alternative to form** (some users prefer SMS/text over web forms) |
| **Visual Rhythm** | 8/10 | Good flow: video hero → map → form. Each section visually distinct |

**Overall Score:** 8.7/10 (Excellent conversion page, minor optimizations)

---

## Risk Flags

### 🟡 MISSING_NEXT_STEP (Minor)
- **Issue:** No SMS/text option for users who hate web forms
- **Mobile Reality:** Form abandonment on mobile = 70% baseline
- **User preference:** Many Louisiana mobile users prefer text over form fill
- **Fix:** Add SMS CTA above form:
  ```tsx
  <div className="text-center mb-6">
    <p className="text-stone-600">Prefer to text? Send us a message:</p>
    <a href="sms:9858760222" className="text-primary font-bold">
      📱 Text (985) 876-0222
    </a>
  </div>
  ```

### 🟢 TRUST_TOO_LATE (Low Priority)
- **Issue:** No awards/credentials above fold
- **Impact:** Low (Contact page users are already qualified/trusting)
- **Optional Fix:** Add trust badge in hero:
  ```tsx
  <Badge>🏆 2025 Bayou's Best Choice Winner</Badge>
  ```

---

## First Meaningful CTA Location

| CTA | Scroll Depth | Status |
|-----|--------------|--------|
| Phone (Map Card) | 20% | ✅ Excellent |
| Get Directions (Map) | 25% | ✅ Excellent |
| Contact Form | 50% | ✅ Excellent |

**No issues** - all CTAs are accessible quickly

---

## Recommended Mobile-First Section Order

**Current order is optimal.** No reordering needed.

### Minor Enhancement
1. Hero (0-15%) - Compress to 60vh on mobile (form visible sooner)
2. Map Card (15-45%)
3. SMS CTA (45-50%) - NEW: Text option
4. Contact Form (50-100%)

---

## Keep / Change / Remove List

### ✅ Keep
- Hero video (sets professional tone)
- Glassmorphic map card (beautiful, functional)
- Tabbed hours (Sales vs. Parts) - clear distinction
- GoHighLevel form embed (works well on mobile)
- "Send us a Message" section heading

### 🔄 Change
1. **Add SMS CTA** above form (text option for form-averse users)
2. **Compress hero** to 60vh on mobile (form visible sooner)
3. **Add trust badge** in hero (optional): "🏆 2025 Bayou's Best Choice"

### ❌ Remove
- None (page is clean and focused)

---

## Mobile Compression Plan

| Location | Problem | Solution |
|----------|---------|----------|
| **Hero Section** | Full-screen (100vh) delays form access | Reduce to 60vh on mobile |
| **Form Alternatives** | No SMS/text option (form abandonment = 70% on mobile) | Add SMS link above form |

---

## Acceptance Criteria

- [ ] Hero height reduced to 60vh on mobile
- [ ] SMS CTA visible above form (45-50% depth)
- [ ] Phone number clickable within 20% scroll depth (map card)
- [ ] Map card displays correct hours for Sales (Mon-Sat 8-5) and Parts (Mon-Fri 8-5, closed Sat)
- [ ] Form loads within 3 seconds on 4G connection
- [ ] "Get Directions" link opens Google Maps on mobile

---

## Implementation Priority

### Week 1 (Quick Wins)
1. Add SMS CTA above form - 30 minutes
2. Compress hero to 60vh on mobile - 15 minutes

**Total:** 45 minutes
**Impact:** +10-20% reduction in form abandonment (SMS alternative)

---

**End of Contact Audit**

**Note:** Contact page is already well-optimized for mobile conversion. Primary opportunity is adding SMS alternative to reduce form friction.
