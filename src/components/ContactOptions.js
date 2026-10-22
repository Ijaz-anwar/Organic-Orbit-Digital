'use client';

import { useState, useEffect } from 'react';
import { Calendar, Mail, CheckCircle2, Video, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import CalendlyWidget from './CalendlyWidget';

export default function ContactOptions() {
  const [activeTab, setActiveTab] = useState('book'); // 'book' | 'message'

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab') || params.get('option');
    if (tabParam === 'message' || tabParam === 'form' || window.location.hash === '#message-form') {
      setActiveTab('message');
    } else if (tabParam === 'book' || tabParam === 'consultation' || window.location.hash === '#book-consultation') {
      setActiveTab('book');
    }
  }, []);

  return (
    <div className="space-y-8" id="contact-options-container">
      {/* Option Selection Cards */}
      <div className="grid gap-4 sm:grid-cols-2" role="tablist" aria-label="Contact options">
        {/* Option 1: Book Consultation */}
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'book'}
          aria-controls="panel-book-consultation"
          id="tab-book-consultation"
          onClick={() => setActiveTab('book')}
          className={`group relative flex flex-col items-start rounded-2xl border p-5 text-left transition-all sm:p-6 ${
            activeTab === 'book'
              ? 'border-orbit-500 bg-white shadow-lg ring-2 ring-orbit-500/20'
              : 'border-line bg-white/70 hover:border-orbit-200 hover:bg-white'
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <span
              className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${
                activeTab === 'book'
                  ? 'bg-orbit-500 text-white shadow-sm'
                  : 'bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100 group-hover:bg-orbit-100'
              }`}
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                activeTab === 'book'
                  ? 'bg-orbit-50 text-orbit-700 ring-1 ring-orbit-200'
                  : 'bg-mist text-muted'
              }`}
            >
              Option 1 · Instant Call
            </span>
          </div>

          <h3 className="mt-4 text-lg font-bold text-ink sm:text-xl">
            Book a Free Consultation
          </h3>
          <p className="mt-1.5 text-xs text-muted sm:text-sm leading-relaxed">
            Pick a date &amp; time on our live calendar for a 30-minute discovery call via Google Meet.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-[0.75rem] text-slate-600">
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5">
              <Clock className="h-3 w-3 text-orbit-600" /> 30 Mins
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5">
              <Video className="h-3 w-3 text-orbit-600" /> Video / Audio
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5">
              <CheckCircle2 className="h-3 w-3 text-organic-600" /> Free
            </span>
          </div>

          <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-orbit-600">
            <span>{activeTab === 'book' ? 'Calendar active below' : 'Select to open calendar'}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </button>

        {/* Option 2: Send Message Form */}
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'message'}
          aria-controls="panel-send-message"
          id="tab-send-message"
          onClick={() => setActiveTab('message')}
          className={`group relative flex flex-col items-start rounded-2xl border p-5 text-left transition-all sm:p-6 ${
            activeTab === 'message'
              ? 'border-orbit-500 bg-white shadow-lg ring-2 ring-orbit-500/20'
              : 'border-line bg-white/70 hover:border-orbit-200 hover:bg-white'
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <span
              className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${
                activeTab === 'message'
                  ? 'bg-orbit-500 text-white shadow-sm'
                  : 'bg-teal-50 text-teal-700 ring-1 ring-teal-100 group-hover:bg-teal-100'
              }`}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                activeTab === 'message'
                  ? 'bg-orbit-50 text-orbit-700 ring-1 ring-orbit-200'
                  : 'bg-mist text-muted'
              }`}
            >
              Option 2 · Written Enquiry
            </span>
          </div>

          <h3 className="mt-4 text-lg font-bold text-ink sm:text-xl">
            Send Us a Message
          </h3>
          <p className="mt-1.5 text-xs text-muted sm:text-sm leading-relaxed">
            Fill out our enquiry form with your website, requirements, and budget for a structured reply.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-[0.75rem] text-slate-600">
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5">
              <MessageSquare className="h-3 w-3 text-orbit-600" /> Detailed Brief
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5">
              <Clock className="h-3 w-3 text-orbit-600" /> 1–2 Day Reply
            </span>
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5">
              <CheckCircle2 className="h-3 w-3 text-organic-600" /> Free Scope
            </span>
          </div>

          <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-orbit-600">
            <span>{activeTab === 'message' ? 'Form active below' : 'Select to open form'}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="relative">
        {activeTab === 'book' ? (
          <div
            id="panel-book-consultation"
            role="tabpanel"
            aria-labelledby="tab-book-consultation"
            className="animate-in fade-in duration-200"
          >
            <CalendlyWidget />
          </div>
        ) : (
          <div
            id="panel-send-message"
            role="tabpanel"
            aria-labelledby="tab-send-message"
            className="animate-in fade-in duration-200"
          >
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
}
