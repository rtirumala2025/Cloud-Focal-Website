import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Cloud Focal</title>
        <meta name="description" content="Learn how Cloud Focal collects, uses, and protects your personal information. Read our comprehensive privacy policy." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Cloud Focal" />
        <meta property="og:title" content="Privacy Policy | Cloud Focal" />
        <meta property="og:description" content="Learn how Cloud Focal protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/privacy-policy" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-primary-100">
                How we collect, use, and protect your personal information
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
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Introduction</h2>
                <p className="text-neutral-600 mb-6">
                  Cloud Focal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                </p>
                <p className="text-neutral-600 mb-8">
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Information We Collect</h2>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Personal Information</h3>
                <p className="text-neutral-600 mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Professional information (job title, company, industry)</li>
                  <li>Resume or CV information for job applications</li>
                  <li>Communication preferences</li>
                  <li>Feedback and reviews</li>
                </ul>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Automatically Collected Information</h3>
                <p className="text-neutral-600 mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">How We Use Your Information</h2>
                <p className="text-neutral-600 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Providing and improving our services</li>
                  <li>Processing job applications and staffing requests</li>
                  <li>Communicating with you about our services</li>
                  <li>Sending newsletters and marketing materials (with your consent)</li>
                  <li>Analyzing website usage and improving user experience</li>
                  <li>Complying with legal obligations</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Information Sharing and Disclosure</h2>
                <p className="text-neutral-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Data Security</h2>
                <p className="text-neutral-600 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Your Rights and Choices</h2>
                <p className="text-neutral-600 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-neutral-600 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from.
                </p>
                <p className="text-neutral-600 mb-6">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Third-Party Links</h2>
                <p className="text-neutral-600 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Children's Privacy</h2>
                <p className="text-neutral-600 mb-6">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">International Data Transfers</h2>
                <p className="text-neutral-600 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Changes to This Privacy Policy</h2>
                <p className="text-neutral-600 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Contact Us</h2>
                <p className="text-neutral-600 mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <p className="text-neutral-600 mb-2">
                    <strong>Email:</strong> privacy@cloudfocal.com
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
                    This Privacy Policy is effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future.
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
                Questions About Your Privacy?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                We're here to help. Contact our privacy team for any questions or concerns about how we handle your information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/terms-of-service"
                  className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
