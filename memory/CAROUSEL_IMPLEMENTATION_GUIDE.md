# Carousel Implementation Guide for Home Section

This guide provides instructions for implementing carousel components in a future project's home section. Two carousel implementations are available: **Embla Carousel** (for image galleries) and **Swiper** (for featured content cards).

---

## 🎯 Quick Decision Guide

**Use Embla Carousel when:**
- Displaying simple image galleries (photos, testimonials, customer photos)
- Need parallax/scaling effects
- Want lightweight, minimal dependencies
- Autoplay with pause-on-hover is sufficient

**Use Swiper when:**
- Displaying complex cards with content (homes, products, featured items)
- Need advanced navigation controls
- Want pagination dots and slide counters
- Need responsive breakpoints with varying slides per view

---

## 📦 Option 1: Embla Carousel (Image Gallery)

### Dependencies

```bash
npm install embla-carousel@^8.6.0 embla-carousel-react@^8.6.0 embla-carousel-autoplay@^8.6.0
```

### Component Template

Create a file: `components/ImageCarousel.tsx`

```typescript
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

/**
 * ImageCarousel - Responsive carousel with parallax effects
 *
 * Features:
 * - Autoplay with configurable intervals (pauses on hover)
 * - Parallax scaling effect (center image larger)
 * - Responsive display: 1 on mobile, 2 on tablet, 3 on desktop
 * - Keyboard navigation support
 * - WCAG AA accessible
 * - Lazy loading images
 */

// Replace with your image paths
const IMAGES = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  // Add more images...
];

interface ImageCarouselProps {
  images?: string[];
  autoplayDelay?: number;
  showDots?: boolean;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images = IMAGES,
  autoplayDelay = 4000,
  showDots = true,
  className = ''
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Embla with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: autoplayDelay,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Calculate scroll progress for parallax effect
  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    setScrollProgress(progress);
  }, [emblaApi]);

  // Set up event listeners
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    onScroll();

    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onScroll);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <div className={`relative w-full ${className}`} role="region" aria-label="Image carousel">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 lg:px-4"
              style={{
                minHeight: '400px', // Reserve space to prevent CLS
              }}
            >
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 ease-out"
                style={{
                  // Parallax scaling effect
                  transform:
                    selectedIndex === index
                      ? 'scale(1.1)'
                      : 'scale(0.9)',
                }}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      {showDots && (
        <div
          className="hidden sm:flex justify-center gap-2 mt-6 sm:mt-8"
          role="group"
          aria-label="Carousel navigation dots"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                index === selectedIndex
                  ? 'bg-primary w-8 sm:w-10'
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : 'false'}
              type="button"
            />
          ))}
        </div>
      )}

      {/* Accessibility: Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing image {selectedIndex + 1} of {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
```

### Usage Example

```typescript
import ImageCarousel from './components/ImageCarousel';

// In your Home component
<ImageCarousel 
  images={myImageArray}
  autoplayDelay={5000}
  showDots={true}
/>
```

---

## 📦 Option 2: Swiper Carousel (Featured Content Cards)

### Dependencies

```bash
npm install swiper@^12.0.3
```

### Component Template

Create a file: `components/FeaturedCarousel.tsx`

```typescript
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Item {
  id: string;
  title: string;
  imageUrl: string;
  // Add other properties as needed
}

interface FeaturedCarouselProps {
  items: Item[];
  renderCard: (item: Item, index: number) => React.ReactNode;
  className?: string;
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ 
  items, 
  renderCard,
  className = ''
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  }, []);

  const goToPrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const goToNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="relative group/carousel">
        {/* Side Navigation Arrows - Desktop Only */}
        <button
          onClick={goToPrev}
          aria-label="Previous item"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 z-20 w-11 h-11 items-center justify-center bg-white rounded-full shadow-lg text-stone-600 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 opacity-0 group-hover/carousel:opacity-100"
        >
          <ChevronLeft size={22} />
        </button>
        
        <button
          onClick={goToNext}
          aria-label="Next item"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 z-20 w-11 h-11 items-center justify-center bg-white rounded-full shadow-lg text-stone-600 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 opacity-0 group-hover/carousel:opacity-100"
        >
          <ChevronRight size={22} />
        </button>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Pagination, A11y, Keyboard]}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={false}
          loop={items.length > 3}
          speed={prefersReducedMotion ? 0 : 500}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          a11y={{
            prevSlideMessage: 'Previous item',
            nextSlideMessage: 'Next item',
            firstSlideMessage: 'This is the first item',
            lastSlideMessage: 'This is the last item',
            paginationBulletMessage: 'Go to item {{index}}',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="!overflow-visible !pb-2"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id} className="!h-auto pb-2">
              {renderCard(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slide Counter - Desktop */}
      <div className="hidden lg:flex items-center justify-center mt-6 gap-4">
        <button
          onClick={goToPrev}
          aria-label="Previous item"
          className="p-2 rounded-full text-stone-400 hover:text-primary hover:bg-stone-100 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-primary">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-stone-300">/</span>
          <span className="text-stone-400">{String(items.length).padStart(2, '0')}</span>
        </div>

        <button
          onClick={goToNext}
          aria-label="Next item"
          className="p-2 rounded-full text-stone-400 hover:text-primary hover:bg-stone-100 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Swipe hint - Mobile */}
      <p className="text-center text-xs text-stone-400 mt-3 lg:hidden">
        Swipe to explore more
      </p>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-slide {
          height: auto;
        }
        
        .swiper {
          padding: 4px;
          margin: -4px;
        }
        
        .swiper-slide:focus-within {
          outline: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .swiper-wrapper {
            transition-duration: 0ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturedCarousel;
```

### Usage Example

```typescript
import FeaturedCarousel from './components/FeaturedCarousel';

// Define your card component
const ProductCard = ({ product, index }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <img src={product.imageUrl} alt={product.title} />
    <div className="p-4">
      <h3>{product.title}</h3>
    </div>
  </div>
);

// In your Home component
<FeaturedCarousel 
  items={products}
  renderCard={(product, index) => (
    <ProductCard product={product} index={index} />
  )}
/>
```

---

## 🎨 Customization Options

### Embla Carousel Customization

**Change autoplay delay:**
```typescript
Autoplay({
  delay: 5000, // 5 seconds instead of 4
})
```

**Disable autoplay:**
```typescript
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: 'center',
});
// Remove Autoplay plugin
```

**Adjust responsive breakpoints:**
```typescript
className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4 px-2"
// Shows 1 on mobile, 2 on tablet, 4 on desktop
```

**Change parallax scale:**
```typescript
transform: selectedIndex === index ? 'scale(1.15)' : 'scale(0.85)'
```

### Swiper Carousel Customization

**Adjust breakpoints:**
```typescript
breakpoints={{
  0: { slidesPerView: 1, spaceBetween: 12 },
  640: { slidesPerView: 2, spaceBetween: 16 },
  1024: { slidesPerView: 4, spaceBetween: 24 },
}}
```

**Change transition speed:**
```typescript
speed={prefersReducedMotion ? 0 : 800} // Slower transition
```

**Enable autoplay:**
```typescript
import { Autoplay } from 'swiper/modules';

modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
autoplay={{
  delay: 4000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
}}
```

---

## ✅ Best Practices

### Performance
- **Optimize images**: Target <150KB per image, use WebP format
- **Lazy loading**: Use `loading="lazy"` for images below the fold
- **Eager load**: Load first 3 images with `loading="eager"`
- **Reserve space**: Set `minHeight` to prevent Cumulative Layout Shift (CLS)

### Accessibility
- Always include `aria-label` attributes
- Support keyboard navigation (Arrow keys)
- Provide screen reader announcements
- Respect `prefers-reduced-motion`
- Use semantic HTML (`role="region"`, `aria-live`)

### Responsive Design
- Test on mobile (375px), tablet (768px), desktop (1920px)
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Ensure touch gestures work on mobile
- Hide/show navigation controls appropriately

### Code Quality
- Use TypeScript for type safety
- Extract reusable components
- Use `useCallback` for event handlers
- Clean up event listeners in `useEffect` cleanup

---

## 🚀 Quick Start Prompt for AI Agent

Copy and customize this prompt:

```
I need to add a carousel component to the home section of my project.

PROJECT CONTEXT:
- Framework: [React/Next.js/etc]
- Styling: [Tailwind CSS/CSS Modules/etc]
- Type: [Image gallery / Featured content cards]

REQUIREMENTS:
- Display [X] items
- Responsive: [1 mobile / 2 tablet / 3 desktop]
- Features: [Autoplay / Keyboard nav / Dots / Arrows]
- Images located at: [path/to/images]

Please implement using [Embla Carousel / Swiper] based on the guide in CAROUSEL_IMPLEMENTATION_GUIDE.md.
Create the component file, add necessary dependencies, and integrate it into the home page.
```

---

## 📝 Notes

- Both carousels support keyboard navigation (Arrow keys)
- Both respect `prefers-reduced-motion` for accessibility
- Embla is lighter weight (~5KB) vs Swiper (~30KB)
- Swiper has more built-in features (pagination, navigation, etc.)
- Always test on real devices, not just browser dev tools
- Consider image optimization before production deployment

---

## 🔗 Reference Files

Original implementations:
- `components/CustomerCarousel.tsx` - Embla implementation
- `components/FeaturedHomesCarousel.tsx` - Swiper implementation
- `pages/Home.tsx` - Usage examples

