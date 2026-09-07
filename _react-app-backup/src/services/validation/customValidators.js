/**
 * Custom validation functions for Cloud Focal website
 * Business-specific validation rules and utilities
 */

import { VALIDATION_RULES, FORM_CONFIG } from '../../config/constants';

// Phone number validation with international support
export const validatePhoneNumber = (phone, country = 'US') => {
  if (!phone) return { isValid: false, error: 'Phone number is required' };

  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');

  // Country-specific validation
  switch (country) {
    case 'US':
    case 'CA':
      if (cleanPhone.length === 10) {
        return { isValid: true, formatted: formatUSPhone(cleanPhone) };
      } else if (cleanPhone.length === 11 && cleanPhone.startsWith('1')) {
        return { isValid: true, formatted: formatUSPhone(cleanPhone.slice(1)) };
      }
      return { isValid: false, error: 'Please enter a valid 10-digit US phone number' };

    case 'UK':
      if (cleanPhone.length >= 10 && cleanPhone.length <= 11) {
        return { isValid: true, formatted: formatUKPhone(cleanPhone) };
      }
      return { isValid: false, error: 'Please enter a valid UK phone number' };

    case 'AU':
      if (cleanPhone.length === 10) {
        return { isValid: true, formatted: formatAUSPhone(cleanPhone) };
      }
      return { isValid: false, error: 'Please enter a valid Australian phone number' };

    default:
      if (cleanPhone.length >= 7 && cleanPhone.length <= 15) {
        return { isValid: true, formatted: cleanPhone };
      }
      return { isValid: false, error: 'Please enter a valid phone number' };
  }
};

// Format US phone number
const formatUSPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

// Format UK phone number
const formatUKPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  } else if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
};

// Format Australian phone number
const formatAUSPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
};

// Professional email validation
export const validateProfessionalEmail = (email) => {
  if (!email) return { isValid: false, error: 'Email is required' };

  // Basic email format validation
  if (!VALIDATION_RULES.EMAIL.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  // Check for common disposable email domains
  const disposableDomains = [
    '10minutemail.com', 'tempmail.org', 'guerrillamail.com', 'mailinator.com',
    'yopmail.com', 'temp-mail.org', 'throwaway.email', 'getnada.com'
  ];

  const domain = email.split('@')[1]?.toLowerCase();
  if (disposableDomains.includes(domain)) {
    return { isValid: false, error: 'Please use a professional email address' };
  }

  // Check for business email indicators
  const businessIndicators = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const isPersonalEmail = businessIndicators.includes(domain);

  return {
    isValid: true,
    isPersonalEmail,
    domain,
    warning: isPersonalEmail ? 'Consider using your business email for better communication' : null
  };
};

// Company name validation
export const validateCompanyName = (companyName) => {
  if (!companyName) return { isValid: false, error: 'Company name is required' };

  const trimmed = companyName.trim();
  
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Company name must be at least 2 characters long' };
  }

  if (trimmed.length > 100) {
    return { isValid: false, error: 'Company name must be less than 100 characters' };
  }

  // Check for valid characters (letters, numbers, spaces, common punctuation)
  const validPattern = /^[a-zA-Z0-9\s\-\.&'()]+$/;
  if (!validPattern.test(trimmed)) {
    return { isValid: false, error: 'Company name contains invalid characters' };
  }

  return { isValid: true, formatted: trimmed };
};

// Job title validation
export const validateJobTitle = (jobTitle) => {
  if (!jobTitle) return { isValid: false, error: 'Job title is required' };

  const trimmed = jobTitle.trim();
  
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Job title must be at least 2 characters long' };
  }

  if (trimmed.length > 100) {
    return { isValid: false, error: 'Job title must be less than 100 characters' };
  }

  return { isValid: true, formatted: trimmed };
};

// File upload validation
export const validateFileUpload = (file, options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['.pdf', '.doc', '.docx', '.txt'],
    required = false
  } = options;

  if (!file) {
    return required 
      ? { isValid: false, error: 'File is required' }
      : { isValid: true };
  }

  // Check file size
  if (file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));
    return { isValid: false, error: `File size must be less than ${maxSizeMB}MB` };
  }

  // Check file type
  const fileName = file.name.toLowerCase();
  const fileExtension = fileName.substring(fileName.lastIndexOf('.'));
  
  if (!allowedTypes.includes(fileExtension)) {
    return { 
      isValid: false, 
      error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}` 
    };
  }

  // Check for malicious file names
  const maliciousPatterns = /[<>:"/\\|?*\x00-\x1f]/;
  if (maliciousPatterns.test(fileName)) {
    return { isValid: false, error: 'File name contains invalid characters' };
  }

  return { isValid: true };
};

// Resume validation (specific to job applications)
export const validateResume = (file) => {
  const resumeOptions = {
    maxSize: 10 * 1024 * 1024, // 10MB for resumes
    allowedTypes: ['.pdf', '.doc', '.docx'],
    required: true
  };

  return validateFileUpload(file, resumeOptions);
};

// Cover letter validation
export const validateCoverLetter = (file) => {
  const coverLetterOptions = {
    maxSize: 5 * 1024 * 1024, // 5MB for cover letters
    allowedTypes: ['.pdf', '.doc', '.docx', '.txt'],
    required: false
  };

  return validateFileUpload(file, coverLetterOptions);
};

// Message/content validation
export const validateMessage = (message, options = {}) => {
  const {
    minLength = 10,
    maxLength = 1000,
    required = true
  } = options;

  if (!message) {
    return required 
      ? { isValid: false, error: 'Message is required' }
      : { isValid: true };
  }

  const trimmed = message.trim();

  if (trimmed.length < minLength) {
    return { isValid: false, error: `Message must be at least ${minLength} characters long` };
  }

  if (trimmed.length > maxLength) {
    return { isValid: false, error: `Message must be less than ${maxLength} characters` };
  }

  // Check for spam indicators
  const spamIndicators = [
    /https?:\/\/[^\s]+/gi, // URLs
    /[A-Z]{5,}/g, // Excessive caps
    /(.)\1{4,}/g // Repeated characters
  ];

  const spamScore = spamIndicators.reduce((score, pattern) => {
    return score + (pattern.test(trimmed) ? 1 : 0);
  }, 0);

  if (spamScore >= 2) {
    return { isValid: false, error: 'Message appears to be spam' };
  }

  return { isValid: true, formatted: trimmed };
};

// Budget validation
export const validateBudget = (budget, options = {}) => {
  const {
    minAmount = 1000,
    maxAmount = 10000000,
    required = false
  } = options;

  if (!budget) {
    return required 
      ? { isValid: false, error: 'Budget is required' }
      : { isValid: true };
  }

  // Remove currency symbols and commas
  const cleanBudget = budget.replace(/[$,]/g, '');
  const numericBudget = parseFloat(cleanBudget);

  if (isNaN(numericBudget)) {
    return { isValid: false, error: 'Please enter a valid budget amount' };
  }

  if (numericBudget < minAmount) {
    return { isValid: false, error: `Budget must be at least $${minAmount.toLocaleString()}` };
  }

  if (numericBudget > maxAmount) {
    return { isValid: false, error: `Budget must be less than $${maxAmount.toLocaleString()}` };
  }

  return { 
    isValid: true, 
    formatted: `$${numericBudget.toLocaleString()}`,
    numeric: numericBudget
  };
};

// Project timeline validation
export const validateProjectTimeline = (timeline) => {
  if (!timeline) return { isValid: false, error: 'Project timeline is required' };

  const validTimelines = [
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'ongoing'
  ];

  if (!validTimelines.includes(timeline)) {
    return { isValid: false, error: 'Please select a valid project timeline' };
  }

  return { isValid: true };
};

// Industry validation
export const validateIndustry = (industry) => {
  if (!industry) return { isValid: false, error: 'Industry is required' };

  const validIndustries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Government',
    'Technology',
    'Retail',
    'Education',
    'Other'
  ];

  if (!validIndustries.includes(industry)) {
    return { isValid: false, error: 'Please select a valid industry' };
  }

  return { isValid: true };
};

// Service type validation
export const validateServiceType = (serviceType) => {
  if (!serviceType) return { isValid: false, error: 'Service type is required' };

  const validServices = [
    'Technology Staffing',
    'IT Consulting',
    'Integration Services',
    'Multiple Services'
  ];

  if (!validServices.includes(serviceType)) {
    return { isValid: false, error: 'Please select a valid service type' };
  }

  return { isValid: true };
};

// Experience level validation
export const validateExperienceLevel = (experience) => {
  if (!experience) return { isValid: false, error: 'Experience level is required' };

  const validLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Executive Level (10+ years)'
  ];

  if (!validLevels.includes(experience)) {
    return { isValid: false, error: 'Please select a valid experience level' };
  }

  return { isValid: true };
};

// URL validation
export const validateURL = (url) => {
  if (!url) return { isValid: true }; // URL is optional

  try {
    const urlObj = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, error: 'URL must use HTTP or HTTPS protocol' };
    }

    return { isValid: true, formatted: urlObj.href };
  } catch (error) {
    return { isValid: false, error: 'Please enter a valid URL' };
  }
};

// LinkedIn profile validation
export const validateLinkedInProfile = (linkedinUrl) => {
  if (!linkedinUrl) return { isValid: true }; // LinkedIn is optional

  const linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
  
  if (!linkedinPattern.test(linkedinUrl)) {
    return { isValid: false, error: 'Please enter a valid LinkedIn profile URL' };
  }

  return { isValid: true, formatted: linkedinUrl };
};

// Multi-step form validation
export const validateFormStep = (stepData, stepNumber) => {
  const errors = {};

  switch (stepNumber) {
    case 1: // Personal Information
      const nameValidation = validateJobTitle(stepData.firstName);
      if (!nameValidation.isValid) errors.firstName = nameValidation.error;

      const lastNameValidation = validateJobTitle(stepData.lastName);
      if (!lastNameValidation.isValid) errors.lastName = lastNameValidation.error;

      const emailValidation = validateProfessionalEmail(stepData.email);
      if (!emailValidation.isValid) errors.email = emailValidation.error;

      const phoneValidation = validatePhoneNumber(stepData.phone);
      if (!phoneValidation.isValid) errors.phone = phoneValidation.error;
      break;

    case 2: // Professional Information
      const companyValidation = validateCompanyName(stepData.company);
      if (!companyValidation.isValid) errors.company = companyValidation.error;

      const titleValidation = validateJobTitle(stepData.jobTitle);
      if (!titleValidation.isValid) errors.jobTitle = titleValidation.error;

      const experienceValidation = validateExperienceLevel(stepData.experience);
      if (!experienceValidation.isValid) errors.experience = experienceValidation.error;
      break;

    case 3: // Project Details
      const serviceValidation = validateServiceType(stepData.serviceType);
      if (!serviceValidation.isValid) errors.serviceType = serviceValidation.error;

      const industryValidation = validateIndustry(stepData.industry);
      if (!industryValidation.isValid) errors.industry = industryValidation.error;

      const timelineValidation = validateProjectTimeline(stepData.timeline);
      if (!timelineValidation.isValid) errors.timeline = timelineValidation.error;

      const budgetValidation = validateBudget(stepData.budget);
      if (!budgetValidation.isValid) errors.budget = budgetValidation.error;
      break;

    case 4: // Additional Information
      const messageValidation = validateMessage(stepData.message);
      if (!messageValidation.isValid) errors.message = messageValidation.error;

      const linkedinValidation = validateLinkedInProfile(stepData.linkedinUrl);
      if (!linkedinValidation.isValid) errors.linkedinUrl = linkedinValidation.error;
      break;

    default:
      break;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Form field validation with real-time feedback
export const validateField = (fieldName, value, formType = 'contact') => {
  const fieldConfig = FORM_CONFIG[formType.toUpperCase()] || FORM_CONFIG.CONTACT;
  
  switch (fieldName) {
    case 'name':
    case 'firstName':
    case 'lastName':
      return validateJobTitle(value);
    
    case 'email':
      return validateProfessionalEmail(value);
    
    case 'phone':
      return validatePhoneNumber(value);
    
    case 'company':
      return validateCompanyName(value);
    
    case 'jobTitle':
    case 'title':
      return validateJobTitle(value);
    
    case 'message':
      return validateMessage(value);
    
    case 'budget':
      return validateBudget(value);
    
    case 'timeline':
      return validateProjectTimeline(value);
    
    case 'industry':
      return validateIndustry(value);
    
    case 'serviceType':
      return validateServiceType(value);
    
    case 'experience':
      return validateExperienceLevel(value);
    
    case 'website':
    case 'url':
      return validateURL(value);
    
    case 'linkedinUrl':
      return validateLinkedInProfile(value);
    
    case 'resume':
      return validateResume(value);
    
    case 'coverLetter':
      return validateCoverLetter(value);
    
    default:
      // Generic validation for unknown fields
      if (fieldConfig.REQUIRED?.includes(fieldName) && !value) {
        return { isValid: false, error: `${fieldName} is required` };
      }
      return { isValid: true };
  }
};

export default {
  validatePhoneNumber,
  validateProfessionalEmail,
  validateCompanyName,
  validateJobTitle,
  validateFileUpload,
  validateResume,
  validateCoverLetter,
  validateMessage,
  validateBudget,
  validateProjectTimeline,
  validateIndustry,
  validateServiceType,
  validateExperienceLevel,
  validateURL,
  validateLinkedInProfile,
  validateFormStep,
  validateField
};
