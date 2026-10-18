import Link from 'next/link';
import { CheckCircle2, ArrowRight, Mail, BookOpen } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoHref } from '@/lib/site-config';
import { services, servicePath } from '@/lib/services';

export const metadata = buildMetadata({
  title: 'Thank You — Enquiry Received',
  description: `Thank you for contacting ${siteConfig.name}. Here is what happens next.`,
  path: '/thank-you/',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Enquiry Received"
        title="Thank You for Contacting Organic Orbit Digital"
        intro="Your message has been delivered. Our team will review your project details and reply within 1–2 business days."
        icon={CheckCircle2}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
          { name: 'Thank You', path: '/thank-you/' },
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Link href="/" className="btn btn-primary">
            Return to Homepage
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/blog/" className="btn btn-ghost-dark">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Read Our Latest Guides
          </Link>
        </div>
      </PageHero>

      <section className="section bg-mist" aria-labelledby="next-steps-heading">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="card p-7 sm:p-10 lg:col-span-7">
              <h2 id="next-steps-heading" className="text-2xl font-bold text-ink">
                What happens next
              </h2>
              <ol className="mt-6 space-y-5 text-[0.95rem] text-slate-700">
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orbit-50 font-display text-xs font-bold text-orbit-700">
                    01
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Initial review</p>
                    <p className="mt-1 text-muted">
                      We review your goals, service of interest, and any website URL you shared so our reply is
                      specific to your situation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orbit-50 font-display text-xs font-bold text-orbit-700">
                    02
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Personal reply from our team</p>
                    <p className="mt-1 text-muted">
                      We will follow up by email from <strong className="font-semibold text-ink">{siteConfig.email}</strong>{' '}
                      to answer your initial questions or arrange a discovery call.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orbit-50 font-display text-xs font-bold text-orbit-700">
                    03
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Practical recommendations</p>
                    <p className="mt-1 text-muted">
                      We outline a clear starting point, recommended scope, and transparent next steps.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-8 rounded-2xl border border-line bg-mist p-5 text-sm text-slate-700">
                <p className="font-semibold text-ink">Need to add anything to your enquiry?</p>
                <p className="mt-1 text-muted">
                  You can email us directly at{' '}
                  <a href={mailtoHref} className="link-underline inline-flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </div>
            </div>

            <aside className="card p-7 sm:p-9 lg:col-span-5" aria-label="Explore services">
              <h3 className="text-xl font-bold text-ink">Explore our services while you wait</h3>
              <p className="mt-2 text-sm text-muted">
                Read more about how each service works and the deliverables included:
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={servicePath(s.slug)}
                      className="flex items-center justify-between rounded-xl border border-line bg-mist px-4 py-3 font-medium text-ink transition hover:border-orbit-300 hover:text-orbit-700"
                    >
                      <span>{s.name}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
