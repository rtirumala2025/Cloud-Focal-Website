import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';

const LatestInsights = () => {
  const insights = [
    {
      id: 1,
      title: "The Future of Technology Staffing in 2024",
      excerpt: "Discover the key trends shaping technology recruitment and how companies are adapting to the evolving talent landscape.",
      category: "Technology Staffing",
      date: "January 15, 2024",
      readTime: "5 min read",
      image: "/images/blog/tech-staffing-2024.jpg",
      author: "Sarah Johnson",
      authorImage: "/images/team/sarah-johnson.jpg"
    },
    {
      id: 2,
      title: "Digital Transformation: A Complete Guide for Enterprises",
      excerpt: "Learn the essential steps for successful digital transformation and how to avoid common pitfalls that derail projects.",
      category: "Digital Transformation",
      date: "January 12, 2024",
      readTime: "8 min read",
      image: "/images/blog/digital-transformation-guide.jpg",
      author: "Michael Chen",
      authorImage: "/images/team/michael-chen.jpg"
    },
    {
      id: 3,
      title: "API Integration Best Practices for Modern Applications",
      excerpt: "Explore the latest strategies for building robust, scalable API integrations that power modern business applications.",
      category: "Integration Services",
      date: "January 10, 2024",
      readTime: "6 min read",
      image: "/images/blog/api-integration-best-practices.jpg",
      author: "Emily Rodriguez",
      authorImage: "/images/team/emily-rodriguez.jpg"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Technology Staffing ROI Calculator",
      type: "Tool",
      description: "Calculate the return on investment for your technology staffing initiatives.",
      downloadUrl: "/resources/roi-calculator",
      icon: "📊"
    },
    {
      id: 2,
      title: "Digital Transformation Roadmap Template",
      type: "Template",
      description: "A comprehensive template to plan and execute your digital transformation journey.",
      downloadUrl: "/resources/transformation-roadmap",
      icon: "🗺️"
    },
    {
      id: 3,
      title: "API Integration Checklist",
      type: "Checklist",
      description: "Essential checklist for successful API integration projects.",
      downloadUrl: "/resources/api-checklist",
      icon: "✅"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest thought leadership, industry insights, and practical resources.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Articles</h3>
            <Link
              to="/resources"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              View All Articles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                variants={itemVariants}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                        {insight.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{insight.date}</span>
                        <span className="mx-2">•</span>
                        <span>{insight.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {insight.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <img
                        src={insight.authorImage}
                        alt={insight.author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="text-sm text-gray-600">{insight.author}</span>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Free Resources</h3>
            <Link
              to="/resources"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              View All Resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <div className="mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {resource.type}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {resource.description}
                </p>
                <Button
                  href={resource.downloadUrl}
                  variant="outline"
                  size="small"
                  className="w-full"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                >
                  Download
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with Our Insights
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get the latest technology trends, industry insights, and expert tips delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              variant="white"
              size="large"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-primary-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestInsights;
