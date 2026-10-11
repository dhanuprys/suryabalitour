<script lang="ts">
	import BrandLogo from '#lib/assets/images/branding/logo.png';
	import { footerNavSections, socialLinks } from '#lib/data';
</script>

<footer>
	<div class="relative flex h-[60vh] items-center justify-center bg-black text-white">
		<img
			alt="footer"
			class="absolute size-full h-full w-full object-cover opacity-10"
			src="https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		/>
		<div class="relative z-10 flex flex-col items-center gap-y-4">
			<h2 class="max-w-3xl text-center text-5xl font-semibold">Connect with us</h2>
			<p class="text-center">
				Get access to everything and latest information through our socials.
			</p>
			<ul class="flex gap-4 md:gap-6">
				{#each socialLinks as social (social.name)}
					<li>
						<a
							href={social.href}
							rel="external"
							class="flex size-10 items-center justify-center rounded-full transition-opacity hover:opacity-80"
							aria-label={social.name}
						>
							<svg
								class="size-8 fill-current"
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>{social.name}</title>
								<path d={social.iconPath} />
							</svg>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex gap-16 bg-black px-32 py-24">
		<div class="pr-8">
			<img alt="Brand Logo" src={BrandLogo} class="w-[280px]" />
		</div>
		<div class="grid flex-1 grid-cols-3 text-white">
			{#each footerNavSections as section, idx (idx)}
				<div>
					<strong>{section.title}</strong>
					<ul class="space-y-2 pt-4 text-white/80">
						{#each section.links as link (link.label)}
							<li>{link.label}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<div
		class="flex items-center justify-between border-t border-t-mist-900 bg-black px-32 py-4 text-white"
	>
		<p>Copyright &copy; 2026 Surya Bali Tour. All rights reserved</p>
		<div class="opacity-70">Powered by DedanLabs</div>
	</div>
</footer>
