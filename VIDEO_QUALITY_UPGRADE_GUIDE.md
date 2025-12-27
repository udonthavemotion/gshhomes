# Video Quality Upgrade Guide - Gulf South Homes

**Date:** December 26, 2025
**Purpose:** Upgrade hero video quality to HD/4K while maintaining performance

---

## Current Situation

**Current optimization (Dec 24, 2024):**
- Resolution: 720p (1280x720)
- Quality: CRF 28 (good web quality)
- File sizes: 1-5 MB per video
- Total: ~14 MB for all videos

**Issue:** Videos appear lower quality than desired on large desktop displays

---

## Solution Strategy: Responsive Video Delivery

Serve **different video qualities** based on device size:

| Device | Resolution | Quality (CRF) | Target Size | Use Case |
|--------|-----------|---------------|-------------|----------|
| **Mobile** (≤768px) | 720p | CRF 28 | 1-3 MB | Current optimized videos |
| **Tablet** (769-1439px) | 1080p | CRF 23 | 5-10 MB | Higher quality HD |
| **Desktop** (≥1440px) | 1440p/4K | CRF 20 | 15-25 MB | Premium 4K quality |

**Benefits:**
- Mobile users: Fast loading with current 720p videos
- Desktop users: Stunning 4K quality where it matters
- Smart bandwidth usage: Only load what's needed

---

## Option 1: High-Quality 1080p (RECOMMENDED)

Best balance of quality and performance for most displays.

### Re-encoding Commands

```bash
# Navigate to video directory
cd "public/assets/video/videosworking"

# High-Quality 1080p - CRF 23 (visually lossless)
ffmpeg -i homepage-hero.mp4 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 23 \
  -preset slow \
  -movflags +faststart \
  -c:a aac -b:a 192k \
  homepage-hero-1080p.mp4
```

**Expected results:**
- Resolution: 1920x1080 (Full HD)
- Quality: CRF 23 (visually lossless for most viewers)
- File size: ~8-15 MB per video (3-6x larger than current)
- Load time: +2-3 seconds on fast connections

### Batch Re-encode All Videos to 1080p

```bash
# Save original 720p versions as mobile fallback
mkdir -p mobile-720p
cp *.mp4 mobile-720p/

# Re-encode all videos to 1080p
for file in *.mp4; do
  echo "Processing $file..."
  ffmpeg -i "$file" \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    -c:v libx264 \
    -crf 23 \
    -preset slow \
    -movflags +faststart \
    -c:a aac -b:a 192k \
    "${file%.mp4}-1080p.mp4"
done

echo "1080p encoding complete!"
```

---

## Option 2: Premium 4K Quality

For maximum quality on large desktop displays (27"+ monitors, 4K TVs).

### Re-encoding Commands

```bash
# Premium 4K - CRF 20 (near-perfect quality)
ffmpeg -i homepage-hero.mp4 \
  -vf "scale=3840:2160:force_original_aspect_ratio=decrease,pad=3840:2160:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 \
  -crf 20 \
  -preset slow \
  -movflags +faststart \
  -c:a aac -b:a 256k \
  homepage-hero-4k.mp4
```

**Expected results:**
- Resolution: 3840x2160 (4K UHD)
- Quality: CRF 20 (near-perfect)
- File size: ~25-50 MB per video (10-20x larger than current)
- Load time: +10-15 seconds on fast connections

### Batch Re-encode to 4K

```bash
# Save current versions as mobile fallback
mkdir -p mobile-720p
cp *.mp4 mobile-720p/

# Re-encode all videos to 4K
for file in *.mp4; do
  echo "Processing $file to 4K..."
  ffmpeg -i "$file" \
    -vf "scale=3840:2160:force_original_aspect_ratio=decrease,pad=3840:2160:(ow-iw)/2:(oh-ih)/2" \
    -c:v libx264 \
    -crf 20 \
    -preset slow \
    -movflags +faststart \
    -c:a aac -b:a 256k \
    "${file%.mp4}-4k.mp4"
done

echo "4K encoding complete!"
```

---

## Option 3: Responsive Multi-Quality (BEST UX)

Implement adaptive video delivery using HTML5 media queries.

### Step 1: Prepare Multiple Versions

```bash
cd "public/assets/video/videosworking"

# Keep current 720p as mobile version
mkdir -p ../responsive/mobile
cp *.mp4 ../responsive/mobile/

# Create 1080p tablet/desktop version
mkdir -p ../responsive/desktop
for file in *.mp4; do
  ffmpeg -i "$file" \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
    -c:v libx264 -crf 23 -preset slow \
    -movflags +faststart -c:a aac -b:a 192k \
    "../responsive/desktop/$file"
done

# Create 4K large desktop version (optional)
mkdir -p ../responsive/4k
for file in *.mp4; do
  ffmpeg -i "$file" \
    -vf "scale=3840:2160:force_original_aspect_ratio=decrease" \
    -c:v libx264 -crf 20 -preset slow \
    -movflags +faststart -c:a aac -b:a 256k \
    "../responsive/4k/$file"
done
```

### Step 2: Update React Components

Example for `pages/Home.tsx`:

```tsx
<video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover">
  {/* 4K version for large desktops (≥1440px) */}
  <source
    src="/assets/video/responsive/4k/homepage-hero.mp4"
    type="video/mp4"
    media="(min-width: 1440px)"
  />

  {/* 1080p version for tablets and small desktops (769px - 1439px) */}
  <source
    src="/assets/video/responsive/desktop/homepage-hero.mp4"
    type="video/mp4"
    media="(min-width: 769px)"
  />

  {/* 720p version for mobile (≤768px) - fastest loading */}
  <source
    src="/assets/video/responsive/mobile/homepage-hero.mp4"
    type="video/mp4"
  />

  {/* Fallback */}
  Your browser does not support video playback.
</video>
```

**Benefits:**
- Mobile: 720p (1-3 MB) - fast loading
- Tablet: 1080p (8-15 MB) - great quality
- Desktop: 4K (25-50 MB) - stunning visuals
- Browser automatically selects best version

---

## Option 4: Modern Codec (VP9/AV1)

Use modern codecs for better compression at same quality.

### VP9 Encoding (Better compression than H.264)

```bash
# VP9 1080p - Same quality as H.264 CRF 23, but 30% smaller
ffmpeg -i homepage-hero.mp4 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
  -c:v libvpx-vp9 \
  -crf 31 \
  -b:v 0 \
  -preset slow \
  -c:a libopus -b:a 128k \
  homepage-hero-1080p.webm
```

**Pros:**
- 30% smaller files than H.264 at same quality
- Supported by all modern browsers

**Cons:**
- Requires WebM format
- Need H.264 fallback for older browsers

### Implementation with Fallback

```tsx
<video autoPlay muted loop playsInline preload="metadata" className="...">
  {/* VP9 (modern browsers) - best compression */}
  <source src="/assets/video/homepage-hero-1080p.webm" type="video/webm" />

  {/* H.264 fallback (all browsers) */}
  <source src="/assets/video/homepage-hero-1080p.mp4" type="video/mp4" />
</video>
```

---

## Recommended Approach

**For Gulf South Homes, I recommend Option 3 (Responsive Multi-Quality):**

1. **Keep current 720p videos** for mobile (already optimized)
2. **Add 1080p versions** for tablet/desktop (CRF 23)
3. **Optionally add 4K** for large displays (CRF 20)
4. **Update components** to use responsive `<source>` elements

**Expected outcome:**
- Mobile users: Same fast loading (1-3 MB)
- Desktop users: Stunning 1080p/4K quality
- Total bandwidth: Smart and adaptive
- Best of both worlds: Performance + Quality

---

## File Size Comparison

| Video | Current 720p | 1080p CRF 23 | 4K CRF 20 |
|-------|-------------|--------------|-----------|
| homepage-hero.mp4 | 2.5 MB | ~10 MB | ~35 MB |
| doublewide-hero.mp4 | 1.7 MB | ~7 MB | ~25 MB |
| land.mp4 | 1.0 MB | ~4 MB | ~15 MB |
| **Total (all 10 videos)** | **14 MB** | **~60 MB** | **~200 MB** |

**With responsive delivery:**
- Mobile user loads: 14 MB (current)
- Desktop user loads: 60 MB (1080p) or 200 MB (4K)
- Average user: ~30-40 MB (mix of mobile/desktop)

---

## Quality Level Guide

| CRF Value | Quality | Use Case | File Size |
|-----------|---------|----------|-----------|
| **CRF 18** | Near-lossless | Professional video editing | Very large |
| **CRF 20** | Excellent (4K) | Premium desktop displays | Large |
| **CRF 23** | Excellent (1080p) | High-quality web video | Medium |
| **CRF 26** | Good | Standard web video | Small |
| **CRF 28** | Acceptable | Background videos, mobile | Very small |
| **CRF 30** | Fair | Low-priority content | Minimal |

**Lower CRF = Higher Quality + Larger Files**

---

## Next Steps

1. **Choose your approach** (I recommend Option 3)
2. **Re-encode videos** using the commands above
3. **Test locally** to verify quality improvement
4. **Update React components** if using responsive delivery
5. **Deploy to Vercel** and test on real devices

---

## Testing Checklist

After re-encoding:

- [ ] Visual quality improved on desktop displays
- [ ] Videos play smoothly without buffering
- [ ] Mobile performance still acceptable
- [ ] File sizes within acceptable limits
- [ ] No encoding artifacts or corruption
- [ ] All pages load correctly

---

## Rollback Plan

Original 720p videos are backed up at:
- `video-backups/` - Original pre-optimization files
- `public/assets/video/videosworking/` - Current 720p optimized files

To rollback:
```bash
# Restore current 720p versions
cp mobile-720p/*.mp4 public/assets/video/videosworking/
```

---

**Questions or need help implementing?** Let me know which option you'd like to pursue!
