import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        <link rel="canonical" href="https://cloudfocal.com/industries" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Industries | Cloud Focal - Industry-Specific Solutions" />
        <meta property="og:description" content="Industry-specific technology solutions for public sector, private enterprise, healthcare, financial services, manufacturing, and retail." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/industries" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries | Cloud Focal" />
        <meta name="twitter:description" content="Industry-specific technology solutions tailored for your sector." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="bg-blue-600 rounded-full w-2 h-2 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Industry Solutions
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight"
              >
                Tailored Solutions for
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Your Industry
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                We understand the unique challenges within your industry. Our specialized solutions 
                are designed to address your specific needs and drive measurable transformation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Industries
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Get Consultation
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-black mb-6"
              >
                Why Industry Expertise Matters
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                Our deep industry knowledge enables us to deliver solutions that are technically 
                sound and aligned with your business objectives.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                  <p className="text-black leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section id="industries" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-black mb-6"
              >
                Industries We Serve
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black max-w-3xl mx-auto"
              >
                From government agencies to private enterprises, we deliver tailored solutions 
                that address unique industry challenges.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105"
                >
                  {/* Header */}
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{industry.title}</h3>
                    <p className="text-black mb-6 leading-relaxed">{industry.description}</p>
                    
                    {/* Solutions */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-black mb-4">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <span
                            key={solutionIndex}
                            className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{industry.stats.projects}</div>
                        <div className="text-xs text-black font-medium">Projects</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{industry.stats.satisfaction}</div>
                        <div className="text-xs text-black font-medium">Satisfaction</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{industry.stats.savings}</div>
                        <div className="text-xs text-black font-medium">Savings</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={industry.link}
                      className="block w-full text-center bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-20 bg-gray-50 text-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-lg text-black">Industries Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-lg text-black">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-lg text-black">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">$100M+</div>
                <div className="text-lg text-black">Value Delivered</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-black mb-6"
              >
                Ready to Transform Your Industry?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black mb-12 max-w-2xl mx-auto"
              >
                Let's discuss how our industry-specific solutions can help you achieve your goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Industry Consultation
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Industries;