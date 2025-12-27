export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object | object[];
  noindex?: boolean;
}

// Organization Schema for Gulf South Homes
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://gulfsouthhomesinc.com/#organization",
  "name": "Gulf South Homes Inc.",
  "legalName": "Gulf South Homes Inc.",
  "url": "https://gulfsouthhomesinc.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://gulfsouthhomesinc.com/GSH-Logo-Final.svg",
    "width": "250",
    "height": "60"
  },
  "image": "https://gulfsouthhomesinc.com/assets/images/og/homepage-share.jpg",
  "description": "Gulf South Homes is a family-owned manufactured and modular home dealer serving Southeast Louisiana since 1995. We offer single wide, double wide, and modular homes with financing, insurance, and full-service support.",
  "foundingDate": "1995",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1986 Highway 182",
    "addressLocality": "Houma",
    "addressRegion": "LA",
    "postalCode": "70364",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.6199",
    "longitude": "-90.7195"
  },
  "telephone": "+19858760222",
  "email": "info@gulfsouthhomesinc.com",
  "sameAs": [
    "https://www.facebook.com/gulfsouthhomesinc"
  ],
  "areaServed": [
    {
      "@type": "State",
      "name": "Louisiana"
    },
    {
      "@type": "City",
      "name": "Houma"
    },
    {
      "@type": "City",
      "name": "Thibodaux"
    },
    {
      "@type": "City",
      "name": "Morgan City"
    }
  ]
};

// LocalBusiness Schema for Gulf South Homes
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gulfsouthhomesinc.com/#localbusiness",
  "name": "Gulf South Homes Inc.",
  "image": "https://gulfsouthhomesinc.com/assets/images/og/homepage-share.jpg",
  "url": "https://gulfsouthhomesinc.com",
  "telephone": "+19858760222",
  "email": "info@gulfsouthhomesinc.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1986 Highway 182",
    "addressLocality": "Houma",
    "addressRegion": "LA",
    "postalCode": "70364",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.6199",
    "longitude": "-90.7195"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "15:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "State",
      "name": "Louisiana"
    }
  ],
  "description": "Family-owned manufactured and modular home dealer serving Southeast Louisiana since 1995. We offer single wide, double wide, and modular homes with in-house financing, insurance assistance, land packages, and full-service support.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile and Modular Homes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Single Wide Mobile Homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Double Wide Mobile Homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Modular Homes"
        }
      }
    ]
  }
};

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: "Manufactured & Modular Homes in Southeast Louisiana | Gulf South Homes",
    description: "Browse manufactured and modular homes for sale in Southeast Louisiana. Fast delivery, full setup, in-house financing & insurance. Family-owned since 1995.",
    canonical: "/",
    ogImage: "/assets/images/og/homepage-share.jpg",
    schema: [ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA]
  },

  homesForSale: {
    title: "Homes for Sale in Southeast Louisiana | Gulf South Homes",
    description: "Browse our complete inventory of mobile and modular homes for sale in Southeast Louisiana. Single wide, double wide, and modular homes available.",
    canonical: "/homes-for-sale",
    ogImage: "/assets/images/og/homes-for-sale-share.jpg"
  },

  singleWide: {
    title: "Single Wide Mobile Homes for Sale in Louisiana | Gulf South Homes",
    description: "Single wide mobile homes for sale in Southeast Louisiana. Affordable, efficient, and perfect for first-time buyers. Fast delivery available.",
    canonical: "/single-wide-mobile-homes",
    ogImage: "/assets/images/og/single-wide-share.jpg"
  },

  doubleWide: {
    title: "Double Wide Mobile Homes for Sale in Louisiana | Gulf South Homes",
    description: "Double wide mobile homes for sale in Louisiana. Spacious floor plans, modern features, and turnkey service. Financing available.",
    canonical: "/double-wide-mobile-homes",
    ogImage: "/assets/images/og/double-wide-share.jpg"
  },

  modular: {
    title: "Modular Homes for Sale in Louisiana | Gulf South Homes",
    description: "Premium modular homes for sale in Southeast Louisiana. Built to site-built standards with luxury finishes. View our inventory.",
    canonical: "/modular-homes-for-sale",
    ogImage: "/assets/images/og/modular-homes-share.jpg"
  },

  manufacturers: {
    title: "Manufactured Home Manufacturers | Gulf South Homes Louisiana",
    description: "Browse mobile homes by manufacturer. We carry Champion, Franklin, Sunshine, and more top brands in Southeast Louisiana.",
    canonical: "/manufactured-home-manufacturers",
    ogImage: "/assets/images/og/manufacturers-share.jpg"
  },

  whatWeOffer: {
    title: "Turnkey Mobile Home Services in Louisiana | Gulf South Homes",
    description: "Complete mobile home services: financing, insurance, land packages, warranty service, and parts. One-stop shop in Southeast Louisiana.",
    canonical: "/what-we-offer",
    ogImage: "/assets/images/og/what-we-offer-share.jpg"
  },

  deals: {
    title: "Mobile Home Deals in Louisiana | Gulf South Homes",
    description: "Current mobile home deals and specials in Southeast Louisiana. Limited-time offers on single wide, double wide, and modular homes.",
    canonical: "/mobile-home-deals",
    ogImage: "/assets/images/og/deals-share.jpg"
  },

  financing: {
    title: "Mobile Home Financing in Louisiana | Gulf South Homes",
    description: "Mobile home financing options in Louisiana. Flexible terms, competitive rates, and fast approval. In-house financing available at Gulf South Homes.",
    canonical: "/mobile-home-financing",
    ogImage: "/assets/images/og/financing-share.jpg"
  },

  landHome: {
    title: "Land & Home Packages in Louisiana | Gulf South Homes",
    description: "Complete land and home packages in Southeast Louisiana. We handle everything from land selection to home setup. One-stop solution.",
    canonical: "/land-and-home-packages",
    ogImage: "/assets/images/og/land-home-share.jpg"
  },

  laRestore: {
    title: "Louisiana Restore Grants Accepted | Gulf South Homes",
    description: "We accept Louisiana Restore grants for mobile home purchases. Learn how to use your grant to buy a new manufactured or modular home.",
    canonical: "/la-restore-grants",
    ogImage: "/assets/images/og/la-restore-share.jpg"
  },

  insurance: {
    title: "Mobile Home Insurance Help in Louisiana | Gulf South Homes",
    description: "Mobile home insurance assistance in Southeast Louisiana. We help you find the right coverage at competitive rates. Get a quote today.",
    canonical: "/mobile-home-insurance",
    ogImage: "/assets/images/og/insurance-share.jpg"
  },

  services: {
    title: "Mobile Home Warranty & Service Department | Gulf South Homes",
    description: "Professional mobile home warranty service and repairs in Southeast Louisiana. Expert technicians, quality parts, fast turnaround.",
    canonical: "/warranty-service-department",
    ogImage: "/assets/images/og/services-share.jpg"
  },

  buyingProcess: {
    title: "How to Buy a Mobile Home in Louisiana | Gulf South Homes",
    description: "Step-by-step guide to buying a mobile home in Louisiana. From selection to delivery, we make the process simple and stress-free.",
    canonical: "/buying-process",
    ogImage: "/assets/images/og/buying-process-share.jpg"
  },

  parts: {
    title: "Mobile Home Parts Store in Louisiana | Gulf South Homes",
    description: "Mobile home parts store in Southeast Louisiana. We stock parts for all major manufacturers. Fast shipping and local pickup available.",
    canonical: "/mobile-home-parts-store",
    ogImage: "/assets/images/og/parts-share.jpg"
  },

  about: {
    title: "About Gulf South Homes | Family-Owned Since 1995",
    description: "Learn about Gulf South Homes, a family-owned mobile home dealer serving Southeast Louisiana since 1995. Quality homes, honest service.",
    canonical: "/about-gulf-south-homes",
    ogImage: "/assets/images/og/about-share.jpg"
  },

  contact: {
    title: "Contact Gulf South Homes | Call or Request a Callback",
    description: "Contact Gulf South Homes in Houma, Louisiana. Call (985) 876-0222 or request a callback. We're here to help you find your perfect home.",
    canonical: "/contact-gulf-south-homes",
    ogImage: "/assets/images/og/contact-share.jpg",
    schema: LOCAL_BUSINESS_SCHEMA
  },

  privacy: {
    title: "Privacy Policy & SMS Terms | Gulf South Homes",
    description: "Gulf South Homes Privacy Policy, Cookie Policy, and SMS/A2P Messaging Terms. TCPA-compliant opt-in disclosures. Learn how we protect your data.",
    canonical: "/privacy-policy",
    ogImage: "/assets/images/og/privacy-share.jpg"
  }
};

// Helper function to get dynamic home detail SEO
export const getHomeDetailSEO = (homeName: string, type: string, manufacturer: string): PageSEO => {
  return {
    title: `${homeName} for Sale in Louisiana | Gulf South Homes`,
    description: `Explore the ${homeName} by ${manufacturer} - a quality ${type} home available at Gulf South Homes in Southeast Louisiana. Schedule a tour today!`,
    canonical: `/homes-for-sale/${homeName.toLowerCase().replace(/ /g, '-')}`,
    ogImage: `/assets/images/og/default-share.jpg` // Can be customized per home
  };
};

// Helper function to get dynamic double wide detail SEO
export const getDoubleWideDetailSEO = (homeName: string, manufacturer: string): PageSEO => {
  return {
    title: `${homeName} Double Wide for Sale | Gulf South Homes`,
    description: `${homeName} by ${manufacturer} - spacious double wide mobile home available in Louisiana. View details and schedule a tour.`,
    canonical: `/double-wide-mobile-homes/${homeName.toLowerCase().replace(/ /g, '-')}`,
    ogImage: `/assets/images/og/double-wide-share.jpg`
  };
};

// Helper function to get dynamic modular detail SEO
export const getModularDetailSEO = (homeName: string, manufacturer: string): PageSEO => {
  return {
    title: `${homeName} Modular Home for Sale | Gulf South Homes`,
    description: `${homeName} by ${manufacturer} - premium modular home built to site-built standards. Available in Southeast Louisiana.`,
    canonical: `/modular-homes-for-sale/${homeName.toLowerCase().replace(/ /g, '-')}`,
    ogImage: `/assets/images/og/modular-homes-share.jpg`
  };
};

// Helper function to create BreadcrumbList schema
export const createBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `https://gulfsouthhomesinc.com${crumb.url}`
    }))
  };
};
