export interface MonthlySpotlight {
	id: string;
	subtitle: string;
	title: string;
	description: string;
	buttonText: string;
	image: string;
	bgImage: string;
}

export const monthlySpotlight: MonthlySpotlight = {
	id: 'colosseum-spotlight',
	subtitle: '- Monthly Spotlight',
	title: 'The Great Colloseum',
	description:
		'Step into the legacy of human ambition. From timeless monuments to breathtaking landmarks, explore our currated guides',
	buttonText: 'Discover Colloseum',
	image:
		'https://plus.unsplash.com/premium_photo-1678303396234-4180231353df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	bgImage:
		'https://plus.unsplash.com/premium_photo-1678303396234-4180231353df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};
