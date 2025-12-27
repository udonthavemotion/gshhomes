# Quick Reference Checklist - Homepage Rebuild

## Critical Issues (Fix First) 🔴

- [ ] **Featured Carousel:** Change to show ONE photo at a time (currently shows 1.08-3)
  - File: `components/FeaturedCarousel.tsx` lines 98-123
  - Change all `slidesPerView` to `1`

- [ ] **Restore Louisiana Banner:** Remove large hero section from homepage
  - File: `pages/Home.tsx` lines 569-714
  - DELETE entire section

- [ ] **Hero Headline:** Change to "Manufactured & Modular Homes in Southeast Louisiana"
  - File: `pages/Home.tsx` lines 117-128
  - Remove rotating text animation

- [ ] **Hero Subheadline:** Change to "Fast Delivery • Full Setup • In-House Financing & Insurance"
  - File: `pages/Home.tsx` lines 144-148

- [ ] **Hero Button:** Add "Request a Call Back" button
  - File: `pages/Home.tsx` lines 131-141
  - Add second button next to "View Homes For Sale"

## High Priority Fixes 🟡

- [ ] **Quick Inventory Links:** Simplify to four large buttons (not bento grid)
  - File: `pages/Home.tsx` lines 244-384
  - Replace bento grid with simple button grid
  - Buttons: Single Wide, Double Wide, Modular, View by Manufacturer

- [ ] **Footer Buttons:** Verify/add "Get Directions" and "Send a Message"
  - File: `components/Footer.tsx` lines 146-188
  - Add if missing

- [ ] **Contact Form Fields:** Verify GoHighLevel form has required fields
  - File: `pages/Home.tsx` lines 1054-1077
  - Required: Full Name, Phone, Email, "How Can We Help You?" dropdown

## Already Compliant ✅

- ✅ Why Choose Us (6 icons) - `pages/Home.tsx` lines 775-813
- ✅ How It Works (4 steps) - `pages/Home.tsx` lines 815-907
- ✅ Reviews Preview - `pages/Home.tsx` lines 909-957
- ✅ About Us Preview - `pages/Home.tsx` lines 959-988
- ✅ Parts Store Preview - `pages/Home.tsx` lines 990-1034
- ✅ Contact Form Position - `pages/Home.tsx` lines 1036-1088
- ✅ Footer Layout - `components/Footer.tsx`

## Section Order Verification

Current order in `pages/Home.tsx`:
1. ✅ Hero Banner (lines 91-159) - **NEEDS FIXES**
2. ✅ Marquee Trust Banner (lines 161-242) - Keep
3. ⚠️ Quick Inventory Links (lines 244-384) - **NEEDS SIMPLIFICATION**
4. ✅ Award Showcase (lines 386-531) - Keep
5. ✅ Featured Homes (lines 533-567) - **NEEDS CAROUSEL FIX**
6. ❌ Restore LA Hero (lines 569-714) - **DELETE**
7. ✅ Current Deals (lines 716-773) - Keep
8. ✅ Why Choose Us (lines 775-813) - Keep
9. ✅ How It Works (lines 815-907) - Keep
10. ✅ Reviews (lines 909-957) - Keep
11. ✅ About Preview (lines 959-988) - Keep
12. ✅ Parts Preview (lines 990-1034) - Keep
13. ✅ Contact Form (lines 1036-1088) - Keep
14. ✅ Footer (via App.tsx) - Keep

## Quick Test Checklist

After implementation, verify:
- [ ] Featured carousel shows ONE photo at a time on all screen sizes
- [ ] Hero has correct headline and subheadline
- [ ] Hero has two buttons
- [ ] Four inventory buttons are large and simple
- [ ] Restore LA banner removed from homepage
- [ ] Restore LA card present in Deals section
- [ ] All links work
- [ ] Mobile responsive
- [ ] No console errors


