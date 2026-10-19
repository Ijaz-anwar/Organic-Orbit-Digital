import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { siteConfig, mainNav, legalNav, mailtoHref, getActiveSocialLinks } from '@/lib/site-config';
import { services, servicePath } from '@/lib/services';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = getActiveSocialLinks();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-mist text-slate-600">
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full border border-orbit-200/50" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full border border-orbit-200/40" aria-hidden="true" />

      <div className="container-site relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${siteConfig.name} — home`} className="inline-block rounded-lg">
            <Logo tone="dark" idPrefix="ftr" />
          </Link>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">{siteConfig.shortDescription}</p>
          <a
            href={mailtoHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-2xs transition-colors hover:border-orbit-300 hover:text-orbit-600"
          >
            <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="font-display text-sm font-semibold tracking-wide text-ink">Services</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={servicePath(s.slug)} className="transition-colors hover:text-orbit-600">
                  <span className="mr-1.5 font-display text-xs font-bold text-orbit-600">{s.number}.</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h2 className="font-display text-sm font-semibold tracking-wide text-ink">Company</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-orbit-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm font-semibold tracking-wide text-ink">Start a conversation</h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            Tell us about your goals and we&apos;ll suggest a practical next step.
          </p>
          <Link href="/contact/" className="btn btn-primary mt-5 min-h-11 px-5 text-sm">
            Get a Free Consultation
          </Link>
          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
              {socials.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink hover:border-orbit-300 hover:text-orbit-600"
                  >
                    {s.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-line bg-white">
        <div className="container-site flex flex-col gap-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orbit-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
