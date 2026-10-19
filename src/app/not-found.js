import Link from 'next/link';
import { ArrowRight, Compass, Mail } from 'lucide-react';
import { services, servicePath } from '@/lib/services';
import { mailtoHref } from '@/lib/site-config';

export const metadata = {
  title: 'Page Not Found (404)',
  description: 'The page you were looking for could not be found. Explore our digital marketing services or return home.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section relative overflow-hidden bg-mist text-ink">
      <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
      <div className="container-site relative py-12 text-center">
        <p className="eyebrow mx-auto">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Error 404 — Off Orbit
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-ink sm:text-5xl">
          We couldn&apos;t find the page you were looking for
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          The link may have changed or the URL may have been typed incorrectly. Use the links below to get back on
          track.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back to Homepage
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/contact/" className="btn btn-outline">
            Contact Our Team
          </Link>
          <a href={mailtoHref} className="btn btn-outline">
            <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            Email Us
          </a>
        </div>

        <div className="mx-auto mt-14 max-w-3xl border-t border-line pt-10">
          <p className="text-xs font-semibold tracking-wider text-muted uppercase">
            Or jump directly to one of our services
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={servicePath(s.slug)}
                  className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink shadow-2xs transition hover:border-orbit-300 hover:text-orbit-600"
                >
                  <span className="mr-1 font-display text-xs font-bold text-orbit-600">{s.number}.</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
