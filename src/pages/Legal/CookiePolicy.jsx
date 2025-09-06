import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const lastUpdated = "January 15, 2024";

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication cookies", "Security cookies", "Session management"],
      duration: "Session or up to 1 year"
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: ["Google Analytics", "Page view tracking", "User behavior analysis"],
      duration: "Up to 2 years"
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: ["Language preferences", "Form data storage", "User preferences"],
      duration: "Up to 1 year"
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
      examples: ["Social media pixels", "Advertising networks", "Campaign tracking"],
      duration: "Up to 2 years"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Cloud Focal</title>
        <meta name="description" content="Learn about how Cloud Focal uses cookies and similar technologies to enhance your browsing experience." />
        <meta name="keywords" content="cookie policy, cookies, tracking, Cloud Focal" />
        <meta property="og:title" content="Cookie Policy | Cloud Focal" />
        <meta property="og:description" content="Learn about how Cloud Focal uses cookies and similar technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/cookie-policy" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl text-primary-100">
                How we use cookies and similar technologies
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
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">What Are Cookies?</h2>
                <p className="text-neutral-600 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">How We Use Cookies</h2>
                <p className="text-neutral-600 mb-4">
                  We use cookies and similar technologies for several purposes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used</li>
                  <li>To improve our services and user experience</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To ensure security and prevent fraud</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Types of Cookies We Use</h2>
                
                <div className="space-y-6 mb-8">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{type.name}</h3>
                      <p className="text-neutral-600 mb-3">{type.description}</p>
                      <div className="mb-3">
                        <strong className="text-neutral-700">Examples:</strong>
                        <ul className="list-disc pl-6 mt-2 text-neutral-600">
                          {type.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-neutral-500">
                        <strong>Duration:</strong> {type.duration}
                      </p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Third-Party Cookies</h2>
                <p className="text-neutral-600 mb-4">
                  Some cookies on our website are set by third-party services that we use, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Social Media Platforms:</strong> To enable social sharing and integration</li>
                  <li><strong>Advertising Networks:</strong> To deliver relevant advertisements</li>
                  <li><strong>Customer Support Tools:</strong> To provide live chat and support services</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-neutral-600 mb-4">
                  You have several options for managing cookies:
                </p>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Browser Settings</h3>
                <p className="text-neutral-600 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Cookie Consent</h3>
                <p className="text-neutral-600 mb-6">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject. You can change these preferences at any time by clicking the "Cookie Settings" link in our footer.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Impact of Disabling Cookies</h2>
                <p className="text-neutral-600 mb-6">
                  While you can disable cookies, doing so may affect the functionality of our website. Some features may not work properly, and your experience may be less personalized.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Similar Technologies</h2>
                <p className="text-neutral-600 mb-4">
                  In addition to cookies, we may use other similar technologies:
                </p>
                <ul className="list-disc pl-6 mb-6 text-neutral-600">
                  <li><strong>Local Storage:</strong> To store data locally on your device</li>
                  <li><strong>Session Storage:</strong> To store data for the duration of your session</li>
                  <li><strong>Web Beacons:</strong> To track page views and email opens</li>
                  <li><strong>Fingerprinting:</strong> To identify devices based on browser characteristics</li>
                </ul>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Updates to This Policy</h2>
                <p className="text-neutral-600 mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Contact Us</h2>
                <p className="text-neutral-600 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
                    This Cookie Policy is effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future.
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
                Need Help with Cookie Settings?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our privacy team can help you understand and manage your cookie preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Contact Privacy Team
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

export default CookiePolicy;
