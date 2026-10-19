import { notFound } from 'next/navigation';
import AboutPage, { metadata as aboutMeta } from '@/app/about/page';
import ServicesOverviewPage, { metadata as servicesMeta } from '@/app/services/page';
import ContactPage, { metadata as contactMeta } from '@/app/contact/page';
import BlogOverviewPage, { metadata as blogMeta } from '@/app/blog/page';
import BlogArticlePage from '@/app/blog/[slug]/page';
import PrivacyPolicyPage, { metadata as privacyMeta } from '@/app/privacy-policy/page';
import TermsAndConditionsPage, { metadata as termsMeta } from '@/app/terms-and-conditions/page';
import ThankYouPage, { metadata as thankYouMeta } from '@/app/thank-you/page';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services } from '@/lib/services';
import { getServiceContent } from '@/lib/service-content';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

const LANGS = {
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  ur: 'اردو',
};

const SUB_ROUTES = [
  ['about'],
  ['services'],
  ...services.map((s) => ['services', s.slug]),
  ['contact'],
  ['blog'],
  ...getAllPosts().map((p) => ['blog', p.slug]),
  ['privacy-policy'],
  ['terms-and-conditions'],
  ['thank-you'],
];

export const dynamicParams = false;

export function generateStaticParams() {
  const params = [];
  for (const lang of Object.keys(LANGS)) {
    for (const slug of SUB_ROUTES) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, slug = [] } = await params;
  const langName = LANGS[lang];
  if (!langName) return {};

  const relPath = slug.join('/');
  const fullPath = `/${lang}/${relPath}/`;
  const tag = `(${lang.toUpperCase()})`;

  if (relPath === 'about') {
    return buildMetadata({
      title: `${aboutMeta.title} ${tag}`,
      description: `${aboutMeta.description} [${langName}]`,
      path: fullPath,
    });
  }
  if (relPath === 'services') {
    return buildMetadata({
      title: `${servicesMeta.title} ${tag}`,
      description: `${servicesMeta.description} [${langName}]`,
      path: fullPath,
    });
  }
  if (slug[0] === 'services' && slug[1]) {
    const content = getServiceContent(slug[1]);
    if (!content) return {};
    return buildMetadata({
      title: `${content.metaTitle} ${tag}`,
      description: `${content.metaDescription} [${langName}]`,
      path: fullPath,
    });
  }
  if (relPath === 'contact') {
    return buildMetadata({
      title: `${contactMeta.title} ${tag}`,
      description: `${contactMeta.description} [${langName}]`,
      path: fullPath,
    });
  }
  if (relPath === 'blog') {
    return buildMetadata({
      title: `${blogMeta.title} ${tag}`,
      description: `${blogMeta.description} [${langName}]`,
      path: fullPath,
    });
  }
  if (slug[0] === 'blog' && slug[1]) {
    const post = getPostBySlug(slug[1]);
    if (!post) return {};
    return buildMetadata({
      title: `${post.title} ${tag}`,
      description: `${post.excerpt} [${langName}]`,
      path: fullPath,
      type: 'article',
      image: post.image,
    });
  }
  if (relPath === 'privacy-policy') {
    return buildMetadata({
      title: `${privacyMeta.title} ${tag}`,
      description: `${privacyMeta.description} [${langName}]`,
      path: fullPath,
    });
  }
  if (relPath === 'terms-and-conditions') {
    return buildMetadata({
      title: `${termsMeta.title} ${tag}`,
      description: `${termsMeta.description} [${langName}]`,
      path: fullPath,
    });
  }
  if (relPath === 'thank-you') {
    return buildMetadata({
      title: `${thankYouMeta.title} ${tag}`,
      description: `${thankYouMeta.description} [${langName}]`,
      path: fullPath,
      noIndex: true,
    });
  }

  return {};
}

export default async function LocalizedSubPage({ params }) {
  const { lang, slug = [] } = await params;
  if (!LANGS[lang]) notFound();

  const relPath = slug.join('/');

  if (relPath === 'about') return <AboutPage />;
  if (relPath === 'services') return <ServicesOverviewPage />;
  if (slug[0] === 'services' && slug[1]) {
    const exists = services.some((s) => s.slug === slug[1]);
    if (!exists) notFound();
    return <ServicePageTemplate slug={slug[1]} />;
  }
  if (relPath === 'contact') return <ContactPage />;
  if (relPath === 'blog') return <BlogOverviewPage />;
  if (slug[0] === 'blog' && slug[1]) {
    return <BlogArticlePage params={Promise.resolve({ slug: slug[1] })} />;
  }
  if (relPath === 'privacy-policy') return <PrivacyPolicyPage />;
  if (relPath === 'terms-and-conditions') return <TermsAndConditionsPage />;
  if (relPath === 'thank-you') return <ThankYouPage />;

  notFound();
}
