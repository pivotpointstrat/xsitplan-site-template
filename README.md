# XsitPlan Site Template

Per-customer business website template. Built with Next.js 14 + Tailwind CSS, fully content-driven by environment variables set during provisioning.

## How It Works

When XsitPlan provisions a new customer's business, it:
1. Creates a new Netlify site linked to this repo
2. Injects all AI-generated business content as environment variables
3. Netlify builds and deploys the site automatically

Every word, color, and price on the site comes from env vars — no code changes needed per customer.

## Pages

- `/` — Home (hero, social proof, about preview, core offer, lead magnet)
- `/about` — Full about page with founder story
- `/services` — Services and pricing
- `/contact` — Contact form (Netlify Forms)

## Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your content
npm run dev
```

## Environment Variables

See `.env.example` for the full list. All vars prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Deployment

This repo is designed to be linked to Netlify. See `netlify.toml` for build config.

---
*Part of the [XsitPlan](https://xsitplan.com) platform.*
