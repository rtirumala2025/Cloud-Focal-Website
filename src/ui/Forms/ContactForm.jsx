import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  company: yup.string().required('Company name is required'),
  service: yup.string().required('Please select a service'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

const inputClasses = (error) => 
  `w-full h-16 px-5 text-lg rounded-xl border-2 ${
    error 
      ? 'border-red-300 focus:ring-4 focus:ring-red-100 focus:border-red-500' 
      : 'border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-blue-400'
  } transition-all duration-200 outline-none text-gray-900 placeholder-gray-400`;

const labelClasses = (error) =>
  `block text-base font-semibold mb-2 ${
    error ? 'text-red-600' : 'text-gray-900'
  }`;

const errorClasses = 'mt-2 text-sm text-red-600';

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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-2xl p-10 text-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>
        <h3 className="text-3xl font-bold text-green-900 mb-4">Message Sent!</h3>
        <p className="text-lg text-green-700 mb-8">We've received your message and will get back to you within 24 hours.</p>
        <motion.button
          onClick={() => setSubmitSuccess(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className={labelClasses(errors.firstName)}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            className={inputClasses(errors.firstName)}
            placeholder="John"
            autoComplete="given-name"
            spellCheck="false"
          />
          {errors.firstName && (
            <p className={errorClasses}>{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className={labelClasses(errors.lastName)}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            className={inputClasses(errors.lastName)}
            placeholder="Doe"
            autoComplete="family-name"
            spellCheck="false"
          />
          {errors.lastName && (
            <p className={errorClasses}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className={labelClasses(errors.email)}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={inputClasses(errors.email)}
            placeholder="you@example.com"
            autoComplete="email"
            spellCheck="false"
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className={labelClasses(errors.phone)}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={inputClasses(errors.phone)}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className={labelClasses(errors.company)}>
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className={inputClasses(errors.company)}
          placeholder="Your company name"
          autoComplete="organization"
          spellCheck="false"
        />
        {errors.company && (
          <p className={errorClasses}>{errors.company.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className={labelClasses(errors.service)}>
          How can we help you? <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="service"
            {...register('service')}
            className={`${inputClasses(errors.service)} appearance-none bg-white pr-12`}
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
            <option value="staffing">IT Staffing Solutions</option>
            <option value="consulting">IT Consulting</option>
            <option value="cloud">Cloud Services</option>
            <option value="custom">Custom Software Development</option>
            <option value="other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        {errors.service && (
          <p className={errorClasses}>{errors.service.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClasses(errors.message)}>
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className={`${inputClasses(errors.message)} resize-none min-h-[180px]`}
          placeholder="Tell us about your project or inquiry..."
          spellCheck="true"
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      <div className="pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className={`w-full h-16 flex justify-center items-center rounded-xl text-lg font-bold text-white shadow-lg ${
            isSubmitting
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
          } transition-all duration-200`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-3">
              <Loader2 className="animate-spin h-6 w-6 text-white" />
              Sending Message...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </div>
      
      <div className="pt-4 text-center text-sm text-gray-500">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
          Terms of Service
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
