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
<section class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
	<div class="absolute inset-0 bg-black/20"></div>
	<div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
		<div class="text-center">
			<h1 class="mb-6 text-4xl font-bold md:text-6xl">Open Content Protocol</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl">
				A decentralized, censorship-resistant content value network built on Sui blockchain for
				content creators and individual providers.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				{#if $walletConnected}
					<a
						href="/dashboard"
						class="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
					>
						Go to Dashboard
						<ArrowRight class="ml-2" size={20} />
					</a>
				{:else}
					<a
						href="/creators"
						class="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
					>
						Explore Creators
						<ArrowRight class="ml-2" size={20} />
					</a>
				{/if}
				<a
					href="/posts"
					class="inline-flex items-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
				>
					Browse Content
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="bg-white py-20 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
				Why Choose Open Content Protocol?
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
				Built on Sui blockchain technology to provide creators and users with unprecedented control,
				security, and value.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="p-6 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"
				>
					<Shield class="text-blue-600 dark:text-blue-400" size={32} />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
					Censorship Resistant
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Content stored on blockchain ensures no single entity can censor or remove your work.
				</p>
			</div>

			<div class="p-6 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"
				>
					<Users class="text-purple-600 dark:text-purple-400" size={32} />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Creator Ownership</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Creators maintain full ownership and control over their content and subscriber
					relationships.
				</p>
			</div>

			<div class="p-6 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
				>
					<Zap class="text-green-600 dark:text-green-400" size={32} />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Fast & Efficient</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Built on Sui blockchain for lightning-fast transactions and low fees.
				</p>
			</div>

			<div class="p-6 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
				>
					<Globe class="text-indigo-600 dark:text-indigo-400" size={32} />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Global Access</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Accessible worldwide without geographical restrictions or traditional payment barriers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section class="bg-gray-50 py-20 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
				How It Works
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
				Simple steps to start creating, sharing, and monetizing content on the decentralized web.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<div class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white"
				>
					1
				</div>
				<h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Connect Wallet</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Connect your Sui wallet to start interacting with the platform. Your wallet is your
					identity and payment method.
				</p>
			</div>

			<div class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-xl font-bold text-white"
				>
					2
				</div>
				<h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
					Create or Subscribe
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Become a creator to publish content, or subscribe to your favorite creators to access
					exclusive content.
				</p>
			</div>

			<div class="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-xl font-bold text-white"
				>
					3
				</div>
				<h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Earn & Engage</h3>
				<p class="text-gray-600 dark:text-gray-300">
					Creators earn directly from subscribers and custom content requests. Users get access to
					premium content.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-blue-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
			Ready to Join the Future of Content?
		</h2>
		<p class="mb-8 text-xl text-blue-100">
			Start creating, sharing, and monetizing content on a truly decentralized platform.
		</p>
		{#if !$walletConnected}
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/creators"
					class="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
				>
					Explore Creators
					<ArrowRight class="ml-2" size={20} />
				</a>
				<a
					href="/posts"
					class="inline-flex items-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
				>
					Browse Content
				</a>
			</div>
		{/if}
	</div>
</section>
