'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { X, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

/**
 * Global helper to trigger the Calendly booking popup modal from anywhere.
 */
export function openCalendlyModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-calendly-modal'));
  }
}

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleOpen = useCallback(() => {
    setIsLoading(true);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onOpenEvent = () => handleOpen();
    window.addEventListener('open-calendly-modal', onOpenEvent);

    // Global click delegate for any element with data-open-calendly
    const onDocClick = (e) => {
      const target = e.target.closest('[data-open-calendly]');
      if (target) {
        e.preventDefault();
        handleOpen();
      }
    };
    document.addEventListener('click', onDocClick);

    // Check URL query or hash on mount (e.g. /contact?book=true or #book-consultation)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('book') === 'true' || window.location.hash === '#book-consultation') {
        handleOpen();
      }
    }

    return () => {
      window.removeEventListener('open-calendly-modal', onOpenEvent);
      document.removeEventListener('click', onDocClick);
    };
  }, [handleOpen]);

  // Lock body scroll and handle Escape key when open
  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const calendlySrc = `${siteConfig.calendlyUrl}?embed_domain=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'organicorbitdigital.com'
  )}&embed_type=Inline&hide_gdpr_banner=1`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        className="relative z-10 flex h-[92vh] max-h-[820px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl transition-all"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line bg-white px-5 py-3.5 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100">
              <Calendar className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h2 id="calendly-modal-title" className="font-display text-base font-bold text-ink sm:text-lg">
                Book a Free Consultation
              </h2>
              <p className="text-xs text-muted">
                30-Min Strategy Call · Free &amp; pressure-free discussion
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-mist sm:inline-flex"
              title="Open Calendly in a new tab"
            >
              <span>Open in new tab</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
            </a>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={handleClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-slate-500 transition-colors hover:bg-mist hover:text-ink focus-visible:ring-2 focus-visible:ring-orbit-500"
              aria-label="Close booking modal"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Body / Calendly Embed */}
        <div className="relative flex-1 overflow-hidden bg-slate-50">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white">
              <Loader2 className="h-8 w-8 animate-spin text-orbit-600" />
              <p className="text-sm font-medium text-slate-600">Loading booking calendar...</p>
            </div>
          )}

          <iframe
            src={calendlySrc}
            title="Calendly Free Business Consultation Scheduling"
            className="h-full w-full border-0"
            onLoad={() => setIsLoading(false)}
            allow="camera; microphone; fullscreen"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="border-t border-line bg-white px-5 py-2.5 text-center text-[0.8rem] text-muted sm:px-6">
          <span>Prefer writing instead? </span>
          <a
            href="/contact/"
            onClick={handleClose}
            className="font-medium text-orbit-600 underline hover:text-orbit-700"
          >
            Send us a message via contact form
          </a>
        </div>
      </div>
    </div>
  );
}
