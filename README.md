# Organic Orbit Digital — Official Website

Production-ready marketing and lead-generation website for **Organic Orbit Digital** (`https://organicorbitdigital.com`), built with **Next.js (App Router, JavaScript)**, **React**, **Tailwind CSS**, and **Lucide React**.

---

## 1. Local Development

```bash
# Install dependencies
npm install

# Start the development server at http://localhost:3000
npm run dev
```

---

## 2. Production Build & Static Export

The project is configured with `output: 'export'` and `trailingSlash: true` in `next.config.mjs` so that `npm run build` outputs a complete, self-contained static website in the `out/` directory—ready for standard **cPanel / Apache** hosting or any static host without requiring a persistent Node.js server.

```bash
# Optional: regenerate SVG/PNG/WebP brand & blog assets
npm run generate:assets

# Build the production static export into ./out
npm run build

# Preview the static export locally
npm run start
```

---

## 3. Contact Form Configuration (`.env.local` / `.env.production`)

Copy `.env.example` to `.env.local` (or `.env.production` before building) to enable direct online webhook delivery:

| Variable | Description |
| :--- | :--- |
| `NEXT_PUBLIC_FORM_PROVIDER` | `formspree`, `web3forms`, or `custom`. Leave empty to use the built-in verified `mailto:info@organicorbitdigital.com` handoff. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Required when `NEXT_PUBLIC_FORM_PROVIDER` is `formspree` (e.g. `https://formspree.io/f/xxxx`) or `custom`. |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Required when `NEXT_PUBLIC_FORM_PROVIDER` is `web3forms` (public access key from Web3Forms, routed to `info@organicorbitdigital.com`). |

*Note:* The form **never** displays a fake success state. It redirects to `/thank-you/` only after the configured provider returns an HTTP 2xx confirmation. When no external provider is configured (or if a network error occurs), it prepares a pre-filled `mailto:info@organicorbitdigital.com` email with all validated fields and a copy-to-clipboard button.

---

## 4. Deploying to cPanel Hosting

1. Configure your `.env.production` (if using Formspree or Web3Forms) and run:
   ```bash
   npm run build
   ```
2. Open **cPanel → File Manager** and navigate to `public_html/` for `organicorbitdigital.com`.
3. Upload the **contents** of the generated `out/` folder directly into `public_html/` (including `out/.htaccess`, `out/index.html`, `out/404.html`, `out/sitemap.xml`, `out/robots.txt`, `out/_next/`, and all route folders).
4. Ensure **Show Hidden Files (dotfiles)** is enabled in cPanel File Manager so `.htaccess` is included.
