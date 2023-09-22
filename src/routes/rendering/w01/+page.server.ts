import type { PageServerLoad } from './$types';
import { readFile } from 'fs/promises';
import { error } from '@sveltejs/kit';

import { readdir } from 'fs/promises';
import { join } from 'path';

async function readAllFiles() {
	const baseDirs = ['graphics', 'rendering'];
	let result = {};

	for (const baseDir of baseDirs) {
		result[baseDir] = {};

		const wDirs = await readdir(join('static', 'source', baseDir));

		for (const wDir of wDirs) {
			result[baseDir][wDir] = {};

			const files = await readdir(join('static', 'source', baseDir, wDir));
			const txtFiles = files.filter((file) => file.startsWith('Part') && file.endsWith('.txt'));

			for (const file of txtFiles) {
				const part = file.slice(0, -4); // Remove '.txt' from the filename
				const data = await readFile(join('static', 'source', baseDir, wDir, file), 'utf-8');
				result[baseDir][wDir][part] = data;
			}
		}
	}

	return result;
}

export const load: PageServerLoad = async ({ params }) => {
	try {
		const data = await readFile('static/source/graphics/w01/Part1.txt', 'utf-8');
		readAllFiles().then((result) => console.log(result));
		readAllFiles().then((result) => console.log(result));

		return {
			source: data,
		};
	} catch (e) {
		console.error(e);
	}
};
