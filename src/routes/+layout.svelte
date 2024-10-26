<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($page.url.pathname === '/') {
			goto('/home');
		}
	});
</script>

<slot />
