<script lang="ts">
	import { walletAddress, walletConnected } from '$lib/stores/wallet';
	import { LogOut, Wallet } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isConnecting = false;

	onMount(async () => {
		// Check if wallet is already connected
		if (typeof window !== 'undefined' && window.suiWallet) {
			try {
				const accounts = await window.suiWallet.getAccounts();
				if (accounts.length > 0) {
					walletConnected.set(true);
					walletAddress.set(accounts[0]);
				}
			} catch {
				console.log('No wallet connected');
			}
		}
	});

	async function connectWallet() {
		if (typeof window === 'undefined') return;

		isConnecting = true;
		try {
			// Try Sui Wallet first
			if (window.suiWallet) {
				await window.suiWallet.requestPermissions();
				const accounts = await window.suiWallet.getAccounts();
				if (accounts.length > 0) {
					walletConnected.set(true);
					walletAddress.set(accounts[0]);
				}
			} else {
				alert('Please install a Sui wallet extension');
			}
		} catch (error) {
			console.error('Failed to connect wallet:', error);
			alert('Failed to connect wallet. Please try again.');
		} finally {
			isConnecting = false;
		}
	}

	function disconnectWallet() {
		walletConnected.set(false);
		walletAddress.set(null);
	}

	function formatAddress(address: string): string {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	}
</script>

{#if $walletConnected && $walletAddress}
	<div class="flex items-center space-x-3">
		<div class="glass glass-hover hidden items-center space-x-2 rounded-xl px-4 py-2 text-sm sm:flex">
			<Wallet size={16} class="text-blue-600 dark:text-blue-400" />
			<span class="glass-text-primary font-mono font-semibold">{formatAddress($walletAddress)}</span>
		</div>
		<button
			on:click={disconnectWallet}
			class="glass glass-hover glass-text-primary flex items-center space-x-1 rounded-xl px-3 py-2 text-sm font-medium transition-all hover:text-red-600 dark:hover:text-red-400"
		>
			<LogOut size={16} />
			<span class="hidden sm:inline">Disconnect</span>
		</button>
	</div>
{:else}
	<button
		on:click={connectWallet}
		disabled={isConnecting}
		class="glass-hover flex items-center space-x-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
	>
		<Wallet size={18} />
		<span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
	</button>
{/if}
