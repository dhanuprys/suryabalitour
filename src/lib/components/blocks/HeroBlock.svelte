<script lang="ts">
	import { mediaPartners } from '#lib/data';
	import { trackEvent } from '#lib/analytics';
</script>

<section class="relative min-h-screen w-full overflow-hidden bg-black">
	<img
		class="absolute inset-0 h-full w-full object-cover opacity-60"
		alt="Scenic Bali Landscape"
		src="https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=1600&auto=format&fit=crop"
	/>
	<div class="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black"></div>

	<div
		class="relative z-10 flex min-h-screen w-full flex-col justify-between px-6 pt-32 pb-12 sm:px-12 md:px-16 lg:px-24"
	>
		<div class="mx-auto my-auto w-full max-w-6xl space-y-3 pt-12 text-left">
			<h1
				class="text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
			>
				Discover<br />Bali Wonders
			</h1>
			<p class="max-w-2xl text-base leading-relaxed font-light text-white/80 sm:text-lg">
				Uncover hidden gems, taste authentic flavors, and create memories you will treasure for a
				lifetime. Private, personalized, and guided with warm Balinese hospitality.
			</p>
			<div class="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
				<a
					href="/packages"
					onclick={() =>
						trackEvent('cta_click', {
							button_text: 'Explore Tour Packages',
							location: 'hero'
						})}
					class="rounded-xl bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition-all hover:bg-white/90"
				>
					Explore Tour Packages
				</a>
				<a
					href="/about"
					class="rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
				>
					About Surya Bali
				</a>
			</div>
		</div>

		<div
			class="mx-auto flex w-full max-w-5xl flex-col items-center justify-center pt-12 pb-4 md:items-end"
		>
			<p class="pb-4 text-xs font-semibold tracking-widest text-white/50 uppercase">
				Travel Partners
			</p>
			<ul
				class="flex flex-wrap items-center justify-center gap-6 opacity-80 brightness-0 invert-100 sm:gap-10"
			>
				{#each mediaPartners as partner (partner.id)}
					<li class="transition-opacity hover:opacity-100">
						<img class={partner.heightClass} alt={partner.alt} src={partner.logo} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
