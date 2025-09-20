import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import OurStory from '../../sections/About/OurStory';
import MissionValues from '../../sections/About/MissionValues';
import { checkAndRedirectTheme } from '../../utils/themeUtils';

const AboutDark = () => {
  useEffect(() => {
    // Check theme preference and redirect if needed
    checkAndRedirectTheme();
    
    // Add dark theme class to HTML element
    document.documentElement.classList.add('dark-theme');
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.documentElement.classList.remove('dark-theme');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About Cloud Focal - Our Story & Mission | Technology Staffing & IT Consulting (Dark Mode)</title>
        <meta name="description" content="Learn about Cloud Focal's journey, mission, and values. Discover how we've become a trusted partner in technology staffing and IT consulting." />
        <meta name="keywords" content="about Cloud Focal, company story, mission values, technology consulting" />
        <meta property="og:title" content="About Cloud Focal - Our Story & Mission (Dark Mode)" />
        <meta property="og:description" content="Learn about Cloud Focal's journey, mission, and values." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/about-dark" />
        
        {/* Theme Meta Tags */}
        <meta name="theme-color" content="#0f0f23" />
        <meta name="color-scheme" content="dark" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        <OurStory />
        <MissionValues />
      </motion.div>
    </>
  );
};

export default AboutDark;
