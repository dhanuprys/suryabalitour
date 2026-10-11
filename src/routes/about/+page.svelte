<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';
	import { mediaPartners } from '#lib/data';
	import { generateBreadcrumbSchema, SITE_URL } from '#lib/data/seo';

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' }
	]);
</script>

<svelte:head>
	<title>About Surya Bali Tour | Native Balinese Guides & Heritage</title>
	<meta
		name="description"
		content="Meet the native Balinese team behind Surya Bali Tour. Private drivers, respectful cultural journeys, transparent pricing, and personalized island hospitality."
	/>
	<link rel="canonical" href="{SITE_URL}/about" />
	<meta property="og:title" content="About Surya Bali Tour | Native Balinese Guides & Heritage" />
	<meta
		property="og:description"
		content="Meet the native Balinese team behind Surya Bali Tour. Private drivers, respectful cultural journeys, transparent pricing, and personalized island hospitality."
	/>
	<meta property="og:url" content="{SITE_URL}/about" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
	/>
	<meta name="twitter:title" content="About Surya Bali Tour | Native Balinese Guides & Heritage" />
	<meta
		name="twitter:description"
		content="Meet the native Balinese team behind Surya Bali Tour. Private drivers, respectful cultural journeys, transparent pricing."
	/>
	<meta
		name="twitter:image"
		content="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section
		class="relative flex min-h-[460px] h-[60vh] sm:h-[70vh] sm:min-h-[520px] w-full items-center justify-center bg-black px-6 sm:px-12 md:px-16 lg:px-24"
	>
		<img
			alt="About Surya Bali Tour"
			class="absolute inset-0 h-full w-full object-cover opacity-35"
			src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

		<div class="relative z-10 mx-auto max-w-4xl space-y-4 sm:space-y-6 pt-16 text-center">
			<span
				class="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md"
			>
				- Island of Gods & Warmth
			</span>
			<h1 class="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
				Our Story
			</h1>
			<p class="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-light text-white/80 leading-relaxed">
				Born in Bali, guided by locals. We craft genuine private journeys that celebrate the
				timeless culture, pristine wonders, and sacred spirit of our homeland.
			</p>
		</div>
	</section>

	<!-- Editorial Narrative Section (Spotlight style) -->
	<section
		class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24"
	>
		<div class="lg:col-span-5 space-y-5">
			<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">- Who We Are</p>
			<h2 class="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
				Crafting Unforgettable Memories
			</h2>
			<p class="text-sm font-light leading-relaxed text-white/80 sm:text-base">
				Surya Bali Tour was established by native Balinese guides with a singular dream: to share
				the true essence of Bali beyond the crowded tourist trails. We believe that travel is not
				just about ticking off sightseeing spots, but about forming deep, memorable connections with
				local people, sacred heritage, and breathtaking natural wonders.
			</p>
			<p class="text-sm font-light leading-relaxed text-white/80 sm:text-base">
				Every itinerary we design is anchored in the Balinese principle of <em
					class="font-medium text-white not-italic">Tri Hita Karana</em
				>—living in harmony with the divine, with our fellow community, and with mother nature. When
				you travel with us, you are not just a tourist; you are treated as cherished family.
			</p>
			<div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
				<a
					href="/packages"
					class="rounded-xl bg-white px-6 py-3.5 text-center text-xs sm:text-sm font-semibold text-black transition-all hover:bg-white/90"
				>
					Explore Our Tours
				</a>
				<a
					href="/terms"
					class="text-center text-xs sm:text-sm font-medium text-white/70 hover:text-white underline underline-offset-4 transition-colors"
				>
					Read Booking Terms
				</a>
			</div>
		</div>

		<div class="lg:col-span-7 aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden relative shadow-xl">
			<img
				alt="Traditional Balinese Temple Atmosphere"
				src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1400&auto=format&fit=crop"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
			<div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-1">
				<p class="text-xs tracking-widest uppercase font-mono text-white/60">Tradition & Hospitality</p>
				<h3 class="text-xl sm:text-2xl font-semibold">Rooted in Heritage</h3>
			</div>
		</div>
	</section>

	<!-- Key Pillars (Open Minimalist Typography) -->
	<section
		id="pillars"
		class="border-t border-white/10 px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24 space-y-12 sm:space-y-16"
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-end">
			<div>
				<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">- What Defines Us</p>
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mt-2">
					The Surya Bali Promise
				</h2>
			</div>
			<p class="text-sm sm:text-base font-light text-white/70 max-w-lg leading-relaxed">
				We obsess over the details so you can immerse yourself completely in the magic of your Bali
				vacation without stress or uncertainty.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
			<!-- Pillar 01 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">01</span>
				<h3 class="text-xl sm:text-2xl font-semibold text-white">Native Local Guides</h3>
				<p class="text-xs sm:text-sm font-light leading-relaxed text-white/70">
					Our drivers and guides were born and raised in Bali. They navigate backroads smoothly and
					share captivating folklore, customs, and hidden gems.
				</p>
			</div>

			<!-- Pillar 02 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">02</span>
				<h3 class="text-xl sm:text-2xl font-semibold text-white">100% Private Comfort</h3>
				<p class="text-xs sm:text-sm font-light leading-relaxed text-white/70">
					Never get crammed into a commercial tour bus. Enjoy your own private, air-conditioned
					vehicle with flexible departure times and pacing.
				</p>
			</div>

			<!-- Pillar 03 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">03</span>
				<h3 class="text-xl sm:text-2xl font-semibold text-white">Total Transparency</h3>
				<p class="text-xs sm:text-sm font-light leading-relaxed text-white/70">
					Honest upfront pricing with driver expenses, fuel, and parking included. Zero unsolicited
					souvenir detours or hidden commissions.
				</p>
			</div>

			<!-- Pillar 04 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">04</span>
				<h3 class="text-xl sm:text-2xl font-semibold text-white">Respectful Tourism</h3>
				<p class="text-xs sm:text-sm font-light leading-relaxed text-white/70">
					We practice conscious travel that respects sacred ceremonies, supports rural family-owned
					warungs, and preserves the island's natural sanctuaries.
				</p>
			</div>
		</div>
	</section>

	<!-- Metrics By The Numbers -->
	<section
		class="border-t border-white/10 px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24"
	>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
			<div class="space-y-2">
				<p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
					12+
				</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Years of Experience</p>
			</div>
			<div class="space-y-2">
				<p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
					50k+
				</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Delighted Guests</p>
			</div>
			<div class="space-y-2">
				<p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
					100%
				</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Private Tours</p>
			</div>
			<div class="space-y-2">
				<p class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
					4.9 / 5
				</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Guest Rating</p>
			</div>
		</div>
	</section>

	<!-- Trusted Partners Section -->
	<section
		class="border-t border-white/10 px-6 py-16 sm:px-12 sm:py-20 md:px-16 lg:px-24 text-center space-y-8"
	>
		<div>
			<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
				- Recognized Worldwide
			</p>
			<h3 class="text-xl sm:text-2xl font-bold mt-1">Our Official Media & Travel Partners</h3>
		</div>
		<ul class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 brightness-0 invert-100 opacity-80">
			{#each mediaPartners as partner (partner.id)}
				<li class="transition-opacity hover:opacity-100">
					<img class={partner.heightClass} alt={partner.alt} src={partner.logo} />
				</li>
			{/each}
		</ul>
	</section>

	<!-- Grand Open Call to Action -->
	<section
		class="border-t border-white/10 px-6 py-20 sm:px-12 sm:py-28 md:px-16 lg:px-24 text-center space-y-6 sm:space-y-8"
	>
		<span class="text-xs font-semibold uppercase tracking-widest text-white/50">
			- Ready for Your Adventure?
		</span>
		<h2
			class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
		>
			Let Us Show You The Real Bali
		</h2>
		<p class="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-light text-white/70 leading-relaxed">
			Whether it's chasing hidden waterfalls in Ubud, watching the sunset at Uluwatu, or crossing
			the ocean to Nusa Penida, our drivers are ready to make your dream trip effortless.
		</p>
		<div class="pt-4 sm:pt-6">
			<a
				href="/packages"
				class="inline-block rounded-xl bg-white px-8 py-3.5 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-white/90"
			>
				Explore Tour Packages
			</a>
		</div>
	</section>
</main>

<FooterBlock />
