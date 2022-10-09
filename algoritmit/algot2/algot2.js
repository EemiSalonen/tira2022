const readlineSync = require('readline-sync');
/**
 *
 * @param {string} str
 * @return {string} string
 */
function collectFeedRec(str = '') {
  const input = readlineSync.question('Input?: ');

  if (input === '#') return str;
  str += input;

  return collectFeedRec(str);
}
module.exports = collectFeedRec;
