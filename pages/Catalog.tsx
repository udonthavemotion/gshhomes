import React, { useState, useMemo, useEffect } from 'react';
import { UNIFIED_INVENTORY } from '../data/unified-inventory';
import { useHomeFilters } from '../hooks/useHomeFilters';
import HomeCard from '../components/HomeCard';
import ManufacturerSection from '../components/ManufacturerSection';
import { SlidersHorizontal, X, ArrowRight, Home as HomeIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';
import { getManufacturersWithPlaceholders } from '../utils/placeholderHomes';
import { groupHomesByType } from '../utils/groupHomesByType';

const Catalog: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Use unified filtering with default filter type='all' to show all homes
  const { filteredHomes, filters, setFilter, clearFilters, activeFilterCount } = useHomeFilters(
    UNIFIED_INVENTORY,
    { type: 'all' }
  );

  // Extract unique values for filter options
  const types = ['all', 'Single Wide', 'Double Wide', 'Modular'];
  const manufacturers = useMemo(
    () => ['all', ...Array.from(new Set(UNIFIED_INVENTORY.map(h => h.manufacturer)))],
    []
  );

  // Group homes by manufacturer or type
  const groupedHomes = useMemo(() => {
    if (filters.manufacturer && filters.manufacturer !== 'all') {
      // If manufacturer filter active, group by type instead
      return groupHomesByType(filteredHomes);
    }
    // Otherwise, group by manufacturer (including placeholders)
    return getManufacturersWithPlaceholders(filteredHomes, 'all');
  }, [filteredHomes, filters.manufacturer]);

  // Scroll to grid
  const scrollToGrid = () => {
    const grid = document.getElementById('homes-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Browse our collection of quality manufactured and modular homes. From cozy single-wides to spacious family models.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToGrid}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            View All Homes
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Catalog Content */}
      <div id="homes-grid" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 scroll-animate">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-2">
              Available Models
            </h2>
            <p className="text-stone-600 text-lg">
              Browsing <span className="font-semibold text-primary">{filteredHomes.length}</span> of {UNIFIED_INVENTORY.length} homes
            </p>
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
              className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-stone-300 rounded-xl text-stone-700 hover:bg-stone-50 hover:border-primary/50 transition-all shadow-sm hover:shadow-md font-semibold"
              onClick={() => setShowFilters(true)}
              aria-label={`Open filters${activeFilterCount > 0 ? ` (${activeFilterCount} active)` : ''}`}
            >
              <SlidersHorizontal size={20} aria-hidden="true" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full min-w-[24px] text-center" aria-label={`${activeFilterCount} active filter${activeFilterCount !== 1 ? 's' : ''}`}>
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active Filter Pills */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.type && filters.type !== 'all' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {filters.type}
                <button onClick={() => setFilter('type', 'all')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
            {filters.manufacturer && filters.manufacturer !== 'all' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {filters.manufacturer}
                <button onClick={() => setFilter('manufacturer', 'all')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Homes Grid - Grouped by Manufacturer */}
        {groupedHomes.length > 0 ? (
          <div className="space-y-0">
            {groupedHomes.map(([manufacturerName, homes], index) => (
              <ManufacturerSection
                key={manufacturerName}
                manufacturerName={manufacturerName}
                homes={homes}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-stone-200 border-dashed">
            <div className="max-w-md mx-auto px-4">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SlidersHorizontal size={32} className="text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">No homes match your filters</h3>
              <p className="text-stone-600 mb-6">Try adjusting your filter selections to see more results.</p>
              <button
                onClick={() => clearFilters({ type: 'all' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                aria-label="Clear all filters"
              >
                Clear All Filters
              </button>
            </div>
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
