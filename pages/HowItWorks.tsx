import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import {
  Home,
  DollarSign,
  LandPlot,
  Truck,
  KeyRound,
  CheckCircle,
  ArrowRight,
  Phone,
  FileText,
  Hammer,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';

const HowItWorks: React.FC = () => {
  // Scroll animation observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Choose Your Home',
      icon: <Home size={32} />,
      description: 'Browse our extensive inventory of single-wide, double-wide, and modular homes. Tour our models in person or explore floor plans online.',
      details: [
        'Visit our Bayou Blue showroom',
        'Browse homes by size, style, or manufacturer',
        'Schedule a personalized tour with our team',
        'Ask questions about features and customization'
      ],
      cta: { text: 'Browse Homes', link: '/homes-for-sale' }
    },
    {
      number: 2,
      title: 'Financing & Budget',
      icon: <DollarSign size={32} />,
      description: 'Get pre-approved with our in-house financing team. We work with multiple lenders to find the best rates and terms for your situation.',
      details: [
        'Quick pre-qualification process',
        'In-house financing available',
        'Flexible payment plans',
        'Special programs for first-time buyers',
        'LA Restore grants accepted'
      ],
      cta: { text: 'Learn About Financing', link: '/financing' }
    },
    {
      number: 3,
      title: 'Land & Permits',
      icon: <LandPlot size={32} />,
      description: 'We handle all the paperwork. From site surveys to building permits, our team coordinates everything so you don\'t have to.',
      details: [
        'Land evaluation and site preparation',
        'Building permits and inspections',
        'Utility hookup coordination',
        'Septic/sewer requirements',
        'Foundation and slab installation'
      ],
      cta: { text: 'Land & Home Packages', link: '/land-home' }
    },
    {
      number: 4,
      title: 'Delivery & Setup',
      icon: <Truck size={32} />,
      description: 'Professional delivery and complete installation by our experienced crew. We ensure your home is level, secure, and ready for occupancy.',
      details: [
        'Coordinated delivery scheduling',
        'Professional transport and placement',
        'Complete home leveling and anchoring',
        'Utility connections and testing',
        'Final walkthrough and inspection'
      ],
      cta: { text: 'Our Services', link: '/mobile-home-parts-store' }
    },
    {
      number: 5,
      title: 'Move-In',
      icon: <KeyRound size={32} />,
      description: 'Congratulations! Your home is ready. We provide a full orientation, warranty information, and ongoing support for any questions.',
      details: [
        'Complete home orientation',
        'Manufacturer warranty registration',
        'On-site parts store for future needs',
        'Service department for repairs',
        'Ongoing customer support'
      ],
      cta: { text: 'Contact Us', link: '/contact' }
    }
  ];

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.buyingProcess.title}
        description={SEO_CONFIG.buyingProcess.description}
        canonical={SEO_CONFIG.buyingProcess.canonical}
        ogImage={SEO_CONFIG.buyingProcess.ogImage}
      />
      <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen sm:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/buyingprocess/COVERPHOTO.webp')`
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge - Enhanced styling */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs font-bold uppercase tracking-wider mb-8 border border-white/20 hover:border-white/40 transition-colors duration-300">
              <CheckCircle size={16} className="fill-white/80" />
              Proven 5-Step Process
            </div>
            {/* Headline with gradient text - Like About page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-[1.1]">
              How It Works
              <span className="block mt-3 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                From Dream to Move-In
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              From choosing your home to moving in, we guide you through every step.
              Our streamlined process makes homeownership simple and stress-free.
            </p>

            {/* Trust stat below headline - Like About page floating badge */}
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
              <Clock size={18} />
              <span>Average timeline: <strong>4-8 weeks</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Enhanced with About page styling */}
      <section className="py-24 md:py-32 relative overflow-hidden scroll-animate">
        {/* Background gradient - Like About page */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-white pointer-events-none"></div>

        {/* Background Video - VERY SUBTLE */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/assets/video/videosworking/land.mp4" type="video/mp4" />
        </video>

        <div className="container relative z-10">
          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                id={`step-${step.number}`}
                className={`scroll-animate flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  {/* Step badge - Like About page */}
                  <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                    <span>Step {step.number} of 5</span>
                  </div>

                  <div className="flex items-start gap-5 mb-8">
                    <div className="relative flex-shrink-0">
                      {/* Enhanced gradient icon background - Like About page */}
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {step.icon}
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-accent to-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xl">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      {/* Title with gradient text - Like About page */}
                      <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-3 leading-[1.1]">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {step.title}
                        </span>
                      </h2>
                      <p className="text-lg text-stone-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-stone-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button to={step.cta.link} variant="outline">
                    {step.cta.text}
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>

                {/* Visual Side - Enhanced with About page styling */}
                <div className="flex-1 lg:sticky lg:top-32">
                  <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-stone-200 hover:border-primary/20 overflow-hidden transition-all duration-500">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={
                          step.number === 1 ? '/assets/images/buyingprocess/1.jpg' :
                          step.number === 4 ? '/assets/images/Meet the team/PGallery Photos/gulf-south-homes-gallery-03-600h.jpg' :
                          `/assets/images/buyingprocess/step_${step.number}_${
                            step.number === 2 ? 'financing_and_budget' :
                            step.number === 3 ? 'land_and_permits' :
                            'move_in'
                          }.jpg`
                        }
                        alt={`${step.title} - Gulf South Homes buying process`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Enhanced gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview - Enhanced Design */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-stone-50 to-white scroll-animate">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-6 px-4 py-1.5 bg-primary/5 rounded-full">
              <Clock size={14} />
              <span>Your Timeline</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              From Dream to
              <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Move-In Ready
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Most customers move into their new home within 4-8 weeks from the day they choose their model.
            </p>
          </div>

          {/* Enhanced Timeline - Vertical with Better Visual Hierarchy */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line - Better positioned and styled */}
              <div className="absolute left-[28px] sm:left-[36px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 via-blue-400 via-red-500 to-red-600 hidden sm:block opacity-60"></div>
              
              {/* Subtle glow around timeline */}
              <div className="absolute left-[26px] sm:left-[34px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-blue-500/20 to-red-600/20 hidden sm:block blur-sm"></div>

              {/* Timeline Items */}
              <div className="space-y-16 sm:space-y-20">
                {[
                  {
                    week: 'Week 1',
                    weekShort: '1',
                    task: 'Choose home & get pre-approved',
                    description: 'Browse our inventory, tour models, and secure financing with our expert team.',
                    gradient: 'from-primary to-blue-600',
                    icon: Home
                  },
                  {
                    week: 'Week 2-3',
                    weekShort: '2-3',
                    task: 'Site prep, permits, foundation',
                    description: 'We handle all paperwork, coordinate permits, and prepare your land for delivery.',
                    gradient: 'from-blue-600 to-blue-500',
                    icon: LandPlot
                  },
                  {
                    week: 'Week 4-6',
                    weekShort: '4-6',
                    task: 'Manufacturing & delivery',
                    description: 'Your home is built to order and professionally transported to your property.',
                    gradient: 'from-blue-500 to-blue-400',
                    icon: Truck
                  },
                  {
                    week: 'Week 7-8',
                    weekShort: '7-8',
                    task: 'Setup, hookup, final inspection',
                    description: 'Complete installation, utility connections, and final walkthrough inspection.',
                    gradient: 'from-blue-400 to-red-500',
                    icon: Hammer
                  },
                  {
                    week: 'Week 8+',
                    weekShort: '8+',
                    task: 'Move-in ready!',
                    description: 'Congratulations! Your new home is ready. Welcome home.',
                    gradient: 'from-red-500 to-red-600',
                    icon: KeyRound
                  }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
                    >
                      {/* Enhanced Timeline Badge */}
                      <div className="relative flex-shrink-0 w-full sm:w-auto">
                        {/* Mobile: Full width badge */}
                        <div className="sm:hidden w-full">
                          <div className={`relative bg-gradient-to-br ${item.gradient} rounded-xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <IconComponent className="text-white" size={20} />
                              </div>
                              <div className="flex-1">
                                <div className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-0.5">
                                  {item.week}
                                </div>
                                <h3 className="text-white font-bold text-lg leading-tight">
                                  {item.task}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Desktop: Compact badge */}
                        <div className="hidden sm:block relative">
                          {/* Badge Container */}
                          <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg flex flex-col items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 z-10`}>
                            {/* Icon */}
                            <IconComponent className="text-white mb-1" size={18} />
                            {/* Week Number */}
                            <span className="text-white font-bold text-xs leading-none">
                              {item.weekShort}
                            </span>
                          </div>
                          
                          {/* Connecting line to card */}
                          <div className="absolute left-full top-1/2 -translate-y-1/2 w-8 h-0.5 bg-stone-200 group-hover:bg-primary/30 transition-colors duration-300 z-0"></div>
                          
                          {/* Glow effect on hover */}
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`}></div>
                        </div>
                      </div>

                      {/* Enhanced Content Card */}
                      <div className="flex-1 w-full sm:w-auto">
                        {/* Mobile: Content below badge */}
                        <div className="sm:hidden mt-2">
                          <p className="text-stone-600 leading-relaxed text-base">
                            {item.description}
                          </p>
                        </div>

                        {/* Desktop: Full card */}
                        <div className="hidden sm:block bg-white rounded-xl p-6 sm:p-8 border border-stone-200/80 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                          {/* Subtle gradient overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`}></div>

                          <div className="relative z-10">
                            {/* Week label */}
                            <div className="inline-flex items-center gap-2 mb-3">
                              <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gradient-to-br ${item.gradient} text-white`}>
                                {item.week}
                              </span>
                            </div>
                            
                            {/* Task title */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                              {item.task}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Subtle corner accent */}
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-[0.03] rounded-bl-3xl`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Timeline Summary CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <CheckCircle size={22} className="flex-shrink-0" />
              <span className="font-semibold text-lg">Average Timeline: 4-8 Weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Elegant About.tsx Style */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-white scroll-animate">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center p-10 bg-white rounded-3xl border-2 border-stone-200 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-stone-700 mb-8 font-medium">
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contact-gulf-south-homes" className="shadow-lg hover:shadow-xl">
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white hover:bg-stone-50 text-stone-900 font-semibold rounded-xl border-2 border-stone-300 hover:border-primary transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Phone size={20} className="text-primary" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HowItWorks;
