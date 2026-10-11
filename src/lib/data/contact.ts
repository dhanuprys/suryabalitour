/**
 * Centralized Contact & Booking Phone Configuration
 * Single source of truth for site domain, URL, phone numbers, and direct WhatsApp links.
 */

// Canonical Site Domain & URL
export const SITE_DOMAIN = 'suryabalitour.id';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_NAME = 'Surya Bali Tour';

// Digits-only for WhatsApp URLs and tel links (no spaces, dashes, or +)
export const SITE_PHONE_RAW = '6285935080303';

// Formatted display representations
export const SITE_PHONE_DISPLAY = '+62 859-3508-0303';
export const SITE_PHONE_CLEAN_DISPLAY = '62 859-3508-0303';

// Canonical phone for SEO schema & metadata
export const SITE_PHONE = SITE_PHONE_DISPLAY;

// Official agency email
export const SITE_EMAIL = 'infosuryabalitour@gmail.com';

// Direct WhatsApp URL
export const WHATSAPP_DIRECT_URL = `https://wa.me/${SITE_PHONE_RAW}`;

// Default WhatsApp concierge message
export const DEFAULT_WHATSAPP_MESSAGE =
	'Hi Surya Bali Tour! I would like to inquire about booking a private tour.';

/**
 * Builds pre-filled WhatsApp click-to-chat URL with optional custom text
 */
export function getWhatsAppUrl(message?: string): string {
	const text = message || DEFAULT_WHATSAPP_MESSAGE;
	return `https://wa.me/${SITE_PHONE_RAW}?text=${encodeURIComponent(text)}`;
}
