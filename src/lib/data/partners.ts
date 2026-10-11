import GetYourGuideLogo from '#lib/assets/images/partners/getyourguide.webp';
import TripadvisorLogo from '#lib/assets/images/partners/tripadvisor.webp';
import ViatorLogo from '#lib/assets/images/partners/viator.webp';

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
		heightClass: 'h-[1.5rem] md:h-[3rem]'
	},
	{
		id: 'tripadvisor',
		name: 'TripAdvisor',
		alt: 'tripadvisor logo',
		logo: TripadvisorLogo,
		heightClass: 'h-[1.3rem] md:h-[2rem]'
	},
	{
		id: 'viator',
		name: 'Viator',
		alt: 'viator logo',
		logo: ViatorLogo,
		heightClass: 'h-[1.4rem] md:h-[2rem]'
	}
];
