import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, ChevronDown, MapPin, Facebook, Instagram } from 'lucide-react';
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
import Button from './Button';
import { useScrollLock } from '../hooks/useScrollLock';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useClickOutside } from '../hooks/useClickOutside';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { scrollToTop } from '../hooks/useScrollRestoration';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when mobile menu is open
  useScrollLock(isOpen);

  // Trap focus within mobile menu when open
  useFocusTrap(isOpen, menuRef);

  // Close menu when clicking outside - small delay to prevent conflicts
  useClickOutside(menuRef, () => {
    setTimeout(() => setIsOpen(false), 0);
  }, isOpen);

  // Close menu on Escape key
  useEscapeKey(() => setIsOpen(false), isOpen);

  // Handle scroll effect - only affects shadow, not background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate navbar height dynamically
  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Remove focus from menu button when menu opens to prevent highlight
  useEffect(() => {
    if (isOpen && menuButtonRef.current) {
      // Blur the menu button to remove any focus ring
      menuButtonRef.current.blur();
    }
  }, [isOpen]);

  // Remove focus from menu button when menu closes to prevent highlight
  useEffect(() => {
    if (!isOpen && menuButtonRef.current) {
      // Use setTimeout to ensure focus is removed after any browser default behavior
      setTimeout(() => {
        if (menuButtonRef.current) {
          menuButtonRef.current.blur();
        }
      }, 100);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Ensure menu button loses focus
    if (menuButtonRef.current) {
      menuButtonRef.current.blur();
    }
  };

  // Handle logo click with scroll to top
  const handleLogoClick = () => {
    closeMenu();
    scrollToTop();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Homes for Sale', path: '/homes-for-sale', sublinks: [
      { name: 'Single Wide Homes', path: '/single-wide-mobile-homes' },
      { name: 'Double Wide Homes', path: '/double-wide-mobile-homes' },
      { name: 'Modular Homes', path: '/modular-homes-for-sale' },
      { name: 'Manufacturers', path: '/manufactured-home-manufacturers' },
    ]},
    { name: 'What We Offer', path: '/what-we-offer', sublinks: [
      { name: 'Current Deals & Specials', path: '/mobile-home-deals' },
      { name: 'Financing Options', path: '/mobile-home-financing' },
      { name: 'Land & Home Packages', path: '/land-and-home-packages' },
      { name: 'LA Restore Program', path: '/la-restore-grants' },
      { name: 'Insurance Assistance', path: '/mobile-home-insurance' },
      { name: 'Service Department', path: '/warranty-service-department' },
    ]},
    { name: 'Buying Process', path: '/buying-process' },
    { name: 'Parts Store', path: '/mobile-home-parts-store' },
    { name: 'About', path: '/about-gulf-south-homes' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-500 ${
        scrolled
          ? 'shadow-xl'
          : 'shadow-md'
      }`}
    >
      {/* Bottom Bar - Light Blue Background with Navigation */}
      <nav ref={navRef} className="text-white" style={{ backgroundColor: 'var(--color-primary-light)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Flex layout with justify-between */}
          <div className="flex justify-between items-center h-16 lg:hidden">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center group" onClick={handleLogoClick}>
              <img 
                src="/menu nav logo.png" 
                alt="Gulf South Homes" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Mobile Menu Button - Only shows Menu icon when closed */}
            <div className="flex items-center">
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className={`px-4 py-3 rounded-md transition-all duration-300 min-h-[52px] sm:min-h-[56px] flex items-center gap-2 focus:outline-none focus:ring-0 ${
                  isOpen
                    ? 'bg-stone-900 text-white'
                    : 'text-white hover:bg-stone-900'
                }`}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onFocus={(e) => {
                  // Prevent focus ring on mobile
                  if (window.innerWidth < 1024) {
                    e.currentTarget.blur();
                  }
                }}
              >
                <Menu size={20} aria-hidden="true" />
                <span className="text-sm font-semibold">Menu</span>
              </button>
            </div>
          </div>

          {/* Desktop: Grid layout for stable centering */}
          <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center h-16">
            {/* Desktop Logo - Shows when scrolled */}
            <div className={`transition-all duration-300 ${scrolled ? 'opacity-100 w-auto mr-6' : 'opacity-0 w-0 mr-0 overflow-hidden'}`}>
              <Link to="/" className="flex items-center group" onClick={handleLogoClick}>
                <img 
                  src="/menu nav logo.png" 
                  alt="Gulf South Homes" 
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links - Centered in middle column */}
            <div className="flex items-center space-x-1 justify-self-center">
              {navLinks.map((link) => (
                link.sublinks ? (
                  // Dropdown for links with sublinks
                  <div key={link.path} className="relative group">
                    <Link
                      to={link.path}
                      onClick={scrollToTop}
                      className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide flex items-center gap-1 text-white hover:text-red-600 transition-colors ${
                        isActive(link.path) ? 'text-red-600' : ''
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                      {isActive(link.path) && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600"></span>
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.path}
                            to={sublink.path}
                            onClick={scrollToTop}
                            className={`navbar-dropdown-item block px-4 py-3 text-sm font-medium ${
                              isActive(sublink.path)
                                ? 'text-primary-dark font-semibold'
                                : 'text-stone-700'
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular link without dropdown
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={scrollToTop}
                    className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-red-600 transition-colors ${
                      isActive(link.path) ? 'text-red-600' : ''
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600"></span>
                    )}
                  </Link>
                )
              ))}
              
              {/* Contact Us Link */}
              <Link
                to="/contact-gulf-south-homes"
                onClick={scrollToTop}
                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-red-600 transition-colors ${
                  isActive('/contact-gulf-south-homes') ? 'text-red-600' : ''
                }`}
              >
                Contact Us
                {isActive('/contact-gulf-south-homes') && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600"></span>
                )}
              </Link>
            </div>
            
            {/* Empty third column for grid symmetry */}
            <div></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-500 ease-out z-50 overflow-y-auto ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          top: `${navbarHeight}px`,
          bottom: 0,
          height: `calc(100vh - ${navbarHeight}px)`,
          minHeight: `calc(100vh - ${navbarHeight}px)`,
          maxHeight: `calc(100vh - ${navbarHeight}px)`,
          paddingBottom: 'max(env(safe-area-inset-bottom), 0px)'
        }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col min-h-full relative">
          <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>

          {/* Close Button - Positioned absolutely at top right */}
          <div className="absolute top-6 right-4">
            <button
              ref={closeButtonRef}
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2"
              aria-label="Close menu"
            >
              <X size={20} aria-hidden="true" />
              <span className="text-sm font-semibold">Close</span>
            </button>
          </div>

          {/* Mobile Menu Logo - Using blue roof logo like desktop */}
          <div className="flex justify-center mb-6 pt-16 lg:pt-2">
            <Link to="/" onClick={handleLogoClick} className="flex items-center group">
              <img 
                src="/assets/images/single wide homes/large logo for nav bar.png" 
                alt="Gulf South Homes" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 lg:h-24"
              />
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="lg:hidden mb-6 pb-6 border-b border-stone-200">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 mb-3 text-lg font-bold transition-colors"
              style={{ color: 'var(--color-primary, #1E3A5F)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent, #4A90E2)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary, #1E3A5F)'}
            >
              <Phone size={20} style={{ color: 'var(--color-primary, #1E3A5F)' }} />
              {COMPANY_INFO.phone}
            </a>
            <div className="flex items-center gap-1.5 text-sm text-stone-600">
              <MapPin size={14} style={{ color: 'var(--color-primary, #1E3A5F)' }} />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/gulfsouthhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{ color: 'var(--color-primary, #1E3A5F)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent, #4A90E2)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary, #1E3A5F)'}
                aria-label="Visit Gulf South Homes on Facebook"
              >
                <Facebook size={20} />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/gulfsouthhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{ color: 'var(--color-primary, #1E3A5F)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent, #4A90E2)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary, #1E3A5F)'}
                aria-label="Visit Gulf South Homes on Instagram"
              >
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{ color: 'var(--color-primary, #1E3A5F)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent, #4A90E2)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary, #1E3A5F)'}
                aria-label="Visit Gulf South Homes on TikTok"
              >
                <TikTokIcon size={20} />
                <span className="text-sm">TikTok</span>
              </a>
            </div>
          </div>

          <div className="space-y-1 flex-1">
            {navLinks.map((link, idx) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => {
                    closeMenu();
                    scrollToTop();
                  }}
                  className={`mobile-menu-item flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold min-h-[44px] relative transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-50'
                      : 'hover:bg-stone-50'
                  } ${isOpen ? 'animate-fade-in-up' : ''}`}
                  style={{
                    color: isActive(link.path) ? 'var(--color-accent, #4A90E2)' : 'var(--color-primary, #1E3A5F)',
                    animationDelay: `${idx * 50}ms`
                  }}
                >
                  {link.name}
                  <ChevronRight size={18} style={{ color: isActive(link.path) ? 'var(--color-accent, #4A90E2)' : 'var(--color-primary-light, #2D5380)' }} aria-hidden="true" />
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5" style={{ backgroundColor: 'var(--color-accent, #4A90E2)' }}></span>
                  )}
                </Link>

                {/* Mobile Sublinks */}
                {link.sublinks && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        onClick={() => {
                          closeMenu();
                          scrollToTop();
                        }}
                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium min-h-[44px] transition-colors ${
                          isActive(sublink.path)
                            ? 'bg-blue-50 font-semibold'
                            : 'hover:bg-stone-50'
                        }`}
                        style={{
                          color: isActive(sublink.path) ? 'var(--color-accent, #4A90E2)' : '#57534E'
                        }}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact-gulf-south-homes"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
              className={`mobile-menu-item flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-semibold min-h-[44px] relative transition-colors ${
                isActive('/contact-gulf-south-homes')
                  ? 'bg-blue-50'
                  : 'hover:bg-stone-50'
              } ${isOpen ? 'animate-fade-in-up' : ''}`}
              style={{
                color: isActive('/contact-gulf-south-homes') ? 'var(--color-accent, #4A90E2)' : 'var(--color-primary, #1E3A5F)',
                animationDelay: `${navLinks.length * 50}ms`
              }}
            >
              Contact Us
              <ChevronRight size={18} style={{ color: isActive('/contact-gulf-south-homes') ? 'var(--color-accent, #4A90E2)' : 'var(--color-primary-light, #2D5380)' }} aria-hidden="true" />
              {isActive('/contact-gulf-south-homes') && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5" style={{ backgroundColor: 'var(--color-accent, #4A90E2)' }}></span>
              )}
            </Link>
          </div>

          <div className="mt-auto pt-6 border-t border-stone-200 space-y-4">
            <Button
              to="/homes-for-sale"
              fullWidth
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
              className="py-4 text-base min-h-[44px]"
            >
              Browse All Homes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
