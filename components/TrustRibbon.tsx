import React, { useState, useEffect } from 'react';
import { Award, MapPin, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface TrustRibbonProps {
  showMap?: boolean;
  showYear?: boolean;
  showRating?: boolean;
  variant?: 'compact' | 'full';
}

/**
 * Trust Ribbon Carousel Component
 * Slides at the bottom of hero sections as a ribbon overlay
 * No background, no cards - just text that floats over video
 */
const TrustRibbon: React.FC<TrustRibbonProps> = ({
  showMap = true,
  showYear = true,
  showRating = true,
  variant = 'compact'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const credentials = [
    {
      icon: Award,
      text: 'Est. 1995',
      color: 'text-yellow-400',
      show: showYear
    },
    {
      icon: MapPin,
      text: 'Houma, LA',
      color: 'text-red-400',
      show: showMap
    },
    {
      icon: Star,
      text: 'BBB Accredited',
      color: 'text-blue-400',
      show: showRating
    },
    {
      icon: Clock,
      text: '30+ Years',
      color: 'text-white',
      show: true
    }
  ].filter(c => c.show);

  // Auto-scroll carousel
  useEffect(() => {
    if (!autoScroll || credentials.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % credentials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [autoScroll, credentials.length]);

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev - 1 + credentials.length) % credentials.length);
    setTimeout(() => setAutoScroll(true), 5000);
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % credentials.length);
    setTimeout(() => setAutoScroll(true), 5000);
  };

  if (variant === 'compact') {
    const current = credentials[currentIndex];
    const IconComponent = current.icon;

    return (
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Ribbon container - no background, just text overlay at bottom of hero */}
        <div className="relative h-16 flex items-center justify-center px-4">
          {/* Gradient fade (subtle, dark) for text readability on video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent pointer-events-none"></div>

          {/* Center carousel item */}
          <div className="relative z-10 flex items-center justify-center gap-3 text-center">
            <IconComponent size={24} className={`${current.color} flex-shrink-0 drop-shadow-lg`} />
            <span className="text-lg sm:text-xl font-bold text-white drop-shadow-lg whitespace-nowrap">
              {current.text}
            </span>
          </div>

          {/* Left arrow */}
          {credentials.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous credential"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Right arrow */}
          {credentials.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Next credential"
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* Dot indicators */}
          {credentials.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {credentials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoScroll(false);
                    setCurrentIndex(idx);
                    setTimeout(() => setAutoScroll(true), 5000);
                  }}
                  className={`transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-white w-6 h-1.5 rounded-full'
                      : 'bg-white/50 w-1.5 h-1.5 rounded-full hover:bg-white/70'
                  }`}
                  aria-label={`Go to credential ${idx + 1}`}
                />
              ))}
            </div>
          )}
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
