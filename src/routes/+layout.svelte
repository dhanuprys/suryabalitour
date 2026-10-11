<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { afterNavigate } from '$app/navigation';
	import { GA_MEASUREMENT_ID, trackPageView } from '#lib/analytics';

	let { children } = $props();

	// Automatically track pageviews on initial load and client-side route changes
	afterNavigate(() => {
		trackPageView();
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<meta name="theme-color" content="#000000" />
	<meta property="og:site_name" content="Surya Bali Tour" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Google Analytics 4 (GA4) -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false});</script>`}
</svelte:head>

{@render children()}
