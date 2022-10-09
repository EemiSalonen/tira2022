const readlineSync = require('readline-sync');
/**
 *
 * @return {string} string
 */
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
