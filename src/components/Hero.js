import Link from 'next/link';
import {
  ArrowRight,
  MonitorSmartphone,
  SearchCheck,
  Share2,
  Megaphone,
  Target,
  Magnet,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { LogoMark } from './Logo';

const orbitNodes = [
  {
    number: '01',
    label: 'Website Development',
    sub: 'Conversion UX',
    href: '/services/website-development/',
    icon: MonitorSmartphone,
    ring: 'inner',
    angle: '0deg',
    duration: '58s',
    iconCls: 'bg-orbit-50 text-orbit-600 ring-orbit-100',
  },
  {
    number: '02',
    label: 'Search Engine Optimization',
    sub: 'Organic Visibility',
    href: '/services/search-engine-optimization/',
    icon: SearchCheck,
    ring: 'inner',
    angle: '120deg',
    duration: '58s',
    iconCls: 'bg-teal-50 text-teal-700 ring-teal-100',
  },
  {
    number: '03',
    label: 'Social Media Management',
    sub: 'Brand & Content',
    href: '/services/social-media-management/',
    icon: Share2,
    ring: 'inner',
    angle: '240deg',
    duration: '58s',
    iconCls: 'bg-organic-50 text-organic-700 ring-organic-100',
  },
  {
    number: '04',
    label: 'Meta Ads Management',
    sub: 'Facebook & Instagram',
    href: '/services/meta-ads-management/',
    icon: Megaphone,
    ring: 'outer',
    angle: '60deg',
    duration: '78s',
    iconCls: 'bg-violet-50 text-violet-600 ring-violet-100',
  },
  {
    number: '05',
    label: 'Google Ads Management',
    sub: 'Paid Search Intent',
    href: '/services/google-ads-management/',
    icon: Target,
    ring: 'outer',
    angle: '180deg',
    duration: '78s',
    iconCls: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
  },
  {
    number: '06',
    label: 'Lead Generation',
    sub: 'Business Funnels',
    href: '/services/lead-generation-for-business/',
    icon: Magnet,
    ring: 'outer',
    angle: '300deg',
    duration: '78s',
    iconCls: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
];

const workingPillars = [
  'Coordinated strategy across channels',
  'Built for international & local businesses',
  'Transparent communication & reporting',
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-gradient-to-b from-mist via-white to-white text-ink">
      {/* Subtle light grid & soft pastel glows */}
      <div className="bg-grid-light absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-36 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-orbit-200/45 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-organic-200/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative py-16 sm:py-22 lg:py-26">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <p className="eyebrow rounded-full border border-orbit-100 bg-orbit-50/80 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-orbit-600" aria-hidden="true" />
              Connected Digital Marketing &amp; Web Development
            </p>

            <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.55rem]">
              Turn Your Digital Presence Into Your Next{' '}
              <span className="bg-gradient-to-r from-orbit-700 via-orbit-500 to-organic-600 bg-clip-text text-transparent">
                Growth Engine.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-[1.15rem]">
              From powerful websites and strategic SEO to social media management, Meta Ads, Google Ads, and qualified
              lead generation, Organic Orbit Digital helps businesses build visibility, connect with the right audience,
              and grow online.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link href="/contact/" className="btn btn-primary">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services/" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-line pt-8 text-sm text-slate-700 sm:grid-cols-3">
              {workingPillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orbit-600" aria-hidden="true" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Orbital Ecosystem Illustration (6 Numbered Services) */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto aspect-square w-full max-w-[26rem] sm:max-w-[30rem]"
              role="img"
              aria-label="Orbital diagram showing 01 Website Development, 02 Search Engine Optimization, 03 Social Media Management, 04 Meta Ads Management, 05 Google Ads Management, and 06 Lead Generation for Business connected around your business."
            >
              {/* Soft central aura */}
              <div
                className="pointer-events-none absolute inset-12 rounded-full bg-gradient-to-tr from-orbit-100/80 via-organic-100/50 to-transparent blur-2xl"
                aria-hidden="true"
              />

              {/* Outer dashed decorative ring */}
              <div
                className="orbit-ring-spin pointer-events-none absolute inset-2 rounded-full border border-dashed border-orbit-200"
                aria-hidden="true"
              />

              {/* Outer orbit track */}
              <div
                className="pointer-events-none absolute inset-6 rounded-full border border-orbit-200/80 bg-white/50"
                aria-hidden="true"
              />

              {/* Inner orbit track */}
              <div
                className="pointer-events-none absolute inset-[22%] rounded-full border border-orbit-300/70 bg-white/70"
                aria-hidden="true"
              />

              {/* Subtle crosshairs */}
              <svg
                viewBox="0 0 400 400"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                aria-hidden="true"
              >
                <line x1="200" y1="24" x2="200" y2="376" stroke="url(#heroLine)" strokeDasharray="3 6" />
                <line x1="24" y1="200" x2="376" y2="200" stroke="url(#heroLine)" strokeDasharray="3 6" />
                <defs>
                  <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4169F5" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#4169F5" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#4169F5" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central core — Your Business */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border border-orbit-200 bg-white p-3 text-center shadow-[0_16px_40px_-12px_rgb(65_105_245/0.25)] sm:h-32 sm:w-32">
                  <LogoMark idPrefix="hero-core" className="h-10 w-10" />
                  <span className="mt-1.5 font-display text-xs font-semibold tracking-wide text-ink">
                    Your Business
                  </span>
                  <span className="text-[0.65rem] font-medium text-orbit-600">Connected Core</span>
                </div>
              </div>

              {/* Orbiting channel nodes (01 – 06) */}
              {orbitNodes.map((node) => {
                const Icon = node.icon;
                const insetCls = node.ring === 'inner' ? 'inset-[22%]' : 'inset-6';
                return (
                  <div
                    key={node.number}
                    className={`orbit-arm pointer-events-none absolute ${insetCls}`}
                    style={{ '--start': node.angle, '--duration': node.duration }}
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <Link
                        href={node.href}
                        className="orbit-counter pointer-events-auto group flex items-center gap-2 rounded-2xl border border-line bg-white px-2.5 py-1.5 shadow-md transition-transform hover:scale-105 hover:border-orbit-300"
                        style={{ '--start': node.angle, '--duration': node.duration }}
                      >
                        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ring-1 ${node.iconCls}`}>
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span className="pr-1 text-left leading-tight whitespace-nowrap">
                          <span className="block text-[0.72rem] font-semibold text-ink group-hover:text-orbit-600">
                            <span className="mr-1 font-display text-[0.65rem] font-bold text-orbit-600">
                              {node.number}.
                            </span>
                            {node.label}
                          </span>
                          <span className="hidden text-[0.64rem] text-muted sm:block">{node.sub}</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
