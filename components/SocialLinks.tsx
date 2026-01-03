import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

// TikTok Icon Component (lucide-react doesn't have TikTok)
const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 20, 
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface SocialLinksProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'dark',
  size = 'md'
}) => {
  // Mobile-optimized sizes (48px minimum for touch targets)
  const iconSize = size === 'sm' ? 18 : 24;
  const containerSize = size === 'sm' ? 'w-11 h-11' : 'w-14 h-14';

  const baseClasses = `${containerSize} rounded-3xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 touch-manipulation active:scale-95 hover:scale-110 hover:shadow-lg`;

  const variantClasses = variant === 'light'
    ? 'bg-gradient-to-br from-primary to-accent text-white hover:from-accent hover:to-primary focus:ring-offset-white'
    : 'bg-gradient-to-br from-white/20 to-white/10 hover:from-primary hover:to-accent text-white hover:text-white backdrop-blur-sm focus:ring-offset-stone-900';

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/gulfsouthhomes',
      icon: <Facebook size={iconSize} />,
      ariaLabel: 'Visit Gulf South Homes on Facebook'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gulfsouthhomes',
      icon: <Instagram size={iconSize} />,
      ariaLabel: 'Visit Gulf South Homes on Instagram'
    },
    {
      name: 'TikTok',
      url: COMPANY_INFO.socialMedia.tiktok,
      icon: <TikTokIcon size={iconSize} />,
      ariaLabel: 'Visit Gulf South Homes on TikTok'
    }
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${variantClasses}`}
          aria-label={social.ariaLabel}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
