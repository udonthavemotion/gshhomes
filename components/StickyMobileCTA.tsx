import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface StickyMobileCTAProps {
  hideOnDesktop?: boolean;
  variant?: 'phone' | 'both'; // 'phone' shows only call button, 'both' shows call + text
}

/**
 * Mobile-first CTA bar that appears at bottom of viewport on mobile
 * Visible within 0-2 swipes, addressing the #1 conversion blocker
 * Sticky positioning ensures it stays accessible while scrolling
 */
const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  hideOnDesktop = true,
  variant = 'both'
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    // Re-show after 30 seconds
    setTimeout(() => setIsVisible(true), 30000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile CTA Bar - hidden on desktop/tablet */}
      <div
        className={`${hideOnDesktop ? 'md:hidden' : ''} fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 shadow-2xl`}
        style={{ borderTopColor: 'var(--color-primary, #1E3A5F)' }}
      >
        <div className="flex items-center justify-between gap-2 p-3 safe-area-inset-bottom">
          {/* Call Button - Primary CTA */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-white transition-all duration-200 active:scale-95"
            style={{ backgroundColor: 'var(--color-cta, #D32F2F)' }}
            role="button"
            aria-label={`Call Gulf South Homes at ${COMPANY_INFO.phone}`}
          >
            <Phone size={18} />
            <span className="hidden xs:inline">Call</span>
            <span className="xs:hidden">{COMPANY_INFO.phone}</span>
          </a>

          {/* Text Button - Secondary CTA (optional) */}
          {variant === 'both' && (
            <a
              href={`sms:${COMPANY_INFO.phone.replace(/\D/g, '')}?body=Hi%20Gulf%20South%20Homes%2C%20I%27m%20interested%20in%20your%20homes.`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: 'var(--color-accent, #4A90E2)',
                color: 'white'
              }}
              role="button"
              aria-label="Text Gulf South Homes"
            >
              <MessageSquare size={18} />
              <span className="hidden xs:inline">Text</span>
            </a>
          )}

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="px-3 py-3 text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Dismiss mobile CTA"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Safe area padding for bottom of page (prevents content overlap on iOS) */}
      <div className="md:hidden h-[80px] safe-area-inset-bottom" />
    </>
  );
};

export default StickyMobileCTA;
