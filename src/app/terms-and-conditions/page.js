import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, mailtoHref } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'Terms and Conditions',
  description:
    'Terms and Conditions governing the use of the Organic Orbit Digital website and general terms for enquiries and digital marketing services.',
  path: '/terms-and-conditions/',
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        intro={`Please read these Terms and Conditions carefully before using ${siteConfig.url}.`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms and Conditions', path: '/terms-and-conditions/' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-site max-w-4xl">
          <div className="prose-site">
            <p>
              <strong>Last updated:</strong> February 2025
            </p>
            <p>
              These Terms and Conditions govern your access to and use of the website located at{' '}
              <a href={siteConfig.url}>{siteConfig.url}</a>, operated by {siteConfig.name} (&ldquo;we&rdquo;,
              &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing or using this website, you agree to these terms.
            </p>

            <h2>1. Website Use</h2>
            <p>
              The content on this website is provided for general information about our digital marketing and website
              development services. You agree to use the website only for lawful purposes and in a way that does not
              infringe the rights of, or restrict the use of this website by, any third party.
            </p>

            <h2>2. Proposals &amp; Client Engagements</h2>
            <p>
              Submitting an enquiry through our website or by email does not create a client relationship or binding
              contract. Any digital marketing, SEO, advertising, or website development services provided by{' '}
              {siteConfig.name} are governed by a separate written scope of work or service agreement agreed between
              both parties.
            </p>

            <h2>3. No Guaranteed Rankings or Financial Outcomes</h2>
            <p>
              Search engine algorithms, advertising auctions, social media platform policies, competitor activity, and
              market demand are controlled by third parties and external conditions. Accordingly, while we commit to
              professional strategy, quality execution, and transparent reporting, {siteConfig.name} does not guarantee
              specific search engine ranking positions, lead volumes, or financial return on investment.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the branding, logo, original copy, graphics, and design elements on this website
              are the intellectual property of {siteConfig.name}. You may view and print pages for your own internal
              business evaluation, but you must not reproduce, republish, or redistribute our website content or brand
              identity for commercial purposes without prior written permission.
            </p>

            <h2>5. Accuracy of Information &amp; Third-Party Platforms</h2>
            <p>
              We make reasonable efforts to keep information on this website accurate and up to date, but we make no
              warranties or representations of any kind—express or implied—about the completeness or suitability of the
              information for your particular circumstances. References to third-party platforms such as Google, Meta,
              Facebook, Instagram, or LinkedIn are for descriptive purposes only; all third-party trademarks belong to
              their respective owners.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {siteConfig.name} shall not be liable for any indirect,
              incidental, or consequential loss or damage arising out of or in connection with the use of, or inability
              to use, this website or reliance on general educational material published on our blog.
            </p>

            <h2>7. Updates to These Terms</h2>
            <p>
              We may revise these Terms and Conditions from time to time by updating this page. The updated version will
              apply from the date of publication.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              Questions regarding these Terms and Conditions may be sent to{' '}
              <a href={mailtoHref}>{siteConfig.email}</a> or submitted through our{' '}
              <Link href="/contact/">Contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
