/**
 * Portfolio configuration.
 *
 * IMPORTANT: Never add invented clients, fabricated metrics, or fake
 * testimonials here. Until verified client case studies are added to
 * `projects`, the website displays an honest "Our portfolio is growing"
 * state alongside clearly labelled illustrative concept blueprints that show
 * how we structure engagements.
 */

export const projects = [];

/**
 * Clearly marked illustrative concepts showing how Organic Orbit Digital
 * approaches common project types across our 6 core services.
 */
export const conceptBlueprints = [
  {
    id: 'concept-service-website',
    label: 'Illustrative Concept · 01 Website + 02 SEO',
    title: 'B2B Service Website & Search Foundation',
    scenario:
      'For established service businesses whose existing website no longer reflects their expertise or generates consistent organic enquiries.',
    scope: [
      'Service architecture mapped to buyer questions and search intent',
      'Fast, mobile-first pages with clear calls to action',
      'Search Engine Optimization foundations: metadata, internal linking, and schema markup',
      'Direct enquiry routing with source attribution',
    ],
    relatedSlug: 'website-development',
  },
  {
    id: 'concept-demand-capture',
    label: 'Illustrative Concept · 05 Google Ads + 06 Lead Generation',
    title: 'High-Intent Search & Conversion Funnel',
    scenario:
      'For businesses ready to capture active demand on Google Search and convert clicks into qualified sales conversations.',
    scope: [
      'Commercial keyword and negative keyword research for Google Search',
      'Dedicated landing pages aligned to each ad group promise',
      'Lead capture forms balanced for completion and qualification',
      'End-to-end conversion tracking in the client’s own ad accounts',
    ],
    relatedSlug: 'google-ads-management',
  },
  {
    id: 'concept-brand-ecosystem',
    label: 'Illustrative Concept · 03 Social Media + 04 Meta Ads',
    title: 'Coordinated Brand Presence & Paid Social Growth',
    scenario:
      'For growing brands that need consistent organic social management paired with targeted Facebook and Instagram campaigns.',
    scope: [
      'Platform-specific content pillars and monthly publishing calendar',
      'Visual templates and short-form content direction',
      'Meta Ads prospecting and website retargeting structure',
      'Clear monthly reporting tied to traffic and enquiry goals',
    ],
    relatedSlug: 'social-media-management',
  },
];
