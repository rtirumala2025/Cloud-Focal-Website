import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Rocket, Cloud, BarChart3, Link2, Zap, DollarSign, Target, Shield, TrendingUp, Lock, Wrench, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button/Button';

const PrivateEnterprise = () => {
  const solutions = [
    {
      title: "Digital Transformation",
      description: "Complete digital transformation to modernize your business operations",
      icon: Rocket,
      features: ["Process Automation", "Digital Workflows", "Legacy Modernization", "Change Management"]
    },
    {
      title: "Cloud Migration",
      description: "Secure and scalable cloud solutions for enterprise applications",
      icon: Cloud,
      features: ["Multi-cloud Strategy", "Hybrid Cloud", "Cost Optimization", "Scalability"]
    },
    {
      title: "Data Analytics",
      description: "Transform data into actionable insights for strategic decision-making",
      icon: BarChart3,
      features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Data Warehousing"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly connect your systems and applications for better efficiency",
      icon: Link2,
      features: ["API Integration", "System Integration", "Data Synchronization", "Workflow Automation"]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual processes by up to 60%",
      icon: Zap
    },
    {
      title: "Cost Reduction",
      description: "Optimize technology investments and reduce operational costs",
      icon: DollarSign
    },
    {
      title: "Improved Agility",
      description: "Respond quickly to market changes and customer demands",
      icon: Target
    },
    {
      title: "Enhanced Security",
      description: "Protect your business with enterprise-grade security solutions",
      icon: Shield
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              >
                Enterprise Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                End-to-end technology services driving operational efficiency, risk reduction, and continuous innovation for commercial enterprises.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed flex-1">{solution.description}</p>
                    <ul className="space-y-2.5 pl-5 border-t border-gray-100 pt-4">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2.5 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
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
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-4 flex justify-center text-blue-600">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                    <p className="text-black">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 bg-white">
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
                  icon: TrendingUp
                },
                {
                  title: "Security",
                  description: "Enterprise-grade security and compliance",
                  icon: Lock
                },
                {
                  title: "Integration",
                  description: "Seamless integration with existing systems",
                  icon: Link2
                },
                {
                  title: "Support",
                  description: "24/7 technical support and maintenance",
                  icon: Wrench
                },
                {
                  title: "Analytics",
                  description: "Advanced analytics and reporting capabilities",
                  icon: BarChart3
                },
                {
                  title: "Compliance",
                  description: "Industry-specific compliance frameworks",
                  icon: CheckCircle2
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <div className="mb-4 flex justify-center text-blue-600">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                    <p className="text-black">{feature.description}</p>
                  </motion.div>
                );
              })}
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
