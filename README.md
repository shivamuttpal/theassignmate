# TheAssignmate

Tutoring, project-mentoring and viva-prep website built with Next.js, Tailwind CSS and lucide-react.

## Customise
Everything lives in `lib/config.ts`: WhatsApp number, brand name, services, pricing, FAQs and testimonials.
Only add testimonials from real students who agreed to be quoted. The section stays hidden while the list is empty.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com, click **Add New → Project**, import the repo and click **Deploy**. No settings or environment variables are needed.
3. Once it's live, set `BRAND.siteUrl` in `lib/config.ts` to your real domain.
# theassignmate
