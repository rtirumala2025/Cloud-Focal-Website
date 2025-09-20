import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';

const PrivateEnterprise = () => {
  const solutions = [
    {
      title: "Digital Transformation",
      description: "Complete digital transformation to modernize your business operations",
      icon: "🚀",
      features: ["Process Automation", "Digital Workflows", "Legacy Modernization", "Change Management"]
    },
    {
      title: "Cloud Migration",
      description: "Secure and scalable cloud solutions for enterprise applications",
      icon: "☁️",
      features: ["Multi-cloud Strategy", "Hybrid Cloud", "Cost Optimization", "Scalability"]
    },
    {
      title: "Data Analytics",
      description: "Transform data into actionable insights for strategic decision-making",
      icon: "📊",
      features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Data Warehousing"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly connect your systems and applications for better efficiency",
      icon: "🔗",
      features: ["API Integration", "System Integration", "Data Synchronization", "Workflow Automation"]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual processes by up to 60%",
      icon: "⚡"
    },
    {
      title: "Cost Reduction",
      description: "Optimize technology investments and reduce operational costs",
      icon: "💰"
    },
    {
      title: "Improved Agility",
      description: "Respond quickly to market changes and customer demands",
      icon: "🎯"
    },
    {
      title: "Enhanced Security",
      description: "Protect your business with enterprise-grade security solutions",
      icon: "🛡️"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Private Enterprise Solutions | Cloud Focal - Business Technology</title>
        <meta name="description" content="Digital transformation and technology solutions for private sector organizations. Cloud migration, data analytics, and enterprise integration services." />
        <meta name="keywords" content="private enterprise, digital transformation, cloud migration, data analytics, enterprise integration, business technology" />
        <link rel="canonical" href="https://cloudfocal.com/industries/private-enterprise" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Private Enterprise Solutions | Cloud Focal" />
        <meta property="og:description" content="Digital transformation and technology solutions for private sector organizations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/industries/private-enterprise" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Private Enterprise Solutions | Cloud Focal" />
        <meta name="twitter:description" content="Digital transformation solutions for private sector organizations." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
                Private Enterprise
                <span className="block text-accent-300">Digital Solutions</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Accelerate your business growth with cutting-edge technology solutions designed 
                for private sector organizations. From startups to Fortune 500 companies.
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
                  Get Business Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
              >
                Enterprise Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                Comprehensive technology solutions designed to drive innovation, 
                improve efficiency, and accelerate growth for private sector organizations.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{solution.title}</h3>
                  <p className="text-black mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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
                Business Benefits
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                Our solutions deliver measurable business value and competitive advantages 
                that help you stay ahead in today's digital economy.
              </motion.p>
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

        {/* Enterprise Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
              >
                Enterprise-Grade Features
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Scalability",
                  description: "Solutions that grow with your business needs",
                  icon: "📈"
                },
                {
                  title: "Security",
                  description: "Enterprise-grade security and compliance",
                  icon: "🔒"
                },
                {
                  title: "Integration",
                  description: "Seamless integration with existing systems",
                  icon: "🔗"
                },
                {
                  title: "Support",
                  description: "24/7 technical support and maintenance",
                  icon: "🛠️"
                },
                {
                  title: "Analytics",
                  description: "Advanced analytics and reporting capabilities",
                  icon: "📊"
                },
                {
                  title: "Compliance",
                  description: "Industry-specific compliance frameworks",
                  icon: "✅"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </motion.div>
              ))}
            </div>
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
                <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
                <div className="text-lg text-black">Enterprise Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">97%</div>
                <div className="text-lg text-black">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">$45M+</div>
                <div className="text-lg text-black">Cost Savings</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-lg text-black">Companies Served</div>
              </motion.div>
            </div>
          </div>
        </section>


      </motion.div>
    </>
  );
};

export default PrivateEnterprise;
