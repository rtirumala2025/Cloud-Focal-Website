import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../context/CookieContext';

const PrivacyPolicy = () => {
  const lastUpdated = "September 1, 2026";
  const policyVersion = "v2.4";
  const { openPreferencesModal } = useCookieConsent();
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '1. Overview & Data Controller' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'collection-methods', title: '3. How We Collect Data & APP 4' },
    { id: 'legal-bases', title: '4. Legal Bases for Processing (GDPR)' },
    { id: 'ai-automation', title: '5. AI & Automated Decision Disclosures' },
    { id: 'sharing-disclosure', title: '6. Third-Party Sharing & No-Sale' },
    { id: 'cross-border', title: '7. International Transfers (AU / US / EU)' },
    { id: 'retention', title: '8. Data Retention & Destruction' },
    { id: 'security', title: '9. Security Controls & NDB Scheme' },
    { id: 'privacy-rights', title: '10. Your Rights (APPs, CCPA/CPRA, GDPR)' },
    { id: 'cookies', title: '11. Cookies & Tracking Technologies' },
    { id: 'children', title: '12. Children’s Privacy' },
    { id: 'contact', title: '13. Privacy Officer & Regulatory Contacts' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Cloud Focal - Global Privacy &amp; Data Protection</title>
        <meta
          name="description"
          content="Cloud Focal's comprehensive Privacy Policy. Learn how we handle candidate data, client information, and website telemetry in compliance with Australian Privacy Principles, GDPR, and CCPA/CPRA."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, Australian Privacy Principles, GDPR, CCPA, CPRA, technical staffing privacy, Cloud Focal"
        />
        <meta property="og:title" content="Privacy Policy | Cloud Focal" />
        <meta
          property="og:description"
          content="Cloud Focal's comprehensive Privacy Policy covering candidates, enterprise clients, and global privacy rights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudfocal.com/privacy-policy" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="page-content-with-footer bg-slate-950 text-slate-100 min-h-screen"
      >
        {/* Hero Section */}
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
                <span>Compliance &amp; Governance</span>
                <span>•</span>
                <span>Version {policyVersion}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Our commitment to safeguarding personal information, respecting global privacy rights, and maintaining transparency across technical staffing and IT consulting operations.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
                <span>Effective Date: {lastUpdated}</span>
                <span>•</span>
                <span>Jurisdictions: Australia (APPs), United States (CCPA/CPRA), European Union (GDPR)</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content & Sidebar Layout */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Sticky Table of Contents Sidebar */}
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
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between ${
                          activeSection === sec.id
                            ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                        }`}
                      >
                        <span className="truncate">{sec.title}</span>
                      </button>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <button
                      type="button"
                      onClick={openPreferencesModal}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>🍪</span>
                      <span>Manage Cookie Preferences</span>
                    </button>
                    <Link
                      to="/cookie-policy"
                      className="w-full py-2.5 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-medium border border-blue-500/20 transition-colors block text-center"
                    >
                      View Cookie Policy &amp; Inventory &rarr;
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Policy Body */}
              <div className="lg:col-span-8 xl:col-span-9 space-y-16 text-slate-300 text-base leading-relaxed">
                
                {/* 1. Overview & Data Controller */}
                <section id="overview" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 01</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      1. Overview &amp; Data Controller Identification
                    </h2>
                  </div>
                  <p>
                    Cloud Focal ("<strong>Cloud Focal</strong>", "<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") operates as a technical staffing partner, systems integrator, and IT consulting advisory. We are headquartered in <strong>Melbourne, Victoria, Australia</strong>, with corporate representations in <strong>San Francisco, California, United States</strong>, delivering enterprise engineering and talent solutions globally.
                  </p>
                  <p>
                    This Privacy Policy articulates our rigorous protocols for collecting, holding, using, disclosing, and securing personal data across our websites, candidate recruitment portals, enterprise client management systems, and consulting workflows. Depending on your engagement, the primary data controller or responsible entity is:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="font-mono text-xs text-blue-400 font-semibold mb-1">AUSTRALIA &amp; APAC CONTROLLER</div>
                      <div className="font-semibold text-white">Cloud Focal Pty Ltd</div>
                      <div className="text-xs text-slate-400 mt-2 space-y-1">
                        <p>Collins Street Financial Precinct</p>
                        <p>Melbourne, VIC 3000, Australia</p>
                        <p>ABN / ACN Registered</p>
                        <p>Email: <a href="mailto:privacy@cloudfocal.com" className="text-blue-400 underline">privacy@cloudfocal.com</a></p>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="font-mono text-xs text-blue-400 font-semibold mb-1">NORTH AMERICA &amp; GLOBAL CONTROLLER</div>
                      <div className="font-semibold text-white">Cloud Focal Inc.</div>
                      <div className="text-xs text-slate-400 mt-2 space-y-1">
                        <p>123 Technology Drive, Suite 200</p>
                        <p>San Francisco, CA 94105, USA</p>
                        <p>Corporate ID Registered</p>
                        <p>Email: <a href="mailto:privacy@cloudfocal.com" className="text-blue-400 underline">privacy@cloudfocal.com</a></p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. Information We Collect */}
                <section id="information-collected" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 02</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      2. Categories of Information We Collect
                    </h2>
                  </div>
                  <p>
                    We collect distinct categories of personal data based upon your interaction with our organization:
                  </p>

                  <div className="space-y-6">
                    {/* Candidates & Talent */}
                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        <h3 className="text-lg font-bold text-white">A. Technical Candidates, Contractors &amp; Job Applicants</h3>
                      </div>
                      <p className="text-sm text-slate-300">
                        When you submit a resume, apply for career opportunities, or participate in technical evaluations, we collect:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                        <li><strong>Identity &amp; Contact Details:</strong> Full legal name, preferred name, email address, mobile/telephone numbers, residential address, LinkedIn profile URI, GitHub/portfolio links.</li>
                        <li><strong>Curriculum Vitae &amp; Professional Profile:</strong> Detailed employment history, educational credentials, certifications (AWS, Azure, GCP, CISSP, Kubernetes), reference contacts, skill assessment scores, and interview transcripts.</li>
                        <li><strong>Work Authorization &amp; Eligibility:</strong> Proof of citizenship or legal right-to-work status (e.g., Australian VEVO verification status, US Work Authorization/EAD/H-1B documents, security clearance eligibility). <em>Note: We do not store sensitive identification documents beyond legal verification requirements.</em></li>
                        <li><strong>Background Verification Records:</strong> Employment references and criminal record background checks where strictly required, legally sanctioned for the technical placement, and conducted with your express written consent.</li>
                        <li><strong>Compensation &amp; Availability:</strong> Expected hourly rates, salary requirements, notice period, and project preferences.</li>
                      </ul>
                    </div>

                    {/* Enterprise Clients */}
                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <h3 className="text-lg font-bold text-white">B. Enterprise Clients, Partners &amp; B2B Stakeholders</h3>
                      </div>
                      <p className="text-sm text-slate-300">
                        For corporate client representatives seeking technical consulting or staffing solutions:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                        <li><strong>Business Contact Information:</strong> Representative name, corporate email address, business telephone number, job title, and organization name.</li>
                        <li><strong>Project Specifications:</strong> Statements of Work (SOWs), infrastructure requirements, staffing headcount demands, and billing/accounts payable contact details.</li>
                        <li><strong>Communications:</strong> Record of consultations, project milestone feedback, and contractual agreements.</li>
                      </ul>
                    </div>

                    {/* Website Visitors */}
                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                        <h3 className="text-lg font-bold text-white">C. Website Visitors &amp; Digital Telemetry</h3>
                      </div>
                      <p className="text-sm text-slate-300">
                        When you browse cloudfocal.com:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                        <li><strong>Device &amp; Connection Data:</strong> Anonymized IP addresses, browser version, operating system, network location, and screen resolution.</li>
                        <li><strong>Session Telemetry:</strong> Pages visited, time spent on capability sections, scroll depth, referrer URL, and interaction with UI components.</li>
                        <li><strong>Consent State:</strong> Timestamped records of your cookie preferences via our consent management system.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. Collection Methods & APP 4 */}
                <section id="collection-methods" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 03</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      3. Methods of Collection &amp; Unsolicited Information (APP 4)
                    </h2>
                  </div>
                  <p>
                    We collect personal information through direct channels (e.g., website application forms, email inquiries, consultation requests, and video interviews), as well as verified third-party professional platforms (e.g., LinkedIn Talent Solutions, GitHub, technical job portals, and corporate referrals).
                  </p>
                  <div className="p-5 rounded-xl bg-blue-950/40 border border-blue-800/60 text-sm space-y-3">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span>🇦🇺</span> Australian Privacy Principle 4 Protocol (Unsolicited Personal Information)
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      If Cloud Focal receives unsolicited personal information (such as speculative resumes or CVs sent without an active requisition), we will within a reasonable period determine whether we could have lawfully collected the information under Australian Privacy Principle 3. If we determine that we could not have, and the information is not contained in a Commonwealth record, we will promptly and securely <strong>destroy or de-identify</strong> the information as required by law.
                    </p>
                  </div>
                </section>

                {/* 4. Legal Bases for Processing */}
                <section id="legal-bases" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 04</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      4. Legal Bases for Processing (GDPR Article 6)
                    </h2>
                  </div>
                  <p>
                    For individuals in the European Economic Area (EEA) and the United Kingdom, Cloud Focal processes personal data under clearly established legal bases:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-mono">
                          <th className="py-3 px-4">Processing Purpose</th>
                          <th className="py-3 px-4">Lawful Basis under GDPR</th>
                          <th className="py-3 px-4">Australian Principle Alignment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        <tr>
                          <td className="py-3 px-4 text-white font-medium">Candidate evaluation &amp; placement</td>
                          <td className="py-3 px-4 text-blue-300">Contractual Necessity (Pre-contractual steps)</td>
                          <td className="py-3 px-4 text-slate-400">APP 3 (Directly related function)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-white font-medium">Submitting profile to prospective clients</td>
                          <td className="py-3 px-4 text-blue-300">Explicit Consent / Contractual Necessity</td>
                          <td className="py-3 px-4 text-slate-400">APP 6 (Primary purpose of collection)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-white font-medium">Retaining CV in talent bench for future roles</td>
                          <td className="py-3 px-4 text-blue-300">Consent (Revocable at any time)</td>
                          <td className="py-3 px-4 text-slate-400">APP 6 &amp; APP 11</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-white font-medium">Client consulting engagement &amp; billing</td>
                          <td className="py-3 px-4 text-blue-300">Performance of a Contract</td>
                          <td className="py-3 px-4 text-slate-400">APP 3 &amp; APP 6</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-white font-medium">Website analytics &amp; performance cookies</td>
                          <td className="py-3 px-4 text-blue-300">Consent (via Cookie Consent Banner)</td>
                          <td className="py-3 px-4 text-slate-400">APP 7 (Direct marketing rules)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-white font-medium">Tax, immigration, and regulatory compliance</td>
                          <td className="py-3 px-4 text-blue-300">Legal Obligation</td>
                          <td className="py-3 px-4 text-slate-400">APP 6.2(b) (Required by law)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 5. AI & Automation */}
                <section id="ai-automation" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 05</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      5. AI &amp; Automated Decision-Making Disclosures
                    </h2>
                  </div>
                  <p>
                    Cloud Focal leverages modern Applicant Tracking Systems (ATS) and semantic search tools to assist in parsing resumes and organizing candidate skill keywords (e.g., matching "Kubernetes" or "Terraform" experience to relevant client requisitions).
                  </p>
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤝</span>
                      <h3 className="text-lg font-bold text-white">Human-in-the-Loop Guarantee</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We explicitly guarantee that <strong>no applicant is disqualified or rejected solely based on automated decision-making or algorithmic profiling</strong> that produces legal or similarly significant effects (in full compliance with GDPR Article 22, the California CPRA, and NYC Local Law 144). Every candidate application, resume review, interview assessment, and client presentation is conducted and approved by experienced human recruitment consultants and technical directors.
                    </p>
                    <p className="text-xs text-slate-400">
                      Candidates have the right to request information regarding any automated parsing criteria applied and may request a direct human review of their application at any time by contacting <a href="mailto:privacy@cloudfocal.com" className="text-blue-400 underline">privacy@cloudfocal.com</a>.
                    </p>
                  </div>
                </section>

                {/* 6. Third-Party Sharing & No-Sale */}
                <section id="sharing-disclosure" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 06</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      6. Third-Party Disclosure &amp; Prohibition on Data Sale
                    </h2>
                  </div>
                  <p>
                    We do not sell, rent, or trade your personal information to third parties for monetary or valuable consideration. Disclosures are strictly limited to the following operational necessities:
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-sm text-slate-300">
                    <li><strong>Prospective &amp; Active Clients:</strong> When you are represented by Cloud Focal for technical placements, your resume, technical evaluation summary, and relevant portfolio items are presented to hiring managers <em>only with your prior knowledge and consent</em>.</li>
                    <li><strong>Authorized Service Processors:</strong> We partner with audited enterprise cloud and productivity vendors bound by strict Data Processing Agreements (DPAs):
                      <ul className="list-circle pl-5 mt-2 space-y-1 text-slate-400 text-xs">
                        <li>Cloud Hosting Infrastructure: Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure.</li>
                        <li>Applicant Tracking &amp; CRM: Industry-standard enterprise recruitment systems.</li>
                        <li>Verification Services: Accredited pre-employment background and reference check agencies.</li>
                      </ul>
                    </li>
                    <li><strong>Legal &amp; Regulatory Authorities:</strong> Where disclosure is required by law, subpoena, or Australian/US statutory obligations.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50 text-emerald-300 text-xs font-mono">
                    ✓ STATEMENT OF COMPLIANCE: Cloud Focal has not sold or shared personal information for cross-context behavioral advertising without affirmative consent in the preceding 12 months.
                  </div>
                </section>

                {/* 7. Cross-Border International Transfers */}
                <section id="cross-border" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 07</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      7. Cross-Border &amp; International Data Transfers (APP 8 &amp; GDPR)
                    </h2>
                  </div>
                  <p>
                    Because Cloud Focal operates across both Australia and the United States, your personal data may be stored or accessed across secure cloud infrastructure in Australia, the US, or within EEA data regions.
                  </p>
                  <p className="text-sm">
                    In compliance with <strong>Australian Privacy Principle 8 (Cross-border disclosure of personal information)</strong> and <strong>GDPR Chapter V</strong>, we take reasonable contractual, organizational, and technical steps to ensure overseas recipients do not breach local privacy standards. We enforce:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                    <li>European Commission approved <strong>Standard Contractual Clauses (SCCs)</strong> with all international subsidiaries and sub-processors.</li>
                    <li>End-to-end encryption for data in transit (TLS 1.3) and at rest (AES-256).</li>
                    <li>Restricted Role-Based Access Control (RBAC) ensuring only authorized recruiters and account managers access specific candidate and client files.</li>
                  </ul>
                </section>

                {/* 8. Data Retention & Destruction */}
                <section id="retention" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 08</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      8. Data Retention &amp; Secure Destruction Schedules
                    </h2>
                  </div>
                  <p>
                    We retain personal data only for as long as necessary to fulfill the primary purposes of collection, resolve disputes, and satisfy statutory tax, accounting, and legal requirements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-blue-400 font-bold mb-1">Candidate Talent Bench</div>
                      <div className="text-xl font-mono font-semibold text-white mb-2">24–36 Months</div>
                      <p className="text-slate-400">Resumes retained for ongoing career matches. Periodic re-consent notifications sent prior to deletion.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1">Placed Contractors &amp; Invoices</div>
                      <div className="text-xl font-mono font-semibold text-white mb-2">7 Years</div>
                      <p className="text-slate-400">Mandated statutory financial, payroll, and corporate records under ATO and IRS regulations.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-purple-400 font-bold mb-1">Website Telemetry</div>
                      <div className="text-xl font-mono font-semibold text-white mb-2">14 Months</div>
                      <p className="text-slate-400">Google Analytics 4 event and telemetry data automatically expunged after standard retention.</p>
                    </div>
                  </div>
                </section>

                {/* 9. Security Controls & NDB Scheme */}
                <section id="security" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 09</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      9. Information Security Controls &amp; Data Breach Response
                    </h2>
                  </div>
                  <p>
                    As an IT consulting and cloud engineering consultancy, security is fundamental to our infrastructure. We align our security posture with the <strong>Australian Cyber Security Centre (ACSC) Essential Eight</strong> framework and <strong>ISO/IEC 27001</strong> information security principles:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                    <li>Strict Mandatory Multi-Factor Authentication (MFA) across all employee systems.</li>
                    <li>Continuous endpoint detection, encrypted backups, and regular vulnerability assessments.</li>
                    <li><strong>Notifiable Data Breaches (NDB) Protocol:</strong> In the unlikely event of an eligible data breach involving serious harm, Cloud Focal maintains a formal Incident Response Plan to promptly notify the <strong>Office of the Australian Information Commissioner (OAIC)</strong>, affected individuals, and relevant regulatory authorities within statutory timelines (e.g., 72 hours under GDPR).</li>
                  </ul>
                </section>

                {/* 10. Privacy Rights by Jurisdiction */}
                <section id="privacy-rights" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 10</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      10. Your Privacy Rights &amp; How to Exercise Them
                    </h2>
                  </div>
                  <p>
                    Depending on your location, you hold significant statutory rights regarding your personal information:
                  </p>

                  <div className="space-y-4 text-sm">
                    {/* Australia */}
                    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <h4 className="font-bold text-white text-base flex items-center gap-2">
                        <span>🇦🇺</span> Australian Privacy Principles (Privacy Act 1988)
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
                        <li><strong>Right to Access (APP 12):</strong> Request a copy of the personal information Cloud Focal holds about you.</li>
                        <li><strong>Right to Correction (APP 13):</strong> Request that inaccurate, outdated, or incomplete candidate details be updated.</li>
                        <li><strong>Direct Marketing Opt-Out (APP 7):</strong> Unsubscribe from technical newsletters or recruitment notices at any time.</li>
                        <li><em>Note on Employee Records Exemption:</em> While internal employment records of current/past staff have specific exemptions under the Privacy Act, <strong>prospective candidates, independent contractors, and unplaced applicants enjoy full APP protection</strong>.</li>
                      </ul>
                    </div>

                    {/* California */}
                    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <h4 className="font-bold text-white text-base flex items-center gap-2">
                        <span>🇺🇸</span> California Residents (CCPA / CPRA Rights)
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
                        <li><strong>Right to Know &amp; Access:</strong> Categories and specific pieces of personal information collected in the preceding 12 months.</li>
                        <li><strong>Right to Delete:</strong> Request erasure of personal information, subject to legal recordkeeping obligations.</li>
                        <li><strong>Right to Correct:</strong> Request correction of inaccurate personal records.</li>
                        <li><strong>Right to Opt-Out:</strong> Direct us not to sell or share your personal data for cross-context behavioral advertising.</li>
                        <li><strong>Global Privacy Control (GPC):</strong> Our website automatically honors browser-enabled GPC signals.</li>
                        <li><strong>Non-Discrimination:</strong> We will never discriminate, alter pricing, or deny service quality for exercising your CCPA rights.</li>
                      </ul>
                    </div>

                    {/* GDPR */}
                    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <h4 className="font-bold text-white text-base flex items-center gap-2">
                        <span>🇪🇺</span> European Union &amp; UK Residents (GDPR Rights)
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
                        <li>Right of Access (Art. 15), Rectification (Art. 16), and Erasure / "Right to be Forgotten" (Art. 17).</li>
                        <li>Right to Restriction of Processing (Art. 18) and Data Portability (Art. 20).</li>
                        <li>Right to Object to Processing (Art. 21) and Withdraw Consent at any time.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-white text-sm">To submit a Data Subject Access Request (DSAR):</div>
                      <div className="text-xs text-slate-400">Email our Privacy Officer with the subject "Privacy Request - [Your Name]". We respond within 30 days.</div>
                    </div>
                    <a
                      href="mailto:privacy@cloudfocal.com?subject=Privacy%20Access%20Request"
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold whitespace-nowrap transition-colors"
                    >
                      Submit Privacy Request
                    </a>
                  </div>
                </section>

                {/* 11. Cookies */}
                <section id="cookies" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 11</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      11. Cookies &amp; Tracking Technologies
                    </h2>
                  </div>
                  <p>
                    Cloud Focal uses first-party and verified third-party cookies, local storage tokens, and web beacons to enhance your digital experience. For comprehensive details on each cookie category (Essential, Analytics, Functional, and Marketing), retention timelines, and provider tables, please review our dedicated policy:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={openPreferencesModal}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
                    >
                      Open Interactive Cookie Settings
                    </button>
                    <Link
                      to="/cookie-policy"
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-medium transition-colors"
                    >
                      Read Full Cookie Policy &rarr;
                    </Link>
                  </div>
                </section>

                {/* 12. Children's Privacy */}
                <section id="children" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 12</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      12. Children’s Privacy
                    </h2>
                  </div>
                  <p className="text-sm">
                    Our technical staffing and IT consulting services are exclusively directed towards working professionals and business enterprises. We do not knowingly solicit or collect personal information from individuals under 16 years of age (or under 13 under US COPPA). If we discover that personal data of a minor has been submitted, we will take immediate measures to securely expunge such records from our databases.
                  </p>
                </section>

                {/* 13. Contact & Escalation */}
                <section id="contact" className="scroll-mt-28 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">Section 13</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                      13. Privacy Officer Contact &amp; Supervisory Escalation
                    </h2>
                  </div>
                  <p>
                    For inquiries, complaints, or to exercise your statutory privacy rights, please contact our designated Privacy Officer:
                  </p>
                  
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="font-semibold text-white text-lg">Cloud Focal Privacy &amp; Data Protection Office</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
                      <div>
                        <div className="font-mono text-blue-400 font-bold mb-1">MELBOURNE (HEADQUARTERS)</div>
                        <p>Attn: Data Privacy Officer</p>
                        <p>Cloud Focal Pty Ltd</p>
                        <p>Melbourne, Victoria 3000, Australia</p>
                        <p className="mt-2">Email: <a href="mailto:privacy@cloudfocal.com" className="text-blue-400 underline">privacy@cloudfocal.com</a></p>
                        <p>Phone: +61 (3) 9000 0000</p>
                      </div>
                      <div>
                        <div className="font-mono text-blue-400 font-bold mb-1">SAN FRANCISCO (US OFFICE)</div>
                        <p>Attn: Compliance &amp; Legal Counsel</p>
                        <p>Cloud Focal Inc.</p>
                        <p>123 Technology Drive, Suite 200</p>
                        <p>San Francisco, CA 94105, USA</p>
                        <p className="mt-2">Phone: +1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  {/* Regulatory Complaints */}
                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                    <div className="font-bold text-slate-200">Regulatory Oversight &amp; Complaint Escalation:</div>
                    <p className="text-slate-400">
                      If you are not satisfied with our response to a privacy complaint, you have the statutory right to lodge a complaint with your jurisdiction’s privacy regulator:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-400">
                      <li><strong>Australia:</strong> Office of the Australian Information Commissioner (OAIC) — <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">www.oaic.gov.au</a> | Tel: 1300 363 992</li>
                      <li><strong>California (US):</strong> California Privacy Protection Agency (CPPA) — <a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">cppa.ca.gov</a></li>
                      <li><strong>United Kingdom:</strong> Information Commissioner’s Office (ICO) — <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">ico.org.uk</a></li>
                    </ul>
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

export default PrivacyPolicy;
