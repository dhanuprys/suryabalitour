import { getTourPackageBySlug, getRecommendedTours, tourPackages } from '#lib/data';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

/**
 * Generate all static route entries at build time for prerendering
 */
export const entries: EntryGenerator = () => {
	return tourPackages.map((pkg) => ({
		packageSlug: pkg.slug
	}));
};

export const load: PageLoad = ({ params }) => {
	const tour = getTourPackageBySlug(params.packageSlug);
	if (!tour) {
		error(404, { message: 'Tour package not found' });
	}
	const recommendedTours = getRecommendedTours(params.packageSlug, 3);
	return { tour, recommendedTours };
};
