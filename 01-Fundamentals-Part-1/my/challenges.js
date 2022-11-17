console.log('-> Challenge 1 START 👉');

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

console.log('-> Challenge 1 END 👋');
console.log('******************************');

/******************************************/

console.log('-> Challenge 2 START 👉');
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})!`);
}
console.log('-> Challenge 2 END 👋');
console.log('******************************');

/******************************************/

console.log('-> Challenge 3 START 👉');

let mediaDolphins = (96 + 108 + 89) / 3;
let mediaKoalas = (88 + 91 + 110) / 3;

if (mediaDolphins === mediaKoalas) {
  console.log('Dolphins and Koalas wins the competition both! 🏆');
} else if (mediaDolphins > mediaKoalas) {
  console.log('Dolphins win the competition! 🏆');
} else {
  console.log('Koalas win the competition! 🏆');
}

mediaDolphins = (97 + 112 + 101) / 3;
mediaKoalas = (109 + 95 + 123) / 3;

if (mediaDolphins !== mediaKoalas && mediaDolphins > mediaKoalas && mediaDolphins >= 100) {
  console.log('Dolphins win the Bonus 1! 🏆');
} else if (mediaKoalas > mediaDolphins && mediaKoalas >= 100) {
  console.log('Koalas win the Bonus 1! 🏆');
}

mediaKoalas = (109 + 95 + 106) / 3;

if (mediaDolphins === mediaKoalas && mediaDolphins >= 100 && mediaKoalas >= 100) {
  console.log('Dolphins and Koalas wins the Bonus 2! 🏆');
}

console.log('-> Challenge 3 END 👋');
console.log('******************************');

/******************************************/

console.log('-> Challenge 4 START 👉');

const bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}€, the tip was ${tip}€, and the total value ${bill + tip}€`);

console.log('-> Challenge 4 END 👋');
console.log('******************************');