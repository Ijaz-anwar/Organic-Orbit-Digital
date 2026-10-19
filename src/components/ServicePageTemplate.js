import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  ListChecks,
  BookOpen,
  Layers,
  BarChart3,
  Building2,
  ShieldCheck,
  Sparkles,
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
          { name: `${service.number}. ${service.name}`, path },
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

      {/* Introduction & What Are ... Services? */}
      <section className="section bg-white" aria-labelledby="overview-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Service Overview
              </p>
              <h2 id="overview-heading" className="mt-3 text-3xl leading-tight font-bold text-ink sm:text-4xl">
                {content.overview.heading}
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-slate-700">
                {content.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {content.overview.whatAreHeading && (
                <div className="mt-10 rounded-2xl border border-line bg-mist/60 p-7">
                  <h2 className="text-2xl font-bold text-ink">{content.overview.whatAreHeading}</h2>
                  <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-slate-700">
                    {(content.overview.whatAreParagraphs || []).map((wp, idx) => (
                      <p key={idx}>{wp}</p>
                    ))}
                  </div>
                  {content.overview.whatAreBullets && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {content.overview.whatAreBullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-3 text-sm text-slate-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {content.overview.whatAreOutro && (
                    <div className="mt-5 space-y-3 text-[0.96rem] leading-relaxed text-slate-700">
                      {content.overview.whatAreOutro.map((op, oIdx) => (
                        <p key={oIdx}>{op}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-28" aria-label="Core inclusions">
              <div className="card bg-mist p-7 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <ListChecks className="h-5 w-5 text-orbit-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-ink">
                    {service.number}. {service.name} Highlights
                  </h3>
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
                    Ready to discuss how {service.name} fits your business goals?
                  </p>
                  <Link
                    href={`/contact/?service=${encodeURIComponent(service.name)}`}
                    className="btn btn-primary mt-4 w-full text-sm"
                  >
                    Request a Free Consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Why Businesses Need This Service */}
      {content.whySection && (
        <section className="section bg-mist" aria-labelledby="why-service-heading">
          <div className="container-site">
            <SectionHeading
              id="why-service-heading"
              eyebrow="Business Value"
              title={content.whySection.heading}
              intro={content.whySection.intro}
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.whySection.items.map((item, idx) => (
                <article key={item.title} className="card p-7">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orbit-50 font-display text-xs font-bold text-orbit-600 ring-1 ring-orbit-100">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                    {(item.paragraphs || [item.text]).map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comprehensive Service Sections (Deep-Dive Capabilities) */}
      {content.deepSections && content.deepSections.length > 0 && (
        <section className="section bg-white" aria-labelledby="deep-services-heading">
          <div className="container-site">
            <SectionHeading
              id="deep-services-heading"
              eyebrow="Complete Service Capabilities"
              title={content.deepSectionsHeading || `Our ${service.name} Services`}
              intro={
                content.deepSectionsIntro ||
                'Every engagement is structured around your business model, audience, and measurable growth priorities.'
              }
            />

            <div className="mt-12 space-y-8">
              {content.deepSections.map((sec, idx) => (
                <article
                  key={sec.title}
                  className="card border-line bg-mist/40 p-7 sm:p-9"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-50 px-3 py-1 font-display text-xs font-bold text-orbit-700 ring-1 ring-orbit-100">
                      <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-ink">{sec.title}</h3>
                  </div>

                  <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-slate-700">
                    {(sec.paragraphs || []).map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {sec.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-3.5 text-sm text-slate-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.subsections && sec.subsections.length > 0 && (
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      {sec.subsections.map((sub) => (
                        <div key={sub.heading} className="card bg-white p-6">
                          <h4 className="text-lg font-bold text-ink">{sub.heading}</h4>
                          <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-slate-700">
                            {sub.paragraphs.map((sp, spIdx) => (
                              <p key={spIdx}>{sp}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {sec.outro && sec.outro.length > 0 && (
                    <div className="mt-5 space-y-3 text-[0.96rem] leading-relaxed text-slate-700">
                      {sec.outro.map((op, opIdx) => (
                        <p key={opIdx}>{op}</p>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Platforms / Additional Grid Section (e.g. Social Media Platforms We Manage) */}
      {content.platformsSection && (
        <section className="section border-y border-line bg-mist" aria-labelledby="platforms-heading">
          <div className="container-site">
            <SectionHeading
              id="platforms-heading"
              eyebrow="Channel Expertise"
              title={content.platformsSection.heading}
              intro={content.platformsSection.intro}
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.platformsSection.items.map((plat) => (
                <article key={plat.title} className="card p-7">
                  <h3 className="text-xl font-bold text-ink">{plat.title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                    {plat.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {content.platformsSection.outro && (
              <p className="mt-8 rounded-2xl border border-orbit-100 bg-white p-5 text-sm leading-relaxed text-slate-700">
                {content.platformsSection.outro}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Step-by-Step Process */}
      <section className="section bg-mist" aria-labelledby="process-heading">
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="Structured Workflow"
            title={content.processHeading || `Our ${service.name} Process`}
            intro={
              content.processIntro ||
              'A structured process helps ensure that every stage stays organized and focused on your business objectives.'
            }
          />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.process.map((step, i) => (
              <li key={step.title} className="card bg-white p-7">
                <span className="font-display text-xs font-bold tracking-widest text-orbit-600 uppercase">
                  Step 0{i + 1}
                </span>
                <h3 className="mt-2.5 text-lg font-bold text-ink">{step.title}</h3>
                <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-slate-700">
                  {(step.paragraphs || [step.text]).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          {content.processOutro && (
            <p className="mt-8 text-sm leading-relaxed text-slate-700">{content.processOutro}</p>
          )}
        </div>
      </section>

      {/* Performance Metrics Table & Measurement Section */}
      {content.metricsSection && (
        <section className="section bg-white" aria-labelledby="metrics-heading">
          <div className="container-site">
            <SectionHeading
              id="metrics-heading"
              eyebrow="Performance Measurement"
              title={content.metricsSection.heading}
              intro={content.metricsSection.intro}
            />

            {content.metricsSection.rows && (
              <div className="mt-10 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
                <table className="w-full min-w-[34rem] text-left text-sm">
                  <thead className="border-b border-line bg-mist text-xs font-semibold tracking-wider text-ink uppercase">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        <span className="inline-flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-orbit-600" aria-hidden="true" />
                          Performance Metric
                        </span>
                      </th>
                      <th scope="col" className="px-6 py-4">What It Measures</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {content.metricsSection.rows.map((row) => (
                      <tr key={row.metric} className="hover:bg-mist/50">
                        <th scope="row" className="px-6 py-4 font-display font-semibold text-ink">
                          {row.metric}
                        </th>
                        <td className="px-6 py-4 text-slate-700">{row.measures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {content.metricsSection.outro && (
              <div className="mt-6 space-y-3 text-[0.96rem] leading-relaxed text-slate-700">
                {content.metricsSection.outro.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Industries & Who Can Benefit + Benefits */}
      <section className="section bg-mist" aria-labelledby="benefits-industries-heading">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                id="benefits-industries-heading"
                eyebrow="Practical Outcomes"
                title={content.benefitsHeading || `Benefits of Choosing Our ${service.name}`}
                intro={content.benefitsIntro}
              />

              {content.benefitsParagraphs && (
                <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-slate-700">
                  {content.benefitsParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {content.benefits && content.benefits.length > 0 && (
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {content.benefits.map((b) => (
                    <div key={b.title} className="card p-6">
                      <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{b.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {content.benefitsOutro && (
                <p className="mt-6 text-sm leading-relaxed text-slate-700">{content.benefitsOutro}</p>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="card h-full border-orbit-200 bg-gradient-to-br from-white via-white to-orbit-50/70 p-7 text-ink sm:p-9">
                <p className="eyebrow">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  Industries &amp; Fit
                </p>
                <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
                  {content.suitableForHeading || `Who Can Benefit From ${service.name}?`}
                </h2>
                {content.suitableForIntro && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{content.suitableForIntro}</p>
                )}
                <ul className="mt-6 space-y-3.5 text-[0.95rem] text-slate-700">
                  {content.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orbit-600" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {content.suitableForOutro && (
                  <p className="mt-5 text-sm leading-relaxed text-slate-700">{content.suitableForOutro}</p>
                )}
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

      {/* Pricing, How to Choose & Why Choose Us Sections */}
      {content.guidanceSections && content.guidanceSections.length > 0 && (
        <section className="section bg-white" aria-labelledby="guidance-heading">
          <div className="container-site">
            <SectionHeading
              id="guidance-heading"
              eyebrow="Investment & Selection Guide"
              title={`Planning Your ${service.name} Investment`}
              intro="Transparent guidance on pricing factors, timelines, and how to evaluate the right partner for your business."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {content.guidanceSections.map((g) => (
                <article key={g.heading} className="card bg-mist/50 p-7 sm:p-9">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-orbit-600" aria-hidden="true" />
                    <h3 className="text-2xl font-bold text-ink">{g.heading}</h3>
                  </div>
                  <div className="mt-4 space-y-3.5 text-[0.96rem] leading-relaxed text-slate-700">
                    {(g.paragraphs || []).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  {g.bullets && (
                    <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                      {g.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {g.outro && (
                    <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-slate-700">
                      {g.outro.map((op, oIdx) => (
                        <p key={oIdx}>{op}</p>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      <section className="section bg-mist" aria-labelledby="service-faq-heading">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="service-faq-heading"
                eyebrow="Questions & answers"
                title={content.faqHeading || `Frequently Asked Questions About ${service.name}`}
                intro="Straightforward answers to help you decide whether this service fits your priorities."
              />
              {relatedPosts.length > 0 && (
                <div className="mt-8 rounded-2xl border border-line bg-white p-6">
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
      <section className="section bg-white" aria-labelledby="related-services-heading">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="related-services-heading"
              eyebrow="Connected channels"
              title="Services that pair well with this one"
              intro="Explore how our other services connect to support your wider marketing goals."
            />
            <Link href="/services/" className="link-underline shrink-0 text-sm">
              View all 6 services →
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
