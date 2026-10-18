import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { accentStyles, servicePath } from '@/lib/services';

/**
 * Premium service card. The CTA link stretches over the whole card
 * (single link = clean accessibility tree, whole card is clickable).
 */
export default function ServiceCard({ service, headingLevel = 'h3', compact = false }) {
  const Icon = service.icon;
  const a = accentStyles[service.accent];
  const Heading = headingLevel;
  const features = compact ? service.features.slice(0, 3) : service.features;

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card-hover)] sm:p-8">
      {/* accent bar + glow */}
      <span className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${a.bar} transition-transform duration-500 group-hover:scale-x-100`} aria-hidden="true" />
      <span className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} aria-hidden="true" />

      <div className="flex items-center justify-between">
        <span className={`grid h-14 w-14 place-items-center rounded-2xl ring-1 ${a.iconBg}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-slate-400 transition duration-300 group-hover:border-orbit-500 group-hover:bg-orbit-500 group-hover:text-white" aria-hidden="true">
          <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
        </span>
      </div>

      <Heading className="mt-6 text-xl font-semibold text-ink sm:text-[1.35rem]">{service.name}</Heading>
      <p className="mt-3 leading-relaxed text-muted">{service.description}</p>

      {service.splitNote && !compact && (
        <div className="mt-5 grid gap-2 text-sm">
          <p className="rounded-lg bg-mist px-3 py-2 text-slate-700">
            <strong className="font-semibold text-ink">Meta Ads:</strong> paid social on Facebook &amp; Instagram to build demand.
          </p>
          <p className="rounded-lg bg-mist px-3 py-2 text-slate-700">
            <strong className="font-semibold text-ink">Google Ads:</strong> paid search to capture existing demand.
          </p>
        </div>
      )}

      <ul className="mt-6 space-y-2.5 text-[0.95rem] text-slate-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={servicePath(service.slug)}
          className={`inline-flex items-center gap-1.5 font-semibold ${a.text} after:absolute after:inset-0 after:content-['']`}
        >
          {service.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
