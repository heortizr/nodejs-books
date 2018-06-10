"use strict";

const glob = require('glob');

glob('data/*2.txt', (error, files) => console.log(`All files found: ${JSON.stringify(files)}`))
  .on('match', match => console.log(`Match found: ${match}`))
;
