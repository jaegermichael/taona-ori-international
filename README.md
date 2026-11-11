# Taona Ori International website

Vite + React + TypeScript + Tailwind v4 + Framer Motion. Deployed on Vercel.

```bash
npm install
npm run dev        # local development
npm run build      # type-check + production build
npm run images     # rebuild public/images/*.webp from source-images/ (needs Python + Pillow)
npm run sitemap    # regenerate public/sitemap.xml after adding services/projects (Node 22.18+)
```

`vercel.json` rewrites every route to `index.html` so deep links such as `/projects/arlington` load correctly.

## Content and image provenance

- All photographs in `source-images/` were supplied by the client. `public/images/` holds resized WebP copies
  made by `scripts/optimize_images.py`. The only edit is trimming black letterbox bars from `quartz-pillar.jpg`.
- No photograph is attributed to a specific named project. Project pages only show a gallery when
  `photos` is set on that project in `src/data/site.ts`.
- Business copy (services, process, team, values, locations, contact details) comes from the client's
  original material. Nothing has been added in the way of testimonials, prices, certifications or project specs.

## Waiting on the client

- **Logo:** none supplied. The site uses a typeset wordmark, and `public/favicon.svg` is a plain interim "T" monogram.
  Replace both with the real logo when it arrives.
- **WhatsApp:** `CONTACT.whatsapp` assumes the phone line +263 783 220 589 is on WhatsApp. Confirm this.
- **Project photos:** add photos for each project to `source-images/`, run `npm run images`, then list them under
  that project's `photos`.
- **Enquiry form:** opens WhatsApp or the visitor's email app with the enquiry filled in, and the visitor presses send.
  To receive submissions directly instead, connect a form service (e.g. Formspree) or a Vercel function.
