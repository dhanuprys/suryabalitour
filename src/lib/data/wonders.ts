import manMadeWondersImg from '../assets/images/wonders/man-made-wonders.webp';
import natureLifeWondersImg from '../assets/images/wonders/nature-life-wonders.webp';

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
		image: manMadeWondersImg,
		textOnLeft: true
	},
	{
		id: 'nature-life-wonders',
		tag: '- Works for Natures',
		title: 'Nature Life World Wonders',
		description:
			'Step intothe legacy of human ambition. From timeless monuments to breathtaking landmarks, explore our currated guides',
		buttonText: 'Explore Wonders',
		image: natureLifeWondersImg,
		textOnLeft: false
	}
];
