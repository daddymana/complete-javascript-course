'use strict';

console.log('-> Challenge 1 START 👉');

const calculateAverage = (scroreOne, scoreTwo, scoreThree) => (scroreOne + scoreTwo + scoreThree) / 3;

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins...`
  }
}

// const avgDolphins = calculateAverage(44, 23, 71);
// const avgKoalas = calculateAverage(85, 54, 41);
const avgDolphins = calculateAverage(65, 54, 49);
const avgKoalas = calculateAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));

console.log('-> Challenge 1 END 👋');
console.log('******************************');

console.log('-> Challenge 2 START 👉');

const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

console.log('-> Challenge 2 END 👋');
console.log('******************************');