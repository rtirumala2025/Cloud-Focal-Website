/**
 * SEO utility functions for Cloud Focal website
 * Handles meta tags, structured data, and SEO optimization
 */

// Default SEO configuration
const DEFAULT_SEO_CONFIG = {
  siteName: 'Cloud Focal',
  siteUrl: 'https://cloudfocal.com',
  defaultTitle: 'Cloud Focal - Technology Staffing & IT Consulting',
  defaultDescription: 'Leading technology staffing and IT consulting company. We help businesses find top tech talent and implement innovative IT solutions for digital transformation.',
  defaultKeywords: 'technology staffing, IT consulting, system integration, digital transformation, tech talent, IT solutions',
  defaultImage: '/images/logos/cloudfocal-logo.png',
  twitterHandle: '@cloudfocal',
  facebookAppId: 'your-facebook-app-id'
};

/**
 * Generate page title
 * @param {string} title - Page title
 * @param {string} siteName - Site name
 * @returns {string} Formatted page title
 */
export const generatePageTitle = (title, siteName = DEFAULT_SEO_CONFIG.siteName) => {
  if (!title) return DEFAULT_SEO_CONFIG.defaultTitle;
  
  if (title.includes(siteName)) {
    return title;
  }
  
  return `${title} | ${siteName}`;
};

/**
 * Generate meta description
 * @param {string} description - Page description
 * @param {number} maxLength - Maximum description length
 * @returns {string} Optimized meta description
 */
export const generateMetaDescription = (description, maxLength = 160) => {
  if (!description) return DEFAULT_SEO_CONFIG.defaultDescription;
  
  if (description.length <= maxLength) {
    return description;
  }
  
  return description.substring(0, maxLength - 3) + '...';
};

/**
 * Generate canonical URL
 * @param {string} path - Page path
 * @param {string} baseUrl - Base URL
 * @returns {string} Canonical URL
 */
export const generateCanonicalUrl = (path = '', baseUrl = DEFAULT_SEO_CONFIG.siteUrl) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Generate Open Graph meta tags
 * @param {Object} data - Open Graph data
 * @returns {Object} Open Graph meta tags
 */
export const generateOpenGraphTags = (data = {}) => {
  const {
    title = DEFAULT_SEO_CONFIG.defaultTitle,
    description = DEFAULT_SEO_CONFIG.defaultDescription,
    image = DEFAULT_SEO_CONFIG.defaultImage,
    url = DEFAULT_SEO_CONFIG.siteUrl,
    type = 'website',
    siteName = DEFAULT_SEO_CONFIG.siteName,
    locale = 'en_US'
  } = data;

  return {
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:site_name': siteName,
    'og:locale': locale,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': title
  };
};

/**
 * Generate Twitter Card meta tags
 * @param {Object} data - Twitter Card data
 * @returns {Object} Twitter Card meta tags
 */
export const generateTwitterCardTags = (data = {}) => {
  const {
    title = DEFAULT_SEO_CONFIG.defaultTitle,
    description = DEFAULT_SEO_CONFIG.defaultDescription,
    image = DEFAULT_SEO_CONFIG.defaultImage,
    card = 'summary_large_image',
    site = DEFAULT_SEO_CONFIG.twitterHandle,
    creator = DEFAULT_SEO_CONFIG.twitterHandle
  } = data;

  return {
    'twitter:card': card,
    'twitter:site': site,
    'twitter:creator': creator,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:image:alt': title
  };
};

/**
 * Generate structured data for organization
 * @param {Object} data - Organization data
 * @returns {Object} JSON-LD structured data
 */
export const generateOrganizationSchema = (data = {}) => {
  const {
    name = DEFAULT_SEO_CONFIG.siteName,
    url = DEFAULT_SEO_CONFIG.siteUrl,
    logo = `${DEFAULT_SEO_CONFIG.siteUrl}/images/logos/cloudfocal-logo.svg`,
    description = DEFAULT_SEO_CONFIG.defaultDescription,
    address = {
      streetAddress: '1234 Technology Drive, Suite 100',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: '30309',
      addressCountry: 'US'
    },
    contactPoint = {
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@cloudfocal.com'
    },
    sameAs = [
      'https://linkedin.com/company/cloudfocal',
      'https://twitter.com/cloudfocal',
      'https://facebook.com/cloudfocal'
    ]
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint
    },
    sameAs
  };
};

/**
 * Generate structured data for service
 * @param {Object} data - Service data
 * @returns {Object} JSON-LD structured data
 */
export const generateServiceSchema = (data = {}) => {
  const {
    name,
    description,
    provider = DEFAULT_SEO_CONFIG.siteName,
    url,
    image,
    offers = {}
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider
    },
    url,
    image,
    offers: {
      '@type': 'Offer',
      ...offers
    }
  };
};

/**
 * Generate structured data for breadcrumbs
 * @param {Array} breadcrumbs - Breadcrumb items
 * @returns {Object} JSON-LD structured data
 */
export const generateBreadcrumbSchema = (breadcrumbs = []) => {
  const items = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
};

/**
 * Generate structured data for FAQ
 * @param {Array} faqs - FAQ items
 * @returns {Object} JSON-LD structured data
 */
export const generateFAQSchema = (faqs = []) => {
  const questions = faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions
  };
};

/**
 * Generate structured data for job posting
 * @param {Object} data - Job posting data
 * @returns {Object} JSON-LD structured data
 */
export const generateJobPostingSchema = (data = {}) => {
  const {
    title,
    description,
    datePosted,
    validThrough,
    employmentType = 'FULL_TIME',
    hiringOrganization = DEFAULT_SEO_CONFIG.siteName,
    jobLocation = {
      address: {
        streetAddress: '1234 Technology Drive, Suite 100',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        postalCode: '30309',
        addressCountry: 'US'
      }
    },
    baseSalary = {},
    workHours = '40 hours per week'
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization
    },
    jobLocation: {
      '@type': 'Place',
      ...jobLocation
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      ...baseSalary
    },
    workHours
  };
};

/**
 * Generate robots meta tag
 * @param {Object} options - Robots options
 * @returns {string} Robots meta content
 */
export const generateRobotsMeta = (options = {}) => {
  const {
    index = true,
    follow = true,
    noarchive = false,
    nosnippet = false,
    noimageindex = false,
    nocache = false
  } = options;

  const directives = [];

  if (!index) directives.push('noindex');
  if (!follow) directives.push('nofollow');
  if (noarchive) directives.push('noarchive');
  if (nosnippet) directives.push('nosnippet');
  if (noimageindex) directives.push('noimageindex');
  if (nocache) directives.push('nocache');

  return directives.length > 0 ? directives.join(', ') : 'index, follow';
};

/**
 * Generate sitemap entry
 * @param {Object} data - Page data
 * @returns {Object} Sitemap entry
 */
export const generateSitemapEntry = (data = {}) => {
  const {
    url,
    lastmod = new Date().toISOString().split('T')[0],
    changefreq = 'weekly',
    priority = '0.5'
  } = data;

  return {
    url,
    lastmod,
    changefreq,
    priority
  };
};

/**
 * Validate SEO data
 * @param {Object} data - SEO data to validate
 * @returns {Object} Validation results
 */
export const validateSEOData = (data = {}) => {
  const errors = [];
  const warnings = [];

  // Title validation
  if (data.title) {
    if (data.title.length < 30) {
      warnings.push('Title is too short (recommended: 30-60 characters)');
    }
    if (data.title.length > 60) {
      warnings.push('Title is too long (recommended: 30-60 characters)');
    }
  } else {
    errors.push('Title is required');
  }

  // Description validation
  if (data.description) {
    if (data.description.length < 120) {
      warnings.push('Description is too short (recommended: 120-160 characters)');
    }
    if (data.description.length > 160) {
      warnings.push('Description is too long (recommended: 120-160 characters)');
    }
  } else {
    errors.push('Description is required');
  }

  // Image validation
  if (data.image) {
    if (!data.image.startsWith('http') && !data.image.startsWith('/')) {
      errors.push('Image URL must be absolute or start with /');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Generate complete SEO meta tags
 * @param {Object} data - SEO data
 * @returns {Object} Complete SEO meta tags
 */
export const generateSEOMetaTags = (data = {}) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    noindex = false,
    nofollow = false
  } = data;

  const pageTitle = generatePageTitle(title);
  const metaDescription = generateMetaDescription(description);
  const canonicalUrl = generateCanonicalUrl(url);
  const robotsContent = generateRobotsMeta({ index: !noindex, follow: !nofollow });

  const ogData = { title: pageTitle, description: metaDescription, image, url: canonicalUrl, type };
  const twitterData = { title: pageTitle, description: metaDescription, image };

  return {
    title: pageTitle,
    description: metaDescription,
    keywords: keywords || DEFAULT_SEO_CONFIG.defaultKeywords,
    canonical: canonicalUrl,
    robots: robotsContent,
    openGraph: generateOpenGraphTags(ogData),
    twitter: generateTwitterCardTags(twitterData)
  };
};

// Export default configuration
export const seoConfig = DEFAULT_SEO_CONFIG;

export default {
  generatePageTitle,
  generateMetaDescription,
  generateCanonicalUrl,
  generateOpenGraphTags,
  generateTwitterCardTags,
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateJobPostingSchema,
  generateRobotsMeta,
  generateSitemapEntry,
  validateSEOData,
  generateSEOMetaTags,
  seoConfig
};
