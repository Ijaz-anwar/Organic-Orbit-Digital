import { absoluteUrl } from '@/lib/seo';
import { services, servicePath } from '@/lib/services';
import { getAllPosts } from '@/lib/blog';

export const dynamic = 'force-static';

const LAST_MODIFIED = '2025-02-24';

/**
 * Generates /sitemap.xml at build time.
 * Only indexable canonical URLs on https://organicorbitdigital.com are included
 * (non-indexable pages such as /thank-you/ are intentionally excluded).
 */
export default function sitemap() {
  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog/', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/privacy-policy/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-and-conditions/', priority: 0.3, changeFrequency: 'yearly' },
  ].map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: LAST_MODIFIED,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const servicePages = services.map((s) => ({
    url: absoluteUrl(servicePath(s.slug)),
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}/`),
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
