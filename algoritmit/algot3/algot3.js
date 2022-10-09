/* Funktion aikavaativuus on neliöllinen O(n*n) */
/**
 *
 * @param {Array} arr
 * @return {any}
 */
function findMostFreqBrute(arr) {
  let mostFreqAmount = 0;
  let mostFrequent;

  for (const x of arr) {
    let sameFoundAmount = 0;
    // Lasketaan kuinka monta samaa alkiota taulukossa on
    for (const y of arr) {
      if (x == y) {
        sameFoundAmount++;
      }
    }
    // Jos uusi alkioiden määrä on enemmän kuin viimeksi suurin korvataan uusi aiemmalla ja merkataan nykyinen alkio useimmiten ilmaantuvaksi
    if (sameFoundAmount > mostFreqAmount) {
      mostFrequent = x;
      mostFreqAmount = sameFoundAmount;
    }
  }
  return mostFrequent;
}
/**
 *
 * @param {number} n
 * @return {Array}
 */
function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  return arr;
}

module.exports = { findMostFreqBrute, createNumArr };
