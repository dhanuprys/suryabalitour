<script lang="ts">
	import { newsArticles } from '#lib/data';
	import { ClockIcon, UserIcon } from '@lucide/svelte';
</script>

<section class="space-y-10 px-6 pt-16 sm:space-y-12 sm:px-12 sm:pt-24 md:px-16 lg:px-24">
	<div class="mx-auto flex max-w-2xl flex-col items-center space-y-3 text-center">
		<span class="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
			- Travel Stories & News
		</span>
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
			Latest Destination News
		</h2>
		<p class="text-sm font-light text-neutral-600 sm:text-base">
			Stay updated on local island updates, cultural festivities, seasonal weather, and travel tips
			from our local tour experts.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each newsArticles as article (article.id)}
			<article class="flex flex-col overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-1">
				<div class="aspect-video w-full overflow-hidden">
					<img
						alt={article.title}
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						src={article.image}
					/>
				</div>
				<div class="flex flex-1 flex-col justify-between space-y-3 bg-black p-6 text-white">
					<div class="space-y-2">
						<h3 class="text-lg font-semibold leading-snug sm:text-xl">{article.title}</h3>
						<p class="line-clamp-2 text-xs font-light leading-relaxed text-white/70 sm:text-sm">
							{article.excerpt}
						</p>
					</div>
					<div
						class="flex items-center gap-4 border-t border-white/10 pt-4 text-xs font-light text-white/60"
					>
						<div class="flex items-center gap-1.5">
							<ClockIcon class="size-3.5" />
							<span>{article.date}</span>
						</div>
						<div class="flex items-center gap-1.5">
							<UserIcon class="size-3.5" />
							<span>{article.author}</span>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

