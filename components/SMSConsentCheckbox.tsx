import React from 'react';

interface SMSConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  name?: string;
  id?: string;
  required?: boolean;
}

/**
 * SMS Consent Checkbox Component
 *
 * A2P/10DLC compliant SMS opt-in disclosure checkbox.
 * Must be unchecked by default. Includes full TCPA-compliant disclosure text.
 *
 * Used on all forms that collect phone numbers.
 */
const SMSConsentCheckbox: React.FC<SMSConsentCheckboxProps> = ({
  checked,
  onChange,
  name = 'sms_consent',
  id = 'sms_consent',
  required = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="space-y-3">
      {/* Checkbox */}
      <div className="flex items-start gap-3 sm:gap-4">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={handleChange}
          required={required}
          className="mt-1 w-5 h-5 text-primary border-stone-300 rounded focus:ring-primary focus:ring-2 focus:ring-offset-0 cursor-pointer transition-colors flex-shrink-0 accent-primary"
          aria-label="SMS Consent"
        />
        <label
          htmlFor={id}
          className="text-sm text-stone-700 leading-relaxed cursor-pointer select-none flex-1"
        >
          <span className="font-semibold text-stone-900">Opt in to Text Updates</span>
          <span className="block mt-1">
            By checking this box, I consent to receive SMS/MMS text messages from Gulf South Homes Inc. at the mobile
            number provided. My consent is voluntary and not required to purchase or receive services.
          </span>
          <span className="block text-xs text-stone-600 mt-2 space-y-1">
            <span className="block">
              • <strong>What you'll receive:</strong> Home availability, appointments, financing updates, delivery
              scheduling, service notifications, and optional promotions
            </span>
            <span className="block">
              • <strong>Message frequency:</strong> Up to 3-5 texts per week during active business cycles
            </span>
            <span className="block">
              • <strong>Rates apply:</strong> Standard message and data rates from your wireless carrier apply
            </span>
            <span className="block">
              • <strong>Opt out:</strong> Reply STOP to any message to unsubscribe at any time
            </span>
            <span className="block">
              • <strong>Get help:</strong> Reply HELP for assistance
            </span>
            <span className="block">
              • <strong>Contact us:</strong> (985) 876-0222 or info@gulfsouthhomesinc.com
            </span>
          </span>
          <span className="block mt-2 text-xs text-stone-600">
            <a
              href="/privacy-policy#smsmms-messaging-terms-a2p10dlc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              View our complete SMS terms and privacy policy
            </a>
          </span>
        </label>
      </div>

      {/* Required Field Note (if applicable) */}
      {required && (
        <p className="text-xs text-red-600 font-semibold ml-8">
          Please confirm your consent to opt in to SMS updates
        </p>
      )}

      {/* TCPA Compliance Notice */}
      <div className="ml-8 p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900">
        <p>
          <strong>TCPA Notice:</strong> You are opting in to receive autodialed SMS/MMS messages. Consent is not a
          condition of purchase. Your wireless carrier's standard message and data rates will apply.
        </p>
      </div>
    </div>
  );
};

export default SMSConsentCheckbox;
