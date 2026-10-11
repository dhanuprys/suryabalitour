<script lang="ts">
	import { HeaderBlock, FooterBlock } from '#lib/components/blocks';
	import { tourPackages } from '#lib/data';
	import { generateBreadcrumbSchema, SITE_URL } from '#lib/data/seo';
	import { trackTourList, trackSearch } from '#lib/analytics';

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: 'Home', url: '/' },
		{ name: 'Packages', url: '/packages' }
	]);

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

	// Track catalog category views (GA4 view_item_list)
	$effect(() => {
		trackTourList(selectedType, filteredPackages.length);
	});

	// Track catalog searches (GA4 search, debounced)
	$effect(() => {
		const query = searchQuery.trim();
		if (query.length >= 3) {
			const timer = setTimeout(() => {
				trackSearch(query, filteredPackages.length);
			}, 600);
			return () => clearTimeout(timer);
		}
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
	<title>Private Bali Tour Packages & Day Charters | Surya Bali Tour</title>
	<meta
		name="description"
		content="Discover private full-day Bali tour packages from $50–$65/car. Ubud waterfalls, Nusa Penida, Ulun Danu, Uluwatu sunset & volcano treks with dedicated local drivers. Free 24h cancellation."
	/>
	<link rel="canonical" href="{SITE_URL}/packages" />
	<meta property="og:title" content="Private Bali Tour Packages & Day Charters | Surya Bali Tour" />
	<meta
		property="og:description"
		content="Explore private full-day Bali tours with dedicated local drivers. Transparent pricing per vehicle, fuel included, zero upfront deposit, pay cash on the day."
	/>
	<meta property="og:url" content="{SITE_URL}/packages" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/spsms1n0/image/upload/v1791717377/thumbnail-suryabalitour.png"
	/>
	<meta
		name="twitter:title"
		content="Private Bali Tour Packages & Day Charters | Surya Bali Tour"
	/>
	<meta
		name="twitter:description"
		content="Explore private full-day Bali tours with dedicated local drivers. Transparent pricing per vehicle, fuel included, free cancellation."
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/spsms1n0/image/upload/v1791717377/thumbnail-suryabalitour.png"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
</svelte:head>

<HeaderBlock />

<main class="min-h-screen bg-black text-white">
	<!-- Hero Banner -->
	<section
		class="relative flex h-[55vh] min-h-[440px] w-full items-center justify-center bg-black px-6 sm:h-[60vh] sm:min-h-[480px] sm:px-12 md:px-16 lg:px-24"
	>
		<img
			alt="Tour Packages Banner"
			class="absolute inset-0 h-full w-full object-cover opacity-30"
			src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

		<div class="relative z-10 mx-auto max-w-4xl space-y-4 pt-16 text-center">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
				Tour Packages
			</h1>
			<p
				class="mx-auto max-w-2xl text-base leading-relaxed font-light text-white/80 sm:text-lg md:text-xl"
			>
				Discover handcrafted itineraries guided by local Balinese experts. From sacred temples to
				pristine hidden waterfalls and outer islands.
			</p>

			<!-- Trust & Value Assurance Bar (CRO) -->
			<div
				class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium tracking-wider text-white/70 uppercase"
			>
				<span class="inline-flex items-center gap-2">
					<span class="size-1.5 rounded-full bg-emerald-400"></span>
					10h Private Car & Driver
				</span>
				<span class="inline-flex items-center gap-2">
					<span class="size-1.5 rounded-full bg-emerald-400"></span>
					Fuel & Parking Included
				</span>
				<span class="inline-flex items-center gap-2">
					<span class="size-1.5 rounded-full bg-emerald-400"></span>
					Free Cancellation up to 24h
				</span>
				<span class="inline-flex items-center gap-2">
					<span class="size-1.5 rounded-full bg-emerald-400"></span>
					Pay Cash on Tour Day
				</span>
			</div>
		</div>
	</section>

	<!-- Minimalist Filter & Search Controls (Seamless Inline Bar) -->
	<section class="border-b border-white/10 px-6 py-6 sm:px-12 sm:py-8 md:px-16 lg:px-24">
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
						class="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
						aria-label="Clear Search"
					>
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
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				{/if}
			</div>

			<!-- Tour Type Filter Buttons -->
			<div class="flex flex-wrap items-center gap-2">
				{#each tourTypes as type (type)}
					<button
						type="button"
						onclick={() => (selectedType = type)}
						class="min-h-[38px] rounded-xl px-4 py-2 text-xs font-medium transition-all {selectedType ===
						type
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
	<section
		bind:this={packageGridRef}
		class="space-y-12 px-6 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-24"
	>
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
								{#each pkg.whatTheyWillSee.slice(0, 3) as item, idx (`${item.id}-${idx}`)}
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
	<section
		class="space-y-12 border-t border-white/10 px-6 py-16 sm:space-y-16 sm:px-12 sm:py-24 md:px-16 lg:px-24"
	>
		<div>
			<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
				- The Surya Bali Standard
			</p>
			<h2 class="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">Why Travel With Us</h2>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
			<div class="space-y-3 border-t border-white/20 pt-6">
				<span class="font-mono text-xs font-bold tracking-widest text-white/40">01</span>
				<h3 class="text-xl font-semibold text-white sm:text-2xl">
					Personal Driver & Air-Con Vehicle
				</h3>
				<p class="text-xs leading-relaxed font-light text-white/70 sm:text-sm">
					Travel in complete comfort with dedicated local driver-guides focused exclusively on your
					group.
				</p>
			</div>

			<div class="space-y-3 border-t border-white/20 pt-6">
				<span class="font-mono text-xs font-bold tracking-widest text-white/40">02</span>
				<h3 class="text-xl font-semibold text-white sm:text-2xl">Tailored Experience Packages</h3>
				<p class="text-xs leading-relaxed font-light text-white/70 sm:text-sm">
					Customize your journey with jungle swings, photography, VIP boat tickets, or seafood
					dinners.
				</p>
			</div>

			<div class="space-y-3 border-t border-white/20 pt-6">
				<span class="font-mono text-xs font-bold tracking-widest text-white/40">03</span>
				<h3 class="text-xl font-semibold text-white sm:text-2xl">No Hidden Fees & Clear Rates</h3>
				<p class="text-xs leading-relaxed font-light text-white/70 sm:text-sm">
					All entrance fees, toll tickets, and bottled water options clearly detailed before you
					book.
				</p>
			</div>
		</div>
	</section>
</main>

<FooterBlock />
