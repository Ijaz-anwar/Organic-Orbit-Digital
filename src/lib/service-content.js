/**
 * Detailed content for each service page.
 * Keyed by service slug (see services.js). Server-only usage.
 *
 * Copy is written to be realistic: no guaranteed results, rankings or ROI.
 * Edit freely — the ServicePageTemplate renders whatever is defined here.
 */

export const serviceContent = {
  /* --------------------------------------------------------------------- */
  'social-media-marketing': {
    metaTitle: 'Social Media Marketing Services',
    metaDescription:
      'Social media marketing services covering strategy, content planning, platform-specific campaigns, community engagement and clear reporting, built around your business goals.',
    hero: {
      eyebrow: 'Social Media Marketing',
      title: 'Social Media Marketing That Builds Recognition, Trust and Conversation',
      intro:
        'We help businesses show up consistently on the platforms their customers actually use, with a clear strategy, purposeful content and reporting that connects social activity to business goals.',
    },
    overview: {
      heading: 'Social media works best when it has a job to do',
      paragraphs: [
        'Many businesses post because they feel they should, not because each post supports a goal. The result is irregular activity, mixed messaging and little insight into what is working. Our social media marketing service starts by defining the role social plays in your business: building awareness in a new market, supporting launches, nurturing existing customers or driving visits to your website.',
        'From there we build a practical content system: the platforms worth prioritising, the themes you want to be known for, a realistic publishing rhythm and a clear approach to engagement. Organic content and paid social work well together, so where advertising makes sense we coordinate it with our Meta Ads planning instead of treating the two as separate projects.',
        'Reporting focuses on the measures that match your objective. For awareness, that means reach and engagement quality; for traffic and lead goals, clicks and enquiries. We explain what the numbers mean in plain language and what we will change next.',
      ],
    },
    problems: {
      heading: 'Common social media challenges we help solve',
      items: [
        {
          title: 'Inconsistent posting',
          text: 'Weeks of silence followed by bursts of activity make a brand look less established and make it harder for audiences to build familiarity.',
        },
        {
          title: 'Content without a clear message',
          text: 'Posts that jump between unrelated topics fail to communicate what the business does or why someone should care.',
        },
        {
          title: 'Every platform treated the same',
          text: 'Copying identical content across Instagram, LinkedIn and Facebook ignores how differently people use each platform.',
        },
        {
          title: 'No connection to business results',
          text: 'Likes are easy to count but hard to link to enquiries or sales without clear objectives and proper tracking.',
        },
      ],
    },
    spotlight: {
      variant: 'cards',
      heading: 'Choosing platforms by audience, not habit',
      intro:
        'We recommend a smaller number of platforms managed well over a presence everywhere that cannot be maintained. Typical roles look like this:',
      items: [
        {
          title: 'Instagram',
          text: 'Visual storytelling, short-form video and behind-the-scenes content for consumer brands, hospitality, lifestyle and ecommerce.',
        },
        {
          title: 'Facebook',
          text: 'Community building, local awareness, events and broad-reach content, often supported by Meta advertising.',
        },
        {
          title: 'LinkedIn',
          text: 'Thought leadership, company updates and relationship building for B2B services, recruitment and professional brands.',
        },
        {
          title: 'TikTok & YouTube',
          text: 'Video-first discovery and education, recommended when your audience is active there and video production is sustainable.',
        },
      ],
    },
    deliverables: [
      {
        title: 'Social media strategy',
        text: 'Goals, audience insights, platform priorities, content pillars and tone-of-voice guidance in one practical document.',
      },
      {
        title: 'Content calendar',
        text: 'Planned posts with captions, formats and dates, shared for your review before anything goes live.',
      },
      {
        title: 'Content creation & adaptation',
        text: 'Graphics, carousels and captions adapted to each platform, plus short-video concepts and scripts where video is part of the plan.',
      },
      {
        title: 'Platform-specific campaigns',
        text: 'Focused pushes around launches, offers, seasonal moments or events, each with a defined objective.',
      },
      {
        title: 'Community engagement',
        text: 'Agreed guidelines for replying to comments and messages so your audience receives timely, on-brand responses.',
      },
      {
        title: 'Performance reporting',
        text: 'Regular reports on what was published, how it performed and the adjustments planned for the next period.',
      },
    ],
    process: [
      { title: 'Audit & discovery', text: 'Review your current profiles, competitors, audience and goals.' },
      { title: 'Strategy & pillars', text: 'Define platforms, content themes, voice and success measures.' },
      { title: 'Create & schedule', text: 'Produce content, gather your approval and schedule publishing.' },
      { title: 'Engage & refine', text: 'Manage engagement, review results and refine the plan.' },
    ],
    benefits: [
      {
        title: 'A recognisable brand presence',
        text: 'Consistent visuals and messaging help people remember you and understand what you offer.',
      },
      {
        title: 'Time back for your team',
        text: 'A planned calendar and approval workflow replace last-minute decisions about what to post.',
      },
      {
        title: 'Better-informed decisions',
        text: 'Reporting shows which topics and formats resonate, so effort goes where it is most useful.',
      },
      {
        title: 'Stronger customer relationships',
        text: 'Responsive engagement shows prospects and customers there are real people behind the brand.',
      },
    ],
    suitableFor: [
      'Businesses with inactive or inconsistent profiles that want a reliable, professional presence.',
      'Ecommerce and consumer brands that depend on visual discovery and repeat customers.',
      'B2B and professional service firms building authority on LinkedIn.',
      'Teams that create content in-house but need strategy, planning and reporting support.',
    ],
    faqs: [
      {
        q: 'Which social media platforms do you manage?',
        a: 'We work across the major platforms, including Instagram, Facebook and LinkedIn, and TikTok or YouTube where they suit your audience and resources. Recommendations are based on where your customers spend time and what you can sustain, rather than trying to be everywhere.',
      },
      {
        q: 'Do you create the content, or do we?',
        a: 'Either approach works. We can plan and create content for you, or provide strategy, calendars and guidance while your team produces some or all of it. Responsibilities are agreed at the start so nothing falls through the gaps.',
      },
      {
        q: 'Will I approve posts before they are published?',
        a: 'Yes. Content is shared in advance for review, so you stay in control of everything published on behalf of your brand.',
      },
      {
        q: 'How do you measure social media success?',
        a: 'It depends on the goal. For awareness we look at reach and engagement quality; for traffic or lead goals we track link clicks, website behaviour and enquiries using analytics and UTM tagging. We explain the results and what we plan to adjust.',
      },
      {
        q: 'Can organic social media work alongside paid ads?',
        a: 'Yes, and they usually perform better together. Organic content builds trust and gives your ads credibility, while paid campaigns extend reach to new audiences. Our Meta Ads & Google Ads service covers the paid side.',
      },
    ],
    related: ['meta-google-ads', 'lead-generation', 'website-development'],
    cta: {
      title: "Let's plan a social presence your audience will notice",
      text: 'Tell us about your business and current channels, and we will suggest where to focus first.',
    },
  },

  /* --------------------------------------------------------------------- */
  'website-development': {
    metaTitle: 'Website Development Services',
    metaDescription:
      'Website development services for fast, responsive, conversion-focused business websites and landing pages, designed around your brand, your visitors and search visibility.',
    hero: {
      eyebrow: 'Website Development',
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
      'Businesses running ads that need dedicated landing pages.',
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
        a: 'Every build includes on-page SEO foundations such as clean URLs, metadata, a logical heading structure, image alt text and a sitemap. Ongoing keyword research and content optimisation are available through our On-Page SEO service.',
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Yes. We review what currently works, what does not and which content should be kept, then plan a redesign that improves clarity and performance while protecting valuable existing pages and URLs where possible.',
      },
    ],
    related: ['on-page-seo', 'lead-generation', 'meta-google-ads'],
    cta: {
      title: "Let's build a website that works as hard as you do",
      text: 'Share a little about your business and what your website needs to achieve, and we will outline a sensible approach.',
    },
  },

  /* --------------------------------------------------------------------- */
  'meta-google-ads': {
    metaTitle: 'Meta Ads & Google Ads Management',
    metaDescription:
      'Meta Ads and Google Ads management: paid social on Facebook and Instagram plus paid search on Google, with audience research, creative planning, conversion tracking and optimisation.',
    hero: {
      eyebrow: 'Meta Ads & Google Ads',
      title: 'Paid Advertising That Reaches the Right People at the Right Moment',
      intro:
        'Meta Ads and Google Ads serve different purposes. We help you decide which fits your goals, or how they can work together, then plan, launch and optimise campaigns with tracking you can trust.',
    },
    overview: {
      heading: 'Two platforms, two different jobs',
      paragraphs: [
        'Google Ads, particularly Search campaigns, reaches people who are actively looking for something. They type a query and your ad can appear alongside the results, which makes paid search well suited to capturing existing demand. Meta Ads place your message in the feeds, Stories and Reels of Facebook and Instagram users based on their interests, behaviours and demographics, which makes paid social well suited to creating demand, often before someone has started searching.',
        'Treating both platforms the same tends to waste budget: broad awareness messages on search, or "buy now" offers shown to cold social audiences who have never heard of you. Our approach starts with your objective, budget and buying cycle, then gives each platform a clear role.',
        'Campaigns are built on conversion tracking so decisions are based on meaningful actions such as enquiries, purchases or bookings, not clicks alone. We review performance regularly, test new creative, audiences and keywords, and report in plain language.',
      ],
    },
    problems: {
      heading: 'Paid advertising issues we often see',
      items: [
        {
          title: 'Spending without clear measurement',
          text: 'Without reliable conversion tracking it is impossible to know which campaigns are producing enquiries or sales.',
        },
        {
          title: 'Ads reaching the wrong people',
          text: 'Broad targeting, missing negative keywords or loose audiences can use budget on clicks that were never likely to convert.',
        },
        {
          title: 'Creative fatigue',
          text: 'Running the same ads for months often leads to declining engagement and rising costs.',
        },
        {
          title: 'Landing pages that do not match the ad',
          text: 'Sending ad traffic to a generic homepage breaks the promise made in the ad and loses interested visitors.',
        },
      ],
    },
    spotlight: {
      variant: 'comparison',
      heading: 'Meta Ads vs Google Ads at a glance',
      intro: 'Both can be valuable. The difference lies in how people are reached and what they are doing at that moment.',
      columns: [
        {
          title: 'Meta Ads',
          subtitle: 'Paid social',
          channels: 'Facebook · Instagram · Messenger · Audience Network',
          bestFor: 'Building awareness and creating demand',
          points: [
            'Targets people by interests, behaviours, demographics and custom audiences',
            'Visual creative: images, video, carousels and Stories/Reels formats',
            'Strong for product discovery, launches, events and retargeting',
            'Reaches people before they start actively searching',
          ],
        },
        {
          title: 'Google Ads',
          subtitle: 'Paid search & more',
          channels: 'Google Search · Performance Max · Display · YouTube',
          bestFor: 'Capturing existing intent',
          points: [
            'Targets people by the keywords and phrases they search for',
            'Text ads matched to the search query, with extensions and assets',
            'Strong for services people actively look for and urgent needs',
            'Reaches people at the moment they are looking for a solution',
          ],
        },
      ],
      note: 'Many businesses benefit from both: Meta to introduce the brand and re-engage visitors, Google to capture people who are ready to act.',
    },
    deliverables: [
      {
        title: 'Campaign strategy',
        text: 'Objectives, platform roles, budget allocation and success measures agreed before anything launches.',
      },
      {
        title: 'Audience & keyword research',
        text: 'Audience definitions for Meta, plus keyword lists, match types and negative keywords for Google.',
      },
      {
        title: 'Ad creative planning',
        text: 'Ad copy, creative briefs and format recommendations tailored to each platform and placement.',
      },
      {
        title: 'Conversion tracking',
        text: 'Setup or review of Meta Pixel, Google Ads conversions and analytics events in your own accounts.',
      },
      {
        title: 'Ongoing optimisation',
        text: 'Budget, bid, audience, keyword and creative adjustments based on performance data.',
      },
      {
        title: 'Clear reporting',
        text: 'Regular summaries of spend, results and the actions planned next, without unnecessary jargon.',
      },
    ],
    process: [
      { title: 'Audit & objectives', text: 'Review existing accounts, tracking, offers and goals.' },
      { title: 'Build & track', text: 'Structure campaigns, prepare creative and verify conversion tracking.' },
      { title: 'Launch & test', text: 'Go live and test audiences, keywords and creative variations.' },
      { title: 'Optimise & report', text: 'Refine based on data and share clear, regular updates.' },
    ],
    benefits: [
      {
        title: 'Visibility when it matters',
        text: 'Search ads can place you in front of people actively looking for what you offer.',
      },
      {
        title: 'Control over budget',
        text: 'You set the budget, and campaigns can be scaled, paused or adjusted as results and priorities change.',
      },
      {
        title: 'Measurable activity',
        text: 'With proper tracking, you can see what ad spend is producing and make decisions accordingly.',
      },
      {
        title: 'Faster feedback',
        text: 'Paid campaigns generate data quickly, which can inform messaging, offers and even SEO priorities.',
      },
    ],
    suitableFor: [
      'Service businesses whose customers search on Google when they need help.',
      'Ecommerce brands looking to reach new buyers and re-engage past visitors.',
      'Businesses launching a new product, location or offer.',
      'Companies already advertising that want clearer tracking and a structured optimisation process.',
    ],
    faqs: [
      {
        q: 'Should I advertise on Meta or Google?',
        a: 'It depends on how your customers buy. If people actively search for your service, Google Search is often the natural starting point. If your product benefits from visual discovery, or people do not yet know they need it, Meta can be more effective. Many businesses use both, with different roles.',
      },
      {
        q: 'How much should I spend on ads?',
        a: 'There is no universal figure. The right budget depends on your market, competition, typical cost per click and how much data campaigns need to learn. We recommend a starting budget based on your goals and adjust it as real data arrives. Ad spend is paid directly to the platforms and is separate from management fees.',
      },
      {
        q: 'Do you guarantee results from ads?',
        a: 'No honest agency can guarantee specific results, because performance depends on competition, your offer, your website and factors outside anyone’s control. We commit to a structured strategy, accurate tracking, regular optimisation and transparent reporting.',
      },
      {
        q: 'Will I own my ad accounts?',
        a: 'Yes. We recommend running campaigns in ad accounts owned by your business, with access granted to us. Your data, history and creative assets always remain yours.',
      },
      {
        q: 'How soon will I see results?',
        a: 'Campaigns can start generating traffic soon after launch, but the first weeks are usually a learning phase while platforms gather data and we test audiences, keywords and creative. Expect performance to be refined over time rather than perfected on day one.',
      },
    ],
    related: ['lead-generation', 'social-media-marketing', 'website-development'],
    cta: {
      title: 'Find out which ad platform fits your goals',
      text: 'Tell us what you sell, who you sell to and any campaigns you have tried. We will suggest a practical starting point.',
    },
  },

  /* --------------------------------------------------------------------- */
  'lead-generation': {
    metaTitle: 'Lead Generation Services',
    metaDescription:
      'Lead generation services that connect targeting, landing pages, lead capture, qualification and follow-up, helping businesses attract relevant prospects and more sales conversations.',
    hero: {
      eyebrow: 'Lead Generation',
      title: 'Lead Generation Built Around Quality, Not Just Volume',
      intro:
        'A lead only has value if it is the right person, with a real need, who hears back from you quickly. We design lead generation systems that connect every step, from who you target to how enquiries are followed up.',
    },
    overview: {
      heading: 'Lead generation is a system, not a single campaign',
      paragraphs: [
        'Most lead generation problems are not caused by one weak link but by gaps between the steps. Ads attract the wrong audience, the landing page does not match the promise, the form asks too much or too little, and good enquiries wait days for a reply. Each stage affects the next.',
        'Our lead generation service looks at the whole journey. We define who your ideal prospects are, choose the channels most likely to reach them, build or improve landing pages with a single clear goal, design lead capture that balances ease with qualification, and help you set up follow-up so opportunities do not go cold.',
        'Success is measured by lead quality as well as quantity: how many enquiries become genuine sales conversations. That feedback is used to keep refining targeting, messaging and offers.',
      ],
    },
    problems: {
      heading: 'Lead generation challenges we address',
      items: [
        {
          title: 'Plenty of enquiries, few real opportunities',
          text: 'Leads that are outside your area, budget or service range waste sales time and hide the good ones.',
        },
        {
          title: 'Not enough enquiries',
          text: 'Interested visitors arrive but leave without contacting you because the next step is unclear or too demanding.',
        },
        {
          title: 'Slow or inconsistent follow-up',
          text: 'Prospects often contact several providers. Delayed replies can hand the opportunity to a competitor.',
        },
        {
          title: 'No idea which source works',
          text: 'Without source tracking, it is difficult to know which campaigns or pages deserve more investment.',
        },
      ],
    },
    spotlight: {
      variant: 'flow',
      heading: 'How targeting, landing pages, capture, qualification and follow-up connect',
      intro: 'Each step shapes the quality of the next. We plan them together rather than in isolation.',
      items: [
        {
          title: 'Targeting',
          text: 'Define the ideal customer: industry, needs, location, budget and buying triggers. Everything else depends on getting this right.',
        },
        {
          title: 'Traffic',
          text: 'Reach those prospects through the most suitable channels, such as search ads, paid social, SEO content or email.',
        },
        {
          title: 'Landing page',
          text: 'Send visitors to a focused page that matches the promise of the ad, answers key questions and presents one clear action.',
        },
        {
          title: 'Lead capture',
          text: 'Use forms or booking tools that ask enough to qualify, but not so much that good prospects give up.',
        },
        {
          title: 'Qualification',
          text: 'Sort leads by fit and intent so your team spends its time on the most promising conversations.',
        },
        {
          title: 'Follow-up',
          text: 'Respond quickly with confirmation, notification and a clear next step, then record what happens.',
        },
      ],
    },
    deliverables: [
      {
        title: 'Ideal customer profile',
        text: 'A clear definition of who you want to reach, what they need and what prompts them to buy.',
      },
      {
        title: 'Funnel plan',
        text: 'A map of channels, offers, pages and follow-up steps, with how each stage will be measured.',
      },
      {
        title: 'Landing page optimisation',
        text: 'New or improved landing pages focused on one audience and one action.',
      },
      {
        title: 'Lead capture forms',
        text: 'Forms designed for completion and qualification, connected to your email or CRM.',
      },
      {
        title: 'Tracking & attribution',
        text: 'UTM parameters and conversion events so you can see where each lead came from.',
      },
      {
        title: 'Lead quality review',
        text: 'Regular review of lead outcomes with your team to refine targeting and messaging.',
      },
    ],
    process: [
      { title: 'Research', text: 'Understand your offer, ideal customers and sales process.' },
      { title: 'Build the funnel', text: 'Plan channels, landing pages, forms and follow-up.' },
      { title: 'Launch & capture', text: 'Go live with tracking in place from the first lead.' },
      { title: 'Measure & refine', text: 'Review lead quality with you and improve each stage.' },
    ],
    benefits: [
      {
        title: 'Better use of sales time',
        text: 'Clearer qualification helps your team focus on prospects who are a good fit.',
      },
      {
        title: 'Clearer view of what works',
        text: 'Source tracking shows which channels and pages produce valuable enquiries.',
      },
      {
        title: 'A more consistent pipeline',
        text: 'A repeatable system can make enquiries less dependent on referrals or chance.',
      },
      {
        title: 'Faster responses',
        text: 'Automated confirmations and notifications help you reply while interest is high.',
      },
    ],
    suitableFor: [
      'B2B companies and professional services with a considered sales process.',
      'Local and service-based businesses that rely on enquiries, quotes or bookings.',
      'Businesses whose current campaigns generate leads that rarely convert.',
      'Sales teams that want a steadier flow of relevant conversations.',
    ],
    faqs: [
      {
        q: 'How does your lead generation process work?',
        a: 'We start by understanding your offer, ideal customers and sales process. We then plan the funnel (channels, landing pages, forms and follow-up), launch with tracking in place and review lead quality with you regularly to improve each stage.',
      },
      {
        q: 'Can you guarantee a specific number of leads?',
        a: 'No. Lead volume depends on your market, offer, budget, competition and many other factors. We focus on building a well-measured system and improving it based on real results, and we are open about what the data shows.',
      },
      {
        q: 'What counts as a qualified lead?',
        a: 'We define that with you at the start. It usually combines fit (the right industry, location, size or budget) with intent (a real need and timeframe). Clear criteria let us optimise toward the leads your team actually wants.',
      },
      {
        q: 'Do I need a new website for lead generation?',
        a: 'Not necessarily. Often a dedicated landing page or improvements to a few key pages is enough. If your website is a major barrier, we will explain why and discuss options through our Website Development service.',
      },
      {
        q: 'Can leads go directly into our CRM?',
        a: 'In many cases, yes. Depending on the tools you use, enquiries can be sent by email or connected to popular CRM and automation platforms. We confirm what is possible with your setup before building anything.',
      },
    ],
    related: ['meta-google-ads', 'website-development', 'on-page-seo'],
    cta: {
      title: "Let's map out a lead generation system for your business",
      text: 'Tell us who your ideal customers are and how you currently win new business, and we will identify the biggest opportunities.',
    },
  },

  /* --------------------------------------------------------------------- */
  'on-page-seo': {
    metaTitle: 'On-Page SEO Services',
    metaDescription:
      'On-page SEO services covering search intent, keyword mapping, title tags, meta descriptions, headings, content quality, internal links, image optimisation and structured data.',
    hero: {
      eyebrow: 'On-Page SEO',
      title: 'On-Page SEO That Makes Your Pages Clearer to Search Engines and People',
      intro:
        'Search engines rank pages, not just websites. We optimise the structure, content and signals of your most important pages so they match what people search for and are easy for search engines to understand.',
    },
    overview: {
      heading: 'Relevance starts on the page',
      paragraphs: [
        'On-page SEO covers everything you control on a page: the words you use, how content is structured, the title and description shown in search results, how pages link to each other, image optimisation and technical signals such as structured data. Done well, it helps search engines understand what each page is about and helps visitors quickly find what they came for.',
        'The foundation is search intent. Someone searching "what is lead generation" wants an explanation; someone searching "lead generation agency" is comparing providers. We research the terms your customers use, identify the intent behind them and map each topic to the page best suited to answer it, which also prevents several pages from competing for the same query.',
        'SEO takes time, and nobody can promise specific rankings. What we can do is remove barriers, improve relevance and quality, and give your pages a strong on-page foundation, with clear documentation of what changed and why.',
      ],
    },
    problems: {
      heading: 'On-page issues that hold pages back',
      items: [
        {
          title: 'Content that misses search intent',
          text: 'A sales page competing for an informational query, or a thin page for a complex topic, rarely satisfies searchers.',
        },
        {
          title: 'Missing or duplicate metadata',
          text: 'Generic or repeated titles and descriptions make results less appealing and harder to tell apart.',
        },
        {
          title: 'Weak structure and internal linking',
          text: 'Unclear headings and isolated pages make content harder to scan and harder for search engines to prioritise.',
        },
        {
          title: 'Pages competing with each other',
          text: 'Several pages targeting the same topic can split relevance and confuse search engines about which to show.',
        },
      ],
    },
    spotlight: {
      variant: 'cards',
      heading: 'The on-page elements we review and improve',
      intro: 'Every recommendation is tied to a specific page and a clear reason.',
      items: [
        { title: 'Search intent', text: 'Making sure each page’s content type and depth fit what searchers are looking for.' },
        { title: 'Keyword mapping', text: 'Assigning primary and supporting topics to the most relevant page on your site.' },
        { title: 'Title tags', text: 'Unique, descriptive titles that reflect the page topic and encourage the right clicks.' },
        { title: 'Meta descriptions', text: 'Accurate summaries that set clear expectations in the search results.' },
        { title: 'Heading structure', text: 'One clear H1 and a logical H2/H3 hierarchy that mirrors the content.' },
        { title: 'Content quality', text: 'Improving clarity, depth, accuracy and usefulness, without keyword stuffing.' },
        { title: 'Internal linking', text: 'Descriptive links that connect related pages and guide visitors and crawlers.' },
        { title: 'Image optimisation', text: 'Descriptive alt text, sensible file names, modern formats and correct sizing.' },
        { title: 'Structured data', text: 'Relevant, valid schema markup that accurately reflects visible page content.' },
        { title: 'Technical checks', text: 'Indexability, canonical tags, crawlable links, mobile usability and speed signals.' },
      ],
    },
    deliverables: [
      {
        title: 'On-page SEO audit',
        text: 'A prioritised review of your key pages, highlighting issues and opportunities.',
      },
      {
        title: 'Keyword & intent map',
        text: 'A document showing which topics each page targets and why.',
      },
      {
        title: 'Metadata optimisation',
        text: 'Rewritten title tags and meta descriptions for priority pages.',
      },
      {
        title: 'Content improvements',
        text: 'Specific recommendations for headings, copy, FAQs and supporting sections, or implemented changes where agreed.',
      },
      {
        title: 'Internal linking plan',
        text: 'Suggested links between related pages using clear, descriptive anchor text.',
      },
      {
        title: 'Technical & schema checks',
        text: 'Review of indexing, canonicals, structured data and images, with fixes or developer-ready notes.',
      },
    ],
    process: [
      { title: 'Audit & research', text: 'Crawl key pages and research how your customers search.' },
      { title: 'Map & prioritise', text: 'Assign topics to pages and rank fixes by likely impact.' },
      { title: 'Optimise', text: 'Improve metadata, content, structure, links and markup.' },
      { title: 'Monitor & refine', text: 'Track Search Console data and refine over time.' },
    ],
    benefits: [
      {
        title: 'Clearer relevance',
        text: 'Well-structured, intent-focused pages give search engines stronger signals about what you offer.',
      },
      {
        title: 'Better click-through potential',
        text: 'Accurate, compelling titles and descriptions can help more searchers choose your result.',
      },
      {
        title: 'Improved user experience',
        text: 'Clear headings, useful content and helpful internal links benefit visitors as much as search engines.',
      },
      {
        title: 'Long-term value',
        text: 'Unlike ad spend, optimised content keeps working after the work is done, though it benefits from periodic review.',
      },
    ],
    suitableFor: [
      'Businesses whose websites receive little organic search traffic.',
      'Companies planning a new website or redesign that want SEO built in from the start.',
      'Service businesses competing for industry-specific or local searches.',
      'Teams publishing content that want it to be easier to discover.',
    ],
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'On-page changes can be crawled within days or weeks, but meaningful changes in rankings and traffic usually develop over several months. Timelines vary with competition, your site’s existing authority, content quality and how often search engines crawl your pages.',
      },
      {
        q: 'What is the difference between on-page and off-page SEO?',
        a: 'On-page SEO covers elements on your own website: content, structure, metadata, internal links and technical signals. Off-page SEO refers to factors elsewhere, such as links from other websites and brand mentions. Our service focuses on on-page optimisation, the foundation other SEO work builds on.',
      },
      {
        q: 'Can you guarantee first-page rankings?',
        a: 'No. Search engines decide rankings using many factors that no agency controls, and results change over time. Anyone guaranteeing a specific position should be treated with caution. We focus on improvements that make your pages genuinely more relevant and useful.',
      },
      {
        q: 'Do you need access to my website?',
        a: 'To implement changes directly, we need appropriate access to your CMS. We also recommend access to Google Search Console and analytics so decisions are based on real search data. Alternatively, we can provide recommendations for your team to implement.',
      },
      {
        q: 'Does structured data improve rankings?',
        a: 'Structured data helps search engines understand page content and can make pages eligible for some enhanced search features, but it does not guarantee rich results or higher rankings. We only add markup that accurately reflects visible content.',
      },
    ],
    related: ['website-development', 'lead-generation', 'social-media-marketing'],
    cta: {
      title: 'Get a clearer picture of your on-page SEO',
      text: 'Send us your website and the services you most want to be found for, and we will discuss where on-page improvements could help.',
    },
  },
};

export function getServiceContent(slug) {
  return serviceContent[slug];
}
