import React from 'react';
import { COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
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
        <div className="absolute inset-0 bg-black/40"></div>

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

          <h1 className="font-bold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-[900px] mx-auto break-words mb-6">
            Contact Us
          </h1>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-[700px] mx-auto mt-4">
            We are here to help you find your way home.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Visit Our Sales Center</h2>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-stone-900">Address</h4>
                            <p className="text-stone-600">{COMPANY_INFO.address}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-stone-900">Phone</h4>
                            <p className="text-stone-600">{COMPANY_INFO.phone}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Clock className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-stone-900">Hours</h4>
                            <p className="text-stone-600">Mon-Fri: {COMPANY_INFO.hours.weekdays}</p>
                            <p className="text-stone-600">Sat: {COMPANY_INFO.hours.saturday}</p>
                            <p className="text-stone-600">Sun: {COMPANY_INFO.hours.sunday}</p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Mock Map */}
             <div className="bg-stone-200 h-64 rounded-xl w-full flex items-center justify-center text-stone-500 font-medium">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=1986%20Highway%20182%2C%20Houma%2C%20LA%2070364&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="rounded-xl grayscale opacity-80"
                ></iframe>
             </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Send us a Message</h2>
            <p className="text-stone-600 mb-6">Fill out the form below and we will get back to you within 24 hours.</p>

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
    </div>
  );
};

export default Contact;
