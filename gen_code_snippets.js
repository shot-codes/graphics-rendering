import { readdir, readFile, writeFile } from 'fs/promises';
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

async function processFiles() {
	for (const baseDir of baseDirs) {
		const subDirs = (await readdir(baseDir, { withFileTypes: true }))
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		for (const subDir of subDirs) {
			const dir = join(baseDir, subDir);

			const files = await readdir(dir);
			const svelteFiles = files.filter((file) => /^Part\d+\.svelte$/.test(file));

			for (const file of svelteFiles) {
				console.log(file);
				const data = await readFile(join(dir, file), 'utf8');
				const regex = /<script[^>]*>((.|[\r\n])*?)<\/script>/;
				const match = data.match(regex);
				let sourceFile = ts.createSourceFile('file.ts', match[1], 7, true);
				let result = visit(sourceFile, sourceFile);
				console.log(result);

				await writeFile(join(dir, file.replace('.svelte', '.txt')), `${result}\n`);
			}
		}
	}
}

processFiles();
