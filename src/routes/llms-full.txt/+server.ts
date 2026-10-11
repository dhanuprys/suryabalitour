import type { RequestHandler } from './$types';
import { tourPackages } from '#lib/data';
import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL } from '#lib/data/seo';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const content = `# ${SITE_NAME} — Full Knowledge Context

## Brand Identity & Mission
${SITE_NAME} is an indigenous Balinese tour and private driver agency dedicated to connecting global travelers with the genuine spirit, cultural heritage, and landscapes of Bali. Guided by native Balinese drivers with deep local knowledge, our tours prioritize unhurried exploration, safety, cultural respect, and bespoke flexibility over rigid commercial itineraries.

## Core Private Tour Catalog (${tourPackages.length} Curated Experiences)
${tourPackages
	.map((pkg) => {
		const rateStr =
			pkg.tourType === 'Private Tour'
				? `$${pkg.priceFrom} ${pkg.currency} (per private car, covers up to 5 passengers)`
				: `$${pkg.priceFrom} ${pkg.currency} (per person)`;

		const highlights = pkg.whatTheyWillSee
			.map((h) => `  - **${h.title}**: ${h.description}`)
			.join('\n');

		const goodToKnow =
			pkg.goodToKnow.length > 0
				? `- **Good to Know**:\n${pkg.goodToKnow.map((g) => `  - ${g}`).join('\n')}`
				: '';

		const addons =
			pkg.addons.length > 0
				? `- **Available Add-ons**:\n${pkg.addons.map((a) => `  - ${a.name} (+$${a.price} ${pkg.currency}): ${a.description ?? ''} [${a.unitLabel || a.priceType}]`).join('\n')}`
				: '';

		const pickupAreas = pkg.pickupAreas
			? `- **Recommended Pickup Locations**: ${pkg.pickupAreas.join(', ')}`
			: '';

		return `### ${pkg.title}
- **Slug**: ${pkg.slug}
- **Tour Type**: ${pkg.tourType}
- **Duration**: ${pkg.duration} (${pkg.durationHours} Hours)
- **Base Rate**: ${rateStr}
- **Tagline**: ${pkg.tagline}
- **Overview**: ${pkg.overview}
- **Itinerary & Highlights**:
${highlights}
${goodToKnow ? `${goodToKnow}\n` : ''}${addons ? `${addons}\n` : ''}${pickupAreas ? `${pickupAreas}\n` : ''}- **Direct URL**: ${SITE_URL}/packages/${pkg.slug}`;
	})
	.join('\n\n')}

## Operating Policies & Booking Conditions
- **Booking Channels**: Online inquiry form on any package page or direct instant messaging via WhatsApp (${SITE_PHONE}).
- **Payment Method**: Cash directly to the driver at the conclusion of the day's tour in USD or IDR. No advance credit card deposit is needed for standard day trips.
- **Cancellation Policy**:
  - Cancellations made at least 24 hours prior to pickup incur no cancellation fee.
  - Cancellations made less than 12 hours prior may incur up to 50% vehicle reservation fee.
  - Same-day failure to show without notice may be charged in full.
- **Pickup Locations**: Complimentary hotel or villa pickup in Kuta, Seminyak, Canggu, Legian, Sanur, Ubud, Nusa Dua, and Jimbaran. Pickups in remote North or West Bali can be arranged with modest travel fuel adjustments.

## Contact Information
- Brand: ${SITE_NAME}
- Headquarters: Denpasar and Ubud, Bali, Indonesia
- WhatsApp Direct Concierge: ${SITE_PHONE} (https://wa.me/6281234567890)
- Official Email: ${SITE_EMAIL}
- Official Website: ${SITE_URL}
- Operating Hours: 07:00 – 22:00 WITA (UTC+8), 7 days a week
`.trim();

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
