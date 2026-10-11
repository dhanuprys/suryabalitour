<script lang="ts">
	import { monthlySpotlight } from '#lib/data';
</script>

<section
	class="relative mt-16 sm:mt-24 overflow-hidden bg-black px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24"
>
	<img
		alt="Background atmosphere"
		class="absolute inset-0 h-full w-full object-cover opacity-15"
		src={monthlySpotlight.bgImage}
	/>

	<div class="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
		<div class="space-y-5 text-white lg:col-span-5">
			<span class="text-xs font-semibold tracking-widest text-white/60 uppercase">
				{monthlySpotlight.subtitle}
			</span>
			<h3
				class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
			>
				{monthlySpotlight.title}
			</h3>
			<p class="text-sm font-light leading-relaxed text-white/80 sm:text-base">
				{monthlySpotlight.description}
			</p>
			<div class="pt-2">
				<a
					href="/packages"
					class="inline-block rounded-xl bg-white px-6 py-3 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm"
				>
					{monthlySpotlight.buttonText}
				</a>
			</div>
		</div>

		<div
			class="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl sm:aspect-16/10 lg:col-span-7"
		>
			<img
				alt={monthlySpotlight.title}
				class="h-full w-full object-cover"
				src={monthlySpotlight.image}
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
		</div>
	</div>
</section>

