<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { afterNavigate } from '$app/navigation';
	import { trackPageView } from '#lib/analytics';

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
</svelte:head>

{@render children()}
