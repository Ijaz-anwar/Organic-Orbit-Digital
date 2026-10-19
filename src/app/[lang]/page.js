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
    title: `Web Development and Digital Marketing Services for Business Growth (${lang.toUpperCase()})`,
    description: `Discover professional web development and digital marketing services, including website design, SEO, social media marketing, PPC advertising, and lead generation to grow your business online. [${langName}]`,
    path: `/${lang}/`,
    absoluteTitle: true,
  });
}

export default async function LocalizedHomePage({ params }) {
  const { lang } = await params;
  if (!LANGS[lang]) notFound();
  return <HomePage />;
}
