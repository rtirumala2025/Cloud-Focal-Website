import React from 'react';
import { motion } from 'framer-motion';

const MissionValues = () => {
  const pillars = [
    {
      title: 'People First',
      color: 'from-blue-500 to-blue-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        'Foster an environment of diversity, accountability, and collaboration',
        'Equip our staff with tools, training, and opportunities for life-long careers',
        'Celebrate and reward individual, team, and corporate achievement'
      ]
    },
    {
      title: 'Process & Innovation',
      color: 'from-green-500 to-green-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        'Balance a process-oriented approach with a passion for innovation',
        'Listen intently to our clients and embrace their missions as our own',
        'Endeavor to deliver all projects on time, in scope, and within budget'
      ]
    },
    {
      title: 'Ethics & Community',
      color: 'from-purple-500 to-purple-600',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        'Expect the highest ethical standards of ourselves and our partners',
        'Seek to advance the common good professionally and personally',
        'Promote social responsibility and local community service'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const differentiators = [
    {
      title: "Mission-Driven Approach",
      description: "We're more than a vendor; we're your long-term technology transformation partner. We don't just offer capabilities - we pursue global issues and embrace client missions as our own."
    },
    {
      title: "Dual Expertise",
      description: "Combining technology AND staffing expertise, we provide scalable solutions for any need - from single staffing assignments to full enterprise IT transformations."
    },
    {
      title: "Proven Methodology",
      description: "Our proprietary Cloud Focal methodologies combine federal and commercial best practices, ensuring cost benefits, enhanced schedule management, and improved quality."
    },
    {
      title: "Results-Oriented",
      description: "With over a decade of experience, we consistently deliver high-quality, repeatable solutions on time, in scope, and within budget."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Cloud Focal, our values are the foundation of everything we do. They guide our decisions, 
            shape our culture, and ensure we deliver exceptional value to our clients and community.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-lg"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white">
              To empower organizations with exceptional technology talent and innovative solutions that drive 
              digital transformation and sustainable growth. Together, these factors lead to Cloud Focal's 
              ultimate mission: To be the trusted partner that transforms our clients' visions into reality.
            </p>
            <p className="text-lg md:text-xl font-medium text-white">
              Your success is our goal. We embrace your mission as our own.
            </p>
          </div>
        </motion.div>

        {/* Values Pillars */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Differentiators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose Cloud Focal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValues;