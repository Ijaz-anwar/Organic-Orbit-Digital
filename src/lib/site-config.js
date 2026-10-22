/**
 * Central brand & site configuration.
 * Edit values here to update them everywhere on the website.
 *
 * Only add VERIFIED business information. Fields left empty are simply not
 * rendered (e.g. social links), so nothing is ever invented on the site.
 */

export const siteConfig = {
  name: 'Organic Orbit Digital',
  shortName: 'Organic Orbit',
  url: 'https://organicorbitdigital.com',
  email: 'contact@organicorbitdigital.com',
  locale: 'en_US',
  language: 'en',
  tagline: 'Digital Marketing & Web Development',
  description:
    'Grow your online presence with Organic Orbit Digital: Website Development, Search Engine Optimization, Social Media Management, Meta Ads, Google Ads, and Lead Generation for Business.',
  shortDescription:
    'A digital marketing and web development agency helping businesses connect their websites, search, social and advertising into one growth-focused system.',
  announcement: 'Helping businesses build a stronger, more connected online presence.',
  ogImage: '/og-image.png',
  logo: '/logo.svg',
  calendlyUrl: 'https://calendly.com/ijazansari781/free-business-consultation',

  /**
   * Social profiles. Add the full URL ONLY when the profile actually exists.
   * Empty values are hidden from the footer and from structured data.
   */
  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
    youtube: '',
  },
};

/** Primary navigation (Services dropdown is built from the service list). */
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/', hasDropdown: true },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
];

/**
 * Budget ranges shown in the contact form (optional field).
 * Edit freely — values are sent to your inbox exactly as written.
 */
export const budgetRanges = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Not sure yet',
];

export const mailtoHref = `mailto:${siteConfig.email}`;

/** Returns only the social profiles that have a real URL configured. */
export function getActiveSocialLinks() {
  const labels = {
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    facebook: 'Facebook',
    x: 'X (Twitter)',
    youtube: 'YouTube',
  };
  return Object.entries(siteConfig.social)
    .filter(([, url]) => typeof url === 'string' && url.startsWith('https://'))
    .map(([key, url]) => ({ key, label: labels[key] ?? key, url }));
}
