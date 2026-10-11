export interface GuideCategory {
	id: string;
	label: string;
}

export interface TravelGuide {
	id: string;
	title: string;
	description: string;
	location: string;
	groupType: string;
	image: string;
	category: string;
}

export const guideCategories: GuideCategory[] = [
	{ id: 'all', label: 'All Destinations' },
	{ id: 'culture', label: 'Culture' },
	{ id: 'cityscape', label: 'Cityscape' },
	{ id: 'man-made', label: 'Man-Made' }
];

export const travelGuides: TravelGuide[] = [
	{
		id: '1',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	},
	{
		id: '2',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	},
	{
		id: '3',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	},
	{
		id: '4',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	},
	{
		id: '5',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	},
	{
		id: '6',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	},
	{
		id: '7',
		title: 'The Matternhorn',
		description:
			'Step into the Eternal City, where history, culture and breathtaking architecture meet.',
		location: 'France',
		groupType: 'Groups',
		image:
			'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'culture'
	}
];
