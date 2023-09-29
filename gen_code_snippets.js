import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import ts from 'typescript';

const baseDirs = [
	join(process.cwd(), 'src', 'routes', 'graphics'),
	join(process.cwd(), 'src', 'routes', 'rendering'),
];

function visit(node, sourceFile) {
	if (ts.isCallExpression(node)) {
		if (node.expression.getText(sourceFile) === 'onMount') {
			const [arg] = node.arguments;
			if (ts.isArrowFunction(arg) || ts.isFunctionExpression(arg)) {
				const { body } = arg;
				if (ts.isBlock(body)) {
					const result = body.getText(sourceFile).slice(1, -1);
					return result;
				}
			}
		}
	}
	let result;
	ts.forEachChild(node, (child) => {
		const childResult = visit(child, sourceFile);
		if (childResult !== undefined) {
			result = childResult;
		}
	});
	return result;
}

function formatCode(code) {
	let lines = code.split('\n');
	lines = lines.slice(1, -1);
	lines = lines.map((line) => line.replace(/^\t\t/, ''));
	code = lines.join('\n');
	return code;
}

async function processFiles() {
	for (const baseDir of baseDirs) {
		const subDirs = (await readdir(baseDir, { withFileTypes: true }))
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		for (const subDir of subDirs) {
			const dir = join(baseDir, subDir);

			// Process svelte files
			const files = await readdir(dir);
			const svelteFiles = files.filter((file) => /^Part\d+\.svelte$/.test(file));

			for (const file of svelteFiles) {
				const data = await readFile(join(dir, file), 'utf8');
				const regex = /<script[^>]*>((.|[\r\n])*?)<\/script>/;
				const match = data.match(regex);
				let sourceFile = ts.createSourceFile('file.ts', match[1], 7, true);
				let result = visit(sourceFile, sourceFile);
				const staticDir = dir.replace('src', 'static').replace('routes', 'source');
				await mkdir(staticDir, { recursive: true });
				await writeFile(join(staticDir, file.replace('.svelte', '.txt')), `${formatCode(result)}`);
			}

			// Process wgsl files
			const shaderDir = join(dir, 'shaders');
			try {
				const wgslFiles = (await readdir(shaderDir)).filter((file) => file.endsWith('.wgsl'));
				for (const file of wgslFiles) {
					const data = await readFile(join(shaderDir, file), 'utf8');
					const staticDir = shaderDir.replace('src', 'static').replace('routes', 'source');
					await mkdir(staticDir, { recursive: true });
					await writeFile(join(staticDir, file.replace('.wgsl', '.wgsl.txt')), `${data.trimEnd()}`);
				}
			} catch (error) {
				if (error.code === 'ENOENT') {
					// Directory does not exist, skip to next iteration
					continue;
				} else {
					// Some other error occurred
					throw error;
				}
			}
		}
	}
	console.log('Files processed');
}

processFiles();
