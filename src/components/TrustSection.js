import { Compass, MonitorSmartphone, Target, MessagesSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';

/**
 * Homepage Section D — Trust and Value Proposition.
 * Framed explicitly as our intended working principles rather than fabricated claims.
 */
const principles = [
  {
    icon: Compass,
    title: 'Strategy Before Execution',
    description:
      'Before writing copy, designing a page, or launching an ad campaign, we clarify who you want to reach, what problem you solve for them, and which channels fit your goals and budget.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Websites Built for Conversion',
    description:
      'Traffic is only useful when visitors understand your offer and know how to take the next step. We design fast, mobile-first pages structured around buyer questions and clear calls to action.',
  },
  {
    icon: Target,
    title: 'Marketing Focused on Business Goals',
    description:
      'Impressions and clicks matter only when they contribute to real awareness, qualified enquiries, or sales. We align SEO, social, and paid campaigns with the outcomes that matter to your business.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear Communication and Reporting',
    description:
      'You should never have to guess what your marketing agency is doing. We explain our work in plain language, share what the data shows, and outline what we plan to improve next.',
  },
];

export default function TrustSection() {
  return (
    <section className="section bg-white" aria-labelledby="principles-heading">
      <div className="container-site">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              id="principles-heading"
              eyebrow="Why a coordinated approach"
              title="Built on practical working principles, not marketing hype"
              intro="Digital marketing works best when your website, search presence, social channels, and advertising pull in the same direction. These four principles guide how we plan and deliver every engagement."
            />
            <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
              <p className="font-display text-sm font-semibold text-ink">Our commitment to honesty</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                No agency controls search engine algorithms or market conditions, so we never promise guaranteed rankings
                or overnight returns. Instead, we commit to thoughtful strategy, clean execution, and transparent
                measurement.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card reveal flex flex-col justify-between p-7 transition duration-300 hover:-translate-y-0.5 hover:border-orbit-200"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-xs font-semibold tracking-widest text-slate-400">
                        PRINCIPLE 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
