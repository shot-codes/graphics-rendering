<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		if (!navigator.gpu) {
			throw new Error('WebGPU not supported on this browser.');
		}

		const adapter = await navigator.gpu.requestAdapter();
		if (!adapter) {
			throw new Error('No appropriate GPUAdapter found.');
		}
		const device = await adapter.requestDevice();

		const context = canvas.getContext('webgpu');
		const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
		context.configure({
			device: device,
			format: canvasFormat,
		});

		const encoder = device.createCommandEncoder();

		const pass = encoder.beginRenderPass({
			colorAttachments: [
				{
					view: context.getCurrentTexture().createView(),
					loadOp: 'clear',
					clearValue: { r: 0, g: 0, b: 0, a: 1.0 },
					storeOp: 'store',
				},
			],
		});
		pass.end();
		device.queue.submit([encoder.finish()]);
	});
</script>

<h2>Part 1</h2>
<canvas bind:this={canvas} class="w-[512px] h-[512px] mx-auto" />
