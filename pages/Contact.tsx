import React from 'react';
import { COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';
import GlassmorphicMapCard from '../components/GlassmorphicMapCard';

const Contact: React.FC = () => {

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.contact.title}
        description={SEO_CONFIG.contact.description}
        canonical={SEO_CONFIG.contact.canonical}
        ogImage={SEO_CONFIG.contact.ogImage}
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
          <source src="/assets/images/awards/contact.mp4" type="video/mp4" />
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
            <Phone size={16} />
            We're Here to Help
          </div>

          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Contact Us
          </h1>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            We are here to help you find your way home.
          </p>
        </div>
      </section>

      {/* Glassmorphic Map Section */}
      <div className="py-24 md:py-32 px-4 md:px-6 lg:px-8 scroll-animate">
        <GlassmorphicMapCard containerHeight="min-h-[600px] md:min-h-[700px]" />
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-24 md:py-32 scroll-animate">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 mb-4">Send us a <span className="block mt-2 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Message</span></h2>
            <p className="text-stone-600 text-lg">Fill out the form below and we will get back to you within 24 hours.</p>
          </div>

          {/* GoHighLevel Contact Form Embed */}
          <div className="w-full">
            <iframe
              src="https://crm.gshforms.com/widget/form/ZRYIIk3TWJ6OI96TkkBg"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                minHeight: '825px'
              }}
              id="inline-ZRYIIk3TWJ6OI96TkkBg"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Us"
              data-height="825"
              data-layout-iframe-id="inline-ZRYIIk3TWJ6OI96TkkBg"
              data-form-id="ZRYIIk3TWJ6OI96TkkBg"
              title="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
