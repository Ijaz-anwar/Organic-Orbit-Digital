import Link from 'next/link';
import {
  Orbit,
  Compass,
  Workflow,
  RefreshCw,
  ShieldCheck,
  Handshake,
  Globe,
  ArrowRight,
  Mail,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoHref } from '@/lib/site-config';
import { services, servicePath } from '@/lib/services';

export const metadata = buildMetadata({
  title: 'About Us — Our Philosophy & Working Approach',
  description:
    'Learn about Organic Orbit Digital’s philosophy around connected digital channels, practical marketing strategy, conversion-focused websites, and continuous improvement.',
  path: '/about/',
});

/**
 * Editable company facts block.
 * Keep strictly factual—add verified founder/team/milestone details here
 * whenever you are ready to publish them.
 */
const companyProfile = {
  brandName: siteConfig.name,
  focus: 'Digital Marketing & Website Development',
  audience: 'Small businesses, startups, ecommerce brands, and established companies worldwide',
  contactEmail: siteConfig.email,
};

const philosophyPillars = [
  {
    icon: Orbit,
    title: 'Connected Digital Channels',
    text: 'A website, search engine optimisation, social media presence, and paid advertising are strongest when designed as parts of one ecosystem. What someone reads in an ad should match the landing page they arrive on; what performs in paid search can inform long-term SEO content.',
  },
  {
    icon: Compass,
    title: 'Practical Strategy First',
    text: 'Every business has finite time and budget. Instead of recommending every tactic at once, we look at where your best opportunities lie today—fixing foundational website or tracking gaps before scaling traffic.',
  },
  {
    icon: Workflow,
    title: 'Sustainable Business Growth',
    text: 'Quick spikes mean little if enquiries are unqualified or pages cannot convert. We focus on durable assets you own: fast websites, well-structured service pages, clean analytics, and ad accounts registered in your business’s name.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    text: 'Digital channels evolve and customer behaviour shifts. We treat launches as the beginning of an informed feedback loop—reviewing real performance data, communicating clearly, and refining the approach over time.',
  },
];

const workingPrinciples = [
  {
    icon: ShieldCheck,
    title: 'Honest Expectations',
    text: 'We never promise guaranteed #1 search rankings, overnight viral growth, or fixed ROI figures. We promise structured work, accurate tracking, and candid advice.',
  },
  {
    icon: Handshake,
    title: 'Client Ownership',
    text: 'Your domain, website code, analytics properties, and advertising accounts belong to your business—never locked inside an agency account.',
  },
  {
    icon: Globe,
    title: 'Built for Modern Businesses Everywhere',
    text: 'Our workflows are structured for clear remote collaboration with small businesses, startups, ecommerce stores, and established organisations across international markets.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Organic Orbit Digital"
        title="Connecting the Channels That Help Your Business Grow Online"
        intro="Organic Orbit Digital was built around a simple idea: digital marketing works best when your website, search visibility, social presence, and advertising orbit the same business goals."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <button
            type="button"
            data-open-calendly
            className="btn btn-primary"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <Link href="/contact/" className="btn btn-outline">
            <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </PageHero>

      {/* Why "Organic Orbit" */}
      <section className="section bg-white" aria-labelledby="story-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">The idea behind the name</p>
              <h2 id="story-heading" className="mt-3 text-3xl leading-tight font-bold text-ink sm:text-4xl">
                Why we think in ecosystems, not isolated tactics
              </h2>
              <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
                <p>
                  When a business invests in digital marketing, it is easy to end up with disconnected pieces: a
                  website built without search intent in mind, social media posts that never lead visitors anywhere
                  meaningful, or paid ads running without clear conversion tracking.
                </p>
                <p>
                  The name <strong className="font-semibold text-ink">Organic Orbit Digital</strong> reflects how we
                  view sustainable online growth. Your business and its website sit at the centre. Around that core
                  orbit the channels that help customers discover, evaluate, and contact you—on-page SEO, social media,
                  paid search and paid social advertising, and structured lead generation.
                </p>
                <p>
                  When those channels are aligned, every improvement compounds: a clearer landing page helps both
                  organic search visitors and paid ad clicks convert; audience insights from social and search campaigns
                  sharpen the messaging across the entire website.
                </p>
              </div>
            </div>

            {/* Editable, strictly factual company profile card */}
            <aside className="lg:col-span-5" aria-label="Agency overview">
              <div className="card bg-mist p-7 sm:p-9">
                <p className="text-xs font-semibold tracking-wider text-orbit-600 uppercase">Agency at a glance</p>
                <h3 className="mt-2 text-2xl font-bold text-ink">{companyProfile.brandName}</h3>
                <dl className="mt-6 space-y-4 border-t border-line pt-6 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Core discipline</dt>
                    <dd className="mt-1 text-muted">{companyProfile.focus}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Who we work with</dt>
                    <dd className="mt-1 text-muted">{companyProfile.audience}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Core capabilities</dt>
                    <dd className="mt-2">
                      <ul className="space-y-1.5 text-slate-700">
                        {services.map((s) => (
                          <li key={s.slug} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                            <Link href={servicePath(s.slug)} className="hover:text-orbit-600 hover:underline">
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Direct contact</dt>
                    <dd className="mt-1">
                      <a href={mailtoHref} className="link-underline inline-flex items-center gap-1.5">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        {companyProfile.contactEmail}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Four Philosophy Pillars */}
      <section className="section bg-mist" aria-labelledby="philosophy-heading">
        <div className="container-site">
          <SectionHeading
            id="philosophy-heading"
            eyebrow="Brand philosophy"
            title="Four pillars behind every project we take on"
            intro="Whether you need a single focused service or a multi-channel marketing plan, our work is anchored in these four ideas."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {philosophyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="card reveal p-7 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="section bg-white" aria-labelledby="standards-heading">
        <div className="container-site">
          <SectionHeading
            id="standards-heading"
            eyebrow="Working standards"
            title="What you can expect when working with us"
            intro="Clear expectations and straightforward communication make for better long-term partnerships."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="card p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-organic-50 text-organic-700 ring-1 ring-organic-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection tone="dark" />

      <CTASection
        title="Want to see how our approach fits your business?"
        text="Tell us about your current website, channels, and goals, and we will outline a practical starting point."
      />
    </>
  );
}
