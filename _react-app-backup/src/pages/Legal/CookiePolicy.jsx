import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../context/CookieContext';

const CookiePolicy = () => {
  const lastUpdated = "September 1, 2026";
  const policyVersion = "v2.4";
  const { openPreferencesModal, preferences } = useCookieConsent();
  const [activeFilter, setActiveFilter] = useState('all');

  const cookieData = [
    {
      name: 'cloudfocal_cookie_consent_v1',
      provider: 'Cloud Focal (.cloudfocal.com)',
      category: 'necessary',
      categoryName: 'Strictly Necessary',
      duration: '12 Months',
      type: '1st Party (Local Storage / Cookie)',
      purpose: 'Stores your granular cookie consent choices and timestamp to prevent repeated banner prompts.',
    },
    {
      name: 'cf_csrf_token',
      provider: 'Cloud Focal (.cloudfocal.com)',
      category: 'necessary',
      categoryName: 'Strictly Necessary',
      duration: 'Session',
      type: '1st Party (HTTP Only)',
      purpose: 'Protects contact forms, consultation booking, and resume submission endpoints against Cross-Site Request Forgery (CSRF).',
    },
    {
      name: 'cf_session_id',
      provider: 'Cloud Focal (.cloudfocal.com)',
      category: 'necessary',
      categoryName: 'Strictly Necessary',
      duration: 'Session',
      type: '1st Party',
      purpose: 'Maintains user session continuity across page transitions and multi-step forms.',
    },
    {
      name: '_ga',
      provider: 'Google Analytics (Google LLC)',
      category: 'analytics',
      categoryName: 'Analytics & Performance',
      duration: '2 Years',
      type: '1st Party',
      purpose: 'Calculates visitor, session, and campaign data to generate aggregated site usage analytics with IP anonymization.',
    },
    {
      name: '_ga_* (Container ID)',
      provider: 'Google Analytics (Google LLC)',
      category: 'analytics',
      categoryName: 'Analytics & Performance',
      duration: '2 Years',
      type: '1st Party',
      purpose: 'Maintains telemetry session state and measures Core Web Vitals performance benchmarks.',
    },
    {
      name: 'cf_theme_preference',
      provider: 'Cloud Focal (.cloudfocal.com)',
      category: 'functional',
      categoryName: 'Functional & Preferences',
      duration: '1 Year',
      type: '1st Party (Local Storage)',
      purpose: 'Persists your preferred visual contrast and display theme (Dark / Light mode).',
    },
    {
      name: 'cf_careers_filters',
      provider: 'Cloud Focal (.cloudfocal.com)',
      category: 'functional',
      categoryName: 'Functional & Preferences',
      duration: '6 Months',
      type: '1st Party (Local Storage)',
      purpose: 'Remembers active job search filters (e.g. Melbourne location, AWS / DevOps skill filters) on the careers portal.',
    },
    {
      name: 'li_sugr, bcookie, lidc',
      provider: 'LinkedIn Corporation',
      category: 'marketing',
      categoryName: 'Marketing & Targeting',
      duration: 'Up to 2 Years',
      type: '3rd Party',
      purpose: 'Attributes technical recruitment campaigns and measures B2B enterprise engagement from LinkedIn.',
    },
    {
      name: '_fbp',
      provider: 'Meta Platforms, Inc.',
      category: 'marketing',
      categoryName: 'Marketing & Targeting',
      duration: '90 Days',
      type: '1st Party',
      purpose: 'Used to measure conversion rates and optimize technical talent acquisition campaigns.',
    },
  ];

  const filteredCookies = activeFilter === 'all' 
    ? cookieData 
    : cookieData.filter(c => c.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Cookie Policy &amp; Tracking Notice | Cloud Focal</title>
        <meta
          name="description"
          content="Learn about Cloud Focal's transparent cookie and telemetry practices. View our full cookie inventory and manage your preferences in accordance with APPs, GDPR, and CCPA."
        />
        <meta
          name="keywords"
          content="cookie policy, tracking technologies, cookie inventory, privacy preferences, Cloud Focal"
        />
        <meta property="og:title" content="Cookie Policy | Cloud Focal" />
        <meta
          property="og:description"
          content="Detailed breakdown of cookies used on Cloud Focal, with interactive preference controls."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/cookie-policy" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="page-content-with-footer bg-slate-950 text-slate-100 min-h-screen"
      >
        {/* Hero Header */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#3853f5_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
                <span>Transparency &amp; Consent</span>
                <span>•</span>
                <span>Version {policyVersion}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
                Cookie Policy
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Clear, transparent disclosure of how Cloud Focal utilizes cookies, local storage tokens, and telemetry to deliver secure, performant technical services.
              </p>
              
              {/* Interactive Control Center CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={openPreferencesModal}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl hover:shadow-blue-500/25 transition-all flex items-center gap-2.5"
                >
                  <span>⚙️</span>
                  <span>Open Cookie Preference Center</span>
                </button>
                <Link
                  to="/privacy-policy"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-colors"
                >
                  Read Privacy Policy &rarr;
                </Link>
              </div>

              <div className="mt-6 text-xs font-mono text-slate-400">
                Effective Date: {lastUpdated} • Compliant with APPs (Australia), GDPR (EU/UK), and CCPA/CPRA (US)
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-16">
            
            {/* 1. What are cookies */}
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Section 01</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                  1. What Are Cookies and Local Storage Technologies?
                </h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                Cookies are small text files placed on your browser or device when you navigate a website. They allow the website to recognize your device across page visits, preserve security parameters, remember your preferred user interface configurations, and analyze how visitors interact with technical content.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                In addition to standard HTTP cookies, Cloud Focal may utilize modern HTML5 Local Storage, Session Storage, and web beacons (clear pixels) to maintain secure session state and improve website speed without storing sensitive personal credentials on your client machine.
              </p>
            </div>

            {/* 2. Four Categories */}
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Section 02</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                  2. Categories of Cookies We Use
                </h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                We categorize all digital tokens into four distinct categories. You have full granular control over non-essential categories:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Essential */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🔒</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Always Active / Required
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Strictly Necessary Cookies</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Essential for the security and operation of the website. They enable secure CSRF protection on forms, maintain session continuity, and remember your cookie consent preferences. The site cannot function properly without these.
                  </p>
                </div>

                {/* Analytics */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">📊</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                      preferences.analytics 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {preferences.analytics ? 'Your Status: Enabled' : 'Your Status: Disabled'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Analytics &amp; Performance Cookies</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collect aggregated, anonymized metrics on page traffic, load times, and user engagement via Google Analytics 4. These insights help us optimize our technical consulting case studies and page responsiveness.
                  </p>
                </div>

                {/* Functional */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">⚡</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                      preferences.functional 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {preferences.functional ? 'Your Status: Enabled' : 'Your Status: Disabled'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Functional &amp; Preference Cookies</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Remember your personalized settings, such as your theme toggle state (Dark/Light mode) and your saved location filters on our technical careers portal.
                  </p>
                </div>

                {/* Marketing */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🎯</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                      preferences.marketing 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {preferences.marketing ? 'Your Status: Enabled' : 'Your Status: Disabled'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Marketing &amp; Targeting Cookies</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Deployed to measure recruitment campaigns on professional platforms (like LinkedIn) and evaluate B2B inquiries. We do not sell your personal information or engage in intrusive cross-site tracking.
                  </p>
                </div>

              </div>
            </div>

            {/* 3. Detailed Cookie Inventory Matrix */}
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Section 03</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                    3. Detailed Cookie Inventory Matrix
                  </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                  {['all', 'necessary', 'analytics', 'functional', 'marketing'].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveFilter(tab)}
                      className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                        activeFilter === tab
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-900/60 shadow-xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900 text-slate-400 font-mono">
                      <th className="py-3.5 px-4">Cookie Identifier</th>
                      <th className="py-3.5 px-4">Provider</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Lifespan</th>
                      <th className="py-3.5 px-4">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {filteredCookies.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-semibold text-blue-300">
                          {item.name}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">{item.provider}</td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${
                            item.category === 'necessary'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : item.category === 'analytics'
                              ? 'bg-blue-500/20 text-blue-300'
                              : item.category === 'functional'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-purple-500/20 text-purple-300'
                          }`}>
                            {item.categoryName}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-400">{item.duration}</td>
                        <td className="py-3.5 px-4 text-xs text-slate-300">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Managing via Browser */}
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Section 04</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                  4. Browser Controls &amp; Global Privacy Control (GPC)
                </h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                In addition to our on-page Preference Center, you can manage or delete cookies directly through your web browser's security settings:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white">Google Chrome</div>
                  <p className="text-slate-400">Settings &gt; Privacy and Security &gt; Third-party cookies &gt; Block third-party cookies.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white">Apple Safari</div>
                  <p className="text-slate-400">Settings &gt; Safari &gt; Advanced &gt; Block All Cookies or Prevent Cross-Site Tracking.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white">Mozilla Firefox</div>
                  <p className="text-slate-400">Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection (Strict Mode).</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-white">Microsoft Edge</div>
                  <p className="text-slate-400">Settings &gt; Cookies and site permissions &gt; Manage and delete cookies and site data.</p>
                </div>
              </div>

              {/* GPC Signal Box */}
              <div className="p-5 rounded-xl bg-blue-950/40 border border-blue-800/60 text-sm space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <span>🛡️</span> Recognition of Global Privacy Control (GPC) Signals
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Cloud Focal respects <strong>Global Privacy Control (GPC)</strong> and Do-Not-Track (DNT) signals broadcast by your browser. If our system detects an active GPC header, non-essential marketing and tracking cookies are automatically disabled by default.
                </p>
              </div>
            </div>

            {/* 5. Contact & Updates */}
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Section 05</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                  5. Policy Updates &amp; Contact Information
                </h2>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                We may periodically update this Cookie Policy to reflect changes in our technical services, data privacy legislation, or vendor integrations. For questions regarding our cookie practices, please contact our Privacy Team:
              </p>
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="font-bold text-white text-base">Cloud Focal Privacy &amp; Data Protection Office</div>
                  <div className="text-xs text-slate-400 mt-1">
                    Melbourne, Victoria, Australia • San Francisco, CA, USA
                  </div>
                  <div className="text-xs text-blue-400 mt-1">
                    Email: <a href="mailto:privacy@cloudfocal.com" className="underline">privacy@cloudfocal.com</a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openPreferencesModal}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold whitespace-nowrap transition-colors"
                >
                  Manage Cookie Settings
                </button>
              </div>
            </div>

          </div>
        </section>
      </motion.div>
    </>
  );
};

export default CookiePolicy;
