<script lang="ts">
	import { destinationCategories, exploreDestinations } from '#lib/data';

	let activeCategory = $state('all');

	const displayedDestinations = $derived(
		activeCategory === 'all'
			? exploreDestinations
			: exploreDestinations.filter((dest) => dest.category === activeCategory)
	);
</script>

<section class="space-y-10 pt-16 sm:space-y-12 sm:pt-24">
	<!-- Section Header -->
	<div
		class="flex flex-col gap-6 px-6 sm:px-12 md:px-16 lg:flex-row lg:items-end lg:justify-between lg:px-24"
	>
		<div>
			<h2 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
				Explore Bali
			</h2>
			<p class="mt-2 text-lg text-neutral-600 sm:text-2xl">- Island of the Gods</p>
		</div>

		<!-- Category Filter Pills -->
		<div class="flex flex-wrap gap-2 sm:gap-3">
			{#each destinationCategories as cat (cat.id)}
				<button
					type="button"
					onclick={() => (activeCategory = cat.id)}
					class="min-h-[40px] rounded-xl px-4 py-2 text-xs font-medium transition-all sm:text-sm {activeCategory ===
					cat.id
						? 'bg-black text-white shadow-sm'
						: 'border border-black/20 bg-transparent text-neutral-800 hover:border-black'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Horizontal Scrollable Destinations Slider -->
	<div
		class="flex max-w-full [scrollbar-width:none] items-stretch gap-4 overflow-x-auto px-6 py-4 [-ms-overflow-style:none] sm:gap-6 sm:px-12 md:px-16 lg:px-24 [&::-webkit-scrollbar]:hidden"
	>
		{#each displayedDestinations as dest (dest.id)}
			<div
				class="relative flex aspect-3/4 w-[78vw] max-w-[22rem] min-w-[17rem] shrink-0 items-end overflow-hidden rounded-2xl shadow-md sm:w-[20rem] sm:min-w-[20rem] md:w-[22rem] md:min-w-[22rem]"
			>
				<img
					alt={dest.title}
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
					src={dest.image}
				/>
				<div
					class="absolute inset-x-0 bottom-0 h-4/5 bg-linear-to-t from-black via-black/60 to-transparent"
				></div>
				<div class="relative z-10 flex w-full flex-col space-y-2 p-6 text-center text-white">
					<div class="flex flex-wrap items-center justify-center gap-1.5">
						<span
							class="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md"
						>
							{dest.categoryLabel}
						</span>
						{#if dest.priceFrom}
							<span
								class="rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs backdrop-blur-xs"
							>
								From ${dest.priceFrom} USD
							</span>
						{/if}
					</div>
					<h3 class="text-2xl font-semibold sm:text-3xl">{dest.title}</h3>
					<p class="line-clamp-2 text-xs font-light text-white/80 sm:text-sm">
						{dest.description}
					</p>
					{#if dest.duration}
						<p class="text-xs font-medium text-white/60">
							{dest.duration}
						</p>
					{/if}
					<div class="flex flex-col gap-2 pt-3 sm:flex-row sm:items-center sm:justify-center">
						<a
							href={`/packages/${dest.slug}`}
							class="rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm"
						>
							View Package
						</a>
						<a
							href={`/packages/${dest.slug}#booking-form`}
							class="rounded-xl border border-white/40 bg-black/30 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:text-sm"
						>
							Book Tour
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Narrative & Action Footer -->
	<div class="grid grid-cols-1 gap-6 px-6 sm:px-12 md:grid-cols-2 md:gap-12 md:px-16 lg:px-24">
		<div>
			<p class="text-base font-semibold tracking-wide text-neutral-800 sm:text-lg">
				- Beauty of Arts, Nature and Sacred Wonders
			</p>
		</div>
		<div class="space-y-4">
			<p class="text-sm leading-relaxed font-light text-neutral-600 sm:text-base">
				Find your way to Bali’s most revered wonders. Browse curated routes, explore breathtaking
				destinations, and uncover must-see landmarks. From tranquil emerald rice paddies and
				thunderous waterfalls to majestic sea temples and untouched coasts.
			</p>
			<div>
				<a
					href="/packages"
					class="inline-block rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
				>
					Explore All Destinations
				</a>
			</div>
		</div>
	</div>
</section>
