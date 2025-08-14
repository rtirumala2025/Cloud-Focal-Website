import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button/Button';
import CTASection from '../../ui/CTA/CTASection';

const PublicSector = () => {
  return (
    <>
      <Helmet>
        <title>Public Sector Solutions - Government Technology | SourceCloud</title>
        <meta name="description" content="Technology solutions for government and public sector organizations." />
        <meta property="og:title" content="Public Sector Solutions - Government Technology" />
        <meta property="og:description" content="Technology solutions for government and public sector organizations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourcecloud.com/industries/public-sector" />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Public Sector Solutions</h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">Technology solutions for government and public sector organizations.</p>
              <Button to="/contact" variant="primary" size="large" className="bg-white text-primary-700 hover:bg-gray-100">Contact Us</Button>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">We're working on comprehensive public sector solutions.</p>
              <Button to="/contact" variant="primary" size="large">Contact Us</Button>
            </motion.div>
          </div>
        </section>
        <CTASection title="Ready to Transform Your Public Sector Technology?" description="Let's discuss your needs." primaryButton={{ text: "Get Started", link: "/contact", variant: "primary" }} background="gradient" />
      </motion.div>
    </>
  );
};

export default PublicSector;
