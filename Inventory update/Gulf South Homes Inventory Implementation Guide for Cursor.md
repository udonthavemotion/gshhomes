# Gulf South Homes Inventory Implementation Guide for Cursor

## Overview

This guide will help you integrate the complete 30-home inventory into your existing Gulf South Homes website at gshhomes.vercel.app using Cursor AI.

---

## Step 1: Locate Your Project Files

Your website appears to be a React application deployed on Vercel. In Cursor, you'll need to find:

1. **Data/Content Files** - Look for:
   - `src/data/homes.js` or `src/data/homes.json`
   - `src/content/inventory.js`
   - Any file containing the current 11 homes data

2. **Component Files** - Look for:
   - `src/components/Catalog.jsx` or `src/pages/Catalog.jsx`
   - `src/components/HomeCard.jsx`
   - Any component that renders the home cards

3. **Filter/Category Files** - Look for:
   - Filter logic for manufacturers
   - Home type filters (Single Wide, Double Wide, Modular)

---

## Step 2: Replace/Update the Data File

### Option A: If you have a separate data file (e.g., `homes.js` or `homes.json`)

**In Cursor, use this prompt:**

```
@homes.json Replace the entire contents of this file with the inventory-data.json file I'm providing. This contains all 30 homes from Gulf South Homes' current inventory with complete details including manufacturer URLs.
```

Then paste the contents of `inventory-data.json` (provided separately).

### Option B: If the data is embedded in a component

**In Cursor, use this prompt:**

```
@Catalog.jsx Find the homes data array in this file and replace it with the complete 30-home inventory from inventory-data.json. Maintain the existing component structure and styling.
```

---

## Step 3: Update Manufacturer Filters

Your current site shows filters for: Franklin, Sunshine, Champion

You need to add: **Patriot Homes, Southern Homes, TRU Homes, Clayton Epic, Cavalier, Buccaneer Homes, BG Homes**

**In Cursor, use this prompt:**

```
Update the manufacturer filter to include all manufacturers from the new inventory data:
- BG Homes
- Sunshine Homes  
- Champion Homes
- Franklin Homes
- Patriot Homes
- Southern Homes
- Buccaneer Homes
- TRU Homes
- Clayton Epic
- Cavalier

Maintain the existing filter UI design and functionality. Sort alphabetically.
```

---

## Step 4: Add "In-Stock" Badge

All 30 homes in the new inventory have `"inStock": true`. You should display this prominently.

**In Cursor, use this prompt:**

```
@HomeCard.jsx Add an "In-Stock & Ready to Tour" badge to each home card. Style it similar to the existing "Featured" badge but use a green color scheme. Only show this badge when home.inStock === true.
```

---

## Step 5: Add Special Offer Badge

Some homes have `"specialOffer": "FREE SLAB OR UTILITIES"` in the data.

**In Cursor, use this prompt:**

```
@HomeCard.jsx Add a special offer badge/banner to home cards when home.specialOffer exists. Display the offer text prominently, using an attention-grabbing color like orange or red. Position it near the top of the card.
```

---

## Step 6: Link to Manufacturer Pages

Each home now has a `manufacturerUrl` field. Add a "View Manufacturer Page" or "See Official Photos" link.

**In Cursor, use this prompt:**

```
@HomeCard.jsx or @HomeDetails.jsx Add a "View Official Photos" button that links to home.manufacturerUrl. Style it as a secondary button below the main "View Details" button. Open the link in a new tab.
```

---

## Step 7: Update Home Count Display

The page currently shows "Browsing 11 homes" - this needs to be dynamic.

**In Cursor, use this prompt:**

```
Update the "Browsing X homes" text to dynamically show the count of filtered homes. When no filters are applied, it should show "Browsing 30 homes". When filters are active, show the filtered count.
```

---

## Step 8: Add Missing Images Placeholder

Many homes in the new inventory don't have images yet (photoCount: 0).

**In Cursor, use this prompt:**

```
@HomeCard.jsx When a home has no images (home.images.length === 0 or home.photoCount === 0), display a placeholder image with the manufacturer logo or a "Coming Soon" overlay. Maintain the same card dimensions.
```

---

## Step 9: Test Filters

After updating, test that:
- All 30 homes display when no filters are applied
- Manufacturer filter works for all 10 manufacturers
- Home type filter correctly shows Single Wide (17) and Double Wide (13)
- Featured filter shows only featured homes
- In-stock badge appears on all homes

**In Cursor, use this prompt:**

```
Review the filter logic to ensure it correctly handles:
1. Multiple manufacturer options (10 total)
2. Home type filtering (Single Wide, Double Wide, Modular)
3. Featured homes filtering
4. In-stock filtering
5. Combination of multiple filters

Add console logs to debug if needed.
```

---

## Step 10: Update SEO and Meta Information

**In Cursor, use this prompt:**

```
Update the page title and meta description to reflect the expanded inventory:
- Title: "30+ Homes In-Stock | Gulf South Homes | Houma, LA"
- Description: "Browse 30+ manufactured and modular homes in-stock and ready to tour. Single-wide and double-wide models from 10 top manufacturers. Visit our Houma, LA showroom today."
```

---

## Quick Cursor Prompts Cheat Sheet

### To find where data is stored:
```
Show me all files that contain home inventory data, specifically looking for arrays or objects with properties like "name", "manufacturer", "beds", "baths"
```

### To update the entire inventory at once:
```
Replace the current homes data with this new inventory data: [paste inventory-data.json]. Ensure all existing functionality (filtering, sorting, display) continues to work with the new data structure.
```

### To add new features:
```
Add [feature description] to the home cards/catalog page. Style it consistently with the existing design using the same color scheme and spacing.
```

### To debug issues:
```
The [specific feature] isn't working correctly. Check the component logic and add console logs to help debug. Show me what might be causing the issue.
```

---

## Common Issues and Solutions

### Issue: Filters not showing all manufacturers
**Solution:** Check if the filter component is hardcoded with manufacturer names. Update it to dynamically generate filters from the data:

```javascript
const manufacturers = [...new Set(homes.map(home => home.manufacturer))].sort();
```

### Issue: Home count not updating
**Solution:** Ensure the count is calculated from the filtered array, not the original array:

```javascript
const filteredHomes = homes.filter(/* filter logic */);
const homeCount = filteredHomes.length;
```

### Issue: Images not loading
**Solution:** Ensure placeholder images are used when `home.images.length === 0` or `home.photoCount === 0`

### Issue: Links not opening in new tab
**Solution:** Add `target="_blank"` and `rel="noopener noreferrer"` to external links:

```javascript
<a href={home.manufacturerUrl} target="_blank" rel="noopener noreferrer">
```

---

## Verification Checklist

After implementation, verify:

- [ ] All 30 homes are visible when no filters are applied
- [ ] Manufacturer filter shows all 10 manufacturers
- [ ] Each manufacturer filter shows the correct homes
- [ ] "In-Stock" badges appear on all homes
- [ ] Special offer badges appear on Franklin homes (Robertson, Grove, Kyleigh)
- [ ] Home type filter correctly categorizes homes (17 single-wide, 13 double-wide)
- [ ] "View Official Photos" links work and open in new tabs
- [ ] Photo count displays correctly (or shows "Coming Soon" for homes without photos)
- [ ] Page is responsive on mobile devices
- [ ] No console errors appear

---

## Next Steps After Implementation

1. **Add Real Photos**: Contact Gulf South Homes to get actual photos for homes with photoCount: 0
2. **Verify Specs**: Double-check bed/bath/sqft numbers against official specs
3. **Update Descriptions**: Enhance descriptions with unique selling points for each model
4. **Add Virtual Tours**: If available, add virtual tour links for each model
5. **Implement Detail Pages**: Create individual detail pages for each home with floor plans, features, and photo galleries

---

## Need Help?

If you encounter issues in Cursor:

1. **Use the Chat**: Describe the specific problem and reference the file name
2. **Use @mentions**: Reference specific files with `@filename.jsx` in your prompts
3. **Show Examples**: Paste the current code and explain what you want to change
4. **Be Specific**: Instead of "fix the filters", say "the manufacturer filter for 'Patriot Homes' is not showing any results"

---

## Example Cursor Conversation Flow

**You:** `@homes.json Show me the current structure of the homes data`

**Cursor:** [Shows current data structure]

**You:** `Replace this entire file with the new inventory data that includes 30 homes. Here's the new data: [paste inventory-data.json]`

**Cursor:** [Updates the file]

**You:** `@Catalog.jsx Update the manufacturer filter to include all unique manufacturers from the homes data, sorted alphabetically`

**Cursor:** [Updates the filter component]

**You:** `Test the filters and show me if there are any issues`

**Cursor:** [Runs tests and reports results]

This conversational approach with Cursor will make the implementation smooth and efficient.
