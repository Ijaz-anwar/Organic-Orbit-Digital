import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  Compass,
  Calendar,
  Mail,
} from 'lucide-react';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ChallengesSection from '@/components/ChallengesSection';
import PortfolioSection from '@/components/PortfolioSection';
import FAQ from '@/components/FAQ';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Web Development and Digital Marketing Services for Business Growth',
  description:
    'Discover professional web development and digital marketing services, including website design, SEO, social media marketing, PPC advertising, and lead generation to grow your business online.',
  path: '/',
  absoluteTitle: true,
});

const homepageDeepSections = [
  {
    number: '1',
    title: '1. Professional Website Design and Development',
    href: '/services/website-development/',
    linkLabel: 'Explore Website Development',
    paragraphs: [
      'Your website often creates the first impression potential customers have of your business. A slow, outdated, or confusing website may discourage visitors from exploring your offerings. A modern, user-friendly website helps communicate professionalism and makes it easier for customers to understand what you provide.',
      'Professional website development involves more than creating attractive pages. It requires careful planning, reliable technology, clear navigation, and a structure designed around your business goals.',
    ],
    subsections: [
      {
        heading: 'Custom Website Development',
        paragraphs: [
          'Every business has different requirements. A custom website can be developed around your brand identity, target audience, services, and operational needs.',
          'Custom development may include interactive features, appointment booking systems, customer portals, lead generation forms, service pages, and integrations with third-party tools.',
          'A website built around your business objectives can provide a more relevant experience for your customers while supporting your long-term growth plans.',
        ],
      },
      {
        heading: 'Responsive and Mobile-Friendly Design',
        paragraphs: [
          'Many people browse websites using smartphones and tablets. A responsive website automatically adapts its layout to different screen sizes, making information easier to read and navigation more convenient.',
          'Mobile-friendly design includes readable text, appropriately sized buttons, accessible menus, optimized images, and forms that work well on smaller screens.',
          'A consistent experience across mobile devices, tablets, and desktop computers helps reduce unnecessary friction and gives visitors more opportunities to engage with your business.',
        ],
      },
      {
        heading: 'E-Commerce Website Development',
        paragraphs: [
          'Businesses that sell products online need a secure and convenient shopping experience. E-commerce development can include product catalogs, shopping carts, payment integrations, inventory management, shipping options, and order tracking.',
          'A carefully designed online store makes it easier for customers to find products, compare options, complete purchases, and return for future orders.',
          'For businesses planning to expand online sales, an optimized e-commerce website can become an important part of their revenue strategy.',
        ],
      },
    ],
  },
  {
    number: '2',
    title: '2. Search Engine Optimization (SEO) Services',
    href: '/services/search-engine-optimization/',
    linkLabel: 'Explore Search Engine Optimization',
    paragraphs: [
      "Search engine optimization helps improve a website's visibility in organic search results. When people search for products, services, or information related to your business, SEO can help your pages become easier to discover.",
      'Unlike advertising campaigns that charge for each click, organic SEO focuses on earning visibility through relevant content, useful pages, and a technically sound website. However, SEO requires ongoing effort, and rankings or traffic increases cannot be guaranteed.',
    ],
    subsections: [
      {
        heading: 'Keyword Research and SEO Strategy',
        paragraphs: [
          'Keyword research identifies the words and phrases your potential customers use when searching online. Understanding their search intent helps you create pages that address their needs.',
          'A professional SEO strategy may target:',
        ],
        bullets: [
          'Service-related keywords that attract potential buyers.',
          'Local keywords that help nearby customers discover your business.',
          'Informational keywords that answer common questions.',
          'Long-tail keywords that address specific customer needs.',
          'Commercial keywords used by people comparing available solutions.',
        ],
        outro:
          'Selecting relevant keywords and assigning them to appropriate pages helps create a clear website structure and reduces unnecessary competition between your own pages.',
      },
      {
        heading: 'On-Page SEO Optimization',
        paragraphs: [
          'On-page SEO improves individual web pages so search engines and users can understand their content more easily.',
          'Common activities include optimizing title tags, meta descriptions, headings, URLs, internal links, image alt text, and page content.',
          'High-quality content should provide meaningful answers rather than repeat keywords unnaturally. Each page should have a clear purpose, useful information, and a logical structure that guides visitors toward the next step.',
        ],
      },
      {
        heading: 'Technical SEO',
        paragraphs: [
          'Technical SEO addresses website issues that can affect crawling, indexing, performance, and usability.',
          'Depending on the website, technical improvements may include fixing broken links, improving page speed, reviewing redirects, creating XML sitemaps, implementing canonical tags, and addressing mobile usability problems.',
          'A technically healthy website gives search engines a better opportunity to discover and understand its important pages.',
        ],
      },
      {
        heading: 'Local SEO Services',
        paragraphs: [
          'Local SEO helps businesses become more visible to customers searching for services in a particular geographic area.',
          'It may involve optimizing a Google Business Profile, maintaining consistent business information, developing location-specific website content, responding to customer reviews, and improving local business listings.',
          'Local SEO can be especially valuable for agencies, contractors, clinics, restaurants, repair companies, and other businesses that serve customers within specific locations.',
        ],
      },
    ],
  },
  {
    number: '3',
    title: '3. Digital Marketing Strategy and Consulting',
    href: '/services/',
    linkLabel: 'View All Digital Marketing Services',
    paragraphs: [
      'Successful digital marketing begins with a clear plan. Without defined objectives, businesses may spend money on activities that generate attention but fail to produce meaningful results.',
      'Digital marketing consulting helps identify opportunities, understand customer behavior, and select the channels most appropriate for your business.',
      'A comprehensive strategy typically includes audience research, competitor analysis, campaign planning, budget allocation, messaging, and performance measurement.',
      'The process starts by identifying the outcomes that matter most. These might include generating qualified leads, increasing online sales, improving brand recognition, attracting local customers, or encouraging repeat purchases.',
      'Marketing activities can then be organized around these goals.',
      'For example, a business with an established website but limited organic traffic may benefit from SEO and content marketing. A new company that needs faster exposure might combine paid search advertising with landing pages designed to capture inquiries.',
      'The best strategy depends on your industry, available resources, competition, sales process, and customer acquisition goals.',
    ],
    subsections: [],
  },
  {
    number: '4',
    title: '4. Social Media Marketing Services',
    href: '/services/social-media-management/',
    linkLabel: 'Explore Social Media Management',
    paragraphs: [
      'Social media marketing helps businesses connect with their audiences, share valuable content, build brand recognition, and encourage customer interaction.',
      'Platforms such as Facebook, Instagram, LinkedIn, TikTok, and Pinterest offer different opportunities depending on your audience and industry.',
      'A professional social media strategy focuses on choosing the appropriate platforms rather than trying to maintain an active presence everywhere.',
    ],
    subsections: [
      {
        heading: 'Social Media Content Creation',
        paragraphs: [
          "Consistent, relevant content helps communicate your brand's personality and expertise. Content formats may include educational posts, short videos, product demonstrations, customer stories, industry insights, and promotional campaigns.",
          'An effective content calendar organizes publishing schedules around audience interests, business priorities, and seasonal opportunities.',
          'The goal is to provide value while giving potential customers useful reasons to remember and engage with your business.',
        ],
      },
      {
        heading: 'Social Media Advertising',
        paragraphs: [
          'Paid social media campaigns allow businesses to promote offers to selected audiences using available targeting options.',
          'Campaign objectives may include website visits, lead generation, product sales, video views, or brand awareness.',
          'Effective campaigns require relevant creative materials, clear messaging, suitable landing pages, appropriate budget management, and regular performance analysis.',
          'Businesses should evaluate advertising results using meaningful metrics such as qualified leads, conversion rates, cost per acquisition, and return on advertising spend where applicable.',
        ],
      },
    ],
  },
  {
    number: '5',
    title: '5. Pay-Per-Click (PPC) Advertising',
    href: '/services/google-ads-management/',
    linkLabel: 'Explore Google Ads & Meta Ads',
    paragraphs: [
      'Pay-per-click advertising allows businesses to display paid advertisements across search engines and other advertising platforms. Advertisers generally pay when users click their ads, although pricing models vary by campaign type and platform.',
      'PPC can help businesses reach people actively searching for particular products or services, making it a useful option for generating targeted traffic.',
      'Professional PPC management may include keyword selection, audience research, campaign structure, advertisement creation, conversion tracking, budget optimization, and landing page testing.',
    ],
    subsections: [
      {
        heading: 'Google Ads Management',
        paragraphs: [
          'Google Ads campaigns can target users searching for relevant services, browsing participating websites, watching videos, or interacting with other Google advertising placements.',
          'Search campaigns are particularly useful when people already demonstrate interest in a product or service.',
          'To improve performance, campaigns should connect relevant search terms with persuasive advertisements and landing pages that clearly explain the offer.',
          'Regular monitoring helps identify ineffective keywords, refine targeting, and allocate spending toward campaigns that produce valuable outcomes.',
          'Paid advertising can generate traffic relatively quickly, but results depend on competition, budget, offer quality, website experience, and campaign management.',
        ],
      },
    ],
  },
  {
    number: '6',
    title: '6. Content Marketing and Copywriting',
    href: '/blog/',
    linkLabel: 'Read Our Digital Marketing Blog',
    paragraphs: [
      'Content marketing attracts and educates potential customers by providing useful information related to their interests, questions, and challenges.',
      'Rather than relying entirely on direct promotion, businesses can build trust by publishing content that helps audiences make informed decisions.',
      'Common content marketing services include blog writing, website copywriting, landing page content, case studies, email newsletters, downloadable guides, and product descriptions.',
    ],
    subsections: [
      {
        heading: 'SEO Blog Writing',
        paragraphs: [
          'Well-planned blog articles can answer customer questions, target relevant search terms, and support organic visibility.',
          'For example, a web development company might publish articles about website costs, mobile-friendly design, e-commerce platforms, website security, and common development mistakes.',
          'These resources can attract visitors during different stages of the buying journey.',
          'High-quality blog content should be original, accurate, easy to understand, and organized around a clear search intent. Updating older articles can also help maintain their usefulness as information and business offerings change.',
        ],
      },
      {
        heading: 'Website Copywriting',
        paragraphs: [
          'Website copy explains what your business does, who it serves, and why potential customers should consider your services.',
          'Strong copywriting uses clear language, emphasizes relevant benefits, addresses common concerns, and includes appropriate calls to action.',
          'Service pages, homepage content, landing pages, and contact pages should work together to guide visitors toward meaningful actions such as requesting a quote, booking a consultation, or making a purchase.',
        ],
      },
    ],
  },
  {
    number: '7',
    title: '7. Website Maintenance, Security, and Performance Optimization',
    href: '/services/website-development/',
    linkLabel: 'Learn About Website Maintenance',
    paragraphs: [
      'Launching a website is only the beginning. Regular maintenance helps keep it secure, functional, and aligned with changing business requirements.',
      'Website maintenance services may include software updates, backups, security checks, broken-link monitoring, bug fixes, content updates, and compatibility testing.',
      'Performance optimization focuses on making pages load efficiently and respond smoothly to user interactions.',
      'Depending on the website, improvements may involve compressing images, reducing unnecessary scripts, improving caching, and optimizing server responses.',
      'Website security is equally important. Appropriate protections can include HTTPS, secure authentication, access controls, software updates, and reliable backup procedures.',
      'A maintained website reduces avoidable technical problems and supports a more dependable experience for customers.',
    ],
    subsections: [],
  },
  {
    number: '8',
    title: '8. Conversion Rate Optimization and Lead Generation',
    href: '/services/lead-generation-for-business/',
    linkLabel: 'Explore Lead Generation for Business',
    paragraphs: [
      'Attracting website visitors is important, but traffic alone does not guarantee business growth. Conversion rate optimization (CRO) focuses on helping more visitors complete valuable actions.',
      'These actions might include submitting a contact form, requesting a quote, scheduling an appointment, signing up for a newsletter, or purchasing a product.',
      'CRO services can include reviewing website analytics, analyzing visitor behavior, improving page layouts, testing headlines, simplifying forms, and strengthening calls to action.',
      "For example, a service page with unclear pricing information and a difficult contact form may discourage potential customers. Improving the page's clarity and simplifying the inquiry process can reduce friction.",
      'Lead generation strategies may also include dedicated landing pages, downloadable resources, email follow-up sequences, and customer relationship management integrations.',
      'The objective is to make it easier for interested prospects to take the next step.',
    ],
    subsections: [],
  },
];

const combinedBenefits = [
  {
    num: '01',
    title: '1. Stronger online visibility',
    text: 'A technically sound website combined with relevant SEO content can improve opportunities for customers to discover your services.',
  },
  {
    num: '02',
    title: '2. Better user experience',
    text: 'Responsive design, intuitive navigation, and clear messaging help visitors find the information they need.',
  },
  {
    num: '03',
    title: '3. More qualified leads',
    text: 'Targeted marketing campaigns can attract people whose needs align with your products or services.',
  },
  {
    num: '04',
    title: '4. Improved brand credibility',
    text: 'A professional website, consistent branding, and helpful content can strengthen customer confidence.',
  },
  {
    num: '05',
    title: '5. More effective marketing campaigns',
    text: 'When websites and marketing strategies are planned together, landing pages, advertising messages, and conversion goals can remain aligned.',
  },
  {
    num: '06',
    title: '6. Measurable performance',
    text: 'Analytics and conversion tracking help businesses understand which channels generate visitors, inquiries, and sales.',
  },
  {
    num: '07',
    title: '7. Opportunities for sustainable growth',
    text: 'SEO, content marketing, customer retention, and ongoing website improvements can support long-term development.',
  },
];

const agencySelectionFactors = [
  {
    title: 'Relevant experience',
    text: 'Look for experience with websites, industries, or marketing objectives similar to yours.',
  },
  {
    title: 'Portfolio and case studies',
    text: 'Review previous projects and ask how success was measured.',
  },
  {
    title: 'Clear service offerings',
    text: 'Make sure the agency explains exactly what is included in its development and marketing packages.',
  },
  {
    title: 'Transparent communication',
    text: 'Choose a team that provides clear timelines, progress updates, and realistic expectations.',
  },
  {
    title: 'Performance reporting',
    text: 'Ask which metrics will be tracked and how often results will be reviewed.',
  },
  {
    title: 'Scalable solutions',
    text: 'Select services that can adapt as your business expands.',
  },
  {
    title: 'Security and ownership',
    text: 'Confirm that you retain appropriate access to your website, domain, analytics, advertising accounts, and business data.',
  },
];

const homeFaqs = [
  {
    q: 'What services does Organic Orbit Digital offer?',
    a: 'We offer six core digital marketing and web services: Website Development, Search Engine Optimization, Social Media Management, Meta Ads Management, Google Ads Management, and Lead Generation for Business. Each service can be engaged on its own or combined into a coordinated growth plan.',
  },
  {
    q: 'How can digital marketing help my business?',
    a: 'A structured digital marketing approach helps the right people discover your business, understand what you offer, and take a clear next step—whether that is making an enquiry, booking a consultation, or buying online. By connecting your website, search presence, social channels, and advertising, each channel supports the others rather than working in isolation.',
  },
  {
    q: 'How long does SEO usually take to show results?',
    a: 'Technical and on-page improvements can be indexed by search engines within days or weeks, but meaningful improvements in organic visibility and search traffic typically build over several months. The exact timeframe depends on competition in your market, your website’s current foundation, and content depth.',
  },
  {
    q: 'Do you manage both Meta Ads and Google Ads?',
    a: 'Yes. We plan, launch, and optimise both Meta Ads (paid social on Facebook and Instagram to build awareness and demand) and Google Ads (paid search campaigns to capture high-intent searches), complete with conversion tracking in your own ad accounts.',
  },
  {
    q: 'Can you build a website for my business?',
    a: 'Yes. Our Website Development service covers modern, mobile-first business websites, WordPress and eCommerce websites, and campaign landing pages designed for clarity, fast performance, accessibility, on-page SEO foundations, and straightforward visitor enquiries.',
  },
  {
    q: 'How does your lead generation process work?',
    a: 'We start by clarifying your ideal customer profile and offer, then connect the full journey: targeted traffic, a focused landing page, a balanced lead capture form, qualification criteria, and clear follow-up steps so your team can respond promptly.',
  },
  {
    q: 'How can I request a proposal?',
    a: 'Use our Contact page to share a few details about your business, the services you are exploring, and your goals—or email us directly at contact@organicorbitdigital.com. We will review your enquiry, ask any clarifying questions, and outline a clear recommendation and scope.',
  },
  {
    q: 'Do you offer customized marketing strategies?',
    a: 'Yes. Every business has different goals, audiences, and internal resources. Rather than forcing a rigid package, we recommend the specific services, channels, and priorities that make sense for your stage of growth.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section (H1: Web Development and Digital Marketing Services for Business Growth) */}
      <Hero />

      {/* Introduction & What Are Web Development and Digital Marketing Services? */}
      <section className="section bg-white" aria-labelledby="what-are-services-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Foundation for Online Growth
              </p>
              <h2
                id="what-are-services-heading"
                className="mt-3 text-3xl leading-tight font-bold text-ink sm:text-4xl"
              >
                What Are Web Development and Digital Marketing Services?
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-slate-700">
                <p>
                  A professional website gives your business a place to showcase its products, services, and expertise.
                  Digital marketing helps potential customers discover that website through search engines, social media
                  platforms, paid advertising, and other online channels. When these two services work together, they
                  create a powerful strategy for building brand awareness, improving customer engagement, and generating
                  measurable business growth.
                </p>
                <p>
                  From custom website design and search engine optimization (SEO) to social media marketing and paid
                  advertising, the right digital strategy can help your business compete effectively in the modern
                  marketplace.
                </p>
                <p>
                  Web development and digital marketing services are two complementary solutions that help businesses
                  establish, promote, and grow their online presence.
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:col-span-6">
              <div className="card bg-mist/70 p-7">
                <span className="inline-flex rounded-full bg-orbit-50 px-3 py-1 text-xs font-semibold text-orbit-700 ring-1 ring-orbit-100">
                  Web Development
                </span>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-700">
                  Web development focuses on creating, maintaining, and improving websites and web applications. It
                  includes website design, front-end and back-end development, e-commerce functionality, mobile
                  responsiveness, security, and performance optimization.
                </p>
              </div>

              <div className="card bg-mist/70 p-7">
                <span className="inline-flex rounded-full bg-organic-50 px-3 py-1 text-xs font-semibold text-organic-700 ring-1 ring-organic-100">
                  Digital Marketing
                </span>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-700">
                  Digital marketing focuses on promoting a business online to attract relevant visitors, convert
                  prospects into customers, and maintain relationships with existing clients. It includes SEO, content
                  marketing, social media management, email marketing, paid advertising, and conversion rate
                  optimization.
                </p>
              </div>

              <div className="card border-orbit-100 bg-gradient-to-br from-orbit-50/60 via-white to-organic-50/40 p-7">
                <p className="text-[0.96rem] leading-relaxed text-slate-700">
                  A well-developed website provides the foundation for your digital marketing campaigns. Meanwhile,
                  effective marketing brings qualified traffic to your website and encourages visitors to take action.
                  For example, a local service company might use a professionally developed website to explain its
                  services, display customer testimonials, and collect inquiries. SEO can help the website appear in
                  relevant search results, while social media and paid advertisements can introduce the company to
                  additional potential customers. Together, these services help turn your online presence into a
                  practical business growth tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core 6 Service Cards */}
      <ServicesSection className="bg-mist" />

      {/* 8 Comprehensive Capability Sections from Content File */}
      <section className="section bg-white" aria-labelledby="complete-services-guide-heading">
        <div className="container-site">
          <SectionHeading
            id="complete-services-guide-heading"
            eyebrow="Complete Service Guide"
            title="Web Development and Digital Marketing Solutions Explained"
            intro="Explore how each discipline—from custom website development and SEO to PPC advertising, copywriting, maintenance, and conversion optimization—supports your business."
          />

          <div className="mt-14 space-y-10">
            {homepageDeepSections.map((sec) => (
              <article
                key={sec.number}
                className="card overflow-hidden border-line bg-mist/40 p-7 sm:p-10"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-center">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orbit-50 px-3 py-1 font-display text-xs font-bold text-orbit-700 ring-1 ring-orbit-100">
                      <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                      Capability 0{sec.number}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{sec.title}</h2>
                  </div>
                  <Link
                    href={sec.href}
                    className="btn btn-outline min-h-10 shrink-0 px-4 py-2 text-xs sm:text-sm"
                  >
                    {sec.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-slate-700">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {sec.subsections.length > 0 && (
                  <div
                    className={`mt-8 grid gap-6 ${
                      sec.subsections.length === 1
                        ? 'lg:grid-cols-1'
                        : sec.subsections.length === 2
                          ? 'md:grid-cols-2'
                          : 'md:grid-cols-2 lg:grid-cols-3'
                    }`}
                  >
                    {sec.subsections.map((sub) => (
                      <div key={sub.heading} className="card bg-white p-6">
                        <h3 className="text-lg font-bold text-ink">{sub.heading}</h3>
                        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                          {sub.paragraphs.map((sp, sIdx) => (
                            <p key={sIdx}>{sp}</p>
                          ))}
                        </div>
                        {sub.bullets && (
                          <ul className="mt-4 space-y-2 text-sm text-slate-700">
                            {sub.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2.5">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.outro && (
                          <p className="mt-4 text-sm leading-relaxed text-slate-700">{sub.outro}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Combining Web Development and Digital Marketing */}
      <section className="section bg-mist" aria-labelledby="combining-benefits-heading">
        <div className="container-site">
          <SectionHeading
            id="combining-benefits-heading"
            eyebrow="Integrated Advantages"
            title="Benefits of Combining Web Development and Digital Marketing"
            intro="Integrating website development with digital marketing provides several advantages for growing businesses."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {combinedBenefits.map((b) => (
              <article key={b.num} className="card p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orbit-50 font-display text-xs font-bold text-orbit-600 ring-1 ring-orbit-100">
                  {b.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{b.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-orbit-100 bg-white p-5 text-sm leading-relaxed text-slate-700">
            The actual results depend on execution, market conditions, competition, and the suitability of the chosen
            strategy.
          </p>
        </div>
      </section>

      {/* Trust & Value Proposition */}
      <TrustSection />

      {/* How We Work */}
      <ProcessSection />

      {/* How to Choose the Right Web Development and Digital Marketing Agency */}
      <section className="section bg-white" aria-labelledby="choose-agency-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Agency Evaluation Guide
              </p>
              <h2
                id="choose-agency-heading"
                className="mt-3 text-3xl leading-tight font-bold text-ink sm:text-4xl"
              >
                How to Choose the Right Web Development and Digital Marketing Agency
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-slate-700">
                Choosing an agency is an important decision because your website and marketing campaigns may influence
                your brand reputation, customer acquisition, and revenue. Before hiring a provider, consider the
                following factors.
              </p>
              <div className="mt-6 rounded-2xl border border-orbit-200 bg-orbit-50/60 p-6 text-sm leading-relaxed text-slate-700">
                <p className="font-semibold text-ink">Honest expectations matter:</p>
                <p className="mt-1.5">
                  Avoid providers that guarantee specific search rankings or promise unrealistic results within a few
                  days. A reliable partner should explain its process, identify potential challenges, and recommend
                  solutions based on your business needs.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {agencySelectionFactors.map((factor) => (
                <div key={factor.title} className="card bg-mist/50 p-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-orbit-600" aria-hidden="true" />
                    <h3 className="text-base font-bold text-ink">{factor.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{factor.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Business Needs a Complete Digital Growth Strategy + Conclusion */}
      <section className="section bg-mist" aria-labelledby="complete-strategy-heading">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="card p-7 sm:p-10 lg:col-span-7">
              <p className="eyebrow">
                <Compass className="h-4 w-4" aria-hidden="true" />
                Connected Digital Ecosystem
              </p>
              <h2
                id="complete-strategy-heading"
                className="mt-3 text-2xl font-bold text-ink sm:text-3xl"
              >
                Why Your Business Needs a Complete Digital Growth Strategy
              </h2>
              <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-slate-700">
                <p>
                  A successful online business requires more than an attractive website or occasional social media
                  posts. It needs a connected approach that brings together technology, marketing, customer experience,
                  and performance measurement.
                </p>
                <p>
                  Your website serves as the central destination where potential customers learn about your business.
                  SEO helps them discover your pages through search engines. Content marketing answers their questions,
                  while social media and paid advertising introduce your offerings to relevant audiences.
                </p>
                <p>Conversion optimization then helps turn interested visitors into leads or customers.</p>
                <p>
                  When these activities support the same business objectives, it becomes easier to identify
                  opportunities, allocate resources, and make informed decisions about future investments.
                </p>
                <p>
                  Small businesses can begin with essential services such as a professional website, local SEO, and
                  clear service pages. As results and budgets allow, they can expand into content marketing, paid
                  campaigns, email automation, and advanced analytics.
                </p>
                <p>
                  A gradual, data-informed approach can help businesses build a stronger digital foundation without
                  investing in every channel at once.
                </p>
              </div>
            </div>

            <div className="card border-orbit-200 bg-gradient-to-br from-white via-white to-orbit-50/60 p-7 sm:p-10 lg:col-span-5">
              <p className="eyebrow">Conclusion</p>
              <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
                Build a Sustainable Digital Presence
              </h2>
              <div className="mt-5 space-y-4 text-[0.96rem] leading-relaxed text-slate-700">
                <p>
                  Web development and digital marketing services play an important role in helping modern businesses
                  establish credibility, attract potential customers, and compete online. A professionally developed
                  website creates a reliable foundation, while SEO, content marketing, social media, PPC advertising,
                  and conversion optimization help connect your business with the right audience.
                </p>
                <p>
                  The most effective approach begins with clear goals, a good understanding of your customers, and a
                  strategy tailored to your market. By combining user-friendly website development with consistent,
                  measurable digital marketing, businesses can improve their online presence and create more
                  opportunities for qualified leads and sales.
                </p>
                <p>
                  Whether you are launching a new business, redesigning an existing website, or looking to improve
                  marketing performance, investing in the right combination of services can help you build a more
                  effective and sustainable digital presence.
                </p>
                <p className="font-medium text-ink">
                  Ready to grow your business online? Start by evaluating your current website, identifying your
                  biggest marketing challenges, and choosing the services that best support your business goals.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  data-open-calendly
                  className="btn btn-primary w-full sm:flex-1"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book a Free Consultation
                </button>
                <Link href="/contact/" className="btn btn-outline w-full sm:flex-1">
                  <Mail className="h-4 w-4 text-orbit-600" aria-hidden="true" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges We Solve */}
      <ChallengesSection />

      {/* Featured Work / Portfolio */}
      <PortfolioSection />

      {/* FAQ Section */}
      <section className="section bg-white" aria-labelledby="home-faq-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                id="home-faq-heading"
                eyebrow="Frequently asked questions"
                title="Clear answers before we start working together"
                intro="Have a question that is not covered here? Reach out and we will give you a straightforward answer."
              />
              <div className="mt-8">
                <Link href="/contact/" className="link-underline inline-flex items-center gap-1.5 text-sm">
                  Ask our team a question
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <FAQ items={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
