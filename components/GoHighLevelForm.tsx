import React, { useEffect, useRef } from 'react';

interface GoHighLevelFormProps {
  homeName: string;
}

const GoHighLevelForm: React.FC<GoHighLevelFormProps> = ({ homeName }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:sticky lg:top-24">
      <h3 className="text-xl font-bold text-stone-900 mb-2">Interested in {homeName}?</h3>
      <p className="text-stone-500 mb-6 text-sm">
        Fill out the form below to get pricing, floor plans, or schedule a tour.
      </p>

      {/* GoHighLevel Inline Form Container */}
      <div
        ref={containerRef}
        className="w-full"
        style={{
          minHeight: '1268px',
          height: '100%'
        }}
      >
        <iframe
          src="https://crm.gshforms.com/widget/form/9bhfQTzobvZQx4nLQjRc"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            minHeight: '1268px'
          }}
          id="inline-9bhfQTzobvZQx4nLQjRc"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="THE EDEN"
          data-height="1268"
          data-layout-iframe-id="inline-9bhfQTzobvZQx4nLQjRc"
          data-form-id="9bhfQTzobvZQx4n4LQjRc"
          title="THE EDEN"
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

export default GoHighLevelForm;
