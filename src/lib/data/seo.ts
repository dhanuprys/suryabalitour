import type { TourPackage } from './tours';

export const SITE_URL = 'https://suryabalitour.com';
export const SITE_NAME = 'Surya Bali Tour';
export const SITE_PHONE = '+62 812-3456-7890';
export const SITE_EMAIL = 'infosuryabalitour@gmail.com';

/**
 * Generate Schema.org TravelAgency / LocalBusiness JSON-LD
 */
export function generateAgencySchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'TravelAgency',
		'@id': `${SITE_URL}/#agency`,
		name: SITE_NAME,
		alternateName: 'Surya Bali Tour & Private Driver',
		url: SITE_URL,
		logo: `${SITE_URL}/favicon.svg`,
		image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
		description:
			'Authentic private Bali day tours, personal driver charters, custom itineraries, and airport transfers guided by native Balinese professionals.',
		telephone: SITE_PHONE,
		email: SITE_EMAIL,
		priceRange: '$$',
		currenciesAccepted: 'USD, IDR',
		paymentAccepted: 'Cash to Driver, Bank Transfer',
		areaServed: {
			'@type': 'AdministrativeArea',
			name: 'Bali, Indonesia'
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Denpasar',
			addressRegion: 'Bali',
			addressCountry: 'ID'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: -8.670458,
			longitude: 115.212629
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday'
				],
				opens: '07:00',
				closes: '22:00'
			}
		],
		sameAs: [
			'https://instagram.com/suryabalitour',
			'https://tiktok.com/@suryabalitour',
			'https://facebook.com/suryabalitour'
		]
	};
}

/**
 * Generate Schema.org TouristTrip + Product JSON-LD for tour detail pages
 */
export function generateTourSchema(tour: TourPackage) {
	return {
		'@context': 'https://schema.org',
		'@type': 'TouristTrip',
		'@id': `${SITE_URL}/packages/${tour.slug}#trip`,
		name: tour.title,
		description: tour.overview,
		touristType: ['Individual', 'Couple', 'Family', 'Small Group'],
		image: tour.heroImage,
		provider: {
			'@type': 'TravelAgency',
			name: SITE_NAME,
			url: SITE_URL,
			telephone: SITE_PHONE
		},
		offers: {
			'@type': 'Offer',
			price: tour.priceFrom,
			priceCurrency: tour.currency,
			availability: 'https://schema.org/InStock',
			url: `${SITE_URL}/packages/${tour.slug}`,
			priceValidUntil: '2026-12-31',
			description:
				tour.tourType === 'Private Tour'
					? `Base private vehicle charter per car (covers up to 5 passengers, driver, fuel, and parking).`
					: `Price per person for ${tour.title}.`
		},
		itinerary: {
			'@type': 'ItemList',
			numberOfItems: tour.whatTheyWillSee.length,
			itemListElement: tour.whatTheyWillSee.map((highlight, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: highlight.title,
				description: highlight.description,
				image: highlight.image
			}))
		}
	};
}

/**
 * Generate BreadcrumbList JSON-LD
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
		}))
	};
}

/**
 * Generate FAQPage JSON-LD for policy / terms pages
 */
export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
}
