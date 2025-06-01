<script lang="ts">
	import { walletConnected } from '$lib/stores/wallet';
	import { ArrowRight, Globe, Shield, Users, Zap } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Open Content Protocol - Decentralized Content Platform</title>
	<meta name="description" content="A decentralized, censorship-resistant content value network built on Sui blockchain for content creators and providers." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
	<div class="absolute inset-0 bg-black/20"></div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				Open Content Protocol
			</h1>
			<p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
				A decentralized, censorship-resistant content value network built on Sui blockchain for content creators and individual providers.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				{#if $walletConnected}
					<a
						href="/dashboard"
						class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
					>
						Go to Dashboard
						<ArrowRight class="ml-2" size={20} />
					</a>
				{:else}
					<a
						href="/creators"
						class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
					>
						Explore Creators
						<ArrowRight class="ml-2" size={20} />
					</a>
				{/if}
				<a
					href="/posts"
					class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
				>
					Browse Content
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-20 bg-white dark:bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
				Why Choose Open Content Protocol?
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
				Built on Sui blockchain technology to provide creators and users with unprecedented control, security, and value.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="text-center p-6">
				<div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
					<Shield class="text-blue-600 dark:text-blue-400" size={32} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Censorship Resistant</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Content stored on blockchain ensures no single entity can censor or remove your work.
				</p>
			</div>

			<div class="text-center p-6">
				<div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
					<Users class="text-purple-600 dark:text-purple-400" size={32} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Creator Ownership</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Creators maintain full ownership and control over their content and subscriber relationships.
				</p>
			</div>

			<div class="text-center p-6">
				<div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
					<Zap class="text-green-600 dark:text-green-400" size={32} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast & Efficient</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Built on Sui blockchain for lightning-fast transactions and low fees.
				</p>
			</div>

			<div class="text-center p-6">
				<div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
					<Globe class="text-indigo-600 dark:text-indigo-400" size={32} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Access</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Accessible worldwide without geographical restrictions or traditional payment barriers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section class="py-20 bg-gray-50 dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
				How It Works
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
				Simple steps to start creating, sharing, and monetizing content on the decentralized web.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
				<div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
					1
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Connect Wallet</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Connect your Sui wallet to start interacting with the platform. Your wallet is your identity and payment method.
				</p>
			</div>

			<div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
				<div class="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
					2
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Create or Subscribe</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Become a creator to publish content, or subscribe to your favorite creators to access exclusive content.
				</p>
			</div>

			<div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
				<div class="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
					3
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Earn & Engage</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Creators earn directly from subscribers and custom content requests. Users get access to premium content.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-blue-600">
	<div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
			Ready to Join the Future of Content?
		</h2>
		<p class="text-xl text-blue-100 mb-8">
			Start creating, sharing, and monetizing content on a truly decentralized platform.
		</p>
		{#if !$walletConnected}
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/creators"
					class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
				>
					Explore Creators
					<ArrowRight class="ml-2" size={20} />
				</a>
				<a
					href="/posts"
					class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
				>
					Browse Content
				</a>
			</div>
		{/if}
	</div>
</section>
