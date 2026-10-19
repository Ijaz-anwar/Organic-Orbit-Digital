'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe, ChevronDown, Check, RotateCcw } from 'lucide-react';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English', native: 'English' },
  { code: 'ar', short: 'AR', name: 'Arabic', native: 'العربية' },
  { code: 'ur', short: 'UR', name: 'Urdu', native: 'اردو' },
  { code: 'es', short: 'ES', name: 'Spanish', native: 'Español' },
  { code: 'fr', short: 'FR', name: 'French', native: 'Français' },
  { code: 'de', short: 'DE', name: 'German', native: 'Deutsch' },
  { code: 'hi', short: 'HI', name: 'Hindi', native: 'हिन्दी' },
  { code: 'zh-CN', short: 'ZH', name: 'Chinese', native: '简体中文' },
  { code: 'pt', short: 'PT', name: 'Portuguese', native: 'Português' },
  { code: 'it', short: 'IT', name: 'Italian', native: 'Italiano' },
  { code: 'nl', short: 'NL', name: 'Dutch', native: 'Nederlands' },
  { code: 'tr', short: 'TR', name: 'Turkish', native: 'Türkçe' },
  { code: 'ru', short: 'RU', name: 'Russian', native: 'Русский' },
  { code: 'ja', short: 'JA', name: 'Japanese', native: '日本語' },
  { code: 'ko', short: 'KO', name: 'Korean', native: '한국어' },
  { code: 'id', short: 'ID', name: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'ms', short: 'MS', name: 'Malay', native: 'Bahasa Melayu' },
  { code: 'pl', short: 'PL', name: 'Polish', native: 'Polski' },
];

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
    // Expire cookie across current path and domain variants
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
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentLang(readGoogTransCookie());

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

    if (langCode === 'en') {
      const switched = triggerGoogleCombo('en');
      if (!switched) {
        window.location.reload();
      } else {
        // Also reload if body still has translated classes so original English DOM is 100% clean
        setTimeout(() => {
          if (
            document.documentElement.classList.contains('translated-ltr') ||
            document.documentElement.classList.contains('translated-rtl')
          ) {
            window.location.reload();
          }
        }, 180);
      }
      return;
    }

    const switched = triggerGoogleCombo(langCode);
    if (!switched) {
      // Wait briefly in case the Google script is still initializing, otherwise reload with cookie set
      setTimeout(() => {
        if (!triggerGoogleCombo(langCode)) {
          window.location.reload();
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
              Reset to English
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
          className="absolute right-0 mt-2.5 w-72 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_20px_44px_-12px_rgb(16_23_42/0.16)] sm:w-80"
        >
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <span className="text-[0.7rem] font-semibold tracking-wider text-muted uppercase">
              Select Language
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

          <div className="mt-1.5 grid max-h-72 grid-cols-2 gap-1 overflow-y-auto p-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const active = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => selectLanguage(lang.code)}
                  className={`flex items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs transition-colors ${
                    active
                      ? 'bg-orbit-50 font-semibold text-orbit-700 ring-1 ring-orbit-200'
                      : 'text-slate-700 hover:bg-mist hover:text-ink'
                  }`}
                >
                  <span className="min-w-0 truncate">
                    <span className="block truncate font-medium text-ink">{lang.native}</span>
                    <span className="block truncate text-[0.68rem] text-muted">{lang.name}</span>
                  </span>
                  {active ? (
                    <Check className="ml-1.5 h-3.5 w-3.5 shrink-0 text-orbit-600" aria-hidden="true" />
                  ) : (
                    <span className="ml-1.5 shrink-0 font-display text-[0.65rem] font-bold text-slate-400">
                      {lang.short}
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
