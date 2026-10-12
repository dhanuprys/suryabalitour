import type { TourPackage } from '#lib/data/tours';
import { browser } from '$app/env';

// Google Tag Manager & Google Analytics 4 IDs
export const GTM_ID = 'GTM-NZKPK29S';
export const GA_MEASUREMENT_ID = 'G-2Y5LM54W1V';

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

/**
 * Universal safe helper to push data objects to GTM dataLayer
 */
export function pushDataLayer(data: Record<string, unknown>) {
	if (!browser || typeof window === 'undefined') return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(data);
}

/**
 * Universal safe helper to push events or call gtag.js / GTM dataLayer
 */
export function gtag(...args: unknown[]) {
	if (!browser) return;
	if (typeof window !== 'undefined') {
		window.dataLayer = window.dataLayer || [];
		if (typeof window.gtag === 'function') {
			window.gtag(...args);
		} else if (args[0] === 'event' && typeof args[1] === 'string') {
			const params =
				typeof args[2] === 'object' && args[2] !== null ? (args[2] as Record<string, unknown>) : {};
			window.dataLayer.push({
				event: args[1],
				...params
			});
		} else {
			window.dataLayer.push(args);
		}
	}
}

/**
 * Track SvelteKit Client-Side Page Views (pushes 'page_view' event to GTM)
 */
export function trackPageView(path?: string, title?: string) {
	if (!browser) return;
	const pageLocation = window.location.href;
	const pagePath = path ?? window.location.pathname + window.location.search;
	const pageTitle = title ?? document.title;

	trackEvent('page_view', {
		page_location: pageLocation,
		page_path: pagePath,
		page_title: pageTitle
	});
}

/**
 * Generic Event Tracker for Google Tag Manager
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
	if (!browser) return;
	pushDataLayer({
		event: eventName,
		...params
	});
	if (typeof window.gtag === 'function') {
		window.gtag('event', eventName, params);
	}
}

/**
 * Track Tour Package View (GA4 view_item / GTM event)
 */
export function trackTourView(tour: TourPackage) {
	if (!browser) return;
	trackEvent('view_item', {
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
 * Track Tour Catalog View or Filter (GA4 view_item_list / GTM event)
 */
export function trackTourList(categoryName: string = 'All Tours', itemCount: number = 0) {
	if (!browser) return;
	trackEvent('view_item_list', {
		item_list_name: categoryName,
		items_count: itemCount
	});
}

/**
 * Track Search on Packages Catalog (GA4 search / GTM event)
 */
export function trackSearch(searchTerm: string, resultsCount: number) {
	if (!browser || !searchTerm.trim()) return;
	trackEvent('search', {
		search_term: searchTerm.trim(),
		results_count: resultsCount
	});
}

/**
 * Track Tour Booking Inquiry Form Submission (GA4 generate_lead / GTM event)
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
	trackEvent('generate_lead', {
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
 * Track WhatsApp Conversion Clicks (GA4 contact / GTM event)
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
	trackEvent('contact', {
		method: 'WhatsApp',
		contact_source: sourceLocation,
		tour_name: details.tourTitle ?? details.packageTitle ?? 'General Inquiry',
		estimated_value: details.estimatedValue ?? 0,
		number_of_people: details.numberOfPeople ?? 1
	});
}

/**
 * Track Addon Option Selection (GA4 customize_package / GTM event)
 */
export function trackAddonToggle(
	addonName: string,
	price: number,
	selected: boolean,
	tourTitle: string
) {
	if (!browser) return;
	trackEvent('customize_package', {
		addon_name: addonName,
		addon_price: price,
		action: selected ? 'add' : 'remove',
		tour_name: tourTitle
	});
}
