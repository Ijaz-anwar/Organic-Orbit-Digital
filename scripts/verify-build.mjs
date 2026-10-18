import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('out');

const requiredRoutes = [
  '/',
  '/about/',
  '/services/',
  '/services/social-media-marketing/',
  '/services/website-development/',
  '/services/meta-google-ads/',
  '/services/lead-generation/',
  '/services/on-page-seo/',
  '/contact/',
  '/blog/',
  '/blog/how-website-seo-and-paid-ads-work-together/',
  '/blog/meta-ads-vs-google-ads-for-growing-businesses/',
  '/blog/on-page-seo-checklist-for-service-websites/',
  '/privacy-policy/',
  '/terms-and-conditions/',
  '/thank-you/',
];

const titles = new Map();
const descriptions = new Map();
const errors = [];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

for (const route of requiredRoutes) {
  const htmlPath =
    route === '/'
      ? path.join(outDir, 'index.html')
      : path.join(outDir, route.slice(1), 'index.html');

  if (!(await exists(htmlPath))) {
    errors.push(`Missing built HTML file for route ${route}: ${htmlPath}`);
    continue;
  }

  const html = await readFile(htmlPath, 'utf8');

  // 1. Check exactly one H1
  const h1Matches = html.match(/<h1\b[^>]*>/gi) || [];
  if (h1Matches.length !== 1) {
    errors.push(`Route ${route} has ${h1Matches.length} <h1> elements (expected 1)`);
  }

  // 2. Check <title>
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    errors.push(`Route ${route} is missing <title>`);
  } else {
    const title = titleMatch[1].trim();
    if (titles.has(title)) {
      errors.push(`Duplicate <title> "${title}" on ${route} and ${titles.get(title)}`);
    }
    titles.set(title, route);
  }

  // 3. Check meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (!descMatch) {
    errors.push(`Route ${route} is missing meta description`);
  } else {
    const desc = descMatch[1].trim();
    if (descriptions.has(desc)) {
      errors.push(`Duplicate meta description on ${route} and ${descriptions.get(desc)}`);
    }
    descriptions.set(desc, route);
  }

  // 4. Check canonical URL
  const expectedCanonical = `https://organicorbitdigital.com${route}`;
  const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonMatch || canonMatch[1] !== expectedCanonical) {
    errors.push(
      `Route ${route} canonical mismatch: got "${canonMatch?.[1]}", expected "${expectedCanonical}"`
    );
  }

  // 5. Check JSON-LD validity and ensure no fake ratings/addresses/phones
  const ldRegex = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let ldMatch;
  let ldCount = 0;
  while ((ldMatch = ldRegex.exec(html)) !== null) {
    ldCount++;
    try {
      const parsed = JSON.parse(ldMatch[1]);
      const raw = JSON.stringify(parsed);
      if (/aggregateRating|streetAddress|telephone/i.test(raw)) {
        errors.push(`Route ${route} JSON-LD contains prohibited fields: ${raw}`);
      }
    } catch (e) {
      errors.push(`Route ${route} has invalid JSON-LD: ${e.message}`);
    }
  }
  if (ldCount === 0) {
    errors.push(`Route ${route} has no JSON-LD structured data`);
  }

  // 6. Check internal hrefs resolve
  const hrefRegex = /href="(\/[^"#?]*)/g;
  let hrefMatch;
  while ((hrefMatch = hrefRegex.exec(html)) !== null) {
    const href = hrefMatch[1];
    if (href.startsWith('/_next/')) continue;
    const candidateFile = path.join(outDir, href);
    const candidateIndex = path.join(outDir, href, 'index.html');
    if (!(await exists(candidateFile)) && !(await exists(candidateIndex))) {
      errors.push(`Broken internal link on ${route}: href="${href}"`);
    }
  }

  // 7. Verify official email presence (from footer / CTAs)
  if (!html.includes('mailto:info@organicorbitdigital.com')) {
    errors.push(`Route ${route} is missing mailto:info@organicorbitdigital.com`);
  }
}

// Check 404.html, sitemap.xml, robots.txt, .htaccess
for (const special of ['404.html', 'sitemap.xml', 'robots.txt', '.htaccess', 'logo.svg', 'og-image.png']) {
  if (!(await exists(path.join(outDir, special)))) {
    errors.push(`Missing ${special} in out/`);
  }
}

const sitemapXml = await readFile(path.join(outDir, 'sitemap.xml'), 'utf8');
if (sitemapXml.includes('/thank-you')) {
  errors.push('sitemap.xml must not include non-indexable /thank-you/ route');
}
if (!sitemapXml.includes('https://organicorbitdigital.com/services/on-page-seo/')) {
  errors.push('sitemap.xml is missing service URLs');
}

const robotsTxt = await readFile(path.join(outDir, 'robots.txt'), 'utf8');
if (!robotsTxt.includes('Sitemap: https://organicorbitdigital.com/sitemap.xml')) {
  errors.push('robots.txt is missing canonical Sitemap directive');
}

if (errors.length > 0) {
  console.error('Verification failed with errors:\n' + errors.map((e) => ` - ${e}`).join('\n'));
  process.exit(1);
} else {
  console.log(`All ${requiredRoutes.length} routes, metadata, canonicals, JSON-LD, internal links, sitemap.xml, robots.txt, and assets verified with 0 errors!`);
}
