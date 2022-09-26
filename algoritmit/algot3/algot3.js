/* Funktion aikavaativuus on neliöllinen O(n*n) */

function findMostFreqBrute(arr) {
  let mostFreqAmount = 0;
  let mostFrequent;

  for (const x of arr) {
    let sameFoundAmount = 0;
    for (const y of arr) {
      if (x == y) {
        sameFoundAmount++;
      }
    }
    if (sameFoundAmount > mostFreqAmount) {
      mostFrequent = x;
      mostFreqAmount = sameFoundAmount;
    }
  }
  return mostFrequent;
}

function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  return arr;
}

module.exports = { findMostFreqBrute, createNumArr };
