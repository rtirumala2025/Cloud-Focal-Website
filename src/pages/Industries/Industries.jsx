import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import CTASection from '../../ui/CTA/CTASection';

const Industries = () => {
  const industries = [
    {
      title: "Public Sector",
      description: "Digital transformation solutions for government agencies and public institutions",
      icon: "🏛️",
      solutions: ["Digital Government", "Citizen Services", "Data Security", "Compliance"],
      stats: { projects: "150+", satisfaction: "98%", savings: "$25M+" },
      link: "/industries/public-sector"
    },
    {
      title: "Private Enterprise",
      description: "Technology solutions for private sector organizations of all sizes",
      icon: "🏢",
      solutions: ["Digital Transformation", "Cloud Migration", "Process Automation", "Analytics"],
      stats: { projects: "300+", satisfaction: "97%", savings: "$45M+" },
      link: "/industries/private-enterprise"
    },
    {
      title: "Healthcare",
      description: "Technology solutions to improve patient care and operational efficiency",
      icon: "🏥",
      solutions: ["Electronic Health Records", "Telemedicine", "Data Analytics", "Security"],
      stats: { projects: "75+", satisfaction: "99%", savings: "$15M+" },
      link: "/industries/healthcare"
    },
    {
      title: "Financial Services",
      description: "Secure and compliant technology solutions for financial institutions",
      icon: "💰",
      solutions: ["Digital Banking", "Risk Management", "Compliance", "Cybersecurity"],
      stats: { projects: "120+", satisfaction: "96%", savings: "$30M+" },
      link: "/industries/financial-services"
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0 solutions to optimize production and supply chains",
      icon: "🏭",
      solutions: ["IoT Integration", "Predictive Analytics", "Supply Chain", "Automation"],
      stats: { projects: "90+", satisfaction: "95%", savings: "$20M+" },
      link: "/industries/manufacturing"
    },
    {
      title: "Retail & E-commerce",
      description: "Digital solutions to enhance customer experience and drive sales",
      icon: "🛍️",
      solutions: ["E-commerce Platforms", "Customer Analytics", "Inventory Management", "Omnichannel"],
      stats: { projects: "180+", satisfaction: "97%", savings: "$35M+" },
      link: "/industries/retail"
    }
  ];

  const expertise = [
    {
      title: "Industry-Specific Knowledge",
      description: "Deep understanding of regulatory requirements and business processes",
      icon: "🎯"
    },
    {
      title: "Proven Methodologies",
      description: "Tailored approaches that have been tested across multiple industries",
      icon: "📋"
    },
    {
      title: "Technology Expertise",
      description: "Latest technologies and platforms relevant to each industry",
      icon: "💻"
    },
    {
      title: "Compliance & Security",
      description: "Industry-specific compliance frameworks and security standards",
      icon: "🔒"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries | Cloud Focal - Industry-Specific Solutions</title>
        <meta name="description" content="Industry-specific technology solutions for public sector, private enterprise, healthcare, financial services, manufacturing, and retail. Tailored expertise for your sector." />
        <meta name="keywords" content="industry solutions, public sector, private enterprise, healthcare technology, financial services, manufacturing, retail, digital transformation" />
        <link rel="canonical" href="https://sourcecloud.com/industries" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Industries | Cloud Focal - Industry-Specific Solutions" />
        <meta property="og:description" content="Industry-specific technology solutions for public sector, private enterprise, healthcare, financial services, manufacturing, and retail." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/industries" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries | Cloud Focal" />
        <meta name="twitter:description" content="Industry-specific technology solutions tailored for your sector." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        <section className="section-lg bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="heading-1 mb-8"
              >
                Industry Solutions
                <span className="block text-accent-300">Tailored for You</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="body-large text-white/90 mb-12 max-w-3xl mx-auto"
              >
                We understand the unique challenges and opportunities within your industry. 
                Our tailored solutions are designed to address your specific needs and drive measurable results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  to="#industries"
                  variant="primary"
                  size="large"
                  className="bg-white text-primary-700 hover:bg-gray-100"
                >
                  Explore Industries
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Get Industry Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Why Industry Expertise Matters
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Our deep industry knowledge enables us to deliver solutions that are not only 
                technically sound but also aligned with your business objectives and compliance requirements.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((item, index) => (
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

        {/* Industries Grid */}
        <section id="industries" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Industries We Serve
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                From government agencies to private enterprises, we deliver tailored solutions 
                that address the unique challenges of each industry.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                    <div className="text-6xl text-white/80">{industry.icon}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <span
                            key={solutionIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{industry.stats.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{industry.stats.satisfaction}</div>
                        <div className="text-xs text-gray-600">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{industry.stats.savings}</div>
                        <div className="text-xs text-gray-600">Savings</div>
                      </div>
                    </div>

                    <Link
                      to={industry.link}
                      className="block w-full text-center bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Industry Success Stories
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                See how we've helped organizations across different industries achieve 
                their digital transformation goals and drive measurable results.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  industry: "Public Sector",
                  title: "Digital Government Transformation",
                  description: "Helped a state government modernize citizen services and improve operational efficiency.",
                  results: "40% faster service delivery, 60% cost reduction"
                },
                {
                  industry: "Healthcare",
                  title: "Electronic Health Records Implementation",
                  description: "Streamlined patient care processes and improved data security for a major hospital system.",
                  results: "50% reduction in administrative tasks, 99.9% uptime"
                },
                {
                  industry: "Financial Services",
                  title: "Digital Banking Platform",
                  description: "Developed a secure, scalable digital banking solution for a regional bank.",
                  results: "200% increase in digital transactions, 100% compliance"
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      {story.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Results: {story.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button
                  to="/case-studies"
                  variant="secondary"
                  size="large"
                >
                  View All Success Stories
                </Button>
              </motion.div>
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
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg text-white/80">Industries Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg text-white/80">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg text-white/80">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">$100M+</div>
                <div className="text-lg text-white/80">Value Delivered</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Industry?"
          description="Let's discuss how our industry-specific solutions can help you achieve your goals."
          primaryButton={{ text: "Get Industry Consultation", link: "/contact", variant: "white" }}
          secondaryButton={{ text: "View Case Studies", link: "/case-studies", variant: "whiteOutline" }}
          background="gradient"
          divider="wave"
        />
      </motion.div>
    </>
  );
};

export default Industries;
