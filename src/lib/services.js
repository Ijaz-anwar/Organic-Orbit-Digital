import {
  MonitorSmartphone,
  SearchCheck,
  Share2,
  Megaphone,
  Target,
  Magnet,
} from 'lucide-react';

/**
 * Official ordered service list (01 – 06) used across navigation, cards,
 * hero orbital nodes, contact form, and the footer.
 *
 * Order:
 * 01. Website Development
 * 02. Search Engine Optimization
 * 03. Social Media Management
 * 04. Meta Ads Management
 * 05. Google Ads Management
 * 06. Lead Generation for Business
 */
export const services = [
  {
    number: '01',
    slug: 'website-development',
    name: 'Website Development',
    navLabel: 'Website Development',
    navHint: 'Fast, conversion-focused websites',
    icon: MonitorSmartphone,
    accent: 'blue',
    description:
      'Create fast, responsive, modern websites designed to communicate brand value, improve user experience, and support business conversions.',
    features: [
      'Business websites & redesigns',
      'Campaign landing pages',
      'Mobile-first responsive design',
      'Website speed & Core Web Vitals optimization',
      'Conversion-focused user experiences',
    ],
    cta: 'Explore Website Development',
  },
  {
    number: '02',
    slug: 'search-engine-optimization',
    name: 'Search Engine Optimization',
    navLabel: 'Search Engine Optimization',
    navHint: 'On-page SEO, structure & search visibility',
    icon: SearchCheck,
    accent: 'teal',
    description:
      'Improve website structure, search intent relevance, content quality, and organic visibility through comprehensive search engine optimization.',
    features: [
      'Keyword research & search intent mapping',
      'Title tags, meta descriptions & headings',
      'On-page content optimization',
      'Internal linking & site architecture',
      'Image SEO, schema markup & technical checks',
    ],
    cta: 'Explore Search Engine Optimization',
  },
  {
    number: '03',
    slug: 'social-media-management',
    name: 'Social Media Management',
    navLabel: 'Social Media Management',
    navHint: 'Strategy, content calendars & community',
    icon: Share2,
    accent: 'green',
    description:
      'Build a consistent social presence, publish strategic content, strengthen brand recognition, and foster meaningful audience engagement.',
    features: [
      'Social media strategy & content pillars',
      'Monthly content planning & scheduling',
      'Platform-specific visuals & copy',
      'Profile optimization & community management',
      'Clear monthly performance reporting',
    ],
    cta: 'Explore Social Media Management',
  },
  {
    number: '04',
    slug: 'meta-ads-management',
    name: 'Meta Ads Management',
    navLabel: 'Meta Ads Management',
    navHint: 'Facebook & Instagram paid social campaigns',
    icon: Megaphone,
    accent: 'violet',
    description:
      'Reach and convert ideal audiences across Facebook and Instagram with targeted paid social campaigns, creative testing, and retargeting funnels.',
    features: [
      'Facebook & Instagram campaign strategy',
      'Custom, lookalike & interest audience targeting',
      'Ad creative planning & variation testing',
      'Meta Pixel & conversion tracking setup',
      'Retargeting campaigns & budget optimization',
    ],
    cta: 'Explore Meta Ads Management',
  },
  {
    number: '05',
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    navLabel: 'Google Ads Management',
    navHint: 'High-intent Google Search & PMax campaigns',
    icon: Target,
    accent: 'indigo',
    description:
      'Capture high-intent buyers at the exact moment they search on Google through structured Search, Performance Max, and remarketing campaigns.',
    features: [
      'Google Search & Performance Max strategy',
      'Commercial keyword & negative keyword research',
      'High-relevance ad copy & extensions',
      'Conversion tracking & bid optimization',
      'Transparent spend & enquiry reporting',
    ],
    cta: 'Explore Google Ads Management',
  },
  {
    number: '06',
    slug: 'lead-generation-for-business',
    name: 'Lead Generation for Business',
    navLabel: 'Lead Generation for Business',
    navHint: 'B2B & service funnels, capture & qualification',
    icon: Magnet,
    accent: 'amber',
    description:
      'Build targeted lead generation systems that help businesses attract qualified prospects and create a steadier pipeline of sales conversations.',
    features: [
      'Ideal customer profile & offer research',
      'Dedicated landing page optimization',
      'Qualifying lead capture forms',
      'Multi-channel campaign funnel planning',
      'Lead quality measurement & attribution',
    ],
    cta: 'Explore Lead Generation',
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function servicePath(slug) {
  return `/services/${slug}/`;
}

/** Tailwind class sets for each accent (kept static so Tailwind scans every class). */
export const accentStyles = {
  blue: {
    iconBg: 'bg-orbit-50 text-orbit-600 ring-orbit-100',
    badgeBg: 'bg-orbit-50 text-orbit-700 ring-orbit-100',
    glow: 'from-orbit-500/20',
    bar: 'from-orbit-600 to-orbit-400',
    text: 'text-orbit-600',
  },
  teal: {
    iconBg: 'bg-teal-50 text-teal-700 ring-teal-100',
    badgeBg: 'bg-teal-50 text-teal-700 ring-teal-100',
    glow: 'from-teal-500/20',
    bar: 'from-teal-500 to-orbit-500',
    text: 'text-teal-700',
  },
  green: {
    iconBg: 'bg-organic-50 text-organic-700 ring-organic-100',
    badgeBg: 'bg-organic-50 text-organic-700 ring-organic-100',
    glow: 'from-organic-500/20',
    bar: 'from-organic-500 to-organic-400',
    text: 'text-organic-700',
  },
  violet: {
    iconBg: 'bg-violet-50 text-violet-600 ring-violet-100',
    badgeBg: 'bg-violet-50 text-violet-700 ring-violet-100',
    glow: 'from-violet-500/20',
    bar: 'from-violet-500 to-orbit-500',
    text: 'text-violet-600',
  },
  indigo: {
    iconBg: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    badgeBg: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
    glow: 'from-indigo-500/20',
    bar: 'from-indigo-600 to-orbit-400',
    text: 'text-indigo-600',
  },
  amber: {
    iconBg: 'bg-amber-50 text-amber-700 ring-amber-100',
    badgeBg: 'bg-amber-50 text-amber-800 ring-amber-100',
    glow: 'from-amber-500/20',
    bar: 'from-amber-500 to-organic-500',
    text: 'text-amber-700',
  },
};
