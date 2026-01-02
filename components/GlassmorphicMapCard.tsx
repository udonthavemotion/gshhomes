import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, ShoppingBag, Users } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface GlassmorphicMapCardProps {
  mapEmbedUrl?: string;
  containerHeight?: string;
}

type HoursTab = 'sales' | 'parts';

const GlassmorphicMapCard: React.FC<GlassmorphicMapCardProps> = ({
  mapEmbedUrl = "https://maps.google.com/maps?q=1986%20Highway%20182%2C%20Houma%2C%20LA%2070364&t=&z=13&ie=UTF8&iwloc=&output=embed",
  containerHeight = "min-h-[600px] md:min-h-[700px]"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<HoursTab>('sales');

  useEffect(() => {
    // Trigger entrance animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative w-full ${containerHeight} rounded-lg overflow-hidden`}>
      {/* Map Container */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <iframe
          src={mapEmbedUrl}
          className="w-full h-full"
          loading="lazy"
          title="Gulf South Homes Location Map"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>

      {/* Floating Business Card - Desktop: top-right, Mobile: bottom */}
      <div
        className={`absolute bottom-6 left-4 right-4 md:bottom-auto md:top-8 md:left-auto md:right-8 md:max-w-sm
                    bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl
                    border border-white/20 border-l-[3px] border-l-blue-500
                    p-5 md:p-8
                    transition-all duration-500 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    hover:shadow-3xl hover:bg-white/95 hover:border-white/30 hover:scale-[1.01]`}
        style={{
          boxShadow: '0 20px 40px rgba(74, 144, 226, 0.2), 0 0 40px rgba(74, 144, 226, 0.15)'
        }}
      >

        {/* Icon + Header */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-stone-200">
          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl
                          bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500
                          flex items-center justify-center shadow-lg shadow-blue-900/30
                          transition-transform duration-300 hover:rotate-3">
            <MapPin className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 font-outfit leading-tight">
              Visit Our Showroom
            </h3>
            <p className="text-xs md:text-sm text-stone-500 font-jakarta mt-0.5">
              Sales & Service Center
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-6 pb-6 border-b border-stone-200">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <span className="font-jakarta text-sm text-stone-700 leading-snug">
              {COMPANY_INFO.address}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="font-jakarta text-sm text-stone-700 hover:text-blue-900
                         transition-colors duration-300 hover:underline underline-offset-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:rounded"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Hours Section with Tabs */}
        <div className="mb-6">
          {/* Tab Headers */}
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <div className="flex-1 flex gap-2">
              <button
                onClick={() => setActiveTab('sales')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg
                           text-xs md:text-sm font-semibold font-outfit
                           transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500/30
                           ${activeTab === 'sales'
                             ? 'bg-blue-900 text-white shadow-md'
                             : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                           }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Sales</span>
              </button>
              <button
                onClick={() => setActiveTab('parts')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg
                           text-xs md:text-sm font-semibold font-outfit
                           transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500/30
                           ${activeTab === 'parts'
                             ? 'bg-blue-900 text-white shadow-md'
                             : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                           }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Parts</span>
              </button>
            </div>
          </div>

          {/* Hours Display */}
          <div className="pl-8 md:pl-9">
            {activeTab === 'sales' && (
              <div className="font-jakarta text-xs md:text-sm text-stone-700 space-y-1 animate-fade-in">
                <p className="flex justify-between">
                  <span className="text-stone-500">Mon-Fri:</span>
                  <span className="font-medium">{COMPANY_INFO.salesHours.weekdays}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-500">Sat:</span>
                  <span className="font-medium">{COMPANY_INFO.salesHours.saturday}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-500">Sun:</span>
                  <span className="font-medium text-stone-400">{COMPANY_INFO.salesHours.sunday}</span>
                </p>
              </div>
            )}

            {activeTab === 'parts' && (
              <div className="font-jakarta text-xs md:text-sm text-stone-700 space-y-1 animate-fade-in">
                <p className="flex justify-between">
                  <span className="text-stone-500">Mon-Fri:</span>
                  <span className="font-medium">{COMPANY_INFO.partsHours.weekdays}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-500">Sat:</span>
                  <span className="font-medium text-stone-400">{COMPANY_INFO.partsHours.saturday}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-500">Sun:</span>
                  <span className="font-medium text-stone-400">{COMPANY_INFO.partsHours.sunday}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://maps.google.com/maps?q=1986%20Highway%20182%2C%20Houma%2C%20LA%2070364"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-[#D32F2F] to-[#E53935]
                     text-white font-semibold py-3 px-6 rounded-xl
                     text-center text-sm md:text-base
                     shadow-lg shadow-red-500/30
                     hover:shadow-xl hover:shadow-red-500/40
                     hover:scale-[1.02]
                     active:scale-[0.98]
                     transition-all duration-300
                     font-outfit
                     hover:from-[#E53935] hover:to-[#F44336]
                     focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default GlassmorphicMapCard;
