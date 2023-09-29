<script lang="ts">
	import type { PageData } from './$types';
	import Part from '$lib/components/Part.svelte';
	import Part1 from './Part1.svelte';
	import Part2 from './Part2.svelte';
	import Part3 from './Part3.svelte';
	import Part4 from './Part4.svelte';
	export let data: PageData;
</script>

<div class="px-6">
	<h1 class="text-center">Getting started with WebGL (or WebGPU)</h1>
	<Part source={data.graphics.w01.Part1}>
		<Part1 />
	</Part>

	<Part source={data.graphics.w01.Part2}>
		<h2>Part 2</h2>
		<Part2 />
	</Part>

	<Part source={data.graphics.w01.Part3}>
		<h2>Part 3</h2>
		<Part3 />
	</Part>
	<Part source={data.graphics.w01.Part4}>
		<h2>Part 4</h2>
		<Part4 />
	</Part>
</div>

<style lang="postcss">
	h2 {
		@apply pl-2;
	}
</style>
