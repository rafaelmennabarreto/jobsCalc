<script lang="ts">
  export let label: string;
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
</script>

<button {type} class={'text-center rounded-lg text-white w-full h-[50px] md:w-[181px]' + ' ' + variant}>{label}</button>

<style>
	.primary {
		background: #36b236;
	}

	.secondary {
		background: #eb3b35;
	}

	.tertiary {
		background: #fa9c2d;
	}
</style>
