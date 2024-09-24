<script lang="ts">
	import { goto } from '$app/navigation';
	import exclamation from '../../assets/alert-octagon.svg';
	import logo from '../../assets/Simbol.png';

	function goNewJob() {
		goto('/new-job');
	}
</script>

<header class="bg-[#41414c] min-h-72 flex flex-col p-2 sm:px-40 sm:py-8">
	<div class="grid grid-cols-3 min-h-12">
		<div class="flex justify-start flex-col items-center sm:items-start sm:flex-row">
			<img class="mr-2 mt-1 max-h-12 max-w-12 sm:mt-0 sm:mr-5" src={logo} alt="" />
			<p class="text-[#FCFDFF] text-4xl">JobsCalc</p>
		</div>
		<div class="flex justify-center items-start sm:items-center">
			<img class="mr-2 mt-1 sm:mt-0" src={exclamation} alt="" />
			<p class="text-[#FCFDFF]">Voce tem 2 horas livres no seu dia</p>
		</div>
		<div class="flex justify-end items-center">
			<div class="flex-1 text-end mr-5">
				<p class="font-bold text-white">Rafael Barreto</p>
				<p class="text-[#BFBFCC]">ver perfil</p>
			</div>
			<div>
				<img
					class="rounded-full max-h-16 max-w-16 border-2 border-[#f1972c]"
					src="https://github.com/rafaelmennabarreto.png"
					alt=""
				/>
			</div>
		</div>
	</div>
	<hr class="mt-6 border-0 h-[2px] bg-[#4F4F5B]" />
	<div class="min-h-14 grid grid-col-3 sm:grid-cols-4 mt-8">
		<span class="text-center sm:text-start">
			<p class="text-[#FCFDFF] font-bold text-2xl">12</p>
			<p class="text-[#bfbfcc]">projetos totais</p>
		</span>

		<span class="text-center sm:text-start">
			<p class="text-[#FCFDFF] font-bold text-2xl">12</p>
			<p class="text-[#bfbfcc]">Em andamento</p>
		</span>

		<span class="text-center sm:text-start">
			<p class="text-[#FCFDFF] font-bold text-2xl">12</p>
			<p class="text-[#bfbfcc]">Encerrados</p>
		</span>

		<div class="flex justify-end mt-4 col-span-4 sm:mt-0 sm:col-span-1">
			<button
				class="bg-[#F1972C] rounded-lg flex items-center w-full sm:max-w-72"
				on:click={goNewJob}
			>
				<p
					class="bg-[#FCFDFF] bg-opacity-25 text-2xl text-white text-center min-w-8 h-8 rounded-lg m-3 mr-8"
				>
					+
				</p>
				<p class="text-white text-base font-bold pr-8 flex-1 md:text-start">ADICIONAR NOVO JOB</p>
			</button>
		</div>
	</div>
</header>
