import React from 'react';
import { Award, MapPin, Star, Clock } from 'lucide-react';

interface TrustRibbonProps {
  showMap?: boolean;
  showYear?: boolean;
  showRating?: boolean;
  variant?: 'compact' | 'full';
}

/**
 * Compact Trust Ribbon Component
 * Single-line, ultra-compact trust signals that don't take additional scroll space
 * Seamlessly integrated inline after hero sections
 */
const TrustRibbon: React.FC<TrustRibbonProps> = ({
  showMap = true,
  showYear = true,
  showRating = true,
  variant = 'compact'
}) => {
  if (variant === 'compact') {
    return (
      <div className="py-3 px-4 bg-gradient-to-r from-stone-50 via-white to-stone-50 border-y border-stone-200/30">
        <div className="max-w-5xl mx-auto flex items-center justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {showYear && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Award size={14} className="text-yellow-700 flex-shrink-0" />
              <span className="font-semibold text-[var(--color-primary)]">Est. 1995</span>
            </div>
          )}

          {showMap && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm">
              <MapPin size={14} className="text-[var(--color-cta)] flex-shrink-0" />
              <span className="font-semibold text-[var(--color-primary)]">Houma, LA</span>
            </div>
          )}

          {showRating && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Star size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)] flex-shrink-0" />
              <span className="font-semibold text-[var(--color-primary)]">BBB Accredited</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 text-xs sm:text-sm">
            <Clock size={14} className="text-[var(--color-primary)] flex-shrink-0" />
            <span className="font-semibold text-[var(--color-primary)]">30+ Years</span>
          </div>
        </div>
      </div>
    );
  }

  // Full variant - Premium "Seal of Excellence" design
  return (
    <section className="relative py-12 sm:py-16 px-4 overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-blue-50/30"></div>

      {/* Ambient glow layers */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[var(--color-primary)] opacity-[0.04] blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[var(--color-accent)] opacity-[0.03] blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Optional header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-2" style={{ fontFamily: 'Outfit' }}>
            Louisiana's Trusted Home Experts
          </h2>
          <p className="text-sm text-stone-600 font-medium" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Three decades of helping families find their dream homes
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {showYear && (
            <div className="group relative">
              {/* Card with layered glassmorphism */}
              <div className="relative h-full p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-stone-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(30,58,95,0.15)] transition-all duration-500 hover:-translate-y-1">
                {/* Inner gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col items-center gap-3">
                  {/* Premium icon container */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 group-hover:from-yellow-200 group-hover:to-amber-200 shadow-[0_4px_16px_rgba(251,191,36,0.25)] group-hover:shadow-[0_6px_24px_rgba(251,191,36,0.4)] transition-all duration-500 group-hover:scale-110">
                    <Award size={26} className="text-yellow-700" strokeWidth={2.5} />
                  </div>

                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'Outfit' }}>1995</span>
                    <span className="block text-xs font-semibold text-stone-600 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans' }}>Established</span>
                    <span className="block text-[10px] font-medium text-stone-500 mt-1">Louisiana Born</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showMap && (
            <div className="group relative">
              <div className="relative h-full p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-stone-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(211,47,47,0.15)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-100 to-rose-100 group-hover:from-red-200 group-hover:to-rose-200 shadow-[0_4px_16px_rgba(211,47,47,0.25)] group-hover:shadow-[0_6px_24px_rgba(211,47,47,0.4)] transition-all duration-500 group-hover:scale-110">
                    <MapPin size={26} className="text-[var(--color-cta)]" strokeWidth={2.5} />
                  </div>

                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'Outfit' }}>Houma</span>
                    <span className="block text-xs font-semibold text-stone-600 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans' }}>Louisiana</span>
                    <span className="block text-[10px] font-medium text-stone-500 mt-1">Local Experts</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showRating && (
            <div className="group relative">
              <div className="relative h-full p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-stone-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(74,144,226,0.15)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 group-hover:from-blue-200 group-hover:to-sky-200 shadow-[0_4px_16px_rgba(74,144,226,0.25)] group-hover:shadow-[0_6px_24px_rgba(74,144,226,0.4)] transition-all duration-500 group-hover:scale-110">
                    <Star size={26} className="text-[var(--color-accent)] fill-[var(--color-accent)]" strokeWidth={2.5} />
                  </div>

                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'Outfit' }}>BBB</span>
                    <span className="block text-xs font-semibold text-stone-600 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans' }}>Accredited</span>
                    <span className="block text-[10px] font-medium text-stone-500 mt-1">Trusted Business</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="group relative">
            <div className="relative h-full p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-stone-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(30,58,95,0.15)] transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-stone-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 group-hover:from-stone-300 group-hover:to-stone-400 shadow-[0_4px_16px_rgba(30,58,95,0.25)] group-hover:shadow-[0_6px_24px_rgba(30,58,95,0.4)] transition-all duration-500 group-hover:scale-110">
                  <Clock size={26} className="text-[var(--color-primary)]" strokeWidth={2.5} />
                </div>

                <div className="text-center">
                  <span className="block text-2xl font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'Outfit' }}>30+</span>
                  <span className="block text-xs font-semibold text-stone-600 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans' }}>Years</span>
                  <span className="block text-[10px] font-medium text-stone-500 mt-1">Family Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustRibbon;
