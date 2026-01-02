import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read all three data files
const filesData = {
  singleWide: fs.readFileSync(path.join(__dirname, 'data/homes.ts'), 'utf-8'),
  doubleWide: fs.readFileSync(path.join(__dirname, 'data/double-wide-homes.ts'), 'utf-8'),
  modular: fs.readFileSync(path.join(__dirname, 'data/modular-homes.ts'), 'utf-8'),
};

const homePattern = /{\s*id:\s*['"]([^'"]+)['"]\s*,[\s\S]*?name:\s*['"]([^'"]+)['"]\s*,[\s\S]*?manufacturer:\s*['"]([^'"]+)['"]\s*,[\s\S]*?type:\s*['"]([^'"]+)['"]/g;

const allHomes = [];

Object.entries(filesData).forEach(([type, content]) => {
  let match;
  while ((match = homePattern.exec(content)) !== null) {
    allHomes.push({
      id: match[1],
      name: match[2],
      manufacturer: match[3],
      type: match[4],
    });
  }
  homePattern.lastIndex = 0;
});

console.log(`\n📊 Total Homes Found: ${allHomes.length}`);

const byType = {};
allHomes.forEach(h => {
  if (!byType[h.type]) byType[h.type] = [];
  byType[h.type].push(h);
});

Object.entries(byType).forEach(([type, homes]) => {
  console.log(`\n${type}: ${homes.length} homes`);
  homes.forEach(h => {
    console.log(`  • ${h.name} by ${h.manufacturer}`);
  });
});

// Test filter for Double Wide
console.log(`\n✅ Filter Test: type === 'Double Wide'`);
const filtered = allHomes.filter(h => h.type === 'Double Wide');
console.log(`Found ${filtered.length} Double Wide homes (expected 3)`);
filtered.forEach(h => {
  console.log(`  ✓ ${h.name}`);
});
