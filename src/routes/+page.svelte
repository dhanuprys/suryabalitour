<script lang="ts">
	import {
		HeaderBlock,
		HeroBlock,
		ExploreDestinationsBlock,
		WondersSectionBlock,
		CuratedGuidesBlock,
		SpotlightBlock,
		HowToBookBlock,
		FooterBlock
	} from '#lib/components/blocks';
	import { generateAgencySchema } from '#lib/data/seo';

	const agencySchema = generateAgencySchema();
</script>

<svelte:head>
	<title>Surya Bali Tour | Authentic Private Tours & Personal Drivers in Bali</title>
	<meta
		name="description"
		content="Experience Bali with native Balinese guides. Private 10-hour car charters from $55/day, customized day trips, waterfall adventures, and temple excursions. Pay cash to driver, free cancellation."
	/>
	<link rel="canonical" href="https://suryabalitour.com/" />
	<meta
		property="og:title"
		content="Surya Bali Tour | Authentic Private Tours & Personal Drivers in Bali"
	/>
	<meta
		property="og:description"
		content="Discover the sacred beauty and cultural soul of Bali with dedicated native Balinese drivers. Private car charters, flexible itineraries, and zero upfront deposits."
	/>
	<meta property="og:url" content="https://suryabalitour.com/" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/spsms1n0/image/upload/v1791717377/thumbnail-suryabalitour.png"
	/>
	<meta
		name="twitter:title"
		content="Surya Bali Tour | Authentic Private Tours & Personal Drivers in Bali"
	/>
	<meta
		name="twitter:description"
		content="Discover Bali with native Balinese drivers. Private 10-hour car charters from $55/day, flexible day tours, and pay-on-arrival terms."
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/spsms1n0/image/upload/v1791717377/thumbnail-suryabalitour.png"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(agencySchema)}</script>`}
</svelte:head>

<HeaderBlock />

<main class="overflow-x-hidden">
	<HeroBlock />
	<ExploreDestinationsBlock />
	<WondersSectionBlock />
	<CuratedGuidesBlock />
	<SpotlightBlock />
	<HowToBookBlock />
	<div class="pt-16 sm:pt-24"></div>
</main>

<FooterBlock />
