<script lang="ts">
	import hljs from 'highlight.js';

	export let source: { source: string | undefined; shader: string | undefined };
</script>

<div class="flex flex-row mb-20">
	<div class="sticky top-16 self-start my-4 mr-6">
		<slot />
	</div>
	<div class="flex-1">
		{#if source}
			{#if source.source}
				<div class="code-container">
					<span>// typescript</span>
					<pre>
  <code>
{@html hljs.highlight(source.source, { language: 'typescript' }).value}
  </code>
</pre>
				</div>
			{/if}
			{#if source.shader}
				<div class="code-container">
					<span>// wgsl</span>
					<pre>
  <code>
{@html hljs.highlight(source.shader, { language: 'typescript' }).value}
  </code>
</pre>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss">
	pre {
		@apply px-4 dark:bg-[#202020] bg-[#f5f5f5] border border-[#aaaaaa] dark:border-[#303030] rounded-b-md overflow-auto w-full flex;
	}
	code {
		@apply text-sm block w-full max-w-max;
	}
	.code-container {
		@apply my-4 flex flex-col;
	}
	span {
		@apply dark:bg-[#151515] bg-[#e3e3e3] border-[#aaaaaa] w-full border-t border-l border-r rounded-t-md dark:border-[#303030] p-2 dark:text-[#707070];
	}
</style>
