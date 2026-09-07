import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cloudfocal_cookie_consent_v1';
const CURRENT_VERSION = '1.0';

export const DEFAULT_PREFERENCES = {
  necessary: true, // Always true and cannot be disabled
  analytics: false,
  functional: false,
  marketing: false,
};

const CookieContext = createContext(null);

export const CookieProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consentDate, setConsentDate] = useState(null);

  // Initialize consent from localStorage or respect Global Privacy Control (GPC)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.version === CURRENT_VERSION) {
          setPreferences({
            necessary: true,
            analytics: !!parsed.analytics,
            functional: !!parsed.functional,
            marketing: !!parsed.marketing,
          });
          setConsentDate(parsed.timestamp || null);
          setHasConsented(true);
          return;
        }
      }

      // Check Global Privacy Control (GPC) signal
      const gpcEnabled = navigator.globalPrivacyControl === true;
      if (gpcEnabled) {
        // If GPC is sent by browser, ensure marketing and analytics default to false
        setPreferences((prev) => ({
          ...prev,
          analytics: false,
          marketing: false,
        }));
      }
    } catch (e) {
      console.warn('Could not read cookie consent from storage', e);
    }
  }, []);

  // Broadcast consent changes to external scripts (like Google Analytics / Tag Manager)
  const broadcastConsent = useCallback((newPreferences) => {
    const detail = {
      ...newPreferences,
      timestamp: new Date().toISOString(),
      version: CURRENT_VERSION,
    };

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cloudfocal_consent_updated', { detail }));

      // If Google Tag Manager / dataLayer exists, push consent update
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'cookie_consent_update',
          consent_analytics: newPreferences.analytics ? 'granted' : 'denied',
          consent_functional: newPreferences.functional ? 'granted' : 'denied',
          consent_marketing: newPreferences.marketing ? 'granted' : 'denied',
        });
      }
    }
  }, []);

  const saveConsent = useCallback((newPrefs) => {
    const finalized = {
      necessary: true,
      analytics: !!newPrefs.analytics,
      functional: !!newPrefs.functional,
      marketing: !!newPrefs.marketing,
      timestamp: new Date().toISOString(),
      version: CURRENT_VERSION,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalized));
    } catch (e) {
      console.warn('Could not save cookie consent to storage', e);
    }

    setPreferences(finalized);
    setConsentDate(finalized.timestamp);
    setHasConsented(true);
    setIsModalOpen(false);
    broadcastConsent(finalized);
  }, [broadcastConsent]);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  }, [saveConsent]);

  const rejectNonEssential = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  }, [saveConsent]);

  const openPreferencesModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closePreferencesModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not remove cookie consent from storage', e);
    }
    setPreferences(DEFAULT_PREFERENCES);
    setHasConsented(false);
    setConsentDate(null);
    setIsModalOpen(true);
  }, []);

  const value = {
    preferences,
    hasConsented,
    isModalOpen,
    consentDate,
    acceptAll,
    rejectNonEssential,
    saveConsent,
    openPreferencesModal,
    closePreferencesModal,
    resetConsent,
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
};

export default CookieContext;
