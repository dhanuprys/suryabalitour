<script lang="ts">
	import { destinationCategories, exploreDestinations } from '#lib/data';

	let activeCategory = $state('all');
</script>

<section class="space-y-12 pt-20">
	<div class="flex items-center justify-between px-28">
		<div>
			<h3 class="text-7xl font-bold">Explore Bali</h3>
			<p class="mt-2 text-2xl">- Island of God</p>
		</div>
		<ul class="inline-flex gap-x-4">
			{#each destinationCategories as cat (cat.id)}
				<button
					onclick={() => (activeCategory = cat.id)}
					class="rounded-xl px-4 py-2 {activeCategory === cat.id
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
		{#each exploreDestinations as dest (dest.id)}
			<div class="relative flex aspect-3/4 min-w-[24rem] items-end rounded-xl">
				<img
					alt={dest.title}
					class="absolute top-0 left-0 -z-10 h-full w-full rounded-xl object-cover"
					src={dest.image}
				/>
				<div
					class="absolute bottom-0 left-0 -z-9 h-[80%] w-full rounded-b-2xl bg-linear-to-t from-black to-transparent"
				></div>
				<div class="flex flex-col space-y-2 px-4 py-10 text-white">
					<span class="block text-center text-xs font-light">{dest.categoryLabel}</span>
					<h5 class="text-center text-3xl">{dest.title}</h5>
					<p class="text-center text-sm font-light">
						{dest.description}
					</p>
					<div class="flex items-center justify-center gap-2 pt-4">
						<button class="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
							>Explore Destination</button
						>
						<button
							class="rounded-xl border border-white px-4 py-2 text-sm font-semibold text-white"
							>Available Events</button
						>
					</div>
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
