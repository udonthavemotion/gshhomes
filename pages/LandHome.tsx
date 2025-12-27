import React, { useEffect } from 'react';
import { Phone, MapPin, CheckCircle, Home, Map, FileText, Hammer, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';

const LandHome: React.FC = () => {
  // Intersection Observer for scroll animations
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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const benefits = [
    {
      icon: <Home size={28} />,
      title: "One Simple Process",
      description: "We handle everything — finding land, securing your home, and coordinating the setup."
    },
    {
      icon: <DollarSign size={28} />,
      title: "Combined Financing",
      description: "Finance your land and home together with one loan, one payment, one closing."
    },
    {
      icon: <Map size={28} />,
      title: "Site Evaluation",
      description: "We assess your land for utilities, drainage, and placement before you commit."
    },
    {
      icon: <FileText size={28} />,
      title: "Permit Assistance",
      description: "Navigate parish permits and regulations with our experienced team."
    },
    {
      icon: <Hammer size={28} />,
      title: "Full Setup Included",
      description: "Delivery, leveling, skirting, steps, and utility connections — all handled."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Turnkey Ready",
      description: "Move in when it's done. No contractors to chase, no loose ends."
    }
  ];

  const steps = [
    { number: "01", title: "Consultation", description: "Tell us about your land (or let us help you find some) and your dream home." },
    { number: "02", title: "Site Assessment", description: "We evaluate your property for home placement, utilities, and permits." },
    { number: "03", title: "Choose Your Home", description: "Browse our inventory and customize your floor plan and finishes." },
    { number: "04", title: "Financing", description: "We connect you with lenders who specialize in land-home packages." },
    { number: "05", title: "Delivery & Setup", description: "Your home is delivered, set, and connected — we handle it all." },
    { number: "06", title: "Move In", description: "Get your keys and start living in your new home." }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section - Universal Responsive Pattern */}
      <section className="relative w-full min-h-screen sm:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Modular Homes Page/Land and home packages/landandhomepackage.mp4" type="video/mp4" />
        </video>

        {/* Background Overlay - Enhanced */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Gulf South Homes Logo - Prominent Branding with Animation */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="/assets/images/logo/gsh-logo-2025.svg"
              alt="Gulf South Homes - 2025 Bayou's Best Choice"
              className="w-[240px] h-[96px] sm:w-[400px] sm:h-[160px] lg:w-[500px] lg:h-[200px] object-contain drop-shadow-2xl logo-entrance"
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

          {/* Heading - Gradient Text Effect - Mobile Optimized */}
          <h1 className="font-bold text-white leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[900px] mx-auto break-words mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-emerald-400 via-primary to-teal-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(16,185,129,0.5)]">
              Land & Home Packages
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-[700px] mx-auto mt-3 mb-6 sm:mt-4 sm:mb-8 px-2 leading-relaxed">
            Already have land? We'll help you place your dream home on it. Need land too? We can help with that.
          </p>

          {/* Button Row - Enhanced Touch Targets */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 mb-8 justify-center px-2">
            <Button variant="primary" to="/contact" className="px-8 py-4 min-h-[48px] text-base sm:text-lg">
              Start Your Project
            </Button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 min-h-[48px] bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all active:scale-95 text-base sm:text-lg"
            >
              <Phone size={20} className="flex-shrink-0" /> <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-md mb-3 sm:mb-4 uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-3 sm:mb-4 px-2">Why Choose a Land & Home Package?</h2>
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
              Skip the hassle of coordinating multiple contractors. We make the entire process seamless from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="scroll-animate group bg-white p-6 sm:p-8 rounded-xl border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 touch-manipulation"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-primary/20 text-primary p-3 sm:p-4 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-lg sm:text-xl mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-stone-50">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-widest rounded-md mb-3 sm:mb-4 uppercase">
              The Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-stone-900 mb-3 sm:mb-4 tracking-tight px-2">How It Works</h2>
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
              From first conversation to move-in day, here's what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="scroll-animate group relative touch-manipulation"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Professional Card */}
                <div className="relative h-full bg-white border border-stone-200 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Number Badge - Mobile Optimized */}
                  <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-9 h-9 sm:w-10 sm:h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shadow-md">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-3 sm:pt-4">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-stone-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line (Desktop Only) */}
                  {idx < 5 && idx % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-stone-200 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-stone-300 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Already Have Land? Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4 sm:mb-6 px-2">Already Have Land?</h2>
              <p className="text-stone-600 mb-5 sm:mb-6 text-base sm:text-lg px-2 leading-relaxed">
                If you already own property in Louisiana, we can evaluate it for manufactured home placement. Our team will assess:
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2">
                {[
                  "Utility access (electric, water, septic/sewer)",
                  "Drainage and flood zone considerations",
                  "Parish permit requirements",
                  "Driveway and home placement options",
                  "Foundation and anchoring needs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={20} />
                    <span className="text-stone-700 text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="px-2">
                <Button variant="primary" to="/contact" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-h-[48px]">
                  Schedule a Site Visit
                </Button>
              </div>
            </div>
            <div className="scroll-animate bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-6 sm:p-8 lg:p-10 border border-stone-200 shadow-lg">
              <h3 className="font-display font-bold text-stone-900 text-xl sm:text-2xl mb-3 sm:mb-4">Need Help Finding Land?</h3>
              <p className="text-stone-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                We work with local realtors and know the parishes well. Whether you're looking in Terrebonne, Lafourche, St. Mary, or surrounding areas, we can point you in the right direction.
              </p>
              <p className="text-stone-600 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Many of our customers find great deals on family land, rural lots, or properties that work perfectly for manufactured homes.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-primary font-bold text-base sm:text-lg hover:text-primary-dark transition-all duration-300 hover:gap-3 active:scale-95 min-h-[48px] py-2"
              >
                <Phone size={20} className="flex-shrink-0" /> <span>Call us to discuss options</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-primary via-emerald-600 to-emerald-700 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          <div className="text-center scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 px-2">
              Ready to Build on Your Land?
            </h2>
            <p className="text-emerald-50 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Let's talk about your property and find the perfect home to put on it. Free consultations, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-primary px-6 sm:px-8 py-4 min-h-[48px] rounded-xl font-bold text-base sm:text-lg hover:bg-stone-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl w-full sm:w-auto"
              >
                <Phone size={20} className="flex-shrink-0" /> <span>{COMPANY_INFO.phone}</span>
              </a>
              <Button variant="secondary" to="/contact" size="lg" className="px-6 sm:px-8 py-4 min-h-[48px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Request a Consultation
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-emerald-100 text-sm sm:text-base px-2">
              <MapPin size={18} className="flex-shrink-0" />
              <span className="text-center">{COMPANY_INFO.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandHome;

