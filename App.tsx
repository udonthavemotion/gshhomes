import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/useTheme.tsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { COMPANY_INFO } from './constants';
import { MapPin, Facebook, Instagram, Clock, Phone } from 'lucide-react';
import { useScrollRestoration, scrollToTop } from './hooks/useScrollRestoration';

// Lazy load all page components (code splitting)
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const HomeDetails = lazy(() => import('./pages/HomeDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const SingleWide = lazy(() => import('./pages/SingleWide'));
const LandHome = lazy(() => import('./pages/LandHome'));
const Parts = lazy(() => import('./pages/Parts'));
const DoubleWide = lazy(() => import('./pages/DoubleWide'));
const DoubleWideDetail = lazy(() => import('./pages/DoubleWideDetail'));
const Modular = lazy(() => import('./pages/Modular'));
const ModularDetail = lazy(() => import('./pages/ModularDetail'));
const Deals = lazy(() => import('./pages/Deals'));
const LARestore = lazy(() => import('./pages/LARestore'));
const Insurance = lazy(() => import('./pages/Insurance'));
const Manufacturers = lazy(() => import('./pages/Manufacturers'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const WhatWeOffer = lazy(() => import('./pages/WhatWeOffer'));
const Financing = lazy(() => import('./pages/Financing'));
const Privacy = lazy(() => import('./pages/Privacy'));

// Loading placeholder component
const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-stone-50">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-stone-200 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-stone-600 font-medium">Loading...</p>
    </div>
  </div>
);

// TikTok Icon Component (lucide-react doesn't have TikTok)
const TikTokIcon: React.FC<{ size?: number; className?: string; style?: React.CSSProperties }> = ({ 
  size = 20, 
  className = '',
  style = {}
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Professional scroll restoration component
const ScrollToTop = () => {
  useScrollRestoration();
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
        <ScrollToTop />
        {/* Top Bar - White Background with Brand Colors */}
        <div 
          className="hidden lg:block bg-white border-b border-stone-200"
          style={{ 
            height: '200px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div className="container mx-auto px-6 xl:px-8 h-full">
            <div className="flex items-center justify-between h-full gap-8">
              {/* Left: Logo */}
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="block"
                >
                  <img
                    src="/assets/images/logo/new-logo-color.png"
                    alt="Gulf South Homes"
                    className="object-contain transition-transform duration-300 hover:scale-105"
                    style={{ width: '200px', height: '200px' }}
                  />
                </Link>
              </div>

              {/* Center: Contact Info and Hours */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-xl font-bold transition-colors duration-200"
                  style={{ color: 'var(--color-primary, #1E3A5F)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-cta, #D32F2F)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary, #1E3A5F)'}
                >
                  <Phone size={18} style={{ color: 'var(--color-primary, #1E3A5F)' }} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                
                {/* Address */}
                <div className="flex items-center gap-2 text-sm text-stone-700">
                  <MapPin size={16} style={{ color: 'var(--color-primary-dark, #142840)' }} />
                  <span>{COMPANY_INFO.address}</span>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 text-sm text-stone-600">
                  <Clock size={16} style={{ color: 'var(--color-primary-dark, #142840)' }} />
                  <div className="flex items-center gap-2">
                    <span>Mon-Fri: 8 AM–5 PM</span>
                    <span className="text-stone-400">|</span>
                    <span>Sat-Sun: Closed</span>
                  </div>
                </div>
              </div>

              {/* Right: Social Media Icons - Seamless & Transparent */}
              <div className="flex-shrink-0 flex items-center gap-6">
                <a
                  href={COMPANY_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-all duration-200 group social-link"
                  aria-label="Visit Gulf South Homes on Facebook"
                >
                  <Facebook 
                    size={24} 
                    className="transition-all duration-200 group-hover:scale-110 social-icon"
                  />
                  <span className="text-xs font-medium social-label">
                    Facebook
                  </span>
                </a>
                <a
                  href={COMPANY_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-all duration-200 group social-link"
                  aria-label="Visit Gulf South Homes on Instagram"
                >
                  <Instagram 
                    size={24} 
                    className="transition-all duration-200 group-hover:scale-110 social-icon"
                  />
                  <span className="text-xs font-medium social-label">
                    Instagram
                  </span>
                </a>
                <a
                  href={COMPANY_INFO.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 transition-all duration-200 group social-link"
                  aria-label="Visit Gulf South Homes on TikTok"
                >
                  <div className="transition-all duration-200 group-hover:scale-110">
                    <TikTokIcon 
                      size={24} 
                      className="social-icon"
                    />
                  </div>
                  <span className="text-xs font-medium social-label">
                    TikTok
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/homes-for-sale" element={<Catalog />} />
                <Route path="/homes-for-sale/:id" element={<HomeDetails />} />
                <Route path="/single-wide-mobile-homes" element={<SingleWide />} />
                <Route path="/double-wide-mobile-homes" element={<DoubleWide />} />
                <Route path="/double-wide-mobile-homes/:id" element={<DoubleWideDetail />} />
                <Route path="/modular-homes-for-sale" element={<Modular />} />
                <Route path="/modular-homes-for-sale/:id" element={<ModularDetail />} />
                <Route path="/about-gulf-south-homes" element={<About />} />
                <Route path="/warranty-service-department" element={<Parts />} />
                <Route path="/mobile-home-parts-store" element={<Parts />} />
                <Route path="/mobile-home-financing" element={<Financing />} />
                <Route path="/land-and-home-packages" element={<LandHome />} />
                <Route path="/mobile-home-deals" element={<Deals />} />
                <Route path="/la-restore-grants" element={<LARestore />} />
                <Route path="/mobile-home-insurance" element={<Insurance />} />
                <Route path="/manufactured-home-manufacturers" element={<Manufacturers />} />
                <Route path="/contact-gulf-south-homes" element={<Contact />} />
                <Route path="/buying-process" element={<HowItWorks />} />
                <Route path="/what-we-offer" element={<WhatWeOffer />} />
                <Route path="/privacy-policy" element={<Privacy />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
