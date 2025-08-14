import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import caseStudiesData from '../../assets/data/caseStudies.json';
import CTASection from '../../ui/CTA/CTASection';

const CaseStudies = () => {
  const featuredCaseStudies = caseStudiesData.slice(0, 3);
  const allCaseStudies = caseStudiesData;

  const categories = [
    { name: "All", count: allCaseStudies.length },
    { name: "Technology Staffing", count: allCaseStudies.filter(cs => cs.category === "Technology Staffing").length },
    { name: "IT Consulting", count: allCaseStudies.filter(cs => cs.category === "IT Consulting").length },
    { name: "System Integration", count: allCaseStudies.filter(cs => cs.category === "System Integration").length }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | SourceCloud - Success Stories & Results</title>
        <meta name="description" content="Explore our success stories and case studies. See how SourceCloud has helped organizations achieve digital transformation, improve efficiency, and drive growth." />
        <meta name="keywords" content="case studies, success stories, client results, digital transformation, technology solutions, ROI" />
        <link rel="canonical" href="https://sourcecloud.com/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Studies | SourceCloud - Success Stories & Results" />
        <meta property="og:description" content="Explore our success stories and case studies. See how SourceCloud has helped organizations achieve digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/case-studies" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | SourceCloud" />
        <meta name="twitter:description" content="Explore our success stories and case studies." />
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
                Success Stories
                <span className="block text-accent-300">That Inspire</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Discover how we've helped organizations transform their technology landscape, 
                improve efficiency, and achieve remarkable results through our comprehensive solutions.
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
                  Start Your Success Story
                </Button>
                <Button
                  to="/services"
                  variant="secondary"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">$50M+</div>
                <div className="text-gray-600">Value Delivered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Featured Success Stories
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Explore some of our most impactful projects and the remarkable results we've achieved 
                for our clients across various industries.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                    <div className="text-6xl text-white/80">{caseStudy.icon}</div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {caseStudy.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">{caseStudy.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read Full Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                All Case Studies
              </motion.h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-primary-300"
                >
                  <span className="font-medium text-gray-700">{category.name}</span>
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-40 bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                    <div className="text-4xl text-white/80">{caseStudy.icon}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {caseStudy.category}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">{caseStudy.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{caseStudy.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-primary-600">{caseStudy.metrics[0].value}</span> {caseStudy.metrics[0].label}
                      </div>
                      <Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                What Our Clients Say
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {caseStudy.client.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900">{caseStudy.client}</div>
                      <div className="text-sm text-gray-600">{caseStudy.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Create Your Success Story?"
          subtitle="Let's discuss how we can help you achieve similar results and transform your organization."
          primaryButton={{
            text: "Start Your Project",
            to: "/contact"
          }}
          secondaryButton={{
            text: "Download Case Studies",
            to: "/resources"
          }}
        />
      </motion.div>
    </>
  );
};

export default CaseStudies;
