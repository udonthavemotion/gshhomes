# Quick Start: Adding 30-Home Inventory to Your Site

## 🎯 Goal
Update your Gulf South Homes website from 11 homes to 30 homes with complete manufacturer links.

---

## 📋 What You Have
- Current site: https://gshhomes.vercel.app/
- Current inventory: 11 homes
- Framework: React (deployed on Vercel)

## 📦 What I'm Providing
1. **inventory-data.json** - Complete data for all 30 homes
2. **CURSOR_IMPLEMENTATION_GUIDE.md** - Detailed step-by-step instructions
3. **Gulf_South_Homes_Inventory_Table.md** - Reference table with all home details
4. **Gulf_South_Homes_Missing_Review.md** - Notes on homes needing photo updates

---

## ⚡ Fastest Way to Implement in Cursor

### Step 1: Open Your Project in Cursor
Open your Gulf South Homes project folder in Cursor.

### Step 2: Find Your Data File
**Cursor Prompt:**
```
Find the file that contains the current home inventory data (the 11 homes currently displayed on the site)
```

### Step 3: Replace the Data
**Cursor Prompt:**
```
Replace the entire homes array in this file with the data from inventory-data.json. The new data has 30 homes with the same structure plus additional fields: inStock, specialOffer, manufacturerUrl, gulfSouthUrl, and dimensions.
```

Then paste the contents of `inventory-data.json`.

### Step 4: Update Filters
**Cursor Prompt:**
```
Update the manufacturer filter to dynamically generate options from the homes data instead of being hardcoded. The new data includes these manufacturers: BG Homes, Sunshine Homes, Champion Homes, Franklin Homes, Patriot Homes, Southern Homes, Buccaneer Homes, TRU Homes, Clayton Epic, and Cavalier.
```

### Step 5: Add In-Stock Badge
**Cursor Prompt:**
```
Add a green "In-Stock & Ready to Tour" badge to each home card, similar to the existing Featured badge. Show it when home.inStock is true.
```

### Step 6: Add Manufacturer Link
**Cursor Prompt:**
```
Add a "View Official Photos" button to each home card that links to home.manufacturerUrl. Style it as a secondary button and open in a new tab.
```

### Step 7: Test
**Cursor Prompt:**
```
Check if the catalog page now shows 30 homes and all filters work correctly. Add console logs if needed to debug.
```

---

## 🔢 Expected Results

After implementation:
- **Total Homes:** 30 (up from 11)
- **Single-Wide:** 17 homes
- **Double-Wide:** 13 homes  
- **Manufacturers:** 10 (up from 3)
- **In-Stock Homes:** All 30
- **Special Offers:** 3 homes (Robertson, Grove, Kyleigh)

---

## 🎨 New Features to Add

1. **In-Stock Badge** - Green badge on all homes
2. **Special Offer Banner** - Orange/red banner on homes with specialOffer
3. **Manufacturer Link** - Button linking to official manufacturer photos
4. **Dynamic Filters** - Auto-generate manufacturer filters from data
5. **Photo Placeholder** - Show "Coming Soon" for homes without photos yet

---

## 📊 Data Structure Reference

Each home in the new data has:
```javascript
{
  "id": "robertson",
  "name": "The Robertson",
  "manufacturer": "Franklin Homes",
  "type": "Single Wide",
  "beds": 3,
  "baths": 2,
  "sqft": 1344,
  "dimensions": "16' x 84'",
  "featured": true,
  "inStock": true,
  "specialOffer": "FREE SLAB OR UTILITIES",  // optional
  "description": "...",
  "images": [],
  "photoCount": 7,
  "manufacturerUrl": "https://...",
  "gulfSouthUrl": "https://..."
}
```

---

## 🚨 Common Issues

**Issue:** "Browsing 11 homes" text doesn't update
**Fix:** Make the count dynamic: `Browsing ${filteredHomes.length} homes`

**Issue:** New manufacturers don't show in filter
**Fix:** Generate filters dynamically from data, don't hardcode

**Issue:** Some homes show broken images
**Fix:** Add placeholder for homes with `photoCount: 0`

---

## 📞 Next Steps After Implementation

1. **Get Real Photos** - Contact Gulf South Homes for photos of homes currently showing 0 photos
2. **Verify Specs** - Double-check all bed/bath/sqft numbers are accurate
3. **Add Detail Pages** - Create individual pages for each home with floor plans
4. **SEO Update** - Update meta tags to reflect "30+ homes in stock"

---

## 💡 Pro Tips for Using Cursor

1. **Use @mentions** - Reference specific files: `@Catalog.jsx update the filter logic`
2. **Be specific** - Instead of "fix it", say "the Patriot Homes filter shows 0 results"
3. **Iterate** - Make one change at a time, test, then move to the next
4. **Ask for explanations** - "Explain how the current filter logic works"

---

## ✅ Verification Checklist

After implementation, check:
- [ ] Catalog shows "Browsing 30 homes"
- [ ] All 10 manufacturers appear in filter dropdown
- [ ] Filtering by manufacturer works correctly
- [ ] "In-Stock" badge appears on all homes
- [ ] Special offer banner appears on 3 Franklin homes
- [ ] "View Official Photos" button works and opens new tab
- [ ] Mobile responsive layout still works
- [ ] No console errors

---

## 🎉 You're Done!

Once you've completed these steps, your site will have:
- 3x more inventory (30 vs 11 homes)
- Links to official manufacturer photos
- Better filtering with 10 manufacturers
- Clear "in-stock" indicators
- Special offer callouts

This will significantly improve the user experience and showcase your full inventory!
