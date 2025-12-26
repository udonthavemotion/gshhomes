# Website Analysis - gshhomes.vercel.app

## Framework Detection
- **Hosting:** Vercel (React-based deployment)
- **Likely Framework:** React (based on Vercel deployment and URL structure with hash routing `#/catalog`)
- **Routing:** Hash-based routing (`#/catalog`)
- **UI Style:** Modern, clean design with card-based layout

## Current Inventory Structure
- **Current Count:** 11 homes displayed
- **Actual Inventory:** 30 homes (17 single-wide, 13 double-wide) based on research
- **Layout:** Grid-based card layout with filters
- **Features:**
  - Featured badges
  - Photo count indicators
  - Manufacturer tags
  - Bed/Bath/Sq Ft specs
  - "View Details" buttons
  - Filter sidebar (Home Type, Manufacturer)

## Current Models Shown (Sample):
1. The Robertson (Franklin) - Single Wide - 2/2/1100
2. The Ivy Dream (Sunshine) - Single Wide - 3/2/1216
3. The Pearl (Champion) - Single Wide - 2/2/1050
4. The Carondelet (Sunshine) - Single Wide - 2/2/1120
5. The Delight (Champion) - Single Wide - 3/2/1280
6. The Elation (Sunshine) - Single Wide - 3/2/1200
7. The Bexar (Franklin) - Single Wide - 2/2/1100
8. The Bobby Jo (Champion) - Single Wide - 3/2/1260
9. The Baby Boujee (Sunshine) - Single Wide - 2/2/1080
10. The Eden (Champion) - Double Wide - 3/2/1800
11. King David 64 (Franklin) - Modular - 4/3/2200

## Missing from Current Site (Based on Research):
### Single-Wide:
- The Clover (Sunshine)
- The Sunrise (Sunshine)
- The Milky Way (Sunshine)
- The Move One Up (Patriot)
- The Granite Ridge (Southern)
- The Lodge (Southern)
- The Dogwood (TRU)
- The Splendor (TRU)
- Hudson (Clayton Epic)
- Mariner (Clayton Epic)
- The Bandit (Cavalier)
- The Frenchman (Cavalier)

### Double-Wide:
- The Matthew (BG Homes)
- The King David (BG Homes)
- Prairie (Sunshine)
- The Sazerac (Champion)
- The Grove (Franklin)
- The Kyleigh (Franklin)
- The Washington (Patriot)
- The Bayside (Southern)
- The Jackson (Cavalier)
- The Mill House (Buccaneer)
- The Pride (TRU)
- Expedition (Clayton Epic)

## Data Structure Needed
The site likely uses a JSON/JavaScript data file to populate the inventory cards.

## Implementation Strategy
1. Create a comprehensive JSON data file with all 30 homes
2. Update the React component that renders the catalog
3. Add new manufacturer filters (Patriot, Southern, TRU, Clayton Epic, Cavalier, Buccaneer, BG Homes)
4. Ensure all manufacturer photo URLs are linked correctly
5. Add "In-Stock" badges for ready-to-tour homes
