<script lang="ts">
	import type { PageData } from './$types';
	import Part from '$lib/components/Part.svelte';
	import Part1 from './Part1.svelte';
	import Part2 from './Part2.svelte';
	import Part3 from './Part3.svelte';

	export let data: PageData;
</script>

<h1>Introduction</h1>

<Part source={data.rendering.w01.Part1}>
	<Part1 />
</Part>

<Part source={data.rendering.w01.Part2}>
	<Part2 />
</Part>

<Part source={data.rendering.w01.Part3}>
	<Part3 />
</Part>
