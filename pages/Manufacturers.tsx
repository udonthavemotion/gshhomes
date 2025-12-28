import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MANUFACTURERS } from '../data/manufacturers';
import { COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { ArrowRight, MapPin, Phone, Clock, Building, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';
import ManufacturerLogoScroller from '../components/ManufacturerLogoScroller';

const Manufacturers: React.FC = () => {
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
        title={SEO_CONFIG.manufacturers.title}
        description={SEO_CONFIG.manufacturers.description}
        canonical={SEO_CONFIG.manufacturers.canonical}
        ogImage={SEO_CONFIG.manufacturers.ogImage}
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
          <source src="/assets/images/awards/manufactures.mp4" type="video/mp4" />
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

          {/* Heading */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Our Manufacturers
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            We partner with the industry's leading manufacturers to bring you quality homes built to last. 
            Explore our trusted brands and find the perfect home for your family.
          </p>
        </div>
      </section>

      {/* Manufacturers Carousel */}
      <section className="py-8 sm:py-12 bg-white border-b border-stone-200">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-2">
              Browse Our Manufacturers
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Click any logo to jump to that manufacturer's section
            </p>
          </div>
        </div>
        <ManufacturerLogoScroller />
      </section>

      {/* Manufacturers Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="space-y-16 md:space-y-20">
            {MANUFACTURERS.map((manufacturer, idx) => (
              <div
                key={manufacturer.slug}
                id={`manufacturer-${manufacturer.slug}`}
                className={`scroll-animate grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ transitionDelay: `${idx * 100}ms`, scrollMarginTop: '100px' }}
              >
                {/* Logo Section */}
                <div className={`${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-stone-50 rounded-2xl p-8 lg:p-12 border-2 border-stone-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                    <img
                      src={manufacturer.logoPath}
                      alt={manufacturer.logoAlt}
                      className="w-full h-auto max-h-32 object-contain mx-auto"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/images/logo/logo.png';
                        target.alt = `${manufacturer.displayName} logo placeholder`;
                      }}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Manufacturer Name & Tagline */}
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-2">
                        {manufacturer.displayName}
                      </h2>
                      {manufacturer.shortTagline && (
                        <p className="text-lg text-primary font-semibold">
                          {manufacturer.shortTagline}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 text-lg leading-relaxed">
                      {manufacturer.description}
                    </p>

                    {/* Info Note - Enhanced Design */}
                    <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-emerald-50 border-2 border-primary/20 rounded-xl p-5 mt-6 overflow-hidden">
                      {/* Decorative accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                      <div className="relative">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-0.5">
                            <Building size={18} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-stone-700 leading-relaxed font-medium">
                              <strong className="text-primary">Browse All Models:</strong> Visit {manufacturer.displayName}'s website to explore their complete catalog of floor plans. 
                              Custom orders are available through Gulf South Homes—we'll handle everything from order to delivery.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Browse All Models Button - Beautiful Prominent Design */}
                    {manufacturer.websiteUrl && (
                      <div className="pt-6">
                        <a
                          href={manufacturer.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-primary-light to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden"
                        >
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Content */}
                          <span className="relative z-10 flex items-center gap-3 text-lg">
                            <span>Browse All {manufacturer.displayName} Models</span>
                            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </span>
                          
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </a>
                        
                        {/* Helper text */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                          <span>Opens {manufacturer.displayName}'s website in a new tab • Custom orders available through Gulf South Homes</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & Contact Info */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-4xl mx-auto scroll-animate">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-stone-200 shadow-lg">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Service Area
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-4">
                  Serving Southeast Louisiana
                </h2>
                <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                  We deliver and set up homes throughout Southeast Louisiana, including Houma, Thibodaux, 
                  Morgan City, and surrounding areas. Contact us to learn more about our service area.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2 text-lg">Visit Our Showroom</h3>
                    <p className="text-stone-600 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2 text-lg">Call Us</h3>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-primary font-semibold text-lg hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-xl md:col-span-2">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900 mb-3 text-lg">Business Hours</h3>
                    <div className="space-y-2 text-stone-600">
                      <p>{COMPANY_INFO.hours.weekdays}</p>
                      <p>{COMPANY_INFO.hours.saturday}</p>
                      <p>{COMPANY_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Button variant="primary" to="/contact-gulf-south-homes" size="lg">
                  Get In Touch
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Manufacturers */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Why Our Manufacturers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              We carefully select manufacturers who share our commitment to quality, durability, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Building size={28} />,
                title: 'Industry Leaders',
                description: 'We partner with established manufacturers known for quality construction and innovation.'
              },
              {
                icon: <Building size={28} />,
                title: 'Storm-Ready Construction',
                description: 'Many of our manufacturers build homes that meet or exceed Wind Zone III standards for Louisiana\'s climate.'
              },
              {
                icon: <Building size={28} />,
                title: 'Warranty Protection',
                description: 'All manufacturers provide comprehensive warranties, giving you peace of mind for years to come.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="scroll-animate p-6 lg:p-8 bg-stone-50 rounded-xl border border-stone-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Manufacturers;
