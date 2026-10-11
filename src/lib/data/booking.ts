import stepPlanImg from '../assets/images/illustrations/step-01-plan.webp';
import stepChatImg from '../assets/images/illustrations/step-02-chat.webp';
import stepTourImg from '../assets/images/illustrations/step-03-tour.webp';

export interface BookingStep {
	step: string;
	badge: string;
	title: string;
	description: string;
	detail: string;
	image: string;
}

export interface HowToBookData {
	subtitle: string;
	title: string;
	description: string;
	steps: BookingStep[];
	guaranteeTitle: string;
	guaranteeDescription: string;
	whatsappNumber: string;
	whatsappMessage: string;
}

export const howToBookData: HowToBookData = {
	subtitle: '- Simple & Seamless',
	title: 'How to Book Your Tour',
	description:
		'Reserve your private car charter or customized day trip in three easy steps with zero upfront deposit, flexible itineraries, and pay-on-arrival convenience.',
	steps: [
		{
			step: '01',
			badge: 'Step 01 · Planning',
			title: 'Select or Customize Your Route',
			description:
				'Browse our handpicked private tour itineraries across Ubud, Nusa Penida, and Kintamani, or send us your custom wishlist destinations.',
			detail: 'Custom Stops · 10-Hour Private Charters',
			image: stepPlanImg
		},
		{
			step: '02',
			badge: 'Step 02 · Confirmation',
			title: 'Confirm via WhatsApp in Minutes',
			description:
				'Submit your travel date, pickup hotel, and group size. Our local team instantly confirms vehicle and driver availability with zero deposit.',
			detail: 'Zero Deposit · Fast WhatsApp Response',
			image: stepChatImg
		},
		{
			step: '03',
			badge: 'Step 03 · Exploration',
			title: 'Hotel Pickup & Pay Upon Completion',
			description:
				'Your personal English-speaking Balinese driver greets you in a clean, air-conditioned vehicle. Enjoy Bali at your own rhythm and settle payment on the day.',
			detail: 'Door-to-Door Pickup · Cash or Card',
			image: stepTourImg
		}
	],
	guaranteeTitle: '- Zero Deposit & 100% Private Vehicle',
	guaranteeDescription:
		'Every Surya Bali Tour is 100% private for your party—never shared with strangers. Plans changed? Enjoy complimentary rescheduling or cancellation up to 24 hours prior with zero fees.',
	whatsappNumber: '6281234567890',
	whatsappMessage: 'Hi Surya Bali Tour! I would like to inquire about booking a private tour.'
};
