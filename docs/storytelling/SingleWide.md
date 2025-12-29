# SingleWide Page - Mobile Storytelling Audit

**Route:** `/single-wide-mobile-homes`
**Component:** `pages/SingleWide.tsx`
**Primary Purpose:** Browse and filter single-wide home inventory
**Primary Audience:** Budget-conscious buyers, first-time homeowners, downsizers

---

## Current Section Order

1. **Hero Section (0-20%)** - Full-screen video, GSH logo, headline "Single-Wide Homes"
2. **Filter Bar + Home Grid (20-75%)** - Filter button, active filters, inventory cards
3. **Benefits Section (75-90%)** - "Single-Wide Living Made Simple" (video background, 3 benefit cards)
4. **CTA Section (90-100%)** - "Found the Perfect Home?" + phone/visit CTAs

**Total scroll depth:** ~100% (clean, focused page)

---

## Conversion Scores (1-10)

| Metric | Score | Notes |
|--------|-------|-------|
| **Hook Clarity** | 8/10 | Logo + "Single-Wide Homes" + "Affordable & Efficient" badge = clear. **Missing:** Location + hours |
| **Speed to CTA** | 9/10 | **Excellent:** Filter button + home grid visible at 20% (inventory access is fast) |
| **Trust Stacking** | 4/10 | **CRITICAL ISSUE:** No trust proof until footer. No "Est. 1995", no awards, no BBB badge above fold |
| **Info Density** | 9/10 | Clean grid, scannable cards, no text walls. Benefits section is concise (3 cards) |
| **Friction** | 8/10 | Slide-out filter drawer works well on mobile. **Issue:** No sticky phone CTA, no "call" button above grid |
| **Visual Rhythm** | 8/10 | Good variety: video hero → grid → video benefits → CTA. Whitespace well-distributed |

**Overall Score:** 7.7/10 (Strong inventory UX, weak trust signals)

---

## Risk Flags

### 🔴 TRUST_TOO_LATE (Critical)
- **Issue:** No trust signals between hero (0-20%) and CTA section (90-100%)
- **Missing:** "Est. 1995", "BBB Accredited", "2025 Bayou's Best Choice", "10,000+ Homes Delivered"
- **User question:** "Is this dealer legitimate? Why should I trust them?"
- **Fix:** Add trust ribbon after hero (20-25% depth):
  ```tsx
  <TrustRibbon>
    🏆 2025 Bayou's Best Choice | 🏠 Family-Owned Since 1995 | ⭐ BBB Accredited
  </TrustRibbon>
  ```

### 🟡 CTA_TOO_LATE (Phone Access)
- **Issue:** Phone number not visible until CTA section (90%)
- **User behavior:** High-intent buyers want to call immediately after seeing a home they like
- **Fix:** Add sticky mobile CTA bar:
  ```tsx
  <div className="fixed bottom-0 z-50 lg:hidden">
    <a href="tel:9858760222">📞 Call Now</a>
    <a href="/contact">📍 Visit Showroom</a>
  </div>
  ```

### 🟢 UNCLEAR_HOOK (Minor)
- **Issue:** Hero doesn't show location or hours
- **User question:** "Is this in Louisiana? Are they open today?"
- **Fix:** Add badge under headline:
  ```tsx
  <div className="flex gap-2">
    <Badge>📍 Houma, LA</Badge>
    <Badge>🕒 Mon-Fri 8 AM–5 PM</Badge>
  </div>
  ```

---

## First Meaningful CTA Location

| CTA | Scroll Depth | Status |
|-----|--------------|--------|
| Filter Button | 20% | ✅ Excellent |
| View Home Details (card) | 25-30% | ✅ Excellent |
| Phone CTA | 90% | ❌ Too Late |
| Visit CTA | 90% | ❌ Too Late |

**Recommendation:** Phone + visit must be visible within 0-2 swipes (sticky CTA bar)

---

## Recommended Mobile-First Section Order

### Before
1. Hero (0-20%)
2. Filter + Grid (20-75%)
3. Benefits (75-90%)
4. CTA (90-100%)

### After
1. **Hero** (0-15%) - Compress to 60vh on mobile (not 100vh)
2. **Trust Ribbon** (15-20%) - NEW: Awards + credentials
3. **Filter + Grid** (20-70%) - Keep as-is
4. **Benefits** (70-85%) - Keep as-is
5. **CTA** (85-100%) - Keep phone/visit buttons

**Impact:** Trust signals now appear within first 20% = higher engagement

---

## Keep / Change / Remove List

### ✅ Keep
- Filter drawer (works great on mobile)
- Home grid layout (clean, scannable)
- Benefits section (concise, visual)
- CTA section (clear next steps)

### 🔄 Change
1. **Hero height:** 100vh → 60vh on mobile (inventory visible sooner)
2. **Add trust ribbon** after hero (section 1.5)
3. **Add location + hours badges** in hero
4. **Add sticky mobile CTA** (phone + visit)

### ❌ Remove
- None (page is focused and clean)

---

## Mobile Compression Plan

| Location | Problem | Solution |
|----------|---------|----------|
| **Hero Section** | Full-screen (100vh) delays inventory access | Reduce to 60vh on mobile, 70vh tablet, 80vh desktop |
| **Trust Gap** | No proof between hero and footer | Insert `<TrustRibbon />` after hero |
| **Phone Access** | Phone CTA buried at 90% depth | Add sticky CTA bar (bottom of viewport) |

---

## Acceptance Criteria

- [ ] Hero height reduced to 60vh on mobile (<=640px)
- [ ] Trust ribbon visible within 20% scroll depth
- [ ] Location badge "Houma, LA" visible in hero
- [ ] Hours badge "Mon-Fri 8 AM–5 PM" visible in hero
- [ ] Sticky phone CTA appears on scroll past hero (15%+)
- [ ] No text blocks exceed 60 words (currently passing - benefits are brief)
- [ ] Filter button visible within 0-1 swipe on iPhone SE
- [ ] At least 2-3 home cards visible within first screen after hero

---

## Implementation Priority

### Week 1 (High ROI)
1. Add sticky mobile CTA (phone + visit) - 2 hours
2. Add trust ribbon after hero - 1 hour
3. Compress hero to 60vh on mobile - 30 minutes

**Total:** 3.5 hours
**Impact:** +20-30% increase in phone call conversions

### Week 2 (Refinement)
4. Add location + hours badges to hero - 1 hour

---

**End of SingleWide Audit**
