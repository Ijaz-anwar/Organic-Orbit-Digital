import Link from 'next/link';
import { Mail, Clock, ShieldCheck, MessageSquare, CheckCircle2, Calendar, Video } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactOptions from '@/components/ContactOptions';
import FAQ from '@/components/FAQ';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoHref } from '@/lib/site-config';
import { services, servicePath } from '@/lib/services';

export const metadata = buildMetadata({
  title: 'Contact Us — Request a Free Consultation',
  description:
    'Get in touch with Organic Orbit Digital to discuss website development, on-page SEO, social media marketing, Meta and Google Ads, or lead generation.',
  path: '/contact/',
});

const nextSteps = [
  {
    step: '01',
    title: 'We review your message carefully',
    text: 'Before replying, we review your website or social channels (if shared) and the goals you outlined.',
  },
  {
    step: '02',
    title: 'A clear, pressure-free conversation',
    text: 'We reply by email to answer initial questions or arrange a discovery call at a time that works for you.',
  },
  {
    step: '03',
    title: 'A tailored recommendation & scope',
    text: 'We share a practical recommendation outlining recommended priorities, deliverables, and next steps.',
  },
];

const contactFaqs = [
  {
    q: 'How does the free 30-minute consultation call work?',
    a: 'When you choose Option 1 above and select a time on our Calendly calendar, you receive an immediate calendar invitation with a Google Meet link. During the 30 minutes, we review your website, marketing channels, and goals with zero sales pressure and share practical recommendations.',
  },
  {
    q: 'What information helps you prepare a useful reply?',
    a: 'Sharing your website URL (if you have one), the main product or service you want to promote, and what success looks like over the next few months gives us helpful context right away.',
  },
  {
    q: 'Can I email your team directly instead of using the form?',
    a: 'Of course. You can write to contact@organicorbitdigital.com at any time with your questions or project brief.',
  },
  {
    q: 'What if I am not sure which service I need yet?',
    a: 'Select "Other / Not Sure Yet" in the service dropdown and describe the challenge you are trying to solve. We will help you identify the most sensible starting point.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Consultation"
        title="Let’s Discuss Your Goals and Digital Priorities"
        intro="Choose how you prefer to connect: book an instant 30-minute consultation on our live calendar, or send us a written project enquiry using our detailed form."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]}
      />

      <section className="section bg-mist" aria-labelledby="contact-section-heading">
        <div className="container-site">
          <h2 id="contact-section-heading" className="sr-only">
            Enquiry form and contact details
          </h2>

          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left column: Contact Options (Book Consultation & Send Message) */}
            <div className="lg:col-span-7">
              <ContactOptions />
            </div>

            {/* Right column: Direct Email, What Happens Next & Services */}
            <aside className="space-y-6 lg:col-span-5" aria-label="Direct contact information">
              <div className="card border-orbit-200 bg-gradient-to-br from-orbit-50/70 via-white to-organic-50/40 p-7 text-ink sm:p-8">
                <p className="eyebrow">Direct email</p>
                <h3 className="mt-2 text-xl font-bold text-ink">Prefer to write from your email client?</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  Reach our team directly at our official address below. Feel free to attach a brief or share links to
                  your current website.
                </p>
                <a
                  href={mailtoHref}
                  className="btn btn-primary mt-5 w-full text-sm"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>

              <div className="card p-7 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="h-5 w-5 text-orbit-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-ink">What happens next</h3>
                </div>
                <ol className="mt-5 space-y-5">
                  {nextSteps.map((item) => (
                    <li key={item.step} className="flex items-start gap-3.5">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orbit-50 font-display text-xs font-bold text-orbit-700">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card p-7">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-organic-600" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-ink">Services you can enquire about</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {services.map((s) => (
                    <li key={s.slug} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                      <Link href={servicePath(s.slug)} className="hover:text-orbit-600 hover:underline">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted">
                  <Clock className="h-4 w-4 shrink-0 text-orbit-600" aria-hidden="true" />
                  <span>We aim to respond to all business enquiries within 1–2 business days.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="contact-faq-heading">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="contact-faq-heading"
                eyebrow="Before you send"
                title="Questions about getting in touch"
                intro="Everything you need to know about starting a conversation with Organic Orbit Digital."
              />
            </div>
            <div className="lg:col-span-7">
              <FAQ items={contactFaqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
