export type TourType = 'Private Tour' | 'Group Tour' | 'Custom Tour' | 'Day Trip';

export interface TourHighlight {
	id: string;
	title: string;
	description: string;
	image?: string;
}

export interface TourGalleryItem {
	url: string;
	alt: string;
	caption?: string;
}

export interface TourAddon {
	id: string;
	name: string;
	description?: string;
	price: number;
	priceType: 'per_person' | 'per_group' | 'flat';
	unitLabel?: string; // e.g. "per person", "per car (up to 5 pax)", "per photo session"
}

export interface TourPackage {
	id: string;
	slug: string;
	title: string;
	tagline: string;
	duration: string; // e.g., "10 Hours (Full Day)"
	durationHours: number;
	tourType: TourType;
	priceFrom: number; // Starting price in IDR or USD
	currency: string; // e.g. "USD" or "IDR"
	heroImage: string;
	overview: string;
	whatTheyWillSee: TourHighlight[];
	goodToKnow: string[];
	gallery: TourGalleryItem[];
	addons: TourAddon[];
	pickupAreas?: string[]; // Recommended/supported pickup locations (e.g. Kuta, Seminyak, Ubud, Nusa Dua)
}

/**
 * Interface representing the booking inquiry form payload
 * associated with a tour package.
 */
export interface TourBookingForm {
	packageId: string;
	name: string;
	email: string;
	phone?: string;
	tourDate: string; // YYYY-MM-DD
	numberOfPeople: number;
	pickupArea: string;
	notes?: string;
	selectedAddonIds: string[];
}

export const tourPackages: TourPackage[] = [
	{
		id: 'ubud-cultural-waterfall-tour',
		slug: 'ubud-cultural-waterfall-tour',
		title: 'Ubud Cultural & Waterfall Highlights',
		tagline:
			'Discover Bali’s spiritual heartland, iconic rice terraces, and hidden jungle waterfalls.',
		duration: '10 Hours (Full Day)',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 55,
		currency: 'USD',
		heroImage:
			'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
		overview:
			'Immerse yourself in the cultural and natural wonder of Ubud on this private full-day tour. Travel in a comfortable, air-conditioned vehicle with an expert local driver-guide. Visit the sacred Monkey Forest, marvel at the lush Tegalalang Rice Terraces, swim near Tegenungan Waterfall, and experience traditional Balinese craftsmanship in local art villages.',
		whatTheyWillSee: [
			{
				id: 'tegalalang',
				title: 'Tegalalang Rice Terraces',
				description:
					'Walk through the world-famous UNESCO-listed cascading green rice paddies engineered with ancient Subak irrigation.',
				image:
					'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'monkey-forest',
				title: 'Sacred Monkey Forest Sanctuary',
				description:
					'Wander through a shaded ancient jungle home to over 1,000 playful Balinese long-tailed macaques and moss-covered temples.',
				image:
					'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'tegenungan',
				title: 'Tegenungan Waterfall',
				description:
					'Cool off by a dramatic 15-meter natural waterfall surrounded by dense tropical foliage.',
				image:
					'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'tirta-empul',
				title: 'Tirta Empul Holy Water Temple',
				description:
					'Observe or participate in a sacred purification ritual (Melukat) at ancient natural spring water pools.',
				image:
					'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop'
			}
		],
		goodToKnow: [
			'Private air-conditioned vehicle with dedicated driver-guide included.',
			'Comfortable walking shoes and extra change of clothes recommended for waterfall visits.',
			'Temples require sarong dress code (sarongs are provided on site).',
			'Hotel pick-up and drop-off included for Ubud, Seminyak, Kuta, Canggu, and Sanur.',
			'Complimentary mineral water provided throughout the day.'
		],
		gallery: [
			{
				url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
				alt: 'Tegalalang Rice Terraces in Ubud',
				caption: 'Golden morning light over Tegalalang Rice Terraces'
			},
			{
				url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
				alt: 'Tegenungan Waterfall',
				caption: 'Lush tropical surroundings at Tegenungan Waterfall'
			},
			{
				url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
				alt: 'Tirta Empul Temple',
				caption: 'Sacred water purification pools at Tirta Empul'
			},
			{
				url: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop',
				alt: 'Balinese Temple Gate',
				caption: 'Traditional Balinese split gate architecture'
			}
		],
		addons: [
			{
				id: 'jungle-swing-ticket',
				name: 'Ubud Famous Jungle Swing Ticket',
				description:
					'Experience soaring high above the tropical valley and palm trees with safety harness included.',
				price: 15,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'luwak-coffee-tasting',
				name: 'Premium Coffee Plantation & Luwak Tasting',
				description:
					'Guided tour of a spice garden and tasting of 10+ local herbal teas and authentic Kopi Luwak.',
				price: 8,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'photographer-service',
				name: 'Personal Professional Photographer & Drone Operator',
				description:
					'High-resolution edited photos (50+ photos) and 4K aerial drone videos delivered within 24 hours.',
				price: 65,
				priceType: 'per_group',
				unitLabel: 'per group (up to 4 pax)'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'nusa-penida-island-adventure',
		slug: 'nusa-penida-island-adventure',
		title: 'Nusa Penida Island Day Escape',
		tagline:
			'Sail across the Badung Strait to experience dramatic cliffs and crystal-clear turquoise bays.',
		duration: '11 Hours (Full Day)',
		durationHours: 11,
		tourType: 'Private Tour',
		priceFrom: 85,
		currency: 'USD',
		heroImage:
			'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop',
		overview:
			'Escape mainland Bali for a thrilling day trip to Nusa Penida Island. Journey by high-speed boat to discover world-famous coastline landmarks, including Kelingking Beach (the T-Rex Cliff), Broken Beach, and Angel’s Billabong. Enjoy private island transport, lunch by the sea, and optional snorkeling with gentle Manta Rays.',
		whatTheyWillSee: [
			{
				id: 'kelingking-beach',
				title: 'Kelingking Beach (T-Rex Cliff)',
				description:
					'Stand atop the iconic headland shaped like a Tyrannosaurus Rex overlooking secluded white sands and roaring ocean waves.',
				image:
					'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'broken-beach',
				title: 'Broken Beach (Pasih Uug)',
				description:
					'Marvel at a natural limestone bridge arching over a circular ocean cove where waters flow freely from the sea.',
				image:
					'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'angels-billabong',
				title: 'Angel’s Billabong',
				description: 'Visit a natural emerald tide pool nestled right between rugged ocean cliffs.',
				image:
					'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'crystal-bay',
				title: 'Crystal Bay Beach',
				description:
					'Relax under swaying palm trees on a serene sandy bay famous for clear waters and sunset views.',
				image:
					'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
			}
		],
		goodToKnow: [
			'Round-trip VIP fast boat tickets from Sanur Harbor included.',
			'Private air-conditioned car and local driver provided on Nusa Penida island.',
			'Sea conditions can vary; motion sickness medication recommended if prone to seasickness.',
			'Includes Indonesian set lunch at a scenic island restaurant.',
			'Please bring sunscreen, towel, swimwear, and cash for small personal expenses.'
		],
		gallery: [
			{
				url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop',
				alt: 'Kelingking Cliff Nusa Penida',
				caption: 'Panoramic view of Kelingking T-Rex cliff'
			},
			{
				url: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1200&auto=format&fit=crop',
				alt: 'Broken Beach Cove',
				caption: 'Natural arch and cove at Broken Beach'
			},
			{
				url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
				alt: 'Crystal Bay Beach',
				caption: 'Relaxing palm-lined shores of Crystal Bay'
			}
		],
		addons: [
			{
				id: 'manta-ray-snorkeling',
				name: 'Manta Point Snorkeling Boat Trip',
				description:
					'Shared boat expedition with equipment to swim alongside majestic reef Manta Rays at Manta Bay.',
				price: 30,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'vip-boat-lounge',
				name: 'Sanur Harbor VIP Lounge Access',
				description:
					'Priority fast boat boarding, air-conditioned lounge, complimentary snacks, coffee, and WiFi.',
				price: 12,
				priceType: 'per_person',
				unitLabel: 'per person'
			}
		],
		pickupAreas: ['Sanur', 'Kuta', 'Seminyak', 'Canggu', 'Nusa Dua', 'Ubud']
	},
	{
		id: 'uluwatu-sunset-kecak-dance',
		slug: 'uluwatu-sunset-kecak-dance',
		title: 'Uluwatu Temple Sunset & Kecak Fire Dance',
		tagline:
			'Experience cliffside ocean vistas, mesmerising Balinese fire dance, and seafood dinner.',
		duration: '6 Hours (Afternoon & Evening)',
		durationHours: 6,
		tourType: 'Private Tour',
		priceFrom: 45,
		currency: 'USD',
		heroImage:
			'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
		overview:
			'Witness one of Bali’s most enchanting evening spectacles at Pura Luhur Uluwatu, perched 70 meters above roaring Indian Ocean waves. Tour the ancient cliffside temple grounds, watch the hypnotic hypnotic Kecak & Fire Dance as the sun sets over the ocean, and conclude your night with an optional candlelit seafood feast on Jimbaran Beach.',
		whatTheyWillSee: [
			{
				id: 'uluwatu-temple',
				title: 'Uluwatu Cliff Temple (Pura Luhur Uluwatu)',
				description:
					'Perched dramatically on steep limestone cliffs, guarding Bali from evil sea spirits.',
				image:
					'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'kecak-dance',
				title: 'Kecak & Fire Dance Performance',
				description:
					'Watch 50+ chanting male dancers perform the epic Ramayana story accompanied by dramatic fire effects at golden hour.',
				image:
					'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800&auto=format&fit=crop'
			},
			{
				id: 'jimbaran-bay',
				title: 'Jimbaran Seafood Bay',
				description:
					'Dine with your feet in the sand as fresh grilled seafood is served under moonlight.',
				image:
					'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
			}
		],
		goodToKnow: [
			'Starts around 3:00 PM to ensure optimal timing for sunset and show seats.',
			'Keep sunglasses, hats, and small items secured as wild temple monkeys can be curious.',
			'Includes entrance tickets to Uluwatu Temple and reserved Kecak show tickets.',
			'Dress code: Temple sarong provided at entry.'
		],
		gallery: [
			{
				url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
				alt: 'Uluwatu Temple Cliffside',
				caption: 'Ocean cliff view at Uluwatu Temple'
			},
			{
				url: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop',
				alt: 'Kecak Fire Dancers',
				caption: 'Rhythmic chanting performance at sunset'
			}
		],
		addons: [
			{
				id: 'jimbaran-seafood-dinner',
				name: 'Jimbaran Sunset Grilled Seafood Feast',
				description:
					'Complete candlelit dinner package including grilled snapper, prawns, squid, rice, veggies, and fresh coconut.',
				price: 25,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'vip-front-row-seats',
				name: 'Kecak Show VIP Reserved Front Row Seating',
				description:
					'Guaranteed center front-row seats for unobstructed view and photo opportunities.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			}
		],
		pickupAreas: ['Kuta', 'Seminyak', 'Canggu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Ubud']
	}
];

/**
 * Helper function to retrieve a single tour package by its unique slug or ID
 */
export function getTourPackageBySlug(slug: string): TourPackage | undefined {
	return tourPackages.find((pkg) => pkg.slug === slug || pkg.id === slug);
}

/**
 * Helper function to retrieve suggested/recommended tour packages excluding the current tour
 */
export function getRecommendedTours(currentSlug: string, limit: number = 3): TourPackage[] {
	return tourPackages
		.filter((pkg) => pkg.slug !== currentSlug && pkg.id !== currentSlug)
		.slice(0, limit);
}
