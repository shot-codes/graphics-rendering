<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<div class="grid h-full grid-rows-[150px_1fr]">
	<div
		class="fixed top-0 w-full h-[40px] transition items-center flex justify-center bg-white bg-opacity-50 dark:bg-black dark:border-neutral-800 dark:bg-opacity-50 p-2 border-b backdrop-blur border-opacity-50 dark:border-opacity-50"
		class:scrollTop={scrollY == 0}
	>
		<a href="/"> 02561/02562 JOURNAL - S155932 </a>
	</div>
	<div class="flex h-[110px] mt-[40px] w-full justify-center items-center px-4">
		<a
			href="/graphics"
			title="COMPUTER_GRAPHICS"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('graphics')}
			class:text-blue-500={$page.url.href.includes('graphics')}
		>
			COMPUTER_GRAPHICS
		</a>
		<a
			href="/rendering"
			title="RENDERING"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('rendering')}
			class:text-orange-500={$page.url.href.includes('rendering')}
		>
			RENDERING
		</a>
	</div>

	<slot />
</div>

<style lang="postcss">
	.scrollTop {
		@apply border-neutral-500 dark:border-neutral-500;
	}
</style>
