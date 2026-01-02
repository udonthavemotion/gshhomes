import { HomeModel } from '../types';
import { MANUFACTURERS } from '../data/manufacturers';

/**
 * Creates a placeholder home for a manufacturer without inventory
 * Used to display "Waiting for Inventory" message in empty manufacturer sections
 */
export function createPlaceholderHome(manufacturerName: string, homeType: 'Single Wide' | 'Double Wide' | 'Modular'): HomeModel {
  // Extract the first word of manufacturer name for slug
  const slugPart = manufacturerName.split(' ')[0].toLowerCase();

  return {
    id: `placeholder-${slugPart}-${homeType.replace(/\s+/g, '-').toLowerCase()}`,
    name: 'Waiting for Inventory',
    manufacturer: manufacturerName === 'BG Manufacturing' ? 'BG' : (manufacturerName as any),
    type: homeType,
    beds: 3,
    baths: 2,
    sqft: 1200,
    description: `We're curating the best ${manufacturerName} homes for you. Check back soon or contact us for available options.`,
    features: [
      'Premium Selection Coming Soon',
      'Expert Guidance Available',
      'Financing Options Ready',
      'Contact for Current Availability'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=600&fit=crop',
    isFeatured: false,
    isPlaceholder: true,
  };
}

/**
 * Gets all manufacturers that should be displayed for a given page type
 * Returns actual homes grouped with manufacturers, plus placeholder sections for manufacturers without homes
 */
export function getManufacturersWithPlaceholders(
  homes: HomeModel[],
  pageType: 'Single Wide' | 'Double Wide' | 'Modular'
): [string, HomeModel[]][] {
  // Get manufacturers that are relevant for this page type
  const relevantManufacturers = MANUFACTURERS.filter(m => {
    // All manufacturers can have all home types
    return true;
  });

  // Group existing homes by manufacturer
  const groupedHomes: Record<string, HomeModel[]> = {};
  homes.forEach(home => {
    const manufacturer = home.manufacturer === 'BG' ? 'BG Manufacturing' : home.manufacturer;
    if (!groupedHomes[manufacturer]) {
      groupedHomes[manufacturer] = [];
    }
    groupedHomes[manufacturer].push(home);
  });

  // Define manufacturer priority order based on page type
  const getManufacturerOrder = (type: string): string[] => {
    if (type === 'Single Wide') {
      return ['Sunshine Homes', 'Franklin Homes', 'Champion Homes', 'BG Manufacturing'];
    }
    if (type === 'Double Wide') {
      return ['Franklin Homes', 'Champion Homes', 'Sunshine Homes', 'BG Manufacturing'];
    }
    if (type === 'Modular') {
      return ['BG Manufacturing', 'Champion Homes', 'Franklin Homes', 'Sunshine Homes'];
    }
    return ['Sunshine Homes', 'Franklin Homes', 'Champion Homes', 'BG Manufacturing'];
  };

  const priorityOrder = getManufacturerOrder(pageType);

  // Build result array with both real homes and placeholders
  const result: [string, HomeModel[]][] = [];
  const processedManufacturers = new Set<string>();

  // First, add priority manufacturers
  for (const manufacturerName of priorityOrder) {
    processedManufacturers.add(manufacturerName);
    const homesForMfr = groupedHomes[manufacturerName] || [];

    if (homesForMfr.length > 0) {
      result.push([manufacturerName, homesForMfr]);
    } else {
      // Create placeholder section
      const placeholderHome = createPlaceholderHome(manufacturerName, pageType);
      result.push([manufacturerName, [placeholderHome]]);
    }
  }

  // Then add any manufacturers not in priority list (alphabetically)
  const otherManufacturers = relevantManufacturers
    .map(m => m.displayName)
    .filter(name => !processedManufacturers.has(name))
    .sort();

  for (const manufacturerName of otherManufacturers) {
    const homesForMfr = groupedHomes[manufacturerName] || [];

    if (homesForMfr.length > 0) {
      result.push([manufacturerName, homesForMfr]);
    } else {
      // Create placeholder section
      const placeholderHome = createPlaceholderHome(manufacturerName, pageType);
      result.push([manufacturerName, [placeholderHome]]);
    }
  }

  return result;
}
