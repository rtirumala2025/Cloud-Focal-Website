# Cloud Focal — Legal & Accessibility Compliance Plan

**Prepared:** 2026-09-07
**Scope:** cloudfocal.com (static site: `index.html`, `about.html`, `services.html`, `industries.html`, `careers.html`, `contact.html`, `privacy-policy.html`, `cookie-policy.html`)

> ⚠️ **This is not a substitute for a licensed attorney.** I am not a law firm and this is not legal advice. Have qualified counsel in your actual operating jurisdiction(s) review the final Privacy Policy, T&C, and any consumer-facing claims before publishing. Placeholders are marked `[LIKE-THIS]` — replace every one before going live.

---

## 0. What I found already in your codebase (don't re-do this)

| Item | Status |
|---|---|
| `privacy-policy.html`, `cookie-policy.html` pages | **Exist already** — 264 and 305 lines. I did not find `terms-conditions.html` or `refund-policy.html`. |
| Cookie consent banner | **Exists**: [public/js/cookie-consent.js](public/js/cookie-consent.js) — granular necessary/analytics/functional/marketing toggle, localStorage-persisted, references APPs/GDPR/CCPA. Verify it actually **blocks** non-essential scripts until consent (see §3). |
| Analytics/tracking scripts | **None found** (no gtag/GTM/Meta Pixel/Hotjar in any page). Nothing to remediate today, but this must stay true or the policy pages need updating the day you add one. |
| Image alt text | **All `<img>` tags already have `alt=` attributes** (grep found zero missing). Spot-check that alt text is *descriptive* (see §5). |
| Focus states | **Already implemented** — `:focus-visible { outline: 2px solid var(--amber); outline-offset: 3px }` plus a working skip-link, in `contact.html`/`index.html` at minimum. Confirm the same rule is present in `about.html`, `services.html`, `industries.html`, `careers.html`. |
| "Click here" / vague link text | **None found** via grep. |
| Testimonials | Only one hit, in `services.html` — verify it's real, attributable, with permission on file; if not, remove or anonymize per §6. |
| Footer business info | Currently: *"© 2026 Cloud Focal. All rights reserved. Melbourne, Victoria, Australia."* — **no legal entity name, ABN/ACN, street address, phone, or email.** This is your biggest gap (§6). |
| Contact form | [contact.html:473](contact.html:473) posts to Web3Forms with name/email/inquiry-type/message. **No consent checkbox present.** |

---

## 1. Jurisdiction & applicable law

You are an **Australian company** (Melbourne, Victoria) offering **staffing/consulting services**, per your own footer copy, serving "Australian and international enterprise clients" including explicit **APAC & US** coverage on the contact page.

That combination pulls in:

- **Australia** — *Privacy Act 1988 (Cth)* and the **Australian Privacy Principles (APPs)**, administered by the OAIC. Applies regardless of company size if you're in certain sectors, but as best practice you should comply regardless of the small-business exemption threshold (currently AU$3M turnover) because you deal with enterprise clients internationally.
- **European Union / UK** — **GDPR** / UK GDPR applies if you have EU/UK site visitors or process EU/UK residents' personal data (e.g., a candidate applying from London, or an EU company inquiry). Given "international enterprise clients," assume yes.
- **California, USA** — **CCPA/CPRA** applies if you meet its thresholds (>$25M revenue, or buy/sell/share personal info of 100k+ CA consumers, or 50%+ revenue from selling/sharing PI). You likely don't hit these thresholds as a small consultancy — flag this in your policy honestly rather than over-claiming CCPA rights you haven't operationalized (see note in Privacy Policy draft).
- **CAN-SPAM / Australian Spam Act 2003** — applies to any marketing emails sent from lead-gen forms or newsletters.
- **Recruitment-specific law** — because `careers.html` collects resumes/candidate data, this also touches **employment/recruitment privacy rules** (in Australia, still the Privacy Act; in the EU, GDPR Art. 88 territory; some US states have separate applicant privacy rules). Candidate data (CVs) is more sensitive than a sales lead — treat retention/deletion carefully.

`[USER_LOCATION]` = Melbourne, Victoria, Australia (confirmed from site copy) — replace only if this is inaccurate for the actual registered entity.
`[USER_AUDIENCE_LOCATION]` = Australia, APAC, United States, plus likely EU/UK inquiries — confirm with your actual traffic/CRM data.

---

## 2. Privacy Policy (GDPR + CCPA + APPs)

You already have a `privacy-policy.html`. I did not rewrite it wholesale since I can't see whether its current legal claims are accurate to your real data flows — but here is a complete, compliant draft text to replace/reconcile it against. **Fill every bracket.**

```markdown
# Privacy Policy

**Last updated: [DATE]**

[LEGAL BUSINESS NAME] (ABN/ACN: [ABN/ACN NUMBER]), trading as "Cloud Focal"
("Cloud Focal", "we", "us", "our") respects your privacy. This Policy explains
what personal information we collect through [WEBSITE URL] (the "Site"), why,
how we use and store it, who we share it with, and the rights you have over it.

We are headquartered in Melbourne, Victoria, Australia and comply with the
Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). Where
the GDPR (EU/UK) or the CCPA/CPRA (California, US) apply to you, the
additional rights in Sections 7 and 8 apply.

## 1. Information We Collect

**a. Information you give us directly**
- Contact form submissions: full name, work email, inquiry type, message ([contact.html])
- Job applications: name, email, resume/CV, cover letter, and any other
  details you choose to include ([careers.html])
- Any information you send us by email or phone

**b. Information collected automatically**
- IP address, browser type, device type, pages visited, referring URL,
  approximate location (city/region level) via standard server/CDN logs
- Cookies and similar technologies — see our [Cookie Policy](cookie-policy.html)
  for the full list, and only after you consent to non-essential categories

We do **not** collect: government ID numbers, financial/payment card details,
health information, or biometric data through this Site. [CONFIRM ACCURATE —
if you ever add payment processing, update this section first.]

## 2. How We Use Your Information
- To respond to inquiries submitted via the contact form
- To evaluate job applications submitted via the careers page
- To operate, secure, and improve the Site
- To send you information you've requested (e.g., a reply to your inquiry)
- To comply with legal obligations

We do not use your information for automated decision-making or profiling
that produces legal or similarly significant effects.

## 3. Legal Basis for Processing (GDPR, where applicable)
- **Consent** — for non-essential cookies and any marketing communications
- **Legitimate interests** — responding to business inquiries, site security,
  fraud prevention
- **Contract / pre-contractual steps** — processing a job application,
  onboarding a client or contractor
- **Legal obligation** — tax, employment, and record-keeping law

## 4. Sharing Your Information
We do not sell your personal information. We share it only with:
- Service providers who process data on our behalf under contract
  (e.g., our form processor, Web3Forms — see their privacy policy at
  https://web3forms.com/privacy; our hosting provider, [HOSTING PROVIDER]);
  [LIST ANY ATS/CRM/EMAIL TOOL USED FOR CANDIDATE OR LEAD DATA]
- Professional advisors (legal, accounting) where necessary
- Authorities, where required by law

Any provider outside Australia may involve an overseas disclosure under
APP 8 — we take reasonable steps to ensure they handle your data consistently
with this Policy. [LIST COUNTRIES/PROVIDERS IF KNOWN, e.g. US-based hosting.]

## 5. Data Retention
- Contact form inquiries: retained for [X months/years] then deleted
- Job applications: retained for [X months, e.g. 12] for the hiring
  process and future opportunities unless you ask us to delete them sooner
- Server/analytics logs: retained for [X days/months]

## 6. Security
We use reasonable technical and organizational measures (HTTPS, access
controls, [ANY OTHERS]) to protect your data. No online transmission is
100% secure, and we cannot guarantee absolute security.

## 7. Your Rights Under GDPR (EU/UK residents)
You have the right to: access, rectify, erase, restrict, or port your data;
object to processing; and withdraw consent at any time. To exercise these,
contact us at [PRIVACY EMAIL]. You also have the right to lodge a complaint
with your local supervisory authority.

## 8. Your Rights Under CCPA/CPRA (California residents)
[IF YOU MEET CCPA THRESHOLDS — otherwise state clearly you don't process CA
data at the scale CCPA covers, and remove specific statutory rights language
you haven't operationalized]: You have the right to know what personal
information we collect, request deletion, correct inaccurate information,
opt out of "sale/sharing" (we do not sell or share personal information),
and not be discriminated against for exercising these rights. Contact
[PRIVACY EMAIL] to submit a request.

## 9. Your Rights Under the Australian Privacy Act
You may request access to and correction of personal information we hold
about you, and may complain to us or to the OAIC (oaic.gov.au) if you believe
we have breached the APPs.

## 10. Cookies
See our [Cookie Policy](cookie-policy.html).

## 11. Children's Privacy
This Site is not directed to individuals under 16. We do not knowingly
collect personal information from children.

## 12. Changes to This Policy
We may update this Policy from time to time. Material changes will be
reflected by an updated "Last updated" date above.

## 13. Contact Us
[LEGAL BUSINESS NAME]
[STREET ADDRESS, SUBURB, STATE, POSTCODE, AUSTRALIA]
Email: [PRIVACY EMAIL]
Phone: [PHONE NUMBER]
```

---

## 3. Cookie Policy + Cookie Consent Banner

You already have `cookie-policy.html` and a working `public/js/cookie-consent.js` banner with a category toggle UI. Two things to verify/fix, since a banner that *shows* a toggle but doesn't actually gate scripts is a common vibe-coded gap that creates real GDPR liability:

**Checklist against your existing script:**
1. Confirm no analytics/marketing script tag is hard-coded in `<head>`/`<body>` of any page — it must not fire until `cloudfocal_cookie_consent_v1.analytics === true`. (Currently true — you have none. The moment you add GA4/GTM/Meta Pixel, wrap it exactly as below.)
2. Confirm "Reject All" is as easy to click as "Accept All" (equal visual weight — a GDPR-specific requirement; regulators have fined companies for burying reject behind extra clicks).
3. Confirm the banner reappears if `CURRENT_VERSION` changes (it does, per your code — good, that's the correct pattern for re-consent after a policy change).

**Pattern for gating any future analytics script (drop-in when you add GA4):**

```html
<!-- Do NOT put gtag.js directly in <head>. Load it conditionally instead. -->
<script>
  function loadAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX', { anonymize_ip: true });
  }

  // Fire immediately if consent already granted (returning visitor)
  try {
    var stored = JSON.parse(localStorage.getItem('cloudfocal_cookie_consent_v1'));
    if (stored && stored.analytics) loadAnalytics();
  } catch (e) {}

  // Fire when the user consents this session (your script already dispatches this event)
  window.addEventListener('cloudfocal_consent_updated', function (e) {
    if (e.detail.analytics) loadAnalytics();
  });
</script>
```

**Cookie Policy page text** (reconcile with your existing `cookie-policy.html`):

```markdown
# Cookie Policy

**Last updated: [DATE]**

This Cookie Policy explains how [LEGAL BUSINESS NAME] ("Cloud Focal") uses
cookies and similar technologies on [WEBSITE URL].

## What Are Cookies?
Small text files stored on your device that help websites function and
remember information about your visit.

## Cookies We Use

| Category | Purpose | Examples | Duration | Consent required? |
|---|---|---|---|---|
| Strictly Necessary | Site security, load balancing, remembering your cookie preference | `cloudfocal_cookie_consent_v1` (localStorage) | Persistent until cleared | No — cannot be disabled |
| Functional | Remember theme (dark/light) preference | `theme` (localStorage) | Persistent | Yes |
| Analytics | Understand site usage (NOT currently active — see note) | [ADD IF/WHEN YOU ENABLE GA4 or similar] | [X days] | Yes |
| Marketing | Ad targeting/retargeting (NOT currently active) | [ADD IF/WHEN ENABLED] | [X days] | Yes |

We currently do **not** run any analytics or advertising cookies/scripts.
This table will be updated the day we add one, and your consent will be
requested before it loads.

## Managing Your Preferences
Use the "Cookie Settings" link in the footer at any time to change your
consent choices, or clear cookies/local storage in your browser.

## Contact
[PRIVACY EMAIL]
```

---

## 4. Terms & Conditions (new page needed: `terms-conditions.html`)

```markdown
# Terms & Conditions

**Last updated: [DATE]**

These Terms & Conditions ("Terms") govern your use of [WEBSITE URL]
(the "Site"), operated by [LEGAL BUSINESS NAME] (ABN/ACN: [NUMBER])
("Cloud Focal", "we", "us"). By using the Site, you agree to these Terms.

## 1. Use of the Site
You may use the Site only for lawful purposes and in accordance with these
Terms. You must not: misuse the Site to transmit malware; attempt
unauthorized access to our systems; scrape or harvest data without consent;
impersonate any person; or submit false information via our forms.

## 2. Services Described
Content on this Site regarding staffing, cloud consulting, cybersecurity,
data, and application development services is provided for informational
purposes and does not constitute a binding offer. Engagement terms are set
out in a separate signed statement of work or master services agreement
between Cloud Focal and the client.

## 3. Intellectual Property
All content on the Site — text, graphics, logos, and the Cloud Focal name
and mark — is owned by or licensed to [LEGAL BUSINESS NAME] and protected by
copyright and trademark law. You may not reproduce, distribute, or create
derivative works without our written permission.

## 4. Job Applications
Submitting a resume via the careers page does not guarantee an interview or
offer of employment. Application data is handled per our Privacy Policy.

## 5. Third-Party Links
The Site may link to third-party sites. We are not responsible for their
content or privacy practices.

## 6. Disclaimers
The Site and its content are provided "as is" without warranties of any
kind, express or implied, including fitness for a particular purpose,
accuracy, or non-infringement. We do not warrant the Site will be
uninterrupted or error-free.

## 7. Limitation of Liability
To the maximum extent permitted by law, [LEGAL BUSINESS NAME] will not be
liable for any indirect, incidental, special, or consequential damages
arising from your use of the Site. Nothing in these Terms excludes
liability that cannot be excluded under the Australian Consumer Law or
other applicable mandatory law.

## 8. Indemnity
You agree to indemnify [LEGAL BUSINESS NAME] against claims arising from
your breach of these Terms or misuse of the Site.

## 9. Governing Law & Dispute Resolution
These Terms are governed by the laws of the State of Victoria, Australia.
Disputes will first be addressed through good-faith negotiation; if
unresolved within [30] days, either party may refer the dispute to
mediation in Melbourne, Victoria before pursuing litigation, subject to
the exclusive jurisdiction of the courts of Victoria, Australia.
[ADJUST if you want arbitration instead of litigation, or a different venue
for international clients — recommend counsel input here specifically,
since your clients are international.]

## 10. Changes
We may amend these Terms at any time; continued use of the Site after
changes constitutes acceptance.

## 11. Contact
[LEGAL BUSINESS NAME] — [ADDRESS] — [EMAIL] — [PHONE]
```

---

## 5. Refund Policy

**Flag first:** your site is informational/B2B services + recruitment — not e-commerce with a cart/checkout. A generic "Refund Policy" page is usually only needed if you take **online payments** (deposits, subscription SaaS fee, etc.) directly through the Site. If you don't currently take payment through the Site, skip this page and instead put refund/cancellation terms **inside your client Master Services Agreement**, not on the public site — a public refund policy for services you don't sell online can itself be a misleading-claims risk.

If you *do* take payments (e.g., a retainer deposit form), use:

```markdown
# Refund Policy

**Last updated: [DATE]**

This Refund Policy applies to [DESCRIBE: e.g. deposits/retainers paid
directly through cloudfocal.com]. It does not override the payment and
cancellation terms in a signed client agreement, which take precedence.

## Eligibility
- Refund requests must be made in writing to [BILLING EMAIL] within
  [X days] of payment.
- [Describe non-refundable items, e.g., work already performed,
  third-party costs incurred on your behalf.]

## Process
1. Email [BILLING EMAIL] with your invoice/receipt number and reason.
2. We will confirm receipt within [2 business days].
3. Approved refunds are issued to the original payment method within
   [X business days].

## Non-Refundable
[List, e.g. completed milestones, placement fees after candidate start
date per your recruitment agreement terms.]

## Contact
[BILLING EMAIL] / [PHONE]
```

---

## 6. Form Consent (contact + careers forms)

Neither form currently has a consent checkbox. Add this **unchecked** opt-in block before the submit button in [contact.html](contact.html:504) and the equivalent careers application form:

```html
<div class="form-group form-consent">
  <label class="checkbox-label" style="display:flex; align-items:flex-start; gap:10px; font-size:12px; line-height:1.5;">
    <input type="checkbox" id="consent" name="consent" required aria-required="true"
           style="margin-top:3px; width:16px; height:16px; flex-shrink:0;">
    <span>
      I have read and agree to Cloud Focal's
      <a href="privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>
      and consent to my information being used to respond to this inquiry.
    </span>
  </label>
</div>
```

- `required aria-required="true"` blocks submission without consent, and it's **unchecked by default** (no `checked` attribute) — satisfying GDPR's "no pre-ticked boxes" rule.
- For the careers form specifically, add a second, separate checkbox for CV/resume retention, since candidate data is more sensitive:

```html
<label class="checkbox-label" style="display:flex; align-items:flex-start; gap:10px; font-size:12px;">
  <input type="checkbox" id="consent-retention" name="consent_retention" required aria-required="true">
  <span>I consent to Cloud Focal retaining my resume and application details
  for [12] months to consider me for future roles, per the
  <a href="privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>.</span>
</label>
```

---

## 7. Data Handling Audit

| Area | Finding | Action |
|---|---|---|
| Analytics | None installed | No action now. When you add one, use the gated-load pattern in §3, and add it to the Cookie Policy table and Privacy Policy §1b same day. |
| Third-party embeds | Only Web3Forms (form backend, EU/US infra) found. No maps/chat widgets/video embeds detected. | Add a line to Privacy Policy §4 naming Web3Forms explicitly (done in the draft above). If you later embed Calendly, Google Maps, YouTube, Intercom, etc., each needs (a) a Privacy Policy §4 mention, (b) a cookie-category gate if it sets its own cookies (most iframes do), and (c) a "this loads a third-party embed" micro-disclosure near the embed itself. |
| Unnecessary data collection | Contact form collects only name/email/inquiry-type/message — appropriately minimal. Careers form: verify it doesn't ask for anything beyond what recruitment needs (e.g., don't ask for DOB, marital status, photo — those raise discrimination-risk and data-minimization flags in most jurisdictions). | Review the live careers application form fields (I didn't find a distinct field list for it — confirm the file/section and re-audit). |
| Hidden tracking | `botcheck` honeypot field in contact form is a spam-prevention technique, not tracking — fine as-is, no disclosure needed. | None. |

---

## 8. Accessibility (WCAG 2.1 AA)

| Requirement | Current state | Action |
|---|---|---|
| Alt text on images | All `<img>` tags have `alt=` | **Spot-check quality**, not just presence: open each page and confirm alt text describes content/function (e.g., decorative background images should have `alt=""`, not a filename dump; logo alt should be the company name — confirmed correct in footer: `alt="Cloud Focal Inc"`). |
| Color contrast | Dark theme uses `--ink-dim: #c3cef5` / `--ink-faint: #90a0d6` on `--bg: #0a1130`. These pass AA comfortably at those luminance gaps, but **run a real contrast check** on every text/background pairing, especially `--amber`/`--green` used as link/accent colors on dark backgrounds, and on the light theme variant (`.light-theme` class exists per your JS) — light-mode contrast is the more common failure point. | Run [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or axe DevTools across both themes on every page. Fix any pair under 4.5:1 (normal text) / 3:1 (large text, 18px+ bold or 24px+). |
| Keyboard navigation | `:focus-visible` outline + skip-link confirmed on `index.html`/`contact.html`. | Confirm the identical CSS block exists on `about.html`, `services.html`, `industries.html`, `careers.html` — if each page has its own `<style>` block (looks like it, given duplicated CSS per file), a rule easily gets missed on one page. Tab through every page manually, including the cookie banner buttons and the theme toggle. |
| Form labels/ARIA | Contact form already uses `<label for=...>`, `aria-required`, `role="status" aria-live="polite"` for submit feedback — good pattern, keep it. | Apply the same pattern to the careers application form when you add the consent checkbox. |
| Descriptive button/link text | No "click here"/"read more" found | No action — keep enforcing this convention as you add pages. |
| Heading structure / semantic HTML | Not fully audited this pass | Run axe DevTools or Lighthouse's Accessibility audit per page; check for a single `<h1>` per page and no skipped heading levels. |
| Reduced motion | Site has hover/typewriter animations (`hero-head em` typewriter, spotlight card mouse tracking) | Add: |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

## 9. Trust & Content

| Item | Status |
|---|---|
| Fake reviews/testimonials | One testimonial-related hit in `services.html`. **Verify it's a real client, with written permission to publish (name/company/quote), on file.** If it's a placeholder/invented quote, remove it — fabricated testimonials risk FTC/ACCC misleading-conduct action, not just reputational harm. |
| Unsupported marketing claims | Grep found no superlative claims ("#1", "award-winning," "guaranteed," "100%" outside CSS) in body copy. **Re-check manually** — grep only catches literal strings; re-read `about.html` and `services.html` prose for softer overclaiming ("industry-leading," "unmatched," "the best partner for...") and either cite evidence or soften to defensible language ("experienced," "specialized in"). |
| Footer business details | **Missing legal name, ABN, street address, phone, email.** This is required both for consumer trust and because APP/GDPR-compliant privacy policies must state a real contact point. |
| Image copyright | Not verifiable by me from code alone — I can see filenames under `public/images/` but not licensing provenance. | Manually confirm every non-logo photo/illustration is either (a) an original asset, (b) properly licensed stock (keep the license file/receipt), or (c) royalty-free with attribution where the license requires it. Delete/replace anything pulled from a Google Images search or an AI generator without a commercial-use license. |

**Footer fix** — replace the current bottom line and add a proper legal block:

```html
<div class="footer-col">
  <h4>Company</h4>
  <address style="font-style:normal; font-size:12px; line-height:1.8; color:var(--ink-dim);">
    [LEGAL BUSINESS NAME]<br>
    ABN/ACN [NUMBER]<br>
    [STREET ADDRESS]<br>
    [SUBURB, STATE, POSTCODE]<br>
    Australia<br>
    <a href="mailto:[EMAIL]">[EMAIL]</a><br>
    <a href="tel:[PHONE]">[PHONE]</a>
  </address>
</div>
```

```html
<p>&copy; 2026 [LEGAL BUSINESS NAME] trading as Cloud Focal. All rights reserved.</p>
```

---

## 10. Additional risks not in the original checklist

1. **Recruitment/candidate data is higher-risk than sales-lead data.** Resumes often contain sensitive info (nationality, visa status implied by work-rights questions, sometimes age/DOB). Add a distinct retention period and a deletion-on-request path in the Privacy Policy (already drafted above).
2. **International data transfer.** If your hosting, Web3Forms, or any future ATS/CRM stores EU or UK candidate/client data on US servers, you need an SCC (Standard Contractual Clause) reference or equivalent in your Privacy Policy — flagged as a placeholder above (§2.4).
3. **Accessibility legal exposure specifically in Australia:** the *Disability Discrimination Act 1992 (Cth)* has been the basis of real website-accessibility complaints (cf. the AHRC). WCAG 2.1 AA is the de facto defensive standard — treat §8 as not optional.
4. **"Cookie Settings" button (`static-cookie-btn`) exists in the footer** — confirm it actually reopens the preference modal (test it manually); a decorative button that does nothing is a compliance gap disguised as a compliance feature.
5. **No `terms-conditions.html` currently linked anywhere** (only Privacy/Cookie links exist in the footer). Once created, add it to the footer "Legal" column and reference it in the contact-form consent copy.
6. **Domain/business registration mismatch risk:** confirm "Cloud Focal Inc" (used in image alt text) vs. the actual registered legal entity name/ABN you'll put in the footer/policies — "Inc" reads as a US corporate suffix, which is inconsistent with an Australian Pty Ltd entity. Reconcile this before publishing the legal pages, since inconsistent entity naming across trademark, footer, and policy text is itself something a regulator or opposing counsel will flag.
7. **Web3Forms is a third-party processor of every form submission** — confirm you have (or don't need) a data processing agreement with them, and that their retention/security practices are acceptable for candidate resumes specifically (not just sales leads).

---

## 11. Final Audit Checklist

**Legal pages**
- [ ] Privacy Policy reconciled with the draft in §2, all brackets filled
- [ ] Terms & Conditions page created and linked in footer
- [ ] Cookie Policy reconciled with the draft in §3 and cookie table kept current
- [ ] Refund Policy created **only if** you take direct payment on the Site (§5)
- [ ] All four legal pages linked from every page's footer

**Consent**
- [ ] Unchecked consent checkbox added to contact form, blocks submit until checked
- [ ] Separate resume-retention consent checkbox added to careers form
- [ ] Cookie banner confirmed to actually block analytics/marketing scripts until opt-in (not just show a toggle)
- [ ] "Reject All" is visually equal to "Accept All" in the banner
- [ ] "Cookie Settings" footer button verified to reopen preferences

**Data handling**
- [ ] No analytics/marketing script fires before consent (re-check the day you add any)
- [ ] Web3Forms and any other processor named in Privacy Policy §4
- [ ] Careers form fields re-reviewed for data minimization
- [ ] Retention periods for leads and candidates defined and matched to Privacy Policy §5

**Accessibility**
- [ ] Alt text spot-checked for quality (not just presence) on every page
- [ ] Color contrast checked in both dark and light theme, all pages, fixed where under 4.5:1/3:1
- [ ] `:focus-visible` + skip-link confirmed present on about/services/industries/careers (not just index/contact)
- [ ] Full keyboard-only pass on every form and the cookie banner
- [ ] `prefers-reduced-motion` rule added
- [ ] Heading structure and single-`<h1>`-per-page checked with Lighthouse/axe

**Trust & content**
- [ ] `services.html` testimonial verified real + permissioned, or removed
- [ ] Marketing copy manually re-read for soft overclaiming beyond what grep can catch
- [ ] Footer updated with legal entity name, ABN/ACN, address, email, phone
- [ ] Every non-original image's license/provenance confirmed and filed
- [ ] "Cloud Focal Inc" vs. actual registered entity name reconciled everywhere

**Jurisdiction**
- [ ] Confirm actual EU/UK/California traffic volume with your analytics/CRM before finalizing which statutory rights sections to keep in the Privacy Policy
- [ ] Have Victoria-qualified counsel review governing-law/dispute clause given international clients

---

## "Make No Mistakes" Verification Summary

Do not consider this done until, in order:

1. **Every `[BRACKET]` placeholder** in §2–§5 is replaced with real, verified legal/business detail — not a best guess.
2. **A human — ideally a lawyer licensed in Victoria, Australia — has read the final Privacy Policy and Terms**, specifically the governing-law/dispute clause, before publishing, because you serve international clients and I am not qualified to finalize that clause for you.
3. **You have manually clicked through the cookie banner** in an incognito window and confirmed: banner appears on first visit, "Reject All" actually results in zero non-essential cookies/scripts, "Cookie Settings" reopens it later, and consent persists on reload.
4. **You have tabbed through every form** on the site using only the keyboard (no mouse) and confirmed you can complete and submit each one, with visible focus at every step.
5. **You have run an automated contrast/accessibility scan** (axe DevTools or Lighthouse) on all six pages in both light and dark mode and fixed every reported failure, not just the ones I could infer from static CSS values.
6. **The testimonial in `services.html` is either verified-real-with-permission or deleted** — I flagged it but could not verify authenticity myself.
7. **Every image without a receipt/license on file has been replaced.** I could not audit image provenance from code alone; this step is on you or your designer.
8. **The footer's legal entity name matches your actual business registration** (ABN/ACN lookup), and that same name is used consistently across the Privacy Policy, Terms, and footer.

I did not edit any site files in this pass — this document is the plan and drafted copy for you to review, fill in, and (with my help, on request) implement.
