<script lang="ts">
	import { walletConnected } from '$lib/stores/wallet';
	import { Crown, FileText, Home, Users } from 'lucide-svelte';
	import WalletConnect from './WalletConnect.svelte';
</script>

<header class="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo and Navigation -->
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center space-x-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
						<span class="text-sm font-bold text-white">OCP</span>
					</div>
					<span class="text-xl font-bold text-gray-900 dark:text-white">Open Content Protocol</span>
				</a>

				<nav class="hidden space-x-6 md:flex">
					<a
						href="/"
						class="flex items-center space-x-1 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						<Home size={16} />
						<span>Home</span>
					</a>
					<a
						href="/creators"
						class="flex items-center space-x-1 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						<Users size={16} />
						<span>Creators</span>
					</a>
					<a
						href="/posts"
						class="flex items-center space-x-1 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						<FileText size={16} />
						<span>Posts</span>
					</a>
					{#if $walletConnected}
						<a
							href="/dashboard"
							class="flex items-center space-x-1 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
						>
							<Crown size={16} />
							<span>Dashboard</span>
						</a>
					{/if}
				</nav>
			</div>

			<!-- Wallet Connection -->
			<div class="flex items-center space-x-4">
				<WalletConnect />
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	<div class="border-t border-gray-200 md:hidden dark:border-gray-700">
		<div class="space-y-1 px-4 py-3">
			<a
				href="/"
				class="flex items-center space-x-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
			>
				<Home size={16} />
				<span>Home</span>
			</a>
			<a
				href="/creators"
				class="flex items-center space-x-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
			>
				<Users size={16} />
				<span>Creators</span>
			</a>
			<a
				href="/posts"
				class="flex items-center space-x-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
			>
				<FileText size={16} />
				<span>Posts</span>
			</a>
			{#if $walletConnected}
				<a
					href="/dashboard"
					class="flex items-center space-x-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
				>
					<Crown size={16} />
					<span>Dashboard</span>
				</a>
			{/if}
		</div>
	</div>
</header>
