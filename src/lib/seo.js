import { siteConfig, getActiveSocialLinks } from './site-config';

/**
 * Normalises a site path so it always matches the exported URL format
 * (leading slash + trailing slash, because next.config uses trailingSlash: true).
 */
export function normalizePath(path = '/') {
  if (!path || path === '/') return '/';
  let p = path.startsWith('/') ? path : `/${path}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return p;
}

/** Absolute canonical URL on the production domain. */
export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${normalizePath(path)}`;
}

/**
 * Builds a complete, consistent Metadata object for a page.
 *
 * @param {object} opts
 * @param {string} opts.title        Page title (template appends brand name)
 * @param {string} opts.description  Unique meta description
 * @param {string} opts.path         Route path, e.g. '/about/'
 * @param {boolean} [opts.absoluteTitle] Use title as-is (no template)
 * @param {boolean} [opts.noIndex]   Exclude page from search engines
 * @param {string} [opts.type]       Open Graph type ('website' | 'article')
 * @param {string} [opts.image]      Optional page specific OG image path
 * @param {object} [opts.article]    { publishedTime, modifiedTime } for posts
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  absoluteTitle = false,
  noIndex = false,
  type = 'website',
  image,
  article,
}) {
  const url = absoluteUrl(path);
  const ogImage = image ?? siteConfig.ogImage;
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  const metadata = {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
      ...(article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            authors: [siteConfig.name],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };

  if (noIndex) {
    metadata.robots = { index: false, follow: true };
  }

  return metadata;
}

/* ------------------------------------------------------------------------ */
/* JSON-LD structured data builders                                          */
/* Only verifiable facts are included — no address, phone, ratings or prices */
/* ------------------------------------------------------------------------ */

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  const sameAs = getActiveSocialLinks().map((s) => s.url);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo-512.png`,
      width: 512,
      height: 512,
    },
    email: siteConfig.email,
    description: siteConfig.shortDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: ['English'],
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: siteConfig.language,
    publisher: { '@id': ORG_ID },
  };
}

/** @param {{name: string, path: string}[]} items  Ordered breadcrumb trail */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    serviceType: serviceType ?? name,
    description,
    url: absoluteUrl(path),
    provider: { '@id': ORG_ID, '@type': 'Organization', name: siteConfig.name },
  };
}

export function blogPostingSchema(post) {
  const url = absoluteUrl(`/blog/${post.slug}/`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: url,
    url,
    ...(post.image ? { image: `${siteConfig.url}${post.image}` } : {}),
    inLanguage: siteConfig.language,
    author: { '@type': 'Organization', name: siteConfig.name, url: `${siteConfig.url}/` },
    publisher: { '@id': ORG_ID },
  };
}
