import * as fs from 'fs';

/** @type {import('./$types').PageLoad} */
export function load() {
    const results = fs.readdirSync('componenents');
	return {
		list: results,
	};
}