<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';
	import { tourPackages } from '#lib/data';

	let searchQuery = $state('');
	let selectedType = $state<string>('All');
	let sortBy = $state<
		'recommended' | 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc'
	>('recommended');
	let currentPage = $state(1);
	let itemsPerPage = $state(6);
	let packageGridRef = $state<HTMLElement | null>(null);

	const tourTypes = ['All', 'Private Tour', 'Group Tour', 'Day Trip'];
	const itemsPerPageOptions = [6, 12, 24];

	// Filter & Sort packages
	const filteredPackages = $derived.by(() => {
		const query = searchQuery.trim().toLowerCase();

		let result = tourPackages.filter((pkg) => {
			const matchesSearch =
				!query ||
				pkg.title.toLowerCase().includes(query) ||
				pkg.tagline?.toLowerCase().includes(query) ||
				pkg.overview.toLowerCase().includes(query) ||
				pkg.whatTheyWillSee.some(
					(w) =>
						w.title.toLowerCase().includes(query) || w.description.toLowerCase().includes(query)
				) ||
				pkg.addons.some((a) => a.name.toLowerCase().includes(query)) ||
				pkg.pickupAreas?.some((area) => area.toLowerCase().includes(query));

			const matchesType = selectedType === 'All' || pkg.tourType === selectedType;

			return matchesSearch && matchesType;
		});

		// Apply Sorting
		return result.slice().sort((a, b) => {
			if (sortBy === 'price-asc') return a.priceFrom - b.priceFrom;
			if (sortBy === 'price-desc') return b.priceFrom - a.priceFrom;
			if (sortBy === 'duration-asc') return a.durationHours - b.durationHours;
			if (sortBy === 'duration-desc') return b.durationHours - a.durationHours;
			return 0;
		});
	});

	// Reset page number whenever search/filters change
	$effect(() => {
		searchQuery;
		selectedType;
		sortBy;
		itemsPerPage;
		currentPage = 1;
	});

	// Pagination calculations
	const totalPages = $derived(Math.max(1, Math.ceil(filteredPackages.length / itemsPerPage)));

	const paginatedPackages = $derived(
		filteredPackages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);

	const startIndex = $derived(
		filteredPackages.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
	);
	const endIndex = $derived(Math.min(currentPage * itemsPerPage, filteredPackages.length));

	function setPage(page: number) {
		if (page < 1 || page > totalPages) return;
		currentPage = page;
		if (packageGridRef) {
			packageGridRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	function resetFilters() {
		searchQuery = '';
		selectedType = 'All';
		sortBy = 'recommended';
		itemsPerPage = 6;
		currentPage = 1;
	}
</script>

<svelte:head>
	<title>Tour Packages | Surya Bali Tour</title>
	<meta
		name="description"
		content="Explore our curated Bali tour packages. Private drivers, custom itineraries, and unforgettable experiences in Bali."
	/>
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Hero Banner -->
	<section
		class="relative flex h-[60vh] min-h-[480px] w-full items-center justify-center bg-black px-8 md:px-28"
	>
		<img
			alt="Tour Packages Banner"
			class="absolute top-0 left-0 h-full w-full object-cover opacity-30"
			src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

		<div class="relative z-10 mx-auto max-w-4xl space-y-4 pt-16 text-center">
			<h1 class="text-6xl font-bold tracking-tight md:text-7xl">Tour Packages</h1>
			<p class="mx-auto max-w-2xl text-xl font-light text-white/80">
				Discover handcrafted itineraries guided by local Balinese experts. From ancient temples to
				pristine islands.
			</p>
		</div>
	</section>

	<!-- Minimalist Filter & Search Controls (Seamless Inline Bar) -->
	<section class="border-b border-white/10 px-8 py-8 md:px-28">
		<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
			<!-- Search Input -->
			<div class="relative w-full lg:w-96">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-white/40"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</svg>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search tours, attractions, locations..."
					class="w-full rounded-xl border border-white/20 bg-neutral-950 py-2.5 pr-10 pl-10 text-sm text-white placeholder-white/40 focus:border-white focus:outline-none"
				/>
				{#if searchQuery}
					<button
						type="button"
						onclick={() => (searchQuery = '')}
						class="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-white/50 hover:text-white"
						aria-label="Clear Search"
					>
						✕
					</button>
				{/if}
			</div>

			<!-- Tour Type Filter Buttons -->
			<div class="flex flex-wrap items-center gap-2">
				{#each tourTypes as type (type)}
					<button
						type="button"
						onclick={() => (selectedType = type)}
						class="rounded-xl px-4 py-2 text-xs font-medium transition-all {selectedType === type
							? 'bg-white font-semibold text-black'
							: 'border border-white/20 text-white/80 hover:border-white/50'}"
					>
						{type}
					</button>
				{/each}
			</div>
		</div>

		<!-- Sub-Controls: Sort By & Items Per Page -->
		<div
			class="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-white/60"
		>
			<div class="flex items-center gap-2">
				<span>Sort by:</span>
				<select
					bind:value={sortBy}
					class="cursor-pointer rounded-lg border border-white/20 bg-neutral-950 px-3 py-1.5 text-xs text-white focus:border-white focus:outline-none"
				>
					<option value="recommended">Recommended</option>
					<option value="price-asc">Price: Low to High</option>
					<option value="price-desc">Price: High to Low</option>
					<option value="duration-asc">Duration: Shortest</option>
					<option value="duration-desc">Duration: Longest</option>
				</select>
			</div>

			<div class="flex items-center gap-6">
				<!-- Per Page Selector -->
				<div class="flex items-center gap-2">
					<span>Per page:</span>
					<div class="flex gap-1">
						{#each itemsPerPageOptions as option (option)}
							<button
								type="button"
								onclick={() => (itemsPerPage = option)}
								class="rounded-md px-2.5 py-1 text-xs font-semibold transition-all {itemsPerPage ===
								option
									? 'bg-white text-black'
									: 'border border-white/20 bg-neutral-950 text-white/60 hover:text-white'}"
							>
								{option}
							</button>
						{/each}
					</div>
				</div>

				<!-- Clear Filters Link -->
				{#if searchQuery || selectedType !== 'All' || sortBy !== 'recommended'}
					<button
						type="button"
						onclick={resetFilters}
						class="text-xs text-white/60 underline transition-colors hover:text-white"
					>
						Reset All
					</button>
				{/if}
			</div>
		</div>
	</section>

	<!-- Package Grid & Results Section -->
	<section bind:this={packageGridRef} class="space-y-12 px-8 py-20 md:px-28">
		<!-- Summary Header -->
		<div
			class="flex flex-col justify-between gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center"
		>
			<div>
				<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
					- Curated Experiences
				</p>
				<h2 class="mt-1 text-3xl font-bold">
					Explore Packages
					{#if searchQuery}
						<span class="text-base font-normal text-white/60">matching "{searchQuery}"</span>
					{/if}
				</h2>
			</div>

			<div class="text-sm text-white/60">
				Showing <strong class="text-white">{startIndex}–{endIndex}</strong> of
				<strong class="text-white">{filteredPackages.length}</strong> packages
			</div>
		</div>

		{#if filteredPackages.length === 0}
			<!-- Empty State -->
			<div class="space-y-4 py-20 text-center">
				<div
					class="mx-auto flex size-12 items-center justify-center rounded-full border border-white/20 text-white/60"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.75"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-white">No tour packages found</h3>
				<p class="mx-auto max-w-md text-sm font-light text-white/60">
					We couldn't find any packages matching <strong class="text-white">"{searchQuery}"</strong
					>. Try checking your spelling or clearing filters.
				</p>
				<button
					type="button"
					onclick={resetFilters}
					class="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-white/90"
				>
					Reset All Filters
				</button>
			</div>
		{:else}
			<!-- Editorial Package Grid (Minimalist & Breathable) -->
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
				{#each paginatedPackages as pkg (pkg.id)}
					<article class="group flex flex-col justify-between space-y-5">
						<!-- Image Container -->
						<a
							href={`/packages/${pkg.slug}`}
							class="relative block aspect-16/10 overflow-hidden rounded-2xl"
						>
							<img
								src={pkg.heroImage}
								alt={pkg.title}
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
									{pkg.tourType}
								</span>
								<span
									class="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
								>
									{pkg.duration}
								</span>
							</div>

							<div
								class="absolute right-4 bottom-4 rounded-xl bg-white px-3.5 py-1 text-xs font-bold text-black"
							>
								From ${pkg.priceFrom}
								{pkg.currency}
							</div>
						</a>

						<!-- Typography & Details -->
						<div class="space-y-3">
							<h3
								class="text-2xl leading-tight font-bold text-white transition-colors group-hover:text-white/80"
							>
								<a href={`/packages/${pkg.slug}`}>{pkg.title}</a>
							</h3>
							<p class="line-clamp-2 text-sm leading-relaxed font-light text-white/70">
								{pkg.overview}
							</p>

							<!-- Highlights inline tags -->
							<div class="flex flex-wrap gap-1.5 pt-1">
								{#each pkg.whatTheyWillSee.slice(0, 3) as item (item.id)}
									<span class="rounded-md border border-white/10 px-2 py-0.5 text-xs text-white/50">
										{item.title}
									</span>
								{/each}
								{#if pkg.whatTheyWillSee.length > 3}
									<span class="py-0.5 text-xs text-white/40">
										+{pkg.whatTheyWillSee.length - 3} more
									</span>
								{/if}
							</div>
						</div>

						<!-- Action Link -->
						<div class="flex items-center justify-between border-t border-white/10 pt-4 text-xs">
							<span class="text-white/50">{pkg.addons.length} Add-ons</span>
							<a
								href={`/packages/${pkg.slug}`}
								class="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/70"
							>
								View Details
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
					</article>
				{/each}
			</div>

			<!-- Pagination Controls -->
			{#if totalPages > 1}
				<nav
					aria-label="Pagination"
					class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-12 sm:flex-row"
				>
					<div class="text-xs text-white/60">
						Page <strong class="text-white">{currentPage}</strong> of
						<strong class="text-white">{totalPages}</strong>
					</div>

					<div class="flex items-center gap-2">
						<!-- Previous Page Button -->
						<button
							type="button"
							disabled={currentPage === 1}
							onclick={() => setPage(currentPage - 1)}
							class="flex items-center gap-1 rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-all hover:enabled:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
						>
							Previous
						</button>

						<!-- Page Numbers -->
						<div class="flex gap-1">
							{#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum (pageNum)}
								<button
									type="button"
									onclick={() => setPage(pageNum)}
									class="flex size-8 items-center justify-center rounded-xl text-xs font-semibold transition-all {currentPage ===
									pageNum
										? 'bg-white font-bold text-black'
										: 'border border-white/20 text-white/70 hover:bg-white/10'}"
								>
									{pageNum}
								</button>
							{/each}
						</div>

						<!-- Next Page Button -->
						<button
							type="button"
							disabled={currentPage === totalPages}
							onclick={() => setPage(currentPage + 1)}
							class="flex items-center gap-1 rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-all hover:enabled:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
						>
							Next
						</button>
					</div>
				</nav>
			{/if}
		{/if}
	</section>

	<!-- Why Book With Us (Editorial Open 3-Column Layout) -->
	<section class="space-y-16 border-t border-white/10 px-8 py-24 md:px-28">
		<div>
			<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
				- The Surya Bali Standard
			</p>
			<h2 class="mt-2 text-4xl font-bold md:text-5xl">Why Travel With Us</h2>
		</div>

		<div class="grid grid-cols-1 gap-16 md:grid-cols-3">
			<div class="space-y-3 border-t border-white/20 pt-6">
				<span class="font-mono text-xs font-bold tracking-widest text-white/40">01</span>
				<h3 class="text-2xl font-semibold text-white">Personal Driver & Air-Con Vehicle</h3>
				<p class="text-sm leading-relaxed font-light text-white/70">
					Travel in complete comfort with dedicated local driver-guides focused exclusively on your
					group.
				</p>
			</div>

			<div class="space-y-3 border-t border-white/20 pt-6">
				<span class="font-mono text-xs font-bold tracking-widest text-white/40">02</span>
				<h3 class="text-2xl font-semibold text-white">Tailored Experience Packages</h3>
				<p class="text-sm leading-relaxed font-light text-white/70">
					Customize your journey with jungle swings, photography, VIP boat tickets, or seafood
					dinners.
				</p>
			</div>

			<div class="space-y-3 border-t border-white/20 pt-6">
				<span class="font-mono text-xs font-bold tracking-widest text-white/40">03</span>
				<h3 class="text-2xl font-semibold text-white">No Hidden Fees & Clear Rates</h3>
				<p class="text-sm leading-relaxed font-light text-white/70">
					All entrance fees, toll tickets, and bottled water options clearly detailed before you
					book.
				</p>
			</div>
		</div>
	</section>
</main>

<FooterBlock />
