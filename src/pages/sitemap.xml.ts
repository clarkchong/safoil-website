import { getCollection } from 'astro:content';

const SITE = 'https://safoil.my';

// Static pages. Bump `lastmod` when a page's content changes meaningfully.
const staticPages = [
  { path: '/', lastmod: '2026-10-03', priority: '1.0' },
  { path: '/products/biofuel-feedstock-malaysia', lastmod: '2026-10-03', priority: '0.9' },
  { path: '/products/used-cooking-oil-malaysia', lastmod: '2026-10-03', priority: '0.9' },
  { path: '/products/pfad-supplier-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/products/palm-oil-residue-feedstock', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/products/acid-oil-supplier-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/products/bio-heavy-oil-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  // Simplified Chinese (/zh/)
  { path: '/zh/', lastmod: '2026-10-03', priority: '0.9' },
  { path: '/zh/products/biofuel-feedstock-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/zh/products/used-cooking-oil-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/zh/products/pfad-supplier-malaysia', lastmod: '2026-10-03', priority: '0.7' },
  { path: '/zh/products/palm-oil-residue-feedstock', lastmod: '2026-10-03', priority: '0.7' },
  { path: '/zh/products/acid-oil-supplier-malaysia', lastmod: '2026-10-03', priority: '0.7' },
  { path: '/zh/products/bio-heavy-oil-malaysia', lastmod: '2026-10-03', priority: '0.7' },
];

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const day = (d: Date) => d.toISOString().slice(0, 10);
  const newest = posts.length ? day(posts[0].data.pubDate) : day(new Date());

  const entries = [
    ...staticPages.map((p) => ({ loc: SITE + p.path, lastmod: p.lastmod, priority: p.priority })),
    { loc: `${SITE}/blog/`, lastmod: newest, priority: '0.8' },
    ...posts.map((post) => ({
      loc: `${SITE}/blog/${post.slug}/`,
      lastmod: day(post.data.pubDate),
      priority: '0.7',
    })),
  ];

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod><priority>${e.priority}</priority></url>`)
      .join('\n') +
    '\n</urlset>\n';

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
import { getCollection } from 'astro:content';

const SITE = 'https://safoil.my';

// Static pages. Bump `lastmod` when a page's content changes meaningfully.
const staticPages = [
  { path: '/', lastmod: '2026-10-03', priority: '1.0' },
  { path: '/products/biofuel-feedstock-malaysia', lastmod: '2026-10-03', priority: '0.9' },
  { path: '/products/used-cooking-oil-malaysia', lastmod: '2026-10-03', priority: '0.9' },
  { path: '/products/pfad-supplier-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/products/palm-oil-residue-feedstock', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/products/acid-oil-supplier-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/products/bio-heavy-oil-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  // Simplified Chinese (/zh/)
  { path: '/zh/', lastmod: '2026-10-03', priority: '0.9' },
  { path: '/zh/products/biofuel-feedstock-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/zh/products/used-cooking-oil-malaysia', lastmod: '2026-10-03', priority: '0.8' },
  { path: '/zh/products/pfad-supplier-malaysia', lastmod: '2026-10-03', priority: '0.7' },
  { path: '/zh/products/palm-oil-residue-feedstock', lastmod: '2026-10-03', priority: '0.7' },
  { path: '/zh/products/acid-oil-supplier-malaysia', lastmod: '2026-10-03', priority: '0.7' },
  { path: '/zh/products/bio-heavy-oil-malaysia', lastmod: '2026-10-03', priority: '0.7' },
];

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const day = (d: Date) => d.toISOString().slice(0, 10);
  const newest = posts.length ? day(posts[0].data.pubDate) : day(new Date());

  const entries = [
    ...staticPages.map((p) => ({ loc: SITE + p.path, lastmod: p.lastmod, priority: p.priority })),
    { loc: `${SITE}/blog/`, lastmod: newest, priority: '0.8' },
    ...posts.map((post) => ({
      loc: `${SITE}/blog/${post.slug}/`,
      lastmod: day(post.data.pubDate),
      priority: '0.7',
    })),
  ];

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod><priority>${e.priority}</priority></url>`)
      .join('\n') +
    '\n</urlset>\n';

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
import { getCollection } from 'astro:content';

const SITE = 'https://safoil.my';

// Static pages. Bump `lastmod` when a page's content changes meaningfully.
const staticPages = [
  { path: '/', lastmod: '2026-09-15', priority: '1.0' },
  { path: '/products/biofuel-feedstock-malaysia', lastmod: '2026-09-15', priority: '0.9' },
  { path: '/products/used-cooking-oil-malaysia', lastmod: '2026-09-15', priority: '0.9' },
  { path: '/products/pfad-supplier-malaysia', lastmod: '2026-09-15', priority: '0.8' },
  { path: '/products/palm-oil-residue-feedstock', lastmod: '2026-09-15', priority: '0.8' },
  { path: '/products/acid-oil-supplier-malaysia', lastmod: '2026-09-15', priority: '0.8' },
  { path: '/products/bio-heavy-oil-malaysia', lastmod: '2026-10-02', priority: '0.8' },
];

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const day = (d: Date) => d.toISOString().slice(0, 10);
  const newest = posts.length ? day(posts[0].data.pubDate) : day(new Date());

  const entries = [
    ...staticPages.map((p) => ({ loc: SITE + p.path, lastmod: p.lastmod, priority: p.priority })),
    { loc: `${SITE}/blog/`, lastmod: newest, priority: '0.8' },
    ...posts.map((post) => ({
      loc: `${SITE}/blog/${post.slug}/`,
      lastmod: day(post.data.pubDate),
      priority: '0.7',
    })),
  ];

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod><priority>${e.priority}</priority></url>`)
      .join('\n') +
    '\n</urlset>\n';

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
