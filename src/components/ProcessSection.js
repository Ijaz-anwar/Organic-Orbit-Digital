import { Search, Lightbulb, Rocket, RefreshCw } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understand the business, audience, challenges, and objectives.',
    detail:
      'We start by listening: what you sell, who your best customers are, what you have tried before, and how your website and channels are currently set up.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategize',
    summary: 'Create a prioritized marketing or development plan.',
    detail:
      'Rather than doing everything at once, we define a clear roadmap with realistic priorities, channel roles, deliverables, and how progress will be measured.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Execute',
    summary: 'Build, launch, and optimize the agreed solution.',
    detail:
      'We design and develop pages, implement on-page SEO, publish content, or launch ad campaigns with proper tracking and quality checks in place.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Improve',
    summary: 'Review performance, communicate findings, and refine the approach.',
    detail:
      'Once live, we monitor real user behaviour and enquiry quality, share clear updates, and adjust targeting, pages, or content based on what the data shows.',
    icon: RefreshCw,
  },
];

export default function ProcessSection({ bg = 'bg-white' }) {
  return (
    <section
      className={`section relative overflow-hidden border-y border-line/70 ${bg} text-ink`}
      aria-labelledby="process-heading"
    >
      <div className="bg-grid-light absolute inset-0" aria-hidden="true" />
      <div className="container-site relative">
        <SectionHeading
          id="process-heading"
          eyebrow="How we work"
          title="A structured four-step process from discovery to ongoing improvement"
          intro="Clear stages keep projects predictable and ensure every campaign or website build starts with a solid understanding of your business."
          align="center"
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="card reveal relative flex flex-col p-7 transition duration-300 hover:-translate-y-0.5 hover:border-orbit-200"
              >
                {/* Connector line on desktop */}
                {index < steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute top-12 -right-3 hidden h-px w-6 bg-orbit-200 lg:block"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold tracking-wider text-orbit-600">
                    {step.number} — {step.title.toUpperCase()}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {step.number} — {step.title}
                </h3>
                <p className="mt-2 font-medium text-slate-800">{step.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.detail}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
