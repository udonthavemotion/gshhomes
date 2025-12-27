import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeModel } from '../types';

export interface HomeFilters {
  type?: 'all' | 'Single Wide' | 'Double Wide' | 'Modular';
  beds?: number | 'all';
  baths?: number | 'all';
  manufacturer?: string | 'all';
}

interface UseHomeFiltersReturn {
  filteredHomes: HomeModel[];
  filters: HomeFilters;
  setFilter: (key: keyof HomeFilters, value: any) => void;
  clearFilters: (resetDefaults?: HomeFilters) => void;
  activeFilterCount: number;
}

/**
 * Unified Home Filtering Hook
 *
 * Provides consistent filtering across all inventory pages with URL sync.
 * Filters are applied in this order:
 * 1. Type (Single Wide, Double Wide, Modular)
 * 2. Beds (exact match or "all")
 * 3. Baths (exact match or "all")
 * 4. Manufacturer (exact match or "all")
 *
 * Features:
 * - URL query param sync (debounced)
 * - Consistent filtering logic across pages
 * - Memoized results for performance
 */
export const useHomeFilters = (
  homes: HomeModel[],
  defaultFilters: HomeFilters = {}
): UseHomeFiltersReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from URL params or defaults
  const initialFilters = useMemo(() => {
    const urlType = searchParams.get('type');
    const urlBeds = searchParams.get('beds');
    const urlBaths = searchParams.get('baths');
    const urlManuf = searchParams.get('manufacturer');

    return {
      type: (urlType as HomeFilters['type']) || defaultFilters.type || 'all',
      beds: urlBeds ? (urlBeds === 'all' ? 'all' : parseInt(urlBeds)) : defaultFilters.beds || 'all',
      baths: urlBaths ? (urlBaths === 'all' ? 'all' : parseFloat(urlBaths)) : defaultFilters.baths || 'all',
      manufacturer: urlManuf || defaultFilters.manufacturer || 'all',
    };
  }, []); // Only run once on mount

  const [filters, setFiltersState] = useState<HomeFilters>(initialFilters);

  // Update URL params when filters change (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();

      if (filters.type && filters.type !== 'all' && filters.type !== defaultFilters.type) {
        params.set('type', filters.type);
      }
      if (filters.beds && filters.beds !== 'all') {
        params.set('beds', String(filters.beds));
      }
      if (filters.baths && filters.baths !== 'all') {
        params.set('baths', String(filters.baths));
      }
      if (filters.manufacturer && filters.manufacturer !== 'all') {
        params.set('manufacturer', filters.manufacturer);
      }

      // Only update if params changed
      if (params.toString() !== searchParams.toString()) {
        setSearchParams(params, { replace: true });
      }
    }, 300); // Debounce 300ms

    return () => clearTimeout(timer);
  }, [filters, defaultFilters.type, searchParams, setSearchParams]);

  // Apply filters to homes
  const filteredHomes = useMemo(() => {
    return homes.filter(home => {
      // Type filter
      const matchType = !filters.type || filters.type === 'all' || home.type === filters.type;

      // Beds filter
      const matchBeds = filters.beds === 'all' || !filters.beds || home.beds === filters.beds;

      // Baths filter
      const matchBaths = filters.baths === 'all' || !filters.baths || home.baths === filters.baths;

      // Manufacturer filter (normalize "BG" to "BG Manufacturing" for modular)
      let homeManuf = home.manufacturer;
      if (home.type === 'Modular' && homeManuf === 'BG') {
        homeManuf = 'BG Manufacturing';
      }
      const matchManuf =
        filters.manufacturer === 'all' ||
        !filters.manufacturer ||
        homeManuf === filters.manufacturer;

      return matchType && matchBeds && matchBaths && matchManuf;
    });
  }, [homes, filters]);

  // Set individual filter
  const setFilter = useCallback((key: keyof HomeFilters, value: any) => {
    setFiltersState(prev => ({ ...prev, [key]: value }));
  }, []);

  // Clear filters (reset to defaults or all)
  const clearFilters = useCallback((resetDefaults?: HomeFilters) => {
    const newFilters = resetDefaults || {
      type: defaultFilters.type || 'all',
      beds: 'all',
      baths: 'all',
      manufacturer: 'all',
    };
    setFiltersState(newFilters);
  }, [defaultFilters]);

  // Count active filters (excluding default type)
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.type && filters.type !== 'all' && filters.type !== defaultFilters.type) count++;
    if (filters.beds && filters.beds !== 'all') count++;
    if (filters.baths && filters.baths !== 'all') count++;
    if (filters.manufacturer && filters.manufacturer !== 'all') count++;
    return count;
  }, [filters, defaultFilters.type]);

  return {
    filteredHomes,
    filters,
    setFilter,
    clearFilters,
    activeFilterCount,
  };
};
