import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Cloud Focal</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Cloud Focal's homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-md w-full text-center"
        >
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="space-y-4">
            <Button to="/" variant="primary" size="large" className="w-full">
              Go to Homepage
            </Button>
            <Button to="/contact" variant="outline" size="large" className="w-full">
              Contact Us
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/services" className="text-primary-600 hover:text-primary-700 hover:underline">
                Our Services
              </Link>
              <Link to="/about" className="text-primary-600 hover:text-primary-700 hover:underline">
                About Us
              </Link>
              <Link to="/careers" className="text-primary-600 hover:text-primary-700 hover:underline">
                Careers
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
