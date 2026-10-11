<script lang="ts">
	import { MapPinIcon, UsersIcon } from '@lucide/svelte';
	import { guideCategories, travelGuides } from '#lib/data';

	let activeCategory = $state('all');
</script>

<section class="space-y-12 pt-20">
	<div class="flex items-center justify-between px-28">
		<div>
			<span>- Country of Art</span>
			<h3 class="text-7xl font-bold">Curated Travel Guides</h3>
			<p class="mt-2 max-w-2xl">
				Find your way to the world's greatest wonders. Browse maps, explore destinations, and
				uncover must-see landmarks
			</p>
		</div>
		<ul class="inline-flex gap-x-4">
			{#each guideCategories as cat (cat.id)}
				<button
					onclick={() => (activeCategory = cat.id)}
					class="rounded-xl px-4 py-2 text-sm {activeCategory === cat.id
						? 'bg-black text-white'
						: 'border border-black bg-transparent'}"
				>
					{cat.label}
				</button>
			{/each}
		</ul>
	</div>
	<div
		class="flex max-w-full [scrollbar-width:none] items-center gap-x-4 overflow-y-auto pl-28 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
	>
		{#each travelGuides as guide (guide.id)}
			<div class="relative flex aspect-square min-w-[24rem] items-end rounded-xl">
				<img
					alt={guide.title}
					class="absolute top-0 left-0 -z-10 h-full w-full rounded-xl object-cover"
					src={guide.image}
				/>
				<div
					class="absolute bottom-0 left-0 -z-9 h-[80%] w-full rounded-b-2xl bg-linear-to-t from-black to-transparent"
				></div>
				<div class="flex flex-col space-y-2 px-4 py-10 text-white">
					<h5 class="text-center text-3xl">{guide.title}</h5>
					<p class="text-center text-sm font-light">
						{guide.description}
					</p>
					<ul class="flex items-center justify-center gap-x-4 pt-4">
						<li class="inline-flex items-center gap-x-2 text-sm">
							<MapPinIcon class="size-4" />
							{guide.location}
						</li>
						<li class="inline-flex items-center gap-x-2 text-sm">
							<UsersIcon class="size-4" />
							{guide.groupType}
						</li>
					</ul>
				</div>
			</div>
		{/each}
	</div>
	<div class="grid grid-cols-2 px-28">
		<div>
			<p class="font-semibold">- Beauty of Arts, Nature and Wonders</p>
		</div>
		<div class="space-y-4">
			<p>
				Find your way to the world's greatest wonders. Browse maps, explore destinations, and
				uncover must-see landmarks. Witness Earth's breathtaking masterpieces - from lust osses and
				towering to vast deserts and untouched forests. Find your way to the world's greated wonder
			</p>
			<button class="rounded-xl bg-black px-4 py-2 text-white">Explore All Destinations</button>
		</div>
	</div>
</section>
