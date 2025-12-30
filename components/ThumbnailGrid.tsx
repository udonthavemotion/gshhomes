import React, { useRef, useCallback } from 'react';

interface ThumbnailGridProps {
  /** Array of image URLs */
  images: string[];
  /** Home name for alt text */
  homeName: string;
  /** Callback when thumbnail is clicked - receives index and trigger element */
  onImageClick: (index: number, triggerElement: HTMLElement | null) => void;
  /** Optional className for the grid container */
  className?: string;
  /** Number of images to eager load (default: 6) */
  eagerLoadCount?: number;
  /** Optional grid column configuration */
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

/**
 * Responsive thumbnail grid for image galleries
 * Features: lazy loading, CLS prevention, focus states, hover effects
 * Stores trigger ref for focus restoration when lightbox closes
 */
const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({
  images,
  homeName,
  onImageClick,
  className = '',
  eagerLoadCount = 6,
  columns = { sm: 2, md: 3, lg: 3 },
}) => {
  // Store refs to all thumbnail buttons for focus restoration
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = useCallback(
    (index: number) => {
      const triggerElement = thumbnailRefs.current[index];
      onImageClick(index, triggerElement);
    },
    [onImageClick]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(index);
      }
    },
    [handleClick]
  );

  // Generate grid classes based on column config
  const gridClasses = [
    'grid gap-3 md:gap-4',
    `grid-cols-1`,
    columns.sm ? `sm:grid-cols-${columns.sm}` : 'sm:grid-cols-2',
    columns.md ? `md:grid-cols-${columns.md}` : 'md:grid-cols-3',
    columns.lg ? `lg:grid-cols-${columns.lg}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={gridClasses} role="list" aria-label={`${homeName} photo gallery`}>
      {images.map((img, idx) => (
        <button
          key={`gallery-thumb-${idx}`}
          ref={(el) => {
            thumbnailRefs.current[idx] = el;
          }}
          onClick={() => handleClick(idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
          aria-label={`View ${homeName} image ${idx + 1} of ${images.length} in gallery`}
          role="listitem"
        >
          {/* Image with WebP support and explicit dimensions for CLS prevention */}
          <picture>
            <source 
              srcSet={img.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
              type="image/webp" 
            />
            <img
              src={img}
              alt={`${homeName} - Image ${idx + 1}`}
              width={600}
              height={450}
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading={idx < eagerLoadCount ? 'eager' : 'lazy'}
              onError={(e) => {
                // Hide broken images gracefully
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                // Also hide the parent button
                if (target.parentElement) {
                  target.parentElement.style.display = 'none';
                }
              }}
            />
          </picture>

          {/* Hover overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Expand icon on hover */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-stone-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>

          {/* Image number badge */}
          <div 
            className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          >
            {idx + 1} / {images.length}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ThumbnailGrid;

