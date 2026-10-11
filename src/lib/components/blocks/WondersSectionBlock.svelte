<script lang="ts">
	import { wonderHighlights } from '#lib/data';
</script>

<section class="grid grid-cols-2 pt-28">
	{#each wonderHighlights as wonder (wonder.id)}
		{#if wonder.textOnLeft}
			<div class="relative min-h-[50vh] bg-black px-20 text-white">
				<img
					alt="background"
					class="absolute top-0 left-0 size-full bg-red-500 object-cover opacity-3"
					src={wonder.image}
				/>
				<div class="relative z-10 flex h-full flex-col justify-center space-y-1">
					<p>{wonder.tag}</p>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					<h3 class="text-7xl font-semibold">{@html wonder.title}</h3>
					<p class="max-w-[60%]">
						{wonder.description}
					</p>
					<div class="pt-6">
						<button class="rounded-xl bg-white px-4 py-2 text-black">{wonder.buttonText}</button>
					</div>
				</div>
			</div>
			<div class="relative min-h-[50vh] bg-green-500">
				<img alt="GWK" class="absolute top-0 left-0 size-full object-cover" src={wonder.image} />
			</div>
		{:else}
			<div class="relative min-h-[50vh] bg-green-500">
				<img alt="GWK" class="absolute top-0 left-0 size-full object-cover" src={wonder.image} />
			</div>
			<div class="relative min-h-[50vh] bg-black px-20 text-white">
				<img
					alt="background"
					class="absolute top-0 left-0 size-full bg-red-500 object-cover opacity-3"
					src={wonder.image}
				/>
				<div class="relative z-10 flex h-full flex-col justify-center space-y-1">
					<p>{wonder.tag}</p>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					<h3 class="text-7xl font-semibold">{@html wonder.title}</h3>
					<p class="max-w-[60%]">
						{wonder.description}
					</p>
					<div class="pt-6">
						<button class="rounded-xl bg-white px-4 py-2 text-black">{wonder.buttonText}</button>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</section>
