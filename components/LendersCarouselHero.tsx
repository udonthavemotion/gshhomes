import React from 'react';
import { LENDERS } from '../data/lenders';

/**
 * LendersCarouselHero - Minimal scrolling lender logos for hero video overlay
 *
 * Design Philosophy:
 * - Ultra-transparent glassmorphic background
 * - Seamless auto-scroll animation (no buttons, no clicks)
 * - Positioned at bottom of video hero
 * - Feels like part of the video itself
 * - Inspired by Home page marquee banner
 *
 * Implementation:
 * - CSS-first approach (minimal React overhead)
 * - Hardware-accelerated animations (will-change: transform)
 * - Infinite seamless loop with duplicated content
 * - Fade masks on left/right edges for smooth entry/exit
 * - Responsive: adapts logo size and speed on mobile
 */
const LendersCarouselHero: React.FC = () => {
  return (
    <div className="lenders-hero-wrapper">
      {/* Label - subtle, optional */}
      <div className="lenders-hero-label">
        <span className="lenders-hero-label-text">Trusted Lending Partners</span>
      </div>

      {/* Scrolling Container */}
      <div className="lenders-hero-container">
        {/* Fade Masks */}
        <div className="lenders-hero-fade-left" aria-hidden="true"></div>
        <div className="lenders-hero-fade-right" aria-hidden="true"></div>

        {/* Scrolling Track */}
        <div className="lenders-hero-track">
          {/* Duplicate logos twice for seamless infinite scroll */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="lenders-hero-content">
              {LENDERS.map((lender) => (
                <div key={`${setIndex}-${lender.slug}`} className="lenders-hero-item">
                  <img
                    src={lender.logoPath}
                    alt={lender.logoAlt}
                    className="lenders-hero-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LendersCarouselHero;
