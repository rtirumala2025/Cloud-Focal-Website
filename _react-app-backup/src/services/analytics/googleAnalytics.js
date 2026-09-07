/**
 * Google Analytics 4 integration for Cloud Focal website
 * Handles page views, events, and e-commerce tracking
 */

import { EXTERNAL_SERVICES, FEATURE_FLAGS } from '../../config/constants';

// Google Analytics configuration
const GA_CONFIG = {
  measurementId: EXTERNAL_SERVICES.GA_TRACKING_ID,
  enabled: FEATURE_FLAGS.ENABLE_ANALYTICS && !!EXTERNAL_SERVICES.GA_TRACKING_ID,
  debug: process.env.NODE_ENV === 'development',
  anonymizeIp: true,
  cookieExpires: 63072000, // 2 years
  cookieDomain: 'auto',
  cookieFlags: 'SameSite=None;Secure'
};

// Initialize Google Analytics
export const initializeGA = () => {
  if (!GA_CONFIG.enabled) {
    console.log('Google Analytics is disabled');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_CONFIG.measurementId, {
    anonymize_ip: GA_CONFIG.anonymizeIp,
    cookie_expires: GA_CONFIG.cookieExpires,
    cookie_domain: GA_CONFIG.cookieDomain,
    cookie_flags: GA_CONFIG.cookieFlags,
    send_page_view: false // We'll handle page views manually
  });

  if (GA_CONFIG.debug) {
    console.log('Google Analytics initialized:', GA_CONFIG.measurementId);
  }
};

// Track page view
export const trackPageView = (pagePath, pageTitle) => {
  if (!GA_CONFIG.enabled || !window.gtag) return;

  const pageData = {
    page_title: pageTitle || document.title,
    page_location: window.location.href,
    page_path: pagePath || window.location.pathname
  };

  window.gtag('event', 'page_view', pageData);

  if (GA_CONFIG.debug) {
    console.log('Page view tracked:', pageData);
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (!GA_CONFIG.enabled || !window.gtag) return;

  const eventData = {
    event_category: parameters.category || 'engagement',
    event_label: parameters.label || '',
    value: parameters.value || 0,
    ...parameters
  };

  window.gtag('event', eventName, eventData);

  if (GA_CONFIG.debug) {
    console.log('Event tracked:', eventName, eventData);
  }
};

// Track form submissions
export const trackFormSubmission = (formName, formType = 'contact') => {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType,
    event_category: 'form',
    event_label: formName
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    event_category: 'engagement',
    event_label: buttonName
  });
};

// Track file downloads
export const trackDownload = (fileName, fileType, fileSize) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    file_size: fileSize,
    event_category: 'download',
    event_label: fileName
  });
};

// Track external link clicks
export const trackExternalLink = (linkUrl, linkText) => {
  trackEvent('click', {
    link_url: linkUrl,
    link_text: linkText,
    event_category: 'outbound',
    event_label: linkUrl
  });
};

// Track search queries
export const trackSearch = (searchTerm, resultsCount) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'search',
    event_label: searchTerm
  });
};

// Track video interactions
export const trackVideoInteraction = (videoTitle, action, progress) => {
  trackEvent('video_interaction', {
    video_title: videoTitle,
    video_action: action,
    video_progress: progress,
    event_category: 'video',
    event_label: videoTitle
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll', {
    scroll_depth: depth,
    event_category: 'engagement',
    event_label: `${depth}%`
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('timing_complete', {
    name: 'page_time',
    value: timeInSeconds,
    event_category: 'timing',
    event_label: 'page_duration'
  });
};

// Track user engagement
export const trackEngagement = (engagementType, engagementValue) => {
  trackEvent('user_engagement', {
    engagement_type: engagementType,
    engagement_value: engagementValue,
    event_category: 'engagement',
    event_label: engagementType
  });
};

// Track errors
export const trackError = (errorMessage, errorType = 'javascript') => {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    event_category: 'error',
    event_label: errorType
  });
};

// Track e-commerce events (for future use)
export const trackPurchase = (transactionId, value, currency = 'USD', items = []) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items,
    event_category: 'ecommerce',
    event_label: transactionId
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceType, inquiryType) => {
  trackEvent('service_inquiry', {
    service_type: serviceType,
    inquiry_type: inquiryType,
    event_category: 'business',
    event_label: serviceType
  });
};

// Track career applications
export const trackJobApplication = (jobTitle, jobId) => {
  trackEvent('job_application', {
    job_title: jobTitle,
    job_id: jobId,
    event_category: 'careers',
    event_label: jobTitle
  });
};

// Track newsletter subscriptions
export const trackNewsletterSubscription = (source) => {
  trackEvent('newsletter_signup', {
    signup_source: source,
    event_category: 'marketing',
    event_label: source
  });
};

// Track consultation requests
export const trackConsultationRequest = (consultationType) => {
  trackEvent('consultation_request', {
    consultation_type: consultationType,
    event_category: 'business',
    event_label: consultationType
  });
};

// Track case study views
export const trackCaseStudyView = (caseStudyTitle, caseStudyId) => {
  trackEvent('case_study_view', {
    case_study_title: caseStudyTitle,
    case_study_id: caseStudyId,
    event_category: 'content',
    event_label: caseStudyTitle
  });
};

// Track resource downloads
export const trackResourceDownload = (resourceTitle, resourceType) => {
  trackEvent('resource_download', {
    resource_title: resourceTitle,
    resource_type: resourceType,
    event_category: 'content',
    event_label: resourceTitle
  });
};

// Track social media clicks
export const trackSocialClick = (platform, action) => {
  trackEvent('social_click', {
    social_platform: platform,
    social_action: action,
    event_category: 'social',
    event_label: platform
  });
};

// Track contact form interactions
export const trackContactFormInteraction = (formField, action) => {
  trackEvent('form_interaction', {
    form_field: formField,
    form_action: action,
    event_category: 'form',
    event_label: formField
  });
};

// Track mobile app interactions (if applicable)
export const trackMobileAppInteraction = (appAction, appSection) => {
  trackEvent('mobile_app_interaction', {
    app_action: appAction,
    app_section: appSection,
    event_category: 'mobile',
    event_label: appAction
  });
};

// Track accessibility features
export const trackAccessibilityFeature = (featureName, featureAction) => {
  trackEvent('accessibility_feature', {
    feature_name: featureName,
    feature_action: featureAction,
    event_category: 'accessibility',
    event_label: featureName
  });
};

// Track performance metrics
export const trackPerformance = (metricName, metricValue, metricUnit = 'ms') => {
  trackEvent('performance_metric', {
    metric_name: metricName,
    metric_value: metricValue,
    metric_unit: metricUnit,
    event_category: 'performance',
    event_label: metricName
  });
};

// Set user properties
export const setUserProperties = (properties) => {
  if (!GA_CONFIG.enabled || !window.gtag) return;

  window.gtag('config', GA_CONFIG.measurementId, {
    custom_map: properties
  });

  if (GA_CONFIG.debug) {
    console.log('User properties set:', properties);
  }
};

// Set user ID
export const setUserId = (userId) => {
  if (!GA_CONFIG.enabled || !window.gtag) return;

  window.gtag('config', GA_CONFIG.measurementId, {
    user_id: userId
  });

  if (GA_CONFIG.debug) {
    console.log('User ID set:', userId);
  }
};

// Enhanced e-commerce tracking
export const trackEnhancedEcommerce = {
  // Track product views
  viewItem: (itemId, itemName, category, price, currency = 'USD') => {
    trackEvent('view_item', {
      currency: currency,
      value: price,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: price,
        quantity: 1
      }]
    });
  },

  // Track add to cart
  addToCart: (itemId, itemName, category, price, quantity = 1, currency = 'USD') => {
    trackEvent('add_to_cart', {
      currency: currency,
      value: price * quantity,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: price,
        quantity: quantity
      }]
    });
  },

  // Track remove from cart
  removeFromCart: (itemId, itemName, category, price, quantity = 1, currency = 'USD') => {
    trackEvent('remove_from_cart', {
      currency: currency,
      value: price * quantity,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: price,
        quantity: quantity
      }]
    });
  },

  // Track begin checkout
  beginCheckout: (value, currency = 'USD', items = []) => {
    trackEvent('begin_checkout', {
      currency: currency,
      value: value,
      items: items
    });
  }
};

// Utility functions
export const isGAEnabled = () => GA_CONFIG.enabled;

export const getGAConfig = () => GA_CONFIG;

// React hook for Google Analytics
export const useGoogleAnalytics = () => {
  const trackPageView = (path, title) => {
    trackPageView(path, title);
  };

  const trackEvent = (eventName, parameters) => {
    trackEvent(eventName, parameters);
  };

  return {
    trackPageView,
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackDownload,
    trackExternalLink,
    trackSearch,
    trackVideoInteraction,
    trackScrollDepth,
    trackTimeOnPage,
    trackEngagement,
    trackError,
    trackServiceInquiry,
    trackJobApplication,
    trackNewsletterSubscription,
    trackConsultationRequest,
    trackCaseStudyView,
    trackResourceDownload,
    trackSocialClick,
    trackContactFormInteraction,
    trackMobileAppInteraction,
    trackAccessibilityFeature,
    trackPerformance,
    setUserProperties,
    setUserId,
    isEnabled: isGAEnabled()
  };
};

export default {
  initializeGA,
  trackPageView,
  trackEvent,
  trackFormSubmission,
  trackButtonClick,
  trackDownload,
  trackExternalLink,
  trackSearch,
  trackVideoInteraction,
  trackScrollDepth,
  trackTimeOnPage,
  trackEngagement,
  trackError,
  trackPurchase,
  trackServiceInquiry,
  trackJobApplication,
  trackNewsletterSubscription,
  trackConsultationRequest,
  trackCaseStudyView,
  trackResourceDownload,
  trackSocialClick,
  trackContactFormInteraction,
  trackMobileAppInteraction,
  trackAccessibilityFeature,
  trackPerformance,
  setUserProperties,
  setUserId,
  trackEnhancedEcommerce,
  useGoogleAnalytics,
  isGAEnabled,
  getGAConfig
};
