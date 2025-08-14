import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import CTASection from '../../ui/CTA/CTASection';

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | SourceCloud</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped organizations achieve their technology goals." />
        <meta property="og:title" content="Case Studies - Success Stories" />
        <meta property="og:description" content="Explore our success stories and case studies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/case-studies" />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">Success stories from organizations we've helped transform.</p>
              <Button to="/contact" variant="primary" size="large" className="bg-white text-primary-700 hover:bg-gray-100">Contact Us</Button>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">We're working on comprehensive case studies and success stories.</p>
              <Button to="/contact" variant="primary" size="large">Contact Us</Button>
            </motion.div>
          </div>
        </section>
        <CTASection title="Ready to Create Your Success Story?" description="Let's discuss your project." primaryButton={{ text: "Get Started", link: "/contact", variant: "primary" }} background="gradient" />
      </motion.div>
    </>
  );
};

export default CaseStudies;
