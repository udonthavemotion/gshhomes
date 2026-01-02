import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read and parse the TypeScript files
const dwPath = path.join(__dirname, 'data/double-wide-homes.ts');
const dwContent = fs.readFileSync(dwPath, 'utf-8');

// Extract homes using regex
const homePattern = /{\s*id:\s*['"]([^'"]+)['"]\s*,[\s\S]*?name:\s*['"]([^'"]+)['"]\s*,[\s\S]*?manufacturer:\s*['"]([^'"]+)['"]\s*,[\s\S]*?type:\s*['"]([^'"]+)['"]/g;

const homes = [];
let match;
while ((match = homePattern.exec(dwContent)) !== null) {
  homes.push({
    id: match[1],
    name: match[2],
    manufacturer: match[3],
    type: match[4],
  });
}

console.log('Double Wide Homes Found:');
console.log(`Total: ${homes.length}`);
homes.forEach(h => {
  console.log(`  ✓ ${h.id}: "${h.name}" by ${h.manufacturer} (${h.type})`);
});
