<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import NavigationHeader from '$lib/components/NavigationHeader.svelte';
</script>

{#if $page.url.pathname === '/'}
  <Header />
{:else}
	<NavigationHeader />
{/if}

<slot />
