const fs = require('fs');

const barrel = JSON.parse(fs.readFileSync('package.json'));
barrel.version = '1.0.1';
fs.mkdirSync('../some-app/node_modules/some-package/dist', { recursive: true });
fs.writeFileSync('../some-app/node_modules/some-package/package.json', JSON.stringify(barrel, null, 2));
fs.copyFileSync('patch.js', '../some-app/node_modules/some-package/dist/index.mjs');