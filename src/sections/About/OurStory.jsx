import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Cloud Focal was founded with a vision to bridge the gap between exceptional tech talent and innovative companies.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded services to include IT consulting and system integration, becoming a comprehensive technology partner.'
    },
    {
      year: '2018',
      title: 'Growth',
      description: 'Reached 100+ successful client partnerships and 500+ technology placements across various industries.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Leading digital transformation initiatives with cutting-edge technologies and proven methodologies.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a trusted technology partner, our journey has been driven by innovation, 
            excellence, and an unwavering commitment to client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower organizations with exceptional technology talent and innovative solutions that drive 
                digital transformation and sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm text-primary-100">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm text-primary-100">Client Partners</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Building the Future of Technology</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2010, Cloud Focal began as a small team of technology enthusiasts with a big vision. 
              We recognized that the success of any organization depends on having the right people with the 
              right skills at the right time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, we've grown into a comprehensive technology partner, serving organizations across various 
              industries with staffing solutions, IT consulting, and system integration services. Our commitment 
              to excellence and client success remains at the core of everything we do.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Trusted by Fortune 500 companies</span>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
