import Link from 'next/link';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

/**
 * Light-themed closing call-to-action band used across the site.
 * Offers two clear options:
 * 1. Book a Consultation (Calendly meeting)
 * 2. Contact Us (Written enquiry message form)
 */
export default function CTASection({
  title = 'Ready to Grow Your Business Online?',
  text = "Let's discuss your goals and identify the digital strategies that make sense for your business.",
  primaryLabel = 'Book a Free Consultation',
  secondaryLabel = 'Contact Us',
  headingLevel = 'h2',
}) {
  const Heading = headingLevel;
  return (
    <section className="section bg-white" aria-labelledby="cta-heading">
      <div className="container-site">
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] border border-orbit-100 bg-gradient-to-br from-mist via-white to-orbit-50/70 px-6 py-16 text-center shadow-[var(--shadow-card)] sm:px-12 sm:py-20">
          <div className="bg-grid-light absolute inset-0 -z-10" aria-hidden="true" />
          <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-orbit-200/35 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-20 -bottom-24 -z-10 h-64 w-64 rounded-full bg-organic-200/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orbit-200/50" aria-hidden="true" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orbit-100/70" aria-hidden="true" />

          <Heading id="cta-heading" className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-ink sm:text-4xl lg:text-5xl">
            {title}
          </Heading>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button
              type="button"
              data-open-calendly
              className="btn btn-primary w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Link href="/contact/" className="btn btn-outline w-full sm:w-auto">
              <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
