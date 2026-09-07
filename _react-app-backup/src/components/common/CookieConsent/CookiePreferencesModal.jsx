import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../../../context/CookieContext';

const CookiePreferencesModal = () => {
  const {
    isModalOpen,
    preferences,
    saveConsent,
    acceptAll,
    rejectNonEssential,
    closePreferencesModal,
  } = useCookieConsent();

  // Local state while adjusting settings in modal
  const [localPrefs, setLocalPrefs] = useState({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  const [expandedSection, setExpandedSection] = useState(null);
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Sync state when modal opens
  useEffect(() => {
    if (isModalOpen) {
      previousActiveElement.current = document.activeElement;
      setLocalPrefs({
        necessary: true,
        analytics: preferences.analytics,
        functional: preferences.functional,
        marketing: preferences.marketing,
      });

      // Trap focus or focus on container
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 50);

      // Disable body scroll while modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen, preferences]);

  // Keyboard accessibility: Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') {
        closePreferencesModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closePreferencesModal]);

  if (!isModalOpen) return null;

  const handleToggle = (key) => {
    if (key === 'necessary') return; // Cannot toggle essential
    setLocalPrefs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    saveConsent(localPrefs);
  };

  const toggleAccordion = (key) => {
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Strictly Necessary Cookies',
      required: true,
      description:
        'Essential for the website to function, maintain security, enable session continuity, and store your cookie privacy choices. These cannot be disabled.',
      cookies: [
        { name: 'cloudfocal_cookie_consent_v1', provider: 'Cloud Focal', duration: '12 months', purpose: 'Remembers your cookie consent selections' },
        { name: 'cf_csrf_token', provider: 'Cloud Focal', duration: 'Session', purpose: 'Protects contact and consultation forms from Cross-Site Request Forgery' },
        { name: 'cf_session_id', provider: 'Cloud Focal', duration: 'Session', purpose: 'Preserves secure browsing session parameters' },
      ],
    },
    {
      id: 'analytics',
      name: 'Analytics & Performance Cookies',
      required: false,
      description:
        'Help us analyze how visitors interact with our website, monitor Core Web Vitals, and assess page traffic so we can measure and improve performance.',
      cookies: [
        { name: '_ga', provider: 'Google Analytics', duration: '2 years', purpose: 'Distinguishes unique anonymous site visitors' },
        { name: '_ga_*', provider: 'Google Analytics', duration: '2 years', purpose: 'Maintains session state and telemetry counters' },
        { name: '_clsk', provider: 'Clarity / Telemetry', duration: '1 day', purpose: 'Connects multiple page views in a single session' },
      ],
    },
    {
      id: 'functional',
      name: 'Functional & Preference Cookies',
      required: false,
      description:
        'Enable enhanced functionality, remembering your preferred interface settings, filtered job search criteria, and pre-filling contact details for convenience.',
      cookies: [
        { name: 'cf_theme_preference', provider: 'Cloud Focal', duration: '1 year', purpose: 'Remembers your light/dark mode preference' },
        { name: 'cf_careers_filter', provider: 'Cloud Focal', duration: '6 months', purpose: 'Saves your active location and role category filters on Careers' },
      ],
    },
    {
      id: 'marketing',
      name: 'Marketing & Targeting Cookies',
      required: false,
      description:
        'Used to deliver tailored technical staffing insights and consulting case studies across professional networks (e.g., LinkedIn) and evaluate campaign effectiveness.',
      cookies: [
        { name: 'li_sugr, bcookie, lidc', provider: 'LinkedIn Insight Tag', duration: 'Up to 2 years', purpose: 'Measures B2B and recruitment campaign conversion metrics' },
        { name: '_fbp', provider: 'Meta Pixel', duration: '90 days', purpose: 'Attributes talent acquisition inquiries and ad delivery' },
      ],
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closePreferencesModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          tabIndex={-1}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl text-slate-100 max-h-[90vh] flex flex-col z-10 overflow-hidden outline-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xl">
                🛡️
              </span>
              <div>
                <h2 id="cookie-modal-title" className="text-xl font-bold text-white tracking-wide">
                  Cookie &amp; Privacy Preferences
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage your data and consent preferences for Cloud Focal
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closePreferencesModal}
              aria-label="Close preferences modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-300">
            <p className="text-xs leading-relaxed text-slate-300">
              When you visit Cloud Focal, we store or retrieve data on your browser using cookies and local storage tokens. This information might be about your preferences, technical device specs, or site usage. You can exercise your granular rights below in accordance with Australian Privacy Principles (APPs), GDPR, and CCPA/CPRA.
            </p>

            {/* Cookie Categories Accordion / Toggle List */}
            <div className="space-y-4">
              {cookieCategories.map((cat) => {
                const isChecked = cat.required ? true : localPrefs[cat.id];
                const isExpanded = expandedSection === cat.id;

                return (
                  <div
                    key={cat.id}
                    className="border border-slate-800 bg-slate-850/60 rounded-2xl p-4 sm:p-5 transition-colors hover:border-slate-700/80"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-base font-semibold text-white">
                            {cat.name}
                          </h3>
                          {cat.required ? (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                              Always Active
                            </span>
                          ) : (
                            <span
                              className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                                isChecked
                                  ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                  : 'bg-slate-800 text-slate-400 border-slate-700'
                              }`}
                            >
                              {isChecked ? 'Enabled' : 'Disabled'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      {/* Accessible Switch Toggle */}
                      <div className="pt-0.5">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isChecked}
                          aria-label={`Toggle ${cat.name}`}
                          disabled={cat.required}
                          onClick={() => handleToggle(cat.id)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            cat.required
                              ? 'bg-emerald-600 opacity-80 cursor-not-allowed'
                              : isChecked
                              ? 'bg-blue-600'
                              : 'bg-slate-700'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              isChecked ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Expand Cookies Details */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(cat.id)}
                        className="text-xs font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                      >
                        <span>{isExpanded ? 'Hide Cookie Details' : 'View Cookies in this Category'}</span>
                        <svg
                          className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Collapsible Cookie List */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cat.cookies.map((c, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                              <div className="font-mono font-semibold text-blue-300">{c.name}</div>
                              <div className="text-[11px] text-slate-400 mt-1">
                                <span className="text-slate-500">Provider:</span> {c.provider} • <span className="text-slate-500">Lifespan:</span> {c.duration}
                              </div>
                              <div className="text-[11px] text-slate-300 mt-1">{c.purpose}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                Reject All Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                Accept All
              </button>
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
            >
              Save My Preferences
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;
