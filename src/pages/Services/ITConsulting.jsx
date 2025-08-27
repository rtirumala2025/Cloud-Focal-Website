import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import CTASection from '../../ui/CTA/CTASection';

const ITConsulting = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Guide your organization through complete digital transformation initiatives",
      icon: "🚀",
      features: ["Technology Assessment", "Change Management", "Process Optimization", "ROI Analysis"]
    },
    {
      title: "Cloud Strategy & Migration",
      description: "Develop and execute comprehensive cloud adoption strategies",
      icon: "☁️",
      features: ["Cloud Architecture Design", "Migration Planning", "Security Implementation", "Cost Optimization"]
    },
    {
      title: "Cybersecurity Consulting",
      description: "Protect your digital assets with comprehensive security strategies",
      icon: "🔒",
      features: ["Security Audits", "Compliance Frameworks", "Incident Response", "Employee Training"]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform data into actionable insights for strategic decision-making",
      icon: "📊",
      features: ["Data Strategy", "BI Implementation", "Predictive Analytics", "Dashboard Design"]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current technology landscape, business processes, and strategic objectives."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a tailored roadmap aligned with your business goals and technology requirements."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed project planning with timelines, resource allocation, and risk mitigation strategies."
    },
    {
      step: "04",
      title: "Execution & Support",
      description: "Expert-led implementation with ongoing support and continuous optimization."
    }
  ];

  const benefits = [
    {
      title: "Reduced Costs",
      description: "Optimize technology investments and reduce operational expenses by up to 30%",
      icon: "💰"
    },
    {
      title: "Improved Efficiency",
      description: "Streamline processes and workflows to increase productivity and reduce time-to-market",
      icon: "⚡"
    },
    {
      title: "Enhanced Security",
      description: "Implement robust security measures to protect against evolving cyber threats",
      icon: "🛡️"
    },
    {
      title: "Competitive Advantage",
      description: "Leverage technology to gain market differentiation and drive innovation",
      icon: "🏆"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Consulting Services | Cloud Focal - Strategic Technology Solutions</title>
        <meta name="description" content="Expert IT consulting services to transform your business. Digital transformation, cloud strategy, cybersecurity, and data analytics solutions tailored to your needs." />
        <meta name="keywords" content="IT consulting, digital transformation, cloud strategy, cybersecurity, data analytics, technology consulting" />
        <link rel="canonical" href="https://sourcecloud.com/services/it-consulting" />
        
        {/* Open Graph */}
        <meta property="og:title" content="IT Consulting Services | Cloud Focal" />
        <meta property="og:description" content="Expert IT consulting services to transform your business. Digital transformation, cloud strategy, cybersecurity, and data analytics solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/services/it-consulting" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Consulting Services | Cloud Focal" />
        <meta name="twitter:description" content="Expert IT consulting services to transform your business." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                Strategic IT Consulting
                <span className="block text-accent-300">That Drives Results</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Transform your business with expert IT consulting services. From digital transformation 
                to cloud strategy, we provide the strategic guidance you need to succeed in the digital age.
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
                  Get Free Consultation
                </Button>
                <Button
                  to="/case-studies"
                  variant="secondary"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                >
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Comprehensive IT Consulting Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Our expert consultants deliver strategic guidance across all aspects of technology 
                to help your organization achieve its digital transformation goals.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
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

        {/* Methodology */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Our Proven Methodology
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                We follow a systematic approach to ensure successful project delivery and 
                maximum value for your organization.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodology.map((step, index) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Why Choose Our IT Consulting?
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg text-white/80">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg text-white/80">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg text-white/80">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-lg text-white/80">Expert Consultants</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Business?"
          subtitle="Let our expert IT consultants help you navigate the digital landscape and achieve your technology goals."
          primaryButton={{
            text: "Get Free Consultation",
            to: "/contact"
          }}
          secondaryButton={{
            text: "Download Brochure",
            to: "/resources"
          }}
        />
      </motion.div>
    </>
  );
};

export default ITConsulting;
