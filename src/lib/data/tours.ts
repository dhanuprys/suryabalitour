// Auto-generated tour catalog scraped from suryabalitour.com
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
	unitLabel?: string;
}

export interface TourPackage {
	id: string;
	slug: string;
	title: string;
	tagline: string;
	duration: string;
	durationHours: number;
	tourType: TourType;
	priceFrom: number;
	currency: string;
	heroImage: string;
	overview: string;
	whatTheyWillSee: TourHighlight[];
	goodToKnow: string[];
	gallery: TourGalleryItem[];
	addons: TourAddon[];
	pickupAreas?: string[];
}

export interface TourBookingForm {
	packageId: string;
	name: string;
	email: string;
	phone?: string;
	tourDate: string;
	numberOfPeople: number;
	pickupArea: string;
	notes?: string;
	selectedAddonIds: string[];
}

// Vite asset glob resolver: dynamically imports all statically stored images
const tourAssetModules =
	typeof import.meta.glob === 'function'
		? import.meta.glob<string>(
				'../assets/images/tours/**/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}',
				{ eager: true, import: 'default' }
			)
		: {};

function resolveAssetUrl(relPath: string, fallbackUrl: string): string {
	if (!relPath) return fallbackUrl;
	const resolved = tourAssetModules[relPath];
	if (resolved) return resolved;
	return fallbackUrl;
}

interface RawTourPackageData extends Omit<TourPackage, 'heroImage' | 'gallery'> {
	heroImageRel: string;
	heroImageFallback: string;
	galleryRaw: {
		urlRel: string;
		fallbackUrl: string;
		alt: string;
		caption?: string;
	}[];
}

const rawTourPackages: RawTourPackageData[] = [
	{
		id: 'ubud-tour-day1',
		slug: 'ubud-tour-day1',
		title: 'Ubud Side Day Tour 1',
		tagline:
			'Unleash your inner adventurer in Ubud with a thrilling day of ATV, Water Rafting, Tubing, and the iconic Bali Swing',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/ubud-tour-day1/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993286d0921c.jpeg',
		overview:
			'Experience an adrenaline-fueled day in the heart of Bali’s jungle with our Ubud Adventure Tour, featuring a thrilling combination of ATV quad biking through rugged trails, high-energy Water Rafting and Tubing down scenic river rapids, and the iconic Bali Swing for breathtaking views over the tropical canopy',
		whatTheyWillSee: [
			{
				id: 'quad-bike',
				title: 'ATV / quad bike',
				description: 'Experience ATV / quad bike with private guidance and flexible time.'
			},
			{
				id: 'water-rafting',
				title: 'Water Rafting',
				description: 'Experience Water Rafting with private guidance and flexible time.'
			},
			{
				id: 'tubing',
				title: 'Tubing',
				description: 'Experience Tubing with private guidance and flexible time.'
			},
			{
				id: 'swing',
				title: 'Swing',
				description: 'Experience Swing with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/ubud-tour-day1/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69931c8d70f61.jpeg',
				alt: 'Ubud Side Day Tour 1 photo',
				caption: 'Ubud Side Day Tour 1 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-tour-day1/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69931c8d710d6.jpeg',
				alt: 'Ubud Side Day Tour 1 photo',
				caption: 'Ubud Side Day Tour 1 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-tour-day1/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69931c8d71248.jpeg',
				alt: 'Ubud Side Day Tour 1 photo',
				caption: 'Ubud Side Day Tour 1 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-tour-day1/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69931c8d7144e.jpeg',
				alt: 'Ubud Side Day Tour 1 photo',
				caption: 'Ubud Side Day Tour 1 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-tour-day1/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69931c8d71552.jpeg',
				alt: 'Ubud Side Day Tour 1 photo',
				caption: 'Ubud Side Day Tour 1 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-tour-day1/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69931c8d7166c.jpeg',
				alt: 'Ubud Side Day Tour 1 photo',
				caption: 'Ubud Side Day Tour 1 photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'ubud-day-tour-2',
		slug: 'ubud-day-tour-2',
		title: 'Ubud Day Tour 2',
		tagline:
			'Discover Bali’s cultural soul through traditional arts and temples, enjoy unforgettable wildlife encounters at Bali Zoo, and unwind at the scenic...',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/ubud-day-tour-2/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993a45a055ea.jpeg',
		overview:
			"Immerse yourself in Bali’s rich artistic heritage and exotic wildlife with a journey through the Art Villages, where you can engage in traditional Batik weaving, silver jewelry making, painting, and wood carving. The adventure continues at Bali Zoo for a once-in-a-lifetime experience, featuring breakfast with Orangutans and intimate encounters with elephants, including riding, feeding, and bathing them. Complete your cultural exploration with a visit to the historic Batuan Temple, a refreshing stop at the majestic Tegenungan Waterfall, and a sensory tour of a local Coffee Plantation to taste Bali's finest brews.",
		whatTheyWillSee: [
			{
				id: 'art-village',
				title: 'Art Village',
				description: 'Experience Art Village with private guidance and flexible time.'
			},
			{
				id: 'batik-weaving',
				title: 'Batik Weaving',
				description: 'Experience Batik Weaving with private guidance and flexible time.'
			},
			{
				id: 'silver-gold-class-jewelry',
				title: 'Silver & Gold class / Jewelry',
				description:
					'Experience Silver & Gold class / Jewelry with private guidance and flexible time.'
			},
			{
				id: 'painting-class-gallery',
				title: 'Painting class / Gallery',
				description: 'Experience Painting class / Gallery with private guidance and flexible time.'
			},
			{
				id: 'wood-carving-class-gallery',
				title: 'Wood Carving class / Gallery',
				description:
					'Experience Wood Carving class / Gallery with private guidance and flexible time.'
			},
			{
				id: 'bali-zoo',
				title: 'Bali Zoo',
				description: 'Experience Bali Zoo with private guidance and flexible time.'
			},
			{
				id: 'elephant-riding-feed-bath',
				title: 'Elephant Riding,feed,bath',
				description: 'Experience Elephant Riding,feed,bath with private guidance and flexible time.'
			},
			{
				id: 'breakfast-with-orangutan',
				title: 'Breakfast with Orangutan',
				description: 'Experience Breakfast with Orangutan with private guidance and flexible time.'
			},
			{
				id: 'coffee-plantation',
				title: 'Coffee Plantation',
				description: 'Experience Coffee Plantation with private guidance and flexible time.'
			},
			{
				id: 'batuan-temple',
				title: 'Batuan Temple',
				description: 'Experience Batuan Temple with private guidance and flexible time.'
			},
			{
				id: 'tegenungan-waterfall',
				title: 'Tegenungan Waterfall',
				description: 'Experience Tegenungan Waterfall with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a057ea.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a058eb.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a05a9d.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a05c26.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a05fc1.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a0610d.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-07.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a0675e.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-08.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a068ee.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-2/gallery-09.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993a45a06cdb.jpeg',
				alt: 'Ubud Day Tour 2 photo',
				caption: 'Ubud Day Tour 2 photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'nusa-dua-tour',
		slug: 'nusa-dua-tour',
		title: 'Nusa Dua Day Tour',
		tagline:
			'Discover Bali’s most exclusive escape in Nusa Dua, where world-class luxury blends with stunning natural landscapes.',
		duration: '5 hours',
		durationHours: 5,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/nusa-dua-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_699400bf732a8.jpg',
		overview:
			'Experience the ultimate blend of adventure and culture with our premium Southern Bali tour, starting with high-energy water sports at Tanjung Benoa—from Parasailing and Jet Skiing to Ocean Walking and a visit to Turtle Island. The journey continues to the majestic GWK Cultural Park and the iconic Uluwatu Temple, perched dramatically on a cliffside where you will witness the enchanting Kecak Fire Dance against a golden sunset backdrop. To wrap up your perfect day, enjoy an optional, world-class seafood dinner on the sands of Jimbaran Beach, creating a seamless transition from morning thrills to evening elegance.',
		whatTheyWillSee: [
			{
				id: 'turtle-island',
				title: 'Turtle island',
				description: 'Experience Turtle island with private guidance and flexible time.'
			},
			{
				id: 'water-sport-activities',
				title: 'Water sport activities',
				description: 'Experience Water sport activities with private guidance and flexible time.'
			},
			{
				id: 'parasailing',
				title: 'Parasailing',
				description: 'Experience Parasailing with private guidance and flexible time.'
			},
			{
				id: 'ocean-walker',
				title: 'Ocean Walker',
				description: 'Experience Ocean Walker with private guidance and flexible time.'
			},
			{
				id: 'jetski',
				title: 'Jetski',
				description: 'Experience Jetski with private guidance and flexible time.'
			},
			{
				id: 'snorkeling',
				title: 'Snorkeling',
				description: 'Experience Snorkeling with private guidance and flexible time.'
			},
			{
				id: 'banana-boat-etc',
				title: 'Banana boat etc',
				description: 'Experience Banana boat etc with private guidance and flexible time.'
			},
			{
				id: 'uluwatu-temple',
				title: 'Uluwatu Temple',
				description: 'Experience Uluwatu Temple with private guidance and flexible time.'
			},
			{
				id: 'kecak-dance',
				title: 'Kecak Dance',
				description: 'Experience Kecak Dance with private guidance and flexible time.'
			},
			{
				id: 'gwk-culture-park',
				title: 'GWK Culture Park',
				description: 'Experience GWK Culture Park with private guidance and flexible time.'
			},
			{
				id: 'jimbaran-beach-sea-food-optional',
				title: 'Jimbaran beach sea food ( optional )',
				description:
					'Experience Jimbaran beach sea food ( optional ) with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21d205.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21d2ce.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21d477.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21d56e.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21d950.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21da88.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-07.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21dc8d.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-08.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21de30.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-dua-tour/gallery-09.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b2a21dfeb.jpeg',
				alt: 'Nusa Dua Day Tour photo',
				caption: 'Nusa Dua Day Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'ubud-day-tour-3',
		slug: 'ubud-day-tour-3',
		title: 'Ubud Day Tour 3',
		tagline:
			'Experience the perfect blend of Balinese heritage and nature, from the vibrant Barong Dance and Bali Bird Park to the playful Monkey Forest and the...',
		duration: '10 hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/ubud-day-tour-3/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993b3ff985d1.jpeg',
		overview:
			'Immerse yourself in the heart of Balinese culture and nature with a journey that begins with the vibrant Barong & Keris Dance, followed by an exotic encounter at Bali Bird Park & Reptile Park. Explore the sacred sanctuary of the Ubud Monkey Forest, wander through the historic Ubud Palace and its bustling traditional center, and marvel at the breathtaking scenery of Tegalalang Rice Terrace—all while enjoying a sensory visit to a local Coffee Plantation.',
		whatTheyWillSee: [
			{
				id: 'barong-keris-dance',
				title: 'Barong & Keris Dance',
				description: 'Experience Barong & Keris Dance with private guidance and flexible time.'
			},
			{
				id: 'bali-bird-park-reptile',
				title: 'Bali Bird Park & Reptile',
				description: 'Experience Bali Bird Park & Reptile with private guidance and flexible time.'
			},
			{
				id: 'monkey-forest',
				title: 'Monkey forest',
				description: 'Experience Monkey forest with private guidance and flexible time.'
			},
			{
				id: 'ubud-palace-ubud-center',
				title: 'Ubud Palace & Ubud center',
				description: 'Experience Ubud Palace & Ubud center with private guidance and flexible time.'
			},
			{
				id: 'coffee-plantation',
				title: 'Coffee Plantation',
				description: 'Experience Coffee Plantation with private guidance and flexible time.'
			},
			{
				id: 'max-7-people-one-car',
				title: 'Max 7 People one car',
				description: 'Experience Max 7 People one car with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/ubud-day-tour-3/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b3ff98db5.jpeg',
				alt: 'Ubud Day Tour 3 photo',
				caption: 'Ubud Day Tour 3 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-3/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b3ff98f11.jpeg',
				alt: 'Ubud Day Tour 3 photo',
				caption: 'Ubud Day Tour 3 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-3/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b3ff991c3.jpeg',
				alt: 'Ubud Day Tour 3 photo',
				caption: 'Ubud Day Tour 3 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-3/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b3ff993df.jpeg',
				alt: 'Ubud Day Tour 3 photo',
				caption: 'Ubud Day Tour 3 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-3/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b3ff994b4.jpeg',
				alt: 'Ubud Day Tour 3 photo',
				caption: 'Ubud Day Tour 3 photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-day-tour-3/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993b3ff9957a.jpeg',
				alt: 'Ubud Day Tour 3 photo',
				caption: 'Ubud Day Tour 3 photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'blue-lagoon-day-tour',
		slug: 'blue-lagoon-day-tour',
		title: 'Blue Lagoon Day Tour',
		tagline:
			'Experience the ultimate aquatic escape with world-class snorkeling and diving at Tanjung Jepun and Blue Lagoon, followed by a relaxing dip in the iconic...',
		duration: '8 hours',
		durationHours: 8,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/blue-lagoon-day-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993c5586fabd.jpeg',
		overview:
			'Dive into a breathtaking underwater adventure with our exclusive snorkeling and diving trips to Tanjung Jepun and Blue Lagoon, where you can explore vibrant coral reefs and diverse marine life in crystal-clear waters.',
		whatTheyWillSee: [
			{
				id: 'diving',
				title: 'Blue Lagoon snorkeling / diving',
				description:
					'Experience Blue Lagoon snorkeling / diving with private guidance and flexible time.'
			},
			{
				id: 'max-7-people-in-car',
				title: 'Max 7 People in car',
				description: 'Experience Max 7 People in car with private guidance and flexible time.'
			},
			{
				id: 'min-3-pax',
				title: 'Min 3 Pax',
				description: 'Experience Min 3 Pax with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/blue-lagoon-day-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993c5586ffe2.jpg',
				alt: 'Blue Lagoon Day Tour photo',
				caption: 'Blue Lagoon Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/blue-lagoon-day-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993c5587013c.jpg',
				alt: 'Blue Lagoon Day Tour photo',
				caption: 'Blue Lagoon Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/blue-lagoon-day-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993c5587043b.jpg',
				alt: 'Blue Lagoon Day Tour photo',
				caption: 'Blue Lagoon Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/blue-lagoon-day-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993c5587060b.jpeg',
				alt: 'Blue Lagoon Day Tour photo',
				caption: 'Blue Lagoon Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/blue-lagoon-day-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993c55870a8d.jpg',
				alt: 'Blue Lagoon Day Tour photo',
				caption: 'Blue Lagoon Day Tour photo'
			},
			{
				urlRel: '../assets/images/tours/blue-lagoon-day-tour/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993c558710ee.png',
				alt: 'Blue Lagoon Day Tour photo',
				caption: 'Blue Lagoon Day Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'kintamani-mount-batur',
		slug: 'kintamani-mount-batur',
		title: 'Kintamani Mount Batur Tour',
		tagline:
			'Experience the magic of Kintamani with an epic sunrise adventure by foot or 4WD Jeep through Black Lava, followed by a rejuvenating soak in natural...',
		duration: '8 hours',
		durationHours: 8,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/kintamani-mount-batur/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993dd33b6d4f.jpeg',
		overview:
			'This tour package offers the ultimate Bali highland experience, blending rugged adventure with serene relaxation. You can choose to conquer the iconic trails of Mount Batur on a sunrise trek or navigate the dramatic, volcanic landscape of the Black Lava fields in a powerful 4WD Jeep. After witnessing a breathtaking sunrise over the Kintamani caldera, you’ll head to a natural hot spring to soak your muscles in mineral-rich waters while enjoying unobstructed, panoramic views of the majestic Lake Batur.',
		whatTheyWillSee: [
			{
				id: 'jeep-sunrise-black-lava',
				title: 'Jeep Sunrise & Black Lava',
				description: 'Experience Jeep Sunrise & Black Lava with private guidance and flexible time.'
			},
			{
				id: 'hiking-mount-batur-sunrise',
				title: 'Hiking Mount Batur Sunrise',
				description:
					'Experience Hiking Mount Batur Sunrise with private guidance and flexible time.'
			},
			{
				id: 'hot-spring',
				title: 'Hot spring',
				description: 'Experience Hot spring with private guidance and flexible time.'
			},
			{
				id: 'kintamani-batur-view',
				title: 'Kintamani Batur View',
				description: 'Experience Kintamani Batur View with private guidance and flexible time.'
			},
			{
				id: 'max-6-peole-on-one-car',
				title: 'Max 6 peole on one car',
				description: 'Experience Max 6 peole on one car with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/kintamani-mount-batur/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993cddbc48d2.jpeg',
				alt: 'Kintamani Mount Batur Tour photo',
				caption: 'Kintamani Mount Batur Tour photo'
			},
			{
				urlRel: '../assets/images/tours/kintamani-mount-batur/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993cddbc49f5.jpeg',
				alt: 'Kintamani Mount Batur Tour photo',
				caption: 'Kintamani Mount Batur Tour photo'
			},
			{
				urlRel: '../assets/images/tours/kintamani-mount-batur/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993cddbc4b03.jpeg',
				alt: 'Kintamani Mount Batur Tour photo',
				caption: 'Kintamani Mount Batur Tour photo'
			},
			{
				urlRel: '../assets/images/tours/kintamani-mount-batur/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993cddbc4c76.jpeg',
				alt: 'Kintamani Mount Batur Tour photo',
				caption: 'Kintamani Mount Batur Tour photo'
			},
			{
				urlRel: '../assets/images/tours/kintamani-mount-batur/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993cddbc4def.jpeg',
				alt: 'Kintamani Mount Batur Tour photo',
				caption: 'Kintamani Mount Batur Tour photo'
			},
			{
				urlRel: '../assets/images/tours/kintamani-mount-batur/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993cddbc4f33.jpeg',
				alt: 'Kintamani Mount Batur Tour photo',
				caption: 'Kintamani Mount Batur Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'dolphin-tour',
		slug: 'dolphin-tour',
		title: 'Dolphin Tour',
		tagline:
			"Embark on a captivating North Bali escape featuring a sunrise dolphin cruise, snorkeling adventures, and visits to the island's most iconic lakeside...",
		duration: '10 hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 80,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/dolphin-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993e13b7eba0.jpeg',
		overview:
			'This enchanting journey takes you to the heart of North Bali’s natural wonders, starting with a magical boat ride at dawn to witness dolphins leaping in their natural habitat. The adventure continues beneath the waves as you swim and snorkel in the crystal-clear waters of Lovina, followed by a visit to the iconic Wanagiri Hidden Hills for breathtaking views and "Instagrammable" swings overlooking the twin lakes. The tour concludes with a peaceful visit to the legendary Ulundanu Beratan Temple, the famous "floating" water temple that sits serenely on the shores of Lake Beratan.',
		whatTheyWillSee: [
			{
				id: 'dolphin-sunrise-swim-snorkeling',
				title: 'Dolphin sunrise , swim , snorkeling',
				description:
					'Experience Dolphin sunrise , swim , snorkeling with private guidance and flexible time.'
			},
			{
				id: 'wanagiri-hill',
				title: 'Wanagiri Hill',
				description: 'Experience Wanagiri Hill with private guidance and flexible time.'
			},
			{
				id: 'ulundanu-beratan-temple',
				title: 'Ulundanu Beratan Temple',
				description: 'Experience Ulundanu Beratan Temple with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/dolphin-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e13b7ef95.jpeg',
				alt: 'Dolphin Tour photo',
				caption: 'Dolphin Tour photo'
			},
			{
				urlRel: '../assets/images/tours/dolphin-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e13b7f0da.jpeg',
				alt: 'Dolphin Tour photo',
				caption: 'Dolphin Tour photo'
			},
			{
				urlRel: '../assets/images/tours/dolphin-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e13b7f1ef.jpeg',
				alt: 'Dolphin Tour photo',
				caption: 'Dolphin Tour photo'
			},
			{
				urlRel: '../assets/images/tours/dolphin-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e13b7f2aa.jpeg',
				alt: 'Dolphin Tour photo',
				caption: 'Dolphin Tour photo'
			},
			{
				urlRel: '../assets/images/tours/dolphin-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e13b7f37c.jpeg',
				alt: 'Dolphin Tour photo',
				caption: 'Dolphin Tour photo'
			},
			{
				urlRel: '../assets/images/tours/dolphin-tour/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e13b7f468.png',
				alt: 'Dolphin Tour photo',
				caption: 'Dolphin Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'nusa-penida-tour',
		slug: 'nusa-penida-tour',
		title: 'Nusa Penida Tour',
		tagline:
			'Discover the raw beauty of Nusa Penida through a thrilling Manta Ray snorkeling safari and a tour of the island’s most spectacular coastal icons, from...',
		duration: '12 hours',
		durationHours: 12,
		tourType: 'Private Tour',
		priceFrom: 100,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/nusa-penida-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993e708b494f.jpeg',
		overview:
			'This package captures the "bucket list" essence of Bali’s most ruggedly beautiful neighbor, Nusa Penida. Your journey begins underwater for a once-in-a-lifetime chance to snorkel with majestic Manta Rays, exploring the island’s vibrant marine biodiversity. Back on land, you will visit the world-famous Kelingking Beach to marvel at the iconic T-Rex-shaped cliff.',
		whatTheyWillSee: [
			{
				id: 'manta-rays-snorkeling',
				title: 'Manta Rays Snorkeling',
				description: 'Experience Manta Rays Snorkeling with private guidance and flexible time.'
			},
			{
				id: 'kelingking-beach',
				title: 'Kelingking Beach',
				description: 'Experience Kelingking Beach with private guidance and flexible time.'
			},
			{
				id: 'broken-beach',
				title: 'Broken beach',
				description: 'Experience Broken beach with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/nusa-penida-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e708b4e49.jpeg',
				alt: 'Nusa Penida Tour photo',
				caption: 'Nusa Penida Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e708b4f6b.jpeg',
				alt: 'Nusa Penida Tour photo',
				caption: 'Nusa Penida Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e708b5239.jpeg',
				alt: 'Nusa Penida Tour photo',
				caption: 'Nusa Penida Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e708b5486.jpeg',
				alt: 'Nusa Penida Tour photo',
				caption: 'Nusa Penida Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993e708b568b.jpeg',
				alt: 'Nusa Penida Tour photo',
				caption: 'Nusa Penida Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'east-bali-tour',
		slug: 'east-bali-tour',
		title: 'East Bali Tour',
		tagline:
			'Step into the spiritual and royal heritage of East Bali with a visit to the iconic "Gateway to Heaven" at Lempuyang Temple and the exquisite floating...',
		duration: '10 hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 90,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/east-bali-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6993eb08eb44a.jpeg',
		overview:
			'This tour invites you to discover the spiritual heart and royal elegance of East Bali, home to some of the island’s most revered and photogenic landmarks. You will begin your journey at the majestic Lempuyang Temple, famously known as the "Gateway to Heaven," where you can capture a timeless reflection between the ancient stone split gates with Mount Agung as your backdrop. The experience continues with a visit to the serene Tirta Gangga Water Palace, a former royal retreat featuring a stunning labyrinth of tiered fountains, ornate stone carvings, and stepping stones across koi-filled ponds that showcase the pinnacle of Balinese water garden architecture.',
		whatTheyWillSee: [
			{
				id: 'lempuyang-temple',
				title: 'Lempuyang Temple',
				description: 'Experience Lempuyang Temple with private guidance and flexible time.'
			},
			{
				id: 'tirta-gangga-water-palace',
				title: 'Tirta Gangga Water Palace',
				description: 'Experience Tirta Gangga Water Palace with private guidance and flexible time.'
			},
			{
				id: 'lunch',
				title: 'Lunch',
				description: 'Experience Lunch with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/east-bali-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993eaf1c8031.jpeg',
				alt: 'East Bali Tour photo',
				caption: 'East Bali Tour photo'
			},
			{
				urlRel: '../assets/images/tours/east-bali-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993eaf1c8139.jpeg',
				alt: 'East Bali Tour photo',
				caption: 'East Bali Tour photo'
			},
			{
				urlRel: '../assets/images/tours/east-bali-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993eaf1c82fa.jpeg',
				alt: 'East Bali Tour photo',
				caption: 'East Bali Tour photo'
			},
			{
				urlRel: '../assets/images/tours/east-bali-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993eaf1c84e8.jpeg',
				alt: 'East Bali Tour photo',
				caption: 'East Bali Tour photo'
			},
			{
				urlRel: '../assets/images/tours/east-bali-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993eaf1c8696.jpeg',
				alt: 'East Bali Tour photo',
				caption: 'East Bali Tour photo'
			},
			{
				urlRel: '../assets/images/tours/east-bali-tour/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6993eaf1c8814.jpeg',
				alt: 'East Bali Tour photo',
				caption: 'East Bali Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'nusa-lembongan-tour',
		slug: 'nusa-lembongan-tour',
		title: 'Nusa Lembongan Island Tour',
		tagline:
			'Bali Nusa Lembongan Island Tour Is One Day Trip to Explore The Beauty Of Tourist Destination in Nusa Lembongan Island.',
		duration: '12 Hours',
		durationHours: 12,
		tourType: 'Private Tour',
		priceFrom: 120,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/nusa-lembongan-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_69946d2cb2d25.jpg',
		overview:
			'Bali Nusa Lembongan Islands Tour is a one day tour program that we made for those of you who want to visit the island of Nusa Lembongan with all its natural beauty, the sea is still beautiful and sustainable and the hospitality of the local residents on this island. As you know that the island of Nusa Lembongan is a small island that is part of the island of Bali, which is only separated by the ocean, so to get to the island of Nusa Lembongan, you must use sea transportation such as a fast boat. Here we make it easy for you to do all that, where this package includes everything, from fast boat tickets to Nusa Lembongan, transportation for tours in Nusa Lembongan and fees for activities and attractions as well as lunch, fast boat trips from Sanur to Nusa Lembongan it will take about 30 minutes if the sea waves are not so big.',
		whatTheyWillSee: [
			{
				id: 'mangrove-tour',
				title: 'Mangrove Tour',
				description: 'Experience Mangrove Tour with private guidance and flexible time.'
			},
			{
				id: 'seaweed-farm',
				title: 'Seaweed Farm',
				description: 'Experience Seaweed Farm with private guidance and flexible time.'
			},
			{
				id: 'yellow-bridge',
				title: 'Yellow Bridge',
				description: 'Experience Yellow Bridge with private guidance and flexible time.'
			},
			{
				id: 'dream-beach-lembongan',
				title: 'Dream Beach Lembongan',
				description: 'Experience Dream Beach Lembongan with private guidance and flexible time.'
			},
			{
				id: 'lembongan-devil-tears-bali-nusa-lembongan-islands-tour-bali-golden-tour',
				title: 'Lembongan Devil Tears | Bali Nusa Lembongan Islands Tour | Bali Golden Tour',
				description:
					'Experience Lembongan Devil Tears | Bali Nusa Lembongan Islands Tour | Bali Golden Tour with private guidance and flexible time.'
			},
			{
				id: 'devil-s-tears',
				title: "Devil's Tears",
				description: "Experience Devil's Tears with private guidance and flexible time."
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/nusa-lembongan-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69946d2cb3017.jpg',
				alt: 'Nusa Lembongan Island Tour photo',
				caption: 'Nusa Lembongan Island Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-lembongan-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69946d2cb30e3.jpg',
				alt: 'Nusa Lembongan Island Tour photo',
				caption: 'Nusa Lembongan Island Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-lembongan-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69946d2cb31b4.jpg',
				alt: 'Nusa Lembongan Island Tour photo',
				caption: 'Nusa Lembongan Island Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-lembongan-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69946d2cb32a0.jpg',
				alt: 'Nusa Lembongan Island Tour photo',
				caption: 'Nusa Lembongan Island Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-lembongan-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69946d2cb3314.jpg',
				alt: 'Nusa Lembongan Island Tour photo',
				caption: 'Nusa Lembongan Island Tour photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-lembongan-tour/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69946d2cb3396.jpg',
				alt: 'Nusa Lembongan Island Tour photo',
				caption: 'Nusa Lembongan Island Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'jatiluwih-and-tanah-lot-tour',
		slug: 'jatiluwih-and-tanah-lot-tour',
		title: 'Jatiluwih And Tanah Lot Tour',
		tagline:
			'Is great opportunity we offer to see the beautiful rice terrace and enjoy the view of sunset at Tanah Lot Temple or most known as Sea Temple.',
		duration: '10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 80,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/jatiluwih-and-tanah-lot-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_699473cfe7453.jpg',
		overview:
			'Bali Jatiluwih and Tanah Lot Sunset Tour is one of the best Bali Full Day Tour Packages in Bali islands to visit Jatiluwih Rice Terrace the beautiful panorama of rice terrace unfolding from the foot of mountain and then continue to see the fascinating view of sunset at Tanah Lot Temple. Is great opportunity we offer to see the beautiful rice terrace and enjoy the view of sunset at Tanah Lot Temple or most known as Sea Temple. Bali Jatiluwih and Tanah Lot Sunset Tour will visit places of interest such as Taman Ayun Temple is beautiful temple in Mengwi regency, then visit Bali Coffee Plantation to see the various coffee plants and try the testing coffee for free, After visit coffee farm we continue to visit Bedugul area to see the remarkable view of Beratan lake temple / Ulun Danu Beratan Temple. Then we directly to visit the Jatiluwih Rice Terrace with breathtaking view of rice paddy, this rice terrace is the biggest rice paddy in Bali, then we will having lunch in this site, while having lunch you can see the view of rice paddy. After lunch finish, the trip continue to visit the highlight site in this tour packages, we will visit the Tanah Lot Temple is a Balinese Hindu temple on the rock located in the middle of sea, this temple is the most visit during sunset time, due the view was unbelievable was amazing, is great moment you don’t want to missed. The Jatiluwih and Tanah Lot Sunset Tour will explore Bali nature with beautiful panorama and local society life. Enjoy this Bali Jatiluwih and Tanah Lot Sunset Tour packages with our Balinese Tours Driver during your holiday in Bali and below is a short description about the place of interest you will visit during Bali Jatiluwih Rice Terrace and Tanah Lot Temple Sunset Tour.',
		whatTheyWillSee: [
			{
				id: 'taman-ayun-temple',
				title: 'Taman Ayun Temple',
				description: 'Experience Taman Ayun Temple with private guidance and flexible time.'
			},
			{
				id: 'ulun-danu-beratan-temple',
				title: 'Ulun Danu Beratan Temple',
				description: 'Experience Ulun Danu Beratan Temple with private guidance and flexible time.'
			},
			{
				id: 'jatiluwih-rice-terrace',
				title: 'Jatiluwih Rice Terrace',
				description: 'Experience Jatiluwih Rice Terrace with private guidance and flexible time.'
			},
			{
				id: 'tanah-lot-temple',
				title: 'Tanah Lot Temple',
				description: 'Experience Tanah Lot Temple with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/jatiluwih-and-tanah-lot-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_699473cfe7632.jpg',
				alt: 'Jatiluwih And Tanah Lot Tour photo',
				caption: 'Jatiluwih And Tanah Lot Tour photo'
			},
			{
				urlRel: '../assets/images/tours/jatiluwih-and-tanah-lot-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_699473cfe76c8.jpg',
				alt: 'Jatiluwih And Tanah Lot Tour photo',
				caption: 'Jatiluwih And Tanah Lot Tour photo'
			},
			{
				urlRel: '../assets/images/tours/jatiluwih-and-tanah-lot-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_699473cfe7743.jpg',
				alt: 'Jatiluwih And Tanah Lot Tour photo',
				caption: 'Jatiluwih And Tanah Lot Tour photo'
			},
			{
				urlRel: '../assets/images/tours/jatiluwih-and-tanah-lot-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_699473cfe77c4.jpg',
				alt: 'Jatiluwih And Tanah Lot Tour photo',
				caption: 'Jatiluwih And Tanah Lot Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'bali-besakih-tour',
		slug: 'bali-besakih-tour',
		title: 'Bali Besakih and Pengelipuran Tour',
		tagline:
			'Bali Besakih and Penglipuran Tour is One day Tour For EnjoyVisiting Temple Of Besakih and Ancient Village of Penglipuran.',
		duration: '10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 80,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/bali-besakih-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6995597cdff20.jpg',
		overview:
			'Bali Besakih and Penglipuran Tour is a Bali Full Day Tour Package to visiting the largest temple and the mother of temples in Bali, namely Besakih Temple and continuing to visit an ancient village where the buildings are still preserved as they were in ancient times. A very good combination tour where we can see the oldest and largest temple in Bali and see ancient villages from ancient times which are still preserved today, suitable for those of you who want to know more about the religion and culture of the people in Bali. First, our tour driver will pick you up at the place where you are staying and go straight to the first tourist destination, namely Kerta Gosa, a building which functions as a place for discussions about the current security situation, justice and prosperity for the Klungkung kingdom, followed by visiting Pura Besakih which is a mother temple and the largest on the island of Bali which has 1 central temple and 18 accompanying temples, continue to the restaurant to enjoy delicious Indonesian food for lunch, after lunch the journey continues to Kehen Temple which is an ancient temple dedicated to worshiping Dewa Hyang Api or God of Fire, continued visiting Penglipuran Village, an ancient village whose house buildings and courtyard architecture are still as natural as they were in ancient times. After that, our tour driver will take you back to the hotel with a very impressive experience on a one day tour to visit the mother temple of Besakih and the ancient traditions of Penglipuran village, accompanied by an experienced and friendly tour driver who will make the this Bali Besakih and Penglipuran Tour is going to be a lot of fun',
		whatTheyWillSee: [
			{
				id: 'besakih-temple',
				title: 'Besakih Temple',
				description: 'Experience Besakih Temple with private guidance and flexible time.'
			},
			{
				id: 'pengelipuran-village',
				title: 'Pengelipuran Village',
				description: 'Experience Pengelipuran Village with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/bali-besakih-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6995597ce01dd.jpg',
				alt: 'Bali Besakih and Pengelipuran Tour photo',
				caption: 'Bali Besakih and Pengelipuran Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-besakih-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6995597ce02a7.jpg',
				alt: 'Bali Besakih and Pengelipuran Tour photo',
				caption: 'Bali Besakih and Pengelipuran Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-besakih-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6995597ce034c.jpg',
				alt: 'Bali Besakih and Pengelipuran Tour photo',
				caption: 'Bali Besakih and Pengelipuran Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-besakih-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6995597ce03ce.jpg',
				alt: 'Bali Besakih and Pengelipuran Tour photo',
				caption: 'Bali Besakih and Pengelipuran Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-besakih-tour/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6995597ce049a.jpg',
				alt: 'Bali Besakih and Pengelipuran Tour photo',
				caption: 'Bali Besakih and Pengelipuran Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-besakih-tour/gallery-06.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6995597ce0507.jpg',
				alt: 'Bali Besakih and Pengelipuran Tour photo',
				caption: 'Bali Besakih and Pengelipuran Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'bali-beach-tour',
		slug: 'bali-beach-tour',
		title: 'Bali Beach Tour',
		tagline:
			'Bali Beach Tour is To Enjoy The Famous White Sand beach In Bali Island With Profesional Bali Tours Driver.',
		duration: '10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 70,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/bali-beach-tour/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_69955c6d374be.jpg',
		overview:
			"Bali Beach Tour is a Bali Half Day Tour Packages to Visit some of the famous and beautiful white sand beach in Bali Islands. Is a half day tour to visit the beach with its beautiful white sand and clear water, a tour that may be specifically for those of you who really like to travel to the beach whether it's for swimming, sunbathing or just enjoying the beach view with a gentle beach breeze will make the sensation become very comfortable. The first thing we will visit is Kuta Beach which is famous for its white sand and clear water and also with all the beach activities here which are very tempting, proceed to dreamland beach to see the beauty of the beach which has always been a dream of surfers, where on the beach The waves are very big and suitable for surfers who want to do attractions with their surfboards, and proceed to Pandawa Beach to enjoy the beautiful beach with white sand that stretches along the beach, perfect for those of you who want to swim here or just sunbathe. Continue to go to the restaurant to enjoy very delicious Indonesian food, after lunch we will take you back to the hotel by bringing a very impressive experience on this beach tour, the tour will also be more enjoyable with the hospitality of our tour driver who will always make the atmosphere becomes lively, so it will make you comfortable during the Bali Beach Tour",
		whatTheyWillSee: [
			{
				id: 'melasti-beach',
				title: 'Melasti Beach',
				description: 'Experience Melasti Beach with private guidance and flexible time.'
			},
			{
				id: 'suluban-beach',
				title: 'Suluban Beach',
				description: 'Experience Suluban Beach with private guidance and flexible time.'
			},
			{
				id: 'padang-padang-beach',
				title: 'Padang-padang Beach',
				description: 'Experience Padang-padang Beach with private guidance and flexible time.'
			},
			{
				id: 'pandawa-beach',
				title: 'Pandawa Beach',
				description: 'Experience Pandawa Beach with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/bali-beach-tour/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69955c6d3782b.jpg',
				alt: 'Bali Beach Tour photo',
				caption: 'Bali Beach Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-beach-tour/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69955c6d378f1.jpg',
				alt: 'Bali Beach Tour photo',
				caption: 'Bali Beach Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-beach-tour/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69955c6d379c7.jpg',
				alt: 'Bali Beach Tour photo',
				caption: 'Bali Beach Tour photo'
			},
			{
				urlRel: '../assets/images/tours/bali-beach-tour/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69955c6d37a46.jpg',
				alt: 'Bali Beach Tour photo',
				caption: 'Bali Beach Tour photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'banana-boat-benoa',
		slug: 'banana-boat-benoa',
		title: 'Banana Boat Benoa Water Sport',
		tagline:
			'You will feel the rush of the sea breeze and the bumpy sensation as the boat bounces over the waves. It’s a mix of speed, balance, and teamwork to keep...',
		duration: '15 Minutes / min 2 pax',
		durationHours: 15,
		tourType: 'Private Tour',
		priceFrom: 25,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/banana-boat-benoa/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_69e57511cd16f.jpeg',
		overview:
			'A Banana Boat is an unpowered, inflatable recreational boat shaped like a long yellow banana. It is designed to be towed by a motorized speedboat. At Tanjung Benoa, the boat usually accommodates 4 to 6 passengers plus one professional instructor who sits at the front to guide the group.',
		whatTheyWillSee: [
			{
				id: 'min-age-8-years-old',
				title: 'Min Age 8 Years Old',
				description: 'Experience Min Age 8 Years Old with private guidance and flexible time.'
			},
			{
				id: 'max-age-69-years-old',
				title: 'Max Age 69 Years Old',
				description: 'Experience Max Age 69 Years Old with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/banana-boat-benoa/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e574f29e4d6.jpeg',
				alt: 'Banana Boat Benoa Water Sport photo',
				caption: 'Banana Boat Benoa Water Sport photo'
			},
			{
				urlRel: '../assets/images/tours/banana-boat-benoa/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e574f29e61b.jpeg',
				alt: 'Banana Boat Benoa Water Sport photo',
				caption: 'Banana Boat Benoa Water Sport photo'
			},
			{
				urlRel: '../assets/images/tours/banana-boat-benoa/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e574f29e6de.jpeg',
				alt: 'Banana Boat Benoa Water Sport photo',
				caption: 'Banana Boat Benoa Water Sport photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'donut-boat-benoa',
		slug: 'donut-boat-benoa',
		title: 'Donut Boat Benoa Water Sport',
		tagline: 'Riding the waves like a pro on this giant donut.',
		duration: '2 Round / Min 2 Pax',
		durationHours: 2,
		tourType: 'Private Tour',
		priceFrom: 20,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/donut-boat-benoa/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_69e578bb12a4e.jpeg',
		overview:
			'A Donut Boat is an inflatable, round-shaped rubber raft that looks exactly like a giant donut with a hollow center where passengers sit. Unlike the long Banana Boat, the Donut Boat is designed for smaller groups, typically accommodating 2 to 4 people per session',
		whatTheyWillSee: [
			{
				id: 'min-age-8-years-old',
				title: 'Min Age 8 Years Old',
				description: 'Experience Min Age 8 Years Old with private guidance and flexible time.'
			},
			{
				id: 'max-age-69-years-old',
				title: 'Max Age 69 Years Old',
				description: 'Experience Max Age 69 Years Old with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/donut-boat-benoa/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e578bb12e35.jpeg',
				alt: 'Donut Boat Benoa Water Sport photo',
				caption: 'Donut Boat Benoa Water Sport photo'
			},
			{
				urlRel: '../assets/images/tours/donut-boat-benoa/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e578bb12f17.jpeg',
				alt: 'Donut Boat Benoa Water Sport photo',
				caption: 'Donut Boat Benoa Water Sport photo'
			},
			{
				urlRel: '../assets/images/tours/donut-boat-benoa/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e578bb1300a.jpeg',
				alt: 'Donut Boat Benoa Water Sport photo',
				caption: 'Donut Boat Benoa Water Sport photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'jet-ski-benoa',
		slug: 'jet-ski-benoa',
		title: 'Jet Ski Benoa Water Sport with Instructor',
		tagline: 'Adrenaline rush on the open water.',
		duration: '15 Minutes with Instructor',
		durationHours: 15,
		tourType: 'Private Tour',
		priceFrom: 35,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/jet-ski-benoa/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_69e57d86e4edf.jpeg',
		overview:
			'Jet skiing at Tanjung Benoa is the most popular high-speed water sport in Bali. It is perfect for those who love speed and want to experience the thrill of riding across the ocean waves.',
		whatTheyWillSee: [
			{
				id: 'jet-ski-benoa-water-sport-with-instructor',
				title: 'Jet Ski Benoa Water Sport with Instructor',
				description:
					'Experience Jet Ski Benoa Water Sport with Instructor with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/jet-ski-benoa/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e57d86e52a5.jpeg',
				alt: 'Jet Ski Benoa Water Sport with Instructor photo',
				caption: 'Jet Ski Benoa Water Sport with Instructor photo'
			},
			{
				urlRel: '../assets/images/tours/jet-ski-benoa/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e57d86e53c9.jpeg',
				alt: 'Jet Ski Benoa Water Sport with Instructor photo',
				caption: 'Jet Ski Benoa Water Sport with Instructor photo'
			},
			{
				urlRel: '../assets/images/tours/jet-ski-benoa/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e57d86e5506.jpeg',
				alt: 'Jet Ski Benoa Water Sport with Instructor photo',
				caption: 'Jet Ski Benoa Water Sport with Instructor photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'glass-bottom-boat',
		slug: 'glass-bottom-boat',
		title: 'Glass Bottom Boat and Turtle Conservation',
		tagline: 'The journey begins with a motorized boat trip from the Tanjung Benoa coast',
		duration: '60 Minutes (min 4Pax, Max 10 Pax)',
		durationHours: 60,
		tourType: 'Private Tour',
		priceFrom: 30,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/glass-bottom-boat/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_69e591d6a49db.jpeg',
		overview:
			'In Tanjung Benoa, the Glass Bottom Boat and Turtle Conservation tour is a popular family-friendly activity that combines a scenic boat ride with an educational wildlife experience',
		whatTheyWillSee: [
			{
				id: 'glass-bottom-boat-and-turtle-conservation',
				title: 'Glass Bottom Boat and Turtle Conservation',
				description:
					'Experience Glass Bottom Boat and Turtle Conservation with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/glass-bottom-boat/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e591d6a4e55.jpeg',
				alt: 'Glass Bottom Boat and Turtle Conservation photo',
				caption: 'Glass Bottom Boat and Turtle Conservation photo'
			},
			{
				urlRel: '../assets/images/tours/glass-bottom-boat/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e591d6a4ff2.jpeg',
				alt: 'Glass Bottom Boat and Turtle Conservation photo',
				caption: 'Glass Bottom Boat and Turtle Conservation photo'
			},
			{
				urlRel: '../assets/images/tours/glass-bottom-boat/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_69e591d6a5108.jpeg',
				alt: 'Glass Bottom Boat and Turtle Conservation photo',
				caption: 'Glass Bottom Boat and Turtle Conservation photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'nusa-penida-snorkling',
		slug: 'nusa-penida-snorkling',
		title: 'Nusa Penida Snorkling Package All in',
		tagline:
			'Here are the core highlights of the Nusa Penida Land & Manta Ray Snorkeling Tour summarized into a high-level overview',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 100,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/nusa-penida-snorkling/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9a8b70ecaa2.jpg',
		overview:
			"Snorkeling in Nusa Penida is widely considered one of the best marine experiences in Bali. Located within a protected marine zone, the waters around the island are rich in nutrients, attracting vibrant coral reefs, massive schools of tropical fish, and its world-famous gentle giants: the Reef Manta Rays.Because of the island's unique underwater topography, a standard snorkeling trip usually consists of a 3 to 4-spot island hopping boat tour. Here is a detailed description of what you will experience at the top snorkeling sites:",
		whatTheyWillSee: [
			{
				id: 'nusa-penida-island',
				title: 'Nusa Penida Island',
				description: 'Experience Nusa Penida Island with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/nusa-penida-snorkling/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8b70ed23d.jpg',
				alt: 'Nusa Penida Snorkling Package All in photo',
				caption: 'Nusa Penida Snorkling Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-snorkling/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8b70ed3b0.jpg',
				alt: 'Nusa Penida Snorkling Package All in photo',
				caption: 'Nusa Penida Snorkling Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-snorkling/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8b70ed510.jpg',
				alt: 'Nusa Penida Snorkling Package All in photo',
				caption: 'Nusa Penida Snorkling Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-snorkling/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8b70ed63e.jpg',
				alt: 'Nusa Penida Snorkling Package All in photo',
				caption: 'Nusa Penida Snorkling Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-snorkling/gallery-05.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8b70ed719.jpg',
				alt: 'Nusa Penida Snorkling Package All in photo',
				caption: 'Nusa Penida Snorkling Package All in photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'nusa-penida-west-trip-bali',
		slug: 'nusa-penida-west-trip-bali',
		title: 'Nusa Penida West Trip Package All in',
		tagline:
			'Nusa Penida West Trip, focusing on the most spectacular sights and experiences you will encounter on the western coast of the island',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 90,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/nusa-penida-west-trip-bali/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9a8db2ef2d1.jpg',
		overview:
			"Key Sightseeing HighlightsKelingking Beach (The T-Rex Cliff): The ultimate icon of Bali. You will stand on a high cliff overlooking a massive coastal rock formation shaped exactly like a T-Rex dinosaur guarding a pristine, unreachable white-sand beach below.Broken Beach (Pasih Uug): A spectacular geological formation featuring a massive natural rock archway over the ocean. You can walk right across the bridge and peer down into a giant, enclosed coastal pool filled with swirling turquoise water.Angel's Billabong: Located just a 5-minute walk from Broken Beach, this is a crystal-clear natural infinity pool nestled between sharp volcanic rock formations. During low tide, you can see straight to the patterned seafloor beneath.Crystal Bay: A beautiful, palm-fringed crescent beach with incredibly clear waters and a rocky islet just off the shore. It is the perfect final stop to relax, grab a fresh coconut, and watch a classic Indonesian sunset.",
		whatTheyWillSee: [
			{
				id: 'kelingking-beach',
				title: 'Kelingking Beach',
				description: 'Experience Kelingking Beach with private guidance and flexible time.'
			},
			{
				id: 'broken-beach',
				title: 'Broken Beach',
				description: 'Experience Broken Beach with private guidance and flexible time.'
			},
			{
				id: 'angels-billabong-beach',
				title: 'Angels Billabong Beach',
				description: 'Experience Angels Billabong Beach with private guidance and flexible time.'
			},
			{
				id: 'crystal-bay-beach',
				title: 'Crystal Bay Beach',
				description: 'Experience Crystal Bay Beach with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/nusa-penida-west-trip-bali/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8db2efac1.jpg',
				alt: 'Nusa Penida West Trip Package All in photo',
				caption: 'Nusa Penida West Trip Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-west-trip-bali/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8db2efcdb.jpg',
				alt: 'Nusa Penida West Trip Package All in photo',
				caption: 'Nusa Penida West Trip Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-west-trip-bali/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8db2efecc.jpg',
				alt: 'Nusa Penida West Trip Package All in photo',
				caption: 'Nusa Penida West Trip Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/nusa-penida-west-trip-bali/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8db2f007b.jpg',
				alt: 'Nusa Penida West Trip Package All in photo',
				caption: 'Nusa Penida West Trip Package All in photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'east-trip-nusa-penida',
		slug: 'east-trip-nusa-penida',
		title: 'Nusa Penida East Trip Package All in',
		tagline:
			'Nusa Penida East Trip offers a completely different vibe compared to the west coast, focusing on dramatic sunrise viewpoints, white sand paradise beaches,...',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 90,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/east-trip-nusa-penida/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9a8fb364e74.jpg',
		overview:
			'The Nusa Penida East Trip is a spectacular journey designed to explore the rugged, raw, and highly photogenic eastern coastline of Nusa Penida Island. While the West Trip is famous for its dramatic rock formations like the T-Rex cliff, the East Trip is celebrated for its paradise white-sand beaches, towering limestone pinnacles, and iconic clifftop viewpoints.It offers a more tranquil, laid-back atmosphere and is widely considered a dream itinerary for landscape photographers and nature enthusiasts.',
		whatTheyWillSee: [
			{
				id: 'atuh-beach',
				title: 'Atuh Beach',
				description: 'Experience Atuh Beach with private guidance and flexible time.'
			},
			{
				id: 'diamond-beach',
				title: 'Diamond Beach',
				description: 'Experience Diamond Beach with private guidance and flexible time.'
			},
			{
				id: 'tree-house',
				title: 'Tree House',
				description: 'Experience Tree House with private guidance and flexible time.'
			},
			{
				id: 'mollenteng-view',
				title: 'Mollenteng View',
				description: 'Experience Mollenteng View with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/east-trip-nusa-penida/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8fb36579f.jpg',
				alt: 'Nusa Penida East Trip Package All in photo',
				caption: 'Nusa Penida East Trip Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/east-trip-nusa-penida/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8fb365902.jpg',
				alt: 'Nusa Penida East Trip Package All in photo',
				caption: 'Nusa Penida East Trip Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/east-trip-nusa-penida/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8fb365a68.jpg',
				alt: 'Nusa Penida East Trip Package All in photo',
				caption: 'Nusa Penida East Trip Package All in photo'
			},
			{
				urlRel: '../assets/images/tours/east-trip-nusa-penida/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a8fb365c92.jpg',
				alt: 'Nusa Penida East Trip Package All in photo',
				caption: 'Nusa Penida East Trip Package All in photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'mix-east-and-west-trip',
		slug: 'mix-east-and-west-trip',
		title: 'Nusa Penida Mix West and East Package',
		tagline:
			'Mixed West & East Nusa Penida Trip. This hybrid itinerary is designed for travelers who want to see the absolute best icons of both coasts in a single day...',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 100,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/mix-east-and-west-trip/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9a90ed39265.jpg',
		overview:
			'The Mixed West & East Nusa Penida Trip is the ultimate comprehensive itinerary designed to show you the absolute best highlights of both coastlines [balibestjourney.com, agoda.com]. This route combines the dramatic geological formations of the West with the paradise-like white sand beaches and iconic cliff view treehouses of the East.',
		whatTheyWillSee: [
			{
				id: 'diamond-beach',
				title: 'Diamond Beach',
				description: 'Experience Diamond Beach with private guidance and flexible time.'
			},
			{
				id: 'tree-house',
				title: 'Tree House',
				description: 'Experience Tree House with private guidance and flexible time.'
			},
			{
				id: 'kelingking-beach',
				title: 'Kelingking Beach',
				description: 'Experience Kelingking Beach with private guidance and flexible time.'
			},
			{
				id: 'broken-beach',
				title: 'Broken Beach',
				description: 'Experience Broken Beach with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/mix-east-and-west-trip/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a90ed397ef.jpg',
				alt: 'Nusa Penida Mix West and East Package photo',
				caption: 'Nusa Penida Mix West and East Package photo'
			},
			{
				urlRel: '../assets/images/tours/mix-east-and-west-trip/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a90ed39a6d.jpg',
				alt: 'Nusa Penida Mix West and East Package photo',
				caption: 'Nusa Penida Mix West and East Package photo'
			},
			{
				urlRel: '../assets/images/tours/mix-east-and-west-trip/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a90ed39c09.jpg',
				alt: 'Nusa Penida Mix West and East Package photo',
				caption: 'Nusa Penida Mix West and East Package photo'
			},
			{
				urlRel: '../assets/images/tours/mix-east-and-west-trip/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9a90ed39d42.jpg',
				alt: 'Nusa Penida Mix West and East Package photo',
				caption: 'Nusa Penida Mix West and East Package photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'ubud-river-tubing',
		slug: 'ubud-river-tubing',
		title: 'Ubud River Tubing Include Lunch',
		tagline: 'lazy river style experience, making it relaxed, scenic, and family-friendly.',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 30,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/ubud-river-tubing/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9d54a81057b.jpg',
		overview:
			'Exploring 15 Caves: The main highlight is the 1.5-kilometer route that passes through 15 river caves and tunnels. Some of these tunnels are historic waterways dating back to the World War II era.Duration & Water Conditions: The entire tubing journey takes around 40 to 45 minutes. The water is relatively shallow (roughly knee-deep for adults), offering a refreshing and calm float without intense rapids.All-Inclusive Facilities: Standard tickets generally cover safety gear (helmets and life jackets), local guides, locker access, changing rooms, showers, towels, and a buffet lunch at Pandawa Cafe, which overlooks the surrounding cliffs and jungle.',
		whatTheyWillSee: [
			{
				id: 'standard-tickets-generally-cover-safety-gear-helmets-and-life-jackets',
				title: 'Standard tickets generally cover safety gear (helmets and life jackets),',
				description:
					'Experience Standard tickets generally cover safety gear (helmets and life jackets), with private guidance and flexible time.'
			},
			{
				id: 'local-guides',
				title: 'local guides,',
				description: 'Experience local guides, with private guidance and flexible time.'
			},
			{
				id: 'locker-access',
				title: 'locker access,',
				description: 'Experience locker access, with private guidance and flexible time.'
			},
			{
				id: 'changing-rooms-showers-towels-and-a-buffet-lunch-at-pandawa-cafe',
				title: 'changing rooms, showers, towels, and a buffet lunch at Pandawa Cafe.',
				description:
					'Experience changing rooms, showers, towels, and a buffet lunch at Pandawa Cafe. with private guidance and flexible time.'
			},
			{
				id: 'exlude-transport',
				title: 'exlude Transport',
				description: 'Experience exlude Transport with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/ubud-river-tubing/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d54a81122e.jpg',
				alt: 'Ubud River Tubing Include Lunch photo',
				caption: 'Ubud River Tubing Include Lunch photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-river-tubing/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d54a81135a.jpg',
				alt: 'Ubud River Tubing Include Lunch photo',
				caption: 'Ubud River Tubing Include Lunch photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-river-tubing/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d54a811541.jpg',
				alt: 'Ubud River Tubing Include Lunch photo',
				caption: 'Ubud River Tubing Include Lunch photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'ubud-atv-bike',
		slug: 'ubud-atv-bike',
		title: 'Ubud Quad Bike ATV Free Lunch',
		tagline:
			'A completely private trail with no public asphalt roads. You will ride through jungle, rivers, waterfalls, mud, and rice fields.',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 60,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/ubud-atv-bike/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9d5746a63dd.jpg',
		overview:
			'100% Off-Road Track A completely private trail with no public asphalt roads. You will ride through jungle, rivers, waterfalls, mud, and rice fields.Iconic Landmarks: The route features unique artificial spots, including the Gorilla Face Cave and the Legong Tunnel.Difficulty Level ,The track is beginner-friendly yet exciting for experienced riders, with professional instructors guiding you throughout the tour.',
		whatTheyWillSee: [
			{
				id: 'what-s-includedinternational',
				title: "What's IncludedInternational",
				description:
					"Experience What's IncludedInternational with private guidance and flexible time."
			},
			{
				id: 'standard-safety-gear-helmet-and-boots',
				title: 'standard safety gear (helmet and boots).',
				description:
					'Experience standard safety gear (helmet and boots). with private guidance and flexible time.'
			},
			{
				id: 'professional-tour-guide',
				title: 'Professional tour guide.',
				description: 'Experience Professional tour guide. with private guidance and flexible time.'
			},
			{
				id: 'locker-towel-and-shower-facilities',
				title: 'Locker, towel, and shower facilities.',
				description:
					'Experience Locker, towel, and shower facilities. with private guidance and flexible time.'
			},
			{
				id: 'free-access-to-the-infinity-pool-after-your-ride',
				title: 'Free access to the infinity pool after your ride.',
				description:
					'Experience Free access to the infinity pool after your ride. with private guidance and flexible time.'
			},
			{
				id: 'insurance-coverage-during-the-activity',
				title: 'Insurance coverage during the activity.',
				description:
					'Experience Insurance coverage during the activity. with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/ubud-atv-bike/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d5746a6d8a.jpg',
				alt: 'Ubud Quad Bike ATV Free Lunch photo',
				caption: 'Ubud Quad Bike ATV Free Lunch photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-atv-bike/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d5746a6fd2.jpg',
				alt: 'Ubud Quad Bike ATV Free Lunch photo',
				caption: 'Ubud Quad Bike ATV Free Lunch photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-atv-bike/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d5746a7159.jpg',
				alt: 'Ubud Quad Bike ATV Free Lunch photo',
				caption: 'Ubud Quad Bike ATV Free Lunch photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-atv-bike/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d5746a72ee.jpg',
				alt: 'Ubud Quad Bike ATV Free Lunch photo',
				caption: 'Ubud Quad Bike ATV Free Lunch photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	},
	{
		id: 'ubud-river-rafting-include',
		slug: 'ubud-river-rafting-include',
		title: 'Ubud River Rafting Include Lunch and Photo',
		tagline:
			'offers an exciting white-water rafting experience on the Ayung River with a unique no-stairs access, making it highly accessible for children and older...',
		duration: '8-10 Hours',
		durationHours: 10,
		tourType: 'Private Tour',
		priceFrom: 40,
		currency: 'USD',
		heroImageRel: '../assets/images/tours/ubud-river-rafting-include/hero.webp',
		heroImageFallback: 'https://suryabalitour.com/assets/images/uploads/cover_6a9d59ec9db23.jpg',
		overview:
			"Activity Highlights & PerksNo Exhausting Stairs: One of the main advantages of choosing Tarantula Rafting is their river access, which does not require walking up or down hundreds of steep stairs. This makes it highly accessible for families, beginners, and children.Ayung River Route: You will cruise down Bali's longest river, passing through lush tropical rainforests, hidden waterfalls, and beautiful canyon stone carvings.Full Facilities: Standard tickets usually include international safety equipment, professional guides, shower facilities, towels, lockers, a buffet lunch, and insurance coverage.",
		whatTheyWillSee: [
			{
				id: 'professional-guides',
				title: 'Professional guides,',
				description: 'Experience Professional guides, with private guidance and flexible time.'
			},
			{
				id: 'shower-facilities-towels-lockers-a-buffet-lunch-and-insurance-coverage',
				title: 'shower facilities, towels, lockers, a buffet lunch, and insurance coverage.',
				description:
					'Experience shower facilities, towels, lockers, a buffet lunch, and insurance coverage. with private guidance and flexible time.'
			}
		],
		goodToKnow: [
			'Private trip: only you and your group travel in the car.',
			'Hotel lobby pickup and drop-off at the time you choose.',
			'The route can be adjusted on the day, just talk to your driver.',
			'Bring sunblock, a hat, and comfortable walking shoes.'
		],
		galleryRaw: [
			{
				urlRel: '../assets/images/tours/ubud-river-rafting-include/gallery-01.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d59ec9e90a.jpg',
				alt: 'Ubud River Rafting Include Lunch and Photo photo',
				caption: 'Ubud River Rafting Include Lunch and Photo photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-river-rafting-include/gallery-02.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d59ec9ebdc.jpg',
				alt: 'Ubud River Rafting Include Lunch and Photo photo',
				caption: 'Ubud River Rafting Include Lunch and Photo photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-river-rafting-include/gallery-03.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d59ec9ef30.jpg',
				alt: 'Ubud River Rafting Include Lunch and Photo photo',
				caption: 'Ubud River Rafting Include Lunch and Photo photo'
			},
			{
				urlRel: '../assets/images/tours/ubud-river-rafting-include/gallery-04.webp',
				fallbackUrl: 'https://suryabalitour.com/assets/images/uploads/gallery_6a9d59ec9f12d.jpg',
				alt: 'Ubud River Rafting Include Lunch and Photo photo',
				caption: 'Ubud River Rafting Include Lunch and Photo photo'
			}
		],
		addons: [
			{
				id: 'lunch-buffet-package',
				name: 'Authentic Indonesian Set / Buffet Lunch',
				description: 'Enjoy delicious local dining overlooking picturesque island views.',
				price: 10,
				priceType: 'per_person',
				unitLabel: 'per person'
			},
			{
				id: 'personal-photographer',
				name: 'Dedicated Photographer & Drone Documentation',
				description:
					'Professional photographer delivering edited high-resolution photos and 4K aerial footage within 24h.',
				price: 60,
				priceType: 'per_group',
				unitLabel: 'per car'
			}
		],
		pickupAreas: ['Ubud', 'Kuta', 'Seminyak', 'Canggu', 'Sanur', 'Nusa Dua', 'Jimbaran']
	}
];

export const tourPackages: TourPackage[] = rawTourPackages.map((raw) => ({
	id: raw.id,
	slug: raw.slug,
	title: raw.title,
	tagline: raw.tagline,
	duration: raw.duration,
	durationHours: raw.durationHours,
	tourType: raw.tourType,
	priceFrom: raw.priceFrom,
	currency: raw.currency,
	heroImage: resolveAssetUrl(raw.heroImageRel, raw.heroImageFallback),
	overview: raw.overview,
	whatTheyWillSee: raw.whatTheyWillSee,
	goodToKnow: raw.goodToKnow,
	gallery: raw.galleryRaw.map((g) => ({
		url: resolveAssetUrl(g.urlRel, g.fallbackUrl),
		alt: g.alt,
		caption: g.caption
	})),
	addons: raw.addons,
	pickupAreas: raw.pickupAreas
}));

export function getTourPackageBySlug(slug: string): TourPackage | undefined {
	const normalized = slug.toLowerCase();
	return tourPackages.find((pkg) => pkg.slug === normalized || pkg.id === normalized);
}

export function getRecommendedTours(currentSlug: string, limit: number = 3): TourPackage[] {
	const normalized = currentSlug.toLowerCase();
	return tourPackages
		.filter((pkg) => pkg.slug !== normalized && pkg.id !== normalized)
		.slice(0, limit);
}
