import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollLock } from '../hooks/useScrollLock';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useSwipeGesture } from '../hooks/useSwipeGesture';

interface ImageGalleryProps {
  /** Array of image URLs */
  images: string[];
  /** Home model name for alt text */
  homeModel: string;
  /** Whether the gallery is open */
  isOpen: boolean;
  /** Callback to close the gallery */
  onClose: () => void;
  /** Initial image index to display */
  initialIndex?: number;
  /** Navigate to next image (from useLightbox) */
  goNext?: () => void;
  /** Navigate to previous image (from useLightbox) */
  goPrev?: () => void;
  /** Navigate to specific index (from useLightbox) */
  goTo?: (index: number) => void;
  /** Current index from useLightbox (for controlled mode) */
  currentIndex?: number;
}

/**
 * Premium lightbox modal for image galleries
 * Features: scroll lock, focus trap, swipe navigation, keyboard nav,
 * image prefetching, smooth transitions, and accessibility
 */
const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  homeModel,
  isOpen,
  onClose,
  initialIndex = 0,
  goNext: externalGoNext,
  goPrev: externalGoPrev,
  goTo: externalGoTo,
  currentIndex: externalCurrentIndex,
}) => {
  // Use external index if provided (controlled mode), otherwise manage internally
  const isControlled = externalCurrentIndex !== undefined;
  const [internalIndex, setInternalIndex] = useState(initialIndex);
  const currentIndex = isControlled ? externalCurrentIndex : internalIndex;
  
  const modalRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Sync internal index with initialIndex when opening
  useEffect(() => {
    if (isOpen && !isControlled) {
      setInternalIndex(initialIndex);
    }
  }, [isOpen, initialIndex, isControlled]);

  // Reset loaded state when index changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  // Integrate existing hooks
  useScrollLock(isOpen);
  useFocusTrap(isOpen, modalRef);
  useEscapeKey(onClose, isOpen);

  // Navigation functions
  const goToIndex = useCallback((index: number) => {
    if (isAnimating) return;
    const validIndex = Math.max(0, Math.min(index, images.length - 1));
    
    if (externalGoTo) {
      externalGoTo(validIndex);
    } else {
      setInternalIndex(validIndex);
    }
  }, [images.length, isAnimating, externalGoTo]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (externalGoPrev) {
      externalGoPrev();
    } else {
      setInternalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    
    setTimeout(() => setIsAnimating(false), 200);
  }, [images.length, isAnimating, externalGoPrev]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (externalGoNext) {
      externalGoNext();
    } else {
      setInternalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
    
    setTimeout(() => setIsAnimating(false), 200);
  }, [images.length, isAnimating, externalGoNext]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrevious, goToNext]);

  // Swipe gesture handlers
  const swipeHandlers = useSwipeGesture({
    threshold: 50,
    maxTime: 300,
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  });

  // Prefetch adjacent images
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const prefetchImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      return link;
    };

    const links: HTMLLinkElement[] = [];
    
    // Prefetch next image
    const nextIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    links.push(prefetchImage(images[nextIndex]));
    
    // Prefetch previous image
    const prevIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
    if (prevIndex !== nextIndex) {
      links.push(prefetchImage(images[prevIndex]));
    }

    return () => {
      links.forEach((link) => link.remove());
    };
  }, [isOpen, currentIndex, images]);

  // Handle backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${homeModel} photo gallery, image ${currentIndex + 1} of ${images.length}`}
      onClick={handleBackdropClick}
      {...swipeHandlers}
      style={{ touchAction: 'pan-x pan-y pinch-zoom' }}
    >
      {/* Backdrop with fade animation */}
      <div 
        className="absolute inset-0 bg-black/95 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 bg-stone-900/80 hover:bg-stone-800 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Close gallery"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Image Counter - Live region for screen readers */}
      <div 
        className="absolute top-4 left-4 z-50 px-4 py-2 bg-stone-900/80 backdrop-blur-sm rounded-full text-white font-medium text-sm"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Model Name */}
      <div className="absolute top-16 left-4 z-50 px-4 py-2 bg-stone-900/80 backdrop-blur-sm rounded-full text-white font-semibold text-sm max-w-[60vw] truncate">
        {homeModel}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-stone-900/80 hover:bg-stone-800 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
            disabled={isAnimating}
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-stone-900/80 hover:bg-stone-800 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
            disabled={isAnimating}
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-7xl max-h-[85vh] w-full mx-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading indicator */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
        
        {/* Main Image with transition */}
        <img
          ref={mainImageRef}
          src={images[currentIndex]}
          alt={`${homeModel} - Image ${currentIndex + 1} of ${images.length}`}
          loading="eager"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`max-w-full max-h-[85vh] object-contain rounded-lg transition-opacity duration-200 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          draggable={false}
        />
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[90vw] md:max-w-4xl w-full px-4">
          <div 
            className="flex gap-2 overflow-x-auto py-3 px-3 bg-stone-900/80 backdrop-blur-sm rounded-xl scrollbar-hide"
            role="tablist"
            aria-label="Gallery thumbnails"
          >
            {images.map((img, idx) => (
              <button
                key={`thumb-${idx}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToIndex(idx);
                }}
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`View image ${idx + 1}`}
                className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-black ${
                  idx === currentIndex
                    ? 'ring-2 ring-white scale-110 opacity-100'
                    : 'opacity-50 hover:opacity-80 hover:scale-105'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Swipe hint for mobile (shows briefly) */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 md:hidden pointer-events-none">
        <p className="text-white/50 text-xs font-medium animate-pulse">
          Swipe to navigate
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
