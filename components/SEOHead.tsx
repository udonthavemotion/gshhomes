import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = '/assets/images/og/default-share.jpg',
  ogType = 'website',
  schema,
  noindex = false
}) => {
  // Ensure canonical is absolute URL
  const fullCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `https://gulfsouthhomesinc.com${canonical}`)
    : `https://gulfsouthhomesinc.com${window.location.pathname}`;

  // Ensure OG image is absolute URL
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `https://gulfsouthhomesinc.com${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Gulf South Homes" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
