import Link from 'next/link';
import { EyeOff, MousePointerClick, CalendarX2, Gauge, UserSearch, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

/**
 * Homepage Section G — Business Challenges We Solve (Light Theme).
 * Maps real-world bottlenecks to relevant services without promising guaranteed outcomes.
 */
const challenges = [
  {
    icon: EyeOff,
    challenge: 'Low online visibility',
    problem:
      'Potential customers search for the services you offer, but your pages rarely appear or fail to explain how you can help.',
    solution:
      'We align your key pages with search intent, improve headings, metadata, and internal linking through On-Page SEO, and pair it with targeted search or social campaigns when immediate visibility is needed.',
    serviceLabel: 'On-Page SEO',
    serviceHref: '/services/on-page-seo/',
  },
  {
    icon: MousePointerClick,
    challenge: 'A website that generates few enquiries',
    problem:
      'Visitors land on your site, look around briefly, and leave without calling, booking, or submitting your contact form.',
    solution:
      'Our Website Development process focuses on clear messaging, mobile speed, logical navigation, and straightforward enquiry paths that reduce friction for interested buyers.',
    serviceLabel: 'Website Development',
    serviceHref: '/services/website-development/',
  },
  {
    icon: CalendarX2,
    challenge: 'Inconsistent social media activity',
    problem:
      'Months of quiet profiles or ad-hoc posts make it harder for prospects researching your brand to see what you stand for.',
    solution:
      'With Social Media Marketing, we establish clear content pillars, a sustainable publishing calendar, and platform-appropriate visuals so your brand shows up reliably.',
    serviceLabel: 'Social Media Marketing',
    serviceHref: '/services/social-media-marketing/',
  },
  {
    icon: Gauge,
    challenge: 'Advertising campaigns without clear measurement',
    problem:
      'Budget goes into boosted posts or search clicks without reliable conversion tracking to show which campaigns lead to real enquiries.',
    solution:
      'Our Meta Ads & Google Ads management sets up conversion tracking in your own accounts first, separates paid social discovery from paid search intent, and reports on meaningful actions.',
    serviceLabel: 'Meta & Google Ads',
    serviceHref: '/services/meta-google-ads/',
  },
  {
    icon: UserSearch,
    challenge: 'Difficulty attracting qualified prospects',
    problem:
      'Enquiries arrive that do not fit your service area, scope, or budget, taking time away from genuine opportunities.',
    solution:
      'Through Lead Generation, we connect audience targeting, dedicated landing pages, qualifying form questions, and clear follow-up steps to help improve lead relevance.',
    serviceLabel: 'Lead Generation',
    serviceHref: '/services/lead-generation/',
  },
];

export default function ChallengesSection() {
  return (
    <section className="section bg-white" aria-labelledby="challenges-heading">
      <div className="container-site">
        <SectionHeading
          id="challenges-heading"
          eyebrow="Business challenges we solve"
          title="Where digital growth often gets stuck—and how we address it"
          intro="Every business has different bottlenecks. Here is how our services address five of the most common challenges we discuss with business owners."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.challenge}
                className={`card reveal flex flex-col justify-between p-7 sm:p-8 ${
                  idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orbit-50 text-orbit-600 ring-1 ring-orbit-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-muted uppercase">Challenge</span>
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
                    Learn about {item.serviceLabel}
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
