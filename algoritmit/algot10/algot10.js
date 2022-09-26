const BC = require('bayes-classifier');
const c = new BC();

const positiveDocuments = [
  `I love tacos.`,
  `Dude, that burrito was epic!`,
  `Holy cow, these nachos are so good and tasty.`,
  `I am drooling over the awesome bean and cheese quesadillas.`,
];

const negativeDocuments = [
  `Gross, worst taco ever.`,
  `The buritos gave me horrible diarrhea.`,
  `I'm going to puke if I eat another bad nacho.`,
  `I'd rather die than eat those nasty enchiladas.`,
];

c.addDocuments(positiveDocuments, 'positive');
c.addDocuments(negativeDocuments, 'negative');

c.train();

console.log(c.classify(`I heard the mexican restaurant is great!`));
console.log(c.classify(`I don't want to eat there again.`));
console.log(c.classify(`The torta is epicly bad.`));
console.log(c.classify(`The torta is tasty.`));

/* Algoritmi laskee tietyn sanan todennäköisyyden ilmetä roskapostissa, ja arvioi sen perusteella sähköpostin joko halutuksi tai roskapostiksi.
   Jokainen sana tutkitaan itsenäisesti ilman relaatiota muihin postin sanoihin tehden algoritmistä naiviin. Algoritmin tarkkuutta voidaan jatkuvasti
   parantaa antamalla sille lisää materiaalia, josta luoda malli, jonka avulla voidaan tarkemmin määrittellä posti tarkoitus.
   */
