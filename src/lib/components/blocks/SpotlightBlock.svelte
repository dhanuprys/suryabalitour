<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import { spotlightSlides } from '#lib/data';

	let currentIndex = $state(0);
	let isHovered = $state(false);

	const slideCount = $derived(spotlightSlides.length);
	const slide = $derived(spotlightSlides[currentIndex]);

	function nextSlide() {
		if (slideCount === 0) return;
		currentIndex = (currentIndex + 1) % slideCount;
	}

	function prevSlide() {
		if (slideCount === 0) return;
		currentIndex = (currentIndex - 1 + slideCount) % slideCount;
	}

	// Auto-advance slideshow every 6 seconds unless paused by hover
	$effect(() => {
		if (isHovered || slideCount <= 1) return;
		const timer = setInterval(nextSlide, 6000);
		return () => clearInterval(timer);
	});
</script>

{#if slide}
	<section
		class="relative mt-16 sm:mt-24 overflow-hidden bg-black px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24"
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
		aria-label="Monthly Tour Spotlight"
	>
		<!-- Atmospheric Background Crossfade -->
		{#each spotlightSlides as item, idx (item.id)}
			<img
				alt="Background atmosphere"
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out {idx ===
				currentIndex
					? 'opacity-15 z-0'
					: 'opacity-0 z-0 pointer-events-none'}"
				src={item.bgImage}
				aria-hidden="true"
			/>
		{/each}

		<div class="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
			<!-- Text Content & Controls Column -->
			<div class="flex flex-col justify-between space-y-6 text-white lg:col-span-5">
				<!-- Smooth Crossfading Narrative Content -->
				<div class="relative min-h-[220px] sm:min-h-[250px] md:min-h-[270px]">
					{#each spotlightSlides as item, idx (item.id)}
						<div
							class="space-y-4 text-white transition-all duration-700 ease-in-out {idx ===
							currentIndex
								? 'relative z-10 opacity-100 translate-y-0'
								: 'pointer-events-none absolute inset-0 z-0 opacity-0 translate-y-2'}"
						>
							<span class="text-xs font-semibold tracking-widest text-white/60 uppercase">
								{item.subtitle}
							</span>
							<h3
								class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
							>
								{item.title}
							</h3>
							<p class="text-sm font-light leading-relaxed text-white/80 sm:text-base">
								{item.description}
							</p>
						</div>
					{/each}
				</div>

				<!-- Actions & Slideshow Indicators -->
				<div class="flex items-center gap-5 pt-2">
					<a
						href={`/packages/${slide.tourSlug}`}
						class="inline-block rounded-xl bg-white px-6 py-3 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:text-sm"
					>
						{slide.buttonText}
					</a>

					<!-- Minimalist Slideshow Indicators -->
					{#if slideCount > 1}
						<div class="flex items-center gap-2">
							<button
								type="button"
								onclick={prevSlide}
								class="flex size-8 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white"
								aria-label="Previous slide"
							>
								<ChevronLeftIcon class="size-4" />
							</button>

							<div class="flex items-center gap-1.5">
								{#each spotlightSlides as _, idx (idx)}
									<button
										type="button"
										onclick={() => (currentIndex = idx)}
										class="h-1 rounded-full transition-all duration-500 ease-out {idx === currentIndex
											? 'w-6 bg-white'
											: 'w-1.5 bg-white/30 hover:bg-white/60'}"
										aria-label={`Go to slide ${idx + 1}`}
									></button>
								{/each}
							</div>

							<button
								type="button"
								onclick={nextSlide}
								class="flex size-8 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white"
								aria-label="Next slide"
							>
								<ChevronRightIcon class="size-4" />
							</button>
						</div>
					{/if}
				</div>
			</div>

			<!-- Featured Image Crossfade Container -->
			<div
				class="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl sm:aspect-16/10 lg:col-span-7"
			>
				{#each spotlightSlides as item, idx (item.id)}
					<img
						alt={item.title}
						class="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out {idx ===
						currentIndex
							? 'opacity-100 scale-100 z-10'
							: 'pointer-events-none opacity-0 scale-105 z-0'}"
						src={item.image}
						loading={idx === 0 ? 'eager' : 'lazy'}
					/>
				{/each}
				<div
					class="pointer-events-none absolute inset-0 z-20 bg-linear-to-t from-black/40 via-transparent to-transparent"
				></div>
			</div>
		</div>
	</section>
{/if}
