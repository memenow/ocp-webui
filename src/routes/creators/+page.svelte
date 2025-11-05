<script lang="ts">
	import type { Creator } from '$lib/types/ocp';
	import { Calendar, ExternalLink, Star, Users } from 'lucide-svelte';

	// Mock data for demonstration
	let creators: Creator[] = [
		{
			id: '0x1234567890abcdef',
			url: 'https://example.com/creator1',
			description: 'Digital artist creating stunning NFT collections and tutorials',
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
			memberPrices: [10, 25, 50],
			owner: '0x1234567890abcdef'
		},
		{
			id: '0x2345678901bcdef0',
			url: 'https://example.com/creator2',
			description: 'Tech educator sharing blockchain development insights',
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
			memberPrices: [15, 30],
			owner: '0x2345678901bcdef0'
		},
		{
			id: '0x3456789012cdef01',
			url: 'https://example.com/creator3',
			description: 'Music producer and composer creating exclusive beats',
			avatar:
				'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
			memberPrices: [20, 40, 80],
			owner: '0x3456789012cdef01'
		}
	];

	function formatAddress(address: string): string {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	}

	function formatPrice(price: number): string {
		return `${price} SUI`;
	}
</script>

<svelte:head>
	<title>Creators - Open Content Protocol</title>
	<meta
		name="description"
		content="Discover talented creators on the Open Content Protocol platform"
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1 class="glass-text-primary mb-6 text-5xl font-bold">Discover Creators</h1>
		<div class="glass mx-auto max-w-3xl rounded-3xl p-6">
			<p class="text-xl">
				Explore talented creators sharing exclusive content on the decentralized web. Support your
				favorites and access premium content.
			</p>
		</div>
	</div>

	<!-- Stats -->
	<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="glass glass-hover rounded-3xl p-8 text-center">
			<div class="mb-3 text-4xl font-bold text-blue-600 dark:text-blue-400">{creators.length}</div>
			<div class="glass-text-secondary font-semibold">Active Creators</div>
		</div>
		<div class="glass glass-hover rounded-3xl p-8 text-center">
			<div class="mb-3 text-4xl font-bold text-purple-600 dark:text-purple-400">150+</div>
			<div class="glass-text-secondary font-semibold">Total Posts</div>
		</div>
		<div class="glass glass-hover rounded-3xl p-8 text-center">
			<div class="mb-3 text-4xl font-bold text-green-600 dark:text-green-400">500+</div>
			<div class="glass-text-secondary font-semibold">Active Subscribers</div>
		</div>
	</div>

	<!-- Creators Grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each creators as creator (creator.id)}
			<div
				class="glass glass-hover overflow-hidden rounded-3xl"
			>
				<!-- Creator Header -->
				<div class="p-6">
					<div class="mb-5 flex items-center space-x-4">
						<img
							src={creator.avatar}
							alt="Creator avatar"
							class="h-20 w-20 rounded-2xl object-cover ring-4 ring-blue-500/30"
						/>
						<div class="flex-1">
							<h3 class="glass-text-primary text-lg font-bold">
								Creator {formatAddress(creator.owner)}
							</h3>
							<p class="glass-text-secondary font-mono text-sm">
								{formatAddress(creator.id)}
							</p>
						</div>
					</div>

					<p class="glass-text-secondary mb-5 line-clamp-3">
						{creator.description}
					</p>

					<!-- Membership Tiers -->
					<div class="mb-5">
						<h4 class="glass-text-primary mb-3 text-sm font-bold">Membership Tiers</h4>
						<div class="flex flex-wrap gap-2">
							{#each creator.memberPrices as price, index (index)}
								<span
									class="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-bold text-white shadow-md"
								>
									Tier {index + 1}: {formatPrice(price)}
								</span>
							{/each}
						</div>
					</div>

					<!-- Actions -->
					<div class="flex space-x-3">
						<button
							class="glass-hover flex-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-bold text-white shadow-lg transition-all"
						>
							Subscribe
						</button>
						<a
							href={creator.url}
							target="_blank"
							rel="noopener noreferrer"
							class="glass glass-text-primary glass-hover flex items-center justify-center rounded-2xl px-4 py-3 transition-all"
						>
							<ExternalLink size={18} />
						</a>
					</div>
				</div>

				<!-- Creator Stats -->
				<div class="border-t border-white/20 px-6 py-4">
					<div class="flex justify-between text-sm">
						<div class="glass-text-secondary flex items-center space-x-2 font-semibold">
							<Users size={16} />
							<span>25</span>
						</div>
						<div class="glass-text-secondary flex items-center space-x-2 font-semibold">
							<Star size={16} />
							<span>4.8</span>
						</div>
						<div class="glass-text-secondary flex items-center space-x-2 font-semibold">
							<Calendar size={16} />
							<span>Active</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Empty State -->
	{#if creators.length === 0}
		<div class="glass rounded-3xl py-16 text-center">
			<Users class="glass-text-secondary mx-auto mb-4 h-16 w-16" />
			<h3 class="glass-text-primary mb-2 text-xl font-bold">No creators found</h3>
			<p class="glass-text-secondary">
				Be the first to create content on the platform!
			</p>
		</div>
	{/if}

	<!-- Call to Action -->
	<div class="mt-16 text-center">
		<div class="glass-strong relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-12 text-white shadow-2xl">
			<!-- Decorative Elements -->
			<div class="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
			<div class="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

			<div class="relative">
				<h2 class="mb-5 text-3xl font-bold">Become a Creator</h2>
				<p class="mx-auto mb-8 max-w-2xl text-lg">
					Join our platform and start monetizing your content. Connect with your audience and build a
					sustainable creator economy.
				</p>
				<button
					class="glass-hover rounded-2xl bg-white px-10 py-4 text-lg font-bold text-purple-600 shadow-xl transition-all"
				>
					Start Creating
				</button>
			</div>
		</div>
	</div>
</div>
