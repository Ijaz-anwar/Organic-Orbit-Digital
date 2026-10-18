import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoHref } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how Organic Orbit Digital collects, uses, and protects personal information shared through our website and enquiry forms.',
  path: '/privacy-policy/',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        intro={`This Privacy Policy explains how ${siteConfig.name} handles personal information when you visit ${siteConfig.url} or contact our team.`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy/' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-site max-w-4xl">
          <div className="prose-site">
            <p>
              <strong>Last updated:</strong> February 2025
            </p>
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is
              committed to handling personal information transparently and responsibly. This policy outlines what
              information we collect through <a href={siteConfig.url}>{siteConfig.url}</a>, how we use it, and the
              choices available to you.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We only collect personal information that is relevant to operating our website and responding to enquiries:</p>
            <ul>
              <li>
                <strong>Enquiry information you provide voluntarily:</strong> When you submit our contact form or email
                us at <a href={mailtoHref}>{siteConfig.email}</a>, you may share your full name, business email
                address, company name or website URL, service of interest, estimated budget range, and project details.
              </li>
              <li>
                <strong>Basic technical log data:</strong> Like most websites, our hosting server may record standard
                request data such as IP address, browser type, referring page, and date/time of access for security and
                reliability purposes.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Review and respond to your enquiry or consultation request;</li>
              <li>Prepare relevant project scopes, proposals, or recommendations;</li>
              <li>Communicate with you regarding services you have asked about;</li>
              <li>Maintain the security, performance, and reliability of our website; and</li>
              <li>Comply with applicable legal or regulatory obligations.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal contact details to third-party data brokers
              or unrelated advertisers.
            </p>

            <h2>3. Form Delivery &amp; Third-Party Service Providers</h2>
            <p>
              When you contact us through our online enquiry form or via email, your message may be transmitted or
              stored using reputable email and form-processing providers strictly for the purpose of delivering your
              message to our team. Each provider processes data only as required to deliver the service.
            </p>

            <h2>4. Cookies &amp; Analytics</h2>
            <p>
              Our website is designed to function without intrusive tracking. If analytics tools are enabled in the
              future to understand aggregate page traffic, they are used solely to improve website clarity and user
              experience. You can control or block cookies at any time through your browser settings.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain enquiry correspondence only for as long as reasonably necessary to respond to your request,
              maintain business records if we work together, or meet applicable legal and accounting requirements.
            </p>

            <h2>6. Your Privacy Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access to the personal information we
              hold about you, ask us to correct inaccurate details, withdraw consent, or request deletion of your
              enquiry data. To exercise any of these rights, email us at{' '}
              <a href={mailtoHref}>{siteConfig.email}</a>.
            </p>

            <h2>7. External Links</h2>
            <p>
              Pages on our website may link to external websites or platforms. We are not responsible for the privacy
              practices or content of external websites and encourage you to review their respective privacy policies.
            </p>

            <h2>8. Contact Us About Privacy</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your information, please contact{' '}
              {siteConfig.name} at <a href={mailtoHref}>{siteConfig.email}</a> or visit our{' '}
              <Link href="/contact/">Contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
