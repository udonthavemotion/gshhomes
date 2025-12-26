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
  [key: string]: any;
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

