import React, { useState } from 'react';
import { UNIFIED_INVENTORY } from '../data/unified-inventory';
import { useHomeFilters } from '../hooks/useHomeFilters';
import HomeCard from '../components/HomeCard';
import { SlidersHorizontal, X, Home as HomeIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';

const Catalog: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Use unified filtering with default filter type='all' to show all homes
  const { filteredHomes, filters, setFilter, clearFilters, activeFilterCount } = useHomeFilters(
    UNIFIED_INVENTORY,
    { type: 'all' }
  );

  // Extract unique values for filter options
  const types = ['all', 'Single Wide', 'Double Wide', 'Modular'];
  const manufacturers = [
    'all',
    ...Array.from(
      new Set(
        UNIFIED_INVENTORY.map(h =>
          h.type === 'Modular' && h.manufacturer === 'BG' ? 'BG Manufacturing' : h.manufacturer
        )
      )
    ).sort()
  ];

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.homesForSale.title}
        description={SEO_CONFIG.homesForSale.description}
        canonical={SEO_CONFIG.homesForSale.canonical}
        ogImage={SEO_CONFIG.homesForSale.ogImage}
      />
      <div className="bg-stone-50 min-h-screen">
      {/* Hero Section - Universal Responsive Pattern */}
      <section className="relative w-full h-screen sm:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        {/* Background Image */}
        <img
          src="/assets/images/single wide homes/homesforsalepage.JPG"
          alt="Gulf South Homes - Homes for Sale"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />

        {/* Light Background Overlay - Crisp and Bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20"></div>
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Gulf South Homes Logo - Prominent Branding with Animation */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="/assets/images/logo/gsh-logo-2025.svg"
              alt="Gulf South Homes - 2025 Bayou's Best Choice"
              className="w-[300px] h-[120px] sm:w-[500px] sm:h-[200px] object-contain drop-shadow-2xl logo-entrance"
              width="500"
              height="200"
              loading="eager"
              fetchPriority="high"
              style={{
                animation: 'logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, logoGlow 3s ease-in-out 1.2s infinite',
                willChange: 'transform, opacity, filter'
              }}
              onError={(e) => {
                // Fallback if logo fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6">
            <HomeIcon size={16} />
            Browse Our Inventory
          </div>

          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Find Your Perfect Home
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            Browse our collection of quality manufactured and modular homes. From cozy single-wides to spacious family models.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div className="container py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">Available Models</h2>
            <p className="text-stone-600 mt-1">Browsing {filteredHomes.length} of {UNIFIED_INVENTORY.length} homes</p>
          </div>

          <div className="flex items-center gap-3">
            {activeFilterCount > 0 && (
              <button
                onClick={() => clearFilters({ type: 'all' })}
                className="text-sm text-stone-500 hover:text-stone-700 underline"
                aria-label="Clear all active filters"
              >
                Clear filters
              </button>
            )}
            <button
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-colors shadow-sm"
              onClick={() => setShowFilters(true)}
              aria-label={`Open filters${activeFilterCount > 0 ? ` (${activeFilterCount} active)` : ''}`}
            >
              <SlidersHorizontal size={18} aria-hidden="true" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full" aria-label={`${activeFilterCount} active filter${activeFilterCount !== 1 ? 's' : ''}`}>
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Filter Pills */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.type && filters.type !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {filters.type}
                <button onClick={() => setFilter('type', 'all')} className="hover:bg-primary/20 rounded-full p-0.5">
                  <X size={14} />
                </button>
              </span>
            )}
            {filters.manufacturer && filters.manufacturer !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {filters.manufacturer}
                <button onClick={() => setFilter('manufacturer', 'all')} className="hover:bg-primary/20 rounded-full p-0.5">
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Homes Grid - Full Width */}
        {filteredHomes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHomes.map(home => (
              <HomeCard key={home.id} home={home} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-stone-200 border-dashed">
            <p className="text-stone-500 text-lg">No homes found matching your criteria.</p>
            <button
              onClick={() => clearFilters({ type: 'all' })}
              className="mt-4 text-primary font-medium hover:underline"
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Slide-out Filter Drawer */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowFilters(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          showFilters ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-5 border-b border-stone-200">
            <h2 className="text-xl font-bold text-stone-900">Filters</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Close filters"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Home Type Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Home Type</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by home type">
                {types.map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      checked={filters.type === type}
                      onChange={() => setFilter('type', type)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${type === 'all' ? 'all home types' : type}`}
                    />
                    <span className={`${filters.type === type ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {type === 'all' ? 'All Types' : type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Manufacturer Filter */}
            <div>
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Manufacturer</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by manufacturer">
                {manufacturers.map(m => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="manufacturer"
                      checked={filters.manufacturer === m}
                      onChange={() => setFilter('manufacturer', m)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${m === 'all' ? 'all brands' : m} manufacturer`}
                    />
                    <span className={`${filters.manufacturer === m ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {m === 'all' ? 'All Brands' : m}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-stone-200 space-y-3">
            <button
              onClick={() => setShowFilters(false)}
              className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              aria-label={`View ${filteredHomes.length} filtered homes`}
            >
              View {filteredHomes.length} Homes
            </button>
            {activeFilterCount > 0 && (
              <button
                onClick={() => {
                  clearFilters({ type: 'all' });
                  setShowFilters(false);
                }}
                className="w-full py-3 text-stone-600 font-medium hover:text-stone-900 transition-colors"
                aria-label="Clear all filters"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Catalog;
