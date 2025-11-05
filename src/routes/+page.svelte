<script lang="ts">
	import { walletConnected } from '$lib/stores/wallet';
	import { ArrowRight, Globe, Shield, Users, Zap } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Open Content Protocol - Decentralized Content Platform</title>
	<meta
		name="description"
		content="A decentralized, censorship-resistant content value network built on Sui blockchain for content creators and providers."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 py-20 text-white">
	<div class="absolute inset-0 bg-black/10"></div>
	<!-- Decorative Elements -->
	<div class="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>
	<div class="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
		<div class="text-center">
			<h1 class="mb-6 text-5xl font-bold drop-shadow-lg md:text-7xl">Open Content Protocol</h1>
			<div class="glass mx-auto mb-10 max-w-4xl rounded-3xl p-8">
				<p class="text-xl md:text-2xl">
					A decentralized, censorship-resistant content value network built on Sui blockchain for
					content creators and individual providers.
				</p>
			</div>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				{#if $walletConnected}
					<a
						href="/dashboard"
						class="glass-hover inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all hover:shadow-2xl"
					>
						Go to Dashboard
						<ArrowRight class="ml-2" size={24} />
					</a>
				{:else}
					<a
						href="/creators"
						class="glass-hover inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-purple-600 shadow-xl transition-all hover:shadow-2xl"
					>
						Explore Creators
						<ArrowRight class="ml-2" size={24} />
					</a>
				{/if}
				<a
					href="/posts"
					class="glass glass-hover inline-flex items-center rounded-2xl px-8 py-4 text-lg font-bold text-white transition-all"
				>
					Browse Content
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="glass-text-primary mb-4 text-4xl font-bold md:text-5xl">
				Why Choose Open Content Protocol?
			</h2>
			<p class="glass-text-secondary mx-auto max-w-3xl text-xl">
				Built on Sui blockchain technology to provide creators and users with unprecedented control,
				security, and value.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="glass glass-hover rounded-3xl p-8 text-center">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
				>
					<Shield class="text-white" size={36} />
				</div>
				<h3 class="glass-text-primary mb-3 text-xl font-bold">
					Censorship Resistant
				</h3>
				<p class="glass-text-secondary">
					Content stored on blockchain ensures no single entity can censor or remove your work.
				</p>
			</div>

			<div class="glass glass-hover rounded-3xl p-8 text-center">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"
				>
					<Users class="text-white" size={36} />
				</div>
				<h3 class="glass-text-primary mb-3 text-xl font-bold">Creator Ownership</h3>
				<p class="glass-text-secondary">
					Creators maintain full ownership and control over their content and subscriber
					relationships.
				</p>
			</div>

			<div class="glass glass-hover rounded-3xl p-8 text-center">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg"
				>
					<Zap class="text-white" size={36} />
				</div>
				<h3 class="glass-text-primary mb-3 text-xl font-bold">Fast & Efficient</h3>
				<p class="glass-text-secondary">
					Built on Sui blockchain for lightning-fast transactions and low fees.
				</p>
			</div>

			<div class="glass glass-hover rounded-3xl p-8 text-center">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-lg"
				>
					<Globe class="text-white" size={36} />
				</div>
				<h3 class="glass-text-primary mb-3 text-xl font-bold">Global Access</h3>
				<p class="glass-text-secondary">
					Accessible worldwide without geographical restrictions or traditional payment barriers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section class="py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="glass-text-primary mb-4 text-4xl font-bold md:text-5xl">
				How It Works
			</h2>
			<p class="glass-text-secondary mx-auto max-w-3xl text-xl">
				Simple steps to start creating, sharing, and monetizing content on the decentralized web.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<div class="glass glass-hover rounded-3xl p-10">
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-2xl font-bold text-white shadow-lg"
				>
					1
				</div>
				<h3 class="glass-text-primary mb-4 text-2xl font-bold">Connect Wallet</h3>
				<p class="glass-text-secondary text-lg">
					Connect your Sui wallet to start interacting with the platform. Your wallet is your
					identity and payment method.
				</p>
			</div>

			<div class="glass glass-hover rounded-3xl p-10">
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-2xl font-bold text-white shadow-lg"
				>
					2
				</div>
				<h3 class="glass-text-primary mb-4 text-2xl font-bold">
					Create or Subscribe
				</h3>
				<p class="glass-text-secondary text-lg">
					Become a creator to publish content, or subscribe to your favorite creators to access
					exclusive content.
				</p>
			</div>

			<div class="glass glass-hover rounded-3xl p-10">
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-2xl font-bold text-white shadow-lg"
				>
					3
				</div>
				<h3 class="glass-text-primary mb-4 text-2xl font-bold">Earn & Engage</h3>
				<p class="glass-text-secondary text-lg">
					Creators earn directly from subscribers and custom content requests. Users get access to
					premium content.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-24">
	<div class="absolute inset-0 bg-black/10"></div>
	<!-- Decorative Elements -->
	<div class="absolute left-1/4 top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
	<div class="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

	<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
			Ready to Join the Future of Content?
		</h2>
		<div class="glass mx-auto mb-10 max-w-2xl rounded-3xl p-6">
			<p class="text-xl text-white">
				Start creating, sharing, and monetizing content on a truly decentralized platform.
			</p>
		</div>
		{#if !$walletConnected}
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/creators"
					class="glass-hover inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-purple-600 shadow-xl transition-all hover:shadow-2xl"
				>
					Explore Creators
					<ArrowRight class="ml-2" size={24} />
				</a>
				<a
					href="/posts"
					class="glass glass-hover inline-flex items-center rounded-2xl px-8 py-4 text-lg font-bold text-white transition-all"
				>
					Browse Content
				</a>
			</div>
		{/if}
	</div>
</section>
