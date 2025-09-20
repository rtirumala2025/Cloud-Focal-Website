import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../../ui/Forms/ContactForm';
import { checkAndRedirectTheme } from '../../utils/themeUtils';

const ContactDark = () => {
  useEffect(() => {
    // Check theme preference and redirect if needed
    checkAndRedirectTheme();
    
    // Add dark theme class to HTML element
    document.documentElement.classList.add('dark-theme');
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.documentElement.classList.remove('dark-theme');
    };
  }, []);

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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Speak directly with our experts",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri 9AM-6PM PST",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      primary: "info@cloudfocal.com",
      secondary: "support@cloudfocal.com",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Instant support during business hours",
      primary: "Available on website",
      secondary: "Mon-Fri 9AM-6PM PST",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Cloud Focal (Dark Mode)</title>
        <meta name="description" content="Get in touch with Cloud Focal for technology staffing and IT consulting services. We're here to help transform your business." />
        <meta name="keywords" content="contact Cloud Focal, technology consulting, IT staffing, get quote" />
        <meta property="og:title" content="Contact Us - Get in Touch (Dark Mode)" />
        <meta property="og:description" content="Get in touch with Cloud Focal for technology staffing and IT consulting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/contact-dark" />
        
        {/* Theme Meta Tags */}
        <meta name="theme-color" content="#0f0f23" />
        <meta name="color-scheme" content="dark" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        <section className="section-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-teal-400/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                Ready to transform your technology initiatives? Let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Overview */}
        <section className="py-20 bg-slate-950 relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Choose the communication method that works best for you. Our team is ready to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 text-center border border-slate-800/50 hover:border-slate-700/50 hover:scale-105"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {method.primary}
                    </div>
                    <div className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                      {method.secondary}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-lg bg-slate-950 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                  <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                    Fill out the form and we'll get back to you within 24 hours to discuss your technology needs.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Information Card */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                        <p className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                        <p className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300">info@cloudfocal.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                        <p className="text-slate-300 group-hover:text-purple-400 transition-colors duration-300">
                          123 Technology Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors duration-300">
                      <span className="text-slate-300">Monday - Friday</span>
                      <span className="font-medium text-emerald-400">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors duration-300">
                      <span className="text-slate-300">Saturday</span>
                      <span className="font-medium text-blue-400">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors duration-300">
                      <span className="text-slate-300">Sunday</span>
                      <span className="font-medium text-slate-500">Closed</span>
                    </div>
                    <div className="pt-4 mt-6 border-t border-slate-700">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/20">
                        <span className="text-slate-300">Emergency Support</span>
                        <span className="font-medium text-orange-400">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/company/cloudfocal" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/cloudfocal" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/cloudfocal" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-24 bg-slate-950 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Global Offices
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
                  className="group bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-800/50 hover:border-slate-700/50 hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors duration-300">
                    {office.city}
                  </h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-800/50 rounded-xl group-hover:bg-slate-800/70 transition-colors duration-300">
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                        {office.address}<br />
                        {office.state}<br />
                        {office.country}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-800/50 transition-colors duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-800/50 transition-colors duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300">{office.email}</span>
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

export default ContactDark;