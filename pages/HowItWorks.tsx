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
          <source src="/assets/video/videosworking/land.mp4" type="video/mp4" />
        </video>

        {/* Light Background Overlay - Crisp and Bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20"></div>
        <div className="absolute inset-0 bg-black/5"></div>

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

      {/* Steps Section */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
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
                  <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 lg:p-10">
                    <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                          {step.icon}
                        </div>
                        <p className="text-2xl font-bold text-stone-900">Step {step.number}</p>
                        <p className="text-stone-600 mt-2">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Most customers move into their new home within 4-8 weeks from the day they choose their model.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-200 hidden sm:block"></div>

              <div className="space-y-8">
                {[
                  { week: 'Week 1', task: 'Choose home & get pre-approved' },
                  { week: 'Week 2-3', task: 'Site prep, permits, foundation' },
                  { week: 'Week 4-6', task: 'Manufacturing & delivery' },
                  { week: 'Week 7-8', task: 'Setup, hookup, final inspection' },
                  { week: 'Week 8+', task: 'Move-in ready!' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 sm:gap-6 relative">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg relative z-10">
                      {item.week}
                    </div>
                    <div className="flex-1 bg-stone-50 rounded-xl p-6 border border-stone-200">
                      <p className="text-lg font-semibold text-stone-900">{item.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-stone-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Gulf South Homes?
            </h2>
            <p className="text-lg text-stone-300 mb-12">
              We've been helping Louisiana families find their perfect home for over 30 years.
              From start to finish, we're with you every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Home size={24} />, label: 'Largest Inventory', value: '100+' },
                { icon: <FileText size={24} />, label: 'Permits Handled', value: '1000+' },
                { icon: <Truck size={24} />, label: 'Homes Delivered', value: '3000+' },
                { icon: <Hammer size={24} />, label: 'Years in Business', value: '30+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-stone-800 rounded-xl p-6 border border-stone-700">
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/homes-for-sale" size="lg">
                Browse Homes
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button to="/contact-gulf-south-homes" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stone-900">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Our team is here to answer your questions and guide you through the process.
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
                to="/contact-gulf-south-homes"
                className="flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-lg font-bold text-lg hover:bg-stone-800 transition-colors shadow-lg"
              >
                <MapPin size={20} />
                Visit Our Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HowItWorks;
