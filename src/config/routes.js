/**
 * Route configuration for Cloud Focal website
 * Centralized routing configuration with metadata
 */

import { ROUTES } from './constants';

// Route metadata for SEO and navigation
export const ROUTE_CONFIG = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    title: 'Home',
    description: 'Cloud Focal - Leading technology staffing and IT consulting company. Transform your business with our expert team and innovative solutions.',
    keywords: 'technology staffing, IT consulting, system integration, digital transformation',
    breadcrumb: ['Home'],
    showInNavigation: false,
    showInFooter: false,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.ABOUT]: {
    path: ROUTES.ABOUT,
    title: 'About Us',
    description: 'Learn about Cloud Focal\'s mission and values. Discover how we help businesses transform through technology.',
    keywords: 'about cloud focal, company history, mission values',
    breadcrumb: ['Home', 'About'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.SERVICES]: {
    path: ROUTES.SERVICES,
    title: 'Services',
    description: 'Comprehensive technology solutions including staffing, consulting, and system integration services.',
    keywords: 'technology services, IT solutions, staffing services, consulting services',
    breadcrumb: ['Home', 'Services'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.TECHNOLOGY_STAFFING]: {
    path: ROUTES.TECHNOLOGY_STAFFING,
    title: 'Technology Staffing',
    description: 'Find top-tier technology professionals to accelerate your digital transformation journey. Contract, permanent, and executive search services.',
    keywords: 'technology staffing, tech recruitment, software developers, IT professionals, talent acquisition',
    breadcrumb: ['Home', 'Services', 'Technology Staffing'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.IT_CONSULTING]: {
    path: ROUTES.IT_CONSULTING,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to drive innovation and operational excellence. Digital transformation and technology strategy consulting.',
    keywords: 'IT consulting, technology strategy, digital transformation, technology roadmap, IT advisory',
    breadcrumb: ['Home', 'Services', 'IT Consulting'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.INTEGRATION_SERVICES]: {
    path: ROUTES.INTEGRATION_SERVICES,
    title: 'Integration Services',
    description: 'Seamless system integration and API development to connect your technology ecosystem. Custom integration solutions.',
    keywords: 'system integration, API development, data integration, workflow automation, system connectivity',
    breadcrumb: ['Home', 'Services', 'Integration Services'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.INDUSTRIES]: {
    path: ROUTES.INDUSTRIES,
    title: 'Industries',
    description: 'Industry-specific technology solutions for financial services, healthcare, manufacturing, government, and more.',
    keywords: 'industry solutions, financial services IT, healthcare technology, manufacturing automation, government IT',
    breadcrumb: ['Home', 'Industries'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.PUBLIC_SECTOR]: {
    path: ROUTES.PUBLIC_SECTOR,
    title: 'Public Sector Solutions',
    description: 'Technology solutions for government agencies and public sector organizations. Secure, compliant, and citizen-focused solutions.',
    keywords: 'government IT, public sector technology, citizen services, government software, public sector consulting',
    breadcrumb: ['Home', 'Industries', 'Public Sector'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.PRIVATE_ENTERPRISE]: {
    path: ROUTES.PRIVATE_ENTERPRISE,
    title: 'Private Enterprise Solutions',
    description: 'Technology solutions for private sector businesses. Scalable, efficient, and growth-focused technology strategies.',
    keywords: 'enterprise technology, private sector IT, business technology solutions, corporate IT consulting',
    breadcrumb: ['Home', 'Industries', 'Private Enterprise'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },


  [ROUTES.CAREERS]: {
    path: ROUTES.CAREERS,
    title: 'Careers',
    description: 'Join our team of technology experts. Explore career opportunities at Cloud Focal and be part of our mission to transform businesses.',
    keywords: 'careers, jobs, employment, technology careers, IT jobs, software engineering jobs',
    breadcrumb: ['Home', 'Careers'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.RESOURCES]: {
    path: ROUTES.RESOURCES,
    title: 'Resources',
    description: 'Access our library of whitepapers, industry insights, and technology resources. Stay updated with the latest trends.',
    keywords: 'resources, whitepapers, industry insights, technology trends, research reports',
    breadcrumb: ['Home', 'Resources'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.CONTACT]: {
    path: ROUTES.CONTACT,
    title: 'Contact Us',
    description: 'Get in touch with our team of technology experts. Schedule a consultation or learn more about our services.',
    keywords: 'contact, consultation, get in touch, technology experts, business inquiry',
    breadcrumb: ['Home', 'Contact'],
    showInNavigation: true,
    showInFooter: true,
    requiresAuth: false,
    layout: 'default'
  },

  [ROUTES.PRIVACY_POLICY]: {
    path: ROUTES.PRIVACY_POLICY,
    title: 'Privacy Policy',
    description: 'Cloud Focal\'s privacy policy and data protection practices. Learn how we protect your personal information.',
    keywords: 'privacy policy, data protection, privacy rights, information security',
    breadcrumb: ['Home', 'Privacy Policy'],
    showInNavigation: false,
    showInFooter: true,
    requiresAuth: false,
    layout: 'legal'
  },

  [ROUTES.TERMS_OF_SERVICE]: {
    path: ROUTES.TERMS_OF_SERVICE,
    title: 'Terms of Service',
    description: 'Terms of service and user agreement for Cloud Focal website and services.',
    keywords: 'terms of service, user agreement, legal terms, service conditions',
    breadcrumb: ['Home', 'Terms of Service'],
    showInNavigation: false,
    showInFooter: true,
    requiresAuth: false,
    layout: 'legal'
  },

  [ROUTES.COOKIE_POLICY]: {
    path: ROUTES.COOKIE_POLICY,
    title: 'Cookie Policy',
    description: 'Information about cookies used on Cloud Focal website and how to manage your cookie preferences.',
    keywords: 'cookie policy, cookies, tracking, privacy preferences',
    breadcrumb: ['Home', 'Cookie Policy'],
    showInNavigation: false,
    showInFooter: true,
    requiresAuth: false,
    layout: 'legal'
  },

  [ROUTES.NOT_FOUND]: {
    path: ROUTES.NOT_FOUND,
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found. Return to our homepage or explore our services.',
    keywords: '404, page not found, error',
    breadcrumb: ['Home', 'Page Not Found'],
    showInNavigation: false,
    showInFooter: false,
    requiresAuth: false,
    layout: 'error'
  }
};

// Navigation structure
export const NAVIGATION_CONFIG = {
  main: [
    {
      id: 'about',
      title: 'About',
      path: ROUTES.ABOUT,
      icon: 'info',
      description: 'Learn about our company and team'
    },
    {
      id: 'services',
      title: 'Services',
      path: ROUTES.SERVICES,
      icon: 'briefcase',
      description: 'Our technology solutions',
      children: [
        {
          id: 'technology-staffing',
          title: 'Technology Staffing',
          path: ROUTES.TECHNOLOGY_STAFFING,
          description: 'Find top tech talent'
        },
        {
          id: 'it-consulting',
          title: 'IT Consulting',
          path: ROUTES.IT_CONSULTING,
          description: 'Strategic technology guidance'
        },
        {
          id: 'integration-services',
          title: 'Integration Services',
          path: ROUTES.INTEGRATION_SERVICES,
          description: 'System integration solutions'
        }
      ]
    },
    {
      id: 'industries',
      title: 'Industries',
      path: ROUTES.INDUSTRIES,
      icon: 'building',
      description: 'Industry-specific solutions',
      children: [
        {
          id: 'public-sector',
          title: 'Public Sector',
          path: ROUTES.PUBLIC_SECTOR,
          description: 'Government solutions'
        },
        {
          id: 'private-enterprise',
          title: 'Private Enterprise',
          path: ROUTES.PRIVATE_ENTERPRISE,
          description: 'Business solutions'
        }
      ]
    },
    {
      id: 'careers',
      title: 'Careers',
      path: ROUTES.CAREERS,
      icon: 'users',
      description: 'Join our team'
    },
    {
      id: 'resources',
      title: 'Resources',
      path: ROUTES.RESOURCES,
      icon: 'book-open',
      description: 'Whitepapers and insights'
    },
    {
      id: 'contact',
      title: 'Contact',
      path: ROUTES.CONTACT,
      icon: 'mail',
      description: 'Get in touch'
    }
  ],

  footer: {
    services: [
      { title: 'Technology Staffing', path: ROUTES.TECHNOLOGY_STAFFING },
      { title: 'IT Consulting', path: ROUTES.IT_CONSULTING },
      { title: 'Integration Services', path: ROUTES.INTEGRATION_SERVICES }
    ],
    company: [
      { title: 'About Us', path: ROUTES.ABOUT },
      { title: 'Careers', path: ROUTES.CAREERS },
      { title: 'Contact', path: ROUTES.CONTACT }
    ],
    resources: [
      { title: 'Resources', path: ROUTES.RESOURCES },
      { title: 'Privacy Policy', path: ROUTES.PRIVACY_POLICY },
      { title: 'Terms of Service', path: ROUTES.TERMS_OF_SERVICE },
      { title: 'Cookie Policy', path: ROUTES.COOKIE_POLICY }
    ]
  }
};

// Route groups for different layouts
export const ROUTE_GROUPS = {
  public: [
    ROUTES.HOME,
    ROUTES.ABOUT,
    ROUTES.SERVICES,
    ROUTES.TECHNOLOGY_STAFFING,
    ROUTES.IT_CONSULTING,
    ROUTES.INTEGRATION_SERVICES,
    ROUTES.INDUSTRIES,
    ROUTES.PUBLIC_SECTOR,
    ROUTES.PRIVATE_ENTERPRISE,
    ROUTES.CAREERS,
    ROUTES.RESOURCES,
    ROUTES.CONTACT
  ],

  legal: [
    ROUTES.PRIVACY_POLICY,
    ROUTES.TERMS_OF_SERVICE,
    ROUTES.COOKIE_POLICY
  ],

  error: [
    ROUTES.NOT_FOUND
  ],

  protected: [
    // Add protected routes here when authentication is implemented
  ]
};

// Route permissions
export const ROUTE_PERMISSIONS = {
  [ROUTES.HOME]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.ABOUT]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.SERVICES]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.TECHNOLOGY_STAFFING]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.IT_CONSULTING]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.INTEGRATION_SERVICES]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.INDUSTRIES]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.PUBLIC_SECTOR]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.PRIVATE_ENTERPRISE]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.CAREERS]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.RESOURCES]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.CONTACT]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.PRIVACY_POLICY]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.TERMS_OF_SERVICE]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.COOKIE_POLICY]: { roles: ['guest', 'user', 'admin'] },
  [ROUTES.NOT_FOUND]: { roles: ['guest', 'user', 'admin'] }
};

// Route redirects
export const ROUTE_REDIRECTS = {
  '/home': ROUTES.HOME,
  '/index': ROUTES.HOME,
  '/index.html': ROUTES.HOME,
  '/staffing': ROUTES.TECHNOLOGY_STAFFING,
  '/consulting': ROUTES.IT_CONSULTING,
  '/integration': ROUTES.INTEGRATION_SERVICES,
  '/jobs': ROUTES.CAREERS,
  '/blog': ROUTES.RESOURCES,
  '/whitepapers': ROUTES.RESOURCES,
  '/get-started': ROUTES.CONTACT,
  '/quote': ROUTES.CONTACT
};

// Utility functions
export const getRouteConfig = (path) => {
  return ROUTE_CONFIG[path] || ROUTE_CONFIG[ROUTES.NOT_FOUND];
};

export const getBreadcrumbs = (path) => {
  const config = getRouteConfig(path);
  return config.breadcrumb || ['Home'];
};

export const isRouteInNavigation = (path) => {
  const config = getRouteConfig(path);
  return config.showInNavigation;
};

export const isRouteInFooter = (path) => {
  const config = getRouteConfig(path);
  return config.showInFooter;
};

export const getRouteTitle = (path) => {
  const config = getRouteConfig(path);
  return config.title;
};

export const getRouteDescription = (path) => {
  const config = getRouteConfig(path);
  return config.description;
};

export const getRouteKeywords = (path) => {
  const config = getRouteConfig(path);
  return config.keywords;
};

export const getRouteLayout = (path) => {
  const config = getRouteConfig(path);
  return config.layout || 'default';
};

export const requiresAuth = (path) => {
  const config = getRouteConfig(path);
  return config.requiresAuth;
};

export const getNavigationRoutes = () => {
  return Object.values(ROUTE_CONFIG).filter(route => route.showInNavigation);
};

export const getFooterRoutes = () => {
  return Object.values(ROUTE_CONFIG).filter(route => route.showInFooter);
};

export default {
  ROUTE_CONFIG,
  NAVIGATION_CONFIG,
  ROUTE_GROUPS,
  ROUTE_PERMISSIONS,
  ROUTE_REDIRECTS,
  getRouteConfig,
  getBreadcrumbs,
  isRouteInNavigation,
  isRouteInFooter,
  getRouteTitle,
  getRouteDescription,
  getRouteKeywords,
  getRouteLayout,
  requiresAuth,
  getNavigationRoutes,
  getFooterRoutes
};
