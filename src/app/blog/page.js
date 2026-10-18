import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';
import { getService, servicePath } from '@/lib/services';

export const metadata = buildMetadata({
  title: 'Digital Marketing & Web Development Blog',
  description:
    'Practical guides and insights from Organic Orbit Digital on website development, on-page SEO, Meta Ads, Google Ads, social media marketing, and lead generation.',
  path: '/blog/',
});

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogOverviewPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights & Guides"
        title="Practical Articles on Websites, Search, Social, and Paid Media"
        intro="Clear, jargon-free guides written for business owners and marketing teams who want their digital channels to work together."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
        ]}
      />

      <section className="section bg-mist" aria-labelledby="featured-articles-heading">
        <div className="container-site">
          <SectionHeading
            id="featured-articles-heading"
            eyebrow="Latest articles"
            title="Read our guides on connected digital growth"
            intro="Every article focuses on practical strategy you can apply to your website, search presence, or campaigns."
          />

          {/* Featured post */}
          {featured && (
            <article className="card mt-12 overflow-hidden lg:grid lg:grid-cols-12">
              <div className="relative bg-mist lg:col-span-6">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  width={960}
                  height={540}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-orbit-50 px-3 py-1 font-semibold text-orbit-700">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl leading-snug font-bold text-ink sm:text-3xl">
                    <Link href={`/blog/${featured.slug}/`} className="hover:text-orbit-600">
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{featured.excerpt}</p>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                  <Link
                    href={`/blog/${featured.slug}/`}
                    className="link-underline inline-flex items-center gap-1.5 text-sm"
                  >
                    Read full article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {featured.relatedServices?.slice(0, 2).map((slug) => {
                      const svc = getService(slug);
                      return svc ? (
                        <Link
                          key={slug}
                          href={servicePath(slug)}
                          className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-slate-700 hover:border-orbit-300 hover:text-orbit-700"
                        >
                          {svc.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Remaining posts */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <article key={post.slug} className="card flex flex-col overflow-hidden">
                <div className="relative bg-mist">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={960}
                    height={540}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="rounded-full bg-orbit-50 px-3 py-1 font-semibold text-orbit-700">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl leading-snug font-bold text-ink sm:text-2xl">
                      <Link href={`/blog/${post.slug}/`} className="hover:text-orbit-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="link-underline inline-flex items-center gap-1.5 text-sm"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question about applying these ideas to your business?"
        text="Share your goals with our team and we will help you turn strategy into a practical plan."
      />
    </>
  );
}
