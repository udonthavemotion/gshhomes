import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { LENDERS } from '../data/lenders';
import type { Lender } from '../data/lenders';

interface LendersCarouselProps {
  autoPlayInterval?: number; // milliseconds between slides (default: 6000)
  className?: string;
}

export const LendersCarousel: React.FC<LendersCarouselProps> = ({
  autoPlayInterval = 6000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const totalSlides = LENDERS.length;

  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // Auto-play effect
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isHovered, autoPlayInterval, goToNext]);

  // Entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const currentLender: Lender = LENDERS[currentIndex];

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Lenders carousel"
      aria-roledescription="carousel"
    >
      {/* Main Carousel Container */}
      <div
        className={`
          relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8
          transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Card Container with Glassmorphism */}
        <div className="relative group">
          {/* Glow Effect on Hover */}
          <div
            className="
              absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary
              rounded-3xl opacity-0 group-hover:opacity-20 blur-xl
              transition-opacity duration-500
            "
            aria-hidden="true"
          />

          {/* Main Card */}
          <div
            className="
              relative bg-white/95 backdrop-blur-md
              rounded-2xl shadow-2xl
              border border-white/50
              overflow-hidden
              transform transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              hover:scale-[1.02]
            "
          >
            {/* Decorative Top Border */}
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />

            {/* Card Content */}
            <div className="p-8 sm:p-12">
              {/* Trust Badge */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    inline-flex items-center gap-2 px-4 py-2
                    bg-gradient-to-r from-primary/10 to-accent/10
                    border border-primary/20
                    rounded-full
                    text-sm font-semibold text-primary
                  "
                >
                  <Shield size={16} className="text-accent" />
                  <span>Trusted Partner</span>
                </div>
              </div>

              {/* Lender Logo */}
              <div
                className="
                  relative w-full h-32 sm:h-40 mb-6
                  flex items-center justify-center
                  transition-transform duration-500
                  group-hover:scale-105
                "
                role="img"
                aria-label={currentLender.logoAlt}
              >
                <img
                  src={currentLender.logoPath}
                  alt={currentLender.logoAlt}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Lender Name */}
              <h3 className="text-center text-2xl sm:text-3xl font-display font-bold text-stone-900 mb-2">
                {currentLender.displayName}
              </h3>

              {/* Slide Counter */}
              <p className="text-center text-sm text-stone-500">
                {currentIndex + 1} of {totalSlides}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:-left-16 sm:-right-16 pointer-events-none">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="
              pointer-events-auto
              w-12 h-12 sm:w-14 sm:h-14
              flex items-center justify-center
              bg-white/95 backdrop-blur-md
              border border-stone-200
              rounded-full
              text-stone-700 hover:text-primary
              shadow-lg hover:shadow-xl
              transition-all duration-300
              hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              group
            "
            aria-label="Previous lender"
          >
            <ChevronLeft
              size={24}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="
              pointer-events-auto
              w-12 h-12 sm:w-14 sm:h-14
              flex items-center justify-center
              bg-white/95 backdrop-blur-md
              border border-stone-200
              rounded-full
              text-stone-700 hover:text-primary
              shadow-lg hover:shadow-xl
              transition-all duration-300
              hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              group
            "
            aria-label="Next lender"
          >
            <ChevronRight
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Lender slides">
        {LENDERS.map((lender, index) => (
          <button
            key={lender.slug}
            onClick={() => goToSlide(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }
            `}
            role="tab"
            aria-label={`Go to ${lender.displayName}`}
            aria-selected={index === currentIndex}
            aria-controls={`slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LendersCarousel;
