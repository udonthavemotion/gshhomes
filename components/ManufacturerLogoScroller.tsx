import React, { useEffect, useRef } from 'react';
import { MANUFACTURERS, Manufacturer } from '../data/manufacturers';

interface ManufacturerLogoScrollerProps {
  manufacturers?: Manufacturer[];
  className?: string;
}

const ManufacturerLogoScroller: React.FC<ManufacturerLogoScrollerProps> = ({
  manufacturers = MANUFACTURERS,
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
  }, [manufacturers]);

  return (
    <div className={`scroller ${className}`} ref={scrollerRef}>
      <div className="scroller__inner" ref={scrollerInnerRef}>
        {manufacturers.map((manufacturer) => (
          <img
            key={manufacturer.slug}
            className="scroller__img"
            src={manufacturer.logoPath}
            alt={manufacturer.logoAlt}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.src = '/assets/images/logo/logo.png';
              target.alt = `${manufacturer.displayName} logo placeholder`;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ManufacturerLogoScroller;

