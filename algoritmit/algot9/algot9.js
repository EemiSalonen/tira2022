const jsregression = require('js-regression');

const trainingData = [
  [18, 1, 10, 0],
  [20, 2, 20, 0],
  [24, 1, 30, 1],
  [30, 2, 50, 1],
  [32, 1, 50, 0],
  [40, 2, 55, 1],
  [45, 1, 20, 1],
  [51, 2, 60, 0],
  [60, 1, 65, 1],
  [65, 2, 15, 0],
];

/* logReg -funktio tuottaa logistisen regressiomallin. Mallin tuottava algoritmi on
melko monimutkainen, joten yksinkertaistamisen vuoksi on käytetty valmista kirjastoa.
Parametrit a,l ja i vaikuttavat algoritmin tehokkuuteen: tarkkuus vs. nopeus. Niiden
arvoja säädetään riippuen datan määrästä.
*/
function logReg(a, l, i) {
  // regressio-olio logistic syntyy kirjaston algoritmilla
  const logistic = new jsregression.LogisticRegression({
    alpha: a,
    lambda: l,
    iterations: i,
  });

  /*** Harjoitetaan logistista regressiota harjoitusdatalla ***/
  const model = logistic.fit(trainingData);
  return model; // palautetaan harjoitettu malli
}
// Prediction saa parametreikseen harjoitetun mallin ja selittävän muuttujan
function prediction(model, x, y, z) {
  // console.log(model);
  /*** Harjoitetusta mallista saadaan vakio ja kulmakerroin ***/
  const a = model.theta[0]; // vakio
  const b = model.theta[1]; // kulmakerroin
  const c = model.theta[2];
  const d = model.theta[3];
  /*** Lasketaan todennäköisyys logistisen regression kaavalla ***/
  const probability = 1 / (1 + Math.exp(-(a + b * x + c * y + d * z)));
  return probability;
}

const age = 40;
const income = 50;
const gender = 1;
const model = logReg(0.001, 0, 1000000);
const proba = prediction(model, age, gender, income);

console.log(`Ikä: ${age}`);
console.log(`Sukupuoli: ${gender > 1 ? 'Nainen' : 'Mies'}`);
console.log(`Vuositulot: ${income}`);
console.log(`Hilavitkuttimen ostotodennäköisyys: ${proba.toFixed(2)}`);
