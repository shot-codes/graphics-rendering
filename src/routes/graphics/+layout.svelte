<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container px-6">
	<div class="flex flex-wrap w-full justify-center">
		<a
			href="/graphics/w01"
			title="WORKSHEET_1"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w01')}
			class:text-blue-500={$page.url.href.includes('w01')}>WORKSHEET_1</a
		>
		<a
			href="/graphics/w02"
			title="WORKSHEET_2"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w02')}
			class:text-blue-500={$page.url.href.includes('w02')}>WORKSHEET_2</a
		>
		<a
			href="/graphics/w03"
			title="WORKSHEET_3"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w03')}
			class:text-blue-500={$page.url.href.includes('w03')}>WORKSHEET_3</a
		>
		<a
			href="/graphics/w04"
			title="WORKSHEET_4"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w04')}
			class:text-blue-500={$page.url.href.includes('w04')}>WORKSHEET_4</a
		>
		<a
			href="/graphics/w05"
			title="WORKSHEET_5"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w05')}
			class:text-blue-500={$page.url.href.includes('w05')}>WORKSHEET_5</a
		>
		<a
			href="/graphics/w06"
			title="WORKSHEET_6"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w06')}
			class:text-blue-500={$page.url.href.includes('w06')}>WORKSHEET_6</a
		>
		<a
			href="/graphics/w07"
			title="WORKSHEET_7"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w07')}
			class:text-blue-500={$page.url.href.includes('w07')}>WORKSHEET_7</a
		>
		<a
			href="/graphics/w08"
			title="WORKSHEET_8"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w08')}
			class:text-blue-500={$page.url.href.includes('w08')}>WORKSHEET_8</a
		>
		<a
			href="/graphics/w09"
			title="WORKSHEET_9"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w09')}
			class:text-blue-500={$page.url.href.includes('w09')}>WORKSHEET_9</a
		>
		<a
			href="/graphics/w10"
			title="WORKSHEET_10"
			class="mx-2 hover:underline"
			class:font-bold={$page.url.href.includes('w10')}
			class:text-blue-500={$page.url.href.includes('w10')}>WORKSHEET_10</a
		>
	</div>
	<div class="my-32">
		<slot />
	</div>
</div>
