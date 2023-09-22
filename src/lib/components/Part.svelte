<script lang="ts">
	import hljs from 'highlight.js';

	export let sourceString: string;
</script>

<slot />
<pre>
  <code>
{@html hljs.highlight(sourceString, { language: 'typescript' }).value}
  </code>
</pre>
