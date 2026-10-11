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
				Curated Travel Guides
			</h2>
			<p class="mt-2 max-w-2xl text-sm font-light text-neutral-600 sm:text-base">
				Personalized routes crafted by local Balinese chauffeurs and culture specialists.
				Experience Bali with total peace of mind.
			</p>
		</div>

		<!-- Category Filter Pills -->
		<div class="flex flex-wrap gap-2 sm:gap-3">
			{#each guideCategories as cat (cat.id)}
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

	<!-- Horizontal Scrollable Guides Slider -->
	<div
		class="flex max-w-full items-stretch gap-4 overflow-x-auto px-6 py-4 [scrollbar-width:none] [-ms-overflow-style:none] sm:gap-6 sm:px-12 md:px-16 lg:px-24 [&::-webkit-scrollbar]:hidden"
	>
		{#each displayedGuides as guide (guide.id)}
			<div
				class="relative flex aspect-square w-[78vw] min-w-[17rem] max-w-[22rem] shrink-0 items-end overflow-hidden rounded-2xl shadow-md sm:w-[20rem] sm:min-w-[20rem] md:w-[22rem] md:min-w-[22rem]"
			>
				<img
					alt={guide.title}
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
					src={guide.image}
				/>
				<div
					class="absolute inset-x-0 bottom-0 h-4/5 bg-linear-to-t from-black via-black/60 to-transparent"
				></div>
				<div class="relative z-10 flex w-full flex-col space-y-2 p-6 text-center text-white">
					<h3 class="text-2xl font-semibold sm:text-3xl">{guide.title}</h3>
					<p class="line-clamp-2 text-xs font-light text-white/80 sm:text-sm">
						{guide.description}
					</p>
					<ul class="flex items-center justify-center gap-4 pt-3 text-xs sm:text-sm">
						<li class="inline-flex items-center gap-1.5 opacity-90">
							<MapPinIcon class="size-4" />
							{guide.location}
						</li>
						<li class="inline-flex items-center gap-1.5 opacity-90">
							<UsersIcon class="size-4" />
							{guide.groupType}
						</li>
					</ul>
				</div>
			</div>
		{/each}
	</div>

	<!-- Narrative & Action Footer -->
	<div
		class="grid grid-cols-1 gap-6 px-6 sm:px-12 md:grid-cols-2 md:gap-12 md:px-16 lg:px-24"
	>
		<div>
			<p class="text-base font-semibold tracking-wide text-neutral-800 sm:text-lg">
				- Authentic Local Knowledge
			</p>
		</div>
		<div class="space-y-4">
			<p class="text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
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

