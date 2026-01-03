import { HomeModel } from '../types';

/**
 * Groups homes by type (Single Wide, Double Wide, Modular)
 * Used for catalog page to organize homes within a selected manufacturer
 */
export function groupHomesByType(homes: HomeModel[]): [string, HomeModel[]][] {
  const grouped: Record<string, HomeModel[]> = {};

  homes.forEach(home => {
    if (!grouped[home.type]) {
      grouped[home.type] = [];
    }
    grouped[home.type].push(home);
  });

  // Return in consistent order
  const typeOrder = ['Single Wide', 'Double Wide', 'Modular'];
  return typeOrder
    .map(type => [type, grouped[type] || []] as [string, HomeModel[]])
    .filter(([_, homes]) => homes.length > 0);
}
