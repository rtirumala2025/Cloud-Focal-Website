import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../../sections/Home/HeroSection';
import ServicesOverview from '../../sections/Home/ServicesOverview';
import ValueProposition from '../../sections/Home/ValueProposition';
import TrustSection from '../../sections/Home/TrustSection';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Cloud Focal - Technology Staffing & IT Consulting | Transform Your Business</title>
        <meta 
          name="description" 
          content="Cloud Focal delivers comprehensive technology solutions including staffing, consulting, and system integration. Transform your business with our expert team and innovative solutions." 
        />
        <meta 
          name="keywords" 
          content="technology staffing, IT consulting, system integration, digital transformation, tech talent, IT solutions, cloud migration, DevOps" 
        />
        <link rel="canonical" href="https://cloudfocal.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cloud Focal - Technology Staffing & IT Consulting" />
        <meta property="og:description" content="Transform your business with our comprehensive technology solutions. Expert staffing, consulting, and system integration services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/" />
        <meta property="og:image" content="/images/logos/cloudfocal-logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Focal - Technology Staffing & IT Consulting" />
        <meta name="twitter:description" content="Transform your business with our comprehensive technology solutions." />
        <meta name="twitter:image" content="/images/logos/cloudfocal-logo.png" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="page-content-with-footer theme-transition"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesOverview />

        {/* Value Proposition */}
        <ValueProposition />

        {/* Trust Section */}
        <TrustSection />
      </motion.div>
    </>
  );
};

export default Home;