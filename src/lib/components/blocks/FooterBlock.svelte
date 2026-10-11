<script lang="ts">
	import BrandLogo from '#lib/assets/images/branding/logo.webp';
	import scenicBaliLandscape from '#lib/assets/images/banners/scenic-bali-landscape.webp';
	import { footerNavSections, socialLinks } from '#lib/data';
	import { trackWhatsAppClick, trackEvent } from '#lib/analytics';
</script>

<footer>
	<!-- Social Community & Stay Connected Section -->
	<section
		class="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 text-white sm:px-12 sm:py-24 md:px-16 lg:px-24"
	>
		<!-- Atmospheric Background -->
		<img
			alt="Scenic Bali Landscape"
			class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-30"
			src={scenicBaliLandscape}
		/>
		<div
			class="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/80 via-black/40 to-black"
		></div>

		<div class="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
			<div class="mx-auto max-w-2xl space-y-3">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
					Connect With Surya Bali
				</h2>
				<p class="text-sm leading-relaxed font-light text-white/70 sm:text-base">
					Follow our daily private journeys across the island. See authentic guest photos, discover
					hidden Bali gems, or chat directly with our local concierge.
				</p>
			</div>

			<!-- Refined Social Cards Grid -->
			<div class="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
				{#each socialLinks as social (social.name)}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						onclick={() => {
							if (social.name === 'WhatsApp') {
								trackWhatsAppClick('footer_social_card');
							} else {
								trackEvent('social_click', { network: social.name, location: 'footer' });
							}
						}}
						class="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
					>
						<div
							class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-black"
						>
							<svg
								class="size-5 fill-current"
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>{social.name}</title>
								<path d={social.iconPath} />
							</svg>
						</div>

						<div class="min-w-0 flex-1 space-y-0.5">
							<div class="flex items-center justify-between">
								<h3 class="text-sm font-semibold text-white">
									{social.name}
								</h3>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-3.5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<line x1="7" y1="17" x2="17" y2="7" />
									<polyline points="7 7 17 7 17 17" />
								</svg>
							</div>
							<p class="truncate font-mono text-xs text-white/60">
								{social.handle}
							</p>
							<p class="truncate text-[11px] font-light text-white/40">
								{social.subtitle}
							</p>
						</div>
					</a>
				{/each}
			</div>

			<!-- Direct Handle Hashtag Callout -->
			<div class="border-t border-white/10 pt-6 text-xs text-white/50">
				Tag your island memories with <span class="font-mono text-white/80">#SuryaBaliTour</span> to be
				featured on our official channel.
			</div>
		</div>
	</section>
	<div
		class="flex flex-col gap-12 border-t border-white/10 bg-black px-6 py-16 sm:px-12 md:px-20 md:py-24 lg:flex-row lg:gap-16 lg:px-32"
	>
		<div class="max-w-sm space-y-4">
			<a href="/">
				<img
					alt="Surya Bali Tour Logo"
					src={BrandLogo}
					class="w-[200px] brightness-0 invert-100 sm:w-[240px]"
				/>
			</a>
			<p class="pt-4 text-sm leading-relaxed font-light text-white/60">
				Authentic private tour journeys crafted with Balinese warmth, local expertise, and
				transparent per-vehicle pricing.
			</p>
		</div>
		<div class="grid flex-1 grid-cols-1 gap-8 text-white sm:grid-cols-3">
			{#each footerNavSections as section, idx (idx)}
				<div>
					<p class="text-xs font-semibold tracking-widest text-white/50 uppercase">
						{section.title}
					</p>
					<ul class="space-y-2.5 pt-4 text-sm font-light text-white/80">
						{#each section.links as link (link.label)}
							<li>
								{#if link.href}
									<a
										href={link.href}
										onclick={() => {
											if (
												link.label.toLowerCase().includes('whatsapp') ||
												link.href?.includes('wa.me')
											) {
												trackWhatsAppClick('footer_nav_link');
											}
										}}
										class="transition-colors hover:text-white"
									>
										{link.label}
									</a>
								{:else}
									<span>{link.label}</span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<div
		class="flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-black px-6 py-6 text-xs text-white/50 sm:flex-row sm:px-12 md:px-20 lg:px-32"
	>
		<p>Copyright &copy; 2026 Surya Bali Tour. All rights reserved</p>
		<div>Powered by DedanLabs</div>
	</div>
</footer>
