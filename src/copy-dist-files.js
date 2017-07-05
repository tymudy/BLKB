const fs = require('fs');
const fse = require('fs-extra')

const resources = [
  'src/index_prod.html',
  'node_modules/zone.js/dist/zone.js',
  'node_modules/reflect-metadata/Reflect.js',
  'src/app/crestron-sdk/vendor/crestron.js',
  'src/app/crestron-sdk/vendor/crestron_emu.js',
  'src/app/crestron-sdk/vendor/crestronVideo.js'
];

resources.map(function (f) {
  const path = f.split('/');
  const t = 'dist/' + path[path.length - 1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});

fse.copy('src/assets', 'dist/assets', err => {
  if (err) {
    return console.error(err);
  }
  console.log('successfully copied assets folder from src to dist');
});
