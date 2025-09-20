import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {

  const trustBadges = [
    {
      icon: "🏆",
      title: "Award Winner",
      description: "Best Technology Staffing 2024"
    },
    {
      icon: "⭐",
      title: "5-Star Rated",
      description: "Client Satisfaction Excellence"
    },
    {
      icon: "🔒",
      title: "ISO Certified",
      description: "Quality Management System"
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Serving 25+ Countries"
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-purple-900/10 to-indigo-900/15"></div>
        
        {/* Subtle radial pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.2) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-1 h-1 bg-blue-400/40 rounded-full"
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-400/30 rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/3 w-1 h-1 bg-cyan-400/35 rounded-full"
            animate={{
              y: [0, -70, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 4
            }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="body-large text-gray-300 max-w-4xl mx-auto">
            Our track record speaks for itself. See how we've helped organizations across industries 
            achieve remarkable results and transform their technology landscape.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <span className="text-3xl filter drop-shadow-lg">{badge.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
