<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';

	let canvas1: HTMLCanvasElement;
	let canvas2: HTMLCanvasElement;

	onMount(async () => {
		// Load angel scripts
		const scripts = ['/angel/Common/initShaders.js', '/angel/Common/MV.js'];
		const loadScripts = scripts.map((scriptUrl) => {
			const script = document.createElement('script');
			script.src = scriptUrl;
			const loadScript = new Promise<void>((resolve, reject) => {
				script.onload = () => resolve();
				script.onerror = () => reject(new Error(`Script load error: ${scriptUrl}`));
			});
			document.head.appendChild(script);
			return loadScript;
		});
		await Promise.all(loadScripts);

		// Part 1
		const gl1 = canvas1.getContext('webgl');
		gl1?.clearColor(0.3921, 0.5843, 0.9294, 1.0);
		gl1?.clear(gl1.COLOR_BUFFER_BIT);

		// Part 1

		// Part 2
		const gl2 = canvas2.getContext('webgl');
		gl2?.clearColor(0.3921, 0.5843, 0.9294, 1.0);
		gl2?.clear(gl2.COLOR_BUFFER_BIT);
		const program = initShaders(gl2, 'vertex-shader', 'fragment-shader');
		gl2?.useProgram(program);
		const vertices = [vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5)];
		const vBuffer = gl2?.createBuffer();
		gl2?.bindBuffer(gl2?.ARRAY_BUFFER, vBuffer);
		gl2?.bufferData(gl2?.ARRAY_BUFFER, flatten(vertices), gl2?.STATIC_DRAW);
		let vPosition = gl2?.getAttribLocation(program, 'a_Position');
		gl2?.vertexAttribPointer(vPosition, 2, gl2?.FLOAT, false, 0, 0);
		gl2?.enableVertexAttribArray(vPosition);
		gl2?.drawArrays(gl2?.TRIANGLES, 0, vertices.length);
	});
</script>

<!-- Shaders -->
<div>
	<script id="vertex-shader" type="x-shader/x-vertex">
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    varying vec4 v_Color;
    void main() {
      v_Color = a_Color;
      gl_Position = a_Position;
    }
	</script>

	<script id="fragment-shader" type="x-shader/x-fragment">
    precision mediump float;
    varying vec4 v_Color;
    void main() {
      gl_FragColor = v_Color;
    }
	</script>
</div>

<h1>Getting started with WebGL (or WebGPU)</h1>

<h2>Part 1</h2>
<canvas bind:this={canvas1} class="w-[512px] h-[512px] mx-auto" />

<h2>Part 2</h2>
<canvas bind:this={canvas2} class="w-[512px] h-[512px] mx-auto" />

<pre>
  <code>
{@html hljs.highlight(`console.log(hello);`, { language: 'typescript' }).value}
  </code>
</pre>
