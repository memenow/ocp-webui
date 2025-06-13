<script lang="ts">
	import type { Creator } from '$lib/types/ocp';
	import { Calendar, ExternalLink, Star, Users } from 'lucide-svelte';

	// Mock data for demonstration
	let creators: Creator[] = [
		{
			id: '0x1234567890abcdef',
			url: 'https://example.com/creator1',
			description: 'Digital artist creating stunning NFT collections and tutorials',
			avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
			memberPrices: [10, 25, 50],
			owner: '0x1234567890abcdef'
		},
		{
			id: '0x2345678901bcdef0',
			url: 'https://example.com/creator2',
			description: 'Tech educator sharing blockchain development insights',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
			memberPrices: [15, 30],
			owner: '0x2345678901bcdef0'
		},
		{
			id: '0x3456789012cdef01',
			url: 'https://example.com/creator3',
			description: 'Music producer and composer creating exclusive beats',
			avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
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
	<meta name="description" content="Discover talented creators on the Open Content Protocol platform" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			Discover Creators
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
			Explore talented creators sharing exclusive content on the decentralized web. Support your favorites and access premium content.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{creators.length}</div>
			<div class="text-gray-600 dark:text-gray-300">Active Creators</div>
		</div>
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">150+</div>
			<div class="text-gray-600 dark:text-gray-300">Total Posts</div>
		</div>
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
			<div class="text-gray-600 dark:text-gray-300">Active Subscribers</div>
		</div>
	</div>

	<!-- Creators Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each creators as creator (creator.id)}
			<div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
				<!-- Creator Header -->
				<div class="p-6">
					<div class="flex items-center space-x-4 mb-4">
						<img
							src={creator.avatar}
							alt="Creator avatar"
							class="w-16 h-16 rounded-full object-cover"
						/>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Creator {formatAddress(creator.owner)}
							</h3>
							<p class="text-sm text-gray-500 dark:text-gray-400 font-mono">
								{formatAddress(creator.id)}
							</p>
						</div>
					</div>

					<p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
						{creator.description}
					</p>

					<!-- Membership Tiers -->
					<div class="mb-4">
						<h4 class="text-sm font-medium text-gray-900 dark:text-white mb-2">Membership Tiers</h4>
						<div class="flex flex-wrap gap-2">
							{#each creator.memberPrices as price, index (index)}
								<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
									Tier {index + 1}: {formatPrice(price)}
								</span>
							{/each}
						</div>
					</div>

					<!-- Actions -->
					<div class="flex space-x-3">
						<button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
							Subscribe
						</button>
						<a
							href={creator.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
						>
							<ExternalLink size={16} />
						</a>
					</div>
				</div>

				<!-- Creator Stats -->
				<div class="bg-gray-50 dark:bg-gray-700 px-6 py-4">
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
		<div class="text-center py-12">
			<Users class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" />
			<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No creators found</h3>
			<p class="text-gray-600 dark:text-gray-300">
				Be the first to create content on the platform!
			</p>
		</div>
	{/if}

	<!-- Call to Action -->
	<div class="mt-16 text-center">
		<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
			<h2 class="text-2xl font-bold mb-4">Become a Creator</h2>
			<p class="text-blue-100 mb-6 max-w-2xl mx-auto">
				Join our platform and start monetizing your content. Connect with your audience and build a sustainable creator economy.
			</p>
			<button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Start Creating
			</button>
		</div>
	</div>
</div>
