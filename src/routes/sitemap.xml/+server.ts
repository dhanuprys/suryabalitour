import type { RequestHandler } from './$types';
import { tourPackages } from '#lib/data';
import { SITE_URL } from '#lib/data/seo';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const staticPages = [
		{ path: '', changefreq: 'daily', priority: '1.0' },
		{ path: '/packages', changefreq: 'daily', priority: '0.9' },
		{ path: '/about', changefreq: 'monthly', priority: '0.7' },
		{ path: '/terms', changefreq: 'monthly', priority: '0.6' }
	];

	const packagePages = tourPackages.map((pkg) => ({
		path: `/packages/${pkg.slug}`,
		changefreq: 'weekly',
		priority: '0.8'
	}));

	const allPages = [...staticPages, ...packagePages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
