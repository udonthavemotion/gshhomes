import React, { useEffect, useRef } from 'react';

export interface LogoItem {
  slug: string;
  displayName: string;
  logoPath: string;
  logoAlt: string;
}

interface LogoScrollerProps {
  logos: LogoItem[];
  className?: string;
}

const LogoScroller: React.FC<LogoScrollerProps> = ({
  logos,
  className = '',
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || !scrollerInnerRef.current) {
      return;
    }

    // Clone items for seamless infinite scroll
    const scrollerInner = scrollerInnerRef.current;
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });
  }, [logos]);

  return (
    <div className={`scroller ${className}`} ref={scrollerRef} role="region" aria-label="Logo carousel">
      <div className="scroller__inner" ref={scrollerInnerRef}>
        {logos.map((logo) => (
          <img
            key={logo.slug}
            className="scroller__img"
            src={logo.logoPath}
            alt={logo.logoAlt}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.src = '/assets/images/logo/logo.png';
              target.alt = `${logo.displayName} logo placeholder`;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;

