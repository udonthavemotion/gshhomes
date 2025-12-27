import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../hooks/useScrollRestoration';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false,
  size = 'md'
}) => {
  // Handle navigation with scroll restoration
  const handleLinkClick = () => {
    if (onClick) {
      onClick();
    }
    // Scroll restoration is handled by useScrollRestoration hook
    // But we ensure it happens immediately for button clicks
    scrollToTop();
  };
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    font-display
  `;
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variants = {
    primary: `
      text-white
      shadow-lg
      hover:shadow-xl hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
    `,
    secondary: `
      bg-amber-500 text-white
      shadow-lg shadow-amber-500/25
      hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
      focus:ring-amber-500
    `,
    outline: `
      border-2 border-stone-300 text-stone-700 bg-transparent
      hover:bg-opacity-5 hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      text-stone-600 bg-transparent
      hover:text-stone-900 hover:bg-stone-100
      active:bg-stone-200
      focus:ring-stone-400
    `,
    white: `
      bg-white
      shadow-lg
      hover:bg-stone-50 hover:shadow-xl hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
      focus:ring-white
    `,
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${widthClass} ${className}`.replace(/\s+/g, ' ').trim();

  // Apply CSS variable styles for theme-aware variants
  const inlineStyle: React.CSSProperties = variant === 'primary' 
    ? {
        backgroundColor: 'var(--color-cta)',
        boxShadow: 'var(--shadow-primary-sm)',
      }
    : variant === 'outline'
    ? {}
    : variant === 'white'
    ? {
        color: 'var(--color-primary)',
      }
    : {};

  const hoverStyle = variant === 'primary'
    ? 'hover-primary-btn'
    : variant === 'outline'
    ? 'hover-outline-btn'
    : '';

  if (to) {
    return (
      <Link 
        to={to} 
        onClick={handleLinkClick}
        className={`${combinedClasses} ${hoverStyle}`} 
        style={inlineStyle}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${combinedClasses} ${hoverStyle}`} style={inlineStyle}>
      {children}
    </button>
  );
};

export default Button;
