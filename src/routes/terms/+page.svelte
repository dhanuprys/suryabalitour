<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';
	import { generateFaqSchema, generateBreadcrumbSchema, SITE_URL, WHATSAPP_DIRECT_URL, SITE_EMAIL } from '#lib/data/seo';

	const sections = [
		{
			id: 'booking-confirmation',
			number: '01',
			title: 'Booking and confirmation',
			content: [
				'Bookings can be made through the form on any tour page or directly over WhatsApp.',
				'A booking is confirmed once we acknowledge it by WhatsApp or email.',
				'We recommend booking at least 24 hours ahead so we can guarantee a vehicle and driver.'
			]
		},
		{
			id: 'pricing-payment',
			number: '02',
			title: 'Pricing and payment',
			content: [
				'Prices shown are per car unless the tour states otherwise, and cover the driver, fuel, and parking.',
				'Entrance fees and activities are excluded unless listed as included.',
				'Payment is normally cash to the driver at the end of the tour. For large groups we may ask for a deposit, agreed in advance.'
			]
		},
		{
			id: 'cancellation',
			number: '03',
			title: 'Cancellation',
			content: [
				'More than 24 hours before the tour: free cancellation, no fee.',
				'Less than 12 hours before the tour: a fee of up to 50% may apply.',
				'No show on the day: the full amount may be charged.'
			]
		},
		{
			id: 'itinerary-changes',
			number: '04',
			title: 'Changes to the itinerary',
			content: [
				'We may adjust the route for weather, traffic, road closures, or safety. Where that happens we will offer the closest equivalent stop.',
				'You are also free to request changes on the day, subject to time and distance, just discuss it with your driver.'
			]
		},
		{
			id: 'insurance-liability',
			number: '05',
			title: 'Insurance and liability',
			content: [
				'Our vehicles are licensed and insured for passenger transport.',
				'We are not liable for personal injury, loss, or damage to belongings arising from activities operated by third parties such as rafting, ATV, or diving providers.',
				'We strongly recommend that every guest holds their own travel insurance.'
			]
		},
		{
			id: 'guest-responsibility',
			number: '06',
			title: 'Guest responsibility',
			content: [
				'Guests are responsible for their own belongings and for following safety instructions given by the driver or by guides at each attraction.',
				'Please tell us in advance about mobility needs, child seats, or medical considerations so we can prepare.'
			]
		}
	];

	const faqSchema = generateFaqSchema(
		sections.map((s) => ({
			question: s.title,
			answer: s.content.join(' ')
		}))
	);

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', url: '/' },
		{ name: 'Terms of Service', url: '/terms' }
	]);
</script>

<svelte:head>
	<title>Terms of Service & Policies | Surya Bali Tour</title>
	<meta
		name="description"
		content="Transparent booking, pricing, and cancellation policies for Surya Bali Tour. 100% free cancellation up to 24h, zero deposits, cash payment to driver on the day."
	/>
	<link rel="canonical" href="{SITE_URL}/terms" />
	<meta property="og:title" content="Terms of Service & Policies | Surya Bali Tour" />
	<meta
		property="og:description"
		content="Transparent booking, pricing, and cancellation policies for Surya Bali Tour. 100% free cancellation up to 24h, zero deposits, cash payment to driver on the day."
	/>
	<meta property="og:url" content="{SITE_URL}/terms" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/spsms1n0/image/upload/v1791717377/thumbnail-suryabalitour.png"
	/>
	<meta name="twitter:title" content="Terms of Service & Policies | Surya Bali Tour" />
	<meta
		name="twitter:description"
		content="Transparent booking, pricing, and cancellation policies for Surya Bali Tour. Free 24h cancellation, cash on arrival."
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/spsms1n0/image/upload/v1791717377/thumbnail-suryabalitour.png"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section
		class="relative flex h-[55vh] min-h-[420px] w-full items-center justify-center bg-black px-6 sm:h-[60vh] sm:min-h-[460px] sm:px-12 md:px-16 lg:px-24"
	>
		<img
			alt="Terms and Policies Banner"
			class="absolute inset-0 h-full w-full object-cover opacity-30"
			src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

		<div class="relative z-10 mx-auto max-w-4xl space-y-4 pt-16 text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
				Terms of Service
			</h1>
			<p class="mx-auto max-w-2xl text-base leading-relaxed font-light text-white/80 sm:text-lg">
				Clear, honest policies designed to ensure safety, mutual respect, and unforgettable journeys
				across Bali.
			</p>
			<p class="font-mono text-xs tracking-wider text-white/50 uppercase">
				Last updated: October 11, 2026
			</p>
		</div>
	</section>

	<!-- Editorial Terms Layout (Clean Typography & Open Lines) -->
	<section class="px-6 py-16 sm:px-12 sm:py-20 md:px-16 lg:px-24">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-16">
			<!-- Left Column: Minimalist Sticky Index -->
			<aside class="lg:col-span-1">
				<div class="space-y-6 lg:sticky lg:top-28">
					<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">- Index</p>
					<nav class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
						{#each sections as sec (sec.id)}
							<a
								href="#{sec.id}"
								class="group flex items-baseline text-xs font-medium text-white/70 transition-colors hover:text-white"
							>
								<span class="mr-2 shrink-0 font-mono text-white/30">{sec.number}</span>
								<span class="truncate">{sec.title}</span>
							</a>
						{/each}
					</nav>

					<div class="space-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
						<p>Questions?</p>
						<a
							href="mailto:infosuryabalitour@gmail.com"
							class="block font-mono break-all text-white transition-colors hover:underline"
						>
							infosuryabalitour@gmail.com
						</a>
					</div>
				</div>
			</aside>

			<!-- Right Column: Editorial Sections -->
			<div class="space-y-12 sm:space-y-16 lg:col-span-3">
				{#each sections as sec (sec.id)}
					<article
						id={sec.id}
						class="scroll-mt-32 space-y-5 border-t border-white/15 pt-8 sm:pt-10"
					>
						<div class="flex items-baseline gap-3 sm:gap-4">
							<span class="font-mono text-xs font-bold tracking-widest text-white/40"
								>{sec.number}</span
							>
							<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
								{sec.title}
							</h2>
						</div>

						<div class="space-y-3 pl-0 sm:space-y-4 sm:pl-7">
							{#each sec.content as paragraph, pIdx (pIdx)}
								<p class="text-sm leading-relaxed font-light text-white/80 sm:text-base">
									{paragraph}
								</p>
							{/each}
						</div>
					</article>
				{/each}

				<!-- Support Row -->
				<div
					class="flex flex-col justify-between gap-6 border-t border-white/20 pt-12 sm:flex-row sm:items-center sm:gap-8 sm:pt-16"
				>
					<div class="space-y-1">
						<h3 class="text-xl font-bold text-white sm:text-2xl">Questions about these terms?</h3>
						<p class="text-xs font-light text-white/70 sm:text-sm">
							Email <a
								href="mailto:{SITE_EMAIL}"
								class="break-all text-white underline underline-offset-4"
								>{SITE_EMAIL}</a
							> or <a
								href={WHATSAPP_DIRECT_URL}
								target="_blank"
								rel="noopener noreferrer"
								class="text-white underline underline-offset-4"
								>message us directly on WhatsApp</a
							>.
						</p>
					</div>
					<a
						href="/packages"
						class="inline-block shrink-0 rounded-xl bg-white px-6 py-3.5 text-center text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm"
					>
						Explore Tours
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<FooterBlock />
