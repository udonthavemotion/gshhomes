import React, { useEffect } from 'react';
import {
  Wrench,
  Phone,
  Clock,
  MapPin,
  Award,
  Shield,
  Star,
  Check,
  DoorOpen,
  Wind,
  Droplets,
  Zap,
  Box,
  Home as HomeIcon
} from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';

const Parts: React.FC = () => {
  // Intersection Observer for scroll animations
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

  const partsCategories = [
    {
      icon: <DoorOpen size={32} />,
      title: "Doors & Windows",
      description: "Interior and exterior doors, windows, screens, and hardware",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <HomeIcon size={32} />,
      title: "Skirting & Anchors",
      description: "Vinyl skirting, anchors, tie-downs, and installation supplies",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Wind size={32} />,
      title: "HVAC & Vents",
      description: "AC units, vents, ductwork, thermostats, and filters",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Droplets size={32} />,
      title: "Plumbing Parts",
      description: "Faucets, sinks, water heaters, pipes, and fixtures",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: <Zap size={32} />,
      title: "Electrical Parts",
      description: "Outlets, switches, breaker panels, and wiring supplies",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Box size={32} />,
      title: "Setup Equipment",
      description: "Steps, railings, entry systems, and installation equipment",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const trustBadges = [
    {
      icon: <Award size={24} />,
      label: "30+ Years",
      sublabel: "Serving Louisiana"
    },
    {
      icon: <Shield size={24} />,
      label: "Licensed Pros",
      sublabel: "Expert Staff"
    },
    {
      icon: <Clock size={24} />,
      label: "Same-Day",
      sublabel: "Pickup Available"
    }
  ];

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.parts.title}
        description={SEO_CONFIG.parts.description}
        canonical={SEO_CONFIG.parts.canonical}
        ogImage={SEO_CONFIG.parts.ogImage}
      />
      <div className="flex flex-col min-h-screen overflow-hidden">

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
          <source src="/assets/images/parts store/hero headerpartstore.mp4" type="video/mp4" />
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
            <Wrench size={16} />
            On-Site Parts Department
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Everything You Need to
            <span className="block mt-2 text-white">
              Repair, Upgrade & Maintain
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4 mb-8">
            Your one-stop shop for manufactured home parts and professional service in South Louisiana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={20} />
              Call {COMPANY_INFO.phone}
            </a>
            <Button
              variant="white"
              size="lg"
              to="/contact-gulf-south-homes"
            >
              Request Part Info
            </Button>
          </div>

          {/* Hours */}
          <p className="mt-4 text-emerald-200/80 text-sm">
            <Clock size={16} className="inline mr-2" />
            Mon-Fri 8am-5pm | Sat 9am-3pm
          </p>
        </div>
      </section>

      {/* Service Inquiry CTA - Above the Fold */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Request Service</h2>
              <p className="text-blue-100 text-lg mb-6">
                Need warranty repairs, AC service, or professional installation? Our licensed technicians are ready to help with any service request.
              </p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Button
                variant="white"
                to="/contact-gulf-south-homes"
                className="min-h-[48px] text-base font-semibold bg-white text-primary border-white hover:bg-stone-100"
              >
                Service Request Form
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Store Overview - 2 Column */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden scroll-animate">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-50 to-transparent pointer-events-none"></div>

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Trusted Since {COMPANY_INFO.founded}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
                More Than Just a Parts Store
              </h2>
              <div className="space-y-4 text-stone-600 text-lg leading-relaxed mb-8">
                <p>
                  At Gulf South Homes, we understand that your manufactured home is an investment that deserves expert care.
                  That's why we maintain an extensive on-site parts department stocked with everything you need to keep your home in top condition.
                </p>
                <p>
                  Our knowledgeable team has decades of combined experience and can help you identify the right parts for your specific home model.
                  Whether you're a DIY homeowner or a professional contractor, we've got you covered.
                </p>
                <p>
                  <strong className="text-stone-900">Can't find what you need?</strong> We work with a network of trusted suppliers and can special-order hard-to-find parts, often with same-week delivery.
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  'Extensive inventory of common parts in stock',
                  'Expert staff to help identify what you need',
                  'Special-order service for hard-to-find items',
                  'Competitive pricing and contractor discounts',
                  'Professional installation services available'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={18} />
                  Call for Pricing
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-stone-300 text-stone-700 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: Images */}
            <div className="scroll-animate">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-02-600h.jpeg"
                      alt="Parts inventory"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-03-600h.jpeg"
                      alt="Store interior"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-04-600h.jpeg"
                      alt="Parts display"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/parts store/gulf-south-homes-gallery-05-600h.jpeg"
                      alt="Equipment"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Services Grid */}
      <section className="py-24 md:py-32 bg-stone-50 relative overflow-hidden scroll-animate">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              What We Stock
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Parts & Service Categories
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              From routine maintenance to major repairs, we have the parts and expertise you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {partsCategories.map((category, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-8 bg-white rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-3">{category.title}</h3>
                <p className="text-stone-600 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Services Notice */}
          <div className="scroll-animate max-w-4xl mx-auto relative overflow-hidden rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/video/videosworking/manufactures.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-85"></div>

            {/* Content */}
            <div className="relative z-10">
              <Wrench size={48} className="mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 drop-shadow-lg text-white">Professional Installation Available</h3>
              <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto drop-shadow-md">
                Not comfortable installing parts yourself? Our licensed technicians can handle everything from simple repairs to complete system installations.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-stone-50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone size={20} />
                Schedule Service Call
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Parts;
