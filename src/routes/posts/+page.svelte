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
			description:
				'Complete guide to blockchain development with Sui - Learn the fundamentals and build your first dApp',
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
	$: filteredPosts = posts.filter((post) => {
		if (selectedFilter === 'all') return true;
		if (selectedFilter === 'public') return post.accessLevel === AccessLevel.PUBLIC;
		if (selectedFilter === 'subscriber') return post.accessLevel === AccessLevel.SUBSCRIBER;
		if (selectedFilter === 'member') return post.accessLevel === AccessLevel.MEMBER;
		return true;
	});
</script>

<svelte:head>
	<title>Posts - Open Content Protocol</title>
	<meta
		name="description"
		content="Browse exclusive content from creators on the Open Content Protocol platform"
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Browse Content</h1>
		<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
			Discover exclusive content from talented creators. Access free posts or subscribe for premium
			content.
		</p>
	</div>

	<!-- Filters -->
	<div class="mb-8">
		<div class="flex flex-wrap justify-center gap-2">
			<button
				class="rounded-lg px-4 py-2 font-medium transition-colors {selectedFilter === 'all'
					? 'bg-blue-600 text-white'
					: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => (selectedFilter = 'all')}
			>
				All Posts
			</button>
			<button
				class="rounded-lg px-4 py-2 font-medium transition-colors {selectedFilter === 'public'
					? 'bg-green-600 text-white'
					: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => (selectedFilter = 'public')}
			>
				<Globe size={16} class="mr-1 inline" />
				Public
			</button>
			<button
				class="rounded-lg px-4 py-2 font-medium transition-colors {selectedFilter === 'subscriber'
					? 'bg-blue-600 text-white'
					: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => (selectedFilter = 'subscriber')}
			>
				<Users size={16} class="mr-1 inline" />
				Subscriber
			</button>
			<button
				class="rounded-lg px-4 py-2 font-medium transition-colors {selectedFilter === 'member'
					? 'bg-purple-600 text-white'
					: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
				on:click={() => (selectedFilter = 'member')}
			>
				<Lock size={16} class="mr-1 inline" />
				Member
			</button>
		</div>
	</div>

	<!-- Stats -->
	<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-4">
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">{posts.length}</div>
			<div class="text-gray-600 dark:text-gray-300">Total Posts</div>
		</div>
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
				{posts.filter((p) => p.accessLevel === AccessLevel.PUBLIC).length}
			</div>
			<div class="text-gray-600 dark:text-gray-300">Public Posts</div>
		</div>
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
				{posts.filter((p) => p.accessLevel === AccessLevel.SUBSCRIBER).length}
			</div>
			<div class="text-gray-600 dark:text-gray-300">Subscriber Posts</div>
		</div>
		<div class="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-800">
			<div class="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
				{posts.filter((p) => p.accessLevel === AccessLevel.MEMBER).length}
			</div>
			<div class="text-gray-600 dark:text-gray-300">Member Posts</div>
		</div>
	</div>

	<!-- Posts Grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredPosts as post (post.id)}
			{@const accessInfo = getAccessLevelInfo(post.accessLevel)}
			{@const hasAccess = canAccess(post.accessLevel)}
			<div
				class="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
			>
				<!-- Post Header -->
				<div class="p-6">
					<div class="mb-4 flex items-start justify-between">
						<div class="flex-1">
							<div class="mb-2 flex items-center space-x-2">
								<FileText size={20} class="text-gray-400 dark:text-gray-600" />
								<span class="font-mono text-sm text-gray-500 dark:text-gray-400">
									{formatAddress(post.id)}
								</span>
							</div>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								by {formatAddress(post.creatorId)}
							</p>
						</div>
						<div
							class="flex items-center space-x-1 rounded-full px-2.5 py-1 text-xs font-medium {accessInfo.bgColor} {accessInfo.color}"
						>
							<svelte:component this={accessInfo.icon} size={12} />
							<span>{accessInfo.label}</span>
						</div>
					</div>

					<p class="mb-4 line-clamp-3 text-gray-900 dark:text-white">
						{post.description}
					</p>

					<div class="mb-4 text-xs text-gray-500 dark:text-gray-400">
						{accessInfo.description}
					</div>

					<!-- Actions -->
					<div class="flex space-x-3">
						{#if hasAccess}
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-blue-700"
							>
								View Content
							</a>
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
							>
								<ExternalLink size={16} />
							</a>
						{:else}
							<button
								class="flex-1 cursor-not-allowed rounded-lg bg-gray-400 px-4 py-2 font-medium text-white"
							>
								{post.accessLevel === AccessLevel.SUBSCRIBER
									? 'Subscribe Required'
									: 'Membership Required'}
							</button>
							<button
								class="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
							>
								{post.accessLevel === AccessLevel.SUBSCRIBER ? 'Subscribe' : 'Join'}
							</button>
						{/if}
					</div>
				</div>

				<!-- Post Footer -->
				<div class="bg-gray-50 px-6 py-4 dark:bg-gray-700">
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
		<div class="py-12 text-center">
			<FileText class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-600" />
			<h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">No posts found</h3>
			<p class="text-gray-600 dark:text-gray-300">
				Try adjusting your filters or check back later for new content.
			</p>
		</div>
	{/if}

	<!-- Call to Action -->
	<div class="mt-16 text-center">
		<div class="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
			<h2 class="mb-4 text-2xl font-bold">Want Access to Premium Content?</h2>
			<p class="mx-auto mb-6 max-w-2xl text-purple-100">
				Subscribe to your favorite creators or become a member to unlock exclusive content and
				support the creators you love.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					class="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 transition-colors hover:bg-gray-100"
				>
					Browse Creators
				</button>
				<button
					class="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-purple-600"
				>
					Learn More
				</button>
			</div>
		</div>
	</div>
</div>
