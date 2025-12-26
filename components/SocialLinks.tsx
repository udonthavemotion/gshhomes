import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'dark',
  size = 'md'
}) => {
  const iconSize = size === 'sm' ? 16 : 18;
  const containerSize = size === 'sm' ? 'w-9 h-9' : 'w-10 h-10';

  const baseClasses = `${containerSize} rounded-xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`;

  const variantClasses = variant === 'light'
    ? 'bg-stone-100 hover:bg-primary text-stone-600 hover:text-white focus:ring-offset-white'
    : 'bg-white/5 hover:bg-primary text-stone-400 hover:text-white focus:ring-offset-stone-900';

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
    }
  ];

  return (
    <div className="flex gap-3">
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
