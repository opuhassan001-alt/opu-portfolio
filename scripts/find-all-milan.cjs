const fs = require('fs');

function checkFile(path) {
  console.log(`\n=== CHECKING ${path} ===`);
  const txt = fs.readFileSync(path, 'utf8');
  const regex = /"name":\s*"([^"]+)",[\s\S]*?"club":\s*"([^"]+)"/g;
  let m;
  const list = [];
  while ((m = regex.exec(txt)) !== null) {
    if (m[2].toLowerCase().includes('milan')) {
      list.push(`${m[1]} -> ${m[2]}`);
    }
  }
  console.log(`Found ${list.length} Milan entries:`);
  console.log([...new Set(list)].join('\n'));
}

checkFile('src/data/uclCompleteRegistry.ts');
checkFile('src/data/fixturesData.ts');
checkFile('ucl-analytics-dashboard/src/data/uclData.ts');

