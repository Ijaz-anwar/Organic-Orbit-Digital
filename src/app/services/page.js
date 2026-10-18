import Link from 'next/link';
import { ArrowRight, Mail, Compass, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ServicesSection from '@/components/ServicesSection';
import SectionHeading from '@/components/SectionHeading';
import ProcessSection from '@/components/ProcessSection';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';
import { services, servicePath } from '@/lib/services';
import { mailtoHref } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'Digital Marketing & Web Development Services',
  description:
    'Explore Organic Orbit Digital’s five core services: Social Media Marketing, Website Development, Meta Ads & Google Ads, Lead Generation, and On-Page SEO.',
  path: '/services/',
});

const startingPoints = [
  {
    situation: '“We need a credible, high-converting website or landing page first.”',
    recommendation: 'Start with Website Development paired with On-Page SEO foundations.',
    slug: 'website-development',
    linkText: 'Explore Website Development',
  },
  {
    situation: '“Our website is solid, but customers cannot find us on Google.”',
    recommendation: 'Focus on On-Page SEO for long-term search relevance, or Google Search Ads for immediate demand capture.',
    slug: 'on-page-seo',
    linkText: 'Explore On-Page SEO',
  },
  {
    situation: '“We want to reach new audiences and stay active on social platforms.”',
    recommendation: 'Combine Social Media Marketing with targeted Meta Ads campaigns.',
    slug: 'social-media-marketing',
    linkText: 'Explore Social Media Marketing',
  },
  {
    situation: '“We are getting traffic or clicks, but not enough qualified enquiries.”',
    recommendation: 'Build a structured Lead Generation funnel connecting targeting, landing pages, forms, and follow-up.',
    slug: 'lead-generation',
    linkText: 'Explore Lead Generation',
  },
  {
    situation: '“We want measurable paid campaigns across search and social.”',
    recommendation: 'Launch tracked Meta Ads and Google Ads campaigns tailored to buyer intent.',
    slug: 'meta-google-ads',
    linkText: 'Explore Meta & Google Ads',
  },
];

const servicesOverviewFaqs = [
  {
    q: 'Do I have to use all five services at once?',
    a: 'No. Many engagements begin with a single priority—such as building a conversion-ready website, conducting an on-page SEO overhaul, or setting up paid search campaigns—and expand as your goals and capacity grow.',
  },
  {
    q: 'How do we decide which service to start with?',
    a: 'During our initial consultation, we look at where the biggest bottleneck is today. For example, sending paid ad traffic to a slow or confusing website rarely works well, so we may recommend fixing the landing page before scaling ad spend.',
  },
  {
    q: 'Can you work alongside our internal team?',
    a: 'Yes. We can handle an entire channel end-to-end or collaborate with your in-house marketers, designers, or developers on strategy, audits, and specialist execution.',
  },
  {
    q: 'How are engagements scoped?',
    a: 'Website development and initial on-page SEO audits are typically scoped as clearly defined projects, while social media management, paid advertising, and ongoing optimization can be structured on a recurring monthly basis.',
  },
];

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Five Focused Services Designed to Work Together"
        intro="Whether you need a conversion-ready website, stronger search visibility, consistent social content, or targeted advertising, each service is built to support your wider business goals."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Link href="/contact/" className="btn btn-primary">
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href={mailtoHref} className="btn btn-outline">
            <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            Email Our Team
          </a>
        </div>
      </PageHero>

      {/* All 5 Service Cards */}
      <ServicesSection
        eyebrow="Core capabilities"
        title="Explore our digital marketing and web services"
        intro="Select any service below to see the problems it solves, what is included, our step-by-step process, and answers to common questions."
        className="bg-mist"
      />

      {/* Where to start guide */}
      <section className="section bg-white" aria-labelledby="selector-heading">
        <div className="container-site">
          <SectionHeading
            id="selector-heading"
            eyebrow="Choosing a starting point"
            title="Which service fits your current priority?"
            intro="If you are unsure where to focus first, match your current situation to the most practical starting point below."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startingPoints.map((item) => (
              <article key={item.situation} className="card flex flex-col justify-between p-7">
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orbit-50 text-orbit-600">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.situation}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.recommendation}</p>
                </div>
                <div className="mt-6 border-t border-line pt-4">
                  <Link href={servicePath(item.slug)} className="link-underline inline-flex items-center gap-1.5 text-sm">
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}

            {/* Custom advice card (Light Theme) */}
            <article className="card flex flex-col justify-between border-orbit-200 bg-gradient-to-br from-orbit-50/80 via-white to-organic-50/50 p-7 text-ink">
              <div>
                <p className="eyebrow">Need a second opinion?</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">
                  Tell us your goal and we will help you prioritise
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Share your website URL and what you want to achieve over the next 3–6 months. We will give you an
                  honest view on where to start.
                </p>
              </div>
              <div className="mt-6 pt-4">
                <Link href="/contact/" className="btn btn-primary w-full text-sm">
                  Request a Free Consultation
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Summary comparison table */}
      <section className="section bg-mist" aria-labelledby="matrix-heading">
        <div className="container-site">
          <SectionHeading
            id="matrix-heading"
            eyebrow="Service breakdown"
            title="How our five services complement each other"
            intro="Every service has a distinct role in helping prospects discover, trust, and contact your business."
          />

          <div className="mt-10 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="border-b border-line bg-mist text-xs font-semibold tracking-wider text-ink uppercase">
                <tr>
                  <th scope="col" className="px-6 py-4">Service</th>
                  <th scope="col" className="px-6 py-4">Primary Role</th>
                  <th scope="col" className="px-6 py-4">Key Deliverables</th>
                  <th scope="col" className="px-6 py-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {services.map((s) => (
                  <tr key={s.slug} className="hover:bg-mist/50">
                    <th scope="row" className="px-6 py-5 font-display text-base font-semibold text-ink">
                      {s.name}
                    </th>
                    <td className="px-6 py-5 text-muted">{s.navHint}</td>
                    <td className="px-6 py-5">
                      <ul className="flex flex-wrap gap-1.5">
                        {s.features.slice(0, 3).map((f) => (
                          <li
                            key={f}
                            className="inline-flex items-center gap-1 rounded-full bg-mist px-2.5 py-1 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="h-3 w-3 text-organic-600" aria-hidden="true" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <Link href={servicePath(s.slug)} className="link-underline text-sm">
                        View page →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ProcessSection bg="bg-white" />

      <section className="section bg-mist" aria-labelledby="services-faq-heading">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="services-faq-heading"
                eyebrow="Common questions"
                title="Questions about working with our agency"
                intro="Each individual service page also includes dedicated FAQs specific to that discipline."
              />
            </div>
            <div className="lg:col-span-7">
              <FAQ items={servicesOverviewFaqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
