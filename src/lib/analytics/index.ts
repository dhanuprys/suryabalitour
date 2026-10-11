import type { TourPackage } from '#lib/data/tours';
import { browser } from '$app/env';

// Default Google Analytics 4 Measurement ID (Can be replaced with production ID or env variable)
export const GA_MEASUREMENT_ID = 'G-2Y5LM54W1V';

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

/**
 * Universal safe helper to push events to Google Analytics 4 (gtag.js)
 */
export function gtag(...args: unknown[]) {
	if (!browser) return;
	if (typeof window !== 'undefined') {
		window.dataLayer = window.dataLayer || [];
		if (typeof window.gtag === 'function') {
			window.gtag(...args);
		} else {
			window.dataLayer.push(args);
		}
	}
}

/**
 * Track SvelteKit Client-Side Page Views
 */
export function trackPageView(path?: string, title?: string) {
	if (!browser) return;
	const pageLocation = window.location.href;
	const pagePath = path ?? window.location.pathname + window.location.search;
	const pageTitle = title ?? document.title;

	gtag('event', 'page_view', {
		page_location: pageLocation,
		page_path: pagePath,
		page_title: pageTitle
	});
}

/**
 * Generic GA4 Event Tracker
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
	if (!browser) return;
	gtag('event', eventName, params);
}

/**
 * Track Tour Package View (GA4 view_item)
 */
export function trackTourView(tour: TourPackage) {
	if (!browser) return;
	gtag('event', 'view_item', {
		currency: tour.currency,
		value: tour.priceFrom,
		items: [
			{
				item_id: tour.id,
				item_name: tour.title,
				item_category: tour.tourType,
				price: tour.priceFrom,
				quantity: 1
			}
		]
	});
}

/**
 * Track Tour Catalog View or Filter (GA4 view_item_list)
 */
export function trackTourList(categoryName: string = 'All Tours', itemCount: number = 0) {
	if (!browser) return;
	gtag('event', 'view_item_list', {
		item_list_name: categoryName,
		items_count: itemCount
	});
}

/**
 * Track Search on Packages Catalog (GA4 search)
 */
export function trackSearch(searchTerm: string, resultsCount: number) {
	if (!browser || !searchTerm.trim()) return;
	gtag('event', 'search', {
		search_term: searchTerm.trim(),
		results_count: resultsCount
	});
}

/**
 * Track Tour Booking Inquiry Form Submission (GA4 generate_lead)
 */
export function trackTourInquiry(data: {
	packageId: string;
	packageTitle: string;
	tourType: string;
	totalPrice: number;
	currency: string;
	numberOfPeople: number;
	tourDate: string;
	addonsCount: number;
}) {
	if (!browser) return;
	gtag('event', 'generate_lead', {
		currency: data.currency,
		value: data.totalPrice,
		lead_type: 'tour_booking_request',
		tour_id: data.packageId,
		tour_name: data.packageTitle,
		tour_type: data.tourType,
		number_of_people: data.numberOfPeople,
		tour_date: data.tourDate,
		addons_count: data.addonsCount
	});
}

/**
 * Track WhatsApp Conversion Clicks (GA4 contact)
 */
export function trackWhatsAppClick(
	sourceLocation: string,
	details: {
		tourTitle?: string;
		packageTitle?: string;
		estimatedValue?: number;
		numberOfPeople?: number;
	} = {}
) {
	if (!browser) return;
	gtag('event', 'contact', {
		method: 'WhatsApp',
		contact_source: sourceLocation,
		tour_name: details.tourTitle ?? details.packageTitle ?? 'General Inquiry',
		estimated_value: details.estimatedValue ?? 0,
		number_of_people: details.numberOfPeople ?? 1
	});
}

/**
 * Track Addon Option Selection (GA4 customize_package)
 */
export function trackAddonToggle(
	addonName: string,
	price: number,
	selected: boolean,
	tourTitle: string
) {
	if (!browser) return;
	gtag('event', 'customize_package', {
		addon_name: addonName,
		addon_price: price,
		action: selected ? 'add' : 'remove',
		tour_name: tourTitle
	});
}
