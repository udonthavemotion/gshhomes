# Add New Home - Complete Checklist

**Comprehensive guide for adding a home to Gulf South Homes website.**

---

## 📋 Pre-Flight Checklist

Before you start, gather:

- [ ] Home specifications (beds, baths, sqft, price)
- [ ] Manufacturer name (Champion, Sunshine, Franklin, BG, or Other)
- [ ] Photos (at least 1 exterior, ideally 5-15 total)
- [ ] Marketing description or sales sheet
- [ ] Home model name

**Time estimate:** 10-15 minutes for first home, 5 minutes once familiar

---

## Step 1: Prepare Images

### 1.1 Collect Photos

**What you need:**
- Minimum: 1 exterior hero shot
- Recommended: 5-15 photos covering:
  - Exterior (front view, best angle)
  - Living room / main living area
  - Kitchen (multiple angles if impressive)
  - Master bedroom
  - Bathrooms
  - Additional bedrooms
  - Special features (porches, closets, laundry)

### 1.2 Optimize Images

**Best practices:**
- Format: JPG (not PNG unless transparency needed)
- Target size: < 500 KB per image
- Resolution: 1200-2000px wide (responsive images will auto-scale)
- Aspect ratio: Landscape preferred (4:3 or 16:9)

**Quick optimization (if needed):**
```bash
# Using ImageMagick (if installed)
magick convert input.jpg -resize 1600x1200 -quality 85 output.jpg

# Or use online tools:
# - TinyPNG.com
# - Squoosh.app
# - Compressor.io
```

### 1.3 Create Image Folder

**Naming convention for folder:**
```
public/assets/images/{home-type}/{home-id}/
```

**Examples by home type:**

**Single-Wide:**
```
public/assets/images/homes/robertson/
public/assets/images/homes/ivy-dream/
public/assets/images/homes/baby-boujee/
```

**Double-Wide:**
```
public/assets/images/Double Wide Homes/boujee/
public/assets/images/Double Wide Homes/orleans/
```

**Modular:**
```
public/assets/images/Modular Homes Page/simon/
public/assets/images/Modular Homes Page/king-david/
```

**Create the folder:**
```bash
# Example for single-wide home with id "sunrise"
mkdir "public/assets/images/homes/sunrise"

# Example for double-wide home with id "coastline"
mkdir "public/assets/images/Double Wide Homes/coastline"

# Example for modular home with id "bayou-breeze"
mkdir "public/assets/images/Modular Homes Page/bayou-breeze"
```

### 1.4 Name Image Files

**Use descriptive filenames:**
- ✅ Good: `exterior.jpg`, `kitchen-island.jpg`, `master-bedroom.jpg`
- ❌ Bad: `IMG_0001.jpg`, `photo.jpg`, `new.jpg`

**Example file structure:**
```
public/assets/images/homes/sunrise/
├── exterior.jpg              (main thumbnail)
├── living-room.jpg
├── kitchen.jpg
├── kitchen-island.jpg
├── master-bedroom.jpg
├── bedroom-2.jpg
├── bathroom.jpg
└── front-porch.jpg
```

---

## Step 2: Add Home to Data File

### 2.1 Open the Correct Data File

**Choose based on home type:**

| Home Type | File Path |
|-----------|-----------|
| Single-Wide | `data/homes.ts` |
| Double-Wide | `data/double-wide-homes.ts` |
| Modular | `data/modular-homes.ts` |

### 2.2 Copy the Template

1. Open `inventory/home-template.ts`
2. Copy the entire template (from `{` to `},`)
3. Go to your data file
4. Find the array (e.g., `export const HOMES = [`)
5. Scroll to the end of the array (before the closing `];`)
6. Paste the template

**Example:**
```typescript
export const HOMES: HomeModel[] = [
  {
    id: 'robertson',
    name: "The Robertson",
    // ... existing home ...
  },
  {
    id: 'ivy-dream',
    name: "Ivy Dream",
    // ... existing home ...
  },
  // 👇 PASTE YOUR NEW HOME HERE
  {
    id: 'sunrise',
    name: "The Sunrise",
    // ... your new home data ...
  },
];
```

### 2.3 Fill in Required Fields

**Work through each field:**

#### `id` (REQUIRED)
- Unique identifier
- Lowercase, hyphenated, no spaces
- Must be unique across ALL homes (single, double, modular)
- Examples: `sunrise`, `coastal-dream`, `magnolia-manor`

```typescript
id: 'sunrise',
```

#### `name` (REQUIRED)
- Display name shown to customers
- Use title case
- Can include "The" prefix
- Examples: `"The Sunrise"`, `"Coastal Dream"`, `"Magnolia Manor"`

```typescript
name: "The Sunrise",
```

#### `manufacturer` (REQUIRED)
- MUST be one of: `'Champion'`, `'Sunshine'`, `'Franklin'`, `'BG'`, `'Other'`
- Exact spelling and capitalization required
- Use `'Other'` for unlisted manufacturers

```typescript
manufacturer: 'Sunshine',
```

#### `type` (REQUIRED)
- MUST be one of: `'Single Wide'`, `'Double Wide'`, `'Modular'`
- MUST match the data file you're editing
- Single-Wide file → use `'Single Wide'`
- Double-Wide file → use `'Double Wide'`
- Modular file → use `'Modular'`

```typescript
type: 'Single Wide',
```

#### `beds` (REQUIRED)
- Number of bedrooms
- Whole number (no decimals)
- Common values: 2, 3, 4, 5

```typescript
beds: 3,
```

#### `baths` (REQUIRED)
- Number of bathrooms
- Can include half baths (e.g., 2.5)
- Common values: 2, 2.5, 3

```typescript
baths: 2,
```

#### `sqft` (REQUIRED)
- Square footage
- Number only (no commas, no units)
- Examples: 1100, 1680, 2448

```typescript
sqft: 1280,
```

#### `price` (OPTIONAL)
- String with dollar sign and commas
- Format: `"$XX,XXX"`
- Omit entirely if price varies or is TBD
- Examples: `"$65,900"`, `"$125,000"`

```typescript
price: "$72,500",
// OR omit the line entirely:
```

#### `description` (REQUIRED)
- 2-4 sentences
- Highlight key selling points
- Focus on lifestyle, quality, features
- Be specific and compelling

```typescript
description: "Welcome to The Sunrise, a thoughtfully designed single-wide home that brings modern comfort and coastal charm together. Featuring an open-concept living area flooded with natural light, a chef-inspired kitchen with ample counter space, and a spacious master suite with walk-in closet. Energy-efficient construction and premium finishes make this home perfect for Louisiana living.",
```

**Tips for writing descriptions:**
- Start with a hook ("Welcome to...", "Discover...", "Experience...")
- Mention layout/floor plan highlights
- Include 1-2 standout features
- End with target buyer appeal ("Perfect for families...", "Ideal for...")

#### `features` (REQUIRED)
- Array of 4-8 bullet points
- Focus on unique selling points
- Include construction quality, amenities, layout highlights
- Keep each feature short (2-5 words)

```typescript
features: [
  "Open Floor Plan",
  "Modern Kitchen with Island",
  "Energy Efficient Windows",
  "Luxury Vinyl Plank Flooring",
  "Walk-in Master Closet",
  "Storm-Ready Construction",
  "Covered Front Porch",
  "Spacious Laundry Room",
],
```

**Common features to consider:**
- Layout: "Open Floor Plan", "Split Bedroom Design", "Great Room Concept"
- Kitchen: "Modern Kitchen", "Granite Countertops", "Kitchen Island", "Pantry"
- Efficiency: "Energy Efficient Windows", "Low-E Glass", "High R-Value Insulation"
- Flooring: "Luxury Vinyl Plank", "Carpet in Bedrooms", "Tile Bathrooms"
- Storage: "Walk-in Closets", "Ample Storage", "Linen Closet"
- Construction: "Storm-Ready", "Engineered for Louisiana Climate", "Quality Construction"
- Outdoor: "Covered Front Porch", "Rear Deck Option", "Landscaping Ready"
- Other: "Ceiling Fans Throughout", "Garden Tub", "Separate Shower", "Mudroom"

#### `imageUrl` (REQUIRED)
- Path to main thumbnail image
- This image shows on the card/grid view
- Should be best exterior shot or hero image
- Format: `/assets/images/{home-type}/{home-id}/{filename}.jpg`

```typescript
imageUrl: "/assets/images/homes/sunrise/exterior.jpg",
```

**Path patterns by type:**
- Single-Wide: `/assets/images/homes/{id}/filename.jpg`
- Double-Wide: `/assets/images/Double Wide Homes/{id}/filename.jpg`
- Modular: `/assets/images/Modular Homes Page/{id}/filename.jpg`

#### `gallery` (OPTIONAL)
- Array of image paths
- All additional photos beyond the main thumbnail
- Order matters: exterior → living → kitchen → bedrooms → bathrooms
- Omit entirely if you only have one image

```typescript
gallery: [
  "/assets/images/homes/sunrise/exterior.jpg",
  "/assets/images/homes/sunrise/living-room.jpg",
  "/assets/images/homes/sunrise/kitchen.jpg",
  "/assets/images/homes/sunrise/kitchen-island.jpg",
  "/assets/images/homes/sunrise/master-bedroom.jpg",
  "/assets/images/homes/sunrise/bedroom-2.jpg",
  "/assets/images/homes/sunrise/bathroom.jpg",
  "/assets/images/homes/sunrise/front-porch.jpg",
],
```

**Recommended gallery order:**
1. Exterior (hero shot)
2. Living room / main living area
3. Kitchen (multiple angles if impressive)
4. Dining area (if separate)
5. Master bedroom
6. Master bathroom
7. Additional bedrooms
8. Additional bathrooms
9. Laundry / utility
10. Special features (porches, decks, closets)

#### `isFeatured` (OPTIONAL)
- Boolean: `true` or `false`
- Set to `true` to show "Featured" badge on card
- Featured homes appear on homepage
- Omit entirely for regular listings (defaults to false)

```typescript
isFeatured: true,
// OR
isFeatured: false,
// OR omit the line entirely
```

### 2.4 Delete Template Comments

**Remove:**
- The top comment block explaining the template
- All inline comments (`// REQUIRED:`, `// Examples:`, etc.)
- The bottom checklist comment block

**Keep only the clean data:**
```typescript
{
  id: 'sunrise',
  name: "The Sunrise",
  manufacturer: 'Sunshine',
  type: 'Single Wide',
  beds: 3,
  baths: 2,
  sqft: 1280,
  price: "$72,500",
  description: "Welcome to The Sunrise...",
  features: [
    "Open Floor Plan",
    "Modern Kitchen with Island",
    // ... more features
  ],
  imageUrl: "/assets/images/homes/sunrise/exterior.jpg",
  gallery: [
    "/assets/images/homes/sunrise/exterior.jpg",
    // ... more images
  ],
  isFeatured: false,
},
```

### 2.5 Verify Syntax

**Common mistakes to avoid:**

❌ **Missing comma after closing brace:**
```typescript
  isFeatured: false,
}  // ← Missing comma here if not last item!
{
  id: 'next-home',
```

✅ **Correct:**
```typescript
  isFeatured: false,
},  // ← Comma added
{
  id: 'next-home',
```

❌ **Missing commas in arrays:**
```typescript
features: [
  "Open Floor Plan"  // ← Missing comma
  "Modern Kitchen"
],
```

✅ **Correct:**
```typescript
features: [
  "Open Floor Plan",  // ← Comma added
  "Modern Kitchen",
],
```

❌ **Typos in field names:**
```typescript
manfacturer: 'Champion',  // ← Typo: should be "manufacturer"
```

❌ **Invalid manufacturer values:**
```typescript
manufacturer: 'champion',  // ← Wrong: should be 'Champion' (capital C)
manufacturer: 'Clayton',   // ← Not in allowed list
```

✅ **Correct manufacturer values:**
- `'Champion'`
- `'Sunshine'`
- `'Franklin'`
- `'BG'`
- `'Other'`

---

## Step 3: Test Your Changes

### 3.1 Run Build

**This checks for syntax errors:**
```bash
npm run build
```

**What to look for:**

✅ **Success:**
```
vite v5.x.x building for production...
✓ built in XXXms
```

❌ **Errors to fix:**
```
Error: Unexpected token (line XX)
→ Missing comma or bracket

Type error: Type 'string' is not assignable to type 'Manufacturer'
→ Invalid manufacturer value

Type error: Property 'sqft' is missing
→ Required field not filled in
```

### 3.2 Start Dev Server

```bash
npm run dev
```

Open `http://localhost:3000`

### 3.3 Navigate to Correct Page

**Based on home type:**
- Single-Wide → `http://localhost:3000/single-wide`
- Double-Wide → `http://localhost:3000/double-wide`
- Modular → `http://localhost:3000/modular-homes`

### 3.4 Visual Checks

**Find your new home and verify:**

- [ ] Home card appears in grid
- [ ] Main thumbnail image loads correctly
- [ ] Home name displays correctly
- [ ] Beds, baths, sqft show correct numbers (formatted with commas)
- [ ] "Featured" badge appears (if `isFeatured: true`)
- [ ] Description displays without truncation issues
- [ ] "View Details" button works

**Click "View Details" and verify:**
- [ ] Gallery images load correctly
- [ ] All images are high quality (not blurry/pixelated)
- [ ] Gallery navigation works (prev/next buttons)
- [ ] Features list displays all items
- [ ] Contact form appears at bottom
- [ ] Mobile responsive (resize browser or check on phone)

**Test filters (on catalog page):**
- [ ] Home appears when filtering by bed count
- [ ] Home appears when filtering by bath count
- [ ] Home appears when filtering by manufacturer
- [ ] Home appears when filtering by size range

### 3.5 Browser Console Check

**Open DevTools (F12) → Console tab**

Look for:
- ❌ No red errors
- ⚠️ No warnings about missing images
- ✅ Clean console = good to go

**Common warnings to fix:**

```
Failed to load resource: 404 (Not Found)
assets/images/homes/sunrise/exterior.jpg
→ Image path typo or file not uploaded
```

```
Warning: Each child in a list should have a unique "key" prop
→ This is a code issue, not your data (ignore or report to developer)
```

---

## Step 4: Commit and Deploy

### 4.1 Review Changes

**Check what files changed:**
```bash
git status
```

**You should see:**
- Modified: `data/homes.ts` (or `double-wide-homes.ts` or `modular-homes.ts`)
- Untracked: `public/assets/images/{type}/{id}/` (your new images)

### 4.2 Stage Changes

```bash
# Add data file
git add data/homes.ts

# Add images folder
git add "public/assets/images/homes/sunrise/"

# Or add everything:
git add .
```

### 4.3 Commit

```bash
git commit -m "Add new home: The Sunrise (single-wide)"
```

**Use descriptive commit messages:**
- Single-Wide: `"Add new single-wide: The [Name]"`
- Double-Wide: `"Add new double-wide: [Name]"`
- Modular: `"Add new modular home: [Name]"`
- Multiple: `"Add 3 new single-wide homes: [Name1], [Name2], [Name3]"`

### 4.4 Push to Repository

```bash
git push
```

### 4.5 Verify Deployment

**If using Vercel (auto-deploy):**
1. Wait 2-3 minutes for build to complete
2. Visit your production site
3. Navigate to the catalog page
4. Verify new home appears

**If manual deployment:**
- Follow your deployment process
- Verify after deployment completes

---

## 🔄 Quick Reference: Adding Multiple Homes

**Batch workflow:**

1. **Prepare all image folders first:**
   ```bash
   mkdir "public/assets/images/homes/sunrise"
   mkdir "public/assets/images/homes/bayou-view"
   mkdir "public/assets/images/homes/pelican-point"
   ```

2. **Upload all images at once** (drag & drop into folders)

3. **Copy template 3 times** into data file

4. **Fill in data for each home** (work through one at a time)

5. **Test build once:**
   ```bash
   npm run build
   ```

6. **Commit all together:**
   ```bash
   git add .
   git commit -m "Add 3 new single-wide homes: Sunrise, Bayou View, Pelican Point"
   git push
   ```

---

## 🆘 Troubleshooting

### Build Fails with Type Error

**Error:**
```
Type '{ id: string; name: string; ... }' is not assignable to type 'HomeModel'
```

**Fix:**
1. Check all required fields are present: `id`, `name`, `manufacturer`, `type`, `beds`, `baths`, `sqft`, `description`, `features`, `imageUrl`
2. Verify manufacturer is valid: `'Champion'`, `'Sunshine'`, `'Franklin'`, `'BG'`, or `'Other'`
3. Verify type matches file: `'Single Wide'`, `'Double Wide'`, or `'Modular'`
4. Check that `beds`, `baths`, `sqft` are numbers (not strings)

### Home Not Showing on Page

**Checklist:**
1. Did you add it to the correct data file?
   - Single-Wide → `data/homes.ts`
   - Double-Wide → `data/double-wide-homes.ts`
   - Modular → `data/modular-homes.ts`
2. Does the `type` field match the page?
   - SingleWide page filters for `type === 'Single Wide'`
3. Did you restart the dev server after adding?
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Images Not Loading

**Debug steps:**

1. **Check file path is correct:**
   - Starts with `/assets/images/...` (leading slash)
   - Matches actual file location in `public/assets/images/...`
   - Exact filename match (case-sensitive)

2. **Verify file exists:**
   ```bash
   # Example: check if sunrise exterior image exists
   ls "public/assets/images/homes/sunrise/exterior.jpg"
   ```

3. **Test direct URL:**
   - Dev: `http://localhost:3000/assets/images/homes/sunrise/exterior.jpg`
   - Should show the image directly
   - If 404: path is wrong or file doesn't exist

4. **Check file permissions** (rare, but possible on some systems)

5. **Common mistakes:**
   - ❌ `/public/assets/images/...` (don't include "public" in path)
   - ❌ `assets/images/...` (missing leading slash)
   - ❌ `/assets/images/homes/Sunrise/...` (wrong capitalization)

### Duplicate ID Error

**Error:**
```
Warning: Encountered two children with the same key, `sunrise`
```

**Fix:**
- Each home must have a unique `id` across ALL data files
- Change the `id` to something unique
- Search all data files to ensure no duplicates:
  ```bash
  # Search for duplicate IDs
  grep "id: 'sunrise'" data/*.ts
  ```

---

## ✅ Final Checklist

Before marking the task complete:

- [ ] Home data added to correct file (`homes.ts`, `double-wide-homes.ts`, or `modular-homes.ts`)
- [ ] All required fields filled in correctly
- [ ] All images uploaded to `public/assets/images/{type}/{id}/`
- [ ] Image paths in data match actual file locations
- [ ] Build passes: `npm run build` completes without errors
- [ ] Home appears on correct catalog page (single-wide, double-wide, modular)
- [ ] Home detail page loads and displays correctly
- [ ] Gallery works (if multiple images)
- [ ] Filters work (beds, baths, manufacturer, sqft)
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] Console is clean (no errors in browser DevTools)
- [ ] Changes committed to git
- [ ] Changes pushed to repository
- [ ] Deployment verified (if auto-deploy enabled)

---

**🎉 Done! Your new home is live!**

---

## 📚 Additional Resources

- **Quick Start:** `inventory/README.md`
- **Copy-Paste Template:** `inventory/home-template.ts`
- **AI Agent Help:** `inventory/inventory-agent.md`
- **Project Docs:** `CLAUDE.md` (main project context)
- **Type Definitions:** `types.ts` (HomeModel interface)

---

*Last updated: December 2024*
