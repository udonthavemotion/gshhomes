import React from 'react';
import { HomeModel } from '../types';
import { MANUFACTURERS } from '../data/manufacturers';
import HomeCard from './HomeCard';

interface ManufacturerSectionProps {
  manufacturerName: string;
  homes: HomeModel[];
  index: number;
}

const ManufacturerSection: React.FC<ManufacturerSectionProps> = ({
  manufacturerName,
  homes,
  index,
}) => {
  // Find manufacturer data for logo and tagline
  const manufacturer = MANUFACTURERS.find(
    (m) =>
      m.displayName === manufacturerName ||
      manufacturerName.includes(m.displayName.split(' ')[0]) ||
      (manufacturerName === 'BG Manufacturing' && m.slug === 'bg')
  );

  // Subtle background alternation (more visible for mobile)
  const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-stone-50';

  // Don't render empty sections
  if (homes.length === 0) return null;

  return (
    <section
      className={`relative py-12 md:py-16 ${bgClass} transition-colors duration-500`}
      data-manufacturer={manufacturerName}
      aria-label={`Manufacturer section: ${manufacturerName}`}
    >
      {/* Subtle top border - gradient line (more visible on mobile) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent opacity-70" />

      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Manufacturer Header - Centered on Mobile, Left-Aligned on Desktop */}
        <div className="mb-8 md:mb-12 scroll-animate">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6">
            {/* Manufacturer Logo - Centered on mobile, left-aligned on desktop */}
            {manufacturer?.logoPath && (
              <div className="relative flex-shrink-0">
                <img
                  src={manufacturer.logoPath}
                  alt={manufacturer.logoAlt || `${manufacturerName} logo`}
                  className="h-12 md:h-16 w-auto object-contain mx-auto sm:mx-0 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  width="auto"
                  height="48"
                />
                {/* Subtle glow effect (enhanced visibility) */}
                <div className="absolute inset-0 bg-primary/10 blur-xl -z-10" />
              </div>
            )}

            {/* Manufacturer Name + Count - Centered on mobile, left-aligned on desktop */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mb-1">
                {manufacturerName}
              </h2>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-stone-600 flex-wrap">
                <span className="text-sm md:text-base">
                  {homes.length} {homes.length === 1 ? 'Model' : 'Models'}
                </span>
                {manufacturer?.shortTagline && (
                  <>
                    <span className="text-stone-300 hidden sm:inline">•</span>
                    <span className="text-sm italic text-stone-500 hidden sm:inline">
                      {manufacturer.shortTagline}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Subtle decorative element - desktop only */}
            <div className="hidden lg:block flex-1 max-w-xs">
              <div className="h-px bg-gradient-to-r from-stone-200 via-stone-300 to-transparent" />
            </div>
          </div>
        </div>

        {/* Homes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {homes.map((home, idx) => (
            <div
              key={home.id}
              className="scroll-animate"
              style={{ animationDelay: `${Math.min(idx * 50, 500)}ms` }}
            >
              <HomeCard home={home} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade transition to next section */}
      {index < 10 && (
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-stone-50/50 pointer-events-none" />
      )}
    </section>
  );
};

export default ManufacturerSection;
