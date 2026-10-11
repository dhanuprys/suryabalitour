<script lang="ts">
	import { ArrowRightIcon, MessageCircleIcon } from '@lucide/svelte';
	import { howToBookData } from '#lib/data';

	const whatsappUrl = `https://wa.me/${howToBookData.whatsappNumber}?text=${encodeURIComponent(howToBookData.whatsappMessage)}`;
</script>

<section id="how-to-book" class="space-y-12 px-6 pt-16 sm:space-y-16 sm:px-12 sm:pt-24 md:px-16 lg:px-24">
	<!-- Section Header -->
	<div class="mx-auto flex max-w-2xl flex-col items-center space-y-3 text-center">
		<span class="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
			{howToBookData.subtitle}
		</span>
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
			{howToBookData.title}
		</h2>
		<p class="text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
			{howToBookData.description}
		</p>
	</div>

	<!-- Open 3-Step Process (Card-Free Editorial Flow) -->
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
		{#each howToBookData.steps as step, idx (step.step)}
			<div class="group flex flex-col space-y-6">
				<!-- Step Overline Timeline -->
				<div class="flex items-center justify-between border-t border-neutral-300 pt-4">
					<div class="flex items-center gap-2.5">
						<span class="font-mono text-sm font-bold text-neutral-900 sm:text-base">
							{step.step}
						</span>
						<span class="h-1 w-1 rounded-full bg-neutral-300"></span>
						<span class="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
							{step.badge.split('·')[1]?.trim() || step.badge}
						</span>
					</div>
					<span class="font-mono text-xs text-neutral-400">
						0{idx + 1}/03
					</span>
				</div>

				<!-- Floating Illustration -->
				<div class="aspect-4/3 w-full overflow-hidden rounded-2xl bg-neutral-100">
					<img
						alt={step.title}
						class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						src={step.image}
						loading="lazy"
					/>
				</div>

				<!-- Step Content -->
				<div class="flex flex-1 flex-col justify-between space-y-3">
					<div class="space-y-2">
						<h3 class="text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-black">
							{step.title}
						</h3>
						<p class="text-sm font-light leading-relaxed text-neutral-600">
							{step.description}
						</p>
					</div>

					<div class="pt-2">
						<p class="text-xs font-medium tracking-wide text-neutral-500">
							— {step.detail}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Narrative & Action Footer (Site Standard Pattern) -->
	<div class="grid grid-cols-1 gap-6 border-t border-neutral-200/80 pt-8 sm:pt-10 md:grid-cols-2 md:gap-12">
		<div>
			<p class="text-base font-semibold tracking-wide text-neutral-900 sm:text-lg">
				{howToBookData.guaranteeTitle}
			</p>
		</div>
		<div class="space-y-4">
			<p class="text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
				{howToBookData.guaranteeDescription}
			</p>
			<div class="flex flex-wrap items-center gap-3 pt-2">
				<a
					href="/packages"
					class="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
				>
					<span>View All Packages</span>
					<ArrowRightIcon class="size-4" />
				</a>
				<a
					href={whatsappUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition-all hover:border-black hover:bg-neutral-50"
				>
					<MessageCircleIcon class="size-4" />
					<span>Chat on WhatsApp</span>
				</a>
			</div>
		</div>
	</div>
</section>
