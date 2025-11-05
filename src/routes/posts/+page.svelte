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
		<h1 class="glass-text-primary mb-6 text-5xl font-bold">Browse Content</h1>
		<div class="glass mx-auto max-w-3xl rounded-3xl p-6">
			<p class="text-xl">
				Discover exclusive content from talented creators. Access free posts or subscribe for premium
				content.
			</p>
		</div>
	</div>

	<!-- Filters -->
	<div class="mb-10">
		<div class="flex flex-wrap justify-center gap-3">
			<button
				class="glass-hover rounded-2xl px-6 py-3 font-bold transition-all {selectedFilter === 'all'
					? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
					: 'glass glass-text-primary'}"
				on:click={() => (selectedFilter = 'all')}
			>
				All Posts
			</button>
			<button
				class="glass-hover rounded-2xl px-6 py-3 font-bold transition-all {selectedFilter === 'public'
					? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
					: 'glass glass-text-primary'}"
				on:click={() => (selectedFilter = 'public')}
			>
				<Globe size={18} class="mr-2 inline" />
				Public
			</button>
			<button
				class="glass-hover rounded-2xl px-6 py-3 font-bold transition-all {selectedFilter === 'subscriber'
					? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
					: 'glass glass-text-primary'}"
				on:click={() => (selectedFilter = 'subscriber')}
			>
				<Users size={18} class="mr-2 inline" />
				Subscriber
			</button>
			<button
				class="glass-hover rounded-2xl px-6 py-3 font-bold transition-all {selectedFilter === 'member'
					? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
					: 'glass glass-text-primary'}"
				on:click={() => (selectedFilter = 'member')}
			>
				<Lock size={18} class="mr-2 inline" />
				Member
			</button>
		</div>
	</div>

	<!-- Stats -->
	<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-4">
		<div class="glass glass-hover rounded-3xl p-6 text-center">
			<div class="mb-3 text-4xl font-bold text-blue-600 dark:text-blue-400">{posts.length}</div>
			<div class="glass-text-secondary font-semibold">Total Posts</div>
		</div>
		<div class="glass glass-hover rounded-3xl p-6 text-center">
			<div class="mb-3 text-4xl font-bold text-green-600 dark:text-green-400">
				{posts.filter((p) => p.accessLevel === AccessLevel.PUBLIC).length}
			</div>
			<div class="glass-text-secondary font-semibold">Public Posts</div>
		</div>
		<div class="glass glass-hover rounded-3xl p-6 text-center">
			<div class="mb-3 text-4xl font-bold text-blue-600 dark:text-blue-400">
				{posts.filter((p) => p.accessLevel === AccessLevel.SUBSCRIBER).length}
			</div>
			<div class="glass-text-secondary font-semibold">Subscriber Posts</div>
		</div>
		<div class="glass glass-hover rounded-3xl p-6 text-center">
			<div class="mb-3 text-4xl font-bold text-purple-600 dark:text-purple-400">
				{posts.filter((p) => p.accessLevel === AccessLevel.MEMBER).length}
			</div>
			<div class="glass-text-secondary font-semibold">Member Posts</div>
		</div>
	</div>

	<!-- Posts Grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredPosts as post (post.id)}
			{@const accessInfo = getAccessLevelInfo(post.accessLevel)}
			{@const hasAccess = canAccess(post.accessLevel)}
			<div
				class="glass glass-hover overflow-hidden rounded-3xl"
			>
				<!-- Post Header -->
				<div class="p-6">
					<div class="mb-5 flex items-start justify-between">
						<div class="flex-1">
							<div class="glass-text-secondary mb-3 flex items-center space-x-2">
								<FileText size={20} />
								<span class="font-mono text-sm font-semibold">
									{formatAddress(post.id)}
								</span>
							</div>
							<p class="glass-text-secondary text-sm font-medium">
								by <span class="glass-text-primary font-bold">{formatAddress(post.creatorId)}</span>
							</p>
						</div>
						<div
							class="flex items-center space-x-1 rounded-xl bg-gradient-to-r px-3 py-1.5 text-xs font-bold text-white shadow-md {post.accessLevel === AccessLevel.PUBLIC ? 'from-green-500 to-green-600' : post.accessLevel === AccessLevel.SUBSCRIBER ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'}"
						>
							<svelte:component this={accessInfo.icon} size={14} />
							<span>{accessInfo.label}</span>
						</div>
					</div>

					<p class="glass-text-primary mb-4 line-clamp-3 font-medium">
						{post.description}
					</p>

					<div class="glass mb-5 rounded-xl p-3 text-sm">
						<p class="glass-text-secondary font-semibold">{accessInfo.description}</p>
					</div>

					<!-- Actions -->
					<div class="flex space-x-3">
						{#if hasAccess}
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="glass-hover flex-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-center font-bold text-white shadow-lg transition-all"
							>
								View Content
							</a>
							<a
								href={post.url}
								target="_blank"
								rel="noopener noreferrer"
								class="glass glass-text-primary glass-hover flex items-center justify-center rounded-2xl px-4 py-3 transition-all"
							>
								<ExternalLink size={18} />
							</a>
						{:else}
							<button
								class="glass flex-1 cursor-not-allowed rounded-2xl px-4 py-3 font-bold opacity-60"
							>
								{post.accessLevel === AccessLevel.SUBSCRIBER
									? 'Subscribe Required'
									: 'Membership Required'}
							</button>
							<button
								class="glass-hover rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-bold text-white shadow-lg transition-all"
							>
								{post.accessLevel === AccessLevel.SUBSCRIBER ? 'Subscribe' : 'Join'}
							</button>
						{/if}
					</div>
				</div>

				<!-- Post Footer -->
				<div class="border-t border-white/20 px-6 py-4">
					<div class="glass-text-secondary flex justify-between text-sm font-semibold">
						<div class="flex items-center space-x-2">
							<Calendar size={16} />
							<span>2 days ago</span>
						</div>
						<div class="flex items-center space-x-2">
							<Users size={16} />
							<span>42 views</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Empty State -->
	{#if filteredPosts.length === 0}
		<div class="glass rounded-3xl py-16 text-center">
			<FileText class="glass-text-secondary mx-auto mb-4 h-16 w-16" />
			<h3 class="glass-text-primary mb-2 text-xl font-bold">No posts found</h3>
			<p class="glass-text-secondary">
				Try adjusting your filters or check back later for new content.
			</p>
		</div>
	{/if}

	<!-- Call to Action -->
	<div class="mt-16 text-center">
		<div class="glass-strong relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 p-12 text-white shadow-2xl">
			<!-- Decorative Elements -->
			<div class="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
			<div class="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

			<div class="relative">
				<h2 class="mb-5 text-3xl font-bold">Want Access to Premium Content?</h2>
				<p class="mx-auto mb-8 max-w-2xl text-lg">
					Subscribe to your favorite creators or become a member to unlock exclusive content and
					support the creators you love.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<button
						class="glass-hover rounded-2xl bg-white px-10 py-4 text-lg font-bold text-purple-600 shadow-xl transition-all"
					>
						Browse Creators
					</button>
					<button
						class="glass glass-hover rounded-2xl px-10 py-4 text-lg font-bold text-white transition-all"
					>
						Learn More
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
