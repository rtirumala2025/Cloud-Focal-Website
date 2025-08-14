import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../../sections/Home/HeroSection';
import ServicesOverview from '../../sections/Home/ServicesOverview';
import ValueProposition from '../../sections/Home/ValueProposition';
import IndustryFocus from '../../sections/Home/IndustryFocus';
import ClientTestimonials from '../../sections/Home/ClientTestimonials';
import LatestInsights from '../../sections/Home/LatestInsights';
import CTASection from '../../ui/CTA/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SourceCloud - Technology Staffing & IT Consulting | Transform Your Business</title>
        <meta 
          name="description" 
          content="SourceCloud delivers comprehensive technology solutions including staffing, consulting, and system integration. Transform your business with our expert team and innovative solutions." 
        />
        <meta 
          name="keywords" 
          content="technology staffing, IT consulting, system integration, digital transformation, tech talent, IT solutions, cloud migration, DevOps" 
        />
        <link rel="canonical" href="https://sourcecloud.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SourceCloud - Technology Staffing & IT Consulting" />
        <meta property="og:description" content="Transform your business with our comprehensive technology solutions. Expert staffing, consulting, and system integration services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/" />
        <meta property="og:image" content="/images/og-home.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SourceCloud - Technology Staffing & IT Consulting" />
        <meta name="twitter:description" content="Transform your business with our comprehensive technology solutions." />
        <meta name="twitter:image" content="/images/og-home.jpg" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesOverview />

        {/* Value Proposition */}
        <ValueProposition />

        {/* Industry Focus */}
        <IndustryFocus />

        {/* Client Testimonials */}
        <ClientTestimonials />

        {/* Latest Insights */}
        <LatestInsights />

        {/* Call to Action */}
        <CTASection
          title="Ready to Transform Your Technology?"
          description="Let's discuss how SourceCloud can help you achieve your digital transformation goals."
          primaryButton={{
            text: "Get Started",
            link: "/contact",
            variant: "primary"
          }}
          secondaryButton={{
            text: "Learn More",
            link: "/about",
            variant: "outline"
          }}
          background="gradient"
        />
      </motion.div>
    </>
  );
};

export default Home;
