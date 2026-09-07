import React from 'react';
import { useCookieConsent } from '../../../context/CookieContext';

const FloatingCookieButton = () => {
  const { openPreferencesModal, hasConsented } = useCookieConsent();

  // Show floating badge only once initial consent is given (when bottom banner is dismissed)
  if (!hasConsented) return null;

  return (
    <button
      type="button"
      onClick={openPreferencesModal}
      aria-label="Manage Cookie & Privacy Preferences"
      title="Manage Cookie Preferences"
      className="fixed bottom-5 left-5 z-40 p-3 rounded-full bg-slate-900/90 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700/80 hover:border-blue-500 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
    >
      <span className="sr-only">Manage Cookie Preferences</span>
      <svg
        className="w-5 h-5 transition-transform group-hover:rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    </button>
  );
};

export default FloatingCookieButton;
