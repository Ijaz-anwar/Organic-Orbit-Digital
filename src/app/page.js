import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ChallengesSection from '@/components/ChallengesSection';
import PortfolioSection from '@/components/PortfolioSection';
import FAQ from '@/components/FAQ';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Organic Orbit Digital | Digital Marketing & Web Development',
  description:
    'Grow your online presence with Organic Orbit Digital: Website Development, Search Engine Optimization, Social Media Management, Meta Ads, Google Ads, and Lead Generation for Business.',
  path: '/',
  absoluteTitle: true,
});

const homeFaqs = [
  {
    q: 'What services does Organic Orbit Digital offer?',
    a: 'We offer six core digital marketing and web services: 01. Website Development, 02. Search Engine Optimization, 03. Social Media Management, 04. Meta Ads Management, 05. Google Ads Management, and 06. Lead Generation for Business. Each service can be engaged on its own or combined into a coordinated growth plan.',
  },
  {
    q: 'How can digital marketing help my business?',
    a: 'A structured digital marketing approach helps the right people discover your business, understand what you offer, and take a clear next step—whether that is making an enquiry, booking a consultation, or buying online. By connecting your website, search presence, social channels, and advertising, each channel supports the others rather than working in isolation.',
  },
  {
    q: 'How long does SEO usually take to show results?',
    a: 'Technical and on-page improvements can be indexed by search engines within days or weeks, but meaningful improvements in organic visibility and search traffic typically build over several months. The exact timeframe depends on competition in your market, your website’s current foundation, and content depth.',
  },
  {
    q: 'Do you manage both Meta Ads and Google Ads?',
    a: 'Yes. We plan, launch, and optimise both Meta Ads (paid social on Facebook and Instagram to build awareness and demand) and Google Ads (paid search campaigns to capture high-intent searches), complete with conversion tracking in your own ad accounts.',
  },
  {
    q: 'Can you build a website for my business?',
    a: 'Yes. Our Website Development service covers modern, mobile-first business websites and campaign landing pages designed for clarity, fast performance, accessibility, on-page SEO foundations, and straightforward visitor enquiries.',
  },
  {
    q: 'How does your lead generation process work?',
    a: 'We start by clarifying your ideal customer profile and offer, then connect the full journey: targeted traffic, a focused landing page, a balanced lead capture form, qualification criteria, and clear follow-up steps so your team can respond promptly.',
  },
  {
    q: 'How can I request a proposal?',
    a: 'Use our Contact page to share a few details about your business, the services you are exploring, and your goals—or email us directly at info@organicorbitdigital.com. We will review your enquiry, ask any clarifying questions, and outline a clear recommendation and scope.',
  },
  {
    q: 'Do you offer customized marketing strategies?',
    a: 'Yes. Every business has different goals, audiences, and internal resources. Rather than forcing a rigid package, we recommend the specific services, channels, and priorities that make sense for your stage of growth.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* C. Hero Section */}
      <Hero />

      {/* D. Trust and Value Proposition */}
      <TrustSection />

      {/* E. Services Section */}
      <ServicesSection />

      {/* F. How We Work */}
      <ProcessSection tone="dark" />

      {/* G. Business Challenges We Solve */}
      <ChallengesSection />

      {/* H. Featured Work / Portfolio */}
      <PortfolioSection />

      {/* I. FAQ Section */}
      <section className="section bg-white" aria-labelledby="home-faq-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="home-faq-heading"
                eyebrow="Frequently asked questions"
                title="Clear answers before we start working together"
                intro="Have a question that is not covered here? Reach out and we will give you a straightforward answer."
              />
              <div className="mt-8">
                <Link href="/contact/" className="link-underline inline-flex items-center gap-1.5 text-sm">
                  Ask our team a question
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FAQ items={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* J. Final CTA */}
      <CTASection />
    </>
  );
}
