<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
</div>
