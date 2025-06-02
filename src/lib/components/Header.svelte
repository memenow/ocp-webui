<script lang="ts">
	import { walletConnected } from '$lib/stores/wallet';
	import { Crown, FileText, Home, Users } from 'lucide-svelte';
	import WalletConnect from './WalletConnect.svelte';
</script>

<header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo and Navigation -->
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center space-x-2">
					<div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
						<span class="text-white font-bold text-sm">OCP</span>
					</div>
					<span class="text-xl font-bold text-gray-900 dark:text-white">Open Content Protocol</span>
				</a>

				<nav class="hidden md:flex space-x-6">
					<a
						href="/"
						class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					>
						<Home size={16} />
						<span>Home</span>
					</a>
					<a
						href="/creators"
						class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					>
						<Users size={16} />
						<span>Creators</span>
					</a>
					<a
						href="/posts"
						class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					>
						<FileText size={16} />
						<span>Posts</span>
					</a>
					{#if $walletConnected}
						<a
							href="/dashboard"
							class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
	<div class="md:hidden border-t border-gray-200 dark:border-gray-700">
		<div class="px-4 py-3 space-y-1">
			<a
				href="/"
				class="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
			>
				<Home size={16} />
				<span>Home</span>
			</a>
			<a
				href="/creators"
				class="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
			>
				<Users size={16} />
				<span>Creators</span>
			</a>
			<a
				href="/posts"
				class="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
			>
				<FileText size={16} />
				<span>Posts</span>
			</a>
			{#if $walletConnected}
				<a
					href="/dashboard"
					class="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
				>
					<Crown size={16} />
					<span>Dashboard</span>
				</a>
			{/if}
		</div>
	</div>
</header>
