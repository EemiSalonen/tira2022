/* Päättelypuu luo puu rakenteen, jossa on päätössolmuja, joiden totuudenmukaisuus määrittää arvioitavan arvon lopputuloksen. Riippuen 
  päätössolmun tilanteesta liikutaan puussa alaspäin joko vasemmalle tai oikealle, ja samalla muutetaan ehtoja, jotta päädyttäisiin mahdollisimman
  tarkasti oikeaan lopputulokseen. Malli ei käytä kaavaa samalla tavalla kuin regressioalgoritmeissa ja on monin tavoin yksinkertaisempi tapa
  saada lopputulos. Kuitenkin päätöspuu on myös epätarkempi ja sen antama tulos on arvio testidatan tilasta, verrattuna regression tarjoamaan 
  prosenttiarvoon. */

const DecTree = require('decision-tree');

const trainingData = [
  { age: 18, gender: 1, income: 10, success: false },
  { age: 20, gender: 2, income: 20, success: false },
  { age: 24, gender: 1, income: 30, success: true },
  { age: 30, gender: 2, income: 50, success: true },
  { age: 32, gender: 1, income: 50, success: false },
  { age: 40, gender: 2, income: 55, success: true },
  { age: 45, gender: 1, income: 20, success: true },
  { age: 51, gender: 2, income: 60, success: false },
  { age: 60, gender: 1, income: 65, success: true },
  { age: 65, gender: 2, income: 15, success: false },
];

const outcome = 'success';

const features = ['age', 'gender', 'income'];

const dt = new DecTree(trainingData, outcome, features);

console.log(dt);
