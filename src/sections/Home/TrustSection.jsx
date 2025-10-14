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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-black mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="body-large text-black max-w-4xl mx-auto">
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
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{badge.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-black">
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
