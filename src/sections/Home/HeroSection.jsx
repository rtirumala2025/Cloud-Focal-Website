import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600">
      {/* Background Pattern with improved overlay for better readability */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Improved container with better vertical centering */}
      <div className="container-wide mx-auto relative z-10 py-20 lg:py-32">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-10"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ companies worldwide
          </motion.div>

          {/* Main Headline with improved readability */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-1 text-white mb-6 drop-shadow-lg"
          >
            Transform Your Vision
            <span className="block text-accent-200 drop-shadow-md">Into Reality</span>
          </motion.h1>

          {/* Subheadline with better spacing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-large text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Cloud Focal delivers comprehensive technology solutions that accelerate your digital transformation. 
            From talent acquisition to system integration, we're your strategic partner for success.
          </motion.p>

          {/* CTA Buttons with improved spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              to="/contact"
              variant="white"
              size="large"
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
            >
              Get Started Today
            </Button>
            <Button
              to="/services"
              variant="whiteOutline"
              size="large"
              className="transform hover:-translate-y-1 transition-all duration-200"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Stats with improved spacing and visual connection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mt-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm md:text-base">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;