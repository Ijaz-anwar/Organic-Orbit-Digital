'use client';

import { useState } from 'react';
import { Calendar, ExternalLink, Loader2, Clock, Video, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function CalendlyWidget({ className = '' }) {
  const [isLoading, setIsLoading] = useState(true);

  const calendlySrc = `${siteConfig.calendlyUrl}?embed_domain=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'organicorbitdigital.com'
  )}&embed_type=Inline&hide_gdpr_banner=1`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-card ${className}`}>
      {/* Widget Header with Call highlights */}
      <div className="border-b border-line bg-gradient-to-r from-orbit-50/60 via-white to-organic-50/30 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orbit-600">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Instant Meeting Booking</span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-ink sm:text-2xl">
              Book a Free Business Consultation
            </h3>
            <p className="mt-1 text-sm text-muted">
              Select a date and time that suits your schedule for a 30-minute discovery session.
            </p>
          </div>

          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:border-orbit-300 hover:text-orbit-600"
          >
            <span>Open in Calendly</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
          </a>
        </div>

        {/* Benefits pills */}
        <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-line/60">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs">
            <Clock className="h-3.5 w-3.5 text-orbit-600" />
            30 Minutes
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs">
            <Video className="h-3.5 w-3.5 text-orbit-600" />
            Google Meet / Video Call
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-organic-600" />
            100% Free &amp; No Obligation
          </span>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div className="relative min-h-[680px] w-full bg-slate-50">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white">
            <Loader2 className="h-8 w-8 animate-spin text-orbit-600" />
            <p className="text-sm font-medium text-slate-600">Loading interactive booking calendar...</p>
          </div>
        )}

        <iframe
          src={calendlySrc}
          title="Calendly Free Business Consultation"
          className="min-h-[680px] w-full border-0"
          onLoad={() => setIsLoading(false)}
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  );
}
