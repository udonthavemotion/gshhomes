import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { MODULAR_HOMES } from '../data/modular-homes';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';
import ThumbnailGrid from '../components/ThumbnailGrid';
import InquireFormEmbed from '../components/InquireFormEmbed';
import { useLightbox } from '../hooks/useLightbox';
import { Bed, Bath, Maximize, CheckCircle, ArrowLeft, Sparkles, Settings } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import SEOHead from '../components/SEOHead';
import { getModularDetailSEO } from '../seo-config';

const ModularDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const home = MODULAR_HOMES.find(h => h.id === id);
  
  // Use the new lightbox hook with URL sync
  const galleryLength = home?.gallery?.length ?? 0;
  const lightbox = useLightbox({
    totalImages: galleryLength,
    paramKey: 'photo',
    enableDeepLink: true,
  });

  if (!home) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Home Not Found</h2>
        <p className="text-stone-600 mb-4">The modular home model you're looking for doesn't exist.</p>
        <Button to="/modular-homes-for-sale">Back to Modular Homes</Button>
      </div>
    );
  }

  const seoData = getModularDetailSEO(home.name, home.manufacturer === 'BG' ? 'BG Manufacturing' : home.manufacturer);

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
      />
      <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb / Back */}
      <div className="bg-stone-100 py-4 border-b border-stone-200">
        <div className="container mx-auto px-4">
           <Link to="/modular-homes-for-sale" className="text-stone-500 hover:text-stone-900 flex items-center text-sm">
             <ArrowLeft size={16} className="mr-1" /> Back to Modular Homes
           </Link>
        </div>
      </div>

      {/* Hero Image Area */}
      <div className="h-64 md:h-96 w-full overflow-hidden relative bg-stone-900">
        <img 
          src={home.imageUrl} 
          alt={home.name}
          width={1200}
          height={600}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-12">
            <div className="container mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-block">
                    {home.manufacturer === 'BG' ? 'BG Manufacturing' : home.manufacturer}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Fully Customizable
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">{home.name}</h1>
                <p className="text-stone-300 mt-2 text-lg">Modular Home • {home.sqft.toLocaleString()} sq ft</p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Stats Bar */}
                <div className="bg-white rounded-xl shadow-lg border border-stone-200 p-6 flex flex-wrap justify-around items-center gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-1">Bedrooms</span>
                        <div className="flex items-center gap-2 text-2xl font-bold text-stone-800">
                            <Bed className="text-primary" /> {home.beds}
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden sm:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-1">Bathrooms</span>
                        <div className="flex items-center gap-2 text-2xl font-bold text-stone-800">
                            <Bath className="text-primary" /> {home.baths}
                        </div>
                    </div>
                    <div className="w-px h-12 bg-stone-200 hidden sm:block"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-1">Size</span>
                        <div className="flex items-center gap-2 text-2xl font-bold text-stone-800">
                            <Maximize className="text-primary" /> {home.sqft.toLocaleString()} <span className="text-base font-normal text-stone-500">sqft</span>
                        </div>
                    </div>
                </div>

                {/* Customization Highlight */}
                <div className="bg-gradient-to-br from-primary/10 via-emerald-50 to-primary/5 rounded-xl p-6 border-2 border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Settings size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">Fully Customizable Design</h3>
                      <p className="text-stone-700 leading-relaxed">
                        This modular home can be customized to your exact preferences. From structural layout and room configuration to interior finishes, cabinetry, flooring, exterior options, and energy-efficient features—every detail can be tailored to reflect your style and meet your needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">About This Home</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        {home.description} This modular home represents the finest in {home.manufacturer === 'BG' ? 'BG Manufacturing' : home.manufacturer} craftsmanship. 
                        Designed for modern living, it incorporates energy-efficient materials and thoughtful layout 
                        design to maximize comfort and utility. As a modular home, it provides the strength and quality 
                        of site-built homes with faster build time and exceptional value.
                    </p>
                </div>

                {/* Photo Gallery */}
                {home.gallery && home.gallery.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Photo Gallery</h2>
                    <ThumbnailGrid
                      images={home.gallery}
                      homeName={home.name}
                      onImageClick={lightbox.open}
                      eagerLoadCount={6}
                    />
                  </div>
                )}

                {/* Features Grid */}
                <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {home.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">{feature}</span>
                            </div>
                        ))}
                        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">Fully Customizable</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">Thermal Windows</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">High Insulation</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                                <span className="font-medium text-stone-700">Energy Efficient</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
                <InquireFormEmbed
                  homeSlug={home.id}
                  homeTitle={home.name}
                  currentPath={location.pathname}
                />
            </div>

        </div>
      </div>

      {/* Image Gallery Modal */}
      {home.gallery && home.gallery.length > 0 && (
        <ImageGallery
          images={home.gallery}
          homeModel={home.name}
          isOpen={lightbox.isOpen}
          onClose={lightbox.close}
          initialIndex={lightbox.initialIndex}
          currentIndex={lightbox.currentIndex}
          goNext={lightbox.goNext}
          goPrev={lightbox.goPrev}
          goTo={lightbox.goTo}
        />
      )}
    </div>
    </>
  );
};

export default ModularDetail;
