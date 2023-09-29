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
					clearValue: { r: 0.3921, g: 0.5843, b: 0.9294, a: 1.0 },
					storeOp: 'store',
				},
			],
		});
		pass.end();
		device.queue.submit([encoder.finish()]);
	});
</script>

<div
	class="dark:bg-[#202020] bg-[#f5f5f5] dark:border-[#303030] border-[#aaaaaa] border rounded-md flex flex-col"
>
	<span
		class="dark:bg-[#151515] bg-[#e3e3e3] rounded-t-md mb-4 p-2 px-4 border-b border-[#aaaaaa] dark:border-[#303030] font-bold"
	>
		Part 1</span
	>
	<canvas bind:this={canvas} class="w-[512px] h-[512px] m-3" />
</div>
