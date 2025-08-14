import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import CTASection from '../../ui/CTA/CTASection';

const PublicSector = () => {
  const solutions = [
    {
      title: "Digital Government",
      description: "Modernize citizen services and government operations with digital solutions",
      icon: "🏛️",
      features: ["Citizen Portals", "Digital Forms", "Workflow Automation", "Mobile Apps"]
    },
    {
      title: "Data Security & Compliance",
      description: "Ensure data protection and regulatory compliance for government systems",
      icon: "🔒",
      features: ["FISMA Compliance", "Data Encryption", "Access Controls", "Audit Trails"]
    },
    {
      title: "Cloud Migration",
      description: "Secure cloud solutions for government agencies and public institutions",
      icon: "☁️",
      features: ["FedRAMP Compliance", "Hybrid Cloud", "Cost Optimization", "Scalability"]
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to improve decision-making and transparency",
      icon: "📊",
      features: ["Performance Metrics", "Real-time Dashboards", "Predictive Analytics", "Compliance Reporting"]
    }
  ];

  const challenges = [
    {
      title: "Legacy System Modernization",
      description: "Upgrade outdated systems while maintaining service continuity"
    },
    {
      title: "Cybersecurity Threats",
      description: "Protect sensitive government data from evolving cyber threats"
    },
    {
      title: "Budget Constraints",
      description: "Deliver value within limited public sector budgets"
    },
    {
      title: "Compliance Requirements",
      description: "Meet strict regulatory and compliance standards"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Public Sector Solutions | SourceCloud - Government Technology</title>
        <meta name="description" content="Digital transformation solutions for government agencies and public institutions. Secure, compliant, and efficient technology solutions for the public sector." />
        <meta name="keywords" content="public sector, government technology, digital government, FISMA compliance, FedRAMP, citizen services" />
        <link rel="canonical" href="https://sourcecloud.com/industries/public-sector" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Public Sector Solutions | SourceCloud" />
        <meta property="og:description" content="Digital transformation solutions for government agencies and public institutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/industries/public-sector" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Public Sector Solutions | SourceCloud" />
        <meta name="twitter:description" content="Digital transformation solutions for government agencies." />
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
                Public Sector
                <span className="block text-accent-300">Digital Transformation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Modernize government services and improve citizen experience with secure, 
                compliant, and efficient technology solutions designed for the public sector.
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
                  Get Government Consultation
                </Button>
                <Button
                  to="/case-studies"
                  variant="secondary"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                >
                  View Success Stories
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Public Sector Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Comprehensive technology solutions designed specifically for government agencies 
                and public institutions to improve efficiency, security, and citizen services.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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

        {/* Challenges & Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Addressing Public Sector Challenges
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Common Challenges</h3>
                <div className="space-y-6">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-md"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h4>
                      <p className="text-gray-600">{challenge.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Solutions</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Legacy Modernization",
                      description: "Gradual migration strategies with minimal disruption"
                    },
                    {
                      title: "Advanced Security",
                      description: "Multi-layered security with compliance frameworks"
                    },
                    {
                      title: "Cost Optimization",
                      description: "ROI-focused solutions within budget constraints"
                    },
                    {
                      title: "Compliance Expertise",
                      description: "Deep understanding of government regulations"
                    }
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Compliance & Security
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                We understand the critical importance of security and compliance in the public sector. 
                Our solutions meet the highest standards for government agencies.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "FISMA Compliance",
                  description: "Federal Information Security Management Act compliance for federal agencies",
                  icon: "🛡️"
                },
                {
                  title: "FedRAMP Authorization",
                  description: "Federal Risk and Authorization Management Program for cloud services",
                  icon: "☁️"
                },
                {
                  title: "State & Local Standards",
                  description: "Compliance with state and local government security requirements",
                  icon: "🏛️"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-lg text-white/80">Government Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg text-white/80">Compliance Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">$25M+</div>
                <div className="text-lg text-white/80">Cost Savings</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-lg text-white/80">Agencies Served</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Government Services?"
          subtitle="Let's discuss how our public sector solutions can help you modernize your agency and improve citizen services."
          primaryButton={{
            text: "Get Government Consultation",
            to: "/contact"
          }}
          secondaryButton={{
            text: "Download Public Sector Guide",
            to: "/resources"
          }}
        />
      </motion.div>
    </>
  );
};

export default PublicSector;
