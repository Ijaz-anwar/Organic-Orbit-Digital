import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const blogImgDir = path.join(publicDir, 'images', 'blog');

await mkdir(blogImgDir, { recursive: true });

/* 1. Transparent SVG Logo (Symbol + "Organic Orbit Digital" wordmark) */
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 56" width="320" height="56" fill="none">
  <defs>
    <linearGradient id="ooCore" x1="12" y1="14" x2="42" y2="42" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4169F5"/>
      <stop offset="1" stop-color="#39C985"/>
    </linearGradient>
    <linearGradient id="ooRing" x1="4" y1="28" x2="52" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6888F7"/>
      <stop offset="1" stop-color="#39C985"/>
    </linearGradient>
  </defs>
  <g transform="rotate(-32 28 28)">
    <path d="M5 28 A23 9.5 0 0 1 51 28" stroke="url(#ooRing)" stroke-width="2.4" stroke-linecap="round" opacity="0.55"/>
    <circle cx="28" cy="28" r="12" fill="url(#ooCore)"/>
    <path d="M5 28 A23 9.5 0 0 0 51 28" stroke="url(#ooRing)" stroke-width="2.8" stroke-linecap="round"/>
    <circle cx="44" cy="35" r="3.4" fill="#39C985"/>
  </g>
  <path d="M23 33.2c.2-6 4-9.8 10.2-10.4-.3 6.2-4.2 10-10.2 10.4Z" fill="#FFFFFF"/>
  <path d="M23 33.2c2.2-2.6 4.3-4.8 7-6.6" stroke="#4169F5" stroke-width="1.2" stroke-linecap="round"/>
  <text x="64" y="29" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" font-weight="700" fill="#10172A" letter-spacing="-0.4">Organic Orbit</text>
  <text x="65" y="45" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="11" font-weight="700" fill="#26A86B" letter-spacing="4.2">DIGITAL</text>
</svg>
`;

/* 2. Icon-only SVG for favicon & rasterisation (Light theme rounded tile) */
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#EEF2FE"/>
      <stop offset="1" stop-color="#FFFFFF"/>
    </linearGradient>
    <linearGradient id="core" x1="140" y1="140" x2="372" y2="372" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4169F5"/>
      <stop offset="1" stop-color="#39C985"/>
    </linearGradient>
    <linearGradient id="ring" x1="48" y1="256" x2="464" y2="256" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4169F5"/>
      <stop offset="1" stop-color="#39C985"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)" stroke="#DCE4FD" stroke-width="12"/>
  <g transform="rotate(-32 256 256)">
    <path d="M60 256 A196 82 0 0 1 452 256" fill="none" stroke="url(#ring)" stroke-width="22" stroke-linecap="round" opacity="0.55"/>
    <circle cx="256" cy="256" r="106" fill="url(#core)"/>
    <path d="M60 256 A196 82 0 0 0 452 256" fill="none" stroke="url(#ring)" stroke-width="26" stroke-linecap="round"/>
    <circle cx="395" cy="316" r="30" fill="#39C985"/>
  </g>
  <path d="M210 302c2-54 36-89 92-94-3 56-38 91-92 94Z" fill="#FFFFFF"/>
  <path d="M210 302c20-24 39-43 64-60" stroke="#4169F5" stroke-width="11" stroke-linecap="round" fill="none"/>
</svg>
`;

/* 3. Open Graph 1200x630 image (Light Theme) */
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F7F9FC"/>
      <stop offset="0.55" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#EEF2FE"/>
    </linearGradient>
    <linearGradient id="ogCore" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4169F5"/>
      <stop offset="1" stop-color="#39C985"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#ogBg)"/>
  <g opacity="0.45">
    <circle cx="960" cy="315" r="250" fill="none" stroke="#93AAF8" stroke-width="2" stroke-dasharray="8 10"/>
    <circle cx="960" cy="315" r="175" fill="none" stroke="#6DD8A5" stroke-width="2"/>
    <circle cx="960" cy="315" r="105" fill="none" stroke="#BCCBFB" stroke-width="1.5"/>
  </g>
  <circle cx="960" cy="315" r="56" fill="url(#ogCore)"/>
  <circle cx="960" cy="140" r="14" fill="#39C985"/>
  <circle cx="1115" cy="390" r="12" fill="#4169F5"/>
  <circle cx="790" cy="435" r="12" fill="#39C985"/>
  <rect x="80" y="96" width="300" height="38" rx="19" fill="#EEF2FE" stroke="#BCCBFB"/>
  <text x="104" y="120" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="14" font-weight="700" fill="#2F55E0" letter-spacing="2.5">ORGANIC ORBIT DIGITAL</text>
  <text x="80" y="235" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="56" font-weight="700" fill="#10172A">Turn Your Digital Presence</text>
  <text x="80" y="305" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="56" font-weight="700" fill="#4169F5">Into Your Growth Engine.</text>
  <text x="80" y="385" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="24" fill="#566079">Websites · On-Page SEO · Social Media · Meta &amp; Google Ads · Lead Generation</text>
  <text x="80" y="535" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" font-weight="600" fill="#2F55E0">organicorbitdigital.com</text>
</svg>
`;

/* 4. Light-themed Blog illustrations (960x540 WebP) */
function makeBlogSvg({ badge, titleLine1, titleLine2, accent }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="960" height="540">
    <defs>
      <linearGradient id="bBg" x1="0" y1="0" x2="960" y2="540" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#F7F9FC"/>
        <stop offset="0.5" stop-color="#FFFFFF"/>
        <stop offset="1" stop-color="#EEF2FE"/>
      </linearGradient>
      <linearGradient id="bCore" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#4169F5"/>
        <stop offset="1" stop-color="#39C985"/>
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#bBg)"/>
    <g opacity="0.55">
      <circle cx="760" cy="270" r="190" fill="none" stroke="#93AAF8" stroke-width="2" stroke-dasharray="6 8"/>
      <circle cx="760" cy="270" r="125" fill="none" stroke="#BCCBFB" stroke-width="1.5"/>
    </g>
    <circle cx="760" cy="270" r="46" fill="url(#bCore)"/>
    <circle cx="760" cy="145" r="11" fill="#39C985"/>
    <circle cx="885" cy="330" r="10" fill="#4169F5"/>
    <circle cx="630" cy="360" r="10" fill="${accent}"/>
    <rect x="64" y="88" width="230" height="34" rx="17" fill="#EEF2FE" stroke="#BCCBFB"/>
    <text x="86" y="110" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="700" fill="#2F55E0" letter-spacing="2">${badge}</text>
    <text x="64" y="230" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="40" font-weight="700" fill="#10172A">${titleLine1}</text>
    <text x="64" y="286" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="40" font-weight="700" fill="#4169F5">${titleLine2}</text>
    <text x="64" y="456" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" font-weight="600" fill="#566079">Organic Orbit Digital · Insights</text>
  </svg>`;
}

await writeFile(path.join(publicDir, 'logo.svg'), logoSvg, 'utf8');
await writeFile(path.join(publicDir, 'favicon.svg'), markSvg, 'utf8');

await sharp(Buffer.from(markSvg)).resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'logo-512.png'));
await sharp(Buffer.from(markSvg)).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(Buffer.from(markSvg)).resize(32, 32).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'favicon-32x32.png'));
await sharp(Buffer.from(ogSvg)).resize(1200, 630).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'og-image.png'));

const blogVisuals = [
  {
    file: 'connected-ecosystem.webp',
    badge: 'DIGITAL STRATEGY',
    titleLine1: 'Connecting Website, SEO',
    titleLine2: '&amp; Paid Advertising',
    accent: '#26A86B',
  },
  {
    file: 'meta-vs-google.webp',
    badge: 'PAID ADVERTISING',
    titleLine1: 'Meta Ads Discovery vs',
    titleLine2: 'Google Search Intent',
    accent: '#4169F5',
  },
  {
    file: 'on-page-seo-structure.webp',
    badge: 'ON-PAGE SEO',
    titleLine1: 'Search Intent, Structure',
    titleLine2: '&amp; Page Relevance',
    accent: '#26A86B',
  },
];

for (const item of blogVisuals) {
  const svg = makeBlogSvg(item);
  await sharp(Buffer.from(svg))
    .resize(960, 540)
    .webp({ quality: 88 })
    .toFile(path.join(blogImgDir, item.file));
}

console.log('Generated light-theme brand SVGs, icons, OG image, and WebP blog illustrations in /public.');
