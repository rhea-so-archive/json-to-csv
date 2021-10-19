import { convertCSV } from "./convertCSV";

interface IRow {
	String: string,
	Number: number
}

export function convertRow(row: IRow): string {
	return convertCSV([row.String, row.Number]);
}