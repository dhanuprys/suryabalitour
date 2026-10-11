export interface WonderHighlight {
	id: string;
	tag: string;
	title: string;
	description: string;
	buttonText: string;
	image: string;
	bgImage?: string;
	textOnLeft: boolean;
}

export const wonderHighlights: WonderHighlight[] = [
	{
		id: 'man-made-wonders',
		tag: '- Works for Art',
		title: 'Man-made World<br />Wonders',
		description:
			'Step intothe legacy of human ambition. From timeless monuments to breathtaking landmarks, explore our currated guides',
		buttonText: 'Explore Wonders',
		image:
			'https://images.unsplash.com/photo-1565970237868-df39bfc3f80f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		textOnLeft: true
	},
	{
		id: 'nature-life-wonders',
		tag: '- Works for Natures',
		title: 'Nature Life World Wonders',
		description:
			'Step intothe legacy of human ambition. From timeless monuments to breathtaking landmarks, explore our currated guides',
		buttonText: 'Explore Wonders',
		image:
			'https://images.unsplash.com/photo-1557093793-d149a38a1be8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		textOnLeft: false
	}
];
