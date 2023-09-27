import type { LayoutServerLoad } from './$types';
import { readFile, readdir } from 'fs/promises';
import { error } from '@sveltejs/kit';
import { join } from 'path';

interface PartData {
	[part: string]: {
		source: string | undefined;
		shader: string | undefined;
	};
}

interface WDirData {
	[wDir: string]: PartData;
}

interface BaseDirData {
	[baseDir: string]: WDirData;
}

async function readAllFiles(): Promise<BaseDirData> {
	const baseDirs = ['graphics', 'rendering'];
	const result: BaseDirData = {};

	for (const baseDir of baseDirs) {
		result[baseDir] = {};

		const wDirs: string[] = await readdir(join('static', 'source', baseDir));

		for (const wDir of wDirs) {
			result[baseDir][wDir] = {};

			// Handle svelte files
			const files: string[] = await readdir(join('static', 'source', baseDir, wDir));
			const txtFiles: string[] = files.filter(
				(file) => file.startsWith('Part') && file.endsWith('.txt')
			);

			for (const file of txtFiles) {
				const part: string = file.slice(0, -4); // Remove '.txt' from the filename
				const data: string = await readFile(join('static', 'source', baseDir, wDir, file), 'utf-8');
				result[baseDir][wDir][part] = { source: data, shader: undefined };
			}

			// Handle wgsl files
			const shaderDir = join('static', 'source', baseDir, wDir, 'shaders');
			try {
				const shaderFiles = await readdir(shaderDir);
				const wgslFiles = shaderFiles.filter(
					(file) => file.startsWith('Part') && file.endsWith('.wgsl.txt')
				);

				for (const file of wgslFiles) {
					const part = file.slice(0, -9); // Remove '.wgsl.txt' from the filename
					const data = await readFile(join(shaderDir, file), 'utf-8');
					if (result[baseDir][wDir][part]) {
						result[baseDir][wDir][part].shader = data;
					}
				}
			} catch (error) {
				continue;
			}
		}
	}
	return result;
}

export const load: LayoutServerLoad = async () => {
	try {
		const sourceData = await readAllFiles();
		return sourceData;
	} catch (e) {
		console.error(e);
		return error(404);
	}
};
