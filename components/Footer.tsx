import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-stone-300 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/assets/images/awards/footer.mp4" type="video/mp4" />
      </video>
      
      {/* Light Overlay - Crisp and Bright with Better Text Contrast */}
      <div className="absolute inset-0 bg-primary/30"></div>
      
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary relative z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2 mb-3 sm:mb-4 lg:mb-5 group touch-manipulation min-h-[44px]">
              <img 
                src="/assets/images/logo/gsh-logo-2025.svg" 
                alt="Gulf South Homes - 2025 Bayou's Best Choice" 
                className="h-7 sm:h-8 lg:h-10 w-auto object-contain opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-white leading-none font-display tracking-tight drop-shadow-md">
                  GULF SOUTH
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-red-600 leading-none tracking-[0.2em] mt-0.5 drop-shadow-sm">
                  HOMES INC
                </span>
              </div>
            </Link>
            
            <p className="text-white/90 mb-3 sm:mb-4 lg:mb-5 text-xs sm:text-sm leading-relaxed max-w-sm font-medium drop-shadow-sm">
              Louisiana's trusted source for quality manufactured and modular homes.
              Family-owned and operated since {COMPANY_INFO.founded}.
            </p>

            {/* Social Links */}
            <SocialLinks variant="dark" size="md" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4 drop-shadow-md">Explore</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5">
              {[
                { name: 'Our Homes', path: '/catalog' },
                { name: 'Single-Wide', path: '/single-wide' },
                { name: 'Double-Wide', path: '/double-wide' },
                { name: 'Land & Home', path: '/land-home' },
                { name: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/90 hover:text-white active:text-white transition-colors inline-flex items-center gap-1.5 group text-sm sm:text-base py-2 -my-2 font-medium drop-shadow-sm touch-manipulation min-h-[44px] sm:min-h-[auto]"
                  >
                    {link.name}
                    <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4 drop-shadow-md">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5">
              {[
                { name: 'Financing', path: '/financing' },
                { name: 'Parts & Service', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/90 hover:text-white active:text-white transition-colors inline-flex items-center gap-1.5 group text-sm sm:text-base py-2 -my-2 font-medium drop-shadow-sm touch-manipulation min-h-[44px] sm:min-h-[auto]"
                  >
                    {link.name}
                    <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-display font-bold text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4 drop-shadow-md">Get In Touch</h4>
            <ul className="space-y-2.5 sm:space-y-3 lg:space-y-4">
              <li>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-2.5 sm:gap-3 group touch-manipulation min-h-[44px] active:opacity-80"
                >
                  <div className="w-10 h-10 sm:w-9 sm:h-9 lg:w-8 lg:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={18} className="sm:w-4 sm:h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-white/80 block font-medium drop-shadow-sm">Call Us</span>
                    <p className="text-white font-bold text-sm sm:text-base group-hover:text-primary transition-colors break-words drop-shadow-md">{COMPANY_INFO.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 sm:gap-3 min-h-[44px]">
                  <div className="w-10 h-10 sm:w-9 sm:h-9 lg:w-8 lg:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-white/80 block font-medium drop-shadow-sm">Visit Us</span>
                    <p className="text-white text-sm sm:text-base break-words font-medium drop-shadow-sm">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5 sm:gap-3 min-h-[44px]">
                  <div className="w-10 h-10 sm:w-9 sm:h-9 lg:w-8 lg:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-white/80 block font-medium drop-shadow-sm">Hours</span>
                    <p className="text-white text-sm sm:text-base font-medium drop-shadow-sm">Mon-Fri: 8am - 5pm</p>
                    <p className="text-white/90 text-xs sm:text-sm font-medium drop-shadow-sm">Sat: 9am - 3pm</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 lg:gap-4 pb-safe">
          <p className="text-white/80 text-xs sm:text-sm text-center md:text-left font-medium drop-shadow-sm leading-relaxed">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-white/80 font-medium drop-shadow-sm">
            <span>BBB Accredited</span>
            <span className="hidden sm:inline">•</span>
            <span>LHMA Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
