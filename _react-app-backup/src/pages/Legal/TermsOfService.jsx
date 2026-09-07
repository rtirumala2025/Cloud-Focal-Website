import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = "September 1, 2026";
  const policyVersion = "v2.0";
  const [activeSection, setActiveSection] = useState('agreement');

  const sections = [
    { id: 'agreement', title: '1. Agreement to Terms' },
    { id: 'services', title: '2. About Cloud Focal' },
    { id: 'website-use', title: '3. Website Use & Acceptable Conduct' },
    { id: 'enquiries', title: '4. Enquiries & Lead Forms' },
    { id: 'ip', title: '5. Intellectual Property' },
    { id: 'disclaimers', title: '6. Disclaimers & Accuracy' },
    { id: 'liability', title: '7. Limitation of Liability' },
    { id: 'acl', title: '8. Australian Consumer Law' },
    { id: 'third-party', title: '9. Third-Party Links' },
    { id: 'privacy', title: '10. Privacy' },
    { id: 'changes', title: '11. Changes to These Terms' },
    { id: 'governing-law', title: '12. Governing Law & Disputes' },
    { id: 'contact', title: '13. Contact Us' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service | Cloud Focal</title>
        <meta
          name="description"
          content="Cloud Focal's Terms of Service. Read the terms and conditions governing use of our website and technology staffing and IT consulting services. Governed by Victorian law, Australia."
        />
        <meta property="og:title" content="Terms of Service | Cloud Focal" />
        <meta property="og:description" content="Terms and conditions for using Cloud Focal's website and services. Governed by the laws of Victoria, Australia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/terms-of-service" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="page-content-with-footer bg-slate-950 text-slate-100 min-h-screen"
      >
        {/* Hero */}
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
                <span>Legal &amp; Governance</span>
                <span>•</span>
                <span>Version {policyVersion}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
                Terms of Service
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                The terms governing your use of the Cloud Focal website and our technology staffing and IT consulting services across Australia and APAC.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
                <span>Effective Date: {lastUpdated}</span>
                <span>•</span>
                <span>Governing Law: Victoria, Australia</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Layout */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Sidebar TOC */}
              <aside className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-28 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                      Table of Contents
                    </h2>
                    <span className="text-[10px] text-slate-500 font-mono">13 Sections</span>
                  </div>
                  <nav className="space-y-1.5 text-xs">
                    {sections.map((sec) => (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                          activeSection === sec.id
                            ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                        }`}
                      >
                        {sec.title}
                      </button>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <Link
                      to="/privacy-policy"
                      className="w-full py-2.5 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-medium border border-blue-500/20 transition-colors block text-center"
                    >
                      Privacy Policy &rarr;
                    </Link>
                    <Link
                      to="/cookie-policy"
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors block text-center"
                    >
                      Cookie Policy &rarr;
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Body */}
              <div className="lg:col-span-8 xl:col-span-9 space-y-16 text-slate-300 text-base leading-relaxed">

                {/* 1 */}
                <section id="agreement" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 01</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">1. Agreement to Terms</h2>
                  </div>
                  <p>
                    By accessing or using the Cloud Focal website at <strong>cloudfocal.com</strong> (the "<strong>Site</strong>"), you agree to be bound by these Terms of Service ("<strong>Terms</strong>"). If you do not agree, please do not use the Site.
                  </p>
                  <p>
                    These Terms apply to all visitors and users of the Site. They govern your use of the Site only — not any separate contractual engagement for staffing or consulting services, which are covered by individual Statements of Work or service agreements entered into separately.
                  </p>
                </section>

                {/* 2 */}
                <section id="services" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 02</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">2. About Cloud Focal</h2>
                  </div>
                  <p>
                    Cloud Focal Pty Ltd ("<strong>Cloud Focal</strong>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") is an Australian technology staffing and IT consulting company headquartered at:
                  </p>
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-sm space-y-1">
                    <p className="font-semibold text-white">Cloud Focal Pty Ltd</p>
                    <p>Level 2, 627 Chapel Street</p>
                    <p>South Yarra VIC 3141, Australia</p>
                    <p className="mt-2">Phone: <a href="tel:0470612358" className="text-blue-400 underline">0470 612 358</a></p>
                    <p>Email: <a href="mailto:info@cloudfocal.com" className="text-blue-400 underline">info@cloudfocal.com</a></p>
                  </div>
                  <p>
                    The Site is an informational and lead-generation website. No transactions, purchases, or payments are processed on the Site. Our core services — technology talent placement, IT consulting, and systems integration — are delivered under separate agreements.
                  </p>
                </section>

                {/* 3 */}
                <section id="website-use" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 03</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">3. Website Use &amp; Acceptable Conduct</h2>
                  </div>
                  <p>You may use the Site for lawful purposes only. You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li>Use the Site in any way that violates applicable Australian, state, or international laws or regulations.</li>
                    <li>Attempt to gain unauthorised access to any part of the Site, our servers, or any systems connected to the Site.</li>
                    <li>Introduce viruses, trojans, worms, or other malicious or technologically harmful material.</li>
                    <li>Use automated tools (bots, scrapers, crawlers) to extract content from the Site without our prior written consent.</li>
                    <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
                    <li>Engage in any conduct that restricts or inhibits another person's use of the Site.</li>
                  </ul>
                  <p>
                    We reserve the right to restrict or terminate access to the Site for any person who breaches these Terms or who we reasonably suspect of misusing the Site.
                  </p>
                </section>

                {/* 4 */}
                <section id="enquiries" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 04</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">4. Enquiries &amp; Contact Forms</h2>
                  </div>
                  <p>
                    When you submit an enquiry through our contact or careers forms, you acknowledge that:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li>Your personal information will be handled in accordance with our <Link to="/privacy-policy" className="text-blue-400 underline">Privacy Policy</Link> and the Australian Privacy Act 1988.</li>
                    <li>Submitting an enquiry does not create a contractual obligation on either party. It constitutes an expression of interest only.</li>
                    <li>We may contact you in response to your enquiry via the details you provide.</li>
                    <li>You are responsible for ensuring that any information you submit is accurate and not misleading.</li>
                  </ul>
                  <p>
                    If you opt in to marketing communications, you may unsubscribe at any time by contacting us at <a href="mailto:info@cloudfocal.com" className="text-blue-400 underline">info@cloudfocal.com</a> or following the unsubscribe link in any communication.
                  </p>
                </section>

                {/* 5 */}
                <section id="ip" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 05</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">5. Intellectual Property</h2>
                  </div>
                  <p>
                    All content on the Site — including text, graphics, logos, icons, images, audio/video clips, and software — is the property of Cloud Focal Pty Ltd or its content suppliers and is protected under Australian and international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You may view and download content from the Site for your personal, non-commercial use only. You must not reproduce, distribute, modify, publish, or create derivative works from Site content without our prior written permission.
                  </p>
                  <p className="text-sm text-slate-400">
                    The Cloud Focal name, logo, and all related marks are trademarks of Cloud Focal Pty Ltd. Nothing on the Site grants any licence to use them.
                  </p>
                </section>

                {/* 6 */}
                <section id="disclaimers" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 06</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">6. Disclaimers &amp; Accuracy of Information</h2>
                  </div>
                  <p>
                    The Site is provided on an "<strong>as is</strong>" and "<strong>as available</strong>" basis. While we endeavour to keep information current and accurate, we make no warranties or representations — express or implied — about:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li>The completeness, accuracy, reliability, or suitability of any information on the Site for any particular purpose.</li>
                    <li>The availability or uninterrupted operation of the Site.</li>
                    <li>The absence of viruses or other harmful components on the Site or any linked sites.</li>
                  </ul>
                  <p>
                    Information on the Site is general in nature and does not constitute professional legal, financial, or technical advice. You should seek independent advice before acting on any information on the Site.
                  </p>
                </section>

                {/* 7 */}
                <section id="liability" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 07</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">7. Limitation of Liability</h2>
                  </div>
                  <p>
                    To the maximum extent permitted by law, Cloud Focal Pty Ltd, its directors, employees, agents, and contractors will not be liable for any loss or damage — whether direct, indirect, incidental, consequential, or special — arising from your use of or inability to use the Site, including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li>Loss of data, revenue, profits, or business opportunities.</li>
                    <li>Any unauthorised access to or use of our servers or any personal data stored therein.</li>
                    <li>Any interruption or cessation of transmission to or from the Site.</li>
                    <li>Any bugs, viruses, or similar that may be transmitted through the Site.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 text-amber-200 text-xs">
                    <strong>Note:</strong> Nothing in these Terms excludes, restricts, or modifies any right or remedy, or any guarantee, warranty, or other term or condition implied or imposed by the Australian Consumer Law, where to do so would be unlawful. See Section 8 below.
                  </div>
                </section>

                {/* 8 */}
                <section id="acl" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 08</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">8. Australian Consumer Law</h2>
                  </div>
                  <p>
                    Our services come with guarantees that cannot be excluded under the Australian Consumer Law (Schedule 2 of the <em>Competition and Consumer Act 2010</em> (Cth)). For major failures with services, you are entitled to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    <li>Cancel your service contract with us and obtain a refund for the unused portion, or compensation for the reduction in value.</li>
                    <li>Compensation for any other reasonably foreseeable loss or damage.</li>
                  </ul>
                  <p>
                    For minor failures, we are entitled to fix the failure within a reasonable time. If we do not, you are entitled to a refund for the difference in value. These rights apply to consumers as defined under the ACL. They are in addition to, not instead of, any rights you have under a separate service agreement.
                  </p>
                  <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-slate-300">
                    <strong className="text-white">Note for B2B clients:</strong> Where you are acquiring services wholly or predominantly for business use and the value exceeds $100,000 AUD, certain ACL consumer guarantee provisions may not apply. Specific terms will be addressed in your service agreement.
                  </div>
                </section>

                {/* 9 */}
                <section id="third-party" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 09</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">9. Third-Party Links</h2>
                  </div>
                  <p>
                    The Site may contain links to third-party websites, including LinkedIn, industry publications, and partner platforms. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Linking to a third-party site does not constitute an endorsement by Cloud Focal.
                  </p>
                </section>

                {/* 10 */}
                <section id="privacy" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 10</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">10. Privacy</h2>
                  </div>
                  <p>
                    Your use of the Site is also governed by our <Link to="/privacy-policy" className="text-blue-400 underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Our Privacy Policy explains how we collect, use, store, and disclose your personal information in accordance with the Australian Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs).
                  </p>
                </section>

                {/* 11 */}
                <section id="changes" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 11</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">11. Changes to These Terms</h2>
                  </div>
                  <p>
                    We may update these Terms at any time. The current version and effective date are displayed at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
                  </p>
                  <p>
                    For material changes, we will endeavour to provide reasonable notice (e.g., a notice on the Site homepage). However, we are not obligated to notify you of every update.
                  </p>
                </section>

                {/* 12 */}
                <section id="governing-law" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 12</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">12. Governing Law &amp; Dispute Resolution</h2>
                  </div>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the <strong>State of Victoria, Australia</strong>. You and Cloud Focal Pty Ltd submit to the exclusive jurisdiction of the courts of Victoria and the Federal Court of Australia for the resolution of any disputes arising from these Terms or your use of the Site.
                  </p>
                  <p>
                    Before initiating formal proceedings, both parties agree to make a genuine effort to resolve any dispute informally by contacting us at <a href="mailto:info@cloudfocal.com" className="text-blue-400 underline">info@cloudfocal.com</a>. We will endeavour to respond within 10 business days.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                    <strong className="text-slate-200">APAC Clients:</strong> For clients based in Singapore, Japan, or other APAC jurisdictions, dispute resolution terms may be specified in your individual service agreement. These Terms apply to website use only.
                  </div>
                </section>

                {/* 13 */}
                <section id="contact" className="scroll-mt-28 space-y-4">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 13</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">13. Contact Us</h2>
                  </div>
                  <p>For questions about these Terms, please contact:</p>
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-sm">
                    <div className="font-semibold text-white text-lg">Cloud Focal Pty Ltd</div>
                    <div className="text-slate-300 space-y-1">
                      <p>Level 2, 627 Chapel Street</p>
                      <p>South Yarra VIC 3141, Australia</p>
                      <p className="mt-2">
                        Email: <a href="mailto:info@cloudfocal.com" className="text-blue-400 underline">info@cloudfocal.com</a>
                      </p>
                      <p>
                        Phone: <a href="tel:0470612358" className="text-blue-400 underline">0470 612 358</a>
                      </p>
                      <p>Business Hours: Monday–Friday, 9:00 AM–5:30 PM AEST</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      to="/contact"
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/privacy-policy"
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-medium transition-colors"
                    >
                      Privacy Policy &rarr;
                    </Link>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default TermsOfService;
