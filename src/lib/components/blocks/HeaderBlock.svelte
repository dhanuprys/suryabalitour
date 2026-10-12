<script lang="ts">
	import { headerNavItems, SITE_PHONE_DISPLAY, WHATSAPP_DIRECT_URL } from '#lib/data';
	import BrandLogo from '#lib/assets/images/branding/logo.webp';
	import { trackWhatsAppClick } from '#lib/analytics';

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	$effect(() => {
		if (typeof document !== 'undefined') {
			if (mobileMenuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
		return () => {
			if (typeof document !== 'undefined') {
				document.body.style.overflow = '';
			}
		};
	});
</script>

<header class="absolute top-0 left-0 z-30 w-full text-white">
	<div
		class="pointer-events-none absolute top-0 left-0 h-32 w-full bg-linear-to-b from-black/80 via-black/40 to-transparent"
	></div>

	<div
		class="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16"
	>
		<a href="/" class="z-40 inline-flex items-center" onclick={closeMenu}>
			<img
				alt="Surya Bali Tour Logo"
				src={BrandLogo}
				class="w-[120px] brightness-0 invert-100 transition-opacity hover:opacity-90 sm:w-[140px]"
			/>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:block">
			<ul class="flex items-center gap-10 text-sm font-light tracking-wider uppercase">
				{#each headerNavItems as item (item.href)}
					<li>
						<a
							href={item.href}
							target={item.href.startsWith('http') ? '_blank' : undefined}
							rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
							onclick={() => {
								if (item.href.includes('wa.me')) {
									trackWhatsAppClick('header_nav');
								}
							}}
							class="text-white/90 transition-colors hover:text-white"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Mobile Menu Button -->
		<button
			type="button"
			onclick={toggleMenu}
			class="relative z-40 flex size-11 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white/10 md:hidden"
			aria-label="Toggle navigation menu"
			aria-expanded={mobileMenuOpen}
		>
			{#if mobileMenuOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-5"
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
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="4" y1="6" x2="20" y2="6" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="18" x2="20" y2="18" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Navigation Drawer Overlay -->
	{#if mobileMenuOpen}
		<div
			class="fixed inset-0 z-30 flex flex-col justify-between bg-black/95 px-8 pt-28 pb-12 backdrop-blur-2xl md:hidden"
		>
			<nav class="space-y-6">
				<p class="text-xs font-semibold tracking-widest text-white/40 uppercase">- Menu</p>
				<ul class="space-y-4">
					{#each headerNavItems as item (item.href)}
						<li>
							<a
								href={item.href}
								target={item.href.startsWith('http') ? '_blank' : undefined}
								rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								onclick={() => {
									closeMenu();
									if (item.href.includes('wa.me')) {
										trackWhatsAppClick('header_mobile_drawer');
									}
								}}
								class="block text-3xl font-semibold tracking-tight text-white transition-colors hover:text-white/70"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="space-y-3 border-t border-white/10 pt-6">
				<p class="text-xs tracking-widest text-white/50 uppercase">Private Tour Assistance</p>
				<a
					href={WHATSAPP_DIRECT_URL}
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => trackWhatsAppClick('header_mobile_drawer_phone')}
					class="inline-block text-sm font-light text-white/80 transition-colors hover:text-white"
				>
					Direct WhatsApp: <span class="font-medium text-white underline underline-offset-4"
						>{SITE_PHONE_DISPLAY}</span
					>
				</a>
				<p class="text-xs text-white/40">English-speaking local drivers available 24/7</p>
			</div>
		</div>
	{/if}
</header>
