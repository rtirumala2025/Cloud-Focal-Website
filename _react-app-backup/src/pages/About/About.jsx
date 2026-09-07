import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import OurStory from '../../sections/About/OurStory';
import MissionValues from '../../sections/About/MissionValues';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Cloud Focal - Our Story & Mission | Technology Staffing & IT Consulting</title>
        <meta name="description" content="Learn about Cloud Focal's journey, mission, and values. Discover how we've become a trusted partner in technology staffing and IT consulting." />
        <meta name="keywords" content="about Cloud Focal, company story, mission values, technology consulting" />
        <meta property="og:title" content="About Cloud Focal - Our Story & Mission" />
        <meta property="og:description" content="Learn about Cloud Focal's journey, mission, and values." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/about" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <OurStory />
        <MissionValues />
      </motion.div>
    </>
  );
};

export default About;