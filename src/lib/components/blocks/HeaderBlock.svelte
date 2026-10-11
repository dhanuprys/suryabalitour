<script lang="ts">
	import { headerNavItems } from '#lib/data';
	import BrandLogo from '#lib/assets/images/branding/logo.png';
</script>

<header class="absolute top-0 left-0 z-10 flex w-screen items-center gap-16 px-20 py-6 text-white">
	<div
		class="absolute top-0 left-0 h-[110%] w-full bg-linear-to-b from-black/60 to-transparent"
	></div>
	<a href="/">
		<img
			alt="Surya Bali Tour Logo"
			src={BrandLogo}
			class="w-[140px] brightness-0 invert-100 transition-opacity hover:opacity-90"
		/>
	</a>
	<ul class="relative inline-flex gap-12 font-light">
		{#each headerNavItems as item (item.href)}
			<li>
				<a href={item.href} class="transition-colors hover:text-white/80">{item.label}</a>
			</li>
		{/each}
	</ul>
</header>
