import type { RequestHandler } from './$types';
import { tourPackages } from '#lib/data';
import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL, WHATSAPP_DIRECT_URL } from '#lib/data/seo';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const content = `# ${SITE_NAME}

> Authentic private Bali day tours, personal driver charters, custom itineraries, and airport transfers guided by native Balinese drivers.

## Overview
${SITE_NAME} is an independent private tour and transport service based in Bali, Indonesia. Founded and operated by local Balinese drivers and guides, we specialize in 100% private, flexible, and comfortable exploration of Bali's temples, waterfalls, rice terraces, volcanoes, and coastal beaches.

## Core Services & Live Pricing
- **Private Car Charter (Full Day, 10 Hours)**: $55 USD per car (up to 5 passengers). Includes private vehicle, English-speaking driver, fuel, and all parking fees.
${tourPackages
	.map((pkg) => {
		const rate =
			pkg.tourType === 'Private Tour'
				? `$${pkg.priceFrom} ${pkg.currency} per car base vehicle charter`
				: `$${pkg.priceFrom} ${pkg.currency} per person`;
		return `- **${pkg.title}**: ${rate} (${pkg.duration})`;
	})
	.join('\n')}

## Key Policies
- **Payment**: Cash directly to the driver at the end of the tour (USD or IDR). No upfront credit card deposit required for standard day tours.
- **Cancellation**: Free cancellation up to 24 hours before the scheduled pickup time.
- **Customization**: Itineraries can be adjusted dynamically on the day in consultation with the driver.

## Contact & Direct Booking
- **WhatsApp Concierge**: ${WHATSAPP_DIRECT_URL} (${SITE_PHONE})
- **Email**: ${SITE_EMAIL}
- **Website**: ${SITE_URL}

## Key Links
- [Tour Packages](${SITE_URL}/packages): Full listing of private tour itineraries and pricing.
${tourPackages.map((pkg) => `- [${pkg.title}](${SITE_URL}/packages/${pkg.slug}): ${pkg.tagline}`).join('\n')}
- [About Surya Bali Tour](${SITE_URL}/about): Company background, native guide philosophy, and hospitality values.
- [Terms & Guest Policies](${SITE_URL}/terms): Complete booking, payment, cancellation, and vehicle terms.
- [Machine-Readable Pricing](${SITE_URL}/pricing.md): Detailed pricing data for AI comparison engines.
- [Full Knowledge Context](${SITE_URL}/llms-full.txt): Comprehensive itineraries, FAQs, and destination details.
`.trim();

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
