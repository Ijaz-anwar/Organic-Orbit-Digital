/**
 * Portfolio configuration.
 *
 * IMPORTANT: Never add invented clients, fabricated metrics, or fake
 * testimonials here. Until verified client case studies are added to
 * `projects`, the website displays an honest "Our portfolio is growing"
 * state alongside clearly labelled illustrative concept blueprints that show
 * how we structure engagements.
 *
 * To publish a real project later, add an object to `projects`:
 * {
 *   slug: 'example-client',
 *   client: 'Verified Client Name',
 *   industry: 'Ecommerce',
 *   summary: 'Short factual summary of the work delivered.',
 *   services: ['Website Development', 'On-Page SEO'],
 *   image: '/images/portfolio/example.webp',
 *   url: 'https://...', // optional
 * }
 */

export const projects = [];

/**
 * Clearly marked illustrative concepts showing how Organic Orbit Digital
 * approaches common project types. Rendered only as "Illustrative Concept"
 * blueprints — never as past client work.
 */
export const conceptBlueprints = [
  {
    id: 'concept-service-website',
    label: 'Illustrative Concept · Website + On-Page SEO',
    title: 'B2B Service Website & Search Foundation',
    scenario:
      'For established service businesses whose existing website no longer reflects their expertise or generates consistent enquiries.',
    scope: [
      'Service architecture mapped to buyer questions and search intent',
      'Fast, mobile-first pages with clear calls to action',
      'On-page SEO foundations: metadata, internal linking, and schema markup',
      'Direct enquiry routing with source attribution',
    ],
    relatedSlug: 'website-development',
  },
  {
    id: 'concept-demand-capture',
    label: 'Illustrative Concept · Paid Search + Landing Pages',
    title: 'High-Intent Search & Conversion Funnel',
    scenario:
      'For businesses ready to capture active demand on Google Search and convert clicks into qualified sales conversations.',
    scope: [
      'Keyword research focused on commercial and service-intent queries',
      'Dedicated landing pages aligned to each ad group promise',
      'Lead capture forms balanced for completion and qualification',
      'End-to-end conversion tracking in the client’s own ad accounts',
    ],
    relatedSlug: 'meta-google-ads',
  },
  {
    id: 'concept-brand-ecosystem',
    label: 'Illustrative Concept · Social + Paid Social',
    title: 'Coordinated Brand Presence & Audience Growth',
    scenario:
      'For growing brands that need consistent organic content paired with targeted Meta campaigns to reach new audiences.',
    scope: [
      'Platform-specific content pillars and monthly publishing calendar',
      'Visual templates and short-form content direction',
      'Meta Ads prospecting and website retargeting structure',
      'Clear monthly reporting tied to traffic and enquiry goals',
    ],
    relatedSlug: 'social-media-marketing',
  },
];
