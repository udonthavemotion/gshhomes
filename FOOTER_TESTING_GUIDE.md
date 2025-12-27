# Footer Mobile Testing Quick Guide

## Quick Start

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:** `http://localhost:3000`

3. **Open Chrome DevTools:** Press `F12` or `Ctrl+Shift+I`

4. **Enable device toolbar:** Press `Ctrl+Shift+M` or click the device icon

---

## Mobile Viewport Tests

### Test 1: iPhone SE (375px) - Smallest Screen

**Steps:**
1. Select "iPhone SE" from device dropdown
2. Scroll to footer
3. Verify:
   - ✅ Text is readable (16px minimum)
   - ✅ No horizontal scroll bar
   - ✅ Social icons are 48px × 48px (easy to tap)
   - ✅ Phone number is tappable
   - ✅ Video plays (or plays after tapping screen)
   - ✅ All links have spacing between them

**Expected Results:**
- Single column layout
- Footer takes ~80-90% of viewport width
- All text has drop shadow for contrast
- Video background visible but not distracting

### Test 2: iPhone 14/15 (390px) - Standard iOS

**Steps:**
1. Select "iPhone 14 Pro" from device dropdown
2. Scroll to footer
3. Verify:
   - ✅ Typography scales up slightly from iPhone SE
   - ✅ Contact cards have comfortable spacing
   - ✅ "Get In Touch" section icons are 48px
   - ✅ Bottom bar doesn't wrap text awkwardly

**Expected Results:**
- Slightly more breathing room than iPhone SE
- Same single column layout
- Enhanced readability

### Test 3: Pixel 7 (412px) - Standard Android

**Steps:**
1. Select "Pixel 7" or set custom width to 412px
2. Scroll to footer
3. Verify:
   - ✅ Footer maintains visual appeal
   - ✅ Video background covers full width
   - ✅ No clipped shadows or content
   - ✅ Grid gap is consistent

---

## Tablet Viewport Tests

### Test 4: iPad Mini (768px)

**Steps:**
1. Select "iPad Mini" from device dropdown
2. Scroll to footer
3. Verify:
   - ✅ **2-column layout active** (Brand+Quick Links | Services+Contact)
   - ✅ Sections distribute evenly
   - ✅ Typography remains readable
   - ✅ Video background scales properly

**Expected Layout:**
```
┌─────────────────┬─────────────────┐
│ Brand           │ Services        │
│ Quick Links     │ Contact Info    │
└─────────────────┴─────────────────┘
```

### Test 5: iPad Pro (1024px)

**Steps:**
1. Select "iPad Pro" or set width to 1024px
2. Scroll to footer
3. Verify:
   - ✅ **4-column desktop layout active**
   - ✅ Same as desktop design
   - ✅ Typography uses desktop sizes

---

## Desktop Regression Tests

### Test 6: Small Desktop (1024px)

**Steps:**
1. Resize browser to 1024px width
2. Scroll to footer
3. Compare with production site (if available)
4. Verify:
   - ✅ Layout matches original design
   - ✅ Brand takes 4 columns
   - ✅ Quick Links: 2 columns
   - ✅ Services: 2 columns
   - ✅ Contact Info: 4 columns

### Test 7: Standard Desktop (1440px)

**Steps:**
1. Resize browser to 1440px
2. Verify:
   - ✅ No layout shifts from 1024px
   - ✅ Typography scales properly
   - ✅ Hover states work on links (red glow)
   - ✅ Social icons have hover effect (scale + color change)

### Test 8: Large Desktop (1920px)

**Steps:**
1. Maximize browser window or set to 1920px
2. Verify:
   - ✅ Footer content doesn't stretch too wide
   - ✅ Container stays centered
   - ✅ Video covers full width
   - ✅ No awkward spacing

---

## Video Playback Tests

### iOS Safari (Real Device Required)

**Steps:**
1. Open site on iPhone
2. Navigate to any page
3. Scroll to footer
4. Observe:
   - ✅ Video autoplays OR plays after first tap
   - ✅ Video loops seamlessly
   - ✅ No console errors (check Safari Web Inspector)
   - ✅ Text is readable against video

**Note:** If video doesn't autoplay immediately, tap anywhere on the page. This is expected iOS behavior.

### Android Chrome (Real Device Recommended)

**Steps:**
1. Open site on Android phone
2. Scroll to footer
3. Verify:
   - ✅ Video autoplays
   - ✅ Video loops without flickering
   - ✅ Performance is smooth (no lag)

---

## Quick Visual Checks

### Typography Hierarchy (Mobile)
```
Brand Name:        18px (text-lg)
Section Headings:  16px (text-base)
Links:             16px (text-base)
Body Text:         14px (text-sm)
Contact Labels:    14px (text-sm)
Contact Values:    16-18px (text-base/lg)
Bottom Bar:        14px (text-sm)
```

### Touch Target Sizes (Mobile)
```
Navigation Links:  48px height
Contact Cards:     52px height
Social Icons:      48px × 48px
Logo Link:         44px minimum
```

### Spacing (Mobile)
```
Section Padding:   32px top (pt-8)
Grid Gap:          24px (gap-6)
Bottom Margin:     24px (mt-6)
List Spacing:      8px between items
```

---

## Common Issues & Solutions

### Issue: Video doesn't play on mobile
**Solution:** Tap anywhere on the page. iOS Safari requires user interaction for video playback.

### Issue: Text is hard to read
**Solution:** Verify overlay is `bg-primary/40` on mobile. Check drop shadows are `drop-shadow-md` or higher.

### Issue: Links are too close together
**Solution:** Verify `space-y-2` on link lists and `min-h-[48px]` on links.

### Issue: Footer looks cramped
**Solution:** Check grid gap is `gap-6` on mobile, not smaller.

### Issue: Video doesn't cover full width
**Solution:** Verify video has `absolute inset-0 w-full h-full object-cover` classes.

---

## Browser Developer Tools Tips

### Chrome DevTools Network Tab
1. Open Network tab
2. Reload page
3. Find `footer.mp4`
4. Check file size (should be ~1-2 MB after optimization)
5. Check load time

### Chrome DevTools Performance
1. Open Performance tab
2. Click Record
3. Scroll to footer
4. Stop recording
5. Check for:
   - No layout thrashing
   - Smooth 60fps
   - No long tasks

### Chrome DevTools Console
- No errors related to video playback
- No warnings about missing files
- No React errors

---

## Acceptance Criteria

**Mobile (375px - 768px):**
- [ ] Single column layout
- [ ] All text readable (16px+)
- [ ] Touch targets ≥48px
- [ ] Video plays or plays on tap
- [ ] No horizontal scroll

**Tablet (768px - 1024px):**
- [ ] 2-column layout active
- [ ] Sections well-balanced
- [ ] Typography scales appropriately

**Desktop (1024px+):**
- [ ] 4-column layout active
- [ ] Matches original design
- [ ] Hover effects work
- [ ] No regressions

**Video:**
- [ ] Plays on iOS Safari (or after tap)
- [ ] Plays on Android Chrome
- [ ] Loops seamlessly
- [ ] Doesn't block page render

**Performance:**
- [ ] Build passes: `npm run build`
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Footer loads quickly

---

## Next: Production Testing

After local testing passes:

1. **Create Vercel preview deployment:**
   ```bash
   git add -A
   git commit -m "feat: optimize footer for mobile devices"
   git push origin footer-mobile-optimization
   ```

2. **Test preview URL on real devices:**
   - iPhone (iOS Safari)
   - Android phone (Chrome)
   - iPad
   - Desktop browsers

3. **Run Lighthouse audit** (target: 90+ mobile score)

4. **Get client approval**

5. **Merge to main**

---

## Video Optimization Status

⚠️ **IMPORTANT:** Footer video (`footer.mp4`) is currently **9.0 MB** and needs optimization.

**Run this command:**
```bash
cd public/assets/images/awards
ffmpeg -i footer.mp4 -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -c:v libx264 -crf 28 -preset medium -movflags +faststart -c:a aac -b:a 128k footer-optimized.mp4
```

**Target:** ~1.5-2.0 MB (78-89% reduction)

See `FOOTER_MOBILE_OPTIMIZATION_REPORT.md` for full details.
