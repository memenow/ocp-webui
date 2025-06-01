<script lang="ts">
	import type { Post } from '$lib/types/ocp';
	import { AccessLevel } from '$lib/types/ocp';
	import { Calendar, ExternalLink, FileText, Globe, Lock, Users } from 'lucide-svelte';

	// Mock data for demonstration
	let posts: Post[] = [
		{
			id: '0x1111111111111111',
			creatorId: '0x1234567890abcdef',
			url: 'https://example.com/post1',
			description: 'Complete guide to blockchain development with Sui - Learn the fundamentals and build your first dApp',
			accessLevel: AccessLevel.PUBLIC,
			owner: '0x1234567890abcdef'
		},
		{
			id: '0x2222222222222222',
			creatorId: '0x2345678901bcdef0',
			url: 'https://example.com/post2',
			description: 'Exclusive NFT collection preview - Early access for subscribers only',
			accessLevel: AccessLevel.SUBSCRIBER,
			owner: '0x2345678901bcdef0'
		},
		{
			id: '0x3333333333333333',
			creatorId: '0x3456789012cdef01',
			url: 'https://example.com/post3',
			description: 'Premium music production masterclass - Advanced techniques for members',
			accessLevel: AccessLevel.MEMBER,
			owner: '0x3456789012cdef01'
		},
		{
			id: '0x4444444444444444',
			creatorId: '0x1234567890abcdef',
			url: 'https://example.com/post4',
			description: 'Weekly market analysis and trading insights - Free for everyone',
			accessLevel: AccessLevel.PUBLIC,
			owner: '0x1234567890abcdef'
		}
	];

	function formatAddress(address: string): string {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	}

	function getAccessLevelInfo(level: AccessLevel) {
		switch (level) {
			case AccessLevel.PUBLIC:
				return {
					label: 'Public',
					icon: Globe,
					color: 'text-green-600 dark:text-green-400',
					bgColor: 'bg-green-100 dark:bg-green-900',
					description: 'Free for everyone'
				};
			case AccessLevel.SUBSCRIBER:
				return {
					label: 'Subscriber',
					icon: Users,
					color: 'text-blue-600 dark:text-blue-400',
					bgColor: 'bg-blue-100 dark:bg-blue-900',
					description: 'Requires subscription'
				};
			case AccessLevel.MEMBER:
				return {
					label: 'Member',
					icon: Lock,
					color: 'text-purple-600 dark:text-purple-400',
					bgColor: 'bg-purple-100 dark:bg-purple-900',
					description: 'Premium members only'
				};
			default:
				return {
					label: 'Unknown',
					icon: FileText,
					color: 'text-gray-600 dark:text-gray-400',
					bgColor: 'bg-gray-100 dark:bg-gray-900',
					description: 'Unknown access level'
				};
		}
	}

	function canAccess(level: AccessLevel): boolean {
		// In a real app, this would check user's subscription/membership status
		return level === AccessLevel.PUBLIC;
	}

	let selectedFilter = 'all';
	$: filteredPosts = posts.filter(post => {
		if (selectedFilter === 'all') return true;
		if (selectedFilter === 'public') return post.accessLevel === AccessLevel.PUBLIC;
		if (selectedFilter === 'subscriber') return post.accessLevel === AccessLevel.SUBSCRIBER;
		if (selectedFilter === 'member') return post.accessLevel === AccessLevel.MEMBER;
		return true;
	});
</script>

<svelte:head>
	<title>Posts - Open Content Protocol</title>
	<meta name="description" content="Browse exclusive content from creators on the Open Content Protocol platform" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			Browse Content
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
			Discover exclusive content from talented creators. Access free posts or subscribe for premium content.
		</p>
	</div>

	<!-- Filters -->
	<div class="mb-8">
		<div class="flex flex-wrap gap-2 justify-center">
			<button
				class="px-4 py-2 rounded-lg font-medium transition-colors {selectedFilter === 'all' 
					? 'bg-blue-600 text-white' 
					: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => selectedFilter = 'all'}
			>
				All Posts
			</button>
			<button
				class="px-4 py-2 rounded-lg font-medium transition-colors {selectedFilter === 'public' 
					? 'bg-green-600 text-white' 
					: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => selectedFilter = 'public'}
			>
				<Globe size={16} class="inline mr-1" />
				Public
			</button>
			<button
				class="px-4 py-2 rounded-lg font-medium transition-colors {selectedFilter === 'subscriber' 
					? 'bg-blue-600 text-white' 
					: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => selectedFilter = 'subscriber'}
			>
				<Users size={16} class="inline mr-1" />
				Subscriber
			</button>
			<button
				class="px-4 py-2 rounded-lg font-medium transition-colors {selectedFilter === 'member' 
					? 'bg-purple-600 text-white' 
					: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => selectedFilter = 'member'}
			>
				<Lock size={16} class="inline mr-1" />
				Member
			</button>
		</div>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{posts.length}</div>
			<div class="text-gray-600 dark:text-gray-300">Total Posts</div>
		</div>
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
				{posts.filter(p => p.accessLevel === AccessLevel.PUBLIC).length}
			</div>
			<div class="text-gray-600 dark:text-gray-300">Public Posts</div>
		</div>
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
				{posts.filter(p => p.accessLevel === AccessLevel.SUBSCRIBER).length}
			</div>
			<div class="text-gray-600 dark:text-gray-300">Subscriber Posts</div>
		</div>
		<div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
			<div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
				{posts.filter(p => p.accessLevel === AccessLevel.MEMBER).length}
			</div>
			<div class="text-gray-600 dark:text-gray-300">Member Posts</div>
		</div>
	</div>

	<!-- Posts Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each filteredPosts as post}
			{@const accessInfo = getAccessLevelInfo(post.accessLevel)}
			{@const hasAccess = canAccess(post.accessLevel)}
			<div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
				<!-- Post Header -->
				<div class="p-6">
					<div class="flex items-start justify-between mb-4">
						<div class="flex-1">
							<div class="flex items-center space-x-2 mb-2">
								<FileText size={20} class="text-gray-400 dark:text-gray-600" />
								<span class="text-sm text-gray-500 dark:text-gray-400 font-mono">
									{formatAddress(post.id)}
								</span>
							</div>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								by {formatAddress(post.creatorId)}
							</p>
						</div>
						<div class="flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium {accessInfo.bgColor} {accessInfo.color}">
							<svelte:component this={accessInfo.icon} size={12} />
							<span>{accessInfo.label}</span>
						</div>
					</div>

					<p class="text-gray-900 dark:text-white mb-4 line-clamp-3">
						{post.description}
					</p>

					<div class="text-xs text-gray-500 dark:text-gray-400 mb-4">
						{accessInfo.description}
					</div>

					<!-- Actions -->
					<div class="flex space-x-3">
						{#if hasAccess}
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
							>
								View Content
							</a>
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
							>
								<ExternalLink size={16} />
							</a>
						{:else}
							<button class="flex-1 bg-gray-400 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed">
								{post.accessLevel === AccessLevel.SUBSCRIBER ? 'Subscribe Required' : 'Membership Required'}
							</button>
							<button class="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
								{post.accessLevel === AccessLevel.SUBSCRIBER ? 'Subscribe' : 'Join'}
							</button>
						{/if}
					</div>
				</div>

				<!-- Post Footer -->
				<div class="bg-gray-50 dark:bg-gray-700 px-6 py-4">
					<div class="flex justify-between text-sm text-gray-600 dark:text-gray-300">
						<div class="flex items-center space-x-1">
							<Calendar size={14} />
							<span>2 days ago</span>
						</div>
						<div class="flex items-center space-x-1">
							<Users size={14} />
							<span>42 views</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Empty State -->
	{#if filteredPosts.length === 0}
		<div class="text-center py-12">
			<FileText class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" />
			<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No posts found</h3>
			<p class="text-gray-600 dark:text-gray-300">
				Try adjusting your filters or check back later for new content.
			</p>
		</div>
	{/if}

	<!-- Call to Action -->
	<div class="mt-16 text-center">
		<div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white">
			<h2 class="text-2xl font-bold mb-4">Want Access to Premium Content?</h2>
			<p class="text-purple-100 mb-6 max-w-2xl mx-auto">
				Subscribe to your favorite creators or become a member to unlock exclusive content and support the creators you love.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
					Browse Creators
				</button>
				<button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
					Learn More
				</button>
			</div>
		</div>
	</div>
</div>
