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
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-primary/85"></div>
      
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary relative z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6">
          
          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 sm:mb-5 group">
              <img 
                src="/assets/images/logo/gsh-logo-2025.svg" 
                alt="Gulf South Homes - 2025 Bayou's Best Choice" 
                className="h-8 sm:h-10 w-auto object-contain opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white leading-none font-display tracking-tight">
                  GULF SOUTH
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-red-600 leading-none tracking-[0.2em] mt-0.5">
                  HOMES INC
                </span>
              </div>
            </Link>
            
            <p className="text-stone-400 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed max-w-sm">
              Louisiana's trusted source for quality manufactured and modular homes.
              Family-owned and operated since {COMPANY_INFO.founded}.
            </p>

            {/* Social Links */}
            <SocialLinks variant="dark" size="md" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Explore</h4>
            <ul className="space-y-2 sm:space-y-2.5">
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
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group text-sm sm:text-base py-1 -my-1"
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
            <h4 className="text-white font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { name: 'Financing', path: '/financing' },
                { name: 'Parts & Service', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group text-sm sm:text-base py-1 -my-1"
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
            <h4 className="text-white font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Get In Touch</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3 group touch-manipulation"
                >
                  <div className="w-9 h-9 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={16} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-stone-500 block">Call Us</span>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-primary transition-colors break-words">{COMPANY_INFO.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-stone-500 block">Visit Us</span>
                    <p className="text-white text-sm sm:text-base break-words">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-stone-500 block">Hours</span>
                    <p className="text-white text-sm sm:text-base">Mon-Fri: 8am - 5pm</p>
                    <p className="text-stone-400 text-xs sm:text-sm">Sat: 9am - 3pm</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-stone-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-stone-500">
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
