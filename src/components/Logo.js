/**
 * Organic Orbit Digital logo.
 * The mark: a growth "planet" (blue → green) with a leaf at its core, circled
 * by a tilted orbit and a single satellite — connected channels around a
 * business at the centre.
 *
 * `idPrefix` keeps SVG gradient IDs unique when the logo appears more than
 * once on a page (header + footer).
 */
export function LogoMark({ className = 'h-10 w-10', idPrefix = 'oo' }) {
  const g1 = `${idPrefix}-core`;
  const g2 = `${idPrefix}-ring`;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={g1} x1="10" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4169F5" />
          <stop offset="1" stopColor="#39C985" />
        </linearGradient>
        <linearGradient id={g2} x1="2" y1="24" x2="46" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6888F7" />
          <stop offset="1" stopColor="#39C985" />
        </linearGradient>
      </defs>
      <g transform="rotate(-32 24 24)">
        {/* back half of orbit */}
        <path d="M3 24 A21 8.5 0 0 1 45 24" fill="none" stroke={`url(#${g2})`} strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
        {/* planet */}
        <circle cx="24" cy="24" r="10.5" fill={`url(#${g1})`} />
        {/* front half of orbit */}
        <path d="M3 24 A21 8.5 0 0 0 45 24" fill="none" stroke={`url(#${g2})`} strokeWidth="2.6" strokeLinecap="round" />
        {/* satellite */}
        <circle cx="38.2" cy="30.3" r="3.1" fill="#39C985" />
      </g>
      {/* leaf at the core */}
      <path d="M19.6 28.6c.2-5.4 3.6-8.9 9.2-9.4-.3 5.6-3.8 9.1-9.2 9.4Z" fill="#fff" opacity="0.95" />
      <path d="M19.6 28.6c2-2.4 3.9-4.3 6.4-6" stroke="#4169F5" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}

export default function Logo({ tone = 'light', idPrefix = 'logo', className = '' }) {
  const primary = tone === 'light' ? 'text-white' : 'text-midnight-900';
  const secondary = tone === 'light' ? 'text-organic-300' : 'text-organic-700';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark idPrefix={idPrefix} className="h-10 w-10 shrink-0" />
      <span translate="no" className="notranslate flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] font-bold tracking-tight ${primary}`}>
          Organic Orbit
        </span>
        <span className={`mt-1 text-[0.68rem] font-semibold tracking-[0.32em] uppercase ${secondary}`}>
          Digital
        </span>
      </span>
    </span>
  );
}
