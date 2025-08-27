import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/common/Button/Button';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  company: yup.string().required('Company name is required'),
  service: yup.string().required('Please select a service'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    /* UI FIX: Enhanced form with modern styling and better UX */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" novalidate>
      <div className="form-row">
        <div className="form-col">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              className={`form-input ${errors.firstName ? 'is-invalid' : ''}`}
              placeholder=" "
              autocomplete="given-name"
              spellcheck="false"
            />
            <label htmlFor="firstName" className="form-label">
              First Name <span className="form-required">*</span>
            </label>
            {errors.firstName && (
              <div className="form-feedback is-invalid">{errors.firstName.message}</div>
            )}
          </div>
        </div>

        <div className="form-col">
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              className={`form-input ${errors.lastName ? 'is-invalid' : ''}`}
              placeholder=" "
              autocomplete="family-name"
              spellcheck="false"
            />
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="form-required">*</span>
            </label>
            {errors.lastName && (
              <div className="form-feedback is-invalid">{errors.lastName.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <div className="form-group">
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`form-input ${errors.email ? 'is-invalid' : ''}`}
              placeholder=" "
              autocomplete="email"
              spellcheck="false"
            />
            <label htmlFor="email" className="form-label">
              Email Address <span className="form-required">*</span>
            </label>
            {errors.email && (
              <div className="form-feedback is-invalid">{errors.email.message}</div>
            )}
          </div>
        </div>

        <div className="form-col">
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
              placeholder=" "
              autocomplete="tel"
              spellcheck="false"
            />
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="form-required">*</span>
            </label>
            {errors.phone && (
              <div className="form-feedback is-invalid">{errors.phone.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          id="company"
          {...register('company')}
          className={`form-input ${errors.company ? 'is-invalid' : ''}`}
          placeholder=" "
          autocomplete="organization"
          spellcheck="false"
        />
        <label htmlFor="company" className="form-label">
          Company Name <span className="form-required">*</span>
        </label>
        {errors.company && (
          <div className="form-feedback is-invalid">{errors.company.message}</div>
        )}
      </div>

      <div className="form-group">
        <select
          id="service"
          {...register('service')}
          className={`form-select ${errors.service ? 'is-invalid' : ''}`}
        >
          <option value="">Select a service</option>
          <option value="technology-staffing">Technology Staffing</option>
          <option value="it-consulting">IT Consulting</option>
          <option value="integration-services">Integration Services</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="service" className="form-label">
          Service of Interest <span className="form-required">*</span>
        </label>
        {errors.service && (
          <div className="form-feedback is-invalid">{errors.service.message}</div>
        )}
      </div>

      <div className="form-group">
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
          placeholder="Tell us about your project or requirements..."
        />
        <label htmlFor="message" className="form-label">
          Message <span className="form-required">*</span>
        </label>
        {errors.message && (
          <div className="form-feedback is-invalid">{errors.message.message}</div>
        )}
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          id="newsletter"
          {...register('newsletter')}
          className="form-check-input"
        />
        <label htmlFor="newsletter" className="form-check-label">
          I would like to receive updates and insights from Cloud Focal. You can unsubscribe at any time.
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        disabled={isSubmitting}
        loading={isSubmitting}
        className={isSubmitting ? 'form-loading' : ''}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms" className="text-primary-600 hover:text-primary-700 underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
};

export default ContactForm;
