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
  MapPin
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
      cta: { text: 'Browse Homes', link: '/catalog' }
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
      cta: { text: 'Our Services', link: '/services' }
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
          backgroundImage: `url('/assets/images/howitworks/IMG_3500 (1).JPG')`
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-md mb-4">
              The Process
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              How It Works
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              From choosing your home to moving in, we guide you through every step.
              Our streamlined process makes homeownership simple and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section - With Subtle Video Context */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Background Video - VERY SUBTLE */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="/assets/video/videosworking/land.mp4" type="video/mp4" />
        </video>

        {/* White Overlay - Maintains Readability */}
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="container relative z-10">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                id={`step-${step.number}`}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                        {step.title}
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

                {/* Visual Side */}
                <div className="flex-1 lg:sticky lg:top-24">
                  <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={`/assets/images/buyingprocess/step_${step.number}_${
                          step.number === 1 ? 'choose_your_home' :
                          step.number === 2 ? 'financing_and_budget' :
                          step.number === 3 ? 'land_and_permits' :
                          step.number === 4 ? 'delivery_and_setup' :
                          'move_in'
                        }.jpg`}
                        alt={`${step.title} - Gulf South Homes buying process`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle overlay for visual consistency */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview - Modern Viral Design */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-stone-50 to-white scroll-animate">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Clock size={14} />
              <span>Your Timeline</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              From Dream to
              <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Move-In Ready
              </span>
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Most customers move into their new home within 4-8 weeks from the day they choose their model.
            </p>
          </div>

          {/* Modern Timeline - Vertical with Gradient Accents */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Animated Timeline Line - Gradient */}
              <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-600 to-red-600 hidden sm:block rounded-full shadow-lg"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    week: 'Week 1',
                    task: 'Choose home & get pre-approved',
                    description: 'Browse our inventory, tour models, and secure financing with our expert team.',
                    gradient: 'from-primary to-blue-600'
                  },
                  {
                    week: 'Week 2-3',
                    task: 'Site prep, permits, foundation',
                    description: 'We handle all paperwork, coordinate permits, and prepare your land for delivery.',
                    gradient: 'from-blue-600 to-blue-500'
                  },
                  {
                    week: 'Week 4-6',
                    task: 'Manufacturing & delivery',
                    description: 'Your home is built to order and professionally transported to your property.',
                    gradient: 'from-blue-500 to-accent'
                  },
                  {
                    week: 'Week 7-8',
                    task: 'Setup, hookup, final inspection',
                    description: 'Complete installation, utility connections, and final walkthrough inspection.',
                    gradient: 'from-accent to-red-600'
                  },
                  {
                    week: 'Week 8+',
                    task: 'Move-in ready!',
                    description: 'Congratulations! Your new home is ready. Welcome home.',
                    gradient: 'from-red-600 to-red-700'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-start gap-6 sm:gap-10"
                  >
                    {/* Timeline Dot with Gradient */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-sm sm:text-base text-center leading-tight px-2">
                          {item.week}
                        </span>
                      </div>
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 border-2 border-stone-200 group-hover:border-primary/30 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                      {/* Subtle gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors duration-300">
                          {item.task}
                        </h3>
                        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Decorative corner accent */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Summary CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CheckCircle size={24} />
              <span className="font-bold text-lg">Average Timeline: 4-8 Weeks</span>
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
