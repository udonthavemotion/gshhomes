import React, { useEffect, useRef } from 'react';
import { MANUFACTURERS, Manufacturer } from '../data/manufacturers';

interface ManufacturerLogoScrollerProps {
  manufacturers?: Manufacturer[];
  className?: string;
  onManufacturerClick?: (slug: string) => void;
}

const ManufacturerLogoScroller: React.FC<ManufacturerLogoScrollerProps> = ({
  manufacturers = MANUFACTURERS,
  className = '',
  onManufacturerClick,
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

  const handleClick = (slug: string) => {
    if (onManufacturerClick) {
      onManufacturerClick(slug);
    } else {
      // Default behavior: scroll to manufacturer section
      const element = document.getElementById(`manufacturer-${slug}`);
      if (element) {
        const offset = 100; // Offset for fixed headers if any
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className={`manufacturer-carousel-wrapper ${className}`} ref={scrollerRef}>
      <div className="scroller scroller--manufacturers">
        <div className="scroller__inner scroller__inner--manufacturers" ref={scrollerInnerRef}>
          {manufacturers.map((manufacturer) => (
            <img
              key={manufacturer.slug}
              onClick={() => handleClick(manufacturer.slug)}
              className="scroller__img scroller__img--manufacturers"
              src={manufacturer.logoPath}
              alt={manufacturer.logoAlt}
              loading="lazy"
              decoding="async"
              role="button"
              tabIndex={0}
              aria-label={`Scroll to ${manufacturer.displayName}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(manufacturer.slug);
                }
              }}
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
    </div>
  );
};

export default ManufacturerLogoScroller;

