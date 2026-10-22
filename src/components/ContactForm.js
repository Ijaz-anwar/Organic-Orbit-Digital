'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  Send,
  Mail,
  CircleAlert,
  CheckCircle2,
  LoaderCircle,
  Copy,
  Check,
  ExternalLink,
  Search,
  ChevronDown,
  Globe,
} from 'lucide-react';
import { services } from '@/lib/services';
import { budgetRanges, siteConfig } from '@/lib/site-config';
import {
  countryPhoneData,
  getCountry,
  validatePhoneNumber,
} from '@/lib/country-phone-data';

const serviceOptions = [
  ...services.map((s) => s.name),
  'Other / Not Sure Yet',
];

export const contactTimeOptions = [
  'Anytime / Flexible',
  'Morning (9:00 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 5:00 PM)',
  'Evening (5:00 PM – 8:00 PM)',
  'Weekdays only',
  'Weekends only',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function sanitizeText(value, maxLen = 2000) {
  return String(value ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .trim()
    .slice(0, maxLen);
}

function buildMailtoUrl(fields) {
  const subject = `Enquiry: ${fields.service || 'Digital Marketing'} — ${fields.name}`;
  const lines = [
    `Hello ${siteConfig.name} team,`,
    '',
    'I would like to discuss a project:',
    '',
    `Full name: ${fields.name}`,
    `Business email: ${fields.email}`,
    `Phone / WhatsApp: ${fields.phone || 'Not provided'}`,
    `Company / Website: ${fields.company || 'Not provided'}`,
    `Service of interest: ${fields.service}`,
    `Estimated budget: ${fields.budget || 'Not specified'}`,
    `Preferred time to contact: ${fields.preferredTime || 'Anytime / Flexible'}`,
    '',
    'Project details:',
    fields.message,
  ];
  const params = new URLSearchParams({
    subject,
    body: lines.join('\r\n'),
  });
  // URLSearchParams encodes spaces as '+'; mail clients prefer '%20'.
  return `mailto:${siteConfig.email}?${params.toString().replace(/\+/g, '%20')}`;
}

export default function ContactForm() {
  const router = useRouter();
  const mountedAtRef = useRef(Date.now());

  const provider = (process.env.NEXT_PUBLIC_FORM_PROVIDER || 'formsubmit').toLowerCase().trim();
  const endpoint = (process.env.NEXT_PUBLIC_FORM_ENDPOINT || '').trim();
  const web3Key = (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '').trim();

  const isOnlineConfigured =
    provider === 'formsubmit' ||
    ((provider === 'formspree' || provider === 'custom') && endpoint.startsWith('https://')) ||
    (provider === 'web3forms' && Boolean(web3Key));

  const [values, setValues] = useState({
    name: '',
    email: '',
    countryCode: 'US',
    phone: '',
    company: '',
    service: '',
    budget: '',
    preferredTime: '',
    message: '',
    consent: false,
    botField: '', // honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | mailto-ready | error
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const [countryPickerOpen, setCountryPickerOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryPickerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (countryPickerRef.current && !countryPickerRef.current.contains(e.target)) {
        setCountryPickerOpen(false);
      }
    }
    if (countryPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [countryPickerOpen]);

  useEffect(() => {
    if (countryPickerOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [countryPickerOpen]);

  const filteredCountries = countryPhoneData.filter((c) => {
    const q = countrySearch.toLowerCase().trim();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q)
    );
  });

  function validate(raw) {
    const nextErrors = {};
    const name = sanitizeText(raw.name, 120);
    const email = sanitizeText(raw.email, 160);
    const company = sanitizeText(raw.company, 200);
    const service = sanitizeText(raw.service, 120);
    const message = sanitizeText(raw.message, 3000);

    if (name.length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!EMAIL_RE.test(email)) {
      nextErrors.email = 'Please enter a valid business email address.';
    }
    const phoneRes = validatePhoneNumber(raw.phone, raw.countryCode || 'US');
    if (!phoneRes.valid) {
      nextErrors.phone = phoneRes.error;
    }
    if (company && company.length > 200) {
      nextErrors.company = 'Please keep the company or website field under 200 characters.';
    }
    if (!serviceOptions.includes(service)) {
      nextErrors.service = 'Please select a service of interest.';
    }
    if (message.length < 20) {
      nextErrors.message = 'Please share at least a brief summary of your project or goals (20+ characters).';
    }
    if (!raw.consent) {
      nextErrors.consent = 'Please confirm that you agree to our Privacy Policy before sending.';
    }
    return nextErrors;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const nextVal = type === 'checkbox' ? checked : value;
    setValues((prev) => ({ ...prev, [name]: nextVal }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
    if (name === 'countryCode') {
      setErrors((prev) => {
        if (!prev.phone) return prev;
        const copy = { ...prev };
        delete copy.phone;
        return copy;
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot or sub-1.2s bot submission check
    if (values.botField || Date.now() - mountedAtRef.current < 1200) {
      setErrorMessage('Submission blocked by spam protection. Please email us directly.');
      setStatus('error');
      return;
    }

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const phoneRes = validatePhoneNumber(values.phone, values.countryCode || 'US');
    if (!phoneRes.valid) {
      setErrors((prev) => ({ ...prev, phone: phoneRes.error }));
      setStatus('idle');
      return;
    }
    const fullPhone = phoneRes.formatted;

    const clean = {
      name: sanitizeText(values.name, 120),
      email: sanitizeText(values.email, 160),
      phone: sanitizeText(fullPhone, 60),
      company: sanitizeText(values.company, 200),
      service: sanitizeText(values.service, 120),
      budget: sanitizeText(values.budget, 80),
      preferredTime: sanitizeText(values.preferredTime, 80),
      message: sanitizeText(values.message, 3000),
    };

    // If no external form backend is configured, NEVER fake success.
    // Prepare the verified mailto handoff with full transparency.
    if (!isOnlineConfigured) {
      setStatus('mailto-ready');
      return;
    }

    setStatus('submitting');

    try {
      let response;
      if (provider === 'web3forms') {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Enquiry (${clean.service}) — ${siteConfig.name}`,
            from_name: clean.name,
            email: clean.email,
            phone: clean.phone,
            company: clean.company || 'Not provided',
            service: clean.service,
            budget: clean.budget || 'Not specified',
            preferred_contact_time: clean.preferredTime || 'Anytime / Flexible',
            message: clean.message,
            botcheck: '',
          }),
        });
      } else if (provider === 'formsubmit') {
        response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: clean.name,
            email: clean.email,
            phone: clean.phone,
            company: clean.company || 'Not provided',
            service: clean.service,
            budget: clean.budget || 'Not specified',
            preferred_contact_time: clean.preferredTime || 'Anytime / Flexible',
            message: clean.message,
            _subject: `New Enquiry (${clean.service}) — ${siteConfig.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
      } else {
        // formspree or custom HTTPS endpoint
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...clean,
            _subject: `New Enquiry (${clean.service}) — ${siteConfig.name}`,
          }),
        });
      }

      const data = await response.json().catch(() => ({}));
      const accepted =
        response.ok &&
        (data.ok === true ||
          data.success === true ||
          data.success === 'true' ||
          provider === 'formspree');

      if (!accepted) {
        if (data.message && typeof data.message === 'string' && data.message.includes('Activation')) {
          throw new Error(
            `One-time confirmation needed: Please check your inbox at ${siteConfig.email} and click the "Activate Form" link from FormSubmit to verify your receiving address.`
          );
        }
        throw new Error(
          data.message || data.error || 'The form service could not confirm delivery of your enquiry.'
        );
      }

      // Only redirect to /thank-you/ when delivery/acceptance is genuinely confirmed!
      router.push('/thank-you/?confirmed=1');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err?.message ||
          'We could not confirm delivery through the online form right now. Please send your prepared enquiry via email below so nothing is lost.'
      );
    }
  }

  const currentCountry = getCountry(values.countryCode);
  const currentPhoneRes = validatePhoneNumber(values.phone, values.countryCode || 'US');
  const formattedPhone = currentPhoneRes.valid ? currentPhoneRes.formatted : values.phone;

  const mailtoUrl = buildMailtoUrl({
    name: sanitizeText(values.name, 120),
    email: sanitizeText(values.email, 160),
    phone: sanitizeText(formattedPhone, 60),
    company: sanitizeText(values.company, 200),
    service: sanitizeText(values.service, 120),
    budget: sanitizeText(values.budget, 80),
    preferredTime: sanitizeText(values.preferredTime, 80),
    message: sanitizeText(values.message, 3000),
  });

  async function handleCopyDetails() {
    const text = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone/WhatsApp: ${formattedPhone || 'Not provided'}`,
      `Company/Website: ${values.company || 'Not provided'}`,
      `Service: ${values.service}`,
      `Budget: ${values.budget || 'Not specified'}`,
      `Preferred contact time: ${values.preferredTime || 'Anytime / Flexible'}`,
      `Project details:\n${values.message}`,
    ].join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const inputBase =
    'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-slate-400 transition-colors focus:border-orbit-500 focus:outline-none';

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-7 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-6">
        <div>
          <h2 className="text-2xl font-bold text-ink">Send an Enquiry</h2>
          <p className="mt-1 text-sm text-muted">
            Fields marked with <span className="font-semibold text-ink">*</span> are required.
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold text-orbit-700 hover:bg-orbit-50"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          {siteConfig.email}
        </a>
      </div>

      {/* Honeypot field — hidden from sighted users and screen readers */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-bot-field">Leave this field blank</label>
        <input
          id="contact-bot-field"
          type="text"
          name="botField"
          tabIndex={-1}
          autoComplete="off"
          value={values.botField}
          onChange={handleChange}
        />
      </div>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-ink">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Alex Morgan"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className={`${inputBase} ${errors.name ? 'border-red-500' : 'border-line'}`}
          />
          {errors.name && (
            <p id="error-name" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-ink">
            Business email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-line'}`}
          />
          {errors.email && (
            <p id="error-email" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone or WhatsApp number */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-ink">
            Phone or WhatsApp number <span aria-hidden="true">*</span>
          </label>
          <div
            ref={countryPickerRef}
            className={`relative mt-2 flex rounded-xl border bg-white shadow-xs transition-colors focus-within:ring-2 focus-within:ring-orbit-500/20 ${
              errors.phone
                ? 'border-red-500 focus-within:border-red-500'
                : 'border-line focus-within:border-orbit-500'
            }`}
          >
            {/* Compact Country Code Trigger */}
            <button
              type="button"
              onClick={() => {
                setCountryPickerOpen((prev) => !prev);
                setCountrySearch('');
              }}
              aria-expanded={countryPickerOpen}
              aria-haspopup="listbox"
              aria-label={`Select country code, currently ${currentCountry.name} (${currentCountry.dialCode})`}
              className="flex items-center gap-1.5 shrink-0 rounded-l-xl border-r border-line bg-mist/60 hover:bg-slate-100 px-2.5 py-3 text-xs sm:text-sm font-semibold text-ink transition-colors focus:outline-none"
            >
              {currentCountry.code !== 'OTHER' ? (
                <img
                  src={`https://flagcdn.com/w40/${currentCountry.code.toLowerCase()}.png`}
                  width="18"
                  height="13"
                  alt=""
                  aria-hidden="true"
                  className="rounded-xs object-cover shadow-xs shrink-0"
                />
              ) : (
                <Globe className="h-3.5 w-3.5 text-muted shrink-0" aria-hidden="true" />
              )}
              <span className="font-bold text-slate-800">{currentCountry.code}</span>
              <span className="text-muted font-medium">{currentCountry.dialCode}</span>
              <ChevronDown
                className={`h-3 w-3 text-slate-400 transition-transform duration-150 ${
                  countryPickerOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Phone Input */}
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel-national"
              placeholder={currentCountry.placeholder}
              value={values.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'error-phone' : 'phone-hint'}
              className="w-full min-w-0 rounded-r-xl bg-transparent px-3 py-3 text-sm text-ink placeholder:text-slate-400 focus:outline-none"
            />

            {/* Searchable Dropdown Popup */}
            {countryPickerOpen && (
              <div
                role="listbox"
                aria-label="Country calling codes"
                className="absolute top-full left-0 z-50 mt-1.5 w-72 sm:w-80 overflow-hidden rounded-xl border border-line bg-white shadow-xl ring-1 ring-black/5"
              >
                {/* Search Header */}
                <div className="relative border-b border-line bg-slate-50/80 p-2">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" aria-hidden="true" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    placeholder="Search country or code (e.g. US, +1)..."
                    className="w-full rounded-lg border border-line bg-white pl-8 pr-3 py-1.5 text-xs text-ink placeholder:text-muted focus:border-orbit-500 focus:outline-none"
                  />
                </div>

                {/* Filtered Country List */}
                <ul className="max-h-60 overflow-y-auto p-1 divide-y divide-slate-50">
                  {filteredCountries.length === 0 ? (
                    <li className="p-3 text-center text-xs text-muted">No matching country found</li>
                  ) : (
                    filteredCountries.map((c) => {
                      const isSelected = c.code === currentCountry.code;
                      return (
                        <li key={c.code}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setValues((prev) => ({ ...prev, countryCode: c.code }));
                              setCountryPickerOpen(false);
                              setCountrySearch('');
                              if (errors.phone) {
                                setErrors((prev) => {
                                  const copy = { ...prev };
                                  delete copy.phone;
                                  return copy;
                                });
                              }
                            }}
                            className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-xs transition-colors hover:bg-orbit-50 ${
                              isSelected ? 'bg-orbit-50 font-bold text-orbit-600' : 'text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {c.code !== 'OTHER' ? (
                                <img
                                  src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                  width="18"
                                  height="13"
                                  alt=""
                                  aria-hidden="true"
                                  className="rounded-xs object-cover shadow-xs shrink-0"
                                />
                              ) : (
                                <Globe className="h-3.5 w-3.5 text-muted shrink-0" aria-hidden="true" />
                              )}
                              <span className="truncate">{c.name}</span>
                              <span className="text-[10px] font-mono uppercase text-muted">({c.code})</span>
                            </div>
                            <span className="shrink-0 font-mono font-medium text-muted">{c.dialCode}</span>
                          </button>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="mt-1.5 text-xs">
            {errors.phone ? (
              <p id="error-phone" role="alert" className="font-medium text-red-600">
                {errors.phone}
              </p>
            ) : (
              <p id="phone-hint" className="text-muted">
                {currentCountry.minDigits === currentCountry.maxDigits
                  ? `Requires exact ${currentCountry.minDigits} digits for ${currentCountry.name} (${currentCountry.dialCode})`
                  : `Requires ${currentCountry.minDigits}–${currentCountry.maxDigits} digits for ${currentCountry.name} (${currentCountry.dialCode})`}
              </p>
            )}
          </div>
        </div>

        {/* Company or Website URL (optional) */}
        <div>
          <label htmlFor="contact-company" className="block text-sm font-semibold text-ink">
            Company or website URL <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="https://yourcompany.com"
            value={values.company}
            onChange={handleChange}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'error-company' : undefined}
            className={`${inputBase} ${errors.company ? 'border-red-500' : 'border-line'}`}
          />
          {errors.company && (
            <p id="error-company" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.company}
            </p>
          )}
        </div>

        {/* Service of interest */}
        <div>
          <label htmlFor="contact-service" className="block text-sm font-semibold text-ink">
            Service of interest <span aria-hidden="true">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            required
            value={values.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'error-service' : undefined}
            className={`${inputBase} ${errors.service ? 'border-red-500' : 'border-line'}`}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="error-service" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.service}
            </p>
          )}
        </div>

        {/* Estimated Budget (optional) */}
        <div>
          <label htmlFor="contact-budget" className="block text-sm font-semibold text-ink">
            Estimated budget <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
            className={`${inputBase} border-line`}
          >
            <option value="">Select an estimated range (optional)…</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Time to Contact (optional) */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-preferred-time" className="block text-sm font-semibold text-ink">
            Preferred time to contact you <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id="contact-preferred-time"
            name="preferredTime"
            value={values.preferredTime}
            onChange={handleChange}
            className={`${inputBase} border-line`}
          >
            <option value="">When is the best time for us to reach out? (optional)…</option>
            {contactTimeOptions.map((timeOpt) => (
              <option key={timeOpt} value={timeOpt}>
                {timeOpt}
              </option>
            ))}
          </select>
        </div>

        {/* Project Details */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-sm font-semibold text-ink">
            Project details <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your business, what you would like to achieve, and any timelines you have in mind."
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'error-message' : undefined}
            className={`${inputBase} ${errors.message ? 'border-red-500' : 'border-line'}`}
          />
          {errors.message && (
            <p id="error-message" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              required
              checked={values.consent}
              onChange={handleChange}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'error-consent' : undefined}
              className="mt-1 h-4 w-4 rounded border-line text-orbit-600 focus:ring-orbit-500"
            />
            <label htmlFor="contact-consent" className="text-sm leading-relaxed text-slate-700">
              I agree to the processing of the information provided above for the purpose of responding to my enquiry,
              in accordance with the{' '}
              <Link href="/privacy-policy/" className="link-underline">
                Privacy Policy
              </Link>
              . <span aria-hidden="true">*</span>
            </label>
          </div>
          {errors.consent && (
            <p id="error-consent" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      {/* Honest status banner when direct email handoff is used or if online delivery fails */}
      {status === 'mailto-ready' && (
        <div
          role="region"
          aria-live="polite"
          className="mt-6 rounded-2xl border border-orbit-200 bg-orbit-50/70 p-6 text-ink"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orbit-600" aria-hidden="true" />
            <div>
              <h3 className="font-display text-base font-semibold text-ink">
                Your enquiry details are validated and ready to send via email
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                To ensure your message reaches our inbox directly without being lost (online form webhook is not
                currently active on this static host), click below to open your email client pre-addressed to{' '}
                <strong className="font-semibold">{siteConfig.email}</strong> with all of your project details filled
                in.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href={mailtoUrl} className="btn btn-primary min-h-11 px-5 text-sm">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Open Pre-Filled Email to {siteConfig.email}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="btn btn-outline min-h-11 px-4 text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-organic-600" aria-hidden="true" /> Copied to clipboard
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" /> Copy enquiry text
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-950"
        >
          <div className="flex items-start gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
            <div>
              <h3 className="font-display text-base font-semibold">
                Online delivery could not be confirmed
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-red-800">{errorMessage}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href={mailtoUrl} className="btn btn-primary min-h-11 px-5 text-sm">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send via Email ({siteConfig.email})
                </a>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="btn btn-outline min-h-11 px-4 text-sm"
                >
                  {copied ? 'Copied!' : 'Copy enquiry text'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending Enquiry…
            </>
          ) : isOnlineConfigured ? (
            <>
              Send Enquiry
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          ) : (
            <>
              Continue to Send Enquiry
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="text-xs text-muted">
          Prefer direct email? Write to{' '}
          <a href={`mailto:${siteConfig.email}`} className="link-underline">
            {siteConfig.email}
          </a>
        </p>
      </div>
    </form>
  );
}
