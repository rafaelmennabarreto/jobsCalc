<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let svg: string;
	export let alt: string;

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('click');
	}
</script>

<button class="p-3 bg-[#fcfdff] hover:bg-[#f0f2f5] rounded-md flex justify-center" type="button" on:click={onClick}>
	<img src={svg} alt={alt} />
</button>
