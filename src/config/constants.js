/**
 * Application constants for Cloud Focal website
 * Centralized configuration and constants
 */

// ===========================================
// APPLICATION CONFIGURATION
// ===========================================
export const APP_CONFIG = {
  NAME: 'Cloud Focal',
  VERSION: '1.0.0',
  DESCRIPTION: 'Technology Staffing & IT Consulting',
  DOMAIN: process.env.REACT_APP_DOMAIN || 'cloudfocal.com',
  URL: process.env.REACT_APP_SITE_URL || 'https://cloudfocal.com',
  ENVIRONMENT: process.env.REACT_APP_ENV || 'development',
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  API_VERSION: process.env.REACT_APP_API_VERSION || 'v1'
};

// ===========================================
// COMPANY INFORMATION
// ===========================================
export const COMPANY_INFO = {
  NAME: 'Cloud Focal',
  LEGAL_NAME: 'Cloud Focal Technologies LLC',
  TAGLINE: 'Transforming Technology, Empowering Business',
  DESCRIPTION: 'Leading technology staffing and IT consulting company specializing in digital transformation, system integration, and talent acquisition.',
  
  ADDRESS: {
    STREET: '1234 Technology Drive, Suite 100',
    CITY: 'Atlanta',
    STATE: 'GA',
    ZIP: '30309',
    COUNTRY: 'USA',
    FULL: '1234 Technology Drive, Suite 100, Atlanta, GA 30309'
  },
  
  CONTACT: {
    PHONE: '(555) 123-4567',
    EMAIL: 'info@cloudfocal.com',
    SUPPORT_EMAIL: 'support@cloudfocal.com',
    SALES_EMAIL: 'sales@cloudfocal.com',
    CAREERS_EMAIL: 'careers@cloudfocal.com',
    EMERGENCY_PHONE: '(555) 123-4568'
  },
  
  BUSINESS_HOURS: {
    WEEKDAYS: 'Monday - Friday: 8:00 AM - 6:00 PM EST',
    WEEKENDS: 'Saturday - Sunday: Closed',
    EMERGENCY: '24/7 Critical Support Available'
  },
  
  FOUNDED: '2018',
  EMPLOYEES: '50-100',
  INDUSTRY: 'Technology Services'
};

// ===========================================
// SOCIAL MEDIA LINKS
// ===========================================
export const SOCIAL_LINKS = {
  LINKEDIN: process.env.REACT_APP_LINKEDIN_URL || 'https://linkedin.com/company/cloudfocal',
  TWITTER: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/cloudfocal',
  FACEBOOK: process.env.REACT_APP_FACEBOOK_URL || 'https://facebook.com/cloudfocal',
  YOUTUBE: process.env.REACT_APP_YOUTUBE_URL || 'https://youtube.com/cloudfocal',
  INSTAGRAM: 'https://instagram.com/cloudfocal',
  GITHUB: 'https://github.com/cloudfocal'
};

// ===========================================
// SERVICES CONFIGURATION
// ===========================================
export const SERVICES = {
  TECHNOLOGY_STAFFING: {
    ID: 'technology-staffing',
    NAME: 'Technology Staffing',
    SHORT_NAME: 'Tech Staffing',
    DESCRIPTION: 'Connect with top-tier technology professionals to accelerate your digital transformation journey.',
    ICON: 'users',
    COLOR: 'primary'
  },
  
  IT_CONSULTING: {
    ID: 'it-consulting',
    NAME: 'IT Consulting',
    SHORT_NAME: 'IT Consulting',
    DESCRIPTION: 'Strategic technology guidance to drive innovation and operational excellence.',
    ICON: 'lightbulb',
    COLOR: 'accent'
  },
  
  INTEGRATION_SERVICES: {
    ID: 'integration-services',
    NAME: 'Integration Services',
    SHORT_NAME: 'Integration',
    DESCRIPTION: 'Seamless system integration and API development to connect your technology ecosystem.',
    ICON: 'link',
    COLOR: 'secondary'
  }
};

// ===========================================
// INDUSTRIES CONFIGURATION
// ===========================================
export const INDUSTRIES = {
  FINANCIAL_SERVICES: {
    ID: 'financial-services',
    NAME: 'Financial Services',
    DESCRIPTION: 'Banking, insurance, and fintech solutions',
    ICON: 'banknotes'
  },
  
  HEALTHCARE: {
    ID: 'healthcare',
    NAME: 'Healthcare',
    DESCRIPTION: 'Medical technology and healthcare IT solutions',
    ICON: 'heart'
  },
  
  MANUFACTURING: {
    ID: 'manufacturing',
    NAME: 'Manufacturing',
    DESCRIPTION: 'Industrial automation and smart manufacturing',
    ICON: 'cog'
  },
  
  GOVERNMENT: {
    ID: 'government',
    NAME: 'Government',
    DESCRIPTION: 'Public sector and government technology solutions',
    ICON: 'building-library'
  },
  
  TECHNOLOGY: {
    ID: 'technology',
    NAME: 'Technology',
    DESCRIPTION: 'Software development and technology companies',
    ICON: 'computer-desktop'
  },
  
  RETAIL: {
    ID: 'retail',
    NAME: 'Retail & E-commerce',
    DESCRIPTION: 'E-commerce platforms and retail technology',
    ICON: 'shopping-bag'
  },
  
  EDUCATION: {
    ID: 'education',
    NAME: 'Education',
    DESCRIPTION: 'Educational technology and learning platforms',
    ICON: 'academic-cap'
  }
};

// ===========================================
// ROUTES CONFIGURATION
// ===========================================
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  TECHNOLOGY_STAFFING: '/services/technology-staffing',
  IT_CONSULTING: '/services/it-consulting',
  INTEGRATION_SERVICES: '/services/integration-services',
  INDUSTRIES: '/industries',
  PUBLIC_SECTOR: '/industries/public-sector',
  PRIVATE_ENTERPRISE: '/industries/private-enterprise',
  CAREERS: '/careers',
  RESOURCES: '/resources',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
  COOKIE_POLICY: '/cookie-policy',
  NOT_FOUND: '*'
};

// ===========================================
// API ENDPOINTS
// ===========================================
export const API_ENDPOINTS = {
  CONTACT: '/contact',
  JOBS: '/jobs',
  NEWSLETTER: '/newsletter',
  TEAM: '/team',
  SERVICES: '/services',
  INDUSTRIES: '/industries',
  ANALYTICS: '/analytics',
  UPLOAD: '/upload'
};

// ===========================================
// FORM CONFIGURATION
// ===========================================
export const FORM_CONFIG = {
  CONTACT: {
    FIELDS: ['name', 'email', 'phone', 'company', 'message', 'service'],
    REQUIRED: ['name', 'email', 'message'],
    MAX_LENGTH: {
      name: 100,
      email: 255,
      phone: 20,
      company: 100,
      message: 1000
    }
  },
  
  JOB_APPLICATION: {
    FIELDS: ['firstName', 'lastName', 'email', 'phone', 'resume', 'coverLetter', 'jobId'],
    REQUIRED: ['firstName', 'lastName', 'email', 'resume', 'jobId'],
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_FILE_TYPES: ['.pdf', '.doc', '.docx']
  },
  
  NEWSLETTER: {
    FIELDS: ['email', 'firstName', 'interests'],
    REQUIRED: ['email'],
    MAX_LENGTH: {
      email: 255,
      firstName: 100
    }
  }
};

// ===========================================
// VALIDATION RULES
// ===========================================
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

// ===========================================
// FEATURE FLAGS
// ===========================================
export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_CHAT_SUPPORT: process.env.REACT_APP_ENABLE_CHAT_SUPPORT === 'true',
  ENABLE_DARK_MODE: process.env.REACT_APP_ENABLE_DARK_MODE === 'true',
  ENABLE_PWA: process.env.REACT_APP_ENABLE_PWA === 'true',
  ENABLE_DEVTOOLS: process.env.REACT_APP_ENABLE_DEVTOOLS === 'true',
  USE_MOCK_API: process.env.REACT_APP_USE_MOCK_API === 'true'
};

// ===========================================
// PERFORMANCE CONFIGURATION
// ===========================================
export const PERFORMANCE_CONFIG = {
  IMAGE_QUALITY: {
    HIGH: 90,
    MEDIUM: 75,
    LOW: 60,
    THUMBNAIL: 50
  },
  
  LAZY_LOADING: {
    ROOT_MARGIN: '50px',
    THRESHOLD: 0.1
  },
  
  CACHE_TTL: parseInt(process.env.REACT_APP_CACHE_TTL) || 3600, // 1 hour
  
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 100
};

// ===========================================
// BREAKPOINTS
// ===========================================
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE: 1280,
  XLARGE: 1536
};

// ===========================================
// ANIMATION CONFIGURATION
// ===========================================
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5
  },
  
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
    LINEAR: 'linear'
  },
  
  STAGGER_DELAY: 0.1
};

// ===========================================
// ERROR MESSAGES
// ===========================================
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  VALIDATION: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  FILE_TOO_LARGE: 'File size is too large. Please choose a smaller file.',
  INVALID_FILE_TYPE: 'Invalid file type. Please choose a supported file format.',
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PHONE: 'Please enter a valid phone number.',
  PASSWORD_TOO_WEAK: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character.'
};

// ===========================================
// SUCCESS MESSAGES
// ===========================================
export const SUCCESS_MESSAGES = {
  CONTACT_FORM: 'Thank you for your message. We will get back to you soon!',
  JOB_APPLICATION: 'Your application has been submitted successfully.',
  NEWSLETTER_SUBSCRIPTION: 'You have been subscribed to our newsletter.',
  PROFILE_UPDATE: 'Your profile has been updated successfully.',
  PASSWORD_RESET: 'Password reset instructions have been sent to your email.',
  ACCOUNT_CREATED: 'Your account has been created successfully.'
};

// ===========================================
// LOCAL STORAGE KEYS
// ===========================================
export const STORAGE_KEYS = {
  LANGUAGE: 'cloudfocal-language',
  USER_PREFERENCES: 'cloudfocal-user-preferences',
  FORM_DATA: 'cloudfocal-form-data',
  CART: 'cloudfocal-cart',
  RECENT_SEARCHES: 'cloudfocal-recent-searches'
};

// ===========================================
// EXTERNAL SERVICES
// ===========================================
export const EXTERNAL_SERVICES = {
  GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID,
  GTM_ID: process.env.REACT_APP_GTM_ID,
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN,
  CALENDLY_URL: process.env.REACT_APP_CALENDLY_URL
};

// ===========================================
// SEO CONFIGURATION
// ===========================================
export const SEO_CONFIG = {
  DEFAULT_TITLE: 'Cloud Focal - Technology Staffing & IT Consulting',
  DEFAULT_DESCRIPTION: 'Leading technology staffing and IT consulting company. We help businesses find top tech talent and implement innovative IT solutions for digital transformation.',
  DEFAULT_KEYWORDS: 'technology staffing, IT consulting, system integration, digital transformation, tech talent, IT solutions',
  DEFAULT_IMAGE: '/images/logos/cloudfocal-logo.png',
  TWITTER_HANDLE: '@cloudfocal',
  FACEBOOK_APP_ID: 'your-facebook-app-id'
};

// ===========================================
// ACCESSIBILITY CONFIGURATION
// ===========================================
export const ACCESSIBILITY_CONFIG = {
  FOCUS_VISIBLE: true,
  REDUCED_MOTION: 'prefers-reduced-motion',
  HIGH_CONTRAST: 'prefers-contrast',
  SCREEN_READER: 'sr-only',
  SKIP_LINK: 'Skip to main content'
};

export default {
  APP_CONFIG,
  COMPANY_INFO,
  SOCIAL_LINKS,
  SERVICES,
  INDUSTRIES,
  ROUTES,
  API_ENDPOINTS,
  FORM_CONFIG,
  VALIDATION_RULES,
  FEATURE_FLAGS,
  PERFORMANCE_CONFIG,
  BREAKPOINTS,
  ANIMATION_CONFIG,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  STORAGE_KEYS,
  EXTERNAL_SERVICES,
  SEO_CONFIG,
  ACCESSIBILITY_CONFIG
};
