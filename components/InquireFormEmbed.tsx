import React, { useEffect, useRef } from 'react';

interface InquireFormEmbedProps {
  homeSlug: string;        // Home ID/slug (e.g., 'robertson')
  homeTitle?: string;      // Home display name (optional, falls back to slug)
  currentPath: string;     // Current page path (e.g., '/homes-for-sale/robertson')
  formId?: string;         // Optional custom form ID (defaults to home inquiry form)
}

const InquireFormEmbed: React.FC<InquireFormEmbedProps> = ({
  homeSlug,
  homeTitle,
  currentPath,
  formId = '9bhfQTzobvZQx4nLQjRc', // Default home inquiry form ID
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Use homeTitle if provided, otherwise fall back to homeSlug
  const homeValue = homeTitle ?? homeSlug;

  // Construct iframe src with home parameters
  // GoHighLevel forms read URL parameters from the iframe src
  // Only passing home name (e.g., "The Robertson") for clean, readable data
  const iframeUrl = `https://crm.gshforms.com/widget/form/${formId}?home=${encodeURIComponent(homeValue)}`;

  useEffect(() => {
    // Ensure the script is loaded and initialized
    // The external script is loaded globally in index.html
    // This effect helps reinitialize if needed when navigating between pages
    const timer = setTimeout(() => {
      if (window.GHLFormEmbed && containerRef.current) {
        // Force a reinit if the library provides it
        // GHL's form_embed.js usually auto-initializes on DOMContentLoaded
      }
    }, 100);

    // Some GoHighLevel forms read URL parameters from the parent window's URL
    // Add parameters to parent URL temporarily to ensure form can read them
    const currentUrl = new URL(window.location.href);
    const originalParams = new URLSearchParams(currentUrl.search);
    const hasHomeParam = originalParams.has('home');

    // Only add if not already present (to avoid overwriting existing params)
    if (!hasHomeParam) {
      currentUrl.searchParams.set('home', homeValue);
    }

    // Update URL without page reload (using replaceState to avoid adding to history)
    const newUrl = currentUrl.toString();
    if (newUrl !== window.location.href) {
      window.history.replaceState({}, '', newUrl);
    }

    // Send PostMessage to iframe with form data after it loads
    // This provides an alternative method for passing data to GoHighLevel forms
    const iframe = iframeRef.current;
    let loadTimeout: NodeJS.Timeout | null = null;

    if (iframe) {
      const handleLoad = () => {
        // Wait a bit for the form to fully initialize
        loadTimeout = setTimeout(() => {
          try {
            // Send data via PostMessage (if GoHighLevel supports it)
            // Only passing home name for clean, readable data
            iframe.contentWindow?.postMessage(
              {
                type: 'GHL_FORM_DATA',
                data: {
                  home: homeValue,
                },
              },
              'https://crm.gshforms.com'
            );
          } catch (error) {
            // PostMessage might fail due to CORS, which is expected
            // URL parameters should still work
            console.debug('PostMessage not available, using URL parameters only');
          }
        }, 1000);
      };

      iframe.addEventListener('load', handleLoad);
      
      // If iframe is already loaded, trigger immediately
      if (iframe.contentDocument?.readyState === 'complete') {
        handleLoad();
      }

      return () => {
        iframe.removeEventListener('load', handleLoad);
        if (loadTimeout) clearTimeout(loadTimeout);
        clearTimeout(timer);
        // Restore original URL params on cleanup (optional - may not be necessary)
        // window.history.replaceState({}, '', window.location.pathname + (originalParams.toString() ? '?' + originalParams.toString() : ''));
      };
    }

    return () => {
      if (loadTimeout) clearTimeout(loadTimeout);
      clearTimeout(timer);
    };
  }, [homeValue]);

  return (
    <div className="lg:sticky lg:top-24 bg-transparent">
      {/* GoHighLevel Inline Form Container */}
      <div
        ref={containerRef}
        className="w-full bg-transparent"
        style={{
          minHeight: '1268px',
          height: '100%',
          background: 'transparent',
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <iframe
          ref={iframeRef}
          src={iframeUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            minHeight: '1268px',
            background: 'transparent',
            display: 'block',
          }}
          id={`inline-${formId}`}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={homeTitle ?? 'HOME INQUIRY'}
          data-height="1268"
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          data-home={homeValue}
          title={`Inquire About ${homeTitle ?? 'This Home'}`}
        />
      </div>

      <div className="mt-6 pt-6 border-t border-stone-100 text-center">
        <p className="text-sm text-stone-500 mb-2">Prefer to call?</p>
        <a
          href="tel:9858760222"
          className="text-lg font-bold text-primary hover:text-primary-dark transition-colors"
        >
          (985) 876-0222
        </a>
      </div>
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    GHLFormEmbed?: any;
  }
}

export default InquireFormEmbed;
