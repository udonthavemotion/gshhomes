import React, { useEffect } from 'react';
import { Phone, CheckCircle, FileText, Home, AlertCircle, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';

const LARestore: React.FC = () => {
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

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.laRestore.title}
        description={SEO_CONFIG.laRestore.description}
        canonical={SEO_CONFIG.laRestore.canonical}
        ogImage={SEO_CONFIG.laRestore.ogImage}
      />
      <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900 pt-[calc(80px+env(safe-area-inset-top))] sm:pt-[calc(96px+env(safe-area-inset-top))]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Background video showcasing Restore Louisiana program"
        >
          <source src="/assets/images/restore louisiana page/restorelouisiana.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-stone-900/80"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-full mb-6 uppercase shadow-md">
            <ShieldCheck size={18} />
            Restore Louisiana • Manufactured Home Replacement Help
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Restore Louisiana Grant<br />
            <span className="text-white">Recipients Welcome</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-8 max-w-3xl mx-auto">
            If you've been invited to apply or approved by Restore Louisiana (including Hurricane Francine cases), we can help you select a compliant manufactured home and prepare the purchase details your case manager needs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={20} />
              Call {COMPANY_INFO.phone}
            </a>
            <Button
              to="/contact-gulf-south-homes"
              variant="outline"
              size="lg"
              className="bg-white/95 text-stone-900 hover:bg-white border-2 border-white"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Micro-text */}
          <p className="text-blue-100 text-sm max-w-2xl mx-auto">
            Eligibility and award decisions are made by Restore Louisiana.
          </p>
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-stone-200 shadow-2xl safe-area-inset-bottom">
        <div className="flex gap-2 p-3">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-bold text-base shadow-md active:scale-95 transition-transform"
          >
            <Phone size={18} />
            Call Now
          </a>
          <Button
            to="/contact-gulf-south-homes"
            variant="outline"
            className="flex-1 border-2 border-primary text-primary font-bold py-3"
          >
            Schedule Visit
          </Button>
        </div>
      </div>

      {/* Quick Check Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-700 text-sm font-semibold rounded-md mb-4">
                Self-Qualification
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
                Does This Apply to You?
              </h2>
            </div>

            <div className="scroll-animate space-y-4 mb-8">
              {[
                'Primary residence owned by you (damaged in a declared disaster)',
                'FEMA assessment indicating major or severe damage',
                'Property in one of these parishes: Ascension, Assumption, Jefferson, Lafourche, St. Charles, St. James, St. John, St. Mary, Terrebonne'
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200"
                >
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-stone-700 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="scroll-animate p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-stone-700">
                  <strong className="text-stone-900">For official eligibility status and next steps:</strong> Contact Restore Louisiana at{' '}
                  <a href="tel:866-735-2001" className="text-blue-600 font-bold hover:underline">
                    866-735-2001
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MHU Replacement Details */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="scroll-animate text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-700 text-sm font-semibold rounded-md mb-4">
                Program Details
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                Manufactured Housing Unit (MHU)<br />Replacement Program
              </h2>
            </div>

            {/* Award Caps */}
            <div className="scroll-animate grid md:grid-cols-2 gap-6 mb-12">
              {/* Single-Wide */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Home size={32} />
                  <h3 className="text-2xl font-bold">Single-Wide</h3>
                </div>
                <div className="text-5xl font-black mb-2">$87,000</div>
                <p className="text-blue-100">Maximum award cap</p>
              </div>

              {/* Double-Wide */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Home size={32} />
                  <h3 className="text-2xl font-bold">Double-Wide</h3>
                </div>
                <div className="text-5xl font-black mb-2">$122,000</div>
                <p className="text-emerald-100">Maximum award cap</p>
              </div>
            </div>

            {/* Rules */}
            <div className="scroll-animate bg-white rounded-2xl p-8 border border-stone-200 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <FileText className="text-blue-600" size={28} />
                Program Rules
              </h3>
              <ul className="space-y-4">
                {[
                  'Replacement unit must be installed at same location as damaged unit',
                  'Relocation requires program approval',
                  'Flood zone and elevation requirements may apply',
                  'Installation must meet all local codes and RestoreLA standards'
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-stone-700 text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need / What We Provide */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="scroll-animate text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                How We Help
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What We Need From You */}
              <div className="scroll-animate bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">What We Need From You</h3>
                <ul className="space-y-4">
                  {[
                    'RestoreLA case number or invitation letter (if available)',
                    'Address of damaged property',
                    'Any notes or requirements from your case manager'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-stone-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Provide */}
              <div className="scroll-animate bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">What We Provide</h3>
                <ul className="space-y-4">
                  {[
                    'Selection of compliant manufactured homes',
                    'Detailed specs and purchase agreement for your case manager',
                    'Turnkey coordination (permits, site prep, installation)',
                    'Ongoing communication throughout process'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-stone-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Help + Disclaimer Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-stone-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                Official Restore Louisiana Resources
              </h2>
              <p className="text-stone-600 text-lg">
                For questions about eligibility, timelines, and program rules
              </p>
            </div>

            {/* Official Contact Cards */}
            <div className="scroll-animate grid sm:grid-cols-2 gap-6 mb-12">
              {/* Call Center */}
              <a
                href="tel:866-735-2001"
                className="group p-8 bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                      RestoreLA Call Center
                    </div>
                    <div className="text-2xl font-bold text-stone-900">866-735-2001</div>
                  </div>
                </div>
                <p className="text-stone-600">
                  Official contact for program questions and application status
                </p>
              </a>

              {/* Official Website */}
              <a
                href="https://restore.la.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-white rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <ExternalLink size={28} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
                      Official Website
                    </div>
                    <div className="text-2xl font-bold text-stone-900">restore.la.gov</div>
                  </div>
                </div>
                <p className="text-stone-600">
                  Program details, FAQs, and application information
                </p>
              </a>
            </div>

            {/* Disclaimer Box */}
            <div className="scroll-animate p-8 bg-blue-900 text-white rounded-2xl border-2 border-blue-800 shadow-xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-blue-300 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-3">Important Disclaimer</h3>
                  <p className="text-blue-100 leading-relaxed text-base">
                    Gulf South Homes is not a government agency and is not affiliated with the State of Louisiana or Restore Louisiana. Program eligibility, timelines, and award amounts are determined by Restore Louisiana.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="scroll-animate text-center mt-12">
              <p className="text-stone-600 text-lg mb-6">
                Have questions about how we can help with your RestoreLA grant?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={20} />
                  Call {COMPANY_INFO.phone}
                </a>
                <Button
                  to="/contact-gulf-south-homes"
                  variant="outline"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add padding at bottom for mobile sticky CTA */}
      <div className="lg:hidden h-20"></div>
    </div>
    </>
  );
};

export default LARestore;
