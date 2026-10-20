import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeaderNav from './HeaderNav';
import { siteConfig } from '@/lib/site-config';

/** Site header: light announcement bar + clean white sticky navigation. */
export default function Header() {
  return (
    <>
      <div className="relative z-50 border-b border-line bg-mist text-slate-700">
        <div className="container-site flex min-h-8 items-center justify-center gap-2 py-1.5 text-center text-[0.72rem] leading-snug sm:min-h-9 sm:py-2 sm:text-[0.8rem]">
          <span className="hidden h-1.5 w-1.5 rounded-full bg-orbit-500 sm:inline-block" aria-hidden="true" />
          <p>
            {siteConfig.announcement}{' '}
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1 font-semibold text-orbit-600 hover:text-orbit-700"
            >
              Let&apos;s talk <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-white">
        <HeaderNav />
      </header>
    </>
  );
}
