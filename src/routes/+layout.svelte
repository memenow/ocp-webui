<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="min-h-screen bg-glass-gradient">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
</div>
