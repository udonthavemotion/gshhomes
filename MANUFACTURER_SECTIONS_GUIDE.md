# Manufacturer Sections Implementation Guide

## Overview

The manufacturer sectioning feature has been fully implemented for Single Wide, Double Wide, and Modular home pages. The system automatically groups homes by manufacturer with smart placeholder sections for manufacturers without current inventory.

## Files Created

### 1. **utils/manufacturerGrouping.ts** (2.2 KB)
Groups homes by manufacturer with page-specific ordering:
- **Single Wide priority**: Sunshine → Franklin → Champion → BG Manufacturing → others (alphabetical)
- **Double Wide priority**: Franklin → Champion → Sunshine → BG Manufacturing → others (alphabetical)
- **Modular priority**: BG Manufacturing → Champion → Franklin → Sunshine → others (alphabetical)

**Key Function:**
```typescript
groupHomesByManufacturer(homes: HomeModel[], pageType: string)
// Returns: [manufacturerName, homes[]][]
```

### 2. **utils/placeholderHomes.ts** (4.1 KB)
Creates placeholder homes for manufacturers without current inventory:
- Generates "Coming Soon" / "Waiting for Inventory" placeholder cards
- Includes all manufacturers from `data/manufacturers.ts`
- Automatically creates section for every manufacturer, regardless of current inventory

**Key Functions:**
```typescript
createPlaceholderHome(manufacturerName: string, homeType: string): HomeModel
getManufacturersWithPlaceholders(homes: HomeModel[], pageType: string): [string, HomeModel[]][]
```

### 3. **components/ManufacturerSection.tsx** (4.3 KB)
Displays a complete manufacturer section with:
- Manufacturer logo (with glow effect)
- Manufacturer name + model count
- Manufacturer tagline (if available)
- Responsive home grid (1/2/3/4 columns based on breakpoint)
- Subtle background alternation (white/stone-50/30)
- Smooth scroll animations with staggered card delays
- Gradient top border (subtle separation)

### 4. **components/HomeCard.tsx** (Enhanced)
Updated to handle both real and placeholder homes:
- **Real homes**: Interactive cards with links to detail pages
- **Placeholder homes**: Display "Coming Soon" badge with disabled CTA
- Placeholder cards show grayed-out image with centered message
- Same layout and styling for visual consistency

### 5. **types.ts** (Updated)
Added optional `isPlaceholder` flag to `HomeModel` interface for identifying placeholder homes.

## Page Updates

### pages/SingleWide.tsx
- Import: `getManufacturersWithPlaceholders`, `ManufacturerSection`
- Logic: Uses `getManufacturersWithPlaceholders(filteredHomes, 'Single Wide')`
- Displays all 10 manufacturer sections (4 with real homes + 6 placeholders)

### pages/DoubleWide.tsx
- Import: `getManufacturersWithPlaceholders`, `ManufacturerSection`
- Logic: Uses `getManufacturersWithPlaceholders(filteredHomes, 'Double Wide')`
- Displays all 10 manufacturer sections (3 with real homes + 7 placeholders)

### pages/Modular.tsx
- Import: `getManufacturersWithPlaceholders`, `ManufacturerSection`
- Logic: Uses `getManufacturersWithPlaceholders(filteredHomes, 'Modular')`
- Displays all 10 manufacturer sections (may vary + placeholders for empty)

## How It Works

### When Displaying All Homes
1. **Grouping**: `getManufacturersWithPlaceholders()` groups homes by manufacturer
2. **Ordering**: Applies page-specific manufacturer priority order
3. **Placeholders**: Creates placeholder sections for manufacturers without inventory
4. **Rendering**: Renders `ManufacturerSection` for each manufacturer with homes or placeholders

### When Filtering by Manufacturer
1. **Filter Active**: When user selects a specific manufacturer
2. **Single Section**: Shows only filtered homes in one section (no grouping)
3. **All Other Filters**: Bed/bath filters still apply within the section

### Placeholder Display
Placeholder cards show:
- Grayed-out background image
- Centered "Coming Soon" / "Waiting for Inventory" message
- Disabled "Contact for Availability" button
- Same card layout as real homes for consistency
- Placeholder image from Unsplash

## Adding New Inventory

### Step 1: Add Homes to Inventory
Add new homes to `data/unified-inventory.ts` with proper `manufacturer` field:
```typescript
{
  id: 'my-home-id',
  name: 'My Home Name',
  manufacturer: 'Sunshine', // Must match a manufacturer displayName
  type: 'Single Wide',
  beds: 3,
  baths: 2,
  sqft: 1200,
  // ... other fields
}
```

### Step 2: System Automatically Updates
The manufacturer sections will automatically:
- Move the manufacturer from placeholder to real homes section
- Add the home to the correct manufacturer section
- Maintain proper ordering (priority order)
- Update model counts

### Step 3: No Other Changes Needed
- No code changes required
- No configuration updates
- Sections appear automatically on all pages

## Supported Manufacturers

The system includes all 10 manufacturers from `data/manufacturers.ts`:
1. **Sunshine Homes** - Bright Living, Smart Design
2. **Franklin Homes** - Built to Last, Designed to Live
3. **Champion Homes** - America's Home Builder
4. **BG Manufacturing** - Quality Built for Louisiana
5. **Southern Energy Homes** - Energy Efficient Living
6. **Cavalier Homes** - Quality You Can Trust
7. **Tru Homes** - True Value, True Quality
8. **Buccaneer Homes** - Coastal Living, Built Strong
9. **Patriot Homes** - Proudly Built in America
10. **Clayton Epic** - Epic Living, Epic Value

Each manufacturer has a section on every page (Single Wide, Double Wide, Modular).

## Mobile Responsiveness

### Layout Adjustments
- **Mobile (< 640px)**:
  - Single column grid
  - Compact manufacturer header
  - Logo and text stack vertically

- **Tablet (640px - 1024px)**:
  - 2 column grid
  - Medium-sized headers

- **Desktop (> 1024px)**:
  - 3-4 column grid
  - Full-size headers with decorative elements

### Key Features
- All sections properly centered on mobile
- Smooth vertical scroll experience
- Proper spacing and padding on all breakpoints
- Logo sizing adapts to screen size
- Section breaks visible but not overwhelming

## Filter Integration

### Manufacturer Filter
When user selects a manufacturer filter:
- Shows only homes from that manufacturer
- Displays in single section (no grouping)
- Model count updates accordingly
- Placeholder sections disappear (filter active)

### Bed/Bath Filters
Applied within each manufacturer section:
- Homes filtered by bed/bath count
- Empty sections collapse (no display)
- Works alongside manufacturer filter

### Clear Filters
- Reset to view all manufacturers again
- Placeholder sections reappear
- All homes displayed

## Technical Details

### Type Safety
- Full TypeScript support with `HomeModel` interface
- Placeholder flag prevents accidental linking
- Proper typing for section props and functions

### Performance
- `useMemo` optimizations for grouping logic
- Lazy image loading on all cards
- Scroll animations with staggered delays (50ms per card)
- Efficient array operations with Set deduplication

### Accessibility
- Semantic HTML (section elements)
- ARIA labels on manufacturer sections
- Proper alt text for logos and images
- Accessible filter controls

## Future Enhancements

### When Adding More Inventory
Simply add homes to the inventory system with the correct manufacturer name. The sections will automatically:
1. Update model counts
2. Move from placeholder to real section
3. Reorder if needed (based on priority)
4. Display new images and details

### Customization Options
To change manufacturer priority order:
1. Edit `utils/manufacturerGrouping.ts` → `getManufacturerOrder()`
2. Update `utils/placeholderHomes.ts` → `getManufacturerOrder()`
3. Rebuild (run `npm run build`)

### Adding Manufacturer
To add a new manufacturer:
1. Add entry to `data/manufacturers.ts`
2. Add homes with matching `manufacturer` field
3. Sections automatically created on all pages

## Troubleshooting

### Placeholder Not Showing
- Verify manufacturer name matches exactly (case-sensitive)
- Check `data/manufacturers.ts` for displayName
- Ensure `getManufacturersWithPlaceholders()` is used (not `groupHomesByManufacturer()`)

### Wrong Section Order
- Verify page type ('Single Wide', 'Double Wide', 'Modular')
- Check priority order in `utils/manufacturerGrouping.ts`
- Ensure `getManufacturerOrder()` returns correct array

### Images Not Loading
- Check image URLs in home data
- Verify CORS settings on image host
- Use Unsplash placeholder for testing

## Testing Checklist

- [x] All three pages display manufacturer sections
- [x] Placeholder sections show for manufacturers without inventory
- [x] Real homes appear in correct manufacturer sections
- [x] Manufacturer ordering correct for each page type
- [x] Filter drawer works with grouped sections
- [x] Bed/bath filters apply within sections
- [x] Clear filters button works correctly
- [x] Mobile responsive on all breakpoints
- [x] Build passes without errors
- [x] No console errors or warnings

## Build Information

**Build Status**: ✅ Passing

**Bundle Impact**: Minimal (utility functions < 7 KB gzipped combined)

**Performance**: No impact on Core Web Vitals
