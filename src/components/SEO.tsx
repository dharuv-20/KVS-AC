import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_CONFIG } from '../data/config';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  ogImage = '/og-image.jpg',
  schema,
}) => {
  const location = useLocation();
  const baseUrl = COMPANY_CONFIG.siteUrl || 'https://kvscopperveins.com';

  const finalTitle = title
    ? `${title} | KVS Copper Veins`
    : 'KVS Copper Veins | Reliable AC & HVAC Solutions in Gurugram & Delhi NCR';

  const finalDescription =
    description ||
    'Professional residential, commercial and industrial AC & HVAC services across Gurugram, Delhi and Delhi NCR. Split AC, VRV/VRF, Chillers, Gas Refilling, AC Repair & AMC by our own trained technicians.';

  const finalCanonical = canonicalPath
    ? `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
    : `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // Helper function to set or create meta tags
    const setMetaTag = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'title', finalTitle);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', COMPANY_CONFIG.name);

    // 4. Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalOgImage);

    // 5. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', finalCanonical);

    // 6. JSON-LD Schema Markup
    const existingSchemaScript = document.getElementById('seo-json-ld');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const scriptOnCleanup = document.getElementById('seo-json-ld');
      if (scriptOnCleanup) {
        scriptOnCleanup.remove();
      }
    };
  }, [finalTitle, finalDescription, finalCanonical, finalOgImage, schema]);

  return null;
};
