import GetYourGuideLogo from '#lib/assets/getyourguide.svg';
import TripadvisorLogo from '#lib/assets/tripadvisor.png';
import ViatorLogo from '#lib/assets/viator.png';

export interface MediaPartner {
	id: string;
	name: string;
	alt: string;
	logo: string;
	heightClass: string;
}

export const mediaPartners: MediaPartner[] = [
	{
		id: 'getyourguide',
		name: 'GetYourGuide',
		alt: 'get your guide',
		logo: GetYourGuideLogo,
		heightClass: 'h-[3.5rem]'
	},
	{
		id: 'tripadvisor',
		name: 'TripAdvisor',
		alt: 'tripadvisor logo',
		logo: TripadvisorLogo,
		heightClass: 'h-[2.5rem]'
	},
	{
		id: 'viator',
		name: 'Viator',
		alt: 'viator logo',
		logo: ViatorLogo,
		heightClass: 'h-[2.5rem]'
	}
];
