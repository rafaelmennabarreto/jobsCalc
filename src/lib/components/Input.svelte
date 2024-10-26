<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	let className = '';
	export { className as class };

	export let label = '';
	export let error = '';
	export let type: HTMLInputTypeAttribute | null | undefined = undefined;
</script>

<div class={className}>
	<p class="mb-2">{label}</p>
	<div class="relative">
		<input class="w-full h-14 bg-white px-6 py-4 focus:outline-none" {type} />

		{#if error}
			<p class="absolute mt-12 top-2 text-red-600">{error}</p>
		{/if}
	</div>
</div>

<style>
	input {
		font-family: IBM Plex Sans;
		color: #5a5a66;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		text-align: left;
	}
</style>
