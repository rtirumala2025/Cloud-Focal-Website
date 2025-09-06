import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import servicesData from '../../assets/data/services.json';

const Services = () => {
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
        <title>Services - Technology Staffing, IT Consulting & System Integration | Cloud Focal</title>
        <meta name="description" content="Comprehensive technology solutions including staffing, IT consulting, and system integration. Transform your business with Cloud Focal's expertise." />
        <meta name="keywords" content="technology staffing, IT consulting, system integration, digital transformation, tech solutions" />
        <meta property="og:title" content="Services - Technology Staffing, IT Consulting & System Integration" />
        <meta property="og:description" content="Comprehensive technology solutions including staffing, IT consulting, and system integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/services" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="heading-1 mb-8">Our Services</h1>
              <p className="body-large text-primary-100 mb-12">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="white" size="large">
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-2 text-neutral-900 mb-6">
                {servicesData.overview.title}
              </h2>
              <p className="body-large text-neutral-600 max-w-3xl mx-auto">
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
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ServiceIcon icon={service.icon} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        to={`/services/${service.id}`} 
                        variant="outline" 
                        size="medium" 
                        className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
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
              className="bg-gray-50 rounded-2xl p-8 md:p-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {servicesData.overview.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-2 text-neutral-900 mb-6">Our Process</h2>
              <p className="body-large text-neutral-600 max-w-3xl mx-auto">
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
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="heading-5 text-neutral-900 mb-4">{process.title}</h3>
                  <p className="body text-neutral-600">{process.description}</p>
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

export default Services;
