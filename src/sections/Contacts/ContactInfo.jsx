import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'map-pin',
      title: 'Office Address',
      content: '1234 Technology Drive, Suite 100',
      subContent: 'Atlanta, GA 30309',
      action: {
        text: 'Get Directions',
        href: 'https://maps.google.com/?q=1234+Technology+Drive,+Suite+100,+Atlanta,+GA+30309',
        external: true
      }
    },
    {
      icon: 'phone',
      title: 'Phone',
      content: '(555) 123-4567',
      subContent: 'Main Business Line',
      action: {
        text: 'Call Now',
        href: 'tel:+15551234567'
      }
    },
    {
      icon: 'envelope',
      title: 'Email',
      content: 'info@cloudfocal.com',
      subContent: 'General Inquiries',
      action: {
        text: 'Send Email',
        href: 'mailto:info@cloudfocal.com'
      }
    },
    {
      icon: 'clock',
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM EST',
      subContent: 'Standard Business Hours',
      action: null
    },
    {
      icon: 'shield-check',
      title: 'Emergency Support',
      content: '24/7 Critical Support Available',
      subContent: 'For urgent technical issues',
      action: {
        text: 'Emergency Contact',
        href: 'tel:+15551234568'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your technology strategy? Contact our team of experts 
            for a consultation or to learn more about our services.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contactDetails.map((detail, index) => {
            const getIcon = (iconName) => {
              const iconProps = { className: "w-6 h-6 text-primary-600" };
              
              switch (iconName) {
                case 'map-pin':
                  return (
                    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  );
                case 'phone':
                  return (
                    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  );
                case 'envelope':
                  return (
                    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  );
                case 'clock':
                  return (
                    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  );
                case 'shield-check':
                  return (
                    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  );
                default:
                  return (
                    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  );
              }
            };
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      {getIcon(detail.icon)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {detail.content}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {detail.subContent}
                    </p>

                    {/* Action Button */}
                    {detail.action && (
                      <a
                        href={detail.action.href}
                        target={detail.action.external ? '_blank' : '_self'}
                        rel={detail.action.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-primary-600 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        {detail.action.text}
                        {detail.action.external && (
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              Prefer to Schedule a Meeting?
            </h3>
            <p className="text-primary-700 mb-6">
              Book a free consultation with our technology experts to discuss your 
              specific needs and how we can help accelerate your digital transformation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Schedule Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
