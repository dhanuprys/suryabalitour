import { tourPackages } from './tours';

export interface SpotlightSlide {
	id: string;
	tourSlug: string;
	subtitle: string;
	title: string;
	description: string;
	buttonText: string;
	image: string;
	bgImage: string;
}

const spotlightConfigs = [
	{
		slug: 'kintamani-mount-batur',
		subtitle: '- Monthly Spotlight',
		title: 'Sunrise Over Mount Batur',
		description:
			'Witness dawn break across the volcanic caldera in a rugged 4WD Jeep, followed by natural hot springs overlooking majestic Lake Batur.',
		buttonText: 'Discover Tour'
	},
	{
		slug: 'nusa-penida-tour',
		subtitle: '- Monthly Spotlight',
		title: 'Cliffs of Nusa Penida',
		description:
			'Stand above the turquoise waters of Kelingking Beach and snorkel with gentle manta rays in secluded crystal lagoons.',
		buttonText: 'Discover Tour'
	},
	{
		slug: 'ubud-tour-day1',
		subtitle: '- Monthly Spotlight',
		title: 'Ubud River Rafting & Jungle Swing',
		description:
			'Navigate lush rainforest gorges, cascade down pristine river rapids, and fly above tropical valleys on the famous Bali Swing.',
		buttonText: 'Discover Tour'
	},
	{
		slug: 'jatiluwih-and-tanah-lot-tour',
		subtitle: '- Monthly Spotlight',
		title: 'Jatiluwih & Sunset Tanah Lot',
		description:
			'Wander through UNESCO-protected stepped emerald hills in Tabanan and catch golden hour at the offshore ocean shrine of Tanah Lot.',
		buttonText: 'Discover Tour'
	},
	{
		slug: 'dolphin-tour',
		subtitle: '- Monthly Spotlight',
		title: 'Lovina Sunrise Dolphins & Waterfalls',
		description:
			'Cruise alongside playful wild spinner dolphins in a traditional outrigger boat at sunrise before exploring North Bali’s jungle waterfalls.',
		buttonText: 'Discover Tour'
	}
];

export const spotlightSlides: SpotlightSlide[] = spotlightConfigs
	.map((config) => {
		const pkg = tourPackages.find((p) => p.slug === config.slug);
		if (!pkg) return null;

		// Load photo directly from the tour package gallery
		const photoUrl = pkg.gallery[0]?.url || pkg.heroImage;

		return {
			id: pkg.id,
			tourSlug: pkg.slug,
			subtitle: config.subtitle,
			title: config.title,
			description: config.description,
			buttonText: config.buttonText,
			image: photoUrl,
			bgImage: photoUrl
		};
	})
	.filter((slide): slide is SpotlightSlide => slide !== null);

export const monthlySpotlight = spotlightSlides[0];
