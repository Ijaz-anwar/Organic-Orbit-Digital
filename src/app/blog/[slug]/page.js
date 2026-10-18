import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, ArrowRight, ListChecks } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { buildMetadata, blogPostingSchema } from '@/lib/seo';
import { getService, servicePath } from '@/lib/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    type: 'article',
    image: post.image,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  });
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedServices = (post.relatedServices || [])
    .map((s) => getService(s))
    .filter(Boolean);

  const otherPosts = getAllPosts().filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-orbit-600" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </PageHero>

      <article className="section bg-white">
        <div className="container-site">
          {/* Featured illustration */}
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-mist shadow-[var(--shadow-card)]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={630}
              className="max-h-[28rem] w-full object-cover"
            />
          </div>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
            {/* Sidebar: Table of Contents + Related Services */}
            <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-28" aria-label="Table of contents">
              <nav className="card bg-mist p-6" aria-labelledby="toc-heading">
                <p id="toc-heading" className="font-display text-xs font-bold tracking-wider text-ink uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {post.sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="block text-slate-700 transition-colors hover:text-orbit-600"
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {relatedServices.length > 0 && (
                <div className="card p-6">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-orbit-600 uppercase">
                    <ListChecks className="h-4 w-4" aria-hidden="true" />
                    Related services
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    {relatedServices.map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={servicePath(svc.slug)}
                          className="group flex items-center justify-between font-medium text-ink hover:text-orbit-600"
                        >
                          <span>{svc.name}</span>
                          <ArrowRight
                            className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-orbit-600"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>

            {/* Article body */}
            <div className="prose-site lg:col-span-8">
              {post.sections.map((sec) => (
                <section key={sec.id} aria-labelledby={sec.id}>
                  <h2 id={sec.id}>{sec.heading}</h2>
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* In-article service links callout */}
              {relatedServices.length > 0 && (
                <div className="not-prose mt-12 rounded-2xl border border-line bg-mist p-7">
                  <h3 className="text-xl font-bold text-ink">
                    Explore the services discussed in this guide
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    See how Organic Orbit Digital plans and delivers each of these channels:
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {relatedServices.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={servicePath(svc.slug)}
                        className="btn btn-outline min-h-10 px-4 py-2 text-sm"
                      >
                        {svc.name}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="section bg-mist" aria-labelledby="more-articles-heading">
          <div className="container-site">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="more-articles-heading" className="text-2xl font-bold text-ink sm:text-3xl">
                More articles from Organic Orbit Digital
              </h2>
              <Link href="/blog/" className="link-underline text-sm">
                View all articles →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {otherPosts.map((rel) => (
                <article key={rel.slug} className="card flex flex-col justify-between p-7">
                  <div>
                    <span className="rounded-full bg-orbit-50 px-3 py-1 text-xs font-semibold text-orbit-700">
                      {rel.category}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      <Link href={`/blog/${rel.slug}/`} className="hover:text-orbit-600">
                        {rel.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{rel.excerpt}</p>
                  </div>
                  <div className="mt-6 pt-4">
                    <Link
                      href={`/blog/${rel.slug}/`}
                      className="link-underline inline-flex items-center gap-1.5 text-sm"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
