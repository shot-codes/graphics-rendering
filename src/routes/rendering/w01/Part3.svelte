<script lang="ts">
	import { onMount } from 'svelte';
	import shader from './shaders/Part3.wgsl?raw';

	let canvas: HTMLCanvasElement;
	const canvasWidth = 512;
	const canvasHeight = 512;

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

		const vertices = new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1, -1, -1]);

		const vertexBuffer = device.createBuffer({
			label: 'Cell vertices',
			size: vertices.byteLength,
			usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
		});

		device.queue.writeBuffer(vertexBuffer, /*bufferOffset=*/ 0, vertices);

		const vertexBufferLayout = {
			arrayStride: 8,
			attributes: [
				{
					format: 'float32x2',
					offset: 0,
					shaderLocation: 0, // Position, see vertex shader
				},
			],
		};

		const cellShaderModule = device.createShaderModule({
			label: 'Cell shader',
			code: shader,
		});

		const cellPipeline = device.createRenderPipeline({
			label: 'Cell pipeline',
			layout: 'auto',
			primitive: {
				topology: 'triangle-strip',
			},
			vertex: {
				module: cellShaderModule,
				entryPoint: 'vertexMain',
				buffers: [vertexBufferLayout],
			},
			fragment: {
				module: cellShaderModule,
				entryPoint: 'fragmentMain',
				targets: [
					{
						format: canvasFormat,
					},
				],
			},
		});

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

		pass.setPipeline(cellPipeline);
		pass.setVertexBuffer(0, vertexBuffer);
		pass.draw(vertices.length / 2); // 6 vertice
		pass.end();
		device.queue.submit([encoder.finish()]);
	});
</script>

<h2>Part 3</h2>
<canvas bind:this={canvas} class="w-[{canvasWidth}px] h-[{canvasHeight}px] mx-auto" />
