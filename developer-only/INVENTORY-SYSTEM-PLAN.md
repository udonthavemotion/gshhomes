# 🏠 Inventory System Architecture Plan

> **Purpose:** Developer reference for building a simple, maintainable inventory system  
> **Goal:** Easy monthly updates by developer, no CMS complexity  
> **Audience:** Web developer (you) for future implementation

---

## 📊 Current State Analysis

### How Inventory Works Now

```
data/
├── homes.ts           # Single-wide homes (~10 models)
├── double-wide-homes.ts    # Double-wide homes (~6 models)
├── modular-homes.ts        # Modular homes (TBD)
├── double-wide-homes-analysis.json  # Image path mappings
└── manufacturers.ts        # Manufacturer metadata
```

### Current Data Structure (HomeModel)

```typescript
interface HomeModel {
  id: string;              // URL slug: 'robertson', 'boujee'
  name: string;            // Display: 'The Robertson'
  manufacturer: string;    // Filter key: 'Franklin', 'Champion'
  type: string;            // Category: 'Single Wide', 'Double Wide', 'Modular'
  beds: number;            // Filter: 2, 3, 4, 5
  baths: number;           // Filter: 2, 2.5, 3
  sqft: number;            // Filter/display: 1200, 1800
  price?: string;          // Optional display: '$65,900'
  description: string;     // Detail page copy
  features: string[];      // Bullet list
  imageUrl: string;        // Card thumbnail
  gallery?: string[];      // Detail page gallery
  isFeatured?: boolean;    // Homepage carousel
}
```

### What's Working Well ✅
- TypeScript data files = type safety
- Single source of truth per home type
- Easy to add/remove homes
- Filter algorithms already built and working
- Image galleries per home

### What Needs Improvement 🔧
- Three separate files to maintain
- No unified "All Homes" source
- Price updates require touching individual entries
- No "sold/available" status
- No "in-stock vs custom order" distinction

---

## 🎯 Recommended Architecture

### Option A: Single Source of Truth (Recommended)

**Keep it simple. One file to rule them all.**

```typescript
// data/inventory.ts

export interface Home {
  // Core Identity
  id: string;
  name: string;
  slug: string;  // For URLs
  
  // Classification
  type: 'single-wide' | 'double-wide' | 'modular';
  manufacturer: string;
  
  // Specs
  beds: number;
  baths: number;
  sqft: number;
  dimensions?: string;  // '16x76', '28x52'
  
  // Pricing & Status
  price: number | null;  // null = "Call for Price"
  status: 'available' | 'sold' | 'coming-soon' | 'special-order';
  isInStock: boolean;
  isFeatured: boolean;
  
  // Content
  description: string;
  features: string[];
  
  // Media
  thumbnail: string;
  gallery: string[];
  floorPlan?: string;
  
  // Metadata
  dateAdded: string;  // ISO date
  lastUpdated: string;
}

export const INVENTORY: Home[] = [
  // All homes go here
];
```

**Benefits:**
- One file to edit monthly
- Easy search/replace for price updates
- Status field handles sold homes
- Featured flag for homepage
- Date tracking for "New Arrivals"

### Option B: Category Split (Current Pattern Enhanced)

If you prefer separate files per type, enhance each with:

```typescript
// data/single-wide.ts
export const SINGLE_WIDE_HOMES: Home[] = [...];

// data/double-wide.ts  
export const DOUBLE_WIDE_HOMES: Home[] = [...];

// data/modular.ts
export const MODULAR_HOMES: Home[] = [...];

// data/index.ts (unified export)
import { SINGLE_WIDE_HOMES } from './single-wide';
import { DOUBLE_WIDE_HOMES } from './double-wide';
import { MODULAR_HOMES } from './modular';

export const ALL_HOMES = [
  ...SINGLE_WIDE_HOMES,
  ...DOUBLE_WIDE_HOMES,
  ...MODULAR_HOMES,
];

// Helper functions
export const getHomeById = (id: string) => ALL_HOMES.find(h => h.id === id);
export const getFeaturedHomes = () => ALL_HOMES.filter(h => h.isFeatured);
export const getAvailableHomes = () => ALL_HOMES.filter(h => h.status === 'available');
```

---

## 🔍 Filter Algorithm Design

### Current Implementation (Working)
Each page implements its own filtering:
- `SingleWide.tsx`: beds, baths, manufacturer, sqft range
- `DoubleWide.tsx`: manufacturer, beds, baths, sqft range
- `Modular.tsx`: manufacturer, beds, baths, sqft range

### Proposed: Unified Filter Hook

```typescript
// hooks/useHomeFilters.ts

import { useMemo, useState } from 'react';
import { Home } from '../data/inventory';

interface FilterState {
  type?: string;
  manufacturer?: string;
  beds?: number;
  baths?: number;
  minSqft?: number;
  maxSqft?: number;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
}

export function useHomeFilters(homes: Home[], initialFilters?: FilterState) {
  const [filters, setFilters] = useState<FilterState>(initialFilters || {});

  const filteredHomes = useMemo(() => {
    return homes.filter(home => {
      // Type filter
      if (filters.type && home.type !== filters.type) return false;
      
      // Manufacturer filter
      if (filters.manufacturer && home.manufacturer !== filters.manufacturer) return false;
      
      // Beds filter
      if (filters.beds && home.beds !== filters.beds) return false;
      
      // Baths filter
      if (filters.baths && home.baths !== filters.baths) return false;
      
      // Sqft range
      if (filters.minSqft && home.sqft < filters.minSqft) return false;
      if (filters.maxSqft && home.sqft > filters.maxSqft) return false;
      
      // Price range
      if (home.price) {
        if (filters.minPrice && home.price < filters.minPrice) return false;
        if (filters.maxPrice && home.price > filters.maxPrice) return false;
      }
      
      // Status filter
      if (filters.status && home.status !== filters.status) return false;
      
      return true;
    });
  }, [homes, filters]);

  // Get unique values for filter dropdowns
  const filterOptions = useMemo(() => ({
    manufacturers: [...new Set(homes.map(h => h.manufacturer))],
    beds: [...new Set(homes.map(h => h.beds))].sort((a, b) => a - b),
    baths: [...new Set(homes.map(h => h.baths))].sort((a, b) => a - b),
  }), [homes]);

  return {
    homes: filteredHomes,
    filters,
    setFilter: (key: keyof FilterState, value: any) => 
      setFilters(prev => ({ ...prev, [key]: value })),
    clearFilters: () => setFilters({}),
    filterOptions,
  };
}
```

### Usage in Pages

```tsx
// pages/Catalog.tsx
import { useHomeFilters } from '../hooks/useHomeFilters';
import { ALL_HOMES } from '../data';

const Catalog = () => {
  const { homes, filters, setFilter, clearFilters, filterOptions } = useHomeFilters(ALL_HOMES);
  
  return (
    <div>
      {/* Filter UI */}
      <FilterDrawer 
        options={filterOptions}
        current={filters}
        onChange={setFilter}
        onClear={clearFilters}
      />
      
      {/* Grid */}
      <div className="grid grid-cols-3 gap-6">
        {homes.map(home => <HomeCard key={home.id} home={home} />)}
      </div>
    </div>
  );
};
```

---

## 📝 Monthly Update Workflow

### Step 1: Open the Data File
```bash
# Navigate to project
cd gsouthomes-main

# Open in your editor
code data/inventory.ts
# or
code data/homes.ts
```

### Step 2: Common Updates

**Add a new home:**
```typescript
{
  id: 'new-model-name',
  name: 'The New Model',
  type: 'double-wide',
  manufacturer: 'Champion',
  beds: 4,
  baths: 2,
  sqft: 1920,
  price: 89900,
  status: 'available',
  isInStock: true,
  isFeatured: false,
  description: 'Description here...',
  features: ['Feature 1', 'Feature 2'],
  thumbnail: '/assets/images/homes/new-model/thumbnail.jpg',
  gallery: [
    '/assets/images/homes/new-model/gallery-01.jpg',
    '/assets/images/homes/new-model/gallery-02.jpg',
  ],
  dateAdded: '2025-01-15',
  lastUpdated: '2025-01-15',
},
```

**Mark a home as sold:**
```typescript
// Change this:
status: 'available',

// To this:
status: 'sold',
```

**Update price:**
```typescript
// Change this:
price: 65900,

// To this:
price: 67500,
lastUpdated: '2025-01-15',  // Update this too
```

**Make featured:**
```typescript
isFeatured: true,  // Shows on homepage carousel
```

### Step 3: Add Photos for New Home

1. Create folder: `public/assets/images/homes/[home-id]/`
2. Add images with naming convention:
   - `gulf_south_homes_[name]_gallery_01.jpg`
   - `gulf_south_homes_[name]_gallery_02.jpg`
   - etc.
3. Update the `gallery` array in the data file

### Step 4: Build and Test
```bash
npm run build
npm run preview
# Check that new home appears correctly
```

---

## 🗂️ Photo Organization System

### Current Structure
```
public/assets/images/
├── homes/                    # Single-wide homes
│   ├── robertson/
│   ├── ivy-dream/
│   └── ...
├── Double Wide Homes/        # Double-wide homes
│   ├── boujee/
│   ├── burton/
│   └── ...
└── homepage/                 # General/hero images
```

### Recommended Structure (Unified)
```
public/assets/images/
├── inventory/
│   ├── single-wide/
│   │   ├── robertson/
│   │   ├── ivy-dream/
│   │   └── pearl/
│   ├── double-wide/
│   │   ├── boujee/
│   │   ├── burton/
│   │   └── washington/
│   └── modular/
│       ├── king-david/
│       └── ...
├── showroom/                 # Business photos
├── team/                     # Staff photos
├── process/                  # Delivery, setup photos
└── brand/                    # Logos, awards
```

### Naming Convention
```
Pattern: gulf_south_homes_[model-id]_[type]_[number].[ext]

Examples:
- gulf_south_homes_boujee_gallery_01.jpg
- gulf_south_homes_boujee_gallery_02.jpg
- gulf_south_homes_boujee_floorplan.jpg
- gulf_south_homes_boujee_exterior.jpg
```

---

## 🔮 Future Enhancements (Not Now)

When/if the business needs grow, consider:

### Phase 2: Admin Dashboard
- Simple password-protected page
- Form to add/edit homes
- Image upload with preview
- Generates data file entries

### Phase 3: External Data Source
- Headless CMS (Sanity, Contentful)
- Google Sheets as backend
- Airtable integration

### Phase 4: Real-Time Features
- "Just Sold" badges
- Price drop notifications
- Stock level indicators

**Note:** Keep it simple until complexity is justified. The current TypeScript file approach works great for monthly updates.

---

## 🧪 Testing Checklist for Updates

After making inventory changes, verify:

- [ ] Home appears in correct category page
- [ ] Filters work with new home specs
- [ ] Home card displays correctly
- [ ] Detail page loads with all images
- [ ] Featured homes (if changed) appear on homepage
- [ ] No console errors
- [ ] Mobile layout works

---

## 📋 Quick Reference: Status Codes

| Status | Meaning | Display |
|--------|---------|---------|
| `available` | Ready to sell | Normal display |
| `sold` | Home was purchased | Hide or show "SOLD" badge |
| `coming-soon` | Ordered, not arrived | "Coming Soon" badge |
| `special-order` | Must be custom ordered | "Special Order" label |

---

## 💡 Tips for Efficient Updates

1. **Use VS Code Search/Replace** for bulk price updates
2. **Copy existing entries** when adding new homes (then edit)
3. **Keep a changelog** of updates (dates, what changed)
4. **Batch updates monthly** rather than frequent small changes
5. **Test locally** before deploying
6. **Keep image file sizes under 500KB** for performance

---

*This document is for developer reference. Update as the system evolves.*

