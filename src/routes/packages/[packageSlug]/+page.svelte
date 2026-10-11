<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const tour = $derived(data.tour);
	const recommendedTours = $derived(data.recommendedTours ?? []);

	// Booking Form State
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let tourDate = $state('');
	let numberOfPeople = $state(2);
	let pickupArea = $derived(tour.pickupAreas?.[0] ?? '');
	let notes = $state('');
	let selectedAddonIds = $state<string[]>([]);
	let isSubmitted = $state(false);

	// Gallery Modal State
	let activeGalleryImage = $state<string | null>(null);

	// Toggle Addon Selection
	function toggleAddon(addonId: string) {
		if (selectedAddonIds.includes(addonId)) {
			selectedAddonIds = selectedAddonIds.filter((id) => id !== addonId);
		} else {
			selectedAddonIds = [...selectedAddonIds, addonId];
		}
	}

	// Calculate Dynamic Total Price
	const totalPrice = $derived.by(() => {
		let total = tour.priceFrom * numberOfPeople;

		for (const addonId of selectedAddonIds) {
			const addon = tour.addons.find((a) => a.id === addonId);
			if (addon) {
				if (addon.priceType === 'per_person') {
					total += addon.price * numberOfPeople;
				} else {
					total += addon.price;
				}
			}
		}

		return total;
	});

	function handleFormSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitted = true;
	}
</script>

<svelte:head>
	<title>{tour.title} | Surya Bali Tour</title>
	<meta name="description" content={tour.overview} />
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Full-bleed Hero Banner -->
	<section
		class="relative flex h-[70vh] min-h-[520px] w-full items-end bg-black px-8 pb-16 md:px-28"
	>
		<img
			alt={tour.title}
			class="absolute top-0 left-0 h-full w-full object-cover opacity-40"
			src={tour.heroImage}
		/>
		<div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/70"></div>

		<div class="relative z-10 max-w-4xl space-y-4">
			<!-- Breadcrumb -->
			<nav
				class="flex items-center gap-2 text-xs font-medium tracking-widest text-white/60 uppercase"
			>
				<a href="/" class="transition-colors hover:text-white">Home</a>
				<span>/</span>
				<a href="/packages" class="transition-colors hover:text-white">Packages</a>
				<span>/</span>
				<span class="font-semibold text-white">{tour.title}</span>
			</nav>

			<!-- Top Badges -->
			<div class="flex flex-wrap gap-2">
				<span
					class="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
				>
					{tour.tourType}
				</span>
				<span
					class="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
				>
					{tour.duration}
				</span>
			</div>

			<!-- Title & Tagline -->
			<h1 class="text-5xl leading-tight font-bold tracking-tight md:text-7xl">
				{tour.title}
			</h1>
			<p class="max-w-2xl text-lg font-light text-white/80 md:text-xl">
				{tour.tagline}
			</p>
		</div>
	</section>

	<!-- Main Content Area (2 Columns) -->
	<section class="px-8 py-16 md:px-28">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
			<!-- Left Column: Package Details (2 Cols) -->
			<div class="space-y-16 lg:col-span-2">
				<!-- Overview Section -->
				<section class="space-y-6">
					<div>
						<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
							- Experience Overview
						</p>
						<h2 class="mt-1 text-3xl font-bold">Package Overview</h2>
					</div>
					<p class="text-lg leading-relaxed font-light text-white/90">
						{tour.overview}
					</p>

					<!-- Quick Specs Grid -->
					<div
						class="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6 pt-4 md:grid-cols-4"
					>
						<div>
							<span class="block text-xs font-medium text-white/50 uppercase">Duration</span>
							<span class="text-base font-semibold text-white">{tour.duration}</span>
						</div>
						<div>
							<span class="block text-xs font-medium text-white/50 uppercase">Tour Type</span>
							<span class="text-base font-semibold text-white">{tour.tourType}</span>
						</div>
						<div>
							<span class="block text-xs font-medium text-white/50 uppercase">Starting Price</span>
							<span class="text-base font-semibold text-white"
								>${tour.priceFrom} {tour.currency}</span
							>
						</div>
						<div>
							<span class="block text-xs font-medium text-white/50 uppercase">Language</span>
							<span class="text-base font-semibold text-white">English / Indonesian</span>
						</div>
					</div>
				</section>

				<!-- What They Will See Section -->
				<section class="space-y-8">
					<div>
						<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
							- Key Highlights
						</p>
						<h2 class="mt-1 text-3xl font-bold">What You Will See</h2>
					</div>

					<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
						{#each tour.whatTheyWillSee as highlight (highlight.id)}
							<div class="group space-y-4">
								{#if highlight.image}
									<div class="aspect-16/10 overflow-hidden rounded-2xl">
										<img
											src={highlight.image}
											alt={highlight.title}
											class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
								{/if}
								<div class="space-y-2">
									<h3 class="text-xl font-bold text-white">{highlight.title}</h3>
									<p class="text-sm leading-relaxed font-light text-white/70">
										{highlight.description}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Good To Know Section -->
				<section class="space-y-6 border-t border-white/15 pt-12">
					<div>
						<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
							- Essential Information
						</p>
						<h2 class="mt-1 text-3xl font-bold">Good To Know</h2>
					</div>

					<ul class="space-y-4">
						{#each tour.goodToKnow as tip, idx (idx)}
							<li class="flex items-start gap-3">
								<span
									class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="size-3.5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</span>
								<p class="text-base leading-normal font-light text-white/90">
									{tip}
								</p>
							</li>
						{/each}
					</ul>
				</section>

				<!-- Galleries Section -->
				<section class="space-y-6">
					<div>
						<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
							- Photo Gallery
						</p>
						<h2 class="mt-1 text-3xl font-bold">Galleries</h2>
					</div>

					<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
						{#each tour.gallery as photo, idx (idx)}
							<button
								type="button"
								onclick={() => (activeGalleryImage = photo.url)}
								class="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-neutral-900 text-left focus:outline-none"
							>
								<img
									src={photo.url}
									alt={photo.alt}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div
									class="absolute inset-0 flex items-center justify-center bg-black/40 p-2 text-center text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100"
								>
									Zoom Photo
								</div>
							</button>
						{/each}
					</div>
				</section>

				<!-- Addons Section -->
				<section class="space-y-6">
					<div>
						<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
							- Customize Package
						</p>
						<h2 class="mt-1 text-3xl font-bold">Available Add-ons</h2>
						<p class="mt-1 text-sm font-light text-white/60">
							Enhance your tour experience. Select any add-ons to automatically add them to your
							booking request.
						</p>
					</div>

					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						{#each tour.addons as addon (addon.id)}
							{@const isSelected = selectedAddonIds.includes(addon.id)}
							<button
								type="button"
								onclick={() => toggleAddon(addon.id)}
								class="flex flex-col justify-between rounded-2xl border p-5 text-left transition-all {isSelected
									? 'border-white bg-white/10 ring-1 ring-white'
									: 'border-white/10 bg-neutral-900/60 hover:border-white/30'}"
							>
								<div class="space-y-2">
									<div class="flex items-center justify-between">
										<h4 class="font-bold text-white">{addon.name}</h4>
										<span
											class="rounded-full px-2.5 py-1 text-xs font-bold {isSelected
												? 'bg-white text-black'
												: 'bg-white/10 text-white'}"
										>
											+${addon.price}
											{tour.currency}
										</span>
									</div>
									{#if addon.description}
										<p class="text-xs font-light text-white/70">
											{addon.description}
										</p>
									{/if}
								</div>

								<div
									class="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs"
								>
									<span class="tracking-wider text-white/50 uppercase"
										>{addon.unitLabel ?? addon.priceType}</span
									>
									<span class="font-semibold {isSelected ? 'text-white' : 'text-white/40'}">
										{isSelected ? 'Selected' : '+ Add Option'}
									</span>
								</div>
							</button>
						{/each}
					</div>
				</section>
			</div>

			<!-- Right Column: Sticky Booking Form Sidebar (1 Col) -->
			<aside class="relative">
				<div
					class="sticky top-28 space-y-6 rounded-3xl border border-white/20 bg-neutral-900/90 p-8 shadow-2xl backdrop-blur-xl"
				>
					<!-- Price Summary Header -->
					<div class="space-y-1 border-b border-white/10 pb-6">
						<span class="text-xs font-medium tracking-widest text-white/50 uppercase"
							>Package Pricing</span
						>
						<div class="flex items-baseline justify-between">
							<span class="text-3xl font-bold text-white">${totalPrice} {tour.currency}</span>
							<span class="text-xs text-white/60">Estimated Total</span>
						</div>
						<p class="text-xs font-light text-white/40">
							Includes base package for {numberOfPeople} pax {selectedAddonIds.length > 0
								? `+ ${selectedAddonIds.length} add-on(s)`
								: ''}
						</p>
					</div>

					{#if isSubmitted}
						<div
							class="space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-6 text-center"
						>
							<div
								class="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-6"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
							</div>
							<h3 class="text-xl font-bold text-white">Inquiry Received!</h3>
							<p class="text-xs leading-relaxed font-light text-emerald-200/80">
								Thank you, <strong class="text-white">{name}</strong>! Our local team will contact
								you shortly via WhatsApp/Email to confirm your tour date on
								<strong class="text-white">{tourDate}</strong>.
							</p>
							<button
								type="button"
								onclick={() => (isSubmitted = false)}
								class="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20"
							>
								Submit Another Request
							</button>
						</div>
					{:else}
						<!-- Booking Inquiry Form -->
						<form onsubmit={handleFormSubmit} class="space-y-4">
							<h3 class="text-xl font-bold text-white">Book / Inquire Tour</h3>

							<!-- Name Field -->
							<div class="space-y-1.5">
								<label
									for="name"
									class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
								>
									Full Name *
								</label>
								<input
									id="name"
									type="text"
									required
									bind:value={name}
									placeholder="John Doe"
									class="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
								/>
							</div>

							<!-- Email & Phone -->
							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div class="space-y-1.5">
									<label
										for="email"
										class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
									>
										Email *
									</label>
									<input
										id="email"
										type="email"
										required
										bind:value={email}
										placeholder="john@example.com"
										class="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
									/>
								</div>
								<div class="space-y-1.5">
									<label
										for="phone"
										class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
									>
										WhatsApp / Phone
									</label>
									<input
										id="phone"
										type="tel"
										bind:value={phone}
										placeholder="+62 812..."
										class="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
									/>
								</div>
							</div>

							<!-- Tour Date & Number of People -->
							<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div class="space-y-1.5">
									<label
										for="tourDate"
										class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
									>
										Tour Date *
									</label>
									<input
										id="tourDate"
										type="date"
										required
										bind:value={tourDate}
										class="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
									/>
								</div>

								<div class="space-y-1.5">
									<label
										for="numberOfPeople"
										class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
									>
										People (Pax) *
									</label>
									<input
										id="numberOfPeople"
										type="number"
										min="1"
										max="20"
										required
										bind:value={numberOfPeople}
										class="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
									/>
								</div>
							</div>

							<!-- Pickup Area -->
							<div class="space-y-1.5">
								<label
									for="pickupArea"
									class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
								>
									Hotel / Pickup Area *
								</label>
								{#if tour.pickupAreas && tour.pickupAreas.length > 0}
									<select
										id="pickupArea"
										bind:value={pickupArea}
										class="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-2.5 text-sm text-white focus:border-white focus:outline-none"
									>
										{#each tour.pickupAreas as area (area)}
											<option value={area}>{area} Area</option>
										{/each}
										<option value="Other">Other Location (Specify in notes)</option>
									</select>
								{:else}
									<input
										id="pickupArea"
										type="text"
										required
										bind:value={pickupArea}
										placeholder="e.g. Seminyak, Ubud..."
										class="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
									/>
								{/if}
							</div>

							<!-- Addons Checkboxes Summary -->
							{#if tour.addons.length > 0}
								<div class="space-y-2 border-t border-white/10 pt-2">
									<label class="block text-xs font-semibold tracking-wider text-white/70 uppercase">
										Selected Add-ons ({selectedAddonIds.length})
									</label>
									<div class="max-h-36 space-y-1.5 overflow-y-auto pr-1">
										{#each tour.addons as addon (addon.id)}
											<label
												class="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/40 p-2 text-xs"
											>
												<div class="flex items-center gap-2">
													<input
														type="checkbox"
														checked={selectedAddonIds.includes(addon.id)}
														onchange={() => toggleAddon(addon.id)}
														class="rounded border-white/30 bg-black text-white focus:ring-0"
													/>
													<span class="text-white">{addon.name}</span>
												</div>
												<span class="font-semibold text-white/80">+${addon.price}</span>
											</label>
										{/each}
									</div>
								</div>
							{/if}

							<!-- Notes -->
							<div class="space-y-1.5">
								<label
									for="notes"
									class="block text-xs font-semibold tracking-wider text-white/70 uppercase"
								>
									Notes / Special Requests
								</label>
								<textarea
									id="notes"
									rows="3"
									bind:value={notes}
									placeholder="Dietary requirements, child seats, flight details..."
									class="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
								></textarea>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								class="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-xl transition-all hover:bg-white/90 active:scale-98"
							>
								Submit Booking Request
							</button>

							<p class="text-center text-[10px] text-white/40">
								No instant payment required. We will verify availability and confirm via WhatsApp.
							</p>
						</form>
					{/if}
				</div>
			</aside>
		</div>
	</section>

	<!-- Suggested & Recommended Other Packages Section -->
	{#if recommendedTours.length > 0}
		<section class="space-y-8 border-t border-white/10 bg-neutral-950 px-8 py-16 md:px-28">
			<div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
						- Similar Experiences
					</p>
					<h2 class="mt-1 text-3xl font-bold">Recommended Other Packages</h2>
				</div>
				<a
					href="/packages"
					class="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
				>
					View All Packages
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</a>
			</div>

			<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
				{#each recommendedTours as rec (rec.id)}
					<article class="group flex flex-col justify-between space-y-4">
						<!-- Image Container -->
						<a
							href={`/packages/${rec.slug}`}
							class="relative block aspect-16/10 overflow-hidden rounded-2xl"
						>
							<img
								src={rec.heroImage}
								alt={rec.title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
							></div>

							<!-- Badges -->
							<div class="absolute top-4 left-4 flex gap-2">
								<span
									class="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
								>
									{rec.tourType}
								</span>
								<span
									class="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
								>
									{rec.duration}
								</span>
							</div>

							<div
								class="absolute right-4 bottom-4 rounded-xl bg-white px-3.5 py-1 text-xs font-bold text-black"
							>
								From ${rec.priceFrom}
								{rec.currency}
							</div>
						</a>

						<!-- Body -->
						<div class="space-y-2">
							<h3 class="text-xl font-bold text-white transition-colors group-hover:text-white/80">
								<a href={`/packages/${rec.slug}`}>{rec.title}</a>
							</h3>
							<p class="line-clamp-2 text-xs leading-relaxed font-light text-white/70">
								{rec.overview}
							</p>

							<!-- Highlights Preview -->
							<div class="flex flex-wrap gap-1.5 pt-2">
								{#each rec.whatTheyWillSee.slice(0, 2) as item (item.id)}
									<span class="rounded-md border border-white/10 px-2 py-0.5 text-xs text-white/50">
										{item.title}
									</span>
								{/each}
							</div>
						</div>

						<!-- Action -->
						<div class="flex items-center justify-between border-t border-white/10 pt-4 text-xs">
							<span class="text-white/50">{rec.addons.length} Add-ons</span>
							<a
								href={`/packages/${rec.slug}`}
								class="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/70"
							>
								View Tour
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-3.5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" />
								</svg>
							</a>
						</div>
					</article>
				{/each}
			</div>
		</section>
	{/if}
</main>

<!-- Gallery Image Modal -->
{#if activeGalleryImage}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
		onclick={() => (activeGalleryImage = null)}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && (activeGalleryImage = null)}
	>
		<div class="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20">
			<img src={activeGalleryImage} alt="Gallery Zoom" class="h-full w-full object-contain" />
			<button
				onclick={() => (activeGalleryImage = null)}
				class="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
			>
				✕
			</button>
		</div>
	</div>
{/if}

<FooterBlock />
