import fs from 'fs';
import path from 'path';
import { Config } from './config';
import { convertRow } from './convertRow';

export = function (argv: string[]): void {
	const inputFile = fs.readFileSync(path.join(process.cwd(), argv[0]), { encoding: 'utf-8' });
	let outputFile: string = Config.title + '\n';

	for (const row of inputFile.split('\n')) {
		try {
			outputFile += convertRow(JSON.parse(row)) + '\n';
		} catch (error) {
			// JSON이 아님
		}
	}

	fs.writeFileSync(path.join(process.cwd(), argv[0] + '.csv'), outputFile);

	console.log(`Success to converted: ${path.join(process.cwd(), argv[0] + '.csv')}`)
}