import React from 'react';

/**
 * Placeholder image generator for Cloud Focal website
 * Creates placeholder images with consistent branding and styling
 */

// Cloud Focal brand colors
const BRAND_COLORS = {
  primary: '#2563eb',
  secondary: '#64748b',
  accent: '#0ea5e9',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  gray: '#6b7280'
};

// Generate SVG placeholder
export const generateSVGPlaceholder = (options = {}) => {
  const {
    width = 400,
    height = 300,
    text = 'Cloud Focal',
    backgroundColor = BRAND_COLORS.primary,
    textColor = '#ffffff',
    fontSize = 24,
    fontFamily = 'Inter, sans-serif',
    borderRadius = 8,
    pattern = 'gradient'
  } = options;

  const gradientId = `gradient-${Date.now()}`;
  
  let backgroundElement = '';
  
  if (pattern === 'gradient') {
    backgroundElement = `
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${backgroundColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${BRAND_COLORS.accent};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#${gradientId})" rx="${borderRadius}"/>
    `;
  } else {
    backgroundElement = `<rect width="100%" height="100%" fill="${backgroundColor}" rx="${borderRadius}"/>`;
  }

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      ${backgroundElement}
      <text 
        x="50%" 
        y="50%" 
        text-anchor="middle" 
        dominant-baseline="middle" 
        font-family="${fontFamily}" 
        font-size="${fontSize}" 
        font-weight="600" 
        fill="${textColor}"
      >
        ${text}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Generate hero image placeholder
export const generateHeroPlaceholder = (options = {}) => {
  return generateSVGPlaceholder({
    width: 1920,
    height: 1080,
    text: 'Cloud Focal',
    backgroundColor: BRAND_COLORS.primary,
    textColor: '#ffffff',
    fontSize: 48,
    pattern: 'gradient',
    ...options
  });
};

// Generate service image placeholder
export const generateServicePlaceholder = (serviceName, options = {}) => {
  return generateSVGPlaceholder({
    width: 600,
    height: 400,
    text: serviceName,
    backgroundColor: BRAND_COLORS.secondary,
    textColor: '#ffffff',
    fontSize: 32,
    pattern: 'gradient',
    ...options
  });
};

// Generate team member placeholder
export const generateTeamPlaceholder = (memberName, options = {}) => {
  return generateSVGPlaceholder({
    width: 400,
    height: 400,
    text: memberName,
    backgroundColor: BRAND_COLORS.accent,
    textColor: '#ffffff',
    fontSize: 24,
    borderRadius: 200,
    pattern: 'gradient',
    ...options
  });
};

// Generate case study placeholder
export const generateCaseStudyPlaceholder = (caseStudyName, options = {}) => {
  return generateSVGPlaceholder({
    width: 800,
    height: 600,
    text: caseStudyName,
    backgroundColor: BRAND_COLORS.success,
    textColor: '#ffffff',
    fontSize: 36,
    pattern: 'gradient',
    ...options
  });
};

// Generate client logo placeholder
export const generateClientLogoPlaceholder = (clientName, options = {}) => {
  return generateSVGPlaceholder({
    width: 200,
    height: 100,
    text: clientName,
    backgroundColor: '#ffffff',
    textColor: BRAND_COLORS.primary,
    fontSize: 16,
    borderRadius: 4,
    pattern: 'solid',
    ...options
  });
};

// Generate icon placeholder
export const generateIconPlaceholder = (iconName, options = {}) => {
  return generateSVGPlaceholder({
    width: 64,
    height: 64,
    text: iconName,
    backgroundColor: BRAND_COLORS.primary,
    textColor: '#ffffff',
    fontSize: 20,
    borderRadius: 32,
    pattern: 'solid',
    ...options
  });
};

// Generate blog post placeholder
export const generateBlogPlaceholder = (postTitle, options = {}) => {
  return generateSVGPlaceholder({
    width: 600,
    height: 400,
    text: postTitle,
    backgroundColor: BRAND_COLORS.warning,
    textColor: '#ffffff',
    fontSize: 28,
    pattern: 'gradient',
    ...options
  });
};

// Generate whitepaper placeholder
export const generateWhitepaperPlaceholder = (paperTitle, options = {}) => {
  return generateSVGPlaceholder({
    width: 400,
    height: 600,
    text: paperTitle,
    backgroundColor: BRAND_COLORS.error,
    textColor: '#ffffff',
    fontSize: 24,
    pattern: 'gradient',
    ...options
  });
};

// Generate industry placeholder
export const generateIndustryPlaceholder = (industryName, options = {}) => {
  return generateSVGPlaceholder({
    width: 500,
    height: 350,
    text: industryName,
    backgroundColor: BRAND_COLORS.secondary,
    textColor: '#ffffff',
    fontSize: 30,
    pattern: 'gradient',
    ...options
  });
};

// Generate job posting placeholder
export const generateJobPlaceholder = (jobTitle, options = {}) => {
  return generateSVGPlaceholder({
    width: 400,
    height: 300,
    text: jobTitle,
    backgroundColor: BRAND_COLORS.accent,
    textColor: '#ffffff',
    fontSize: 26,
    pattern: 'gradient',
    ...options
  });
};


// Generate map placeholder
export const generateMapPlaceholder = (location, options = {}) => {
  return generateSVGPlaceholder({
    width: 800,
    height: 600,
    text: location,
    backgroundColor: BRAND_COLORS.primary,
    textColor: '#ffffff',
    fontSize: 32,
    pattern: 'gradient',
    ...options
  });
};

// Generate chart placeholder
export const generateChartPlaceholder = (chartTitle, options = {}) => {
  return generateSVGPlaceholder({
    width: 600,
    height: 400,
    text: chartTitle,
    backgroundColor: BRAND_COLORS.secondary,
    textColor: '#ffffff',
    fontSize: 28,
    pattern: 'gradient',
    ...options
  });
};

// Generate video thumbnail placeholder
export const generateVideoPlaceholder = (videoTitle, options = {}) => {
  const {
    width = 800,
    height = 450,
    text = videoTitle,
    backgroundColor = BRAND_COLORS.primary,
    textColor = '#ffffff',
    fontSize = 32,
    pattern = 'gradient'
  } = options;

  const gradientId = `gradient-${Date.now()}`;
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${backgroundColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${BRAND_COLORS.accent};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#${gradientId})" rx="8"/>
      
      <!-- Play button -->
      <circle cx="50%" cy="50%" r="40" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <polygon points="45%,35% 45%,65% 65%,50%" fill="rgba(255,255,255,0.9)"/>
      
      <text 
        x="50%" 
        y="85%" 
        text-anchor="middle" 
        dominant-baseline="middle" 
        font-family="Inter, sans-serif" 
        font-size="${fontSize}" 
        font-weight="600" 
        fill="${textColor}"
      >
        ${text}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Generate loading placeholder
export const generateLoadingPlaceholder = (options = {}) => {
  const {
    width = 200,
    height = 200,
    backgroundColor = '#f3f4f6',
    textColor = BRAND_COLORS.primary
  } = options;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}" rx="8"/>
      <circle cx="50%" cy="50%" r="20" fill="${textColor}" opacity="0.3">
        <animate attributeName="r" values="10;30;10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Generate error placeholder
export const generateErrorPlaceholder = (errorMessage, options = {}) => {
  return generateSVGPlaceholder({
    width: 400,
    height: 300,
    text: errorMessage || 'Error loading image',
    backgroundColor: BRAND_COLORS.error,
    textColor: '#ffffff',
    fontSize: 20,
    pattern: 'solid',
    ...options
  });
};

// Generate all placeholder images for the website
export const generateAllPlaceholders = () => {
  return {
    // Hero images
    heroHome: generateHeroPlaceholder({ text: 'Cloud Focal - Home' }),
    heroAbout: generateHeroPlaceholder({ text: 'About Cloud Focal' }),
    heroServices: generateHeroPlaceholder({ text: 'Our Services' }),
    heroContact: generateHeroPlaceholder({ text: 'Contact Us' }),
    
    // Service images
    serviceStaffing: generateServicePlaceholder('Technology Staffing'),
    serviceConsulting: generateServicePlaceholder('IT Consulting'),
    serviceIntegration: generateServicePlaceholder('Integration Services'),
    
    // Team images
    teamCEO: generateTeamPlaceholder('Alexandra Rodriguez'),
    teamCTO: generateTeamPlaceholder('Marcus Johnson'),
    teamCOO: generateTeamPlaceholder('Sarah Chen'),
    
    // Case study images
    caseStudy1: generateCaseStudyPlaceholder('FinTech Transformation'),
    caseStudy2: generateCaseStudyPlaceholder('Healthcare Scaling'),
    caseStudy3: generateCaseStudyPlaceholder('Manufacturing Integration'),
    
    // Client logos
    clientLogo1: generateClientLogoPlaceholder('TechFlow'),
    clientLogo2: generateClientLogoPlaceholder('HealthTech'),
    clientLogo3: generateClientLogoPlaceholder('Manufacturing Corp'),
    
    // Industry images
    industryFinancial: generateIndustryPlaceholder('Financial Services'),
    industryHealthcare: generateIndustryPlaceholder('Healthcare'),
    industryManufacturing: generateIndustryPlaceholder('Manufacturing'),
    
    // Job images
    jobEngineer: generateJobPlaceholder('Senior Software Engineer'),
    jobConsultant: generateJobPlaceholder('IT Consultant'),
    jobManager: generateJobPlaceholder('Project Manager'),
    
    
    // Other images
    mapLocation: generateMapPlaceholder('Atlanta, GA'),
    blogPost: generateBlogPlaceholder('Technology Trends'),
    whitepaper: generateWhitepaperPlaceholder('Digital Transformation Guide'),
    videoThumbnail: generateVideoPlaceholder('Cloud Focal Overview'),
    
    // Utility placeholders
    loading: generateLoadingPlaceholder(),
    error: generateErrorPlaceholder('Image not available')
  };
};

// React hook for placeholder images
export const usePlaceholderImages = () => {
  const [placeholders, setPlaceholders] = React.useState({});

  React.useEffect(() => {
    setPlaceholders(generateAllPlaceholders());
  }, []);

  const getPlaceholder = (type, customOptions = {}) => {
    if (placeholders[type]) {
      return placeholders[type];
    }

    // Generate on demand
    switch (type) {
      case 'hero':
        return generateHeroPlaceholder(customOptions);
      case 'service':
        return generateServicePlaceholder(customOptions.text || 'Service', customOptions);
      case 'team':
        return generateTeamPlaceholder(customOptions.text || 'Team Member', customOptions);
      case 'case-study':
        return generateCaseStudyPlaceholder(customOptions.text || 'Case Study', customOptions);
      case 'client-logo':
        return generateClientLogoPlaceholder(customOptions.text || 'Client', customOptions);
      case 'industry':
        return generateIndustryPlaceholder(customOptions.text || 'Industry', customOptions);
      case 'job':
        return generateJobPlaceholder(customOptions.text || 'Job Position', customOptions);
      case 'map':
        return generateMapPlaceholder(customOptions.text || 'Location', customOptions);
      case 'blog':
        return generateBlogPlaceholder(customOptions.text || 'Blog Post', customOptions);
      case 'whitepaper':
        return generateWhitepaperPlaceholder(customOptions.text || 'Whitepaper', customOptions);
      case 'video':
        return generateVideoPlaceholder(customOptions.text || 'Video', customOptions);
      case 'loading':
        return generateLoadingPlaceholder(customOptions);
      case 'error':
        return generateErrorPlaceholder(customOptions.text || 'Error', customOptions);
      default:
        return generateSVGPlaceholder(customOptions);
    }
  };

  return { placeholders, getPlaceholder };
};

export default {
  generateSVGPlaceholder,
  generateHeroPlaceholder,
  generateServicePlaceholder,
  generateTeamPlaceholder,
  generateCaseStudyPlaceholder,
  generateClientLogoPlaceholder,
  generateIconPlaceholder,
  generateBlogPlaceholder,
  generateWhitepaperPlaceholder,
  generateIndustryPlaceholder,
  generateJobPlaceholder,
  generateMapPlaceholder,
  generateChartPlaceholder,
  generateVideoPlaceholder,
  generateLoadingPlaceholder,
  generateErrorPlaceholder,
  generateAllPlaceholders,
  usePlaceholderImages
};
