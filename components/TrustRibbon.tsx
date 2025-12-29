import React from 'react';
import { Award, MapPin, Star, Clock } from 'lucide-react';

interface TrustRibbonProps {
  showMap?: boolean;
  showYear?: boolean;
  showRating?: boolean;
  variant?: 'compact' | 'full'; // 'compact' for inline, 'full' for prominent section
}

/**
 * Trust ribbon component displaying credentials, location, and tenure
 * Positioned early in page to build confidence before CTA
 * Addresses TRUST_TOO_LATE risk (build confidence within first 15 seconds)
 */
const TrustRibbon: React.FC<TrustRibbonProps> = ({
  showMap = true,
  showYear = true,
  showRating = true,
  variant = 'compact'
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 py-3 px-4 text-sm font-medium text-stone-700">
        {showYear && (
          <div className="flex items-center gap-1.5">
            <Award size={16} className="text-yellow-600" />
            <span>Est. 1995</span>
          </div>
        )}

        {showMap && (
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-red-600" />
            <span>Houma, LA</span>
          </div>
        )}

        {showRating && (
          <div className="flex items-center gap-1.5">
            <Star size={16} className="text-yellow-600 fill-yellow-600" />
            <span>BBB Accredited</span>
          </div>
        )}

        <div className="flex items-center gap-1.5">
          <Clock size={16} className="text-blue-600" />
          <span>30+ Years</span>
        </div>
      </div>
    );
  }

  // Full variant - more prominent, section-style
  return (
    <section className="bg-gradient-to-r from-stone-50 to-stone-100 py-6 px-4 sm:py-8 border-y border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {showYear && (
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <Award size={24} className="text-yellow-600" />
              <span className="font-bold text-lg">1995</span>
              <span className="text-xs text-stone-600 text-center">Est. Year</span>
            </div>
          )}

          {showMap && (
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <MapPin size={24} className="text-red-600" />
              <span className="font-bold text-lg">Houma, LA</span>
              <span className="text-xs text-stone-600 text-center">Local Presence</span>
            </div>
          )}

          {showRating && (
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <Star size={24} className="text-yellow-600 fill-yellow-600" />
              <span className="font-bold text-lg">BBB</span>
              <span className="text-xs text-stone-600 text-center">Accredited</span>
            </div>
          )}

          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <Clock size={24} className="text-blue-600" />
            <span className="font-bold text-lg">30+ yrs</span>
            <span className="text-xs text-stone-600 text-center">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustRibbon;
