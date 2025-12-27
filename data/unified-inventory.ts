import { HomeModel } from '../types';
import { HOMES as SINGLE_WIDE_HOMES } from './homes';
import { DOUBLE_WIDE_HOMES } from './double-wide-homes';
import { MODULAR_HOMES } from './modular-homes';

/**
 * UNIFIED INVENTORY - Single Source of Truth
 *
 * This module combines all dealer-approved home inventory from:
 * - Single-Wide: 11 homes from data/homes.ts
 * - Double-Wide: 3 homes from data/double-wide-homes.ts
 * - Modular: 14 homes from data/modular-homes.ts
 *
 * Total: 28 homes
 *
 * DO NOT add mock/placeholder data here. Only real inventory with actual photos.
 */

export const UNIFIED_INVENTORY: HomeModel[] = [
  ...SINGLE_WIDE_HOMES,
  ...DOUBLE_WIDE_HOMES,
  ...MODULAR_HOMES,
];

// Export by type for convenience
export const getSingleWideHomes = (): HomeModel[] =>
  UNIFIED_INVENTORY.filter(h => h.type === 'Single Wide');

export const getDoubleWideHomes = (): HomeModel[] =>
  UNIFIED_INVENTORY.filter(h => h.type === 'Double Wide');

export const getModularHomes = (): HomeModel[] =>
  UNIFIED_INVENTORY.filter(h => h.type === 'Modular');

export const getAllHomes = (): HomeModel[] => UNIFIED_INVENTORY;

// Validate inventory integrity (no duplicate IDs)
const validateInventory = () => {
  const ids = UNIFIED_INVENTORY.map(h => h.id);
  const uniqueIds = new Set(ids);

  if (ids.length !== uniqueIds.size) {
    console.error('❌ Duplicate home IDs detected in inventory!');
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    console.error('Duplicate IDs:', duplicates);
  }
};

// Run validation in development
if (import.meta.env.DEV) {
  validateInventory();
}
