<script lang="ts">
	import hljs from 'highlight.js';

	export let source: { source: string | undefined; shader: string | undefined };
</script>

<slot />
{#if source}
	{#if source.source}
		<div>
			<span>// typescript</span>
			<pre>
  <code>
{@html hljs.highlight(source.source, { language: 'typescript' }).value}
  </code>
</pre>
		</div>
	{/if}
	{#if source.shader}
		<div>
			<span>// wgsl</span>
			<pre>
  <code>
{@html hljs.highlight(source.shader, { language: 'typescript' }).value}
  </code>
</pre>
		</div>
	{/if}
{/if}

<style lang="postcss">
	pre {
		@apply px-4 dark:bg-[#202020] bg-[#f5f5f5] border dark:border-[#303030] rounded-b-md overflow-x-scroll;
	}
	code {
		@apply text-sm overflow-x-scroll;
	}
	div {
		@apply my-4 flex flex-col;
	}
	span {
		@apply dark:bg-[#151515] w-full border-t border-l border-r rounded-t-md dark:border-[#303030] p-2 dark:text-[#707070];
	}
</style>
