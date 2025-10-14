import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import ContactForm from '../../ui/Forms/ContactForm';

const Contact = () => {
  const offices = [
    {
      city: "San Francisco",
      address: "123 Technology Drive, Suite 200",
      state: "CA 94105",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "sf@cloudfocal.com"
    },
    {
      city: "New York",
      address: "456 Innovation Avenue, Floor 15",
      state: "NY 10001",
      country: "United States",
      phone: "+1 (555) 987-6543",
      email: "ny@cloudfocal.com"
    },
    {
      city: "London",
      address: "789 Digital Street, Office 3",
      state: "EC1A 1BB",
      country: "United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@cloudfocal.com"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      primary: "info@cloudfocal.com",
      secondary: "support@cloudfocal.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant support during business hours",
      primary: "Available on website",
      secondary: "Mon-Fri 9AM-6PM PST"
    }
  ];

  const ContactMethodCard = ({ icon, title, description, primary, secondary, href }) => (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon, { className: 'w-8 h-8 text-white' })}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-lg text-gray-600 mb-6 text-center">{description}</p>
      
      <div className="space-y-2 text-center">
        {href ? (
          <a 
            href={href} 
            className="block text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            {primary}
          </a>
        ) : (
          <p className="text-xl font-bold text-gray-900">{primary}</p>
        )}
        <p className="text-base text-gray-500">{secondary}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Cloud Focal</title>
        <meta name="description" content="Get in touch with Cloud Focal for technology staffing and IT consulting services. We're here to help transform your business." />
        <meta name="keywords" content="contact Cloud Focal, technology consulting, IT staffing, get quote" />
        <meta property="og:title" content="Contact Us - Get in Touch" />
        <meta property="og:description" content="Get in touch with Cloud Focal for technology staffing and IT consulting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/contact" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="py-45 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your technology initiatives? Let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the communication method that works best for you. Our team is ready to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => {
                const href = method.title === 'Phone Support' 
                  ? `tel:${method.primary.replace(/[^0-9+]/g, '')}` 
                  : method.title === 'Email Support' 
                    ? `mailto:${method.primary}` 
                    : null;
                    
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <ContactMethodCard
                      icon={method.icon}
                      title={method.title}
                      description={method.description}
                      primary={method.primary}
                      secondary={method.secondary}
                      href={href}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-lg bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-2 text-neutral-900 mb-6">Let's Start a Conversation</h2>
                <p className="body-large text-neutral-600 mb-8">
                  Fill out the form and we'll get back to you within 24 hours to discuss your technology needs.
                </p>
                <ContactForm />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className="space-y-6 sticky top-6"
              >
                {/* Contact Information Card */}
                <motion.div 
                  whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Contact Information</h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-5 group">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1.5">Phone</h4>
                        <a href="tel:+15551234567" className="text-xl font-medium text-blue-600 hover:text-blue-700 transition-colors block">+1 (555) 123-4567</a>
                        <p className="text-gray-500 text-base mt-1">Mon-Fri 9AM-6PM PST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5 group">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1.5">Email</h4>
                        <a href="mailto:info@cloudfocal.com" className="text-xl font-medium text-blue-600 hover:text-blue-700 transition-colors block">info@cloudfocal.com</a>
                        <p className="text-gray-500 text-base mt-1">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5 group">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Headquarters</h4>
                        <address className="not-italic text-gray-700 text-base">
                          123 Technology Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </address>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-2 text-sm font-medium">
                          View on map
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Business Hours Card */}
                <motion.div 
                  whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Business Hours</h3>
                  <div className="space-y-5">
                    {[
                      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', timezone: 'PST' },
                      { day: 'Saturday', hours: '10:00 AM - 4:00 PM', timezone: 'PST' },
                      { day: 'Sunday', hours: 'Closed', timezone: '' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                        <span className="text-gray-700 font-medium">{item.day}</span>
                        <div className="text-right">
                          <span className="text-gray-900 font-semibold">{item.hours}</span>
                          {item.timezone && <span className="text-gray-500 text-sm ml-2">{item.timezone}</span>}
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center bg-blue-50 rounded-xl p-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-800">Emergency Support</span>
                        </div>
                        <span className="text-blue-600 font-semibold">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media Card */}
                <motion.div 
                  whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Follow Us</h3>
                  <p className="text-gray-600 mb-6">Connect with us on social media for the latest updates and insights.</p>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: 'LinkedIn',
                        url: 'https://linkedin.com/company/cloudfocal',
                        icon: (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )
                      },
                      {
                        name: 'Twitter',
                        url: 'https://twitter.com/cloudfocal',
                        icon: (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        )
                      },
                      {
                        name: 'GitHub',
                        url: 'https://github.com/cloudfocal',
                        icon: (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        )
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gray-50 hover:bg-blue-50 rounded-xl flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-2 text-neutral-900 mb-6">
                Our Global Offices
              </h2>
              <p className="body-large text-neutral-600 max-w-3xl mx-auto">
                We have a presence in key technology hubs to serve our clients worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{office.city}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-neutral-600">
                        {office.address}<br />
                        {office.state}<br />
                        {office.country}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-neutral-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-neutral-600">{office.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
