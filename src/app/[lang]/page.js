import { notFound } from 'next/navigation';
import HomePage from '@/app/page';
import { buildMetadata } from '@/lib/seo';

const LANGS = {
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  ur: 'اردو',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(LANGS).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const langName = LANGS[lang];
  if (!langName) return {};
  return buildMetadata({
    title: `Organic Orbit Digital (${lang.toUpperCase()}) | Digital Marketing & Web Development`,
    description: `Grow your online presence with Organic Orbit Digital (${langName}): Website Development, Search Engine Optimization, Social Media Management, Meta Ads, Google Ads, and Lead Generation for Business.`,
    path: `/${lang}/`,
    absoluteTitle: true,
  });
}

export default async function LocalizedHomePage({ params }) {
  const { lang } = await params;
  if (!LANGS[lang]) notFound();
  return <HomePage />;
}
