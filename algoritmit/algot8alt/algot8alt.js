const regression = require('polynomial-regression');
const data = [
  [1960, 2],
  [1970, 4],
  [1980, 6],
  [1990, 10],
  [2000, 18],
  [2010, 33],
];

const model = regression.createModel();
model.fit(data, [5, 10]);

console.log(Math.floor(model.estimate(5, 2020)));
console.log(Math.floor(model.estimate(5, 2050)));
console.log(Math.floor(model.estimate(5, 2100)));
