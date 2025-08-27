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
        <title>About Cloud Focal - Our Story, Mission & Leadership | Technology Staffing & IT Consulting</title>
        <meta name="description" content="Learn about Cloud Focal's journey, mission, values, and leadership team. Discover how we've become a trusted partner in technology staffing and IT consulting." />
        <meta name="keywords" content="about Cloud Focal, company story, mission values, leadership team, technology consulting" />
        <meta property="og:title" content="About Cloud Focal - Our Story, Mission & Leadership" />
        <meta property="og:description" content="Learn about Cloud Focal's journey, mission, values, and leadership team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/about" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        <OurStory />
        <MissionValues />
        <Leadership />
        <CTASection
          title="Ready to Work with Us?"
          description="Let's discuss how Cloud Focal can help transform your technology initiatives."
          primaryButton={{ text: "Get Started", link: "/contact", variant: "white" }}
          secondaryButton={{ text: "View Our Services", link: "/services", variant: "whiteOutline" }}
          background="gradient"
          divider="wave"
        />
      </motion.div>
    </>
  );
};

export default About;
