import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../../../context/CookieContext';

const CookieConsentBanner = () => {
  const { hasConsented, acceptAll, rejectNonEssential, openPreferencesModal } = useCookieConsent();

  // If the user already made a decision, don't show the banner
  if (hasConsented) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.aside
        role="region"
        aria-label="Cookie and Privacy Consent Banner"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 pointer-events-auto"
      >
        <div className="max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl text-white p-5 sm:p-7">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Notice Text */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 text-lg">
                  🍪
                </span>
                <h2 className="text-base sm:text-lg font-semibold tracking-wide text-white">
                  We Value Your Privacy &amp; Transparent Data Choices
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Cloud Focal uses essential cookies to guarantee core site performance and security. With your consent, we also deploy analytics and marketing cookies to measure platform performance, personalize technical insights, and optimize our recruitment funnels in accordance with the Australian Privacy Principles (APPs), GDPR, and CCPA/CPRA.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs pt-1">
                <Link
                  to="/privacy-policy"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-slate-600">•</span>
                <Link
                  to="/cookie-policy"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                >
                  Cookie Policy &amp; Full Cookie List
                </Link>
              </div>
            </div>

            {/* Action Buttons (Equal Visual Prominence & Parity) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={openPreferencesModal}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-600/80 hover:border-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                Customize Settings
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-100 bg-slate-800 hover:bg-slate-700/90 border border-slate-600 hover:border-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md hover:shadow-blue-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
