<script lang="ts">
	import { onMount } from 'svelte';
	import { walletConnected, walletAddress } from '$lib/stores/wallet';
	import { Crown, Users, FileText, Plus, Settings, TrendingUp } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	// Redirect if not connected
	onMount(() => {
		const unsubscribe = walletConnected.subscribe((connected) => {
			if (!connected) {
				goto('/');
			}
		});
		return unsubscribe;
	});

	function formatAddress(address: string): string {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	}

	// Mock user data
	let userStats = {
		isCreator: true,
		totalPosts: 12,
		totalSubscribers: 45,
		totalEarnings: 125.5,
		subscriptions: 3,
		memberships: 2
	};

	let recentActivity = [
		{ type: 'post', title: 'New blockchain tutorial published', time: '2 hours ago' },
		{ type: 'subscriber', title: 'New subscriber joined', time: '5 hours ago' },
		{ type: 'earning', title: 'Received 15 SUI from membership', time: '1 day ago' },
		{ type: 'post', title: 'Updated NFT collection guide', time: '2 days ago' }
	];
</script>

<svelte:head>
	<title>Dashboard - Open Content Protocol</title>
	<meta
		name="description"
		content="Manage your content and subscriptions on Open Content Protocol"
	/>
</svelte:head>

{#if $walletConnected}
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-10">
			<h1 class="glass-text-primary mb-3 text-4xl font-bold">Dashboard</h1>
			<div class="glass inline-block rounded-2xl px-6 py-3">
				<p class="glass-text-secondary font-medium">
					Welcome back, <span class="glass-text-primary font-bold"
						>{formatAddress($walletAddress || '')}</span
					>
				</p>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="mb-10 grid grid-cols-1 gap-4 md:grid-cols-4">
			<button
				class="glass-hover flex items-center space-x-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-5 text-white shadow-lg transition-all"
			>
				<Plus size={22} />
				<span class="font-bold">Create Post</span>
			</button>
			<button
				class="glass-hover flex items-center space-x-3 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 p-5 text-white shadow-lg transition-all"
			>
				<Crown size={22} />
				<span class="font-bold">Become Creator</span>
			</button>
			<button
				class="glass-hover flex items-center space-x-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-5 text-white shadow-lg transition-all"
			>
				<Users size={22} />
				<span class="font-bold">Find Creators</span>
			</button>
			<button
				class="glass-hover flex items-center space-x-3 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-600 p-5 text-white shadow-lg transition-all"
			>
				<Settings size={22} />
				<span class="font-bold">Settings</span>
			</button>
		</div>

		<!-- Stats Overview -->
		<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#if userStats.isCreator}
				<div class="glass glass-hover rounded-3xl p-6">
					<div class="flex items-center justify-between">
						<div>
							<p class="glass-text-secondary mb-2 text-sm font-semibold">Total Posts</p>
							<p class="glass-text-primary text-3xl font-bold">{userStats.totalPosts}</p>
						</div>
						<div
							class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
						>
							<FileText class="text-white" size={28} />
						</div>
					</div>
				</div>

				<div class="glass glass-hover rounded-3xl p-6">
					<div class="flex items-center justify-between">
						<div>
							<p class="glass-text-secondary mb-2 text-sm font-semibold">Subscribers</p>
							<p class="glass-text-primary text-3xl font-bold">
								{userStats.totalSubscribers}
							</p>
						</div>
						<div
							class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"
						>
							<Users class="text-white" size={28} />
						</div>
					</div>
				</div>

				<div class="glass glass-hover rounded-3xl p-6">
					<div class="flex items-center justify-between">
						<div>
							<p class="glass-text-secondary mb-2 text-sm font-semibold">Total Earnings</p>
							<p class="glass-text-primary text-3xl font-bold">
								{userStats.totalEarnings} <span class="text-lg">SUI</span>
							</p>
						</div>
						<div
							class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg"
						>
							<TrendingUp class="text-white" size={28} />
						</div>
					</div>
				</div>
			{/if}

			<div class="glass glass-hover rounded-3xl p-6">
				<div class="flex items-center justify-between">
					<div>
						<p class="glass-text-secondary mb-2 text-sm font-semibold">Subscriptions</p>
						<p class="glass-text-primary text-3xl font-bold">
							{userStats.subscriptions}
						</p>
					</div>
					<div
						class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-lg"
					>
						<Crown class="text-white" size={28} />
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Recent Activity -->
			<div class="glass rounded-3xl">
				<div class="border-b border-white/20 p-6">
					<h2 class="glass-text-primary text-xl font-bold">Recent Activity</h2>
				</div>
				<div class="p-6">
					<div class="space-y-5">
						{#each recentActivity as activity, index (index)}
							<div
								class="glass glass-hover flex items-start space-x-4 rounded-2xl p-4 transition-all"
							>
								<div
									class="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
								></div>
								<div class="flex-1">
									<p class="glass-text-primary text-sm font-semibold">{activity.title}</p>
									<p class="glass-text-secondary text-xs">{activity.time}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Creator Tools -->
			{#if userStats.isCreator}
				<div class="glass rounded-3xl">
					<div class="border-b border-white/20 p-6">
						<h2 class="glass-text-primary text-xl font-bold">Creator Tools</h2>
					</div>
					<div class="p-6">
						<div class="space-y-4">
							<button class="glass glass-hover w-full rounded-2xl p-5 text-left transition-all">
								<div class="flex items-center space-x-4">
									<div
										class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
									>
										<Plus class="text-white" size={22} />
									</div>
									<div>
										<p class="glass-text-primary font-bold">Create New Post</p>
										<p class="glass-text-secondary text-sm">Share content with your audience</p>
									</div>
								</div>
							</button>
							<button class="glass glass-hover w-full rounded-2xl p-5 text-left transition-all">
								<div class="flex items-center space-x-4">
									<div
										class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"
									>
										<Users class="text-white" size={22} />
									</div>
									<div>
										<p class="glass-text-primary font-bold">Manage Subscribers</p>
										<p class="glass-text-secondary text-sm">View and manage your subscriber base</p>
									</div>
								</div>
							</button>
							<button class="glass glass-hover w-full rounded-2xl p-5 text-left transition-all">
								<div class="flex items-center space-x-4">
									<div
										class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg"
									>
										<TrendingUp class="text-white" size={22} />
									</div>
									<div>
										<p class="glass-text-primary font-bold">Analytics</p>
										<p class="glass-text-secondary text-sm">Track your performance and earnings</p>
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			{:else}
				<!-- Become Creator CTA -->
				<div
					class="glass-strong overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-xl"
				>
					<div class="relative">
						<h2 class="mb-4 text-2xl font-bold">Become a Creator</h2>
						<p class="mb-6">
							Start monetizing your content and building your audience on the decentralized web.
						</p>
						<button
							class="glass-hover rounded-2xl bg-white px-6 py-3 font-bold text-purple-600 shadow-lg transition-all"
						>
							Get Started
						</button>
					</div>
				</div>
			{/if}
		</div>

		<!-- My Subscriptions -->
		<div class="glass mt-10 rounded-3xl">
			<div class="border-b border-white/20 p-6">
				<h2 class="glass-text-primary text-xl font-bold">My Subscriptions</h2>
			</div>
			<div class="p-6">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div class="glass glass-hover rounded-2xl p-5">
						<div class="mb-4 flex items-center space-x-3">
							<img
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
								alt="Creator"
								class="h-12 w-12 rounded-full ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent"
							/>
							<div>
								<p class="glass-text-primary font-bold">Digital Artist</p>
								<p class="glass-text-secondary text-sm">Tier 2 Member</p>
							</div>
						</div>
						<p class="glass-text-secondary text-sm">
							Expires in <span class="glass-text-primary font-semibold">25 days</span>
						</p>
					</div>
					<div class="glass glass-hover rounded-2xl p-5">
						<div class="mb-4 flex items-center space-x-3">
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
								alt="Creator"
								class="h-12 w-12 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-transparent"
							/>
							<div>
								<p class="glass-text-primary font-bold">Tech Educator</p>
								<p class="glass-text-secondary text-sm">Subscriber</p>
							</div>
						</div>
						<p class="glass-text-secondary text-sm">
							<span class="glass-text-primary font-semibold">Active</span> subscription
						</p>
					</div>
					<div class="glass glass-hover rounded-2xl p-5">
						<div class="mb-4 flex items-center space-x-3">
							<img
								src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
								alt="Creator"
								class="h-12 w-12 rounded-full ring-2 ring-green-500 ring-offset-2 ring-offset-transparent"
							/>
							<div>
								<p class="glass-text-primary font-bold">Music Producer</p>
								<p class="glass-text-secondary text-sm">Tier 1 Member</p>
							</div>
						</div>
						<p class="glass-text-secondary text-sm">
							Expires in <span class="glass-text-primary font-semibold">12 days</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
		<div class="glass mx-auto max-w-2xl rounded-3xl p-12">
			<h1 class="glass-text-primary mb-4 text-4xl font-bold">Connect Your Wallet</h1>
			<p class="glass-text-secondary mb-8 text-xl">
				Please connect your wallet to access your dashboard.
			</p>
			<a
				href="/"
				class="glass-hover inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-bold text-white shadow-xl transition-all"
			>
				Go Home
			</a>
		</div>
	</div>
{/if}
