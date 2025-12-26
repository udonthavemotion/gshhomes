# Featured Homes Management Guide

**Developer Guide for Managing Featured Homes on the Homepage**

---

## 📍 Quick Reference

**File to Edit:** `constants.ts` or individual home data files
**Current Featured Homes:** 7 homes displayed in carousel
**Location on Site:** Homepage - "Featured Homes" section

---

## 🎯 How to Update Featured Homes

### **Method 1: Using the `isFeatured` Flag (Recommended)**

The homepage carousel automatically displays homes where `isFeatured: true`.

**Step 1:** Open your home data file
```bash
# If using constants.ts:
open constants.ts

# If using data/homes.ts:
open data/homes.ts
```

**Step 2:** Find the home you want to feature and set `isFeatured: true`
```typescript
{
  id: 'h1',
  name: "The Eden",
  manufacturer: "Champion",
  type: "Double Wide",
  beds: 3,
  baths: 2,
  sqft: 1800,
  isFeatured: true,  // ✅ Set this to true
  // ... rest of home data
}
```

**Step 3:** To remove a home from featured, set `isFeatured: false`
```typescript
{
  id: 'h5',
  name: "Bayou Classic",
  isFeatured: false,  // ❌ This home will NOT show in carousel
  // ... rest of home data
}
```

**Step 4:** Save the file and rebuild
```bash
npm run build
```

---

### **Method 2: Changing the Number of Featured Homes**

The carousel currently shows **7 featured homes**. To change this:

**File:** `pages/Home.tsx`
**Line:** ~40

```typescript
// Current (shows 7 homes):
const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured).slice(0, 7);

// To show 5 homes:
const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured).slice(0, 5);

// To show ALL featured homes (no limit):
const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured);
```

---

## 📊 Featured Homes Requirements

### **Minimum Requirements:**
- ✅ At least **3 featured homes** (for optimal carousel display)
- ✅ Each home must have `isFeatured: true`
- ✅ Home must have a valid `imageUrl`
- ✅ Home must have `name`, `type`, `beds`, `baths`, `sqft`

### **Recommended:**
- 🎯 Feature **6-7 homes** for best variety
- 🎯 Mix of home types (Single Wide, Double Wide, Modular)
- 🎯 Mix of manufacturers (Champion, Franklin, etc.)
- 🎯 Include homes at different price points

---

## 🏗️ Home Data Structure

Each home in your data should follow this structure:

```typescript
{
  id: string,              // Unique identifier (e.g., 'h1', 'h2')
  name: string,            // Home model name
  manufacturer: string,    // Brand (Champion, Franklin, etc.)
  type: string,            // "Single Wide" | "Double Wide" | "Modular"
  beds: number,            // Number of bedrooms
  baths: number,           // Number of bathrooms
  sqft: number,            // Square footage
  description: string,     // Short description (shows on card)
  features: string[],      // Array of features
  imageUrl: string,        // Main image URL
  isFeatured: boolean,     // ⭐ TRUE to show in carousel
  gallery?: string[],      // Optional: Additional images
  price?: number,          // Optional: Price (if you want to display)
}
```

---

## 🎨 Carousel Configuration

### **Current Settings:**

| Device | Cards Visible | Navigation |
|--------|---------------|------------|
| **Mobile** | 3 cards | Swipe only |
| **Tablet** | 2 cards | Swipe + Arrows |
| **Desktop** | 3 cards | Swipe + Arrows |

### **How to Change Card Visibility:**

**File:** `pages/Home.tsx`
**Line:** ~347

```typescript
// Current:
className="pl-2 md:pl-4 lg:pl-6 basis-1/3 md:basis-1/2 lg:basis-1/3"

// Mobile (1st value): basis-1/3 = 3 cards
// Tablet (md): basis-1/2 = 2 cards
// Desktop (lg): basis-1/3 = 3 cards
```

**Examples:**

```typescript
// Show 2 cards on mobile, 3 on tablet, 4 on desktop:
className="basis-1/2 md:basis-1/3 lg:basis-1/4"

// Show 1 card on mobile, 2 on tablet, 3 on desktop:
className="basis-full md:basis-1/2 lg:basis-1/3"

// Show 4 cards on mobile, 3 on tablet, 3 on desktop:
className="basis-1/4 md:basis-1/3 lg:basis-1/3"
```

---

## 🚀 Testing Your Changes

After updating featured homes:

### **1. Development Testing:**
```bash
npm run dev
```
- Open http://localhost:3000
- Scroll to "Featured Homes" section
- Verify all featured homes appear
- Test swiping on mobile simulator
- Test arrows on desktop

### **2. Production Build:**
```bash
npm run build
npm run preview
```
- Test the production build
- Verify carousel loads quickly
- Check all images load

### **3. Mobile Testing:**
- Test on actual device
- Verify swipe is smooth
- Ensure 3 cards are visible
- Check all 7 homes are accessible

---

## 🐛 Troubleshooting

### **Problem: Featured homes not showing**
- ✅ Check `isFeatured: true` is set
- ✅ Verify home has valid `imageUrl`
- ✅ Check you have at least 3 featured homes
- ✅ Rebuild the project (`npm run build`)

### **Problem: Wrong number of homes showing**
- ✅ Check the `slice(0, 7)` value in `Home.tsx`
- ✅ Count how many homes have `isFeatured: true`

### **Problem: Carousel not responsive**
- ✅ Check `basis-1/3 md:basis-1/2 lg:basis-1/3` values
- ✅ Verify Tailwind classes are correct
- ✅ Clear browser cache and rebuild

### **Problem: Images not loading**
- ✅ Check `imageUrl` paths are correct
- ✅ Verify images exist in `/public/assets/images/`
- ✅ Check image file extensions (.jpg, .png, .webp)

---

## 📝 Quick Checklist

Before deploying featured homes changes:

- [ ] Set `isFeatured: true` on 6-7 homes
- [ ] Verified all images load correctly
- [ ] Tested on mobile (3 cards visible, swipe works)
- [ ] Tested on desktop (3 cards visible, arrows + swipe work)
- [ ] Mix of home types (Single/Double/Modular)
- [ ] All homes have complete data (name, beds, baths, etc.)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors in browser

---

## 💡 Pro Tips

1. **Seasonal Updates:** Change featured homes monthly to keep content fresh
2. **Best Sellers:** Feature your most popular or newest inventory
3. **Variety:** Mix price points and sizes for broader appeal
4. **Quality Images:** Use high-resolution images (800x600 minimum)
5. **Fast Loading:** Keep image file sizes under 200KB each

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify file paths and data structure
3. Rebuild the project from scratch
4. Check this guide's troubleshooting section

---

**Last Updated:** 2024-12-24
**Carousel Version:** shadcn/ui Embla Carousel
**Maintained By:** Gulf South Homes Development Team
