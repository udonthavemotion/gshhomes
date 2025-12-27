import { useState, useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseLightboxOptions {
  /** Total number of images in the gallery */
  totalImages: number;
  /** URL param key for deep linking (default: 'photo') */
  paramKey?: string;
  /** Enable URL sync for deep linking */
  enableDeepLink?: boolean;
}

interface UseLightboxReturn {
  /** Whether the lightbox is currently open */
  isOpen: boolean;
  /** Current image index (0-based) */
  currentIndex: number;
  /** Open lightbox at specific index, optionally storing trigger for focus restoration */
  open: (index: number, triggerElement?: HTMLElement | null) => void;
  /** Close lightbox and restore focus to trigger */
  close: () => void;
  /** Navigate to specific index */
  goTo: (index: number) => void;
  /** Navigate to next image (wraps around) */
  goNext: () => void;
  /** Navigate to previous image (wraps around) */
  goPrev: () => void;
  /** Initial index to pass to ImageGallery (for sync) */
  initialIndex: number;
}

/**
 * Central state management hook for lightbox gallery
 * Handles open/close, navigation, URL sync, and focus restoration
 */
export const useLightbox = ({
  totalImages,
  paramKey = 'photo',
  enableDeepLink = true,
}: UseLightboxOptions): UseLightboxReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Store reference to trigger element for focus restoration
  const triggerRef = useRef<HTMLElement | null>(null);

  // Check URL for deep link on mount and when totalImages becomes available
  useEffect(() => {
    if (!enableDeepLink || totalImages === 0) return;
    
    const photoParam = searchParams.get(paramKey);
    if (photoParam && !isOpen) {
      const index = parseInt(photoParam, 10) - 1; // URL is 1-based, internal is 0-based
      if (!isNaN(index) && index >= 0 && index < totalImages) {
        setCurrentIndex(index);
        setIsOpen(true);
      }
    }
  }, [totalImages, enableDeepLink, paramKey]); // Re-run when totalImages becomes available

  // Sync URL when lightbox state changes
  useEffect(() => {
    if (!enableDeepLink) return;

    if (isOpen) {
      // Update URL with current photo (1-based for user-friendliness)
      const newParams = new URLSearchParams(searchParams);
      newParams.set(paramKey, String(currentIndex + 1));
      setSearchParams(newParams, { replace: true });
    } else {
      // Remove photo param when closed
      const newParams = new URLSearchParams(searchParams);
      if (newParams.has(paramKey)) {
        newParams.delete(paramKey);
        setSearchParams(newParams, { replace: true });
      }
    }
  }, [isOpen, currentIndex, enableDeepLink, paramKey]);

  const open = useCallback((index: number, triggerElement?: HTMLElement | null) => {
    // Clamp index to valid range
    const validIndex = Math.max(0, Math.min(index, totalImages - 1));
    setCurrentIndex(validIndex);
    setIsOpen(true);
    
    // Store trigger for focus restoration
    if (triggerElement) {
      triggerRef.current = triggerElement;
    }
  }, [totalImages]);

  const close = useCallback(() => {
    setIsOpen(false);
    
    // Restore focus to trigger element
    if (triggerRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        triggerRef.current?.focus();
        triggerRef.current = null;
      });
    }
  }, []);

  const goTo = useCallback((index: number) => {
    const validIndex = Math.max(0, Math.min(index, totalImages - 1));
    setCurrentIndex(validIndex);
  }, [totalImages]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  return {
    isOpen,
    currentIndex,
    open,
    close,
    goTo,
    goNext,
    goPrev,
    initialIndex: currentIndex,
  };
};

export default useLightbox;

