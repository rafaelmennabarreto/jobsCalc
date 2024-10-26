<script lang="ts">
	import arrow from '../../assets/arrow.png';
	import { headerName } from '$lib/stores/header.store';
	function back() {
		history.back();
	}
</script>

<header class="flex flex-row items-center w-full bg-[#41414c] min-h-20 px-40">
	<button on:click={back}>
		<img class="mr-auto" src={arrow} alt="back" />
	</button>
	<p class="flex-grow text-center text-[#BFBFCC] font-semibold leading-6">{$headerName}</p>
</header>
