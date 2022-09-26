const readlineSync = require('readline-sync');

function collectFeed() {
  let string = '';

  while (true) {
    const input = readlineSync.question('Input?: ');

    if (input === '#') break;

    string += input;
  }
  return string;
}

module.exports = collectFeed;
