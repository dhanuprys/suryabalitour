<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';
	import { mediaPartners } from '#lib/data';
</script>

<svelte:head>
	<title>About Us | Surya Bali Tour</title>
	<meta
		name="description"
		content="Learn about Surya Bali Tour - authentic private tour packages, local Balinese guides, and custom itineraries crafted with heart and harmony."
	/>
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section
		class="relative flex h-[70vh] min-h-[520px] w-full items-center justify-center bg-black px-8 md:px-28"
	>
		<img
			alt="About Surya Bali Tour"
			class="absolute top-0 left-0 h-full w-full object-cover opacity-35"
			src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

		<div class="relative z-10 mx-auto max-w-4xl space-y-6 pt-16 text-center">
			<span
				class="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md"
			>
				- Island of Gods & Warmth
			</span>
			<h1 class="text-6xl font-bold tracking-tight md:text-8xl">Our Story</h1>
			<p class="mx-auto max-w-2xl text-xl font-light text-white/80">
				Born in Bali, guided by locals. We craft genuine private journeys that celebrate the
				timeless culture, pristine wonders, and sacred spirit of our homeland.
			</p>
		</div>
	</section>

	<!-- Editorial Narrative Section (Spotlight style) -->
	<section class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-8 md:px-28 py-24">
		<div class="lg:col-span-5 space-y-6">
			<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">- Who We Are</p>
			<h2 class="text-5xl md:text-6xl font-semibold leading-tight">
				Crafting Unforgettable Memories
			</h2>
			<p class="text-base font-light leading-relaxed text-white/80">
				Surya Bali Tour was established by native Balinese guides with a singular dream: to share
				the true essence of Bali beyond the crowded tourist trails. We believe that travel is not
				just about ticking off sightseeing spots, but about forming deep, memorable connections with
				local people, sacred heritage, and breathtaking natural wonders.
			</p>
			<p class="text-base font-light leading-relaxed text-white/80">
				Every itinerary we design is anchored in the Balinese principle of <em
					class="font-medium text-white not-italic">Tri Hita Karana</em
				>—living in harmony with the divine, with our fellow community, and with mother nature. When
				you travel with us, you are not just a tourist; you are treated as cherished family.
			</p>
			<div class="pt-4 flex items-center gap-6">
				<a
					href="/packages"
					class="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
				>
					Explore Our Tours
				</a>
				<a
					href="/terms"
					class="text-sm font-medium text-white/70 hover:text-white underline underline-offset-4 transition-colors"
				>
					Read Booking Terms
				</a>
			</div>
		</div>

		<div class="lg:col-span-7 aspect-4/3 md:aspect-16/10 rounded-2xl overflow-hidden relative">
			<img
				alt="Traditional Balinese Temple Atmosphere"
				src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1400&auto=format&fit=crop"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
			<div class="absolute bottom-8 left-8 right-8 text-white space-y-1">
				<p class="text-xs tracking-widest uppercase font-mono text-white/60">Tradition & Hospitality</p>
				<h3 class="text-2xl font-semibold">Rooted in Heritage</h3>
			</div>
		</div>
	</section>

	<!-- Key Pillars (Open Minimalist Typography) -->
	<section class="border-t border-white/10 px-8 py-24 md:px-28 space-y-16">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
			<div>
				<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">- What Defines Us</p>
				<h2 class="text-4xl md:text-6xl font-bold mt-2">The Surya Bali Promise</h2>
			</div>
			<p class="text-base font-light text-white/70 max-w-lg">
				We obsess over the details so you can immerse yourself completely in the magic of your Bali
				vacation without stress or uncertainty.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
			<!-- Pillar 01 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">01</span>
				<h3 class="text-2xl font-semibold text-white">Native Local Guides</h3>
				<p class="text-sm font-light leading-relaxed text-white/70">
					Our drivers and guides were born and raised in Bali. They navigate backroads smoothly and
					share captivating folklore, customs, and hidden gems.
				</p>
			</div>

			<!-- Pillar 02 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">02</span>
				<h3 class="text-2xl font-semibold text-white">100% Private Comfort</h3>
				<p class="text-sm font-light leading-relaxed text-white/70">
					Never get crammed into a commercial tour bus. Enjoy your own private, air-conditioned
					vehicle with flexible departure times and pacing.
				</p>
			</div>

			<!-- Pillar 03 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">03</span>
				<h3 class="text-2xl font-semibold text-white">Total Transparency</h3>
				<p class="text-sm font-light leading-relaxed text-white/70">
					Honest upfront pricing with driver expenses, fuel, and taxes included. Zero unsolicited
					souvenir detours or hidden commissions.
				</p>
			</div>

			<!-- Pillar 04 -->
			<div class="border-t border-white/20 pt-6 space-y-3">
				<span class="font-mono text-xs font-bold text-white/40 tracking-widest">04</span>
				<h3 class="text-2xl font-semibold text-white">Respectful Tourism</h3>
				<p class="text-sm font-light leading-relaxed text-white/70">
					We practice conscious travel that respects sacred ceremonies, supports rural family-owned
					warungs, and preserves the island's natural sanctuaries.
				</p>
			</div>
		</div>
	</section>

	<!-- Metrics By The Numbers -->
	<section class="border-t border-white/10 px-8 py-24 md:px-28">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
			<div class="space-y-2 border-r border-white/10 last:border-none">
				<p class="text-6xl md:text-7xl font-light tracking-tight text-white">12+</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Years of Experience</p>
			</div>
			<div class="space-y-2 border-r border-white/10 last:border-none">
				<p class="text-6xl md:text-7xl font-light tracking-tight text-white">50k+</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Delighted Guests</p>
			</div>
			<div class="space-y-2 border-r border-white/10 last:border-none">
				<p class="text-6xl md:text-7xl font-light tracking-tight text-white">100%</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Private Tours</p>
			</div>
			<div class="space-y-2">
				<p class="text-6xl md:text-7xl font-light tracking-tight text-white">4.9 / 5</p>
				<p class="text-xs uppercase tracking-widest text-white/50">Guest Rating</p>
			</div>
		</div>
	</section>

	<!-- Trusted Partners Section -->
	<section class="border-t border-white/10 px-8 py-20 md:px-28 text-center space-y-8">
		<div>
			<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
				- Recognized Worldwide
			</p>
			<h3 class="text-2xl font-bold mt-1">Our Official Media & Travel Partners</h3>
		</div>
		<ul class="inline-flex flex-wrap items-center justify-center gap-16 brightness-0 invert-100">
			{#each mediaPartners as partner (partner.id)}
				<li class="transition-opacity hover:opacity-70">
					<img class={partner.heightClass} alt={partner.alt} src={partner.logo} />
				</li>
			{/each}
		</ul>
	</section>

	<!-- Grand Open Call to Action -->
	<section class="border-t border-white/10 px-8 py-32 md:px-28 text-center space-y-8">
		<span class="text-xs font-semibold uppercase tracking-widest text-white/50">
			- Ready for Your Adventure?
		</span>
		<h2 class="text-5xl font-bold tracking-tight md:text-8xl text-white">
			Let Us Show You The Real Bali
		</h2>
		<p class="mx-auto max-w-2xl text-lg md:text-xl font-light text-white/70 leading-relaxed">
			Whether it's chasing hidden waterfalls in Ubud, watching the sunset at Uluwatu, or crossing
			the ocean to Nusa Penida, our drivers are ready to make your dream trip effortless.
		</p>
		<div class="pt-6">
			<a
				href="/packages"
				class="inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
			>
				Explore Tour Packages
			</a>
		</div>
	</section>
</main>

<FooterBlock />
