const fs = require('fs');
const path = require('path');
const os = require('os');

const rootFolder = 'D:';
const levelIndentation = '    ';
const outputFile = 'output.txt';

const listFiles = (dir, indentation) =>
  fs.readdirSync(dir).forEach(file => {
    fs.appendFileSync(path.join(__dirname, outputFile), indentation + file + os.EOL);

    if(fs.statSync(path.join(dir, file)).isDirectory())
      listFiles(path.join(dir, file), indentation + levelIndentation)
  })

listFiles(rootFolder, '');
