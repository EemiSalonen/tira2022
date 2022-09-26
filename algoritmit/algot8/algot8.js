const regression = require('regression');

function getPopulation(year) {
  const yearCodes = new Map();
  let value = 0;
  let key = 1960;
  for (let i = 0; i <= 1000; i++) {
    let rounded = Math.round(value * 10) / 10;
    yearCodes.set(key, rounded);
    key += 1;
    value += 0.1;
  }

  const expResult = regression.exponential([
    [0, 2],
    [1, 4],
    [2, 6],
    [3, 10],
    [4, 18],
    [5, 33],
  ]);

  let code;
  yearCodes.forEach((value, key) => {
    // console.log(key, value);
    if (key === year) {
      code = value;
    }
  });

  return expResult.predict(code)[1];
}
console.log(`Projected populations per year:`);
console.log(`2020: ${getPopulation(2020)}`);
console.log(`2050: ${getPopulation(2050)}`);
console.log(`2100: ${getPopulation(2100)}`);
