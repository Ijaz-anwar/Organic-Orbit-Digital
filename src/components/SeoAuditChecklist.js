'use client';

import { useState } from 'react';
import { CheckSquare, Square, Copy, RotateCcw, Check } from 'lucide-react';

const CHECKLIST_GROUPS = [
  {
    group: 'Keyword targeting',
    items: [
      'Assign a primary keyword to the page',
      'Identify related terms and search intent',
      'Confirm the page has a distinct purpose',
    ],
  },
  {
    group: 'Titles and content',
    items: [
      'Write a unique title tag and meta description',
      'Use a clear H1 and logical subheadings',
      'Explain services, benefits, process, and deliverables',
      'Check spelling, clarity, originality, and accuracy',
    ],
  },
  {
    group: 'Page structure',
    items: [
      'Create a descriptive, readable URL',
      'Add relevant internal links',
      'Use clear navigation and descriptive anchor text',
    ],
  },
  {
    group: 'Images and performance',
    items: [
      'Compress images and add useful alt text',
      'Check mobile usability and page speed',
      'Review Core Web Vitals where data is available',
    ],
  },
  {
    group: 'Trust and conversions',
    items: [
      'Include genuine credibility signals',
      'Add a relevant call to action',
      'Test contact forms and conversion tracking',
    ],
  },
  {
    group: 'Technical SEO',
    items: [
      'Check indexing, robots directives, and canonical tags',
      'Include important URLs in the XML sitemap',
      'Validate relevant structured data',
      'Review the page in Google Search Console',
    ],
  },
];

const TOTAL_ITEMS = CHECKLIST_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

export default function SeoAuditChecklist() {
  const [checked, setChecked] = useState({});
  const [copied, setCopied] = useState(false);

  const completedCount = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((completedCount / TOTAL_ITEMS) * 100);

  const toggleItem = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const resetAll = () => {
    setChecked({});
    setCopied(false);
  };

  const copyChecklist = async () => {
    const lines = ['Service website SEO audit', `${completedCount} of ${TOTAL_ITEMS} complete`, ''];
    for (const grp of CHECKLIST_GROUPS) {
      lines.push(`${grp.group}:`);
      for (const item of grp.items) {
        lines.push(`${checked[item] ? '[x]' : '[ ]'} ${item}`);
      }
      lines.push('');
    }
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <div className="not-prose my-8 rounded-[var(--radius-card)] border border-orbit-200 bg-mist/60 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <h3 className="text-xl font-bold text-ink">Service website SEO audit</h3>
          <p className="mt-1 text-sm font-semibold text-orbit-600">
            {completedCount} of {TOTAL_ITEMS} complete ({pct}%)
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={copyChecklist}
            className="btn btn-outline min-h-9 px-3.5 py-1.5 text-xs"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-organic-600" aria-hidden="true" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-orbit-600" aria-hidden="true" />
                Copy checklist
              </>
            )}
          </button>
          <button
            type="button"
            onClick={resetAll}
            className="btn btn-outline min-h-9 px-3.5 py-1.5 text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
            Reset
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white ring-1 ring-line">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orbit-600 to-organic-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {CHECKLIST_GROUPS.map((grp) => (
          <div key={grp.group} className="card bg-white p-5">
            <h4 className="font-display text-sm font-bold tracking-wide text-orbit-700 uppercase">
              {grp.group}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {grp.items.map((item) => {
                const isDone = !!checked[item];
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => toggleItem(item)}
                      className="flex w-full items-start gap-2.5 text-left text-sm text-slate-700 hover:text-ink"
                    >
                      {isDone ? (
                        <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-organic-600" aria-hidden="true" />
                      ) : (
                        <Square className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                      )}
                      <span className={isDone ? 'line-through text-muted' : ''}>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
