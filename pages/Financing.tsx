import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronUp,
  CheckCircle,
  DollarSign,
  Home,
  LandPlot,
  FileText,
  Clock,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  Phone
} from 'lucide-react';
import Button from '../components/Button';
import LogoScroller from '../components/LogoScroller';
import LenderRibbon from '../components/LenderRibbon';
import TrustRibbon from '../components/TrustRibbon';
import { LENDERS } from '../data/lenders';
import { COMPANY_INFO, LENDING_PARTNERS } from '../constants';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';

interface FinancingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const Financing: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const financingOptions: FinancingOption[] = [
    {
      id: 'home-only',
      title: 'Home Only',
      description: "This option is for buyers who already own land or plan to place their home in a park or on private property. With home only financing (sometimes called chattel loans), you're financing just the manufactured home, not the land. This option often comes with lower upfront costs and faster approval.",
      icon: <Home size={28} />,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 'home-land',
      title: 'Home & Land',
      description: "Looking for a full package? This option allows you to finance both the home and the land together under one loan. Whether you're buying in a subdivision like La Belle Maison or placing a home on your own land, this is a convenient, all-in-one solution. You may qualify for conventional, FHA, VA, or USDA loans depending on your credit and location.",
      icon: <LandPlot size={28} />,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      id: 'land-in-lieu',
      title: 'Land in Lieu',
      description: "Already own land or have family land? You may be able to use it in place of a cash down payment. This is called land in lieu and it's a great option for buyers who want to lower their out-of-pocket costs while building equity.",
      icon: <FileText size={28} />,
      gradient: 'from-violet-500 to-violet-600',
    },
  ];

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleCTAClick = () => {
    window.open(
      'https://creditapp.cirrussolutions.com/MfgHomeAppl/Index/d3584d86-dd63-f011-a31c-005056b4717b',
      '_blank',
      'noopener,noreferrer'
    );
  };

  // Scroll animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.financing.title}
        description={SEO_CONFIG.financing.description}
        canonical={SEO_CONFIG.financing.canonical}
        ogImage={SEO_CONFIG.financing.ogImage}
      />
      <div className="bg-white min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen sm:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Background video showcasing financing options"
        >
          <source src="/assets/video/videosworking/finance.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay */}
        {/* Light Background Overlay - Crisp and Bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20"></div>
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6">
            <DollarSign size={16} />
            Flexible Payment Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Financing Made <span className="text-white">Simple</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            We work with a wide network of trusted lenders to help make homeownership possible for more families, even if you've been turned down elsewhere.
          </p>
          <Button
            onClick={handleCTAClick}
            variant="primary"
            size="lg"
            className="shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Start Your Application
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        {/* Lending Partners Ribbon - Overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <LenderRibbon partners={LENDING_PARTNERS} className="pointer-events-auto" />
        </div>
      </section>

      {/* Why Financing with Us Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Making Homeownership Accessible
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              With flexible financing options and lenders who consider low credit scores, non-traditional income, and first-time buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <CheckCircle size={32} />,
                title: 'Fast Approval',
                description: 'Get pre-approved in as little as 24 hours',
                gradient: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: <DollarSign size={32} />,
                title: 'Low Down Payments',
                description: 'Options starting as low as 5% down',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: <Shield size={32} />,
                title: 'Bad Credit OK',
                description: 'Multiple lenders for all credit situations',
                gradient: 'from-violet-500 to-violet-600'
              },
              {
                icon: <Users size={32} />,
                title: 'First-Time Buyers',
                description: 'Special programs for first-time homeowners',
                gradient: 'from-amber-500 to-amber-600'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-8 bg-white rounded-2xl border border-stone-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 text-center mb-2">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lender Carousel Section */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Trusted Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-4">
              Our Lending Partners
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              We work with top-rated lenders to find you the best rates and terms
            </p>
          </div>
          <div className="scroll-animate">
            <LogoScroller logos={LENDERS} />
          </div>
        </div>
      </section>

      {/* Financing Options Cards */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Choose Your Path
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Financing Options
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Select the financing solution that fits your situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {financingOptions.map((option, idx) => {
              const isExpanded = expandedCard === option.id;
              return (
                <div
                  key={option.id}
                  className="scroll-animate bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-200 flex flex-col group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${option.gradient} text-white px-8 py-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                      }}></div>
                    </div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        {option.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{option.title}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col p-8">
                    {/* Description - Always visible with expand/collapse */}
                    <div className="mb-6">
                      <div
                        id={`${option.id}-content`}
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? 'max-h-[500px]' : 'max-h-[80px]'
                        }`}
                      >
                        <p className="text-stone-700 leading-relaxed text-base">
                          {option.description}
                        </p>
                      </div>

                      {/* Fade overlay when collapsed */}
                      {!isExpanded && (
                        <div className="h-8 bg-gradient-to-t from-white to-transparent -mt-8 relative"></div>
                      )}
                    </div>

                    {/* Learn More / Show Less Button */}
                    <button
                      onClick={() => toggleCard(option.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleCard(option.id);
                        }
                      }}
                      className="mt-auto flex items-center justify-center gap-2 w-full px-6 py-3 bg-stone-900 hover:bg-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      aria-expanded={isExpanded}
                      aria-controls={`${option.id}-content`}
                      aria-label={`${isExpanded ? 'Show less' : 'Learn more'} about ${option.title} financing`}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      <ChevronUp
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? '' : 'rotate-180'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                Getting Started
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                What You Need to Get Started
              </h2>
              <p className="text-stone-600 text-lg">
                Prepare these documents for a faster approval process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Required Documents */}
              <div className="scroll-animate p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Required Documents</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Proof of Income',
                    'Employment History',
                    'Government-Issued ID',
                    'Down Payment Sources'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-stone-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Loan Types */}
              <div className="scroll-animate p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Loan Types Available</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'FHA Loans',
                    'VA Loans',
                    'USDA Loans',
                    'Conventional Loans',
                    'Chattel Loans'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-stone-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="scroll-animate text-center">
              <Button
                onClick={handleCTAClick}
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Approved for Financing Now
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-stone-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Our financing experts are here to guide you through every step of the process.
              Let's find the perfect financing solution for your new home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleCTAClick}
                variant="secondary"
                size="lg"
                className="bg-white text-stone-900 hover:bg-stone-100 shadow-xl"
              >
                Apply Now
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <span className="text-white/80">or</span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-xl font-bold text-lg hover:bg-stone-800 transition-colors shadow-xl"
              >
                <Phone size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>
            <p className="mt-8 text-white/70 text-sm">
              Have questions? <Link to="/contact-gulf-south-homes" className="underline hover:text-white">Contact our team</Link> for personalized assistance.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Financing;
