import { tourPackages } from './tours';

export interface DestinationCategory {
	id: string;
	label: string;
}

export interface ExploreDestination {
	id: string;
	slug: string;
	categoryLabel: string;
	title: string;
	description: string;
	image: string;
	category: string;
	priceFrom?: number;
	duration?: string;
}

export const destinationCategories: DestinationCategory[] = [
	{ id: 'all', label: 'All Packages' },
	{ id: 'ubud', label: 'Ubud & Culture' },
	{ id: 'islands', label: 'Nusa Penida & Islands' },
	{ id: 'coastal', label: 'Beaches & Temples' },
	{ id: 'adventure', label: 'Water & Adventure' }
];

interface FeaturedTourConfig {
	slug: string;
	category: 'ubud' | 'islands' | 'coastal' | 'adventure';
	categoryLabel: string;
}

const featuredTourConfigs: FeaturedTourConfig[] = [
	{
		slug: 'ubud-tour-day1',
		category: 'ubud',
		categoryLabel: 'Ubud Adventure'
	},
	{
		slug: 'nusa-penida-west-trip-bali',
		category: 'islands',
		categoryLabel: 'Island Wonder'
	},
	{
		slug: 'jatiluwih-and-tanah-lot-tour',
		category: 'ubud',
		categoryLabel: 'UNESCO Rice Terrace'
	},
	{
		slug: 'kintamani-mount-batur',
		category: 'adventure',
		categoryLabel: 'Volcano & Geopark'
	},
	{
		slug: 'east-trip-nusa-penida',
		category: 'islands',
		categoryLabel: 'Diamond Beach Escape'
	},
	{
		slug: 'bali-beach-tour',
		category: 'coastal',
		categoryLabel: 'Iconic Coastline'
	},
	{
		slug: 'ubud-day-tour-3',
		category: 'ubud',
		categoryLabel: 'Balinese Heritage'
	},
	{
		slug: 'nusa-dua-tour',
		category: 'coastal',
		categoryLabel: 'Watersports & Sunset'
	},
	{
		slug: 'blue-lagoon-day-tour',
		category: 'adventure',
		categoryLabel: 'Coral Reef Snorkeling'
	},
	{
		slug: 'bali-besakih-tour',
		category: 'coastal',
		categoryLabel: 'Sacred Mother Temple'
	},
	{
		slug: 'dolphin-tour',
		category: 'adventure',
		categoryLabel: 'Lovina Sunrise Dolphins'
	},
	{
		slug: 'nusa-lembongan-tour',
		category: 'islands',
		categoryLabel: 'Tropical Haven'
	}
];

const items: ExploreDestination[] = [];
for (const config of featuredTourConfigs) {
	const pkg = tourPackages.find((p) => p.slug === config.slug);
	if (pkg) {
		items.push({
			id: pkg.id,
			slug: pkg.slug,
			categoryLabel: config.categoryLabel,
			title: pkg.title,
			description:
				pkg.tagline ||
				(pkg.overview.length > 140 ? `${pkg.overview.slice(0, 140)}...` : pkg.overview),
			image: pkg.heroImage,
			category: config.category,
			priceFrom: pkg.priceFrom,
			duration: pkg.duration
		});
	}
}

export const exploreDestinations: ExploreDestination[] = items;
