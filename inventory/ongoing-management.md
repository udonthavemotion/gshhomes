# Ongoing Inventory Management System

**Your complete guide to keeping Gulf South Homes inventory organized, current, and production-ready.**

---

## 🎯 Overview

This system is designed to work with your existing folder structure:

```
public/assets/images/single wide homes/
├── FRANKLIN HOMES/
│   └── Robertson/
│       ├── Info.txt
│       ├── cover photo.png
│       └── gallery images...
├── Patriot Home MOVE ONE UP/
│   ├── Move One Up/
│   └── thebabyboujee/
├── Southern/
│   ├── Granite Ridge/
│   └── The Lodge/
└── [Manufacturer Name]/
    └── [Home Model]/
        ├── Info.txt
        ├── cover photo.jpg (optional)
        └── images...
```

**Key principle:** Your folder structure = your source of truth. Keep it clean, and your website stays clean.

---

## 📁 Folder Structure Standards

### Naming Conventions

**Manufacturer Folders:**
- ✅ Use official manufacturer names (e.g., "FRANKLIN HOMES", "Patriot Home MOVE ONE UP", "Southern")
- ✅ Can include spaces and capitals (this is fine for organization)
- ❌ Don't use special characters: `@`, `#`, `%`, `&`, `*`

**Home Model Folders:**
- ✅ Use model name as shown by manufacturer (e.g., "Robertson", "The Lodge", "Move One Up")
- ✅ Title case preferred ("The Dogwood" not "the dogwood")
- ✅ Spaces are OK in folder names
- ❌ Avoid: parentheses, brackets, underscores in folder names

**Image Files:**
- ✅ Lowercase with hyphens: `gulf-south-homes-robertson-exterior.webp`
- ✅ Or use existing naming: `gulf_south_homes_robertson_gallery_1-1920w.webp`
- ✅ Descriptive names: `cover photo.png`, `COVERPHOTO.webp`, `exterior.jpg`
- ❌ Avoid: `IMG_0001.jpg`, `photo (1).jpg`, `new file.png`

---

## 🆕 Adding New Inventory

### Step-by-Step Workflow

#### 1. **Prepare the Folder**

Create the folder structure:
```
public/assets/images/single wide homes/[Manufacturer]/[Home Model]/
```

**Example for new home "The Bayou" by Sunshine Homes:**
```
public/assets/images/single wide homes/Sunshine Homes/The Bayou/
```

#### 2. **Add Photos**

Upload all photos to the model folder:
- **Minimum:** 1 exterior photo (preferably named "cover photo" or "COVERPHOTO")
- **Recommended:** 5-15 photos covering all rooms
- **Format:** JPG or WebP preferred
- **Size:** Aim for < 500 KB per image (optimize if needed)

**Photo order priority:**
1. Main exterior shot (cover photo)
2. Living room / great room
3. Kitchen (multiple angles if impressive)
4. Dining area
5. Master bedroom
6. Master bathroom
7. Additional bedrooms
8. Additional bathrooms
9. Special features (porches, closets, etc.)

#### 3. **Create Info.txt**

In the home model folder, create `Info.txt` with this format:

```txt
[Manufacturer Name]
[Home Model Name]
[X] bedrooms / [X] bathrooms

In-Stock and Ready to Tour

Custom-Build Available

[Width]' X [Length]'
[Square Footage] sqft (optional)
```

**Real example:**
```txt
Sunshine Homes
The Bayou
3 bedrooms / 2 bathrooms

In-Stock and Ready to Tour

Custom-Build Available

16' X 80'
1280 sqft
```

**Tips for Info.txt:**
- Keep manufacturer name consistent across all homes
- Include exact dimensions (used for sqft calculation)
- Optional: Add pricing, special promotions, or notes
- Save as plain text (`.txt` extension)

#### 4. **Add to Website Inventory**

Now use the inventory system to add the home to your website:

**Option A: Use the Inventory Agent (Recommended)**
```
"Use the inventory agent to add The Bayou from the Sunshine Homes folder"
```

The AI will:
- Read your Info.txt file
- Find your photos automatically
- Generate professional marketing copy
- Add the home to `data/homes.ts`
- Test the build
- Show you a preview

**Option B: Manual Method**
1. Copy template from `inventory/home-template.ts`
2. Paste into `data/homes.ts` (in the `HOMES` array)
3. Fill in all fields using your Info.txt data
4. Map manufacturer to allowed value (Franklin, Sunshine, Champion, BG, Other)
5. Set image paths to your folder: `/assets/images/single wide homes/[Manufacturer]/[Model]/...`
6. Run `npm run build` to validate
7. Test on dev server: `npm run dev`

#### 5. **Verify & Deploy**

**Test checklist:**
- [ ] Home appears on http://localhost:3001/single-wide
- [ ] Cover photo displays correctly
- [ ] Specs are accurate (beds, baths, sqft)
- [ ] Gallery images all load
- [ ] Description is compelling and error-free
- [ ] Filters work (manufacturer, beds, baths, sqft)
- [ ] Mobile responsive (resize browser)

**Deploy:**
```bash
git add .
git commit -m "Add new home: The Bayou (Sunshine Homes)"
git push
```

---

## 🔄 Updating Existing Inventory

### When to Update

- **Price changes:** Customer promotion or manufacturer pricing update
- **New photos:** Better quality images become available
- **Spec changes:** Manufacturer updates model specs
- **Availability:** Home sells or becomes available again
- **Special promotions:** FREE slab, utilities, delivery specials

### How to Update

#### Quick Updates (Price, Description, Features)

1. **Open data file:** `data/homes.ts`
2. **Find the home:** Search for `id: 'home-name'`
3. **Update fields:** Change price, description, or features array
4. **Save and test:**
   ```bash
   npm run build  # Verify no errors
   npm run dev    # Visual check
   ```
5. **Commit:**
   ```bash
   git add data/homes.ts
   git commit -m "Update The Robertson pricing: $65,900 → $62,900"
   git push
   ```

#### Adding/Updating Photos

1. **Add new images to folder:**
   ```
   public/assets/images/single wide homes/[Manufacturer]/[Model]/
   ```

2. **Update `data/homes.ts`:**
   - Find the home entry
   - Update `imageUrl` if changing cover photo
   - Update `gallery` array with new image paths

3. **Test and deploy** (same as above)

#### Changing Availability Status

**Option 1: Add to description**
```typescript
description: "**NOW IN STOCK!** Experience the quality and craftsmanship..."
```

**Option 2: Add to features**
```typescript
features: [
  "IN STOCK - Ready to Tour",
  "Limited Time Pricing",
  // ... other features
]
```

**Option 3: Use isFeatured flag**
```typescript
isFeatured: true,  // Shows "Featured" badge
```

---

## 📦 Archiving Sold/Discontinued Homes

### When to Archive

- Home model is discontinued by manufacturer
- Home is sold and no longer available
- Seasonal/temporary models

### Archive Process

**Don't delete permanently** - keep for records and potential future restock.

#### 1. **Create Archive Folder (One-Time Setup)**

```bash
mkdir "public/assets/images/single wide homes/_ARCHIVE"
```

#### 2. **Move Home to Archive**

**Move the entire home folder:**
```bash
# Example: archiving The Robertson
move "public/assets/images/single wide homes/FRANKLIN HOMES/Robertson" "public/assets/images/single wide homes/_ARCHIVE/Robertson"
```

Or manually:
1. Cut the home folder from manufacturer directory
2. Paste into `_ARCHIVE` folder
3. Optionally rename: `Robertson-SOLD-2024` or `Robertson-DISCONTINUED`

#### 3. **Remove from Website Data**

Edit `data/homes.ts`:
1. Find the home entry (search for `id: 'robertson'`)
2. Delete the entire object (from `{` to `},`)
3. **Important:** Check for comma syntax errors after deletion

**Before removal:**
```typescript
{
  id: 'home-to-keep',
  // ... fields ...
},
{
  id: 'robertson',  // ← Removing this one
  // ... fields ...
},
{
  id: 'another-home',
  // ... fields ...
},
```

**After removal:**
```typescript
{
  id: 'home-to-keep',
  // ... fields ...
},
{
  id: 'another-home',  // ← Make sure comma is still here
  // ... fields ...
},
```

#### 4. **Test and Commit**

```bash
npm run build  # Verify no errors
npm run dev    # Verify home is gone from catalog

git add .
git commit -m "Archive discontinued home: The Robertson"
git push
```

#### 5. **Document the Archive**

Create `_ARCHIVE/README.txt`:
```txt
Archived Homes - Gulf South Homes

Robertson (Franklin Homes) - Archived: 12/26/2024
Reason: Sold - no longer in inventory
Original location: FRANKLIN HOMES/Robertson/

The Bayou (Sunshine Homes) - Archived: 01/15/2025
Reason: Model discontinued by manufacturer
Original location: Sunshine Homes/The Bayou/
```

### Re-Activating Archived Homes

If a home comes back in stock:
1. Move folder from `_ARCHIVE` back to manufacturer folder
2. Add entry back to `data/homes.ts` (use template or copy old code)
3. Update any changed specs (price, availability, etc.)
4. Test and deploy

---

## 🔍 Inventory Health Checks

### Monthly Maintenance (5-10 minutes)

**Run this checklist once a month:**

#### 1. **Verify Folder Organization**

```bash
# List all manufacturers
ls "public/assets/images/single wide homes/"
```

- [ ] All manufacturer folders follow naming conventions
- [ ] No random loose files in main directory
- [ ] Archive folder exists and is organized

#### 2. **Check Info.txt Files**

```bash
# Find all Info.txt files
ls "public/assets/images/single wide homes/*/*/Info.txt"
```

- [ ] Every home has an Info.txt file
- [ ] Info matches current specs (beds, baths, dimensions)
- [ ] Pricing is up-to-date (if included)

#### 3. **Audit Data File**

Open `data/homes.ts` and verify:
- [ ] No duplicate home IDs
- [ ] All image paths are valid (spot-check 3-5 homes)
- [ ] Manufacturer values are correct (Franklin, Sunshine, Champion, BG, Other)
- [ ] Pricing is current
- [ ] No syntax errors (run `npm run build`)

#### 4. **Visual Website Check**

```bash
npm run dev
```

Visit http://localhost:3001/single-wide:
- [ ] All homes display properly
- [ ] No broken images
- [ ] Filters work correctly
- [ ] Mobile layout looks good
- [ ] Gallery navigation works

#### 5. **Update Inventory Count**

Track your inventory growth:
```bash
# Count single-wide homes
grep -c "type: \"Single Wide\"" data/homes.ts
```

Document in `inventory/inventory-log.txt`:
```txt
Inventory Log - Gulf South Homes

12/26/2024: 13 single-wide homes active
01/15/2025: 15 single-wide homes active (+2 new: The Bayou, Coastal Dream)
02/01/2025: 14 single-wide homes active (-1 sold: The Robertson)
```

---

## 📊 Inventory Dashboard (Quick Reference)

### Current Inventory Status

**Check at any time:**

```bash
# Single-wide count
grep -c "type: \"Single Wide\"" data/homes.ts

# Double-wide count
grep -c "type: \"Double Wide\"" data/double-wide-homes.ts

# Modular count
grep -c "type: \"Modular\"" data/modular-homes.ts

# Featured homes count
grep -c "isFeatured: true" data/homes.ts
```

### Quick Stats Script

Create `scripts/inventory-stats.sh`:
```bash
#!/bin/bash
echo "Gulf South Homes - Inventory Stats"
echo "==================================="
echo ""
echo "Single-Wide Homes: $(grep -c 'type: "Single Wide"' data/homes.ts)"
echo "Double-Wide Homes: $(grep -c 'type: "Double Wide"' data/double-wide-homes.ts)"
echo "Modular Homes: $(grep -c 'type: "Modular"' data/modular-homes.ts)"
echo ""
echo "Featured Homes: $(grep -c 'isFeatured: true' data/homes.ts data/double-wide-homes.ts data/modular-homes.ts)"
echo ""
echo "Last updated: $(date)"
```

Run with: `bash scripts/inventory-stats.sh`

---

## 🚀 Bulk Operations

### Adding Multiple Homes at Once

**When you have 5+ new homes to add:**

1. **Prepare all folders first:**
   ```bash
   # Create all manufacturer/model folders
   # Upload all photos
   # Create all Info.txt files
   ```

2. **Use inventory agent in batch mode:**
   ```
   "Use the inventory agent to add all homes from the Sunshine Homes folder"
   ```

   Or list them:
   ```
   "Add these homes: The Bayou, The Delta, The Swamp, The Marsh"
   ```

3. **Single build/test cycle:**
   - Agent adds all homes
   - Runs one build check
   - You review all at once

4. **Commit together:**
   ```bash
   git add .
   git commit -m "Add 4 new Sunshine Homes models: Bayou, Delta, Swamp, Marsh"
   git push
   ```

### Updating All Prices (Manufacturer Price Change)

**If Sunshine Homes raises all prices by 5%:**

1. Find all Sunshine homes in `data/homes.ts`
2. Update each `price` field
3. Or use find/replace (carefully):
   - Find: `manufacturer: "Sunshine",` (to identify homes)
   - Manually update price for each match

**Better approach:** Ask the inventory agent:
```
"Update all Sunshine Homes prices: increase by 5%"
```

The agent will:
- Find all Sunshine homes
- Calculate new prices
- Update data file
- Show you the changes for approval

---

## 🎯 Best Practices

### DO ✅

- **Keep Info.txt current** - Update whenever specs change
- **Use cover photos** - Name main image "cover photo" or "COVERPHOTO"
- **Organize by manufacturer** - Keep folder structure clean
- **Archive, don't delete** - Preserve history for records
- **Test before deploying** - Always run `npm run build` first
- **Commit with clear messages** - "Add home: X" or "Update pricing: Y"
- **Document special promotions** - Note in features or description
- **Monthly health checks** - Catch issues early

### DON'T ❌

- **Don't leave old homes active** - Archive when sold/discontinued
- **Don't skip Info.txt** - It's your source of truth
- **Don't use special characters** - In file/folder names
- **Don't commit without testing** - Build might fail in production
- **Don't duplicate home IDs** - Must be unique across all data files
- **Don't mix old/new photos** - Keep consistent quality
- **Don't forget git commits** - Document changes for tracking

---

## 📝 Quick Command Reference

### Daily Operations

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Check inventory count
grep -c "type: \"Single Wide\"" data/homes.ts

# Find a specific home
grep -A 10 "id: 'robertson'" data/homes.ts
```

### Git Workflow

```bash
# Check what changed
git status

# Stage inventory changes
git add data/homes.ts
git add "public/assets/images/single wide homes/"

# Commit with message
git commit -m "Add new home: The Bayou (Sunshine Homes)"

# Push to production
git push

# View recent changes
git log --oneline -5
```

### File Management

```bash
# Create new home folder
mkdir "public/assets/images/single wide homes/Sunshine Homes/The Bayou"

# List all homes in manufacturer folder
ls "public/assets/images/single wide homes/Sunshine Homes/"

# Find all Info.txt files
find "public/assets/images/single wide homes" -name "Info.txt"

# Move to archive
move "[source folder]" "public/assets/images/single wide homes/_ARCHIVE/"
```

---

## 🆘 Troubleshooting

### Common Issues

**Q: Home appears twice on website**
- A: Duplicate ID in data file - change one to unique value

**Q: Images not loading**
- A: Check path starts with `/assets/images/...` (note leading slash)
- A: Verify file exists in `public/assets/images/...` folder
- A: Check filename capitalization (case-sensitive)

**Q: Build fails after adding home**
- A: Check for missing commas in arrays
- A: Verify manufacturer value is valid (Franklin, Sunshine, Champion, BG, Other)
- A: Ensure all required fields are present

**Q: Home doesn't appear in filters**
- A: Verify `type` field matches page (`"Single Wide"` for SingleWide page)
- A: Check manufacturer spelling matches exactly
- A: Restart dev server after data changes

**Q: How do I change manufacturer name display?**
- A: Update the `manufacturer` field in data file
- A: Valid values: `'Champion'`, `'Sunshine'`, `'Franklin'`, `'BG'`, `'Other'`
- A: For unlisted manufacturers, use `'Other'` and mention brand in description

---

## 📚 Additional Resources

- **Quick Start:** `inventory/README.md`
- **Detailed Checklist:** `inventory/add-home-checklist.md`
- **Copy-Paste Template:** `inventory/home-template.ts`
- **AI Agent Definition:** `inventory/inventory-agent.md`
- **This Document:** `inventory/ongoing-management.md`

---

## 🔄 Version History

| Date | Change | Notes |
|------|--------|-------|
| 12/26/2024 | Initial creation | Established ongoing management system |

---

**Questions?** Reference the inventory agent:
```
"Use the inventory agent to help me [task]"
```

The agent has context on all processes, best practices, and your folder structure.

---

*Keep this document updated as your processes evolve. Add notes, tips, and lessons learned!*
