/* Funktion aikavaativuus on lineaarinen O(n) */
/**
 *
 * @param {Array} arr
 * @return {any}
 */
function findMostFreq(arr) {
  let mostFreq;
  const map = new Map();
  for (const x of arr) {
    // Lisätään mappiin alkio jos sitä ei ole vielä lisätty ja jos on niin kasvatetaan kyseisen alkion arvoa mapissa
    if (!map.has(x)) {
      map.set(x, 1);
    } else {
      map.set(x, map.get(x) + 1);
    }
  }

  const highest = Math.max(...map.values());
  map.forEach((value, key) => {
    if (value == highest) {
      mostFreq = key;
    }
  });
  return mostFreq;
}

function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
  return arr;
}

module.exports = { findMostFreq, createNumArr };
