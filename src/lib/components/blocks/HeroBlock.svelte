<script lang="ts">
	import { mediaPartners } from '#lib/data';
</script>

<section class="relative h-screen w-full bg-black">
	<img
		class="h-full w-full object-cover"
		alt="Banner"
		src="https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>
	<div class="absolute top-0 left-0 flex h-screen w-screen items-center px-28">
		<div class="mx-auto max-w-[80vw] min-w-[80vw] space-y-6 font-bold">
			<h2 class="text-8xl text-white">Discover<br />Bali Wonders</h2>
			<p class="max-w-2xl font-light text-white">
				Uncover hidden gems, taste authentic flavors, and create stories you’ll tell for a lifetime.
				Your next great adventure is just a click away.
			</p>
			<div class="flex items-center gap-4">
				<button class="rounded-xl bg-white px-4 py-2 text-xl font-semibold"
					>Explore Destination</button
				>
				<button class="rounded-xl border border-white px-4 py-2 text-xl font-semibold text-white"
					>Available Events</button
				>
			</div>
		</div>
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 pb-16">
			<p class="pb-4 text-center text-white">Media Partner</p>
			<ul class="inline-flex items-center gap-8 brightness-0 invert-100">
				{#each mediaPartners as partner (partner.id)}
					<li><img class={partner.heightClass} alt={partner.alt} src={partner.logo} /></li>
				{/each}
			</ul>
		</div>
	</div>
</section>
