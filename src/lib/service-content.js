/**
 * Detailed content for each of the 6 ordered service pages:
 * 01. website-development          — Website Development
 * 02. search-engine-optimization   — Search Engine Optimization
 * 03. social-media-management      — Social Media Management
 * 04. meta-ads-management          — Meta Ads Management
 * 05. google-ads-management        — Google Ads Management
 * 06. lead-generation-for-business — Lead Generation for Business
 */

export const serviceContent = {
  /* --------------------------------------------------------------------- */
  /* 01. Website Development                                               */
  /* --------------------------------------------------------------------- */
  'website-development': {
    metaTitle: 'Website Development Services',
    metaDescription:
      'Website development services for fast, responsive, conversion-focused business websites and landing pages, designed around your brand, your visitors and search visibility.',
    hero: {
      eyebrow: '01 · Website Development',
      title: 'Websites Built to Communicate Clearly and Turn Visitors Into Enquiries',
      intro:
        'Your website is often the first serious conversation a prospect has with your business. We design and build fast, responsive websites that explain your value quickly and make it easy for the right people to take the next step.',
    },
    overview: {
      heading: 'More than a good-looking homepage',
      paragraphs: [
        'A website has several jobs at once. It must load quickly on mobile, explain what you do within seconds, answer the questions buyers have, build confidence and guide visitors toward an action: a call, an enquiry, a booking or a purchase. When one of those jobs fails, attractive design alone will not fix it.',
        'Our website development process combines messaging, user experience, visual design and technical build. We map the pages your visitors need, structure content around the decisions they are making, and develop with performance, accessibility and search engines in mind from the first line of code.',
        'Whether you need a new business website, a focused landing page for a campaign or improvements to an existing site, the goal is a website that is easy to maintain and ready to support the rest of your marketing.',
      ],
    },
    problems: {
      heading: 'Website problems that quietly cost you enquiries',
      items: [
        {
          title: 'Slow or awkward on mobile',
          text: 'Heavy pages and layouts designed only for desktop frustrate the visitors most likely to leave quickly.',
        },
        {
          title: 'The offer is unclear',
          text: 'If visitors cannot tell what you do, who it is for and why you are different, they move on to a competitor.',
        },
        {
          title: 'Traffic, but few enquiries',
          text: 'Weak calls to action, long forms or missing trust signals can stop interested visitors from getting in touch.',
        },
        {
          title: 'Hard to update or grow',
          text: 'Sites that need a developer for every small change slow your marketing down and go stale.',
        },
      ],
    },
    spotlight: {
      variant: 'checklist',
      heading: 'Included in every website we build',
      intro: 'Each project is scoped individually, but these foundations are part of every build:',
      items: [
        'Mobile-first, responsive layouts',
        'Clear page structure and navigation',
        'Optimised images and minimal scripts',
        'Accessible contrast, labels and keyboard support',
        'SEO foundations: metadata, headings, sitemap, clean URLs',
        'Clear calls to action on every key page',
        'Contact forms connected to a real delivery method',
        'Analytics-ready setup using your own accounts',
      ],
    },
    deliverables: [
      {
        title: 'Discovery & sitemap',
        text: 'A page plan based on your services, your audience’s questions and your business goals.',
      },
      {
        title: 'Wireframes & visual design',
        text: 'Layouts and visual design aligned with your brand, reviewed with you before development begins.',
      },
      {
        title: 'Responsive development',
        text: 'A website built to work smoothly across phones, tablets and desktops.',
      },
      {
        title: 'Landing pages',
        text: 'Focused, single-goal pages for campaigns, offers or lead generation.',
      },
      {
        title: 'Performance optimisation',
        text: 'Image optimisation, efficient code and sensible loading strategies to improve speed.',
      },
      {
        title: 'Launch & handover',
        text: 'Pre-launch testing, deployment support and guidance on updating your own content.',
      },
    ],
    process: [
      { title: 'Discover', text: 'Clarify goals, audience, competitors and the content you have.' },
      { title: 'Plan & design', text: 'Agree the sitemap, wireframes and visual direction.' },
      { title: 'Build & test', text: 'Develop, add content and test across devices and browsers.' },
      { title: 'Launch & improve', text: 'Go live, check tracking and refine based on real usage.' },
    ],
    benefits: [
      {
        title: 'A stronger first impression',
        text: 'A modern, coherent design signals that your business is credible and cares about quality.',
      },
      {
        title: 'A faster, smoother experience',
        text: 'Performance improvements reduce frustration, especially for mobile visitors on slower connections.',
      },
      {
        title: 'A clearer path to enquiry',
        text: 'Well-placed calls to action and simple forms make it easier for interested visitors to reach you.',
      },
      {
        title: 'A solid base for marketing',
        text: 'SEO, ads and social campaigns all work better when they send people to a well-structured website.',
      },
    ],
    suitableFor: [
      'New businesses and startups that need a credible first website.',
      'Established companies whose current site no longer reflects their quality or services.',
      'Businesses running Meta or Google Ads that need dedicated landing pages.',
      'Service providers who want their website to generate more qualified enquiries.',
    ],
    faqs: [
      {
        q: 'How long does it take to build a website?',
        a: 'It depends on the size and complexity of the site and how quickly content and feedback are available. A focused landing page is usually much quicker than a multi-page website with custom features. We provide an estimated timeline once we understand your scope.',
      },
      {
        q: 'Will my website work on mobile devices?',
        a: 'Yes. Every site we build is responsive and tested across common screen sizes, with mobile usability treated as a priority rather than an afterthought.',
      },
      {
        q: 'Do you write the website content?',
        a: 'We can help structure and refine your content, and copywriting can be included in the project scope. Your input on services, expertise and what makes you different is essential to keep it accurate.',
      },
      {
        q: 'Is SEO included in website development?',
        a: 'Every build includes on-page SEO foundations such as clean URLs, metadata, a logical heading structure, image alt text and a sitemap. Ongoing keyword research and content optimisation are available through our Search Engine Optimization service.',
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Yes. We review what currently works, what does not and which content should be kept, then plan a redesign that improves clarity and performance while protecting valuable existing pages and URLs where possible.',
      },
    ],
    related: ['search-engine-optimization', 'lead-generation-for-business', 'google-ads-management'],
    cta: {
      title: "Let's build a website that works as hard as you do",
      text: 'Share a little about your business and what your website needs to achieve, and we will outline a sensible approach.',
    },
  },

  /* --------------------------------------------------------------------- */
  /* 02. Search Engine Optimization                                        */
  /* --------------------------------------------------------------------- */
  'search-engine-optimization': {
    metaTitle: 'Search Engine Optimization (SEO) Services',
    metaDescription:
      'Search Engine Optimization services covering search intent, keyword mapping, title tags, meta descriptions, headings, content quality, internal linking, image SEO, and structured data.',
    hero: {
      eyebrow: '02 · Search Engine Optimization',
      title: 'Search Engine Optimization That Makes Your Pages Clearer to Google and Buyers',
      intro:
        'Search engines rank individual pages based on relevance, structure, and usefulness. We optimise the content, metadata, internal architecture, and technical signals of your key pages so the right customers can find you organically.',
    },
    overview: {
      heading: 'Sustainable organic visibility starts with search intent and page clarity',
      paragraphs: [
        'Search Engine Optimization (SEO) covers the structure, content, and signals that help search engines understand what each page on your website offers—and whether it satisfies the person searching. Done properly, it connects your most important services with people actively researching solutions.',
        'The foundation is search intent. Someone searching "what is lead generation" wants an educational explanation; someone searching "B2B lead generation agency" is comparing providers. We research the queries your customers actually use, identify the intent behind them, and map each topic to a dedicated page so your own URLs never compete against one another.',
        'Organic search is a compounding long-term channel, and no honest agency promises overnight #1 rankings. What we deliver is a transparent, methodical improvement of your site’s relevance, page structure, internal linking, and technical hygiene—documented clearly at every step.',
      ],
    },
    problems: {
      heading: 'Common SEO issues that hold business websites back',
      items: [
        {
          title: 'Pages that miss buyer search intent',
          text: 'Targeting broad informational terms on a service page—or burying five services on a single generic page—makes it hard to rank for commercial searches.',
        },
        {
          title: 'Missing, generic, or duplicate metadata',
          text: 'Default titles like "Home" or repeated meta descriptions reduce click-through rates and fail to signal what makes each page distinct.',
        },
        {
          title: 'Weak heading hierarchy & internal links',
          text: 'Unstructured copy and isolated "orphan" pages make content harder for visitors to scan and harder for crawlers to prioritise.',
        },
        {
          title: 'Keyword cannibalisation',
          text: 'Multiple pages targeting the exact same phrase split relevance and leave search engines unsure which URL to display.',
        },
      ],
    },
    spotlight: {
      variant: 'cards',
      heading: 'The SEO elements we audit and optimise',
      intro: 'Every recommendation is tied to a specific page on your site and a clear strategic reason.',
      items: [
        { title: 'Search intent alignment', text: 'Matching each page’s angle, format, and depth to what searchers expect to see.' },
        { title: 'Keyword research & mapping', text: 'Assigning primary and secondary topics to the right URLs across your site.' },
        { title: 'Title tags & meta descriptions', text: 'Unique, natural metadata written to earn clicks from qualified searchers.' },
        { title: 'Heading structure (H1–H3)', text: 'One focused H1 per page supported by scannable H2 and H3 subheadings.' },
        { title: 'Content depth & clarity', text: 'Refining service and educational copy to answer real buyer questions without keyword stuffing.' },
        { title: 'Internal linking architecture', text: 'Connecting related services and articles with descriptive anchor text.' },
        { title: 'Image SEO & alt attributes', text: 'Descriptive alt text, modern WebP/AVIF formats, and explicit dimensions.' },
        { title: 'Schema & structured data', text: 'Valid Organization, Service, FAQ, and Article JSON-LD consistent with visible content.' },
        { title: 'Indexability & technical checks', text: 'Reviewing canonical URLs, sitemaps, robots directives, and mobile page experience.' },
      ],
    },
    deliverables: [
      {
        title: 'Comprehensive SEO audit',
        text: 'A prioritised review of your key pages, indexing setup, and immediate on-page opportunities.',
      },
      {
        title: 'Keyword & search intent map',
        text: 'A clear blueprint mapping target search themes to specific existing or new pages.',
      },
      {
        title: 'Metadata & heading overhaul',
        text: 'Custom title tags, meta descriptions, and H1–H3 hierarchies for your priority URLs.',
      },
      {
        title: 'On-page content optimisation',
        text: 'Actionable copy improvements, service FAQs, and topical expansions implemented or ready for your team.',
      },
      {
        title: 'Internal linking plan',
        text: 'Exact page-to-page link recommendations that strengthen authority around core services.',
      },
      {
        title: 'Schema & technical verification',
        text: 'Validation of canonical tags, XML sitemap, robots.txt, image alt text, and JSON-LD markup.',
      },
    ],
    process: [
      { title: 'Audit & research', text: 'Inspect key pages and research how your ideal buyers search.' },
      { title: 'Map & prioritise', text: 'Assign search topics to pages and rank fixes by business value.' },
      { title: 'Optimise pages', text: 'Upgrade metadata, headings, content depth, internal links, and schema.' },
      { title: 'Monitor & refine', text: 'Review Search Console impressions, clicks, and queries to iterate.' },
    ],
    benefits: [
      {
        title: 'Stronger topical relevance',
        text: 'Focused, well-structured pages help search engines connect your business to the right queries.',
      },
      {
        title: 'Higher-quality organic traffic',
        text: 'Targeting commercial and service-specific intent attracts visitors who are actually looking for what you sell.',
      },
      {
        title: 'Better visitor experience',
        text: 'Clear headings, helpful answers, and logical internal navigation improve conversion rates for all traffic.',
      },
      {
        title: 'Compounding long-term asset',
        text: 'Unlike paid clicks that stop when budget pauses, well-optimised pages continue working over time.',
      },
    ],
    suitableFor: [
      'Service businesses and B2B companies looking to grow organic enquiries.',
      'Brands launching a new website or redesign that want SEO built in from day one.',
      'Websites that have helpful services but rarely appear for non-branded searches.',
      'Marketing teams publishing blog content that needs stronger structure and internal linking.',
    ],
    faqs: [
      {
        q: 'How long does Search Engine Optimization usually take to show results?',
        a: 'Search engines can crawl and index on-page updates within days or weeks, but meaningful growth in organic rankings and qualified traffic typically develops over several months. Timelines depend on market competition, your website’s current foundation, and content depth.',
      },
      {
        q: 'Can you guarantee a #1 ranking on Google?',
        a: 'No. Search engine algorithms weigh hundreds of signals that no agency controls, and rankings shift continuously. Any provider promising guaranteed positions should be treated with caution. We focus on measurable, best-practice improvements that make your pages genuinely more relevant and competitive.',
      },
      {
        q: 'Do you implement the SEO changes or hand over recommendations?',
        a: 'Either way works. With CMS or codebase access we can implement metadata, content, internal linking, and schema updates directly—or we can deliver structured documentation for your developers and editors.',
      },
      {
        q: 'How does SEO work alongside Google Ads?',
        a: 'SEO builds sustainable organic visibility over time, while Google Search Ads captures immediate demand. Search term data from Google Ads often reveals which phrases convert best, helping us prioritise the highest-value pages for SEO.',
      },
    ],
    related: ['website-development', 'google-ads-management', 'lead-generation-for-business'],
    cta: {
      title: 'Strengthen your search visibility with practical SEO',
      text: 'Share your website URL and the services you want to be found for, and we will identify your clearest SEO opportunities.',
    },
  },

  /* --------------------------------------------------------------------- */
  /* 03. Social Media Management                                           */
  /* --------------------------------------------------------------------- */
  'social-media-management': {
    metaTitle: 'Social Media Management Services',
    metaDescription:
      'Social media management services covering strategy, content calendars, platform-specific creatives, community management, and performance reporting.',
    hero: {
      eyebrow: '03 · Social Media Management',
      title: 'Social Media Management That Keeps Your Brand Active, Consistent, and Credible',
      intro:
        'When prospects discover your business, your social profiles are often the first place they check to see if you are active and trustworthy. We plan, create, and manage consistent social content aligned with your commercial goals.',
    },
    overview: {
      heading: 'Consistent presence without the weekly scramble for post ideas',
      paragraphs: [
        'Many business owners know they should stay active on social media, yet day-to-day operations push posting to the bottom of the list. The result is months of silence followed by rushed posts that do not reflect the quality of the business.',
        'Our Social Media Management service replaces ad-hoc posting with a reliable monthly system. We define your core content pillars, select the platforms where your buyers actually spend time, prepare a structured content calendar for your approval, and handle scheduling, community interaction, and reporting.',
        'Where paid reach makes sense to accelerate audience growth or promote key offers, we coordinate your organic calendar directly with our Meta Ads Management team so organic and paid social reinforce each other.',
      ],
    },
    problems: {
      heading: 'Social media challenges we take off your plate',
      items: [
        {
          title: 'Dormant or irregular profiles',
          text: 'Long gaps between posts can make an active, thriving company look inactive to prospects checking your pages.',
        },
        {
          title: 'Posting without a clear strategy',
          text: 'Random updates that do not explain your expertise, products, or customer outcomes fail to build buying confidence.',
        },
        {
          title: 'Identical posts copied everywhere',
          text: 'Each platform has its own format and audience expectations—LinkedIn buyers read differently than Instagram browsers.',
        },
        {
          title: 'No visibility into what resonates',
          text: 'Without structured monthly reporting, it is hard to tell which topics earn real engagement and website visits.',
        },
      ],
    },
    spotlight: {
      variant: 'cards',
      heading: 'Tailoring management to the platforms that fit your audience',
      intro:
        'Rather than stretching thin across every network, we focus on the channels that match how your customers discover and evaluate brands:',
      items: [
        {
          title: 'Instagram',
          text: 'Carousel education, visual brand storytelling, Reels concepts, and Stories that keep consumer and lifestyle brands front of mind.',
        },
        {
          title: 'Facebook',
          text: 'Community updates, service highlights, event promotion, and local trust-building supported by responsive page management.',
        },
        {
          title: 'LinkedIn',
          text: 'Authority-building company updates, industry insights, and B2B positioning for professional services and corporate brands.',
        },
        {
          title: 'TikTok & YouTube Shorts',
          text: 'Short-form video planning and scripting when visual demonstrations and educational hooks suit your audience.',
        },
      ],
    },
    deliverables: [
      {
        title: 'Channel strategy & brand playbook',
        text: 'Defined content pillars, visual direction, tone of voice, and platform priorities tailored to your brand.',
      },
      {
        title: 'Monthly content calendar',
        text: 'Planned post topics, captions, visuals, and publishing dates shared in advance for straightforward sign-off.',
      },
      {
        title: 'Visual design & copywriting',
        text: 'On-brand graphics, carousel layouts, captions, and short-form video briefs formatted for each network.',
      },
      {
        title: 'Profile & bio optimisation',
        text: 'Clear profile descriptions, highlights, cover graphics, and tracked website links that guide visitors to enquire.',
      },
      {
        title: 'Community engagement',
        text: 'Monitoring and responding to comments and routine page messages using agreed brand guidelines.',
      },
      {
        title: 'Monthly performance report',
        text: 'A plain-English summary of reach, engagement quality, website clicks, and next month’s priorities.',
      },
    ],
    process: [
      { title: 'Audit & align', text: 'Review your current profiles, brand assets, audience, and business objectives.' },
      { title: 'Plan the calendar', text: 'Map monthly content pillars, post formats, and campaign moments.' },
      { title: 'Create & approve', text: 'Design visuals and write captions for your review before scheduling.' },
      { title: 'Publish & report', text: 'Schedule posts, manage community interaction, and review monthly insights.' },
    ],
    benefits: [
      {
        title: 'A dependable, professional presence',
        text: 'Prospects researching your business see an active, cohesive brand that communicates clearly.',
      },
      {
        title: 'Hours saved every week',
        text: 'Your team reviews a complete monthly calendar in one sitting instead of scrambling for daily ideas.',
      },
      {
        title: 'Stronger brand recall',
        text: 'Consistent visual identity and repeatable content themes help your audience remember what you do.',
      },
      {
        title: 'Ready foundation for paid social',
        text: 'Active profiles and proven organic posts strengthen the performance of Meta Ads campaigns.',
      },
    ],
    suitableFor: [
      'Growing businesses that want a consistent, professional social presence without hiring full-time in-house.',
      'Ecommerce, retail, and hospitality brands that rely on visual discovery and customer familiarity.',
      'B2B and service companies building credibility on LinkedIn, Facebook, and Instagram.',
      'Brands running Meta Ads that want their organic profiles to reinforce paid campaigns.',
    ],
    faqs: [
      {
        q: 'Will we approve posts before they go live?',
        a: 'Yes. We share the content calendar—including visuals and captions—in advance so you can review, request edits, and approve everything before it is scheduled.',
      },
      {
        q: 'Which social media platforms do you manage?',
        a: 'We primarily manage Instagram, Facebook, and LinkedIn, and can include TikTok or YouTube Shorts where short-form video fits your audience and workflow.',
      },
      {
        q: 'What is the difference between Social Media Management and Meta Ads Management?',
        a: 'Social Media Management focuses on your ongoing organic presence: content calendars, posts, profile presentation, and community engagement. Meta Ads Management focuses on paid advertising campaigns on Facebook and Instagram to reach targeted new audiences and drive tracked conversions.',
      },
      {
        q: 'Can we supply photos or videos from our business?',
        a: 'Absolutely—and we encourage it. Authentic photos or clips of your team, products, or work combined with our design templates and copywriting create the strongest content.',
      },
    ],
    related: ['meta-ads-management', 'website-development', 'lead-generation-for-business'],
    cta: {
      title: 'Build a consistent social presence without the guesswork',
      text: 'Tell us which platforms matter most to your customers, and we will outline a practical monthly management plan.',
    },
  },

  /* --------------------------------------------------------------------- */
  /* 04. Meta Ads Management                                               */
  /* --------------------------------------------------------------------- */
  'meta-ads-management': {
    metaTitle: 'Meta Ads Management Services (Facebook & Instagram Ads)',
    metaDescription:
      'Meta Ads management for Facebook and Instagram: audience targeting, creative strategy, Meta Pixel & conversion tracking, retargeting funnels, and transparent optimisation.',
    hero: {
      eyebrow: '04 · Meta Ads Management',
      title: 'Strategic Facebook & Instagram Advertising Built Around Real Conversions',
      intro:
        'Meta Ads let you put your offer in front of ideal buyers across Facebook and Instagram before they even start searching. We plan, launch, and optimise paid social campaigns backed by accurate conversion tracking and disciplined creative testing.',
    },
    overview: {
      heading: 'Turning paid social attention into measurable enquiries and sales',
      paragraphs: [
        'Facebook and Instagram offer remarkable reach, but boosting random posts or running a single generic ad rarely delivers sustainable results. Effective Meta Ads management combines three elements: reaching the right audience segments, presenting thumb-stopping creative that communicates a clear offer, and sending clicks to a fast landing page with reliable conversion tracking.',
        'We structure Meta campaigns around your full buyer journey. Prospecting campaigns introduce your brand and offer to carefully defined interest, lookalike, or broad audiences; retargeting campaigns follow up with people who engaged with your social profiles or visited your website without converting.',
        'Every campaign is built inside your own Meta Business Manager and Ad Account so you retain full ownership of your data, audiences, and history. We test creative angles methodically, monitor cost per result, and report in clear business terms.',
      ],
    },
    problems: {
      heading: 'Common Meta advertising pitfalls we solve',
      items: [
        {
          title: 'Boosted posts with no conversion goal',
          text: 'Spending budget on engagement boosts without proper campaign objectives or landing pages rarely produces qualified leads or sales.',
        },
        {
          title: 'Missing or broken Meta Pixel tracking',
          text: 'If conversion events are not firing accurately, Meta’s algorithm cannot optimise for buyers and you cannot see true campaign ROI.',
        },
        {
          title: 'Creative fatigue & rising costs',
          text: 'Showing the exact same graphic to the same audience for months causes click-through rates to drop and cost per result to climb.',
        },
        {
          title: 'No follow-up for warm website visitors',
          text: 'Most first-time visitors do not enquire immediately; without structured retargeting, that paid traffic is lost.',
        },
      ],
    },
    spotlight: {
      variant: 'cards',
      heading: 'How we structure high-performing Meta Ad accounts',
      intro: 'Every campaign layer has a defined role, audience, and measurement metric:',
      items: [
        {
          title: 'Audience prospecting',
          text: 'Reaching new buyers across Facebook and Instagram Feeds, Stories, and Reels using data-backed audience signals and creative hooks.',
        },
        {
          title: 'Creative & format testing',
          text: 'Testing static visuals, carousels, and short-form video hooks to identify which messages earn the strongest response.',
        },
        {
          title: 'Multi-window retargeting',
          text: 'Re-engaging website visitors, video viewers, and social engagers with relevant proof, FAQs, and clear calls to action.',
        },
        {
          title: 'Pixel & event verification',
          text: 'Configuring and testing Meta Pixel and standard/custom conversion events so optimisation follows real enquiries or purchases.',
        },
        {
          title: 'Landing page alignment',
          text: 'Ensuring the page visitors land on matches the visual and headline promise of the ad they clicked.',
        },
        {
          title: 'Budget & bid discipline',
          text: 'Allocating spend toward winning ad sets and pausing underperforming variations before budget is wasted.',
        },
      ],
    },
    deliverables: [
      {
        title: 'Meta Ads strategy & funnel map',
        text: 'Campaign objectives, audience structure, placement selection, and budget allocation plan.',
      },
      {
        title: 'Meta Pixel & conversion setup',
        text: 'Installation and verification of tracking events across your website, forms, or checkout.',
      },
      {
        title: 'Audience research & build',
        text: 'Creation of custom audiences (website traffic, customer lists, engagers), lookalikes, and prospecting segments.',
      },
      {
        title: 'Ad copy & creative briefs',
        text: 'Primary text, headlines, call-to-action selection, and visual/video creative direction for Feed, Story, and Reel placements.',
      },
      {
        title: 'Ongoing A/B testing & optimisation',
        text: 'Continuous refinement of creatives, audiences, placements, and budget distribution.',
      },
      {
        title: 'Transparent performance reporting',
        text: 'Regular breakdowns of ad spend, reach, clicks, conversion volume, cost per result, and next testing steps.',
      },
    ],
    process: [
      { title: 'Audit & tracking', text: 'Review your Meta Business Manager, past data, offer, and conversion tracking.' },
      { title: 'Funnel & creative build', text: 'Configure audiences, write ad copy, prepare visuals, and structure campaigns.' },
      { title: 'Launch & test', text: 'Go live across Facebook and Instagram and test creative and audience variations.' },
      { title: 'Scale & refine', text: 'Shift budget to top performers, refresh creatives, and report clearly.' },
    ],
    benefits: [
      {
        title: 'Create demand proactively',
        text: 'Introduce your product or service to ideal customers even before they know to search for you.',
      },
      {
        title: 'Visual storytelling at scale',
        text: 'Showcase your offer through video, carousels, and imagery across Facebook and Instagram.',
      },
      {
        title: 'Recover interested visitors',
        text: 'Retargeting keeps your brand visible to warm prospects while they are deciding.',
      },
      {
        title: 'Full account ownership',
        text: 'All campaigns, pixels, and audience data remain inside your own business ad account.',
      },
    ],
    suitableFor: [
      'Ecommerce and consumer brands looking to drive product discovery and repeat purchases.',
      'Service businesses promoting consultations, local offers, or lead magnets.',
      'B2B and education brands using paid social to build awareness and retarget website visitors.',
      'Companies already running Facebook or Instagram ads that want sharper tracking and creative testing.',
    ],
    faqs: [
      {
        q: 'What is the difference between Meta Ads and Google Ads?',
        a: 'Meta Ads (Facebook and Instagram) reaches people based on interests, demographics, behaviours, and custom audiences while they browse social feeds—making it ideal for creating demand and retargeting. Google Ads reaches people actively typing search queries—making it ideal for capturing existing intent. Many businesses use both together.',
      },
      {
        q: 'Who pays Meta for the ad spend?',
        a: 'Your business pays ad spend directly to Meta via the billing method in your own Meta Ad Account. Our management fee is separate so you always have 100% visibility into exact media costs.',
      },
      {
        q: 'Do you guarantee a specific cost per lead or ROAS?',
        a: 'No honest agency can guarantee exact auction outcomes because results depend on market competition, your offer, pricing, and landing page conversion rate. We commit to accurate tracking, structured creative testing, and disciplined budget management.',
      },
      {
        q: 'Can you help if we do not have a landing page yet?',
        a: 'Yes. Through our Website Development and Lead Generation services, we can design and build a dedicated conversion landing page before launching your Meta campaigns.',
      },
    ],
    related: ['social-media-management', 'google-ads-management', 'lead-generation-for-business'],
    cta: {
      title: 'Ready to run structured Facebook & Instagram campaigns?',
      text: 'Tell us about your offer, target audience, and goals, and we will recommend a clear Meta Ads strategy.',
    },
  },

  /* --------------------------------------------------------------------- */
  /* 05. Google Ads Management                                             */
  /* --------------------------------------------------------------------- */
  'google-ads-management': {
    metaTitle: 'Google Ads Management Services (Search & PPC)',
    metaDescription:
      'Google Ads management services covering high-intent Search campaigns, keyword and negative keyword research, conversion tracking, landing page alignment, and ongoing PPC optimisation.',
    hero: {
      eyebrow: '05 · Google Ads Management',
      title: 'Capture High-Intent Buyers at the Exact Moment They Search on Google',
      intro:
        'When someone types the exact service you offer into Google, they are actively looking for a solution. We build, track, and optimise Google Ads campaigns that turn commercial search intent into qualified enquiries and sales.',
    },
    overview: {
      heading: 'Precision paid search built on intent, relevance, and clean tracking',
      paragraphs: [
        'Google Search Ads is one of the most direct channels in digital marketing because you are reaching people who already have a need in mind. However, poorly structured accounts waste budget quickly—paying for broad informational clicks, irrelevant search terms, or traffic sent to slow, generic pages.',
        'Our Google Ads Management service focuses on commercial intent. We research the exact phrases buyers use when they are ready to hire or purchase, group keywords tightly so every ad matches the user’s search query, maintain thorough negative keyword lists to block wasted spend, and connect each ad group to a relevant landing page.',
        'Before spending a dollar, we verify conversion tracking in your own Google Ads and Google Analytics accounts so bidding decisions are guided by real enquiries, calls, or purchases rather than clicks alone.',
      ],
    },
    problems: {
      heading: 'Google Ads leaks we regularly identify and fix',
      items: [
        {
          title: 'Paying for irrelevant search terms',
          text: 'Loose broad-match keywords without negative keyword lists often spend budget on job seekers, DIY searches, or unrelated categories.',
        },
        {
          title: 'Broken or inflated conversion tracking',
          text: 'Counting every page view as a "conversion" misleads automated bidding strategies and hides true lead costs.',
        },
        {
          title: 'Generic ads & low Quality Scores',
          text: 'Cramming dozens of different services into one ad group lowers ad relevance, reduces click-through rates, and increases cost per click.',
        },
        {
          title: 'Sending paid clicks to an unfocused homepage',
          text: 'Visitors who click a specific service ad expect to land on a page dedicated to that exact service and offer.',
        },
      ],
    },
    spotlight: {
      variant: 'comparison',
      heading: 'Choosing the right Google Ads campaign types for your business',
      intro: 'We select campaign formats based on how your customers search and buy:',
      columns: [
        {
          title: 'Google Search Campaigns',
          subtitle: 'High-Intent Capture',
          channels: 'Google Search Results',
          bestFor: 'Service businesses, B2B & urgent commercial needs',
          points: [
            'Targets users actively searching specific commercial keywords',
            'Tightly themed ad groups with tailored responsive search ads',
            'Ad assets (sitelinks, callouts, structured snippets) to maximise screen presence',
            'Proactive negative keyword management to filter out non-buyers',
          ],
        },
        {
          title: 'Performance Max, Shopping & Remarketing',
          subtitle: 'Full-Network Reach & Follow-Up',
          channels: 'Search · Shopping · YouTube · Display · Discover',
          bestFor: 'Ecommerce product catalogues & multi-touch remarketing',
          points: [
            'Showcases product feeds or multi-format assets across Google properties',
            'Re-engages past website visitors as they browse across the web and YouTube',
            'Guided by clean conversion value and audience signals',
            'Paired with brand/search exclusions where needed to protect efficiency',
          ],
        },
      ],
      note: 'For most service and B2B businesses, focused Google Search campaigns paired with dedicated landing pages provide the clearest starting point.',
    },
    deliverables: [
      {
        title: 'Account audit & keyword strategy',
        text: 'Deep research into commercial search queries, match types, competitor positioning, and negative keywords.',
      },
      {
        title: 'Campaign & ad group architecture',
        text: 'Clean account structure separating services, locations, and intent levels for stronger ad relevance.',
      },
      {
        title: 'Responsive Search Ads & assets',
        text: 'Compelling headlines, descriptions, sitelinks, callouts, and structured snippets matched to buyer queries.',
      },
      {
        title: 'Conversion tracking setup',
        text: 'Accurate Google Tag / GA4 conversion tracking for form enquiries, bookings, calls, or ecommerce sales.',
      },
      {
        title: 'Search term & bid optimisation',
        text: 'Regular search term audits, negative keyword additions, bid adjustments, and ad copy testing.',
      },
      {
        title: 'Clear monthly reporting',
        text: 'Plain-language reporting on spend, search queries, conversions, cost per enquiry, and next optimisations.',
      },
    ],
    process: [
      { title: 'Research & audit', text: 'Analyse search demand, existing account history, competitors, and landing pages.' },
      { title: 'Structure & track', text: 'Build campaigns, write ads, add negative keywords, and verify conversion tracking.' },
      { title: 'Launch & monitor', text: 'Go live and closely inspect actual search terms, click quality, and early conversions.' },
      { title: 'Optimise & refine', text: 'Prune wasted queries, refine bids and ads, and report transparently.' },
    ],
    benefits: [
      {
        title: 'Immediate high-intent visibility',
        text: 'Appear in front of prospects actively searching for your service without waiting months for organic rankings.',
      },
      {
        title: 'Strict control over budget & geography',
        text: 'Target the exact locations, days, hours, and search themes that match your operational capacity.',
      },
      {
        title: 'Protected ad spend',
        text: 'Ongoing negative keyword filtering keeps your budget focused on commercial searches.',
      },
      {
        title: 'Insights that improve SEO',
        text: 'Real conversion data from Google Ads reveals which keywords deserve long-term SEO investment.',
      },
    ],
    suitableFor: [
      'Service providers and B2B companies whose customers search Google when ready to hire.',
      'Local and regional businesses wanting enquiries from specific service areas.',
      'Ecommerce brands looking to capture product and category searches.',
      'Businesses with existing Google Ads accounts that want to reduce wasted spend and improve tracking.',
    ],
    faqs: [
      {
        q: 'How much budget do I need for Google Ads?',
        a: 'The right starting budget depends on average cost-per-click in your industry, your geographic target area, and how many clicks are needed to generate reliable conversion data. During our consultation we review typical CPCs for your services and suggest a realistic test budget.',
      },
      {
        q: 'Do I own my Google Ads account?',
        a: 'Yes, always. We set up or manage campaigns inside a Google Ads account owned by your business, with billing connected directly to your company.',
      },
      {
        q: 'How quickly can Google Ads generate enquiries?',
        a: 'Search campaigns can begin driving high-intent visitors as soon as ads are approved. The first 3–6 weeks serve as an important calibration phase as we review search term reports, add negative keywords, and refine bids based on real conversion data.',
      },
      {
        q: 'Should we run Google Ads, Meta Ads, or both?',
        a: 'If customers actively search for your service by name, Google Search Ads is often the strongest first step. If your offer relies on visual discovery or reaching people before they search, Meta Ads is ideal. Many growing businesses pair Google Search (to capture intent) with Meta retargeting (to stay visible while buyers compare options).',
      },
    ],
    related: ['lead-generation-for-business', 'website-development', 'meta-ads-management'],
    cta: {
      title: 'Capture high-intent Google searches with confidence',
      text: 'Share your services, target locations, and goals, and we will outline a focused Google Ads plan.',
    },
  },

  /* --------------------------------------------------------------------- */
  /* 06. Lead Generation for Business                                      */
  /* --------------------------------------------------------------------- */
  'lead-generation-for-business': {
    metaTitle: 'Lead Generation for Business Services',
    metaDescription:
      'Lead generation services for businesses that connect audience targeting, landing pages, lead capture, qualification, and follow-up to generate more qualified sales conversations.',
    hero: {
      eyebrow: '06 · Lead Generation for Business',
      title: 'Lead Generation Systems Built Around Prospect Quality, Not Just Volume',
      intro:
        'A lead only helps your business if it is the right prospect, with a genuine need, who hears back from your team promptly. We design end-to-end lead generation systems that connect targeting, landing pages, qualification, and follow-up.',
    },
    overview: {
      heading: 'Lead generation is a connected system, not an isolated campaign',
      paragraphs: [
        'Most lead generation disappointments happen in the gaps between steps: ads attract the wrong audience, the landing page is generic, the form asks too much or too little, or promising enquiries wait days for a response. Fixing only one piece rarely solves the pipeline problem.',
        'Our Lead Generation for Business service looks at the entire customer acquisition journey. We clarify your ideal customer profile and offer, choose the traffic channels that fit how your buyers research, build or optimise focused landing pages, design lead capture forms that balance ease with qualification, and establish clear follow-up and attribution.',
        'We measure success with you based on lead quality as well as quantity—how many enquiries turn into real sales conversations—and feed those insights back into your targeting and messaging.',
      ],
    },
    problems: {
      heading: 'Lead generation bottlenecks we help businesses solve',
      items: [
        {
          title: 'Unqualified enquiries wasting sales time',
          text: 'Leads outside your service scope, geography, or budget range drain team energy and obscure genuine buyers.',
        },
        {
          title: 'Website traffic that leaves without enquiring',
          text: 'Interested visitors bounce when the value proposition is vague or the next step feels complicated.',
        },
        {
          title: 'Slow or disconnected lead follow-up',
          text: 'Buyers often contact two or three providers; delayed notifications or unclear next steps hand deals to competitors.',
        },
        {
          title: 'No attribution on which channel works',
          text: 'Without UTM and conversion tracking, you cannot tell whether SEO, Google Ads, or Meta Ads produced your best clients.',
        },
      ],
    },
    spotlight: {
      variant: 'flow',
      heading: 'How targeting, landing pages, capture, qualification, and follow-up connect',
      intro: 'Every stage shapes the quality of the next. We design and measure all six stages together:',
      items: [
        {
          title: 'Ideal customer targeting',
          text: 'Define the industry, location, need, budget level, and buying trigger of the prospects you actually want.',
        },
        {
          title: 'Traffic acquisition',
          text: 'Reach those buyers through the right mix of Google Search Ads, Meta Ads, or organic search content.',
        },
        {
          title: 'Focused landing page',
          text: 'Direct visitors to a fast, distraction-free page that matches the ad promise and answers buyer objections.',
        },
        {
          title: 'Balanced lead capture',
          text: 'Use forms or booking flows that are easy to complete while capturing the details your team needs.',
        },
        {
          title: 'Lead qualification',
          text: 'Include smart qualifying questions (service type, timeline, or scope) to filter out poor-fit enquiries.',
        },
        {
          title: 'Prompt follow-up & feedback',
          text: 'Route enquiries immediately to your inbox or CRM and review lead outcomes to refine campaign targeting.',
        },
      ],
    },
    deliverables: [
      {
        title: 'Ideal customer & offer blueprint',
        text: 'Clear definition of target buyer segments, value propositions, and qualifying criteria.',
      },
      {
        title: 'Funnel & channel architecture',
        text: 'End-to-end map connecting traffic sources, landing pages, lead capture, and follow-up steps.',
      },
      {
        title: 'Conversion landing page design',
        text: 'New or optimised single-goal landing pages built for mobile speed and message clarity.',
      },
      {
        title: 'Qualifying enquiry forms',
        text: 'Accessible, spam-protected forms with service/budget selectors and instant delivery.',
      },
      {
        title: 'Source & UTM attribution',
        text: 'Tracking setup so you know which campaign, keyword, or page generated each enquiry.',
      },
      {
        title: 'Lead quality review loop',
        text: 'Regular reviews with your sales team to adjust targeting and form questions based on real conversation quality.',
      },
    ],
    process: [
      { title: 'Research & define', text: 'Clarify your offer, ideal customer profile, and sales qualification criteria.' },
      { title: 'Build the funnel', text: 'Create or refine landing pages, qualifying forms, and campaign structure.' },
      { title: 'Launch with tracking', text: 'Drive targeted traffic with end-to-end source and conversion attribution.' },
      { title: 'Review & improve', text: 'Evaluate lead quality with your team and refine every stage.' },
    ],
    benefits: [
      {
        title: 'Better use of your sales team’s time',
        text: 'Thoughtful qualification helps your team focus on prospects who match your services and budget.',
      },
      {
        title: 'Higher conversion from existing traffic',
        text: 'Clearer landing pages and simpler forms help more of your current visitors get in touch.',
      },
      {
        title: 'Clear source visibility',
        text: 'Know which channels and pages produce real opportunities so budget goes where it works.',
      },
      {
        title: 'More predictable enquiry flow',
        text: 'A structured funnel reduces reliance on sporadic referrals alone.',
      },
    ],
    suitableFor: [
      'B2B companies, consultants, and professional service firms with a consultative sales process.',
      'Local and regional service businesses that grow through quote requests, calls, or bookings.',
      'Companies generating ad clicks or website traffic that rarely convert into enquiries.',
      'Businesses receiving too many low-fit enquiries that want better pre-qualification.',
    ],
    faqs: [
      {
        q: 'Can you guarantee a specific number of leads each month?',
        a: 'No. Lead volume depends on market demand, competition, your offer, and media budget. We focus on building a transparent, well-tracked acquisition system and continuously improving conversion rates and lead relevance based on real data.',
      },
      {
        q: 'How do you improve lead quality when too many enquiries are unqualified?',
        a: 'We tighten three areas together: excluding irrelevant keywords or audiences in your ads, stating who your service is for clearly on the landing page, and adding one or two friction-light qualifying fields (such as service scope or estimated budget) to the enquiry form.',
      },
      {
        q: 'Do we need a brand-new website to run lead generation campaigns?',
        a: 'Not always. Often a dedicated campaign landing page or targeted improvements to your core service pages and contact form are sufficient. If your wider site needs a rebuild, we can pair this with our Website Development service.',
      },
      {
        q: 'Where are leads delivered?',
        a: 'Enquiries can be delivered directly to your business email inbox or routed to your preferred CRM or webhook provider using your own account credentials.',
      },
    ],
    related: ['google-ads-management', 'meta-ads-management', 'website-development'],
    cta: {
      title: "Let's build a lead generation system tailored to your business",
      text: 'Tell us who your ideal customers are and how you currently win new business, and we will map out a practical funnel.',
    },
  },
};

export function getServiceContent(slug) {
  return serviceContent[slug];
}
