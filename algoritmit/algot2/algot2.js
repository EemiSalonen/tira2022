const readlineSync = require('readline-sync');

function collectFeedRec(str = '') {
  const input = readlineSync.question('Input?: ');

  if (input === '#') return str;
  str += input;

  return collectFeedRec(str);
}
console.log(collectFeedRec());
module.exports = collectFeedRec;