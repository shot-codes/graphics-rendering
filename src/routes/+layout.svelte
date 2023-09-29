<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	// import 'highlight.js/styles/github.css';

	let stylesheetUrl: string;

	onMount(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			stylesheetUrl = '/styles/hljs/dark.css'; // Replace with your dark theme stylesheet
		} else {
			stylesheetUrl = '/styles/hljs/light.css';
		}

		// Listen for changes in the user's preferred color scheme
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				stylesheetUrl = '/styles/hljs/dark.css'; // Replace with your dark theme stylesheet
			} else {
				stylesheetUrl = '/styles/hljs/light.css';
			}
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href={stylesheetUrl} />
</svelte:head>

<div class="grid h-full grid-rows-[150px_1fr]">
	<div
		class="fixed z-50 top-0 w-full h-[40px] items-center flex justify-center bg-white bg-opacity-50 dark:bg-[#0f0f0f] dark:bg-opacity-50 p-2 backdrop-blur"
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
