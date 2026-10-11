<script lang="ts">
	import { wonderHighlights } from '#lib/data';
</script>

<section class="pt-16 sm:pt-24">
	<div class="grid grid-cols-1 lg:grid-cols-2">
		{#each wonderHighlights as wonder (wonder.id)}
			{#if wonder.textOnLeft}
				<!-- Text Block -->
				<div
					class="relative flex min-h-[420px] flex-col justify-center bg-black px-6 py-16 text-white sm:px-12 md:px-16 lg:min-h-[60vh] lg:px-20"
				>
					<img
						alt="Background texture"
						class="absolute inset-0 h-full w-full object-cover opacity-10"
						src={wonder.image}
					/>
					<div class="relative z-10 space-y-4">
						<span class="text-xs font-semibold tracking-widest text-white/60 uppercase">
							{wonder.tag}
						</span>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<h3
							class="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html wonder.title}
						</h3>
						<p class="max-w-xl text-sm leading-relaxed font-light text-white/80 sm:text-base">
							{wonder.description}
						</p>
						<div class="pt-4">
							<a
								href="/packages"
								class="inline-block rounded-xl bg-white px-6 py-3 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm"
							>
								{wonder.buttonText}
							</a>
						</div>
					</div>
				</div>

				<!-- Image Block -->
				<div class="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[60vh]">
					<img
						alt={wonder.tag}
						class="absolute inset-0 h-full w-full object-cover"
						src={wonder.image}
					/>
				</div>
			{:else}
				<!-- Image Block (Order 2 on mobile, Order 1 on desktop) -->
				<div class="relative order-2 min-h-[320px] sm:min-h-[400px] lg:order-1 lg:min-h-[60vh]">
					<img
						alt={wonder.tag}
						class="absolute inset-0 h-full w-full object-cover"
						src={wonder.image}
					/>
				</div>

				<!-- Text Block (Order 1 on mobile, Order 2 on desktop) -->
				<div
					class="relative order-1 flex min-h-[420px] flex-col justify-center bg-black px-6 py-16 text-white sm:px-12 md:px-16 lg:order-2 lg:min-h-[60vh] lg:px-20"
				>
					<img
						alt="Background texture"
						class="absolute inset-0 h-full w-full object-cover opacity-10"
						src={wonder.image}
					/>
					<div class="relative z-10 space-y-4">
						<span class="text-xs font-semibold tracking-widest text-white/60 uppercase">
							{wonder.tag}
						</span>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<h3
							class="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html wonder.title}
						</h3>
						<p class="max-w-xl text-sm leading-relaxed font-light text-white/80 sm:text-base">
							{wonder.description}
						</p>
						<div class="pt-4">
							<a
								href="/packages"
								class="inline-block rounded-xl bg-white px-6 py-3 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm"
							>
								{wonder.buttonText}
							</a>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
