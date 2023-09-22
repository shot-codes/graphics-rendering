import type { LayoutServerLoad } from './$types';
import { readFile, readdir } from 'fs/promises';
import { error } from '@sveltejs/kit';
import { join } from 'path';

interface PartData {
	[part: string]: string;
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

			const files: string[] = await readdir(join('static', 'source', baseDir, wDir));
			const txtFiles: string[] = files.filter(
				(file) => file.startsWith('Part') && file.endsWith('.txt')
			);

			for (const file of txtFiles) {
				const part: string = file.slice(0, -4); // Remove '.txt' from the filename
				const data: string = await readFile(join('static', 'source', baseDir, wDir, file), 'utf-8');
				result[baseDir][wDir][part] = data;
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
