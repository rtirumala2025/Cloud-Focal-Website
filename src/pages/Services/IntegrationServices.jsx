import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import CTASection from '../../ui/CTA/CTASection';

const IntegrationServices = () => {
  return (
    <>
      <Helmet>
        <title>Integration Services - System Integration Solutions | SourceCloud</title>
        <meta name="description" content="Comprehensive system integration services to connect and optimize your technology infrastructure." />
        <meta name="keywords" content="system integration, API integration, data integration, technology integration" />
        <meta property="og:title" content="Integration Services - System Integration Solutions" />
        <meta property="og:description" content="Comprehensive system integration services to connect and optimize your technology infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/services/integration-services" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Integration Services</h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
                Seamless system integration solutions to connect and optimize your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="primary" size="large" className="bg-white text-primary-700 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button to="/case-studies" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-700">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're working hard to bring you comprehensive information about our integration services. 
                In the meantime, please contact us to learn more about how we can help your organization.
              </p>
              <Button to="/contact" variant="primary" size="large">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Ready to Integrate Your Systems?"
          description="Let's discuss how our integration services can help you connect and optimize your technology infrastructure."
          primaryButton={{ text: "Get Started", link: "/contact", variant: "primary" }}
          secondaryButton={{ text: "Learn More", link: "/services", variant: "outline" }}
          background="gradient"
        />
      </motion.div>
    </>
  );
};

export default IntegrationServices;
