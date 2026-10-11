<script lang="ts">
	import { monthlySpotlight } from '#lib/data';
</script>

<section class="relative mt-28 grid min-h-[10rem] grid-cols-12 gap-20 bg-black px-28 py-10 py-20">
	<img
		alt="background"
		class="absolute top-0 left-0 size-full object-cover opacity-10"
		src={monthlySpotlight.bgImage}
	/>
	<div class="z-10 col-span-4 space-y-6 text-white">
		<span>{monthlySpotlight.subtitle}</span>
		<h4 class="text-7xl">{monthlySpotlight.title}</h4>
		<p class="font-light">
			{monthlySpotlight.description}
		</p>
		<button class="rounded-xl bg-white px-4 py-2 text-black">{monthlySpotlight.buttonText}</button>
	</div>
	<div class="relative col-span-8 rounded-2xl bg-green-500">
		<img
			alt="clear"
			class="absolute top-0 left-0 size-full rounded-xl object-cover"
			src={monthlySpotlight.image}
		/>
	</div>
</section>
