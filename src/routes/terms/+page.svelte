<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';

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
</script>

<svelte:head>
	<title>Terms & Conditions | Surya Bali Tour</title>
	<meta
		name="description"
		content="Read the terms of service, cancellation policies, and booking guidelines for Surya Bali Tour private packages and excursions."
	/>
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section
		class="relative flex h-[60vh] min-h-[460px] w-full items-center justify-center bg-black px-8 md:px-28"
	>
		<img
			alt="Terms and Policies Banner"
			class="absolute top-0 left-0 h-full w-full object-cover opacity-30"
			src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

		<div class="relative z-10 mx-auto max-w-4xl space-y-4 pt-16 text-center">
			<span
				class="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md"
			>
				- Transparency & Trust
			</span>
			<h1 class="text-6xl font-bold tracking-tight md:text-7xl">Terms of Service</h1>
			<p class="mx-auto max-w-2xl text-lg font-light text-white/80">
				Clear, honest policies designed to ensure safety, mutual respect, and unforgettable journeys across Bali.
			</p>
			<p class="text-xs text-white/50 tracking-wider uppercase font-mono">
				Last updated: October 11, 2026
			</p>
		</div>
	</section>

	<!-- Editorial Terms Layout (Clean Typography & Open Lines) -->
	<section class="px-8 py-20 md:px-28">
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-16">
			<!-- Left Column: Minimalist Sticky Index -->
			<aside class="lg:col-span-1">
				<div class="sticky top-28 space-y-6">
					<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
						- Index
					</p>
					<nav class="space-y-3">
						{#each sections as sec (sec.id)}
							<a
								href="#{sec.id}"
								class="group flex items-baseline text-xs font-medium text-white/60 transition-colors hover:text-white"
							>
								<span class="font-mono text-white/30 mr-2 shrink-0">{sec.number}</span>
								<span class="truncate">{sec.title}</span>
							</a>
						{/each}
					</nav>

					<div class="border-t border-white/10 pt-6 text-xs text-white/50 space-y-2">
						<p>Questions?</p>
						<a
							href="mailto:infosuryabalitour@gmail.com"
							class="block text-white hover:underline transition-colors font-mono"
						>
							infosuryabalitour@gmail.com
						</a>
					</div>
				</div>
			</aside>

			<!-- Right Column: Editorial Sections -->
			<div class="lg:col-span-3 space-y-16">
				{#each sections as sec (sec.id)}
					<article
						id={sec.id}
						class="scroll-mt-32 space-y-6 border-t border-white/15 pt-10"
					>
						<div class="flex items-baseline gap-4">
							<span class="font-mono text-xs font-bold text-white/40 tracking-widest">{sec.number}</span>
							<h2 class="text-2xl md:text-3xl font-semibold tracking-tight text-white">
								{sec.title}
							</h2>
						</div>

						<div class="space-y-4 pl-0 md:pl-7">
							{#each sec.content as paragraph, pIdx (pIdx)}
								<p class="text-base font-light leading-relaxed text-white/80">
									{paragraph}
								</p>
							{/each}
						</div>
					</article>
				{/each}

				<!-- Support Row -->
				<div
					class="border-t border-white/20 pt-16 flex flex-col md:flex-row md:items-center justify-between gap-8"
				>
					<div class="space-y-1">
						<h3 class="text-2xl font-bold text-white">Questions about these terms?</h3>
						<p class="text-sm font-light text-white/70">
							Email <a href="mailto:infosuryabalitour@gmail.com" class="text-white underline underline-offset-4">infosuryabalitour@gmail.com</a> or message us directly on WhatsApp.
						</p>
					</div>
					<a
						href="/packages"
						class="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90 shrink-0"
					>
						Explore Tours
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<FooterBlock />
