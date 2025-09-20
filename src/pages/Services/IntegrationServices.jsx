import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';

const IntegrationServices = () => {
  const integrationTypes = [
    {
      title: "API Integration",
      description: "Seamlessly connect your applications through robust API development and integration",
      icon: "🔗",
      features: ["RESTful APIs", "GraphQL", "Webhook Integration", "API Gateway Setup"]
    },
    {
      title: "Data Integration",
      description: "Unify your data across multiple systems and platforms for better insights",
      icon: "📊",
      features: ["ETL Processes", "Data Warehousing", "Real-time Sync", "Data Migration"]
    },
    {
      title: "Cloud Integration",
      description: "Connect on-premise systems with cloud services for hybrid solutions",
      icon: "☁️",
      features: ["Multi-cloud Strategy", "Hybrid Cloud", "Cloud Migration", "DevOps Integration"]
    },
    {
      title: "Legacy System Integration",
      description: "Modernize and connect your existing systems with new technologies",
      icon: "🔄",
      features: ["System Modernization", "Legacy API Wrappers", "Data Transformation", "Migration Planning"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze existing systems, identify integration points, and create a comprehensive integration strategy."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable integration architecture with proper security, monitoring, and error handling."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build integrations with comprehensive testing including unit, integration, and end-to-end testing."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Deploy to production with monitoring, documentation, and ongoing support and maintenance."
    }
  ];

  const benefits = [
    {
      title: "Improved Efficiency",
      description: "Automate manual processes and reduce data entry errors by up to 90%",
      icon: "⚡"
    },
    {
      title: "Better Data Quality",
      description: "Ensure data consistency and accuracy across all integrated systems",
      icon: "✅"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through automation and streamlined processes",
      icon: "💰"
    },
    {
      title: "Enhanced Visibility",
      description: "Gain real-time insights across all systems with unified dashboards",
      icon: "👁️"
    }
  ];

  const technologies = [
    "AWS Lambda", "Azure Functions", "Google Cloud Functions", "Apache Kafka", 
    "RabbitMQ", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes",
    "Terraform", "Jenkins", "GitLab CI/CD", "MuleSoft", "Boomi", "Zapier"
  ];

  return (
    <>
      <Helmet>
        <title>Integration Services | Cloud Focal - Seamless System Integration</title>
        <meta name="description" content="Expert system integration services to connect your applications, data, and platforms. API integration, data integration, cloud integration, and legacy system modernization." />
        <meta name="keywords" content="system integration, API integration, data integration, cloud integration, legacy integration, ETL, microservices" />
        <link rel="canonical" href="https://cloudfocal.com/services/integration-services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Integration Services | Cloud Focal" />
        <meta property="og:description" content="Expert system integration services to connect your applications, data, and platforms seamlessly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/services/integration-services" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Integration Services | Cloud Focal" />
        <meta name="twitter:description" content="Expert system integration services to connect your applications seamlessly." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Blue Header Spacer - Only for Services page */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 h-16 lg:h-20"></div>
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 lg:py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                Seamless System
                <span className="block text-accent-300">Integration</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Connect your applications, data, and platforms with expert integration services. 
                From APIs to legacy systems, we make complex integrations simple and reliable.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="large"
                  className="bg-white text-primary-700 hover:bg-gray-100"
                >
                  Start Integration Project
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
              >
                Comprehensive Integration Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                We specialize in connecting diverse systems and platforms to create unified, 
                efficient workflows that drive your business forward.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{type.title}</h3>
                  <p className="text-black mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-black">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
              >
                Our Integration Process
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                We follow a proven methodology to ensure successful integration projects 
                that deliver measurable business value.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-black">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
              >
                Benefits of System Integration
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-black">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
              >
                Technologies We Work With
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                Our expertise spans the latest integration technologies and platforms 
                to ensure the best solution for your specific needs.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-sm font-medium text-black">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 text-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-lg text-black">Integrations Built</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
                <div className="text-lg text-black">Uptime Guarantee</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-lg text-black">Support Available</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-lg text-black">Technology Partners</div>
              </motion.div>
            </div>
          </div>
        </section>


      </motion.div>
    </>
  );
};

export default IntegrationServices;
