import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <>
      <Helmet>
        <title>Terms of Service | Cloud Focal</title>
        <meta name="description" content="Read Cloud Focal's terms of service. Understand the terms and conditions for using our technology staffing and consulting services." />
        <meta name="keywords" content="terms of service, terms and conditions, Cloud Focal, legal" />
        <meta property="og:title" content="Terms of Service | Cloud Focal" />
        <meta property="og:description" content="Read Cloud Focal's terms of service and conditions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/terms-of-service" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="page-content-with-footer"
      >
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-primary-100">
                Terms and conditions for using Cloud Focal services
              </p>
              <p className="text-sm text-primary-200 mt-4">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Agreement to Terms</h2>
                <p className="text-neutral-600 mb-6">
                  These Terms of Service ("Terms") govern your use of Cloud Focal's website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Description of Services</h2>
                <p className="text-neutral-600 mb-4">
                  Cloud Focal provides technology staffing, IT consulting, and system integration services, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Technology talent recruitment and placement</li>
                  <li>IT consulting and strategic advisory services</li>
                  <li>System integration and implementation</li>
                  <li>Digital transformation consulting</li>
                  <li>Technology project management</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">User Accounts and Registration</h2>
                <p className="text-neutral-600 mb-4">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information remains current</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Acceptable Use</h2>
                <p className="text-neutral-600 mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our services to transmit harmful or malicious code</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Intellectual Property Rights</h2>
                <p className="text-neutral-600 mb-4">
                  Our services and their original content, features, and functionality are owned by Cloud Focal and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-neutral-600 mb-6">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without our prior written consent.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Privacy and Data Protection</h2>
                <p className="text-neutral-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your personal information.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Service Availability and Modifications</h2>
                <p className="text-neutral-600 mb-4">
                  We strive to provide reliable and continuous service, but we cannot guarantee that our services will be available at all times. We may:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Modify, suspend, or discontinue our services</li>
                  <li>Update or change our service offerings</li>
                  <li>Perform maintenance that may temporarily affect service availability</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Limitation of Liability</h2>
                <p className="text-neutral-600 mb-6">
                  To the maximum extent permitted by law, Cloud Focal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Indemnification</h2>
                <p className="text-neutral-600 mb-6">
                  You agree to defend, indemnify, and hold harmless Cloud Focal and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our services or violation of these Terms.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Termination</h2>
                <p className="text-neutral-600 mb-4">
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p className="text-neutral-600 mb-6">
                  Upon termination, your right to use our services will cease immediately. If you wish to terminate your account, you may simply discontinue using our services.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Governing Law</h2>
                <p className="text-neutral-600 mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of San Francisco County, California.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Changes to Terms</h2>
                <p className="text-neutral-600 mb-6">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Contact Information</h2>
                <p className="text-neutral-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <p className="text-neutral-600 mb-2">
                    <strong>Email:</strong> legal@cloudfocal.com
                  </p>
                  <p className="text-neutral-600 mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-neutral-600">
                    <strong>Address:</strong> 123 Technology Drive, Suite 200, San Francisco, CA 94105
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm text-neutral-500 text-center">
                    These Terms of Service are effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our legal team is here to help clarify any questions about our terms of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Contact Legal Team
                </Link>
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default TermsOfService;
