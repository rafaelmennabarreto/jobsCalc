<script lang="ts">
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';
	import { headerName } from '$lib/stores/header.store';
	import { onMount } from 'svelte';
	import earning from '$assets/Enarning.svg';
	import trash from '$assets/trash.svg';
	import Button from '$lib/components/Button.svelte';
	import IconButton from '$lib/components/IconButton.svelte';

	let error = 'oi meu chapa';

	onMount(() => {
		const id = $page.url.searchParams.get('id');

		if (!id) {
			headerName.update(() => 'Novo Job');
			return;
		}

		headerName.update(() => 'Editar Job');
	});
</script>

<form class="flex flex-wrap mt-16 mx-2 md:mx-40">
	<section class="w-full md:w-[641px] flex-0 md:mr-32 sm:mr-0">
		<p class="text-3xl text-[#5A5A66] font-semibold">Dados do Job</p>
		<hr class="md:mt-4 border-0 h-[2px] bg-[#E1E3E5]" />

		<Input class="mb-7" label="teste" {error} type="text" />

		<div class="flex flex-col md:flex-row md:items-end md:gap-3">
			<Input
				class="mb-7 flex-1 md:mb-0 md:flex-1"
				label="Quantas horas por dia vai dedicar ao Job?"
				{error}
				type="text"
			/>

			<Input
				class="mb-7 flex-1 md:mb-0 md:flex-1"
				label="Estimativa de horas para esse job"
				{error}
				type="text"
			/>
		</div>
	</section>

	<section
		class="w-full flex flex-col items-center mt-4 py-10 px-14 bg-[#fcfdff] :md-mt-0 md:w-[352px]"
	>
		<img class="w-[102px] mb-6" src={earning} alt="earning" />

		<p class="w-[244px] text-center">Preencha os dados ao lado para ver o valor do projeto</p>

		<div class="flex flex-col md:flex-row w-full gap-4 justify-center mt-12">
			<Button label="salvar" variant="primary" />
			<IconButton svg={trash} alt="trash" />
		</div>
	</section>
</form>
