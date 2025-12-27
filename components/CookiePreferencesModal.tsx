import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookieConsent {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState<CookieConsent>({
    analytics: false,
    marketing: false,
    functional: false,
  });

  // Load existing preferences
  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cookie preferences', e);
      }
    }
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const handleToggle = (category: keyof CookieConsent) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    onClose();
  };

  const handleAcceptAll = () => {
    const allEnabled: CookieConsent = {
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allEnabled);
    localStorage.setItem('cookieConsent', JSON.stringify(allEnabled));
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl z-50 bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh] sm:max-h-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 p-6">
          <h2 id="cookie-modal-title" className="text-2xl font-bold text-stone-900">
            Cookie Preferences
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-700 transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close cookie preferences"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Intro Text */}
          <p className="text-stone-700 mb-8">
            Customize which cookies we can use. Essential cookies cannot be disabled as they are required for website
            security and functionality.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border border-stone-200 rounded-lg p-6 bg-stone-50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-900 mb-1">Essential Cookies</h3>
                  <p className="text-sm text-stone-700">
                    Required for website security, fraud prevention, and user authentication. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div
                    className="w-12 h-7 bg-emerald-600 rounded-full"
                    role="switch"
                    aria-checked="true"
                    aria-label="Essential cookies enabled"
                  >
                    <div className="w-7 h-7 bg-white rounded-full mt-0 ml-5 transition-all"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-1">
                <p>
                  <strong>Retention:</strong> 1 year or until consent withdrawn
                </p>
                <p>
                  <strong>Provider:</strong> Gulf South Homes
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-stone-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-900 mb-1">Analytics Cookies</h3>
                  <p className="text-sm text-stone-700">
                    Help us understand how you use our website so we can improve performance and user experience. Data is
                    anonymized and aggregated.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-12 h-7 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      preferences.analytics ? 'bg-emerald-600' : 'bg-stone-300'
                    }`}
                    role="switch"
                    aria-checked={preferences.analytics}
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`w-7 h-7 bg-white rounded-full mt-0 transition-all ${
                        preferences.analytics ? 'ml-5' : 'ml-0'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-1 mb-3">
                <p>
                  <strong>Providers:</strong> Google Analytics 4, Microsoft Clarity, Hotjar
                </p>
                <p>
                  <strong>Retention:</strong> Up to 26 months
                </p>
              </div>
              <p className="text-xs text-stone-600">
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Opt out of Google Analytics
                </a>
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-stone-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-900 mb-1">Marketing Cookies</h3>
                  <p className="text-sm text-stone-700">
                    Enable us to show you relevant advertisements and measure the effectiveness of our marketing
                    campaigns.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-12 h-7 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      preferences.marketing ? 'bg-emerald-600' : 'bg-stone-300'
                    }`}
                    role="switch"
                    aria-checked={preferences.marketing}
                    aria-label="Toggle marketing cookies"
                  >
                    <div
                      className={`w-7 h-7 bg-white rounded-full mt-0 transition-all ${
                        preferences.marketing ? 'ml-5' : 'ml-0'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-1 mb-3">
                <p>
                  <strong>Providers:</strong> Facebook Pixel, LinkedIn Insight Tag, Google Ads
                </p>
                <p>
                  <strong>Retention:</strong> Up to 2 years
                </p>
              </div>
              <p className="text-xs text-stone-600 space-y-1">
                <a
                  href="https://www.facebook.com/ads/preferences/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline block"
                >
                  Manage Facebook Ads Preferences
                </a>
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline block"
                >
                  Digital Advertising Alliance Opt-Out Tool
                </a>
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="border border-stone-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-900 mb-1">Functional Cookies</h3>
                  <p className="text-sm text-stone-700">
                    Remember your preferences, settings, and enable interactive features like live chat and video
                    playback.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => handleToggle('functional')}
                    className={`w-12 h-7 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      preferences.functional ? 'bg-emerald-600' : 'bg-stone-300'
                    }`}
                    role="switch"
                    aria-checked={preferences.functional}
                    aria-label="Toggle functional cookies"
                  >
                    <div
                      className={`w-7 h-7 bg-white rounded-full mt-0 transition-all ${
                        preferences.functional ? 'ml-5' : 'ml-0'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
              <div className="text-xs text-stone-600 space-y-1">
                <p>
                  <strong>Providers:</strong> Gulf South Homes, GoHighLevel
                </p>
                <p>
                  <strong>Retention:</strong> 30 days to 1 year
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy Link */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <p className="text-sm text-stone-700 mb-3">
              For more details, visit our{' '}
              <a
                href="/privacy-policy#cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                complete cookie policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 p-6 bg-stone-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <button
            onClick={handleAcceptAll}
            className="order-2 sm:order-1 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors touch-manipulation min-h-[44px]"
          >
            Accept All
          </button>
          <button
            onClick={handleSave}
            className="order-1 sm:order-2 px-6 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 font-semibold text-sm hover:bg-stone-50 transition-colors touch-manipulation min-h-[44px]"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </>
  );
};

export default CookiePreferencesModal;
