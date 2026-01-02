import React, { useState, useMemo, useEffect } from 'react';
import { UNIFIED_INVENTORY } from '../data/unified-inventory';
import { useHomeFilters } from '../hooks/useHomeFilters';
import HomeCard from '../components/HomeCard';
import ManufacturerSection from '../components/ManufacturerSection';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SlidersHorizontal, X, ArrowRight, MapPin, Phone, Clock, Home, Hammer, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';
import { groupHomesByManufacturer } from '../utils/manufacturerGrouping';
import { getManufacturersWithPlaceholders } from '../utils/placeholderHomes';

const Modular: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Use unified filtering with default type='Modular'
  const { filteredHomes, filters, setFilter, clearFilters, activeFilterCount } = useHomeFilters(
    UNIFIED_INVENTORY,
    { type: 'Modular' }
  );

  // Get all modular homes for filter options
  const modularHomes = useMemo(
    () => UNIFIED_INVENTORY.filter(h => h.type === 'Modular'),
    []
  );

  // Extract unique values for filters (normalize BG to BG Manufacturing for display)
  const manufacturers = useMemo(
    () => ['all', ...Array.from(new Set(modularHomes.map(h => h.manufacturer === 'BG' ? 'BG Manufacturing' : h.manufacturer)))],
    [modularHomes]
  );
  const bedOptions = useMemo(() => ['all', '2', '3', '4'], []);
  const bathOptions = useMemo(() => ['all', '2', '2.5', '3'], []);

  // Group homes by manufacturer (only if no manufacturer filter active)
  const groupedHomes = useMemo(() => {
    if (filters.manufacturer && filters.manufacturer !== 'all') {
      // If manufacturer filter is active, return single section
      return [[filters.manufacturer, filteredHomes] as [string, typeof filteredHomes]];
    }
    // Otherwise, group by manufacturer and include placeholders
    return getManufacturersWithPlaceholders(filteredHomes, 'Modular');
  }, [filteredHomes, filters.manufacturer]);

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

  // Scroll to grid smoothly
  const scrollToGrid = () => {
    const grid = document.getElementById('homes-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.modular.title}
        description={SEO_CONFIG.modular.description}
        canonical={SEO_CONFIG.modular.canonical}
        ogImage={SEO_CONFIG.modular.ogImage}
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
          <source src="/assets/video/videosworking/modularhomes.mp4" type="video/mp4" />
        </video>

        {/* Light Background Overlay - Crisp and Bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20"></div>
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
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
            <SlidersHorizontal size={16} />
            Fully Customizable
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            <span className="block">Modular Homes.</span>
            <span className="block mt-2">Fully Customizable.</span>
            <span className="block mt-2 text-white">
              Built to Last.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Complete flexibility and customization. Any floor plan can be built as a modular home and tailored to your exact preferences.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <button
              onClick={scrollToGrid}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View Inventory
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Modular Homes Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              About Modular Homes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
              Complete Flexibility & Customization
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Our modular homes offer complete flexibility and customization. Any floor plan you see on our lot can be built as a modular home and tailored to your exact preferences. From structural layout and room configuration to interior finishes, cabinetry, flooring, exterior options, and energy-efficient features, every modular home can be designed to reflect your style and meet your needs. Modular homes provide the strength and quality of site-built homes with a faster build time and more value, making them a smart choice for today's homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Homes Grid Section */}
      <div id="homes-grid" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 scroll-animate">
        {/* Header with Filters Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display mb-2">
              Available Models
            </h2>
            <p className="text-stone-600 text-lg">
              Browsing <span className="font-semibold text-primary">{filteredHomes.length}</span> modular homes
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeFilterCount > 0 && (
              <button
                onClick={() => clearFilters({ type: 'Modular' })}
                className="text-sm text-stone-500 hover:text-stone-700 underline transition-colors"
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
            {filters.manufacturer && filters.manufacturer !== 'all' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {filters.manufacturer}
                <button onClick={() => setFilter('manufacturer', 'all')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
            {filters.beds && filters.beds !== 'all' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {filters.beds} Beds
                <button onClick={() => setFilter('beds', 'all')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                  <X size={14} />
                </button>
              </span>
            )}
            {filters.baths && filters.baths !== 'all' && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                {filters.baths} Baths
                <button onClick={() => setFilter('baths', 'all')} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
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
                onClick={() => clearFilters({ type: 'Modular' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                aria-label="Clear all filters"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Why Visit In Person - Context Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Why Visit In Person?
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Seeing our homes in person is the best way to understand what we offer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="scroll-animate text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">See Multiple Homes</h3>
              <p className="text-stone-600">Browse our full inventory of modular homes in one convenient location</p>
            </div>

            <div className="scroll-animate text-center p-6" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer size={32} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">Test the Layout</h3>
              <p className="text-stone-600">Walk through homes and experience the space, finishes, and customization options firsthand</p>
            </div>

            <div className="scroll-animate text-center p-6" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">Talk to Experts</h3>
              <p className="text-stone-600">Get personalized guidance from our knowledgeable team about options and financing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section - RELOCATED */}
      <section className="py-20 sm:py-28 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-white text-sm font-semibold rounded-md mb-4">
                Visit Our Showroom
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                Proudly Serving Southeast Louisiana
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="scroll-animate text-center">
                <MapPin className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-stone-300">{COMPANY_INFO.address}</p>
              </div>
              <div className="scroll-animate text-center">
                <Phone className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-stone-300 hover:text-primary transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="scroll-animate text-center">
                <Clock className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <p className="text-stone-300">{COMPANY_INFO.hours.weekdays}</p>
                <p className="text-stone-300">{COMPANY_INFO.hours.saturday}</p>
                <p className="text-stone-300">{COMPANY_INFO.hours.sunday}</p>
              </div>
            </div>

            <div className="text-center scroll-animate">
              <Button to="/contact-gulf-south-homes" variant="white" size="lg">
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Drawer - Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowFilters(false)}
      />

      {/* Filter Drawer - Panel */}
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
            {/* Manufacturer Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Manufacturer</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by manufacturer">
                {manufacturers.map(manuf => (
                  <label key={manuf} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="manufacturer"
                      checked={filters.manufacturer === manuf}
                      onChange={() => setFilter('manufacturer', manuf)}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${manuf === 'all' ? 'all brands' : manuf} manufacturer`}
                    />
                    <span className={`${filters.manufacturer === manuf ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {manuf === 'all' ? 'All Brands' : manuf}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-900 mb-4 text-lg">Bedrooms</h3>
              <div className="space-y-3" role="radiogroup" aria-label="Filter by number of bedrooms">
                {bedOptions.map(beds => (
                  <label key={beds} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="beds"
                      checked={filters.beds === (beds === 'all' ? 'all' : parseInt(beds))}
                      onChange={() => setFilter('beds', beds === 'all' ? 'all' : parseInt(beds))}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${beds === 'all' ? 'any number of' : beds} bedroom${beds !== '1' && beds !== 'all' ? 's' : ''}`}
                    />
                    <span className={`${filters.beds === (beds === 'all' ? 'all' : parseInt(beds)) ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {beds === 'all' ? 'Any' : `${beds} Bed${beds !== '1' ? 's' : ''}`}
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
                      checked={filters.baths === (baths === 'all' ? 'all' : parseFloat(baths))}
                      onChange={() => setFilter('baths', baths === 'all' ? 'all' : parseFloat(baths))}
                      className="text-primary focus:ring-primary h-5 w-5 border-stone-300"
                      aria-label={`Filter by ${baths === 'all' ? 'any number of' : baths} bathroom${baths !== '1' && baths !== 'all' ? 's' : ''}`}
                    />
                    <span className={`${filters.baths === (baths === 'all' ? 'all' : parseFloat(baths)) ? 'text-primary font-medium' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {baths === 'all' ? 'Any' : `${baths} Bath${baths !== '1' ? 's' : ''}`}
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
                onClick={() => clearFilters({ type: 'Modular' })}
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

export default Modular;
