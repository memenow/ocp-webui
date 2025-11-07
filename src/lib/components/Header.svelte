<script lang="ts">
	import { walletConnected } from '$lib/stores/wallet';
	import { Crown, FileText, Home, Users } from 'lucide-svelte';
	import WalletConnect from './WalletConnect.svelte';
</script>

<header class="glass sticky top-0 z-50 rounded-b-2xl">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo and Navigation -->
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center space-x-2 transition-transform hover:scale-105">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
					>
						<span class="text-sm font-bold text-white">OCP</span>
					</div>
					<span class="glass-text-primary text-xl font-bold">Open Content Protocol</span>
				</a>

				<nav class="hidden space-x-6 md:flex">
					<a
						href="/"
						class="glass-text-primary flex items-center space-x-1 font-medium transition-all hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400"
					>
						<Home size={18} />
						<span>Home</span>
					</a>
					<a
						href="/creators"
						class="glass-text-primary flex items-center space-x-1 font-medium transition-all hover:scale-105 hover:text-purple-600 dark:hover:text-purple-400"
					>
						<Users size={18} />
						<span>Creators</span>
					</a>
					<a
						href="/posts"
						class="glass-text-primary flex items-center space-x-1 font-medium transition-all hover:scale-105 hover:text-cyan-600 dark:hover:text-cyan-400"
					>
						<FileText size={18} />
						<span>Posts</span>
					</a>
					{#if $walletConnected}
						<a
							href="/dashboard"
							class="glass-text-primary flex items-center space-x-1 font-medium transition-all hover:scale-105 hover:text-green-600 dark:hover:text-green-400"
						>
							<Crown size={18} />
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
	<div class="border-t border-white/20 md:hidden">
		<div class="space-y-1 px-4 py-3">
			<a
				href="/"
				class="glass-text-primary flex items-center space-x-2 rounded-xl px-3 py-2 font-medium transition-all hover:bg-white/30 dark:hover:bg-white/10"
			>
				<Home size={18} />
				<span>Home</span>
			</a>
			<a
				href="/creators"
				class="glass-text-primary flex items-center space-x-2 rounded-xl px-3 py-2 font-medium transition-all hover:bg-white/30 dark:hover:bg-white/10"
			>
				<Users size={18} />
				<span>Creators</span>
			</a>
			<a
				href="/posts"
				class="glass-text-primary flex items-center space-x-2 rounded-xl px-3 py-2 font-medium transition-all hover:bg-white/30 dark:hover:bg-white/10"
			>
				<FileText size={18} />
				<span>Posts</span>
			</a>
			{#if $walletConnected}
				<a
					href="/dashboard"
					class="glass-text-primary flex items-center space-x-2 rounded-xl px-3 py-2 font-medium transition-all hover:bg-white/30 dark:hover:bg-white/10"
				>
					<Crown size={18} />
					<span>Dashboard</span>
				</a>
			{/if}
		</div>
	</div>
</header>
