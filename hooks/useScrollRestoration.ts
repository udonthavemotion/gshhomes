import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Professional scroll restoration hook
 * Handles scroll position on route changes with proper timing
 * and browser compatibility
 */
export const useScrollRestoration = () => {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);
  const previousPathname = useRef<string>('');

  useEffect(() => {
    // Disable browser's automatic scroll restoration to prevent conflicts
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Skip scroll on initial mount (let browser handle it)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousPathname.current = pathname;
      return;
    }

    // Only scroll if pathname actually changed (not just hash)
    if (previousPathname.current === pathname && hash) {
      // Hash change - scroll to element if it exists
      const element = document.getElementById(hash.slice(1));
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return;
    }

    // Pathname changed - scroll to top
    previousPathname.current = pathname;

    // Multi-stage scroll to top to handle async content loading
    // Mobile-optimized: handles both window and documentElement
    const scrollToTop = () => {
      // Mobile browsers sometimes need both window and documentElement
      const scrollBoth = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For older mobile browsers
      };

      // Immediate scroll
      scrollBoth();

      // After next frame (for DOM updates)
      requestAnimationFrame(() => {
        scrollBoth();

        // After a microtask (for async content)
        setTimeout(() => {
          scrollBoth();
          
          // Final check after a short delay (for heavy pages and mobile browsers)
          setTimeout(() => {
            if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
              scrollBoth();
            }
          }, 50);
        }, 0);
      });
    };

    scrollToTop();
  }, [pathname, hash]);
};

/**
 * Utility function to scroll to top immediately
 * Mobile-optimized: handles both window and documentElement for cross-browser compatibility
 * Useful for manual navigation triggers (logo clicks, etc.)
 */
export const scrollToTop = () => {
  // Mobile browsers sometimes need both window and documentElement
  const scrollBoth = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For older mobile browsers
  };

  // Immediate scroll
  scrollBoth();
  
  // Ensure it sticks after render (mobile browsers sometimes delay)
  requestAnimationFrame(() => {
    scrollBoth();
    setTimeout(() => {
      scrollBoth();
      // Extra check for mobile browsers that might restore scroll position
      setTimeout(() => {
        if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
          scrollBoth();
        }
      }, 50);
    }, 0);
  });
};

