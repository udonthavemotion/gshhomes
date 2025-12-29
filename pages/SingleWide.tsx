import React, { useState, useMemo } from 'react';
import { UNIFIED_INVENTORY } from '../data/unified-inventory';
import { useHomeFilters } from '../hooks/useHomeFilters';
import { SlidersHorizontal, X, Phone, MapPin, Home as HomeIcon } from 'lucide-react';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';

const SingleWide: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Use unified filtering with default type='Single Wide'
  const { filteredHomes, filters, setFilter, clearFilters, activeFilterCount } = useHomeFilters(
    UNIFIED_INVENTORY,
    { type: 'Single Wide' }
  );

  // Get all single-wide homes for filter options
  const singleWideHomes = useMemo(
    () => UNIFIED_INVENTORY.filter(h => h.type === 'Single Wide'),
    []
  );

  // Extract unique filter values from single-wide homes only
  const bedOptions = useMemo(
    () => ['all', ...Array.from(new Set(singleWideHomes.map(h => h.beds))).sort()],
    [singleWideHomes]
  );
  const bathOptions = useMemo(
    () => ['all', ...Array.from(new Set(singleWideHomes.map(h => h.baths))).sort()],
    [singleWideHomes]
  );
  const manufacturers = useMemo(
    () => ['all', ...Array.from(new Set(singleWideHomes.map(h => h.manufacturer)))],
    [singleWideHomes]
  );

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.singleWide.title}
        description={SEO_CONFIG.singleWide.description}
        canonical={SEO_CONFIG.singleWide.canonical}
        ogImage={SEO_CONFIG.singleWide.ogImage}
      />
      <div className="bg-stone-50 min-h-screen">

      {/* Hero Section - Universal Responsive Pattern */}
      <section className="relative w-full h-screen sm:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/homesweoffer.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
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
            Affordable & Efficient
          </div>

          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Single-Wide Homes
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            Compact, efficient, and fully customizable — designed for your lifestyle.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div className="container py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">Available Models</h2>
            <p className="text-stone-600 mt-1">Browsing {filteredHomes.length} of {singleWideHomes.length} homes</p>
          </div>

          <div className="flex items-center gap-3">
            {activeFilterCount > 0 && (
              <button
                onClick={() => clearFilters({ type: 'Single Wide' })}
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
            {filters.beds && filters.beds !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {filters.beds} Bed{filters.beds !== 1 ? 's' : ''}
                <button onClick={() => setFilter('beds', 'all')} className="hover:bg-primary/20 rounded-full p-0.5">
                  <X size={14} />
                </button>
              </span>
            )}
            {filters.baths && filters.baths !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {filters.baths} Bath{filters.baths !== 1 ? 's' : ''}
                <button onClick={() => setFilter('baths', 'all')} className="hover:bg-primary/20 rounded-full p-0.5">
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
              onClick={() => clearFilters({ type: 'Single Wide' })}
              className="mt-4 text-primary font-medium hover:underline"
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* NEW: Single-Wide Living in Action - Context Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video/videosworking/singewidehomepage.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/60"></div>

        {/* Content */}
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
              Single-Wide Living Made Simple
            </h2>
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
              Affordable, efficient, and beautifully designed for modern families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Benefit Card 1 */}
            <div className="scroll-animate text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 drop-shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Affordable</h3>
              <p className="text-white/80 drop-shadow-md">Lower price point without sacrificing quality or comfort</p>
            </div>

            {/* Benefit Card 2 */}
            <div className="scroll-animate text-center" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 drop-shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Efficient</h3>
              <p className="text-white/80 drop-shadow-md">Optimized layouts that make the most of your space</p>
            </div>

            {/* Benefit Card 3 */}
            <div className="scroll-animate text-center" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 drop-shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Modern</h3>
              <p className="text-white/80 drop-shadow-md">Updated designs and premium finishes included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-stone-50 text-stone-900 py-12">
        <div className="container text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
            Found the Perfect Home?
          </h3>
          <p className="text-stone-600 text-lg mb-6 max-w-2xl mx-auto">
            Let's schedule a visit or answer any questions about our single-wide homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+19858760222"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
            >
              <Phone size={20} /> (985) 876-0222
            </a>
            <Button variant="secondary" to="/contact-gulf-south-homes">
              Schedule a Visit
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-stone-600">
            <MapPin size={16} />
            <span className="text-sm">1986 Highway 182, Houma, LA 70364</span>
          </div>
        </div>
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
            {/* Bedrooms Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Bedrooms</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by number of bedrooms">
                {bedOptions.map(beds => (
                  <label key={beds} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="beds"
                      checked={filters.beds === beds}
                      onChange={() => setFilter('beds', beds)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${beds === 'all' ? 'any number of' : beds} bedroom${beds !== 1 && beds !== 'all' ? 's' : ''}`}
                    />
                    <span className={`${filters.beds === beds ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {beds === 'all' ? 'Any' : `${beds} Bed${beds !== 1 ? 's' : ''}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bathrooms Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Bathrooms</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by number of bathrooms">
                {bathOptions.map(baths => (
                  <label key={baths} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="baths"
                      checked={filters.baths === baths}
                      onChange={() => setFilter('baths', baths)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${baths === 'all' ? 'any number of' : baths} bathroom${baths !== 1 && baths !== 'all' ? 's' : ''}`}
                    />
                    <span className={`${filters.baths === baths ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {baths === 'all' ? 'Any' : `${baths} Bath${baths !== 1 ? 's' : ''}`}
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
                onClick={() => clearFilters({ type: 'Single Wide' })}
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

export default SingleWide;
