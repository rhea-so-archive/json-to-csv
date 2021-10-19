export function convertCSV(items: any[]): string {
	let output: string = '';
	items.forEach((item, index) => {
		output += '"' + String(item).replace(/"/gi, '""') + (index !== items.length - 1 ? '",' : '"');
	});
	return output;
}