import { tourPackages } from './tours';

export interface GuideCategory {
	id: string;
	label: string;
}

export interface TravelGuide {
	id: string;
	tourSlug: string;
	title: string;
	caption: string;
	description: string;
	location: string;
	groupType: string;
	image: string;
	category: string;
	priceFrom?: number;
	duration?: string;
}

function getThematicCategory(slug: string): string {
	if (slug.includes('nusa') || slug.includes('lembongan')) return 'islands';
	if (
		slug.includes('atv') ||
		slug.includes('rafting') ||
		slug.includes('tubing') ||
		slug.includes('boat') ||
		slug.includes('jet-ski') ||
		slug.includes('lagoon') ||
		slug.includes('snork') ||
		slug.includes('beach') ||
		slug.includes('benoa')
	) {
		return 'adventure';
	}
	if (slug.includes('batur') || slug.includes('kintamani') || slug.includes('dolphin')) {
		return 'nature';
	}
	return 'culture';
}

function getTourLocation(slug: string): string {
	if (slug.includes('nusa-penida') || slug.includes('lembongan')) return 'Nusa Islands';
	if (slug.includes('ubud')) return 'Ubud, Bali';
	if (slug.includes('kintamani') || slug.includes('batur')) return 'Kintamani, Bali';
	if (slug.includes('dolphin')) return 'Lovina, North Bali';
	if (slug.includes('nusa-dua') || slug.includes('benoa') || slug.includes('beach'))
		return 'South Bali';
	if (slug.includes('jatiluwih') || slug.includes('tanah-lot')) return 'Tabanan, Bali';
	if (slug.includes('besakih') || slug.includes('east-bali') || slug.includes('blue-lagoon'))
		return 'East Bali';
	return 'Bali, Indonesia';
}

function shortenTourTitle(title: string): string {
	const t = title
		.replace(/^Bali\s+/i, '')
		.replace(/\s*Package.*$/i, '')
		.replace(/\s*Include.*$/i, '')
		.replace(/\s*Free Lunch.*$/i, '')
		.replace(/\s*Water Sport.*$/i, ' Watersport')
		.replace(/\s*and Turtle Conservation.*$/i, '')
		.replace(/\s*Sunset Tour.*$/i, '')
		.replace(/\s+Tour\s*(\d*)$/i, ' $1')
		.replace(/\s+Trip.*$/i, ' Trip')
		.trim();
	if (t.toLowerCase().includes('jatiluwih')) return 'Jatiluwih & Tanah Lot';
	if (t.toLowerCase().includes('atv') || t.toLowerCase().includes('quad bike'))
		return 'Ubud ATV Quad Bike';
	if (t.toLowerCase().includes('rafting')) return 'Ayung River Rafting';
	if (t.toLowerCase().includes('batur')) return 'Mount Batur Volcano';
	if (t.toLowerCase().includes('lagoon')) return 'Blue Lagoon Snorkeling';
	if (t.toLowerCase().includes('dolphin')) return 'Lovina Dolphin Tour';
	if (t.toLowerCase().includes('snorkling')) return 'Manta Bay Snorkeling';
	return t;
}

// Curate distinct gallery photos from across tour packages
const allMoments: TravelGuide[] = [];

// Interleave photos across diverse tour packages for maximum variety
const tourPool = tourPackages.filter((pkg) => pkg.gallery && pkg.gallery.length > 0);

// Round-robin selection: take photo 0 from all tours, then photo 1, ensuring zero adjacent repeats
const maxPhotosPerTour = 2;
for (let photoIndex = 0; photoIndex < maxPhotosPerTour; photoIndex++) {
	for (const pkg of tourPool) {
		const photo = pkg.gallery[photoIndex];
		if (photo && photo.url) {
			const cleanTourName = shortenTourTitle(pkg.title);
			const cleanCaption =
				photo.caption &&
				!photo.caption.toLowerCase().includes('photo') &&
				!photo.caption.toLowerCase().includes('highlight')
					? photo.caption
					: pkg.whatTheyWillSee[photoIndex]?.title || cleanTourName;

			allMoments.push({
				id: `${pkg.slug}-photo-${photoIndex + 1}`,
				tourSlug: pkg.slug,
				title: pkg.title,
				caption: cleanCaption,
				description:
					pkg.tagline ||
					(pkg.overview.length > 120 ? `${pkg.overview.slice(0, 120)}...` : pkg.overview),
				location: getTourLocation(pkg.slug),
				groupType: pkg.tourType || 'Private Tour',
				image: photo.url,
				category: getThematicCategory(pkg.slug),
				priceFrom: pkg.priceFrom,
				duration: pkg.duration
			});
		}
	}
}

// Pseudo-random deterministic shuffle to mix regions while avoiding same tour consecutively
const shuffledMoments: TravelGuide[] = [];
const tempPool = [...allMoments];

// Seeded deterministic interleave
let seed = 42;
function pseudoRandom(): number {
	seed = (seed * 9301 + 49297) % 233280;
	return seed / 233280;
}

while (tempPool.length > 0) {
	const lastTour =
		shuffledMoments.length > 0 ? shuffledMoments[shuffledMoments.length - 1].tourSlug : null;
	// Prefer a moment from a different tour than the last selected
	const diffTourIndices = tempPool
		.map((item, idx) => (item.tourSlug !== lastTour ? idx : -1))
		.filter((idx) => idx !== -1);

	const pickFromIndices =
		diffTourIndices.length > 0 ? diffTourIndices : tempPool.map((_, idx) => idx);
	const randomIdx = pickFromIndices[Math.floor(pseudoRandom() * pickFromIndices.length)];
	shuffledMoments.push(tempPool.splice(randomIdx, 1)[0]);
}

// Take top 20 diverse photo moments
export const travelGuides: TravelGuide[] = shuffledMoments.slice(0, 20);

// Curated 5 thematic filter categories
export const guideCategories: GuideCategory[] = [
	{ id: 'all', label: 'All Photos' },
	{ id: 'culture', label: 'Culture & Ubud' },
	{ id: 'islands', label: 'Nusa Islands' },
	{ id: 'nature', label: 'Volcano & Nature' },
	{ id: 'adventure', label: 'Water & Adventure' }
];
