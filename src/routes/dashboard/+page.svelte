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
		<div class="mb-8">
			<h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
			<p class="text-gray-600 dark:text-gray-300">
				Welcome back, {formatAddress($walletAddress || '')}
			</p>
		</div>

		<!-- Quick Actions -->
		<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
			<button
				class="flex items-center space-x-3 rounded-lg bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700"
			>
				<Plus size={20} />
				<span class="font-medium">Create Post</span>
			</button>
			<button
				class="flex items-center space-x-3 rounded-lg bg-purple-600 p-4 text-white transition-colors hover:bg-purple-700"
			>
				<Crown size={20} />
				<span class="font-medium">Become Creator</span>
			</button>
			<button
				class="flex items-center space-x-3 rounded-lg bg-green-600 p-4 text-white transition-colors hover:bg-green-700"
			>
				<Users size={20} />
				<span class="font-medium">Find Creators</span>
			</button>
			<button
				class="flex items-center space-x-3 rounded-lg bg-gray-600 p-4 text-white transition-colors hover:bg-gray-700"
			>
				<Settings size={20} />
				<span class="font-medium">Settings</span>
			</button>
		</div>

		<!-- Stats Overview -->
		<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#if userStats.isCreator}
				<div class="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Posts</p>
							<p class="text-2xl font-bold text-gray-900 dark:text-white">{userStats.totalPosts}</p>
						</div>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900"
						>
							<FileText class="text-blue-600 dark:text-blue-400" size={24} />
						</div>
					</div>
				</div>

				<div class="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-gray-600 dark:text-gray-400">Subscribers</p>
							<p class="text-2xl font-bold text-gray-900 dark:text-white">
								{userStats.totalSubscribers}
							</p>
						</div>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900"
						>
							<Users class="text-purple-600 dark:text-purple-400" size={24} />
						</div>
					</div>
				</div>

				<div class="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
							<p class="text-2xl font-bold text-gray-900 dark:text-white">
								{userStats.totalEarnings} SUI
							</p>
						</div>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900"
						>
							<TrendingUp class="text-green-600 dark:text-green-400" size={24} />
						</div>
					</div>
				</div>
			{/if}

			<div class="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-gray-600 dark:text-gray-400">Subscriptions</p>
						<p class="text-2xl font-bold text-gray-900 dark:text-white">
							{userStats.subscriptions}
						</p>
					</div>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900"
					>
						<Crown class="text-indigo-600 dark:text-indigo-400" size={24} />
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Recent Activity -->
			<div class="rounded-lg bg-white shadow-sm dark:bg-gray-800">
				<div class="border-b border-gray-200 p-6 dark:border-gray-700">
					<h2 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
				</div>
				<div class="p-6">
					<div class="space-y-4">
						{#each recentActivity as activity, index (index)}
							<div class="flex items-start space-x-3">
								<div class="mt-2 h-2 w-2 rounded-full bg-blue-600"></div>
								<div class="flex-1">
									<p class="text-sm text-gray-900 dark:text-white">{activity.title}</p>
									<p class="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Creator Tools -->
			{#if userStats.isCreator}
				<div class="rounded-lg bg-white shadow-sm dark:bg-gray-800">
					<div class="border-b border-gray-200 p-6 dark:border-gray-700">
						<h2 class="text-lg font-semibold text-gray-900 dark:text-white">Creator Tools</h2>
					</div>
					<div class="p-6">
						<div class="space-y-4">
							<button
								class="w-full rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
							>
								<div class="flex items-center space-x-3">
									<Plus class="text-blue-600 dark:text-blue-400" size={20} />
									<div>
										<p class="font-medium text-gray-900 dark:text-white">Create New Post</p>
										<p class="text-sm text-gray-500 dark:text-gray-400">
											Share content with your audience
										</p>
									</div>
								</div>
							</button>
							<button
								class="w-full rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
							>
								<div class="flex items-center space-x-3">
									<Users class="text-purple-600 dark:text-purple-400" size={20} />
									<div>
										<p class="font-medium text-gray-900 dark:text-white">Manage Subscribers</p>
										<p class="text-sm text-gray-500 dark:text-gray-400">
											View and manage your subscriber base
										</p>
									</div>
								</div>
							</button>
							<button
								class="w-full rounded-lg border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
							>
								<div class="flex items-center space-x-3">
									<TrendingUp class="text-green-600 dark:text-green-400" size={20} />
									<div>
										<p class="font-medium text-gray-900 dark:text-white">Analytics</p>
										<p class="text-sm text-gray-500 dark:text-gray-400">
											Track your performance and earnings
										</p>
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			{:else}
				<!-- Become Creator CTA -->
				<div class="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
					<h2 class="mb-4 text-xl font-bold">Become a Creator</h2>
					<p class="mb-6 text-blue-100">
						Start monetizing your content and building your audience on the decentralized web.
					</p>
					<button
						class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
					>
						Get Started
					</button>
				</div>
			{/if}
		</div>

		<!-- My Subscriptions -->
		<div class="mt-8 rounded-lg bg-white shadow-sm dark:bg-gray-800">
			<div class="border-b border-gray-200 p-6 dark:border-gray-700">
				<h2 class="text-lg font-semibold text-gray-900 dark:text-white">My Subscriptions</h2>
			</div>
			<div class="p-6">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
						<div class="mb-3 flex items-center space-x-3">
							<img
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
								alt="Creator"
								class="h-10 w-10 rounded-full"
							/>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">Digital Artist</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">Tier 2 Member</p>
							</div>
						</div>
						<p class="text-sm text-gray-600 dark:text-gray-300">Expires in 25 days</p>
					</div>
					<div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
						<div class="mb-3 flex items-center space-x-3">
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
								alt="Creator"
								class="h-10 w-10 rounded-full"
							/>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">Tech Educator</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">Subscriber</p>
							</div>
						</div>
						<p class="text-sm text-gray-600 dark:text-gray-300">Active subscription</p>
					</div>
					<div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
						<div class="mb-3 flex items-center space-x-3">
							<img
								src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
								alt="Creator"
								class="h-10 w-10 rounded-full"
							/>
							<div>
								<p class="font-medium text-gray-900 dark:text-white">Music Producer</p>
								<p class="text-sm text-gray-500 dark:text-gray-400">Tier 1 Member</p>
							</div>
						</div>
						<p class="text-sm text-gray-600 dark:text-gray-300">Expires in 12 days</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
		<h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Connect Your Wallet</h1>
		<p class="mb-8 text-xl text-gray-600 dark:text-gray-300">
			Please connect your wallet to access your dashboard.
		</p>
		<a
			href="/"
			class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
		>
			Go Home
		</a>
	</div>
{/if}
