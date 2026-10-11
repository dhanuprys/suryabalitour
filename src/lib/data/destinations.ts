export interface DestinationCategory {
	id: string;
	label: string;
}

export interface ExploreDestination {
	id: string;
	categoryLabel: string;
	title: string;
	description: string;
	image: string;
	category: string;
}

export const destinationCategories: DestinationCategory[] = [
	{ id: 'all', label: 'All Destinations' },
	{ id: 'nature', label: 'Nature' },
	{ id: 'man-made', label: 'Man-Made' }
];

export const exploreDestinations: ExploreDestination[] = [
	{
		id: '1',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	},
	{
		id: '2',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	},
	{
		id: '3',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	},
	{
		id: '4',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	},
	{
		id: '5',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	},
	{
		id: '6',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	},
	{
		id: '7',
		categoryLabel: 'Natural Wonder',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'nature'
	}
];
