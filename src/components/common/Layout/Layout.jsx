import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useApp } from '../../../context/AppContext';

const Layout = ({ children, title, description, keywords, image, canonical }) => {
  const { state } = useApp();

  // Default meta tags
  const defaultTitle = 'Cloud Focal - Technology Staffing & IT Consulting';
  const defaultDescription = 'Leading technology staffing and IT consulting company. We help businesses find top tech talent and implement innovative IT solutions for digital transformation.';
  const defaultKeywords = 'technology staffing, IT consulting, system integration, digital transformation, tech talent, IT solutions';
  const defaultImage = '/images/og-image.jpg';

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <link rel="canonical" href={canonical || window.location.href} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:image" content={image || defaultImage} />
        <meta property="og:url" content={canonical || window.location.href} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
        <meta name="twitter:image" content={image || defaultImage} />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="robots" content="index, follow" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
                  "name": "Cloud Focal",
      "url": "https://cloudfocal.com",
      "logo": "https://cloudfocal.com/images/logos/cloudfocal-logo.svg",
            "description": "Leading technology staffing and IT consulting company",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Technology Drive",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "email": "info@cloudfocal.com"
            },
            "sameAs": [
                      "https://linkedin.com/company/cloudfocal",
        "https://twitter.com/cloudfocal",
        "https://facebook.com/cloudfocal"
            ]
          })}
        </script>
      </Helmet>

      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* FIXED: Added proper semantic HTML structure */}
      <div className="min-h-screen flex flex-col">
        <header role="banner">
          <Header />
        </header>
        
        {/* UI FIX: Added padding-top to prevent header overlap */}
        <main id="main-content" role="main" className="flex-grow pt-14 lg:pt-16">
          {children}
        </main>
        
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
      
      {/* FIXED: Added scroll to top component */}
      <ScrollToTop />

      {/* Notifications */}
      {state.notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {state.notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${
                notification.type === 'success'
                  ? 'bg-green-500 text-white'
                  : notification.type === 'error'
                  ? 'bg-red-500 text-white'
                  : notification.type === 'warning'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-blue-500 text-white'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium">{notification.message}</p>
                </div>
                <button
                  onClick={() => state.actions.removeNotification(notification.id)}
                  className="ml-2 text-white hover:text-gray-200"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Loading overlay */}
      {state.isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
            <div className="spinner"></div>
            <span className="text-gray-700">Loading...</span>
          </div>
        </div>
      )}

      {/* Error modal */}
      {state.error && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">!</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Error</h3>
            </div>
            <p className="text-gray-700 mb-4">{state.error}</p>
            <div className="flex justify-end">
              <button
                onClick={() => state.actions.clearError()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;