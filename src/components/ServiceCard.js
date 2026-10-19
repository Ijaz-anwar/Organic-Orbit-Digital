import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { accentStyles, servicePath } from '@/lib/services';

/**
 * Premium service card displaying the service's official numbering (01 – 06).
 * The CTA link stretches over the whole card so the entire card is clickable.
 */
export default function ServiceCard({ service, headingLevel = 'h3', compact = false }) {
  const Icon = service.icon;
  const a = accentStyles[service.accent] ?? accentStyles.blue;
  const Heading = headingLevel;
  const features = compact ? service.features.slice(0, 3) : service.features;

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-orbit-200 hover:shadow-[var(--shadow-card-hover)] sm:p-8">
      {/* accent bar + glow */}
      <span
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${a.bar} transition-transform duration-500 group-hover:scale-x-100`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`grid h-13 w-13 place-items-center rounded-2xl ring-1 ${a.iconBg}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          {service.number && (
            <span className={`rounded-full px-3 py-1 font-display text-xs font-bold tracking-wider ring-1 ${a.badgeBg}`}>
              SERVICE {service.number}
            </span>
          )}
        </div>
        <span
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-slate-400 transition duration-300 group-hover:border-orbit-500 group-hover:bg-orbit-500 group-hover:text-white"
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
        </span>
      </div>

      <Heading className="mt-6 text-xl font-semibold text-ink sm:text-[1.32rem]">
        {service.number ? `${service.number}. ${service.name}` : service.name}
      </Heading>
      <p className="mt-3 leading-relaxed text-muted">{service.description}</p>

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
