import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleAlert,
  Mail,
  ListChecks,
  BookOpen,
} from 'lucide-react';
import PageHero from './PageHero';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import FAQ from './FAQ';
import CTASection from './CTASection';
import JsonLd from './JsonLd';
import { getService, servicePath } from '@/lib/services';
import { getServiceContent } from '@/lib/service-content';
import { serviceSchema } from '@/lib/seo';
import { mailtoHref } from '@/lib/site-config';
import { getAllPosts } from '@/lib/blog';

function SpotlightSection({ spotlight }) {
  if (!spotlight) return null;

  if (spotlight.variant === 'comparison') {
    return (
      <section className="section border-y border-line bg-white text-ink" aria-labelledby="spotlight-heading">
        <div className="container-site">
          <SectionHeading
            id="spotlight-heading"
            eyebrow="Paid Social vs Paid Search"
            title={spotlight.heading}
            intro={spotlight.intro}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {spotlight.columns.map((col, idx) => (
              <div
                key={col.title}
                className={`card p-7 sm:p-9 ${
                  idx === 0 ? 'border-orbit-200 bg-mist/60' : 'border-organic-200 bg-mist/60'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase ${
                      idx === 0
                        ? 'bg-orbit-50 text-orbit-700 ring-1 ring-orbit-100'
                        : 'bg-organic-50 text-organic-700 ring-1 ring-organic-100'
                    }`}
                  >
                    {col.subtitle}
                  </span>
                  <span className="text-xs text-muted">{col.channels}</span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-ink">{col.title}</h3>
                <p className="mt-2 text-sm font-semibold text-orbit-600">Primary role: {col.bestFor}</p>

                <ul className="mt-6 space-y-3 text-[0.95rem] text-slate-700">
                  {col.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {spotlight.note && (
            <p className="mt-8 rounded-2xl border border-orbit-100 bg-orbit-50/60 p-5 text-sm leading-relaxed text-slate-700">
              <strong className="font-semibold text-ink">Working together: </strong>
              {spotlight.note}
            </p>
          )}
        </div>
      </section>
    );
  }

  if (spotlight.variant === 'flow') {
    return (
      <section className="section border-y border-line bg-white text-ink" aria-labelledby="spotlight-heading">
        <div className="container-site">
          <SectionHeading
            id="spotlight-heading"
            eyebrow="Connected lead generation"
            title={spotlight.heading}
            intro={spotlight.intro}
          />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spotlight.items.map((step, i) => (
              <li
                key={step.title}
                className="card relative bg-mist/60 p-7"
              >
                <span className="font-display text-xs font-bold tracking-widest text-orbit-600 uppercase">
                  Stage 0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (spotlight.variant === 'checklist') {
    return (
      <section className="section border-y border-line bg-white text-ink" aria-labelledby="spotlight-heading">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="spotlight-heading"
                eyebrow="Quality standards"
                title={spotlight.heading}
                intro={spotlight.intro}
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {spotlight.items.map((item) => (
                  <li
                    key={item}
                    className="card flex items-start gap-3 bg-mist/60 p-5 text-[0.95rem] text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orbit-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default: 'cards'
  return (
    <section className="section border-y border-line bg-white text-ink" aria-labelledby="spotlight-heading">
      <div className="container-site">
        <SectionHeading
          id="spotlight-heading"
          eyebrow="In-depth focus"
          title={spotlight.heading}
          intro={spotlight.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spotlight.items.map((item) => (
            <div
              key={item.title}
              className="card bg-mist/60 p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePageTemplate({ slug }) {
  const service = getService(slug);
  const content = getServiceContent(slug);
  const path = servicePath(slug);

  const relatedServices = (content.related || [])
    .map((relSlug) => getService(relSlug))
    .filter(Boolean);

  const relatedPosts = getAllPosts().filter((post) =>
    post.relatedServices?.includes(slug)
  );

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          serviceType: service.name,
          description: content.metaDescription,
          path,
        })}
      />

      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        icon={service.icon}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: service.name, path },
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Link href={`/contact/?service=${encodeURIComponent(service.name)}`} className="btn btn-primary">
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href={mailtoHref} className="btn btn-outline">
            <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            Email Our Team
          </a>
        </div>
      </PageHero>

      {/* Overview & Core Scope */}
      <section className="section bg-white" aria-labelledby="overview-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Service overview</p>
              <h2 id="overview-heading" className="mt-3 text-3xl leading-tight font-bold text-ink sm:text-4xl">
                {content.overview.heading}
              </h2>
              <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                {content.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5" aria-label="Core inclusions">
              <div className="card bg-mist p-7 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <ListChecks className="h-5 w-5 text-orbit-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-ink">What this service covers</h3>
                </div>
                <ul className="mt-5 space-y-3 text-[0.95rem] text-slate-700">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-sm text-muted">
                    Want to know how this applies to your business?
                  </p>
                  <Link
                    href={`/contact/?service=${encodeURIComponent(service.name)}`}
                    className="link-underline mt-2 inline-flex items-center gap-1.5 text-sm"
                  >
                    Request a tailored recommendation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Business Problems Addressed */}
      <section className="section bg-mist" aria-labelledby="problems-heading">
        <div className="container-site">
          <SectionHeading
            id="problems-heading"
            eyebrow="Problems we help solve"
            title={content.problems.heading}
            intro="Understanding what is holding performance back is the fastest way to decide what to fix first."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {content.problems.items.map((item) => (
              <article key={item.title} className="card p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                    <CircleAlert className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific spotlight section (Light Theme) */}
      <SpotlightSection spotlight={content.spotlight} />

      {/* Deliverables & Process */}
      <section className="section bg-white" aria-labelledby="deliverables-heading">
        <div className="container-site">
          <SectionHeading
            id="deliverables-heading"
            eyebrow="Deliverables & workflow"
            title="What we deliver and how the engagement runs"
            intro="Clear deliverables and a step-by-step process keep expectations aligned from day one."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.deliverables.map((d) => (
              <article key={d.title} className="card p-7">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orbit-50 text-orbit-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
              </article>
            ))}
          </div>

          {/* 4-step service workflow */}
          <div className="mt-16 rounded-[var(--radius-card)] border border-line bg-mist p-7 sm:p-10">
            <h3 className="text-2xl font-bold text-ink">Our process for {service.name}</h3>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.process.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-line bg-white p-6">
                  <span className="font-display text-xs font-bold tracking-widest text-orbit-600 uppercase">
                    Step 0{i + 1}
                  </span>
                  <h4 className="mt-2 text-lg font-semibold text-ink">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits & Who It Is Suitable For (Light Theme) */}
      <section className="section bg-mist" aria-labelledby="benefits-heading">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                id="benefits-heading"
                eyebrow="Practical outcomes"
                title="How this service supports your business"
                intro="We focus on realistic, sustainable improvements rather than inflated promises."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {content.benefits.map((b) => (
                  <div key={b.title} className="card p-6">
                    <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card h-full border-orbit-200 bg-gradient-to-br from-white via-white to-orbit-50/70 p-7 text-ink sm:p-9">
                <p className="eyebrow">Who this is for</p>
                <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
                  When {service.name} is a strong fit
                </h2>
                <ul className="mt-6 space-y-4 text-[0.95rem] text-slate-700">
                  {content.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orbit-600" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line pt-6">
                  <Link
                    href={`/contact/?service=${encodeURIComponent(service.name)}`}
                    className="btn btn-primary w-full"
                  >
                    Ask About {service.name}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="section bg-white" aria-labelledby="service-faq-heading">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="service-faq-heading"
                eyebrow="Questions & answers"
                title={`Frequently asked questions about ${service.name}`}
                intro="Straightforward answers to help you decide whether this service fits your priorities."
              />
              {relatedPosts.length > 0 && (
                <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orbit-600 uppercase">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    Related reading from our blog
                  </div>
                  <ul className="mt-3 space-y-3">
                    {relatedPosts.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}/`} className="link-underline text-sm">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="lg:col-span-7">
              <FAQ items={content.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-mist" aria-labelledby="related-services-heading">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="related-services-heading"
              eyebrow="Connected channels"
              title="Services that pair well with this one"
              intro="Explore how our other services connect to support your wider marketing goals."
            />
            <Link href="/services/" className="link-underline shrink-0 text-sm">
              View all 5 services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedServices.map((rel) => (
              <ServiceCard key={rel.slug} service={rel} compact />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={content.cta.title}
        text={content.cta.text}
        primaryHref={`/contact/?service=${encodeURIComponent(service.name)}`}
      />
    </>
  );
}
