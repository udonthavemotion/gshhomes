import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import {
  DollarSign,
  Home,
  LandPlot,
  ShieldCheck,
  Wrench,
  Tag,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const WhatWeOffer: React.FC = () => {
  const offerings = [
    {
      icon: <Tag size={32} />,
      title: 'Current Deals & Specials',
      description: 'Take advantage of our limited-time offers and in-stock specials. Save thousands on select models.',
      features: [
        'Free slab or free utilities on select homes',
        'Free site prep on in-stock Franklin homes',
        'Seasonal promotions and clearance sales',
        'Special manufacturer incentives'
      ],
      link: '/deals',
      buttonText: 'View Current Deals',
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Financing Options',
      description: 'Get pre-approved quickly with our in-house financing team. We work with multiple lenders to find you the best rates.',
      features: [
        'In-house financing available',
        'Quick pre-qualification process',
        'Competitive rates and flexible terms',
        'First-time buyer programs',
        'Low down payment options'
      ],
      link: '/financing',
      buttonText: 'Learn About Financing',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <LandPlot size={32} />,
      title: 'Land & Home Packages',
      description: 'Don\'t have land yet? We can help you find the perfect lot and handle everything from purchase to setup.',
      features: [
        'Land search assistance',
        'Site evaluation and preparation',
        'Complete package pricing',
        'Coordinated closing process',
        'Turnkey home and land solution'
      ],
      link: '/land-home',
      buttonText: 'Explore Land Packages',
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'LA Restore Program',
      description: 'We accept all Restore Louisiana grants and assist you through the entire application process.',
      features: [
        'Grant application assistance',
        'Program eligibility guidance',
        'Direct grant acceptance',
        'Coordination with state agencies',
        'Experienced with disaster recovery programs'
      ],
      link: '/la-restore',
      buttonText: 'LA Restore Info',
      gradient: 'from-violet-500 to-violet-600',
      bgGradient: 'from-violet-50 to-violet-100'
    },
    {
      icon: <Home size={32} />,
      title: 'Insurance Assistance',
      description: 'Get help finding affordable homeowners insurance. We work with multiple carriers to ensure you\'re protected.',
      features: [
        'Insurance quotes and comparison',
        'Multiple carrier options',
        'Flood insurance guidance',
        'Wind/storm coverage help',
        'Ongoing support and claims assistance'
      ],
      link: '/insurance',
      buttonText: 'Insurance Help',
      gradient: 'from-rose-500 to-rose-600',
      bgGradient: 'from-rose-50 to-rose-100'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Service Department',
      description: 'Full-service repair and maintenance for your manufactured home. Plus, an on-site parts store for DIY needs.',
      features: [
        'Expert repair technicians',
        'On-site parts store',
        'Warranty service coordination',
        'Preventive maintenance programs',
        'Same-day service for emergencies'
      ],
      link: '/services',
      buttonText: 'Service & Parts',
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-md mb-4">
              Your Partner in Homeownership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              What We Offer
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed">
              More than just homes—we provide complete support from financing to maintenance.
              Everything you need to make homeownership simple and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Offerings Grid */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {offerings.map((offering, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${offering.bgGradient} p-8 border-b border-stone-200`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${offering.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {offering.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-stone-900 mb-2">
                        {offering.title}
                      </h2>
                      <p className="text-stone-600">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {offering.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={offering.link}
                    className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${offering.gradient} text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg group/btn`}
                  >
                    {offering.buttonText}
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Why Choose Gulf South Homes?
              </h2>
              <p className="text-lg text-stone-600">
                We're not just a dealer—we're your partner from day one through the lifetime of your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'One-Stop Shop',
                  description: 'Everything you need under one roof—sales, financing, permits, setup, parts, and service.'
                },
                {
                  title: 'Local & Family-Owned',
                  description: 'Serving Southeast Louisiana since 1995. We know the area, the process, and the people.'
                },
                {
                  title: 'Ongoing Support',
                  description: 'Our relationship doesn\'t end at delivery. We\'re here for repairs, parts, and questions anytime.'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Talk to our team about how we can help you find and finance your perfect home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-stone-100 transition-colors shadow-lg"
              >
                <Phone size={20} />
                {COMPANY_INFO.phone}
              </a>
              <span className="text-white/80">or</span>
              <Link
                to="/catalog"
                className="flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-lg font-bold text-lg hover:bg-stone-800 transition-colors shadow-lg"
              >
                Browse Homes
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
