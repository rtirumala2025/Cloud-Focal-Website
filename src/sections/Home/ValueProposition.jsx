import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const valueProps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Accelerated Results",
      description: "Get faster time-to-market with our proven methodologies and experienced teams. We deliver results 40% faster than industry average."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Proven Expertise",
      description: "15+ years of experience across industries with 500+ successful projects and 95% client satisfaction rate."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Dedicated Partnership",
      description: "We become an extension of your team, working closely to understand your unique challenges and deliver tailored solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost Optimization",
      description: "Reduce operational costs by up to 30% while improving efficiency and quality through our optimized processes."
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
    <section className="section-lg bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-neutral-900 mb-6">
            Why Choose Cloud Focal?
          </h2>
          <p className="body-large text-neutral-600 max-w-3xl mx-auto">
            We don't just provide services – we deliver transformative results that drive your business forward.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-2-cols mb-20"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="icon-text-block bg-neutral-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-neutral-200">
                {/* Icon */}
                <div className="icon-text-block__icon group-hover:bg-primary-600 group-hover:text-white">
                  <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
                    {prop.icon}
                  </div>
                </div>
                
                <div className="icon-text-block__content">
                  {/* Title */}
                  <h3 className="icon-text-block__title">
                    {prop.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="icon-text-block__description">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Difference
            </h3>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
              Ready to transform your technology operations? Let's discuss how our proven approach 
              can accelerate your success and deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="rounded-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Start Your Project
              </button>
              
              <button
                onClick={() => window.location.href = '/case-studies'}
                className="rounded-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
