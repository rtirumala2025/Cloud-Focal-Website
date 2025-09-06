/**
 * Event tracking utilities for Cloud Focal website
 * Centralized event tracking with consistent naming and parameters
 */

import { trackEvent, trackFormSubmission, trackButtonClick, trackDownload, trackExternalLink } from './googleAnalytics';

// Event categories
export const EVENT_CATEGORIES = {
  ENGAGEMENT: 'engagement',
  FORM: 'form',
  NAVIGATION: 'navigation',
  CONTENT: 'content',
  BUSINESS: 'business',
  CAREERS: 'careers',
  MARKETING: 'marketing',
  SOCIAL: 'social',
  ERROR: 'error',
  PERFORMANCE: 'performance',
  ACCESSIBILITY: 'accessibility',
  MOBILE: 'mobile',
  VIDEO: 'video',
  SEARCH: 'search',
  DOWNLOAD: 'download',
  OUTBOUND: 'outbound'
};

// Event actions
export const EVENT_ACTIONS = {
  CLICK: 'click',
  SUBMIT: 'submit',
  VIEW: 'view',
  DOWNLOAD: 'download',
  SHARE: 'share',
  LIKE: 'like',
  FOLLOW: 'follow',
  SUBSCRIBE: 'subscribe',
  SEARCH: 'search',
  SCROLL: 'scroll',
  HOVER: 'hover',
  FOCUS: 'focus',
  BLUR: 'blur',
  ERROR: 'error',
  SUCCESS: 'success',
  LOAD: 'load',
  UNLOAD: 'unload'
};

// Service types for business events
export const SERVICE_TYPES = {
  TECHNOLOGY_STAFFING: 'technology_staffing',
  IT_CONSULTING: 'it_consulting',
  INTEGRATION_SERVICES: 'integration_services'
};

// Industry types
export const INDUSTRY_TYPES = {
  FINANCIAL_SERVICES: 'financial_services',
  HEALTHCARE: 'healthcare',
  MANUFACTURING: 'manufacturing',
  GOVERNMENT: 'government',
  TECHNOLOGY: 'technology',
  RETAIL: 'retail',
  EDUCATION: 'education'
};

// Form types
export const FORM_TYPES = {
  CONTACT: 'contact',
  CONSULTATION: 'consultation',
  JOB_APPLICATION: 'job_application',
  NEWSLETTER: 'newsletter',
  QUOTE_REQUEST: 'quote_request',
  DEMO_REQUEST: 'demo_request'
};

// Content types
export const CONTENT_TYPES = {
  CASE_STUDY: 'case_study',
  WHITEPAPER: 'whitepaper',
  BLOG_POST: 'blog_post',
  VIDEO: 'video',
  WEBINAR: 'webinar',
  RESOURCE: 'resource'
};

/**
 * Track navigation events
 */
export const trackNavigation = {
  // Track menu clicks
  menuClick: (menuItem, menuLocation = 'header') => {
    trackEvent('menu_click', {
      category: EVENT_CATEGORIES.NAVIGATION,
      action: EVENT_ACTIONS.CLICK,
      label: menuItem,
      menu_location: menuLocation
    });
  },

  // Track breadcrumb clicks
  breadcrumbClick: (breadcrumbItem, breadcrumbPosition) => {
    trackEvent('breadcrumb_click', {
      category: EVENT_CATEGORIES.NAVIGATION,
      action: EVENT_ACTIONS.CLICK,
      label: breadcrumbItem,
      position: breadcrumbPosition
    });
  },

  // Track footer link clicks
  footerLinkClick: (linkText, linkSection) => {
    trackEvent('footer_link_click', {
      category: EVENT_CATEGORIES.NAVIGATION,
      action: EVENT_ACTIONS.CLICK,
      label: linkText,
      link_section: linkSection
    });
  },

  // Track pagination
  paginationClick: (pageNumber, totalPages, pageType) => {
    trackEvent('pagination_click', {
      category: EVENT_CATEGORIES.NAVIGATION,
      action: EVENT_ACTIONS.CLICK,
      label: `Page ${pageNumber}`,
      page_number: pageNumber,
      total_pages: totalPages,
      page_type: pageType
    });
  }
};

/**
 * Track form events
 */
export const trackFormEvents = {
  // Track form starts
  formStart: (formName, formType) => {
    trackEvent('form_start', {
      category: EVENT_CATEGORIES.FORM,
      action: EVENT_ACTIONS.VIEW,
      label: formName,
      form_type: formType
    });
  },

  // Track form field interactions
  fieldFocus: (fieldName, formName) => {
    trackEvent('form_field_focus', {
      category: EVENT_CATEGORIES.FORM,
      action: EVENT_ACTIONS.FOCUS,
      label: fieldName,
      form_name: formName
    });
  },

  // Track form field errors
  fieldError: (fieldName, errorType, formName) => {
    trackEvent('form_field_error', {
      category: EVENT_CATEGORIES.FORM,
      action: EVENT_ACTIONS.ERROR,
      label: fieldName,
      error_type: errorType,
      form_name: formName
    });
  },

  // Track form submissions
  formSubmit: (formName, formType, success = true) => {
    trackFormSubmission(formName, formType);
    
    trackEvent('form_submit_result', {
      category: EVENT_CATEGORIES.FORM,
      action: success ? EVENT_ACTIONS.SUCCESS : EVENT_ACTIONS.ERROR,
      label: formName,
      form_type: formType,
      success: success
    });
  },

  // Track form abandonment
  formAbandon: (formName, formType, fieldsCompleted) => {
    trackEvent('form_abandon', {
      category: EVENT_CATEGORIES.FORM,
      action: 'abandon',
      label: formName,
      form_type: formType,
      fields_completed: fieldsCompleted
    });
  }
};

/**
 * Track button and CTA events
 */
export const trackCTA = {
  // Track CTA clicks
  ctaClick: (ctaText, ctaLocation, ctaType = 'button') => {
    trackButtonClick(ctaText, ctaLocation);
    
    trackEvent('cta_click', {
      category: EVENT_CATEGORIES.ENGAGEMENT,
      action: EVENT_ACTIONS.CLICK,
      label: ctaText,
      cta_location: ctaLocation,
      cta_type: ctaType
    });
  },

  // Track service CTA clicks
  serviceCTAClick: (serviceType, ctaText, ctaLocation) => {
    trackEvent('service_cta_click', {
      category: EVENT_CATEGORIES.BUSINESS,
      action: EVENT_ACTIONS.CLICK,
      label: ctaText,
      service_type: serviceType,
      cta_location: ctaLocation
    });
  },

  // Track industry CTA clicks
  industryCTAClick: (industryType, ctaText, ctaLocation) => {
    trackEvent('industry_cta_click', {
      category: EVENT_CATEGORIES.BUSINESS,
      action: EVENT_ACTIONS.CLICK,
      label: ctaText,
      industry_type: industryType,
      cta_location: ctaLocation
    });
  }
};

/**
 * Track content engagement
 */
export const trackContent = {
  // Track content views
  contentView: (contentTitle, contentType, contentId) => {
    trackEvent('content_view', {
      category: EVENT_CATEGORIES.CONTENT,
      action: EVENT_ACTIONS.VIEW,
      label: contentTitle,
      content_type: contentType,
      content_id: contentId
    });
  },

  // Track case study views
  caseStudyView: (caseStudyTitle, caseStudyId, industry) => {
    trackEvent('case_study_view', {
      category: EVENT_CATEGORIES.CONTENT,
      action: EVENT_ACTIONS.VIEW,
      label: caseStudyTitle,
      case_study_id: caseStudyId,
      industry: industry
    });
  },

  // Track resource downloads
  resourceDownload: (resourceTitle, resourceType, resourceSize) => {
    trackDownload(resourceTitle, resourceType, resourceSize);
    
    trackEvent('resource_download', {
      category: EVENT_CATEGORIES.CONTENT,
      action: EVENT_ACTIONS.DOWNLOAD,
      label: resourceTitle,
      resource_type: resourceType,
      resource_size: resourceSize
    });
  },

  // Track whitepaper downloads
  whitepaperDownload: (whitepaperTitle, industry, formCompleted = false) => {
    trackEvent('whitepaper_download', {
      category: EVENT_CATEGORIES.CONTENT,
      action: EVENT_ACTIONS.DOWNLOAD,
      label: whitepaperTitle,
      industry: industry,
      form_completed: formCompleted
    });
  },

  // Track video interactions
  videoPlay: (videoTitle, videoDuration, videoLocation) => {
    trackEvent('video_play', {
      category: EVENT_CATEGORIES.VIDEO,
      action: 'play',
      label: videoTitle,
      video_duration: videoDuration,
      video_location: videoLocation
    });
  },

  // Track video completion
  videoComplete: (videoTitle, videoDuration, videoLocation) => {
    trackEvent('video_complete', {
      category: EVENT_CATEGORIES.VIDEO,
      action: 'complete',
      label: videoTitle,
      video_duration: videoDuration,
      video_location: videoLocation
    });
  }
};

/**
 * Track business events
 */
export const trackBusiness = {
  // Track service inquiries
  serviceInquiry: (serviceType, inquiryType, source) => {
    trackEvent('service_inquiry', {
      category: EVENT_CATEGORIES.BUSINESS,
      action: 'inquiry',
      label: serviceType,
      inquiry_type: inquiryType,
      source: source
    });
  },

  // Track consultation requests
  consultationRequest: (consultationType, industry, source) => {
    trackEvent('consultation_request', {
      category: EVENT_CATEGORIES.BUSINESS,
      action: 'request',
      label: consultationType,
      industry: industry,
      source: source
    });
  },

  // Track quote requests
  quoteRequest: (serviceType, estimatedValue, industry) => {
    trackEvent('quote_request', {
      category: EVENT_CATEGORIES.BUSINESS,
      action: 'request',
      label: serviceType,
      estimated_value: estimatedValue,
      industry: industry
    });
  },

  // Track demo requests
  demoRequest: (demoType, companySize, industry) => {
    trackEvent('demo_request', {
      category: EVENT_CATEGORIES.BUSINESS,
      action: 'request',
      label: demoType,
      company_size: companySize,
      industry: industry
    });
  }
};

/**
 * Track career events
 */
export const trackCareers = {
  // Track job views
  jobView: (jobTitle, jobId, jobLocation, jobType) => {
    trackEvent('job_view', {
      category: EVENT_CATEGORIES.CAREERS,
      action: EVENT_ACTIONS.VIEW,
      label: jobTitle,
      job_id: jobId,
      job_location: jobLocation,
      job_type: jobType
    });
  },

  // Track job applications
  jobApplication: (jobTitle, jobId, applicationSource) => {
    trackEvent('job_application', {
      category: EVENT_CATEGORIES.CAREERS,
      action: 'apply',
      label: jobTitle,
      job_id: jobId,
      application_source: applicationSource
    });
  },

  // Track job shares
  jobShare: (jobTitle, jobId, sharePlatform) => {
    trackEvent('job_share', {
      category: EVENT_CATEGORIES.CAREERS,
      action: EVENT_ACTIONS.SHARE,
      label: jobTitle,
      job_id: jobId,
      share_platform: sharePlatform
    });
  },

  // Track career page views
  careerPageView: (pageSection) => {
    trackEvent('career_page_view', {
      category: EVENT_CATEGORIES.CAREERS,
      action: EVENT_ACTIONS.VIEW,
      label: pageSection
    });
  }
};

/**
 * Track marketing events
 */
export const trackMarketing = {
  // Track newsletter subscriptions
  newsletterSubscribe: (source, emailDomain) => {
    trackEvent('newsletter_subscribe', {
      category: EVENT_CATEGORIES.MARKETING,
      action: EVENT_ACTIONS.SUBSCRIBE,
      label: source,
      email_domain: emailDomain
    });
  },

  // Track newsletter unsubscriptions
  newsletterUnsubscribe: (source, reason) => {
    trackEvent('newsletter_unsubscribe', {
      category: EVENT_CATEGORIES.MARKETING,
      action: 'unsubscribe',
      label: source,
      reason: reason
    });
  },

  // Track webinar registrations
  webinarRegister: (webinarTitle, webinarDate, industry) => {
    trackEvent('webinar_register', {
      category: EVENT_CATEGORIES.MARKETING,
      action: 'register',
      label: webinarTitle,
      webinar_date: webinarDate,
      industry: industry
    });
  },

  // Track webinar attendance
  webinarAttend: (webinarTitle, attendanceDuration) => {
    trackEvent('webinar_attend', {
      category: EVENT_CATEGORIES.MARKETING,
      action: 'attend',
      label: webinarTitle,
      attendance_duration: attendanceDuration
    });
  }
};

/**
 * Track social media events
 */
export const trackSocial = {
  // Track social media clicks
  socialClick: (platform, action, contentTitle) => {
    trackEvent('social_click', {
      category: EVENT_CATEGORIES.SOCIAL,
      action: action,
      label: platform,
      content_title: contentTitle
    });
  },

  // Track social shares
  socialShare: (platform, contentTitle, contentType) => {
    trackEvent('social_share', {
      category: EVENT_CATEGORIES.SOCIAL,
      action: EVENT_ACTIONS.SHARE,
      label: platform,
      content_title: contentTitle,
      content_type: contentType
    });
  },

  // Track social follows
  socialFollow: (platform, followSource) => {
    trackEvent('social_follow', {
      category: EVENT_CATEGORIES.SOCIAL,
      action: EVENT_ACTIONS.FOLLOW,
      label: platform,
      follow_source: followSource
    });
  }
};

/**
 * Track search events
 */
export const trackSearch = {
  // Track search queries
  searchQuery: (searchTerm, resultsCount, searchType = 'site') => {
    trackEvent('search_query', {
      category: EVENT_CATEGORIES.SEARCH,
      action: EVENT_ACTIONS.SEARCH,
      label: searchTerm,
      results_count: resultsCount,
      search_type: searchType
    });
  },

  // Track search result clicks
  searchResultClick: (searchTerm, resultPosition, resultTitle) => {
    trackEvent('search_result_click', {
      category: EVENT_CATEGORIES.SEARCH,
      action: EVENT_ACTIONS.CLICK,
      label: searchTerm,
      result_position: resultPosition,
      result_title: resultTitle
    });
  },

  // Track search filters
  searchFilter: (filterType, filterValue, searchTerm) => {
    trackEvent('search_filter', {
      category: EVENT_CATEGORIES.SEARCH,
      action: 'filter',
      label: filterType,
      filter_value: filterValue,
      search_term: searchTerm
    });
  }
};

/**
 * Track error events
 */
export const trackErrors = {
  // Track JavaScript errors
  jsError: (errorMessage, errorStack, errorUrl) => {
    trackEvent('javascript_error', {
      category: EVENT_CATEGORIES.ERROR,
      action: EVENT_ACTIONS.ERROR,
      label: errorMessage,
      error_stack: errorStack,
      error_url: errorUrl
    });
  },

  // Track API errors
  apiError: (apiEndpoint, errorCode, errorMessage) => {
    trackEvent('api_error', {
      category: EVENT_CATEGORIES.ERROR,
      action: EVENT_ACTIONS.ERROR,
      label: apiEndpoint,
      error_code: errorCode,
      error_message: errorMessage
    });
  },

  // Track 404 errors
  notFoundError: (requestedUrl, referrer) => {
    trackEvent('404_error', {
      category: EVENT_CATEGORIES.ERROR,
      action: EVENT_ACTIONS.ERROR,
      label: requestedUrl,
      referrer: referrer
    });
  }
};

/**
 * Track performance events
 */
export const trackPerformance = {
  // Track page load time
  pageLoadTime: (loadTime, pagePath) => {
    trackEvent('page_load_time', {
      category: EVENT_CATEGORIES.PERFORMANCE,
      action: 'load',
      label: pagePath,
      value: loadTime
    });
  },

  // Track image load time
  imageLoadTime: (imageUrl, loadTime, imageSize) => {
    trackEvent('image_load_time', {
      category: EVENT_CATEGORIES.PERFORMANCE,
      action: 'load',
      label: imageUrl,
      value: loadTime,
      image_size: imageSize
    });
  },

  // Track API response time
  apiResponseTime: (apiEndpoint, responseTime, statusCode) => {
    trackEvent('api_response_time', {
      category: EVENT_CATEGORIES.PERFORMANCE,
      action: 'response',
      label: apiEndpoint,
      value: responseTime,
      status_code: statusCode
    });
  }
};

/**
 * Track accessibility events
 */
export const trackAccessibility = {
  // Track accessibility feature usage
  accessibilityFeature: (featureName, featureAction) => {
    trackEvent('accessibility_feature', {
      category: EVENT_CATEGORIES.ACCESSIBILITY,
      action: featureAction,
      label: featureName
    });
  },

  // Track keyboard navigation
  keyboardNavigation: (navigationType, elementType) => {
    trackEvent('keyboard_navigation', {
      category: EVENT_CATEGORIES.ACCESSIBILITY,
      action: 'navigate',
      label: navigationType,
      element_type: elementType
    });
  },

  // Track screen reader usage
  screenReaderUsage: (action, elementType) => {
    trackEvent('screen_reader_usage', {
      category: EVENT_CATEGORIES.ACCESSIBILITY,
      action: action,
      label: elementType
    });
  }
};

/**
 * Track mobile-specific events
 */
export const trackMobile = {
  // Track mobile app interactions
  mobileAppInteraction: (appAction, appSection) => {
    trackEvent('mobile_app_interaction', {
      category: EVENT_CATEGORIES.MOBILE,
      action: appAction,
      label: appSection
    });
  },

  // Track mobile gestures
  mobileGesture: (gestureType, gestureTarget) => {
    trackEvent('mobile_gesture', {
      category: EVENT_CATEGORIES.MOBILE,
      action: 'gesture',
      label: gestureType,
      gesture_target: gestureTarget
    });
  },

  // Track mobile orientation changes
  mobileOrientation: (orientation) => {
    trackEvent('mobile_orientation', {
      category: EVENT_CATEGORIES.MOBILE,
      action: 'orientation',
      label: orientation
    });
  }
};

// Export all tracking functions
export default {
  EVENT_CATEGORIES,
  EVENT_ACTIONS,
  SERVICE_TYPES,
  INDUSTRY_TYPES,
  FORM_TYPES,
  CONTENT_TYPES,
  trackNavigation,
  trackFormEvents,
  trackCTA,
  trackContent,
  trackBusiness,
  trackCareers,
  trackMarketing,
  trackSocial,
  trackSearch,
  trackErrors,
  trackPerformance,
  trackAccessibility,
  trackMobile
};
