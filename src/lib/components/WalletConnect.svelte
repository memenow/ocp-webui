<script lang="ts">
	import { walletAddress, walletConnected } from '$lib/stores/wallet';
	import { LogOut, Wallet } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isConnecting = false;
	let availableWallets: any[] = [];

	onMount(async () => {
		// Check if wallet is already connected
		if (typeof window !== 'undefined' && window.suiWallet) {
			try {
				const accounts = await window.suiWallet.getAccounts();
				if (accounts.length > 0) {
					walletConnected.set(true);
					walletAddress.set(accounts[0]);
				}
			} catch (error) {
				console.log('No wallet connected');
			}
		}

		// Get available wallets
		if (typeof window !== 'undefined') {
			availableWallets = Object.keys(window).filter(key => 
				key.includes('Wallet') || key.includes('wallet')
			);
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
		<div class="hidden sm:flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
			<Wallet size={16} />
			<span class="font-mono">{formatAddress($walletAddress)}</span>
		</div>
		<button
			on:click={disconnectWallet}
			class="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
		>
			<LogOut size={16} />
			<span class="hidden sm:inline">Disconnect</span>
		</button>
	</div>
{:else}
	<button
		on:click={connectWallet}
		disabled={isConnecting}
		class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
	>
		<Wallet size={16} />
		<span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
	</button>
{/if}
