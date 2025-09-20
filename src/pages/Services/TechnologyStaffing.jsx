import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import servicesData from '../../assets/data/services.json';

const TechnologyStaffing = () => {
  const service = servicesData.services.find(s => s.id === 'technology-staffing');

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
        <title>Technology Staffing Services - Find Top Tech Talent | Cloud Focal</title>
        <meta name="description" content="Connect with exceptional technology professionals through our comprehensive staffing services. From developers to architects, we find the perfect fit for your team." />
        <meta name="keywords" content="technology staffing, tech talent, software developers, IT professionals, tech recruitment" />
        <meta property="og:title" content="Technology Staffing Services - Find Top Tech Talent" />
        <meta property="og:description" content="Connect with exceptional technology professionals through our comprehensive staffing services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/services/technology-staffing" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Blue Header Spacer - Only for Services page */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 h-16 lg:h-20"></div>
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button to="/contact" variant="white" size="large">
                    Get Started
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology staffing solutions tailored to your specific needs and requirements.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {service.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Staffing Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the difference that comes with working with a dedicated technology staffing partner.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit}</h3>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Staffing Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that ensures we find the perfect match for your technology needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technologies We Cover</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From emerging technologies to established platforms, we have expertise across the entire technology spectrum.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {service.technologies.map((tech, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-sm font-medium text-gray-700">{tech}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We have successfully placed technology professionals across diverse industries and sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      </motion.div>
    </>
  );
};

export default TechnologyStaffing;
