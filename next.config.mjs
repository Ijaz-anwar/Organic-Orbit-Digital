/**
 * Next.js configuration
 *
 * The site is configured for STATIC EXPORT so it can be deployed to standard
 * cPanel / Apache hosting (no Node.js server required). `next build` writes the
 * deployable site to the `out/` directory.
 *
 * - trailingSlash: true  -> every route is emitted as `route/index.html`, which
 *   Apache serves natively without extra rewrite rules.
 * - images.unoptimized   -> required for static export (no image server). Images
 *   in /public are already pre-optimised (WebP / SVG).
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
