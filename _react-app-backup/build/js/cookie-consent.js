/**
 * Cloud Focal - Static Cookie Consent Management Script
 * Fully compliant with APPs (Australia), GDPR (EU/UK), and CCPA/CPRA (US).
 * Persists in localStorage under 'cloudfocal_cookie_consent_v1'.
 */
(function () {
  const STORAGE_KEY = 'cloudfocal_cookie_consent_v1';
  const CURRENT_VERSION = '1.0';

  function getStoredConsent() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.version === CURRENT_VERSION) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Unable to access localStorage', e);
    }
    return null;
  }

  function saveConsent(prefs) {
    const consentRecord = {
      necessary: true,
      analytics: !!prefs.analytics,
      functional: !!prefs.functional,
      marketing: !!prefs.marketing,
      timestamp: new Date().toISOString(),
      version: CURRENT_VERSION,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentRecord));
    } catch (e) {
      console.warn('Unable to write to localStorage', e);
    }
    window.dispatchEvent(new CustomEvent('cloudfocal_consent_updated', { detail: consentRecord }));
    hideBanner();
    hideModal();
  }

  function createBanner() {
    if (document.getElementById('cf-cookie-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'cf-cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie and Privacy Consent');
    banner.innerHTML = `
      <div style="position: fixed; bottom: 16px; left: 16px; right: 16px; max-width: 1100px; margin: 0 auto; z-index: 9999; background: rgba(13, 20, 51, 0.96); backdrop-filter: blur(12px); border: 1px solid #2d3e85; border-radius: 16px; padding: 20px 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); color: #f0f4ff; font-family: 'IBM Plex Mono', monospace; font-size: 13px;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;">
          <div style="flex: 1 1 500px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px; color: #fff; margin-bottom: 6px;">
              <span>🍪</span>
              <span>We Value Your Privacy &amp; Data Transparency</span>
            </div>
            <p style="color: #9fb0e8; font-size: 12px; line-height: 1.6; margin: 0;">
              Cloud Focal uses essential cookies for site security and operations. With your consent, we also deploy analytics and marketing cookies in accordance with Australian Privacy Principles, GDPR, and CCPA.
              <a href="privacy-policy.html" style="color: #5371ff; text-decoration: underline; margin-left: 6px;">Privacy Policy</a> • 
              <a href="cookie-policy.html" style="color: #5371ff; text-decoration: underline;">Cookie Policy</a>
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
            <button id="cf-btn-customize" type="button" style="background: rgba(255,255,255,0.08); color: #f0f4ff; border: 1px solid #2d3e85; padding: 8px 16px; font-family: inherit; font-size: 12px; font-weight: 500; border-radius: 8px; cursor: pointer;">Customize</button>
            <button id="cf-btn-reject" type="button" style="background: rgba(255,255,255,0.08); color: #f0f4ff; border: 1px solid #2d3e85; padding: 8px 16px; font-family: inherit; font-size: 12px; font-weight: 500; border-radius: 8px; cursor: pointer;">Reject Non-Essential</button>
            <button id="cf-btn-accept" type="button" style="background: #5371ff; color: #fff; border: none; padding: 8px 20px; font-family: inherit; font-size: 12px; font-weight: 600; border-radius: 8px; cursor: pointer;">Accept All</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('cf-btn-accept').addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: true, functional: true, marketing: true });
    });
    document.getElementById('cf-btn-reject').addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: false, functional: false, marketing: false });
    });
    document.getElementById('cf-btn-customize').addEventListener('click', function () {
      showModal();
    });
  }

  function hideBanner() {
    const banner = document.getElementById('cf-cookie-banner');
    if (banner) banner.remove();
  }

  function createModal() {
    if (document.getElementById('cf-cookie-modal')) return;

    const currentConsent = getStoredConsent() || { necessary: true, analytics: false, functional: false, marketing: false };

    const modal = document.createElement('div');
    modal.id = 'cf-cookie-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.75); backdrop-filter: blur(6px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;">
        <div style="background: #0d1433; border: 1px solid #2d3e85; border-radius: 16px; max-width: 650px; width: 100%; max-height: 90vh; overflow-y: auto; color: #f0f4ff; font-family: 'IBM Plex Mono', monospace; padding: 28px; box-shadow: 0 25px 60px rgba(0,0,0,0.6);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1c2758; padding-bottom: 16px; margin-bottom: 20px;">
            <div style="font-size: 16px; font-weight: 600; color: #fff;">🛡️ Cookie &amp; Privacy Preferences</div>
            <button id="cf-modal-close" type="button" style="background: none; border: none; color: #9fb0e8; font-size: 20px; cursor: pointer;">✕</button>
          </div>
          <p style="font-size: 12px; color: #9fb0e8; line-height: 1.6; margin-bottom: 20px;">
            Manage your granular consent for Cloud Focal cookies. Strictly necessary cookies are mandatory for security and session integrity.
          </p>

          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
            <div style="background: #111a42; border: 1px solid #1c2758; padding: 14px 18px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 13px; font-weight: 600; color: #fff;">Strictly Necessary Cookies</div>
                <div style="font-size: 11px; color: #9fb0e8; margin-top: 4px;">Enables core site security, CSRF protection, and consent storage.</div>
              </div>
              <span style="font-size: 10px; text-transform: uppercase; background: rgba(55, 181, 255, 0.2); color: #37b5ff; padding: 4px 8px; border-radius: 4px; font-weight: 600;">Always Active</span>
            </div>

            <div style="background: #111a42; border: 1px solid #1c2758; padding: 14px 18px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 13px; font-weight: 600; color: #fff;">Analytics &amp; Performance</div>
                <div style="font-size: 11px; color: #9fb0e8; margin-top: 4px;">Measures page views, Core Web Vitals, and aggregated telemetry via Google Analytics.</div>
              </div>
              <input type="checkbox" id="cf-opt-analytics" ${currentConsent.analytics ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
            </div>

            <div style="background: #111a42; border: 1px solid #1c2758; padding: 14px 18px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 13px; font-weight: 600; color: #fff;">Functional &amp; Preferences</div>
                <div style="font-size: 11px; color: #9fb0e8; margin-top: 4px;">Remembers UI themes (Dark/Light mode) and saved job search filters.</div>
              </div>
              <input type="checkbox" id="cf-opt-functional" ${currentConsent.functional ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
            </div>

            <div style="background: #111a42; border: 1px solid #1c2758; padding: 14px 18px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 13px; font-weight: 600; color: #fff;">Marketing &amp; Targeting</div>
                <div style="font-size: 11px; color: #9fb0e8; margin-top: 4px;">Evaluates technical recruitment campaigns across professional networks (LinkedIn).</div>
              </div>
              <input type="checkbox" id="cf-opt-marketing" ${currentConsent.marketing ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; gap: 10px; border-top: 1px solid #1c2758; padding-top: 16px; flex-wrap: wrap;">
            <button id="cf-modal-reject" type="button" style="background: #111a42; color: #9fb0e8; border: 1px solid #1c2758; padding: 10px 18px; font-family: inherit; font-size: 12px; border-radius: 6px; cursor: pointer;">Reject All Non-Essential</button>
            <button id="cf-modal-save" type="button" style="background: #5371ff; color: #fff; border: none; padding: 10px 22px; font-family: inherit; font-size: 12px; font-weight: 600; border-radius: 6px; cursor: pointer;">Save Preferences</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cf-modal-close').addEventListener('click', hideModal);
    document.getElementById('cf-modal-reject').addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: false, functional: false, marketing: false });
    });
    document.getElementById('cf-modal-save').addEventListener('click', function () {
      const analytics = document.getElementById('cf-opt-analytics').checked;
      const functional = document.getElementById('cf-opt-functional').checked;
      const marketing = document.getElementById('cf-opt-marketing').checked;
      saveConsent({ necessary: true, analytics, functional, marketing });
    });
  }

  function showModal() {
    createModal();
  }

  function hideModal() {
    const modal = document.getElementById('cf-cookie-modal');
    if (modal) modal.remove();
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function () {
    const consent = getStoredConsent();
    if (!consent) {
      createBanner();
    }

    // Attach click listeners to any "Cookie Settings" triggers on page
    const triggerButtons = document.querySelectorAll('#static-cookie-btn, #hero-cookie-btn, .cookie-settings-trigger');
    triggerButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        showModal();
      });
    });
  });
})();
