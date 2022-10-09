/**
 *
 * @param {string} x
 * @return {string} reversed
 */
function reverse(x) {
  const string = x;
  let string2 = '';
  let laskin = 1;
  let maara = 0;
  while (maara < string.length) {
    string2 = string2 + string.charAt(string.length - laskin);
    laskin++;
    maara++;
  }
  return string2;
}
/**
 *
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
function findLcs(s1, s2) {
  let lcsLength = 0;
  let lastIndex = 0;
  let lcs = '';
  const matrix = [];
  // Luodaan matriisi, joka on s1 korkuinen ja s2 levyinen ja kaikki alkiot ovat alustettu 0
  for (let i = 0; i < s1.length; i++) {
    matrix.push(new Array(s2.length).fill(0));
  }

  let matrixIndex = 0;
  let lastCount = 0;
  // Käydään lävitse merkkijonot ja samalla seurataan matriisin alkioit matrixIndex muuttujan avulla, joka edustaa matriisin riviä
  for (const l1 of s1) {
    for (let i = 0; i < s2.length; i++) {
      if (l1 === s2[i]) {
        if (matrixIndex == 0 || i == 0) {
          matrix[matrixIndex][i] = lastCount + 1;
        } else {
          // Otetaan edellinen matriisin rivi ja tarkistetaan sen edellisen alkion tila ja lisätään siihen 1 tallentaen uusi arvo nykyiseen
          // matriisin alkioon
          const lastRow = matrix[matrixIndex - 1];
          lastCount = lastRow[i - 1];
          matrix[matrixIndex][i] = lastCount + 1;
        }
        if (matrix[matrixIndex][i] > lcsLength) {
          lcsLength = matrix[matrixIndex][i];
          lastIndex = i;
        }
      }
    }
    matrixIndex++;
  }
  console.log(matrix);
  for (let i = 0; i < lcsLength; i++) {
    lcs += s2[lastIndex - i];
  }
  return reverse(lcs);
}

function genString(charset, n) {
  let string = '';

  for (let j = 0; j < n; j++) {
    string += charset[Math.floor(Math.random() * charset.length - 1) + 1];
  }

  return string;
}

module.exports = { findLcs, genString };
