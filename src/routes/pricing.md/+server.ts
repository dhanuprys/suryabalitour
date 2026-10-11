import type { RequestHandler } from './$types';
import { tourPackages } from '#lib/data';
import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL } from '#lib/data/seo';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const markdown = `# Pricing — ${SITE_NAME}

Transparent, direct pricing for private Bali day tours, charters, and excursions. No hidden booking fees or platform commissions. Generated dynamically from live catalog data.

## Standard Private Vehicle Charter (10 Hours)
- **Base Price**: $55 USD / car (approx. 850,000 IDR)
- **Capacity**: Up to 5 passengers per standard MPV (Toyota Avanza / Daihatsu Xenia)
- **Inclusions**: Dedicated English-speaking Balinese driver, clean air-conditioned vehicle, fuel, parking fees, pickup & drop-off across South/Central Bali
- **Exclusions**: Attraction entry tickets, meals, personal spending, discretionary driver gratuity
- **Payment Method**: Cash directly to driver at tour end (USD or IDR)

## Curated Day Tour Packages
${tourPackages
	.map((pkg) => {
		const priceStr =
			pkg.tourType === 'Private Tour'
				? `From $${pkg.priceFrom} ${pkg.currency} / car (covers vehicle, driver, fuel & parking for up to 5 pax)`
				: `From $${pkg.priceFrom} ${pkg.currency} / person`;

		const addonsStr =
			pkg.addons.length > 0
				? `- **Available Add-ons**:\n${pkg.addons.map((a) => `  - ${a.name}: +$${a.price} (${a.unitLabel || a.priceType})`).join('\n')}`
				: '';

		const pickupStr = pkg.pickupAreas ? `- **Pickup Areas**: ${pkg.pickupAreas.join(', ')}` : '';

		const highlightsStr = pkg.whatTheyWillSee.map((w) => w.title).join(', ');

		return `### ${pkg.title}
- **Rate**: ${priceStr}
- **Duration**: ${pkg.duration} (${pkg.durationHours} Hours)
- **Tour Type**: ${pkg.tourType}
- **Direct URL**: ${SITE_URL}/packages/${pkg.slug}
- **Overview**: ${pkg.overview}
- **Key Attractions**: ${highlightsStr}
${addonsStr ? `${addonsStr}\n` : ''}${pickupStr ? `${pickupStr}\n` : ''}`;
	})
	.join('\n')}
## Booking Terms & Cancellation
- **Advance Notice**: Recommended at least 24 hours prior to service.
- **Deposit**: $0 deposit required for standard day tours. Large group bookings (3+ vehicles) may require a deposit agreed in advance.
- **Cancellation**:
  - More than 24 hours prior: 100% free cancellation.
  - Less than 12 hours prior: Up to 50% fee may apply.
  - Same-day no-show: Full fee may apply.
- **Direct WhatsApp Concierge**: ${SITE_PHONE} (https://wa.me/6281234567890)
- **Email**: ${SITE_EMAIL}
`.trim();

	return new Response(markdown, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
