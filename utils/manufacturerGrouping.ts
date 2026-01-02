import { HomeModel } from '../types';

/**
 * Groups homes by manufacturer and returns ordered array
 * @param homes - Array of HomeModel objects
 * @param pageType - Type of page ('Single Wide', 'Double Wide', 'Modular')
 * @returns Array of [manufacturerName, homes[]] tuples, ordered by priority
 */
export function groupHomesByManufacturer(
  homes: HomeModel[],
  pageType: string = 'Single Wide'
): [string, HomeModel[]][] {
  // Define manufacturer order based on page type
  const getManufacturerOrder = (type: string): string[] => {
    if (type === 'Single Wide') {
      return ['Sunshine', 'Franklin', 'Champion', 'BG Manufacturing'];
    }
    if (type === 'Double Wide') {
      return ['Franklin', 'Champion', 'Sunshine', 'BG Manufacturing'];
    }
    if (type === 'Modular') {
      return ['BG Manufacturing', 'Champion', 'Franklin', 'Sunshine'];
    }
    return ['Sunshine', 'Franklin', 'Champion', 'BG Manufacturing'];
  };

  // Group homes by manufacturer
  const grouped = homes.reduce(
    (acc, home) => {
      // Normalize manufacturer name (BG → BG Manufacturing)
      const manufacturer =
        home.manufacturer === 'BG' ? 'BG Manufacturing' : home.manufacturer;

      if (!acc[manufacturer]) {
        acc[manufacturer] = [];
      }
      acc[manufacturer].push(home);
      return acc;
    },
    {} as Record<string, HomeModel[]>
  );

  // Get priority order for this page type
  const priorityOrder = getManufacturerOrder(pageType);

  // Sort: priority manufacturers first, then alphabetically
  return Object.entries(grouped).sort(([nameA], [nameB]) => {
    const indexA = priorityOrder.findIndex((m) => nameA.includes(m));
    const indexB = priorityOrder.findIndex((m) => nameB.includes(m));

    // Both in priority list: sort by priority
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // Only A in priority: A comes first
    if (indexA !== -1) return -1;
    // Only B in priority: B comes first
    if (indexB !== -1) return 1;
    // Neither in priority: alphabetical
    return nameA.localeCompare(nameB);
  });
}
