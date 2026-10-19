import Link from 'next/link';
import {
  MousePointerClick,
  EyeOff,
  CalendarX2,
  Megaphone,
  Target,
  UserSearch,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

/**
 * Homepage Section G — Business Challenges We Solve.
 * Ordered 01 – 06 to match our six core services.
 */
const challenges = [
  {
    number: '01',
    icon: MousePointerClick,
    challenge: 'A website that generates few enquiries',
    problem:
      'Visitors land on your site, look around briefly, and leave without calling, booking, or submitting your contact form.',
    solution:
      'Our Website Development process focuses on clear messaging, mobile speed, logical navigation, and straightforward enquiry paths that reduce friction for interested buyers.',
    serviceLabel: '01. Website Development',
    serviceHref: '/services/website-development/',
  },
  {
    number: '02',
    icon: EyeOff,
    challenge: 'Low search engine visibility',
    problem:
      'Potential customers search Google for the services you offer, but your pages rarely appear or fail to match buyer search intent.',
    solution:
      'With Search Engine Optimization, we align your key pages with search intent and improve headings, metadata, content depth, internal linking, and structured data.',
    serviceLabel: '02. Search Engine Optimization',
    serviceHref: '/services/search-engine-optimization/',
  },
  {
    number: '03',
    icon: CalendarX2,
    challenge: 'Inconsistent social media presence',
    problem:
      'Months of quiet profiles or ad-hoc posts make it harder for prospects researching your brand to see what you stand for.',
    solution:
      'Through Social Media Management, we establish clear content pillars, a reliable monthly calendar, and platform-tailored visuals so your brand stays active and credible.',
    serviceLabel: '03. Social Media Management',
    serviceHref: '/services/social-media-management/',
  },
  {
    number: '04',
    icon: Megaphone,
    challenge: 'Paid social boosts that do not convert',
    problem:
      'Boosting posts on Facebook or Instagram without proper audience structure, pixel tracking, or retargeting burns budget on surface-level likes.',
    solution:
      'Our Meta Ads Management builds full-funnel prospecting and retargeting campaigns backed by verified Meta Pixel tracking and structured creative testing.',
    serviceLabel: '04. Meta Ads Management',
    serviceHref: '/services/meta-ads-management/',
  },
  {
    number: '05',
    icon: Target,
    challenge: 'Wasted Google Ads spend on wrong clicks',
    problem:
      'Broad keywords without negative keyword filtering or conversion tracking spend budget on searches that never become customers.',
    solution:
      'Our Google Ads Management focuses on high-intent commercial queries, tight ad groups, proactive negative keywords, and accurate conversion tracking.',
    serviceLabel: '05. Google Ads Management',
    serviceHref: '/services/google-ads-management/',
  },
  {
    number: '06',
    icon: UserSearch,
    challenge: 'Difficulty attracting qualified business leads',
    problem:
      'Enquiries arrive that do not fit your service scope or budget—or interested prospects drop off between click and follow-up.',
    solution:
      'Through Lead Generation for Business, we connect ideal customer targeting, dedicated landing pages, qualifying forms, and prompt follow-up steps.',
    serviceLabel: '06. Lead Generation for Business',
    serviceHref: '/services/lead-generation-for-business/',
  },
];

export default function ChallengesSection() {
  return (
    <section className="section bg-white" aria-labelledby="challenges-heading">
      <div className="container-site">
        <SectionHeading
          id="challenges-heading"
          eyebrow="Business challenges we solve"
          title="Where digital growth often gets stuck—and which service addresses it"
          intro="Every business has different bottlenecks. Here is how our six numbered services address the most common challenges we discuss with business owners."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.number}
                className="card reveal flex flex-col justify-between p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-mist px-3 py-1 font-display text-xs font-bold tracking-wider text-orbit-600 uppercase">
                      Challenge {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-ink">{item.challenge}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{item.problem}</p>

                  <div className="mt-5 border-t border-line pt-5">
                    <p className="text-xs font-semibold tracking-wider text-organic-700 uppercase">
                      How we help address it
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-700">{item.solution}</p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link href={item.serviceHref} className="link-underline inline-flex items-center gap-1.5 text-sm">
                    Explore {item.serviceLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
