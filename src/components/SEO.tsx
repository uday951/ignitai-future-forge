import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  schema?: Record<string, any>;
}

const SEO = ({ title, description, keywords, canonical, ogType = 'website', schema }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    if (canonical) updateMetaTag('og:url', canonical, true);

    // Twitter Card
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Schema.org Structured Data
    if (schema) {
      let script = document.querySelector('script[data-type="dynamic-schema"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-type', 'dynamic-schema');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

  }, [title, description, keywords, canonical, ogType, schema]);

  return null;
};

export default SEO;
