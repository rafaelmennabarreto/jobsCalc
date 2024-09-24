<script lang="ts">
	import arrow from '../../assets/arrow.png';
	import { page } from '$app/stores';

	const path = $page.url.pathname.replace(/\//gi, '');
  const jobId = $page.url.searchParams.get('jobId');

	function getPageName() {
    if (jobId && path === 'new-job') return 'Editar job';

		return (
			{
				'new-job': 'Adicionar Novo Job'
			}[path] || 'Pagina não existe'
		);
	}

	function back() {
		history.back();
	}
</script>

<header class="flex flex-row items-center w-full bg-[#41414c] min-h-20 px-40">
	<button on:click={back}>
		<img class="mr-auto" src={arrow} alt="back" />
	</button>
	<p class="flex-grow text-center text-[#BFBFCC] font-semibold leading-6">{getPageName()}</p>
</header>
