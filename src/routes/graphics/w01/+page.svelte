<script lang="ts">
	import type { PageData } from './$types';
	import Part from '$lib/components/Part.svelte';
	import Part1 from './Part1.svelte';
	import Part2 from './Part2.svelte';
	import Part3 from './Part3.svelte';
	import Part4 from './Part4.svelte';
	export let data: PageData;
</script>

<h1>Getting started with WebGL (or WebGPU)</h1>
<Part source={data.graphics.w01.Part1}>
	<Part1 />
</Part>

<Part source={data.graphics.w01.Part2}>
	<Part2 />
</Part>

<Part source={data.graphics.w01.Part3}>
	<Part3 />
</Part>
<Part source={data.graphics.w01.Part4}>
	<Part4 />
</Part>
