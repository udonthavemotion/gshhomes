import React, { useState, useEffect } from 'react';
import { X, Link2 } from 'lucide-react';

interface CookieConsent {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieBannerRef {
  openPreferences: () => void;
}

interface CookieConsentBannerProps {
  onOpenPreferences?: () => void;
}

const CookieConsentBanner = React.forwardRef<CookieBannerRef, CookieConsentBannerProps>(
  ({ onOpenPreferences }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    // Initialize visibility based on localStorage
    useEffect(() => {
      const consentStatus = localStorage.getItem('cookieConsent');
      if (!consentStatus) {
        setIsVisible(true);
      }
    }, []);

    const handleAcceptAll = () => {
      const fullConsent: CookieConsent = {
        analytics: true,
        marketing: true,
        functional: true,
      };
      localStorage.setItem('cookieConsent', JSON.stringify(fullConsent));
      setIsVisible(false);
    };

    const handleManagePreferences = () => {
      if (onOpenPreferences) {
        onOpenPreferences();
      }
      // Banner stays visible while modal is open
    };

    const handleDismiss = () => {
      // Set minimal consent (only essential, already always active)
      const minimalConsent: CookieConsent = {
        analytics: false,
        marketing: false,
        functional: false,
      };
      localStorage.setItem('cookieConsent', JSON.stringify(minimalConsent));
      setIsVisible(false);
    };

    if (!isVisible) {
      return null;
    }

    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-2xl"
        role="banner"
        aria-label="Cookie consent notice"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Message */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-stone-900 mb-2">We Use Cookies</h3>
              <p className="text-sm text-stone-700 mb-3 sm:mb-0">
                We use cookies to enhance your browsing experience, analyze site performance, and deliver personalized
                content. You can accept all cookies, manage preferences, or view our{' '}
                <a
                  href="/privacy-policy#cookie-policy"
                  className="font-semibold text-primary hover:text-primary-dark transition-colors underline"
                >
                  full cookie policy
                </a>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={handleManagePreferences}
                className="px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 font-semibold text-sm hover:bg-stone-50 transition-colors touch-manipulation min-h-[44px]"
                aria-label="Manage cookie preferences"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors touch-manipulation min-h-[44px]"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
              <button
                onClick={handleDismiss}
                className="p-2 text-stone-500 hover:text-stone-700 transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Dismiss cookie notice"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CookieConsentBanner.displayName = 'CookieConsentBanner';

export default CookieConsentBanner;
