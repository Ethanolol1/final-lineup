// This file isn't fully working yet, so it has yet to be added to documentation. Manual yarn.lock editing is usually not advised, but instructions are laid out in README

const fs = require('fs');
const readline = require('readline');

const filePath = 'yarn.lock';
const oldPackage = '    nth-check "^1.0.2"';
const newPackage = '    nth-check "^2.0.1"';

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  output: fs.createWriteStream('temp-lockfile.tmp'), // Temporary file to write updated content
  terminal: false,
});

rl.on('line', (line) => {
  if (line.startsWith(oldPackage)) {
    // Replace the old package version with the new one
    const updatedLine = line.replace(oldPackage, newPackage);
    rl.output.write(updatedLine + '\n');
  } else {
    rl.output.write(line + '\n');
  }
});

rl.on('close', () => {
  // Replace the original yarn.lock with the updated content
  fs.rename('temp-lockfile.tmp', filePath, (err) => {
    if (err) throw err;
    console.log(`${oldPackage} updated to ${newPackage} in yarn.lock`);
  });
});
