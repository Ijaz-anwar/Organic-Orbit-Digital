import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/seo';

/**
 * Visible breadcrumb trail + matching BreadcrumbList structured data.
 * @param {{ items: {name: string, path: string}[], tone?: 'dark'|'light' }} props
 * The first item should be Home ('/'); the last item is the current page.
 */
export default function Breadcrumbs({ items, tone = 'dark' }) {
  const base = tone === 'dark' ? 'text-slate-400' : 'text-muted';
  const linkCls = tone === 'dark' ? 'hover:text-white' : 'hover:text-ink';
  const currentCls = tone === 'dark' ? 'text-slate-200' : 'text-ink';

  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${base}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={`font-medium ${currentCls}`}>
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className={`transition-colors ${linkCls}`}>
                      {item.name}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
