<script lang="ts">
	import { MapPinIcon, UsersIcon } from '@lucide/svelte';
	import { guideCategories, travelGuides } from '#lib/data';

	let activeCategory = $state('all');

	const displayedGuides = $derived(
		activeCategory === 'all'
			? travelGuides
			: travelGuides.filter((guide) => guide.category === activeCategory)
	);
</script>

<section class="space-y-10 pt-16 sm:space-y-12 sm:pt-24">
	<!-- Section Header -->
	<div
		class="flex flex-col gap-6 px-6 sm:px-12 md:px-16 lg:flex-row lg:items-end lg:justify-between lg:px-24"
	>
		<div>
			<span class="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
				- Island of Culture & Tradition
			</span>
			<h2 class="mt-1 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
				Curated Travel Moments
			</h2>
			<p class="mt-2 max-w-2xl text-sm font-light text-neutral-600 sm:text-base">
				Authentic snapshots and scenic highlights captured on our private Bali tours.
			</p>
		</div>

		<!-- Category Filter Pills -->
		<div class="flex flex-wrap items-center gap-2 sm:gap-2.5">
			{#each guideCategories as cat (cat.id)}
				<button
					type="button"
					onclick={() => (activeCategory = cat.id)}
					class="rounded-xl px-4 py-2 text-xs font-medium transition-all sm:text-sm {activeCategory ===
					cat.id
						? 'bg-black text-white shadow-sm'
						: 'border border-neutral-200 bg-neutral-100 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-200 hover:text-black'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Horizontal Scrollable Guides Slider -->
	<div
		class="flex max-w-full [scrollbar-width:none] items-stretch gap-4 overflow-x-auto px-6 py-4 [-ms-overflow-style:none] sm:gap-6 sm:px-12 md:px-16 lg:px-24 [&::-webkit-scrollbar]:hidden"
	>
		{#each displayedGuides as guide, idx (`${guide.id}-${idx}`)}
			<div
				class="relative flex aspect-square w-[80vw] max-w-88 min-w-68 shrink-0 items-end overflow-hidden rounded-2xl shadow-md sm:w-80 sm:min-w-80 md:w-88 md:min-w-88"
			>
				<img
					alt={guide.caption || guide.title}
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
					src={guide.image}
				/>
				<div
					class="absolute inset-x-0 bottom-0 h-4/5 bg-linear-to-t from-black via-black/60 to-transparent"
				></div>
				<div class="relative z-10 flex w-full flex-col space-y-2 p-6 text-center text-white">
					<div class="flex items-center justify-center">
						<span
							class="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md"
						>
							{guide.title}
						</span>
					</div>
					<h3 class="text-xl font-bold sm:text-2xl">{guide.caption}</h3>
					<p class="line-clamp-2 text-xs font-light text-white/80 sm:text-sm">
						{guide.description}
					</p>
					<ul class="flex items-center justify-center gap-4 pt-2 text-xs sm:text-sm">
						<li class="inline-flex items-center gap-1.5 opacity-90">
							<MapPinIcon class="size-3.5" />
							{guide.location}
						</li>
						<li class="inline-flex items-center gap-1.5 opacity-90">
							<UsersIcon class="size-3.5" />
							{guide.groupType}
						</li>
					</ul>
					{#if guide.tourSlug}
						<div class="pt-2">
							<a
								href={`/packages/${guide.tourSlug}`}
								class="inline-block rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-white/90"
							>
								Explore Tour
							</a>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<!-- Narrative & Action Footer -->
	<div class="grid grid-cols-1 gap-6 px-6 sm:px-12 md:grid-cols-2 md:gap-12 md:px-16 lg:px-24">
		<div>
			<p class="text-base font-semibold tracking-wide text-neutral-800 sm:text-lg">
				- Authentic Local Knowledge
			</p>
		</div>
		<div class="space-y-4">
			<p class="text-sm leading-relaxed font-light text-neutral-600 sm:text-base">
				Our drivers are native Balinese storytellers who know every scenic shortcut, sunrise spot,
				and quiet temple courtyard. Skip the congested queues and experience the island at your own
				leisurely rhythm.
			</p>
			<div>
				<a
					href="/packages"
					class="inline-block rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
				>
					View All Private Packages
				</a>
			</div>
		</div>
	</div>
</section>
