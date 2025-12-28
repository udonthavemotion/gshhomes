import React, { useRef, useEffect, useState } from 'react';
import { COMPANY_INFO, MOCK_HOMES, TESTIMONIALS } from '../constants';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';
import ManufacturerLogoScroller from '../components/ManufacturerLogoScroller';
import SEOHead from '../components/SEOHead';
import { SEO_CONFIG } from '../seo-config';
import {
  Award,
  Truck,
  Wrench,
  DollarSign,
  Star,
  ArrowRight,
  ChevronRight,
  Home as HomeIcon,
  Building,
  MapPin,
  ShieldCheck,
  Users,
  Settings,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  DoorOpen,
  Footprints,
  Wind,
  Droplets,
  Zap,
  LandPlot,
  Sparkles,
  Heart,
  Trophy,
  TrendingUp,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedCarousel from '../components/FeaturedCarousel';

const Home: React.FC = () => {
  const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured).slice(0, 7);
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);
  const currentSpeedRef = useRef(50);

  // Smooth speed interpolation on hover
  useEffect(() => {
    const container = marqueeContainerRef.current;
    const track = marqueeTrackRef.current;
    if (!container || !track) return;

    const targetSpeed = isHovered ? 80 : 50;
    const startSpeed = currentSpeedRef.current;
    const startTime = performance.now();
    const duration = 600; // 600ms transition

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth transition
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const currentSpeed = startSpeed + (targetSpeed - startSpeed) * ease;
      currentSpeedRef.current = currentSpeed;
      
      track.style.animationDuration = `${currentSpeed}s`;
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);


  return (
    <>
      <SEOHead
        title={SEO_CONFIG.home.title}
        description={SEO_CONFIG.home.description}
        canonical={SEO_CONFIG.home.canonical}
        ogImage={SEO_CONFIG.home.ogImage}
      />
      <div className="flex flex-col min-h-screen overflow-hidden">

      {/* 1. Hero Banner - Gulf South Homes Branded */}
      <section ref={heroRef} className="relative w-full h-screen sm:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-900 safe-area-inset-top">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Background video showcasing Gulf South Homes"
          style={{ 
            objectPosition: 'center center',
            willChange: 'auto'
          }}
          onError={(e) => {
            // Silently handle video load errors - fallback to background color
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/assets/images/single wide homes/landingpager.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-0 flex flex-col justify-center min-h-[80vh] md:min-h-0">
          {/* Main Headline - With Rotating Product Categories */}
          <h1 className="font-display font-black text-white leading-[1.15] sm:leading-[1.1] hero-headline-fluid max-w-[1000px] mx-auto mb-4 md:mb-6 lg:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="block hero-word">New</span>
            <span className="block text-rotate-container hero-word" style={{ animationDelay: '0.2s' }}>
              <span className="text-rotate">
                <span>Single-Wide</span>
                <span>Double-Wide</span>
                <span>Modular</span>
                <span>Manufactured</span>
              </span>
            </span>
            <span className="block hero-word" style={{ animationDelay: '0.4s' }}>Homes For Sale</span>
          </h1>

          {/* CTA Buttons - Pop-in Animation - Mobile Optimized */}
          <div className="hero-cta-entrance flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-8 lg:mt-10 mb-4 md:mb-4 lg:mb-6 px-4">
            <Button
              variant="primary"
              to="/homes-for-sale"
              size="lg"
              className="shadow-2xl shadow-primary/50 bg-primary/95 backdrop-blur-sm hover:bg-primary hover:scale-105 active:scale-95 transition-transform duration-300 min-h-[52px] sm:min-h-[56px] px-8 sm:px-8 text-base sm:text-lg touch-manipulation"
            >
              <span className="whitespace-nowrap">View Homes For Sale</span>
              <ArrowRight size={18} className="ml-2 sm:w-5 sm:h-5" />
            </Button>

            <Button
              to="/contact-gulf-south-homes"
              size="lg"
              className="shadow-2xl shadow-blue-600/50 bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-transform duration-300 min-h-[52px] sm:min-h-[56px] px-8 sm:px-8 text-base sm:text-lg touch-manipulation"
            >
              <Phone size={18} className="mr-2 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">Request a Call Back</span>
            </Button>
          </div>

          {/* Serving Location - Below CTA - Mobile Optimized */}
          <div className="hero-subtext flex justify-center mt-3 md:mt-3 lg:mt-4 mb-3 md:mb-3 md:mb-4 lg:mb-6 px-2" style={{ animationDelay: '0.6s' }}>
            <span className="text-primary-light hero-subtitle-fluid font-bold tracking-wide text-center break-words leading-tight" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5), 0 3px 10px rgba(255,255,255,0.3)' }}>
              Serving Southeast Louisiana
            </span>
          </div>

          {/* Trust Indicators - Animated Entrance - Mobile Optimized */}
          <div className="hero-subtext flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base px-2 max-w-md mx-auto" style={{ fontFamily: "'Dancing Script', cursive", animationDelay: '1.1s' }}>
            <span className="text-primary-light font-bold hero-trust-fluid" style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5), 0 2px 8px rgba(255,255,255,0.3)' }}>Est. 1995</span>
            <span className="hidden sm:inline text-white/60 text-sm">•</span>
            <span className="text-white font-semibold hero-trust-fluid" style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5), 0 2px 8px rgba(255,255,255,0.3)' }}>Family-Owned</span>
            <span className="hidden sm:inline text-white/60 text-sm">•</span>
            <span className="text-white font-semibold hero-trust-fluid text-center" style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5), 0 2px 8px rgba(255,255,255,0.3)' }}>2025 Bayou's Best Choice</span>
          </div>
        </div>
      </section>

      {/* MARQUEE TRUST BANNER - Premium Scrolling Credibility + Contact Info */}
      <section className="relative py-4 bg-primary overflow-hidden border-y border-primary-dark shadow-lg">
        <div 
          className="marquee-container"
          ref={marqueeContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="marquee-track" ref={marqueeTrackRef}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="marquee-content">
                <span className="marquee-item">
                  <img
                    src="/assets/images/logo/gsh-logo-2025.svg"
                    alt="Gulf South Homes"
                    className="h-10 w-auto object-contain"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  />
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <Trophy size={18} className="text-amber-300" />
                  2025 BAYOU'S BEST CHOICE WINNER
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <MapPin size={18} className="text-blue-200" />
                  1986 LA-182, Houma, LA 70364
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <Heart size={18} className="text-rose-300" />
                  FAMILY OWNED SINCE 1995
                </span>
                <span className="marquee-divider">✦</span>
                <a
                  href="tel:9858760222"
                  className="marquee-item hover:text-white/90 transition-colors"
                >
                  <Phone size={18} className="text-green-300" />
                  (985) 876-0222
                </a>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <TrendingUp size={18} className="text-emerald-300" />
                  10,000+ HOMES DELIVERED
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <Clock size={18} className="text-orange-300" />
                  Mon-Fri 8 AM–5 PM
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <Crown size={18} className="text-yellow-300" />
                  #1 IN SOUTHEAST LOUISIANA
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <img
                    src="/assets/images/logo/gsh-logo-2025.svg"
                    alt="Gulf South Homes"
                    className="h-10 w-auto object-contain"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  />
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <ShieldCheck size={18} className="text-blue-300" />
                  BBB ACCREDITED
                </span>
                <span className="marquee-divider">✦</span>
                <span className="marquee-item">
                  <Users size={18} className="text-purple-300" />
                  30+ YEARS OF TRUST
                </span>
                <span className="marquee-divider">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - Modern Visual Inventory Links */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-stone-900 text-white text-xs font-bold tracking-widest rounded-full mb-4 uppercase">
              Explore Our Inventory
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-stone-900 mb-4 tracking-tight">
              Find Your Style
            </h2>
          </div>

          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {/* Large Feature Card - Single Wide */}
            <Link
              to="/single-wide-mobile-homes"
              className="bento-card col-span-12 md:col-span-8 row-span-2 relative min-h-[400px] md:min-h-[500px] group"
            >
              <img 
                src="/assets/images/single wide homes/gulf_south_homes_granite_gallery_02-1920w.webp" 
                alt="Single Wide Homes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-2">Single Wide Homes</h3>
                <p className="text-white/70 text-lg mb-4 max-w-md">Smart, efficient living. Perfect for starters and downsizers.</p>
                <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                  Explore Collection <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Double Wide */}
            <Link
              to="/double-wide-mobile-homes"
              className="bento-card col-span-12 md:col-span-4 relative min-h-[240px] group"
            >
              <img 
                src="/assets/images/Double Wide Homes/eden_burton/gulf_south_eden_burton_gallery_21-0h.jpg" 
                alt="Double Wide Homes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-emerald-900/10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Double Wide</h3>
                <p className="text-white/70 text-sm">Spacious family living</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Modular */}
            <Link
              to="/modular-homes-for-sale"
              className="bento-card col-span-12 md:col-span-4 relative min-h-[240px] group"
            >
              <img 
                src="/Modular Homes Page/modular home pics/gulf-south-homes-modular-homes-content-03-1920w.jpg" 
                alt="Modular Homes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-amber-900/10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Modular Homes</h3>
                <p className="text-white/70 text-sm">Premium construction</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* CTA Card */}
            <Link
              to="/homes-for-sale"
              className="bento-card col-span-12 md:col-span-6 relative min-h-[200px] bg-gradient-to-br from-primary via-primary-dark to-stone-900 group flex items-center justify-center overflow-hidden"
            >
              {/* Background Video */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/assets/video/videosworking/hero.mp4" type="video/mp4" />
              </video>
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/80 to-stone-900/80"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              <div className="relative text-center p-8 z-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">View All Homes</h3>
                <p className="text-white/70 mb-4">Browse our complete inventory</p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 font-bold rounded-full group-hover:scale-105 transition-transform">
                  Shop Now <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Manufacturers */}
            <Link
              to="/manufactured-home-manufacturers"
              className="bento-card col-span-12 md:col-span-6 relative min-h-[200px] bg-stone-100 group flex items-center overflow-hidden"
            >
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
                <Award size={200} className="absolute -right-10 top-1/2 -translate-y-1/2 text-stone-400" />
              </div>
              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-2">
                  {['Champion', 'Franklin', 'Sunshine'].map((brand, i) => (
                    <span key={brand} className="px-3 py-1 bg-white text-stone-600 text-xs font-medium rounded-full shadow-sm">
                      {brand}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mb-2">Shop by Brand</h3>
                <p className="text-stone-600">America's top manufacturers</p>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AWARD SHOWCASE - Bayou's Best 2025 */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
        {/* Subtle background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.04]">
          <img
            src="/assets/images/logo/gsh-logo-2025.svg"
            alt=""
            className="w-[80%] h-auto select-none"
            loading="lazy"
            aria-hidden="true"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout: Badge large on top, then team photo, then text */}
            <div className="flex flex-col items-center text-center lg:hidden">
              {/* Award Badge - Large on Mobile */}
              <div className="scroll-animate mb-6">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src="/assets/images/awards/bayous-best-2025.svg" 
                    alt="2025 Bayou's Best Choice Award Winner" 
                    className="relative w-[85vw] max-w-[360px] h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Team Photo - Mobile */}
              <div className="scroll-animate w-full px-4 mb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/images/awards/team-bayous-best-2025.jpg" 
                    alt="Gulf South Homes team at the 2025 Bayou's Best Choice Awards ceremony" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Our Team at the Awards Ceremony</p>
                  </div>
                </div>
              </div>

              {/* Award Text - Mobile */}
              <div className="scroll-animate px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-bold tracking-wider rounded-full mb-4 uppercase">
                  <Trophy size={14} />
                  2025 Winner
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 leading-[0.95] mb-4">
                  Bayou's Best<br />
                  <span className="text-primary">Choice Awards</span>
                </h2>
                <p className="text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed mb-6 mx-auto">
                  Recognized for excellence in manufactured & modular homes across the Gulf Coast region. Thank you for voting us #1.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    Family-Owned Since 1995
                  </div>
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    BBB Accredited
                  </div>
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    LHMA Member
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout: Side by side with team photo */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left: Badge + Team Photo stacked */}
              <div className="scroll-animate">
                <div className="relative group mb-8 flex justify-center">
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src="/assets/images/awards/bayous-best-2025.svg" 
                    alt="2025 Bayou's Best Choice Award Winner" 
                    className="relative w-72 xl:w-80 h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="/assets/images/awards/team-bayous-best-2025.jpg" 
                    alt="Gulf South Homes team at the 2025 Bayou's Best Choice Awards ceremony" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-semibold text-lg">Our Award-Winning Team</p>
                    <p className="text-white/80 text-sm">2025 Bayou's Best Choice Awards Ceremony</p>
                  </div>
                </div>
              </div>
              
              {/* Right: Award Text */}
              <div className="scroll-animate">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-bold tracking-wider rounded-full mb-6 uppercase">
                  <Trophy size={14} />
                  2025 Winner
                </div>
                <h2 className="text-5xl xl:text-6xl font-display font-black text-stone-900 leading-[0.95] mb-6">
                  Bayou's Best<br />
                  <span className="text-primary">Choice Awards</span>
                </h2>
                <p className="text-stone-600 text-lg xl:text-xl max-w-xl leading-relaxed mb-8">
                  Recognized for excellence in manufactured & modular homes across the Gulf Coast region. Thank you for voting us #1.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    Family-Owned Since 1995
                  </div>
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    BBB Accredited
                  </div>
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <CheckCircle size={16} className="text-emerald-500" />
                    LHMA Member
                  </div>
                </div>
              </div>
            </div>
            
            {/* Manufacturer Logos - Enhanced Premium Carousel */}
            <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-stone-200">
              <p className="text-center text-stone-500 text-sm font-bold tracking-wider uppercase mb-10 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-stone-300"></span>
                <span>Featuring Top Manufacturers</span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-stone-300"></span>
              </p>
              <ManufacturerLogoScroller />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Homes */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Featured Homes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Find Your Perfect Home
            </h2>
            <p className="text-stone-600 text-lg max-w-xl mx-auto">
              Explore our most popular models, ready for delivery across Southeast Louisiana.
            </p>
          </div>

          {/* Swiper Carousel Implementation */}
          <div className="scroll-animate">
            <FeaturedCarousel
              items={featuredHomes}
              renderCard={(home, index) => (
                <div className="h-full">
                  <HomeCard home={home} />
                </div>
              )}
            />
          </div>

          <div className="mt-10 text-center scroll-animate">
            <Button to="/homes-for-sale" size="lg">
              View All Homes
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. RESTORE LOUISIANA FEATURE SECTION - Hero Treatment */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout: Stacked */}
            <div className="lg:hidden">
              {/* Badge */}
              <div className="scroll-animate text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-full uppercase shadow-md">
                  <ShieldCheck size={16} />
                  Experienced Grant Partner
                </div>
              </div>

              {/* Image */}
              <div className="scroll-animate mb-8 px-4">
                <Link to="/la-restore-grants" className="block group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/assets/images/restore louisiana page/Restore Louisiana Funding (1).jpg"
                      alt="Restore Louisiana Hurricane Francine Grants - Funding is Ready, Homes are Available, Act Now"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className="scroll-animate text-center px-4">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-stone-900 leading-[1.1] mb-4 tracking-tight">
                  Restore Louisiana<br />
                  <span className="text-blue-600">Hurricane Francine Grants</span>
                </h2>
                <p className="text-lg sm:text-xl font-bold text-red-600 mb-4">
                  Funding is Ready. Homes are Available. Act Now!
                </p>
                <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  Use your Restore Louisiana grant to purchase a brand new manufactured home with Gulf South Homes. We handle the entire process from application to move-in.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    to="/la-restore-grants"
                    variant="primary"
                    size="lg"
                    className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary text-white"
                  >
                    Check Your Eligibility
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                  <a
                    href="tel:985-876-0222"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-stone-900 border-2 border-stone-300 rounded-xl font-bold text-base hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
                  >
                    <Phone size={20} />
                    Call Now: (985) 876-0222
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Layout: Split Screen */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left: Image */}
              <div className="scroll-animate">
                <Link to="/la-restore-grants" className="block group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/assets/images/restore louisiana page/Restore Louisiana Funding (1).jpg"
                      alt="Restore Louisiana Hurricane Francine Grants - Funding is Ready, Homes are Available, Act Now"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </div>

              {/* Right: Content */}
              <div className="scroll-animate">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-full mb-6 uppercase shadow-md">
                  <ShieldCheck size={16} />
                  Experienced Grant Partner
                </div>

                <h2 className="text-4xl xl:text-5xl font-display font-black text-stone-900 leading-[1.05] mb-4 tracking-tight">
                  Restore Louisiana<br />
                  <span className="text-blue-600">Hurricane Francine Grants</span>
                </h2>

                <p className="text-xl xl:text-2xl font-bold text-red-600 mb-6">
                  Funding is Ready. Homes are Available. Act Now!
                </p>

                <p className="text-stone-700 text-lg leading-relaxed mb-8">
                  Use your Restore Louisiana grant to purchase a brand new manufactured home with Gulf South Homes. We handle the entire process from application to move-in.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-stone-600">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-base">We accept all Hurricane Francine grants</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-base">Expert guidance through the entire application process</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-base">Large in-stock inventory ready for immediate delivery</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col xl:flex-row gap-4">
                  <Button
                    to="/la-restore-grants"
                    variant="primary"
                    size="lg"
                    className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary text-white"
                  >
                    Check Your Eligibility
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                  <a
                    href="tel:985-876-0222"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-300 rounded-xl font-bold text-base hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
                  >
                    <Phone size={20} />
                    Call Now: (985) 876-0222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Current Deals & Programs */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Special Offers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Current Deals & Programs
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Take advantage of our limited-time offers and special programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {/* Deal 1 */}
            <div className="scroll-animate group p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Free Slab or Free Utilities</h3>
              <p className="text-stone-600">
                Choose between a free concrete slab foundation or free utility hookup on select in-stock homes.
              </p>
            </div>

            {/* Deal 2 */}
            <div className="scroll-animate group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Free Site Prep on In-Stock Franklin Homes</h3>
              <p className="text-stone-600">
                Get free site preparation when you purchase an in-stock Franklin home model.
              </p>
            </div>

            {/* Deal 3 */}
            <div className="scroll-animate group p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border-2 border-amber-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">$5,000 Off Select Models</h3>
              <p className="text-stone-600">
                Save big on select in-stock homes. Limited time offer on premium floor plans.
              </p>
            </div>
          </div>

          <div className="text-center scroll-animate">
            <Button to="/mobile-home-deals" variant="outline" size="lg">
              View All Deals
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us - EXACT 6 items from spec */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Why Gulf South Homes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              We're more than just a dealer—we're your partner in homeownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <HomeIcon size={28} />, title: "Huge Stock Inventory", desc: "Largest selection in South Louisiana, ready for delivery", color: "bg-blue-600" },
              { icon: <Wrench size={28} />, title: "On-Site Parts Department", desc: "Full-service parts store and repair team", color: "bg-emerald-600" },
              { icon: <CheckCircle size={28} />, title: "One-Stop Shop: Permits, Setup, Delivery", desc: "We handle everything from permits to final setup", color: "bg-violet-600" },
              { icon: <DollarSign size={28} />, title: "In-House Financing & Insurance", desc: "Easy approval with our in-house financing team", color: "bg-amber-600" },
              { icon: <Users size={28} />, title: "Family-Owned & Local", desc: "Trusted Louisiana business since 1995", color: "bg-rose-600" },
              { icon: <Settings size={28} />, title: "Custom Order Options", desc: "Customize your home to fit your needs", color: "bg-cyan-600" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-6 lg:p-8 bg-white rounded-lg border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-xl mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How It Works - 4 Steps - Professional Corporate Design */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-widest rounded-md mb-4 uppercase">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-stone-900 mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Four simple steps to your new home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {[
              { 
                num: "01", 
                icon: <HomeIcon size={28} />, 
                title: "Choose Your Home", 
                desc: "Browse our inventory and select the perfect floor plan"
              },
              { 
                num: "02", 
                icon: <DollarSign size={28} />, 
                title: "Purchase Options", 
                desc: "Get pre-approved with our financing partners"
              },
              { 
                num: "03", 
                icon: <LandPlot size={28} />, 
                title: "Land & Permits", 
                desc: "We handle site prep, permits, and all paperwork"
              },
              { 
                num: "04", 
                icon: <Truck size={28} />, 
                title: "Delivery & Setup", 
                desc: "Professional delivery and complete installation"
              },
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="scroll-animate group relative"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Professional Card */}
                <div className="relative h-full bg-white border border-stone-200 rounded-xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Number Badge - Professional Style */}
                  <div className="absolute -top-4 left-8 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  
                  {/* Icon Container - Refined */}
                  <div className="mb-6 pt-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-display font-bold text-xl text-stone-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Connecting Line (Desktop Only) */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-stone-200 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-stone-300 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <Button to="/buying-process" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
              See Full Buying Process
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Reviews Preview */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video/videosworking/homepage-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-md mb-4">
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
              What Our Neighbors Say
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto drop-shadow-md">
              Trusted by families across South Louisiana for over 30 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="scroll-animate bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/95 text-lg leading-relaxed mb-8 font-light drop-shadow-md">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white drop-shadow-md">{t.name}</p>
                    <p className="text-sm text-white/70">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. About Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-6">
              Family-Owned Since 1995
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Gulf South Homes has been serving Southeast Louisiana families for over 30 years.
              As a family-owned business, we understand the importance of finding the perfect home for your loved ones.
              Our commitment to quality, service, and community has made us one of the most trusted manufactured and modular home dealers in the region.
              From our family to yours, we're here to help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/about-gulf-south-homes" size="lg">
                About Us
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button to="/about-gulf-south-homes#team" variant="outline" size="lg">
                Meet the Team
                <Users size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Parts Store Preview */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="container">
          <div className="text-center mb-12 scroll-animate">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
              Parts & Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              On-Site Parts Store
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Everything you need to maintain and upgrade your manufactured home.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-10">
            {[
              { icon: <DoorOpen size={32} />, label: "Doors", color: "from-blue-500 to-blue-600" },
              { icon: <Footprints size={32} />, label: "Steps", color: "from-emerald-500 to-emerald-600" },
              { icon: <HomeIcon size={32} />, label: "Skirting", color: "from-violet-500 to-violet-600" },
              { icon: <Wind size={32} />, label: "Windows", color: "from-amber-500 to-amber-600" },
              { icon: <Droplets size={32} />, label: "Plumbing", color: "from-cyan-500 to-cyan-600" },
              { icon: <Zap size={32} />, label: "Electrical", color: "from-rose-500 to-rose-600" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="scroll-animate group p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-stone-900">{item.label}</h3>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <Button to="/mobile-home-parts-store" size="lg">
              Visit Parts Store
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Contact Form - Moved above footer */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-stone-600 text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* GoHighLevel Contact Form Embed */}
            <div className="scroll-animate w-full">
              <iframe
                src="https://crm.gshforms.com/widget/form/ZRYIIk3TWJ6OI96TkkBg"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  minHeight: '825px'
                }}
                id="inline-home-ZRYIIk3TWJ6OI96TkkBg"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us"
                data-height="825"
                data-layout-iframe-id="inline-home-ZRYIIk3TWJ6OI96TkkBg"
                data-form-id="ZRYIIk3TWJ6OI96TkkBg"
                title="Contact Us"
                loading="lazy"
                allow="clipboard-read; clipboard-write"
              />
            </div>

            <p className="text-stone-500 text-sm text-center mt-6">
              Or call us directly at{' '}
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary font-semibold hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
