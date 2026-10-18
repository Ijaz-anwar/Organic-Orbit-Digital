import { Share2, MonitorSmartphone, Megaphone, Magnet, SearchCheck } from 'lucide-react';

/**
 * Lightweight service list used by navigation, cards and the footer.
 * Detailed page content lives in `service-content.js` so it is never shipped
 * to the browser inside client components (e.g. the header menu).
 *
 * `accent` maps to a colour treatment in ServiceCard / service pages.
 */
export const services = [
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    navLabel: 'Social Media Marketing',
    navHint: 'Strategy, content & community',
    icon: Share2,
    accent: 'blue',
    description:
      'Build a consistent social presence, publish strategic content, strengthen brand awareness, and encourage meaningful audience engagement.',
    features: [
      'Social media strategy',
      'Content planning',
      'Platform-specific campaigns',
      'Community engagement',
      'Performance reporting',
    ],
    cta: 'Explore Social Media Marketing',
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    navLabel: 'Website Development',
    navHint: 'Fast, conversion-focused websites',
    icon: MonitorSmartphone,
    accent: 'green',
    description:
      'Create fast, responsive, modern websites designed to communicate brand value, improve user experience, and support business conversions.',
    features: [
      'Business websites',
      'Landing pages',
      'Responsive web design',
      'Website performance optimization',
      'Conversion-focused user experiences',
    ],
    cta: 'Explore Website Development',
  },
  {
    slug: 'meta-google-ads',
    name: 'Meta Ads & Google Ads',
    navLabel: 'Meta Ads & Google Ads',
    navHint: 'Paid social & paid search',
    icon: Megaphone,
    accent: 'violet',
    description:
      'Reach relevant audiences through strategic advertising campaigns on Facebook, Instagram, Google Search, and other appropriate placements.',
    features: [
      'Campaign strategy',
      'Audience and keyword research',
      'Ad creative planning',
      'Campaign optimization',
      'Conversion tracking and reporting',
    ],
    splitNote: {
      meta: 'Meta Ads: paid social on Facebook & Instagram to build demand.',
      google: 'Google Ads: paid search to capture existing demand.',
    },
    cta: 'Explore Paid Advertising',
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    navLabel: 'Lead Generation',
    navHint: 'Funnels, forms & qualification',
    icon: Magnet,
    accent: 'amber',
    description:
      'Build targeted lead generation strategies that help businesses attract relevant prospects and create more opportunities for sales conversations.',
    features: [
      'Target audience research',
      'Landing page optimization',
      'Lead capture forms',
      'Campaign funnel planning',
      'Lead quality measurement',
    ],
    cta: 'Explore Lead Generation',
  },
  {
    slug: 'on-page-seo',
    name: 'On-Page SEO',
    navLabel: 'On-Page SEO',
    navHint: 'Relevance, structure & visibility',
    icon: SearchCheck,
    accent: 'teal',
    description:
      'Improve website structure, relevance, content quality, and search visibility through search-engine-friendly on-page optimization.',
    features: [
      'Keyword research and mapping',
      'Title tags and meta descriptions',
      'Heading structure',
      'Content optimization',
      'Internal linking',
      'Image alt text',
      'Structured data and technical checks',
    ],
    cta: 'Explore On-Page SEO',
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function servicePath(slug) {
  return `/services/${slug}/`;
}

/** Tailwind class sets for each accent (kept here so classes are static). */
export const accentStyles = {
  blue: {
    iconBg: 'bg-orbit-50 text-orbit-600 ring-orbit-100',
    glow: 'from-orbit-500/20',
    bar: 'from-orbit-500 to-orbit-400',
    text: 'text-orbit-600',
    darkIcon: 'bg-orbit-500/15 text-orbit-300 ring-orbit-400/30',
  },
  green: {
    iconBg: 'bg-organic-50 text-organic-700 ring-organic-100',
    glow: 'from-organic-500/20',
    bar: 'from-organic-500 to-organic-400',
    text: 'text-organic-700',
    darkIcon: 'bg-organic-500/15 text-organic-300 ring-organic-400/30',
  },
  violet: {
    iconBg: 'bg-violet-50 text-violet-600 ring-violet-100',
    glow: 'from-violet-500/20',
    bar: 'from-violet-500 to-orbit-500',
    text: 'text-violet-600',
    darkIcon: 'bg-violet-500/15 text-violet-300 ring-violet-400/30',
  },
  amber: {
    iconBg: 'bg-amber-50 text-amber-700 ring-amber-100',
    glow: 'from-amber-500/20',
    bar: 'from-amber-500 to-organic-500',
    text: 'text-amber-700',
    darkIcon: 'bg-amber-500/15 text-amber-300 ring-amber-400/30',
  },
  teal: {
    iconBg: 'bg-teal-50 text-teal-700 ring-teal-100',
    glow: 'from-teal-500/20',
    bar: 'from-teal-500 to-orbit-500',
    text: 'text-teal-700',
    darkIcon: 'bg-teal-500/15 text-teal-300 ring-teal-400/30',
  },
};
