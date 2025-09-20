import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import servicesData from '../../assets/data/services.json';
import { checkAndRedirectTheme } from '../../utils/themeUtils';

const ServicesDark = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Services - Technology Staffing, IT Consulting & System Integration | Cloud Focal (Dark Mode)</title>
        <meta name="description" content="Comprehensive technology solutions including staffing, IT consulting, and system integration. Transform your business with Cloud Focal's expertise." />
        <meta name="keywords" content="technology staffing, IT consulting, system integration, digital transformation, tech solutions" />
        <meta property="og:title" content="Services - Technology Staffing, IT Consulting & System Integration (Dark Mode)" />
        <meta property="og:description" content="Comprehensive technology solutions including staffing, IT consulting, and system integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/services-dark" />
        
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
        {/* Dark Header Spacer - Only for Services page */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 h-16 lg:h-20"></div>
        
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0v2a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2z" />
                  </svg>
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact-dark" variant="white" size="large">
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-slate-950 relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {servicesData.overview.title}
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                {servicesData.overview.description}
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {servicesData.services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden border border-slate-800/50 hover:border-slate-700/50 hover:scale-105">
                    <div className="p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <ServiceIcon icon={service.icon} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">{service.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        to={`/services/${service.id}-dark`} 
                        variant="outline" 
                        size="medium" 
                        className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50 shadow-2xl"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {servicesData.overview.stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">{stat.number}</div>
                    <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that ensures successful delivery and exceptional results for every project.
              </p>
            </motion.div>

            <div className="grid-4-cols">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We begin by understanding your unique challenges, goals, and requirements.'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop a comprehensive strategy tailored to your specific needs and objectives.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute the solution with precision, ensuring quality and timely delivery.'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuously monitor, refine, and optimize for ongoing success and growth.'
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">{process.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

const ServiceIcon = ({ icon }) => {
  const icons = {
    users: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0v2a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2h-2z" />
      </svg>
    ),
    lightbulb: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    link: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    cog: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };

  return icons[icon] || icons.briefcase;
};

export default ServicesDark;
