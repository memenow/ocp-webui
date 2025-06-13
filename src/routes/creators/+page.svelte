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
		<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Discover Creators</h1>
		<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
			Explore talented creators sharing exclusive content on the decentralized web. Support your
			favorites and access premium content.
		</p>
	</div>

	<!-- Stats -->
	<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">{creators.length}</div>
			<div class="text-gray-600 dark:text-gray-300">Active Creators</div>
		</div>
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">150+</div>
			<div class="text-gray-600 dark:text-gray-300">Total Posts</div>
		</div>
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">500+</div>
			<div class="text-gray-600 dark:text-gray-300">Active Subscribers</div>
		</div>
	</div>

	<!-- Creators Grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each creators as creator (creator.id)}
			<div
				class="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
			>
				<!-- Creator Header -->
				<div class="p-6">
					<div class="mb-4 flex items-center space-x-4">
						<img
							src={creator.avatar}
							alt="Creator avatar"
							class="h-16 w-16 rounded-full object-cover"
						/>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Creator {formatAddress(creator.owner)}
							</h3>
							<p class="font-mono text-sm text-gray-500 dark:text-gray-400">
								{formatAddress(creator.id)}
							</p>
						</div>
					</div>

					<p class="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
						{creator.description}
					</p>

					<!-- Membership Tiers -->
					<div class="mb-4">
						<h4 class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Membership Tiers</h4>
						<div class="flex flex-wrap gap-2">
							{#each creator.memberPrices as price, index (index)}
								<span
									class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
								>
									Tier {index + 1}: {formatPrice(price)}
								</span>
							{/each}
						</div>
					</div>

					<!-- Actions -->
					<div class="flex space-x-3">
						<button
							class="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
						>
							Subscribe
						</button>
						<a
							href={creator.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
						>
							<ExternalLink size={16} />
						</a>
					</div>
				</div>

				<!-- Creator Stats -->
				<div class="bg-gray-50 px-6 py-4 dark:bg-gray-700">
					<div class="flex justify-between text-sm">
						<div class="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
							<Users size={14} />
							<span>25 subscribers</span>
						</div>
						<div class="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
							<Star size={14} />
							<span>4.8 rating</span>
						</div>
						<div class="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
							<Calendar size={14} />
							<span>Active</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Empty State -->
	{#if creators.length === 0}
		<div class="py-12 text-center">
			<Users class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-600" />
			<h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">No creators found</h3>
			<p class="text-gray-600 dark:text-gray-300">
				Be the first to create content on the platform!
			</p>
		</div>
	{/if}

	<!-- Call to Action -->
	<div class="mt-16 text-center">
		<div class="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
			<h2 class="mb-4 text-2xl font-bold">Become a Creator</h2>
			<p class="mx-auto mb-6 max-w-2xl text-blue-100">
				Join our platform and start monetizing your content. Connect with your audience and build a
				sustainable creator economy.
			</p>
			<button
				class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
			>
				Start Creating
			</button>
		</div>
	</div>
</div>
