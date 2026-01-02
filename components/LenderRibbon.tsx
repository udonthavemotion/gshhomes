import React from 'react';

interface LenderPartner {
  name: string;
  href?: string;
}

interface LenderRibbonProps {
  partners: LenderPartner[];
  className?: string;
}

const LenderRibbon: React.FC<LenderRibbonProps> = ({ partners, className = '' }) => {
  // Create ARIA label with all partner names
  const ariaLabel = `Lending partners: ${partners.map(p => p.name).join(', ')}`;

  return (
    <div 
      className={`relative w-full overflow-hidden lender-ribbon-entrance ${className}`}
      aria-label={ariaLabel}
      role="marquee"
    >
      {/* Shimmer Effect Overlay */}
      <div className="lender-ribbon-shimmer absolute inset-0 pointer-events-none z-10" aria-hidden="true"></div>
      
      {/* Glassmorphic Ribbon Container */}
      <div 
        className="relative py-4 sm:py-3 lender-ribbon-container"
        style={{
          backgroundColor: 'rgba(74, 144, 226, 0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Marquee Track - Desktop: Animated, Mobile: Animated */}
        <div className="lender-ribbon-track whitespace-nowrap flex items-center gap-8 sm:gap-12">
          {/* Render partners twice for seamless infinite loop */}
          {[...Array(2)].map((_, setIndex) => (
            <React.Fragment key={setIndex}>
              {partners.map((partner, idx) => (
                <React.Fragment key={`${setIndex}-${idx}`}>
                  {partner.href ? (
                    <a
                      href={partner.href}
                      className="lender-ribbon-text inline-flex items-center text-white font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:text-white"
                      style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                      {partner.name}
                    </a>
                  ) : (
                    <span
                      className="lender-ribbon-text inline-flex items-center text-white font-bold text-base sm:text-lg tracking-wide uppercase"
                      style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                      {partner.name}
                    </span>
                  )}
                  {/* Separator Bullet */}
                  {idx < partners.length - 1 && (
                    <span 
                      className="inline-block text-white text-sm"
                      style={{ opacity: 0.3 }}
                      aria-hidden="true"
                    >
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
              {/* Add separator between sets */}
              <span 
                className="inline-block text-white text-sm"
                style={{ opacity: 0.3 }}
                aria-hidden="true"
              >
                •
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Fallback for Reduced Motion - Static Grid */}
        <div className="lender-ribbon-static hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {partners.map((partner, idx) => (
                <React.Fragment key={idx}>
                  {partner.href ? (
                    <a
                      href={partner.href}
                      className="text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-colors hover:text-white/80"
                      style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                      {partner.name}
                    </a>
                  ) : (
                    <span
                      className="text-white font-bold text-sm sm:text-base tracking-wide uppercase"
                      style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                      {partner.name}
                    </span>
                  )}
                  {idx < partners.length - 1 && (
                    <span 
                      className="text-white text-xs"
                      style={{ opacity: 0.3 }}
                      aria-hidden="true"
                    >
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LenderRibbon;

