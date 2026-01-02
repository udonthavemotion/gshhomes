import { readFileSync } from 'fs';

// Read all data files
const singleWideHomes = JSON.parse(readFileSync('./data/homes.ts', 'utf-8'));
const doubleWideFile = readFileSync('./data/double-wide-homes.ts', 'utf-8');

// Count homes in single-wide (homes.ts exports as array)
const singleWideCount = (singleWideFile.match(/^\s+{$/gm) || []).length;

// Count double-wide homes (should be 3)
const doubleWideExports = doubleWideFile.match(/export const DOUBLE_WIDE_HOMES.*?=\s*\[([\s\S]*?)\];/);
const doubleWideObjects = (doubleWideFile.match(/\{\s*id:/g) || []).length;

console.log('Data file analysis:');
console.log('Single-wide homes in homes.ts:', singleWideCount);
console.log('Double-wide home objects in double-wide-homes.ts:', doubleWideObjects);
console.log('\nDouble-wide homes defined:');
console.log('- The Boujee (id: boujee)');
console.log('- The Burton (id: burton)');  
console.log('- The Washington (id: washington)');
