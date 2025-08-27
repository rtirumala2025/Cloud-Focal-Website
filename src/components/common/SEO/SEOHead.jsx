import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl 
}) => {
  const location = useLocation();

  // Default SEO data
  const defaultSEO = {
    title: 'Cloud Focal Technologies - Transform Your Vision Into Reality',
    description: 'Strategic technology staffing and consulting for mission-critical success. We bridge the gap between your business objectives and the technical expertise needed to achieve them.',
    keywords: 'technology staffing, IT consulting, integration services, digital transformation, enterprise solutions, government contracting',
    ogImage: '/logo512.png'
  };

  // Page-specific SEO data
  const pageSEO = {
    '/': {
      title: 'Cloud Focal Technologies - Transform Your Vision Into Reality',
      description: 'Strategic technology staffing and consulting for mission-critical success. Expert solutions for public and private sectors.'
    },
    '/about': {
      title: 'About Cloud Focal Technologies - Our Story & Mission',
      description: 'Learn about Cloud Focal Technologies leadership, mission, and 15+ years of experience in strategic technology solutions.'
    },
    '/services': {
      title: 'Technology Services - Staffing, Consulting & Integration',
      description: 'Comprehensive technology solutions including staffing, IT consulting, and integration services for enterprise success.'
    },
    '/industries': {
      title: 'Industries We Serve - Public Sector & Private Enterprise',
      description: 'Specialized technology solutions for government, healthcare, financial services, and Fortune 500 companies.'
    },
    '/careers': {
      title: 'Careers at Cloud Focal Technologies - Join Our Team',
      description: 'Explore career opportunities in technology consulting and staffing. Build your future with Cloud Focal Technologies.'
    },
    '/contact': {
      title: 'Contact Cloud Focal Technologies - Get Started Today',
      description: 'Ready to transform your technology strategy? Contact Cloud Focal for strategic consulting and staffing solutions.'
    }
  };

  useEffect(() => {
    const currentSEO = pageSEO[location.pathname] || defaultSEO;
    
    // Update title
    document.title = title || currentSEO.title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.content = description || currentSEO.description;
    }
    
    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.content = keywords || currentSEO.keywords || defaultSEO.keywords;
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl || `${window.location.origin}${location.pathname}`;
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title || currentSEO.title },
      { property: 'og:description', content: description || currentSEO.description },
      { property: 'og:url', content: `${window.location.origin}${location.pathname}` },
      { property: 'og:image', content: ogImage || defaultSEO.ogImage },
      { property: 'og:type', content: 'website' }
    ];
    
    ogTags.forEach(tag => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.property = tag.property;
        document.head.appendChild(ogMeta);
      }
      ogMeta.content = tag.content;
    });
    
  }, [location, title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEOHead;