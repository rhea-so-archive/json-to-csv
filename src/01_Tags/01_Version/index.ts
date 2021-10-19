import fs from 'fs';
import path from 'path';

function func(_argv: string[]) {
	const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), { encoding: 'utf-8' }));
	console.info(`${packageJson.name} v${packageJson.version}`);
}

export = func;