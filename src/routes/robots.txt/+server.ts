import type { RequestHandler } from './$types';
import { SITE_URL } from '#lib/data/seo';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const content = `# robots.txt for Surya Bali Tour
# Standard web crawlers
User-agent: *
Allow: /

# AI search discovery bots (GEO / AI SEO)
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

# Canonical XML Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=86400'
		}
	});
};
