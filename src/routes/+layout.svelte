<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-glass-gradient min-h-screen">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
</div>
