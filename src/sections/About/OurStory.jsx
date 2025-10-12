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
      description: 'We expanded our services to include IT consulting and system integration, becoming a comprehensive technology partner.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Leading digital transformation initiatives with cutting-edge technologies and proven methodologies.'
    }
  ];

  return (
    <section className="pt-32 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Story</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a trusted technology partner, our journey has been driven by innovation, 
            excellence, and an unwavering commitment to client success.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Placements", icon: "👥", color: "from-blue-500 to-blue-600" },
              { number: "100+", label: "Client Partners", icon: "🤝", color: "from-green-500 to-green-600" },
              { number: "14+", label: "Years of Excellence", icon: "⭐", color: "from-yellow-500 to-yellow-600" },
              { number: "99%", label: "Client Satisfaction", icon: "🎯", color: "from-purple-500 to-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-sm lg:text-base leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  Building the Future of Technology
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-black leading-relaxed">
                    Founded in 2010, Cloud Focal began as a small team of technology enthusiasts with a big vision. 
                    We recognized that the success of any organization depends on having the right people with the 
                    right skills at the right time.
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    Today, we've grown into a comprehensive technology partner, serving organizations across various 
                    industries with staffing solutions, IT consulting, and system integration services. Our commitment 
                    to excellence and client success remains at the core of everything we do.
                  </p>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-900 font-semibold text-lg">Trusted by Fortune 500 companies</span>
                  <p className="text-gray-700 text-sm">Proven track record of excellence</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-10 text-gray-900 border border-blue-100"
            >
              <h4 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Why Choose Cloud Focal?</h4>
              <div className="space-y-6">
                {[
                  "Expert team with proven track records",
                  "Comprehensive technology solutions",
                  "Long-term strategic partnerships",
                  "Industry-leading success rates"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="pt-8"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Our Journey</h3>
            <p className="text-lg text-black max-w-2xl mx-auto">
              A timeline of milestones that shaped our growth and success in the technology industry
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full rounded-full"></div>
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
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-3">{item.year}</div>
                      <h4 className="text-2xl font-bold text-black mb-4">{item.title}</h4>
                      <p className="text-black leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
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