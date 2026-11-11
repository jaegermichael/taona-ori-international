// Regenerates public/sitemap.xml from the site data.
// Run with: npm run sitemap   (Node 22.18+ / 23.6+ runs TypeScript directly)
import { writeFileSync } from 'node:fs'
import { PROJECTS, SERVICES, SITE_URL } from '../src/data/site.ts'

const paths = [
  '/',
  '/about',
  '/services',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  '/projects',
  ...PROJECTS.map((p) => `/projects/${p.slug}`),
  '/contact',
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')}
</urlset>
`
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml: ${paths.length} URLs`)
