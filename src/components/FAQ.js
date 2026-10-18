import { Plus } from 'lucide-react';

/**
 * Accessible FAQ accordion built on native <details>/<summary>.
 * Works without JavaScript, is keyboard operable by default and keeps answers
 * in the HTML for search engines. Height animates in supporting browsers.
 *
 * @param {{ items: {q: string, a: string}[], headingLevel?: 'h3'|'h4' }} props
 */
export default function FAQ({ items, headingLevel = 'h3' }) {
  const Heading = headingLevel;
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
      {items.map((item, i) => (
        <details key={item.q} className="faq-item group" {...(i === 0 ? { open: true } : {})}>
          <summary className="flex items-start justify-between gap-6 px-6 py-5 transition-colors hover:bg-mist sm:px-8 sm:py-6">
            <Heading className="font-display text-base font-semibold text-ink sm:text-lg">{item.q}</Heading>
            <span className="faq-icon mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100 group-open:bg-orbit-500 group-open:text-white">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <div className="px-6 pb-6 sm:px-8">
            <p className="max-w-3xl leading-relaxed text-muted">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
