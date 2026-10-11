<script lang="ts">
	import { newsArticles } from '#lib/data';
	import { ClockIcon, UserIcon } from '@lucide/svelte';
</script>

<section class="space-y-12 px-28 pt-28">
	<div class="flex flex-col items-center space-y-4">
		<span class="text-lg">Explore News</span>
		<h2 class="text-6xl font-semibold">Latest Destination News</h2>
		<p class="max-w-xl text-center">
			Find your way to the world's greatest wonders. Browser maps, explore destinations and uncover
			must-see landmarks.
		</p>
	</div>

	<div class="grid grid-cols-3 gap-6">
		{#each newsArticles as article (article.id)}
			<div>
				<img alt="banner" class="aspect-video rounded-2xl object-cover" src={article.image} />
				<div class="-mt-5 space-y-2 rounded-b-2xl bg-black p-4 pt-10 text-white">
					<h6 class="text-xl">{article.title}</h6>
					<p class="text-sm text-gray-200">
						{article.excerpt}
					</p>
					<div class="mt-4 flex items-center gap-3">
						<div class="flex items-center gap-1 text-sm text-gray-300">
							<ClockIcon class="size-4" />
							{article.date}
						</div>
						<div class="flex items-center gap-1 text-sm text-gray-300">
							<UserIcon class="size-4" />
							{article.author}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
