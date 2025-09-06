import { useState, useCallback, useRef } from 'react';
import { trackFormEvents, trackBusiness, trackCareers } from '../services/analytics/trackingEvents';
import { API_ENDPOINTS } from '../config/constants';

/**
 * Custom hook for handling form submissions with validation, analytics, and error handling
 */
export const useFormSubmission = (formType = 'contact', options = {}) => {
  const {
    endpoint = API_ENDPOINTS[formType.toUpperCase()] || API_ENDPOINTS.CONTACT,
    validateBeforeSubmit = true,
    trackAnalytics = true,
    retryAttempts = 3,
    retryDelay = 1000
  } = options;

  const [state, setState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    success: false,
    retryCount: 0
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [fieldValues, setFieldValues] = useState({});
  const abortControllerRef = useRef(null);

  // Update field values
  const updateField = useCallback((fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear validation error for this field
    if (validationErrors[fieldName]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  }, [validationErrors]);

  // Validate form data
  const validateForm = useCallback((data) => {
    const errors = {};
    
    // Basic required field validation
    const requiredFields = {
      contact: ['name', 'email', 'message'],
      consultation: ['name', 'email', 'company', 'message'],
      job_application: ['firstName', 'lastName', 'email', 'resume', 'jobId'],
      newsletter: ['email']
    };

    const required = requiredFields[formType] || requiredFields.contact;
    
    required.forEach(field => {
      if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
        errors[field] = `${field} is required`;
      }
    });

    // Email validation
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    // Phone validation (if provided)
    if (data.phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = data.phone.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        errors.phone = 'Please enter a valid phone number';
      }
    }

    // Message length validation
    if (data.message && data.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  }, [formType]);

  // Submit form data
  const submitForm = useCallback(async (formData, customOptions = {}) => {
    const {
      skipValidation = false,
      customEndpoint = null,
      additionalData = {}
    } = customOptions;

    // Prevent multiple submissions
    if (state.isSubmitting) {
      return { success: false, error: 'Form is already being submitted' };
    }

    // Validate form data
    if (validateBeforeSubmit && !skipValidation) {
      const errors = validateForm(formData);
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return { success: false, error: 'Please fix validation errors', errors };
      }
    }

    // Clear previous errors
    setValidationErrors({});
    setState(prev => ({ ...prev, error: null, isSubmitting: true }));

    // Track form start
    if (trackAnalytics) {
      trackFormEvents.formStart(formType, formType);
    }

    try {
      // Create abort controller for request cancellation
      abortControllerRef.current = new AbortController();

      // Prepare submission data
      const submissionData = {
        ...formData,
        ...additionalData,
        formType,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // Determine endpoint
      const submitEndpoint = customEndpoint || endpoint;
      const fullUrl = submitEndpoint.startsWith('http') 
        ? submitEndpoint 
        : `${process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api'}${submitEndpoint}`;

      // Submit form
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Track successful submission
      if (trackAnalytics) {
        trackFormEvents.formSubmit(formType, formType, true);
        
        // Track specific business events
        switch (formType) {
          case 'consultation':
            trackBusiness.consultationRequest(
              formData.serviceType || 'general',
              formData.industry || 'unknown',
              'website_form'
            );
            break;
          case 'job_application':
            trackCareers.jobApplication(
              formData.jobTitle || 'Unknown Position',
              formData.jobId || 'unknown',
              'website_form'
            );
            break;
          case 'contact':
            trackBusiness.serviceInquiry(
              formData.serviceType || 'general',
              'contact_form',
              'website_form'
            );
            break;
        }
      }

      // Update state on success
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        success: true,
        error: null,
        retryCount: 0
      }));

      return { success: true, data: result };

    } catch (error) {
      // Handle abort error
      if (error.name === 'AbortError') {
        setState(prev => ({ ...prev, isSubmitting: false }));
        return { success: false, error: 'Request was cancelled' };
      }

      // Track failed submission
      if (trackAnalytics) {
        trackFormEvents.formSubmit(formType, formType, false);
      }

      const errorMessage = error.message || 'An error occurred while submitting the form';

      // Update state on error
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        error: errorMessage,
        success: false
      }));

      return { success: false, error: errorMessage };

    } finally {
      // Clean up abort controller
      abortControllerRef.current = null;
    }
  }, [state.isSubmitting, validateBeforeSubmit, validateForm, trackAnalytics, endpoint, formType]);

  // Retry form submission
  const retrySubmission = useCallback(async (formData, customOptions = {}) => {
    if (state.retryCount >= retryAttempts) {
      return { success: false, error: 'Maximum retry attempts reached' };
    }

    setState(prev => ({ ...prev, retryCount: prev.retryCount + 1 }));

    // Wait before retrying
    await new Promise(resolve => setTimeout(resolve, retryDelay * state.retryCount));

    return submitForm(formData, customOptions);
  }, [state.retryCount, retryAttempts, retryDelay, submitForm]);

  // Cancel form submission
  const cancelSubmission = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setState(prev => ({ ...prev, isSubmitting: false }));
  }, []);

  // Reset form state
  const resetForm = useCallback(() => {
    setState({
      isSubmitting: false,
      isSubmitted: false,
      error: null,
      success: false,
      retryCount: 0
    });
    setValidationErrors({});
    setFieldValues({});
  }, []);

  // Validate single field
  const validateField = useCallback((fieldName, value) => {
    const errors = validateForm({ [fieldName]: value });
    const fieldError = errors[fieldName];
    
    if (fieldError) {
      setValidationErrors(prev => ({ ...prev, [fieldName]: fieldError }));
    } else {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
    
    return !fieldError;
  }, [validateForm]);

  // Get field error
  const getFieldError = useCallback((fieldName) => {
    return validationErrors[fieldName] || null;
  }, [validationErrors]);

  // Check if form is valid
  const isFormValid = useCallback(() => {
    return Object.keys(validationErrors).length === 0;
  }, [validationErrors]);

  // Handle file upload
  const handleFileUpload = useCallback(async (file, fieldName) => {
    if (!file) return { success: false, error: 'No file provided' };

    // Validate file
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
    
    if (file.size > maxSize) {
      return { success: false, error: 'File size must be less than 10MB' };
    }

    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!allowedTypes.includes(fileExtension)) {
      return { success: false, error: 'File type not allowed' };
    }

    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fieldName', fieldName);
    formData.append('formType', formType);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const result = await response.json();
      return { success: true, data: result };

    } catch (error) {
      return { success: false, error: error.message };
    }
  }, [formType]);

  // Auto-save form data to localStorage
  const autoSave = useCallback((data) => {
    const key = `form_${formType}_autosave`;
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  }, [formType]);

  // Load auto-saved form data
  const loadAutoSave = useCallback(() => {
    const key = `form_${formType}_autosave`;
    const saved = localStorage.getItem(key);
    
    if (saved) {
      try {
        const { data, timestamp } = JSON.parse(saved);
        // Only load if saved within last 24 hours
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          setFieldValues(data);
          return data;
        }
      } catch (error) {
        console.error('Failed to load auto-saved form data:', error);
      }
    }
    
    return null;
  }, [formType]);

  // Clear auto-saved data
  const clearAutoSave = useCallback(() => {
    const key = `form_${formType}_autosave`;
    localStorage.removeItem(key);
  }, [formType]);

  return {
    // State
    ...state,
    validationErrors,
    fieldValues,
    
    // Actions
    submitForm,
    retrySubmission,
    cancelSubmission,
    resetForm,
    updateField,
    validateField,
    getFieldError,
    isFormValid,
    handleFileUpload,
    autoSave,
    loadAutoSave,
    clearAutoSave,
    
    // Utilities
    setFieldValues,
    setValidationErrors
  };
};

export default useFormSubmission;
