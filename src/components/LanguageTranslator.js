'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown, Check, RotateCcw } from 'lucide-react';

/**
 * 6 Major International Languages
 * Default English uses root URLs (/); other languages use URL prefixes (/de, /es, /fr, /ar, /ur).
 */
export const SUPPORTED_LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English', native: 'English' },
  { code: 'de', short: 'DE', name: 'German', native: 'Deutsch' },
  { code: 'es', short: 'ES', name: 'Spanish', native: 'Español' },
  { code: 'fr', short: 'FR', name: 'French', native: 'Français' },
  { code: 'ar', short: 'AR', name: 'Arabic', native: 'العربية' },
  { code: 'ur', short: 'UR', name: 'Urdu', native: 'اردو' },
];

export const NON_DEFAULT_LANGS = ['de', 'es', 'fr', 'ar', 'ur'];

export function parseLocalizedPathname(pathname = '/') {
  const clean = pathname || '/';
  const segments = clean.split('/').filter(Boolean);
  const first = segments[0]?.toLowerCase();

  if (first && NON_DEFAULT_LANGS.includes(first)) {
    const rest = segments.slice(1).join('/');
    return {
      urlLang: first,
      basePath: rest ? `/${rest}/` : '/',
    };
  }

  return {
    urlLang: null,
    basePath: clean,
  };
}

export function buildLocalizedUrl(basePath = '/', langCode = 'en') {
  const normalizedBase = !basePath || basePath === '/' ? '/' : basePath.startsWith('/') ? basePath : `/${basePath}`;
  if (langCode === 'en') {
    return normalizedBase;
  }
  if (normalizedBase === '/') {
    return `/${langCode}`;
  }
  return `/${langCode}${normalizedBase}`;
}

function readGoogTransCookie() {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return 'en';
  const decoded = decodeURIComponent(match[1]);
  const parts = decoded.split('/').filter(Boolean);
  const target = parts[parts.length - 1];
  if (!target) return 'en';
  const found = SUPPORTED_LANGUAGES.find(
    (l) => l.code.toLowerCase() === target.toLowerCase()
  );
  return found ? found.code : 'en';
}

function writeGoogTransCookie(langCode) {
  if (typeof document === 'undefined') return;
  const host = window.location.hostname;
  const rootDomain = host.includes('.')
    ? `.${host.split('.').slice(-2).join('.')}`
    : '';

  if (langCode === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    if (host) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
    }
    if (rootDomain) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
    }
  } else {
    const val = `/en/${langCode}`;
    document.cookie = `googtrans=${val}; path=/; SameSite=Lax`;
    if (host && host !== 'localhost') {
      document.cookie = `googtrans=${val}; path=/; domain=${host}; SameSite=Lax`;
    }
    if (rootDomain && host !== 'localhost') {
      document.cookie = `googtrans=${val}; path=/; domain=${rootDomain}; SameSite=Lax`;
    }
  }
}

function triggerGoogleCombo(langCode) {
  const select = document.querySelector('select.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }
  return false;
}

export default function LanguageTranslator({ mountWidget = false, variant = 'dropdown' }) {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const containerRef = useRef(null);

  // Sync language with URL prefix (/de, /es, /fr, /ar, /ur) and cookie on route change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const livePath = window.location.pathname || pathname || '/';
    const { urlLang, basePath } = parseLocalizedPathname(livePath);

    if (urlLang) {
      // URL explicitly specifies /de, /es, /fr, /ar, or /ur
      setCurrentLang(urlLang);
      writeGoogTransCookie(urlLang);
      window.dispatchEvent(new CustomEvent('oo-lang-change', { detail: { lang: urlLang } }));

      // Normalize homepage /de/ to /de in address bar for clean URL display
      if (basePath === '/' && livePath.endsWith('/') && livePath.length > 1) {
        const cleanUrl = `/${urlLang}${window.location.search}${window.location.hash}`;
        window.history.replaceState(window.history.state, '', cleanUrl);
      }

      // Trigger Google Translate once widget is ready
      let attempts = 0;
      const timer = setInterval(() => {
        attempts += 1;
        if (triggerGoogleCombo(urlLang) || attempts >= 20) {
          clearInterval(timer);
        }
      }, 250);
      return () => clearInterval(timer);
    } else {
      // No URL language prefix — check if user already had an active language cookie while navigating
      const cookieLang = readGoogTransCookie();
      if (cookieLang && cookieLang !== 'en') {
        setCurrentLang(cookieLang);
        if (mountWidget) {
          const localizedUrl = `${buildLocalizedUrl(basePath, cookieLang)}${window.location.search}${window.location.hash}`;
          if (window.location.pathname !== localizedUrl) {
            window.history.replaceState(window.history.state, '', localizedUrl);
          }
          triggerGoogleCombo(cookieLang);
        }
      } else {
        setCurrentLang('en');
      }
    }
    return undefined;
  }, [pathname, mountWidget]);

  useEffect(() => {
    const onSync = (e) => {
      if (e.detail?.lang) setCurrentLang(e.detail.lang);
    };
    window.addEventListener('oo-lang-change', onSync);
    return () => window.removeEventListener('oo-lang-change', onSync);
  }, []);

  useEffect(() => {
    if (!mountWidget || typeof window === 'undefined') return;

    const included = SUPPORTED_LANGUAGES.map((l) => l.code).join(',');

    window.googleTranslateElementInit = function googleTranslateElementInit() {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: included,
            autoDisplay: false,
          },
          'google_translate_element'
        );

        const active = parseLocalizedPathname(window.location.pathname).urlLang || readGoogTransCookie();
        if (active && active !== 'en') {
          setTimeout(() => triggerGoogleCombo(active), 250);
        }
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, [mountWidget]);

  useEffect(() => {
    if (!open) return undefined;
    function onPointer(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const selectLanguage = (langCode) => {
    setCurrentLang(langCode);
    setOpen(false);
    writeGoogTransCookie(langCode);
    window.dispatchEvent(new CustomEvent('oo-lang-change', { detail: { lang: langCode } }));

    const { basePath } = parseLocalizedPathname(window.location.pathname || pathname || '/');
    const targetPath = buildLocalizedUrl(basePath, langCode);
    const fullTargetUrl = `${targetPath}${window.location.search}${window.location.hash}`;

    // Update the browser URL immediately (e.g., https://organicorbitdigital.com/de)
    if (window.location.pathname !== targetPath) {
      window.history.pushState(window.history.state, '', fullTargetUrl);
    }

    if (langCode === 'en') {
      const switched = triggerGoogleCombo('en');
      if (!switched) {
        window.location.href = fullTargetUrl;
      } else {
        setTimeout(() => {
          if (
            document.documentElement.classList.contains('translated-ltr') ||
            document.documentElement.classList.contains('translated-rtl')
          ) {
            window.location.href = fullTargetUrl;
          }
        }, 180);
      }
      return;
    }

    const switched = triggerGoogleCombo(langCode);
    if (!switched) {
      setTimeout(() => {
        if (!triggerGoogleCombo(langCode)) {
          window.location.href = fullTargetUrl;
        }
      }, 350);
    }
  };

  const activeObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  if (variant === 'mobile') {
    return (
      <div translate="no" className="notranslate mt-6 rounded-2xl border border-line bg-mist p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-ink uppercase">
            <Globe className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            Language ({activeObj.native})
          </span>
          {currentLang !== 'en' && (
            <button
              type="button"
              onClick={() => selectLanguage('en')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-orbit-600 hover:text-orbit-700"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              English
            </button>
          )}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const active = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => selectLanguage(lang.code)}
                className={`flex items-center justify-between rounded-xl border px-3 py-2 text-left text-xs transition ${
                  active
                    ? 'border-orbit-400 bg-orbit-50 font-semibold text-orbit-700'
                    : 'border-line bg-white text-slate-700 hover:border-orbit-200'
                }`}
              >
                <span className="truncate">
                  <span className="mr-1.5 font-display text-[0.68rem] font-bold text-orbit-600">
                    {lang.short}
                  </span>
                  {lang.native}
                </span>
                {active && <Check className="h-3.5 w-3.5 shrink-0 text-orbit-600" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} translate="no" className="notranslate relative">
      {mountWidget && (
        <div
          id="google_translate_element"
          className="pointer-events-none sr-only fixed -top-96 left-0 h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Select language (current: ${activeObj.name})`}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-mist/70 px-3.5 text-xs font-semibold text-ink transition-colors hover:border-orbit-300 hover:bg-orbit-50/60 hover:text-orbit-700"
      >
        <Globe className="h-4 w-4 text-orbit-600" aria-hidden="true" />
        <span className="font-display tracking-wider">{activeObj.short}</span>
        <span className="hidden text-muted xl:inline">· {activeObj.native}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-500 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Choose website language"
          className="absolute right-0 mt-2.5 w-64 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_20px_44px_-12px_rgb(16_23_42/0.16)]"
        >
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <span className="text-[0.7rem] font-semibold tracking-wider text-muted uppercase">
              6 Languages
            </span>
            {currentLang !== 'en' && (
              <button
                type="button"
                onClick={() => selectLanguage('en')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-orbit-600 hover:text-orbit-700"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                English
              </button>
            )}
          </div>

          <div className="mt-1.5 grid grid-cols-1 gap-1 p-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const active = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => selectLanguage(lang.code)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                    active
                      ? 'bg-orbit-50 font-semibold text-orbit-700 ring-1 ring-orbit-200'
                      : 'text-slate-700 hover:bg-mist hover:text-ink'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="inline-flex h-6 w-7 items-center justify-center rounded-md bg-mist font-display text-[0.68rem] font-bold text-orbit-600">
                      {lang.short}
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{lang.native}</span>
                      <span className="block text-[0.68rem] text-muted">{lang.name}</span>
                    </span>
                  </span>
                  {active ? (
                    <Check className="h-4 w-4 shrink-0 text-orbit-600" aria-hidden="true" />
                  ) : (
                    <span className="text-[0.68rem] text-slate-400">
                      {lang.code === 'en' ? '/' : `/${lang.code}`}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
