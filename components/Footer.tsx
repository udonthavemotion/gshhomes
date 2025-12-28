import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { scrollToTop } from '../hooks/useScrollRestoration';

const Footer: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Enhanced video autoplay for iOS Safari and Android Chrome
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play video (required for iOS Safari)
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Autoplay blocked - video will play when user interacts with page
        console.log('Video autoplay blocked, will play on user interaction');
      }
    };

    playVideo();

    // Ensure video plays on visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <footer className="bg-primary text-stone-300 relative overflow-hidden">
      {/* Video Background - Mobile Optimized */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        // iOS Safari specific attributes for reliable playback
        webkit-playsinline="true"
        x5-playsinline="true"
      >
        <source src="/assets/images/awards/footer.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Overlay - Better text contrast on mobile */}
      <div className="absolute inset-0 bg-primary/40 sm:bg-primary/30"></div>
      
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary relative z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-4">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center gap-2.5 mb-4 sm:mb-5 lg:mb-6 group touch-manipulation min-h-[44px]">
              <img
                src="/assets/images/logo/gsh-logo-2025.svg"
                alt="Gulf South Homes - 2025 Bayou's Best Choice"
                className="h-9 sm:h-10 lg:h-12 w-auto object-contain opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-none font-display tracking-tight drop-shadow-lg">
                  GULF SOUTH
                </span>
                <span className="text-[10px] sm:text-[11px] lg:text-xs font-semibold text-red-600 leading-none tracking-[0.2em] mt-1 drop-shadow-md">
                  HOMES INC
                </span>
              </div>
            </Link>

            <p className="text-white/95 mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base leading-relaxed max-w-sm font-medium drop-shadow-md">
              Louisiana's trusted source for quality manufactured and modular homes.
              Family-owned and operated since {COMPANY_INFO.founded}.
            </p>

            {/* Social Links */}
            <SocialLinks variant="dark" size="md" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-lg">Explore</h4>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {[
                { name: 'Our Homes', path: '/homes-for-sale' },
                { name: 'Single-Wide', path: '/single-wide-mobile-homes' },
                { name: 'Double-Wide', path: '/double-wide-mobile-homes' },
                { name: 'Land & Home', path: '/land-and-home-packages' },
                { name: 'About Us', path: '/about-gulf-south-homes' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-white/95 hover:text-white active:text-white transition-colors inline-flex items-center gap-2 group text-base sm:text-lg py-2 -my-2 font-medium drop-shadow-md touch-manipulation min-h-[48px] sm:min-h-[auto]"
                  >
                    {link.name}
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-lg">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {[
                { name: 'Financing', path: '/mobile-home-financing' },
                { name: 'Parts & Service', path: '/warranty-service-department' },
                { name: 'Contact Us', path: '/contact-gulf-south-homes' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-white/95 hover:text-white active:text-white transition-colors inline-flex items-center gap-2 group text-base sm:text-lg py-2 -my-2 font-medium drop-shadow-md touch-manipulation min-h-[48px] sm:min-h-[auto]"
                  >
                    {link.name}
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-display font-bold text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-lg">Get In Touch</h4>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3 sm:gap-3.5 group touch-manipulation min-h-[52px] active:opacity-80"
                >
                  <div className="w-12 h-12 sm:w-11 sm:h-11 lg:w-10 lg:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={20} className="sm:w-5 sm:h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm sm:text-base text-white/90 block font-medium drop-shadow-md">Call Us</span>
                    <p className="text-white font-bold text-base sm:text-lg group-hover:text-primary transition-colors break-words drop-shadow-lg">{COMPANY_INFO.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 sm:gap-3.5 min-h-[52px]">
                  <div className="w-12 h-12 sm:w-11 sm:h-11 lg:w-10 lg:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm sm:text-base text-white/90 block font-medium drop-shadow-md">Visit Us</span>
                    <p className="text-white text-base sm:text-lg break-words font-medium drop-shadow-md">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 sm:gap-3.5 min-h-[52px]">
                  <div className="w-12 h-12 sm:w-11 sm:h-11 lg:w-10 lg:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm sm:text-base text-white/90 block font-medium drop-shadow-md">Business Hours</span>
                    <p className="text-white text-base sm:text-lg font-medium drop-shadow-md">Sales: Mon-Sat 8am - 5pm</p>
                    <p className="text-white/85 text-sm sm:text-base font-medium drop-shadow-md">Parts: Mon-Fri 8am - 5pm</p>
                    <p className="text-white/75 text-xs sm:text-sm font-medium drop-shadow-md italic">Sun: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800/50 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-5 lg:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pb-safe">
          <p className="text-white/90 text-sm sm:text-base text-center sm:text-left font-medium drop-shadow-md leading-relaxed">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base text-white/90 font-medium drop-shadow-md">
            <Link
              to="/privacy-policy"
              onClick={scrollToTop}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/50">•</span>
            <span>BBB Accredited</span>
            <span className="hidden sm:inline text-white/50">•</span>
            <span>LHMA Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
