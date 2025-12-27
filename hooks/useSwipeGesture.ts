import { useRef, useCallback, RefObject } from 'react';

interface SwipeConfig {
  /** Minimum distance in pixels to trigger a swipe (default: 50) */
  threshold?: number;
  /** Maximum time in ms for a valid swipe (default: 300) */
  maxTime?: number;
  /** Callback when user swipes left */
  onSwipeLeft?: () => void;
  /** Callback when user swipes right */
  onSwipeRight?: () => void;
  /** Callback when user swipes up */
  onSwipeUp?: () => void;
  /** Callback when user swipes down */
  onSwipeDown?: () => void;
}

interface SwipeHandlers {
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
  onPointerCancel: (e: React.PointerEvent) => void;
}

interface SwipeState {
  startX: number;
  startY: number;
  startTime: number;
  isTracking: boolean;
}

/**
 * Lightweight swipe gesture detection using pointer events
 * Works on both touch and mouse, no external dependencies
 */
export const useSwipeGesture = ({
  threshold = 50,
  maxTime = 300,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
}: SwipeConfig): SwipeHandlers => {
  const stateRef = useRef<SwipeState>({
    startX: 0,
    startY: 0,
    startTime: 0,
    isTracking: false,
  });

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    // Only track primary pointer (first finger/left mouse)
    if (!e.isPrimary) return;
    
    stateRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startTime: Date.now(),
      isTracking: true,
    };
    
    // Capture pointer for reliable tracking
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!stateRef.current.isTracking || !e.isPrimary) return;
    
    // Prevent default to stop scrolling while swiping horizontally
    const deltaX = e.clientX - stateRef.current.startX;
    const deltaY = e.clientY - stateRef.current.startY;
    
    // If horizontal movement is dominant, prevent scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!stateRef.current.isTracking || !e.isPrimary) return;
    
    const { startX, startY, startTime } = stateRef.current;
    stateRef.current.isTracking = false;
    
    // Release pointer capture
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    const deltaTime = Date.now() - startTime;
    
    // Check if swipe was fast enough
    if (deltaTime > maxTime) return;
    
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    
    // Determine swipe direction (only if threshold met)
    if (absX > absY && absX >= threshold) {
      // Horizontal swipe
      if (deltaX > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    } else if (absY > absX && absY >= threshold) {
      // Vertical swipe
      if (deltaY > 0) {
        onSwipeDown?.();
      } else {
        onSwipeUp?.();
      }
    }
  }, [threshold, maxTime, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  const onPointerCancel = useCallback((e: React.PointerEvent) => {
    stateRef.current.isTracking = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
  };
};

/**
 * Alternative hook that attaches to a ref element
 * Useful when you can't spread handlers directly on the element
 */
export const useSwipeGestureRef = <T extends HTMLElement>(
  ref: RefObject<T>,
  config: SwipeConfig
) => {
  const stateRef = useRef<SwipeState>({
    startX: 0,
    startY: 0,
    startTime: 0,
    isTracking: false,
  });

  const handlePointerDown = useCallback((e: PointerEvent) => {
    if (!e.isPrimary) return;
    stateRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startTime: Date.now(),
      isTracking: true,
    };
  }, []);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    if (!stateRef.current.isTracking || !e.isPrimary) return;
    
    const { startX, startY, startTime } = stateRef.current;
    stateRef.current.isTracking = false;
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    const deltaTime = Date.now() - startTime;
    
    const threshold = config.threshold ?? 50;
    const maxTime = config.maxTime ?? 300;
    
    if (deltaTime > maxTime) return;
    
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    
    if (absX > absY && absX >= threshold) {
      if (deltaX > 0) {
        config.onSwipeRight?.();
      } else {
        config.onSwipeLeft?.();
      }
    } else if (absY > absX && absY >= threshold) {
      if (deltaY > 0) {
        config.onSwipeDown?.();
      } else {
        config.onSwipeUp?.();
      }
    }
  }, [config]);

  // Attach listeners via useEffect
  useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('pointerdown', handlePointerDown);
    element.addEventListener('pointerup', handlePointerUp);

    return () => {
      element.removeEventListener('pointerdown', handlePointerDown);
      element.removeEventListener('pointerup', handlePointerUp);
    };
  }, [ref, handlePointerDown, handlePointerUp]);
};

export default useSwipeGesture;

