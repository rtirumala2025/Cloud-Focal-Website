import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import servicesData from '../../assets/data/services.json';

const ServicesOverview = () => {
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
    <section className="section-lg bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 4
            }}
          />
        </div>
      </div>
      
      {/* UI FIX: Using wider container for better space utilization */}
      <div className="container-wide mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 text-white mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="body-large text-gray-300 max-w-5xl mx-auto">
            From talent acquisition to system integration, we provide end-to-end technology services 
            that help organizations thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-3-cols mb-20"
        >
          {servicesData.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <div className="card card-elevated overflow-hidden h-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group-hover:-translate-y-2">
                {/* Service Icon */}
                <div className="p-8 pb-6 flex-1 flex flex-col relative">
                  {/* Glow effect behind icon */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:scale-150 transition-all duration-500"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="heading-4 text-white mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="body text-gray-300 mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button
                    to={`/services/${service.id}`}
                    variant="outline"
                    size="medium"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden no-border-section" style={{border: 'none !important', boxShadow: 'none !important', outline: 'none !important', borderWidth: '0 !important', borderStyle: 'none !important'}}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Every organization has unique technology needs. Let us create a tailored solution 
                that perfectly fits your requirements and business objectives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="rounded-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Discuss Your Needs
              </button>
              
              <button
                onClick={() => window.location.href = '/services'}
                className="rounded-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Service Icon Component
const ServiceIcon = ({ icon }) => {
  const iconClasses = "w-8 h-8 text-white";
  
  switch (icon) {
    case 'users':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      );
    case 'lightbulb':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'link':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    default:
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

export default ServicesOverview;
