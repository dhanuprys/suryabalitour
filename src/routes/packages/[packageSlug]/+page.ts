import { getTourPackageBySlug, getRecommendedTours } from '#lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const tour = getTourPackageBySlug(params.packageSlug);
	if (!tour) {
		error(404, { message: 'Tour package not found' });
	}
	const recommendedTours = getRecommendedTours(params.packageSlug, 3);
	return { tour, recommendedTours };
};
