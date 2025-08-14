import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import OurStory from '../../sections/About/OurStory';
import MissionValues from '../../sections/About/MissionValues';
import Leadership from '../../sections/About/Leadership';
import CTASection from '../../ui/CTA/CTASection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About SourceCloud - Our Story, Mission & Leadership | Technology Staffing & IT Consulting</title>
        <meta name="description" content="Learn about SourceCloud's journey, mission, values, and leadership team. Discover how we've become a trusted partner in technology staffing and IT consulting." />
        <meta name="keywords" content="about SourceCloud, company story, mission values, leadership team, technology consulting" />
        <meta property="og:title" content="About SourceCloud - Our Story, Mission & Leadership" />
        <meta property="og:description" content="Learn about SourceCloud's journey, mission, values, and leadership team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/about" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <OurStory />
        <MissionValues />
        <Leadership />
        <CTASection
          title="Ready to Work with Us?"
          description="Let's discuss how SourceCloud can help transform your technology initiatives."
          primaryButton={{ text: "Get Started", link: "/contact", variant: "primary" }}
          secondaryButton={{ text: "View Our Services", link: "/services", variant: "outline" }}
          background="gradient"
        />
      </motion.div>
    </>
  );
};

export default About;
