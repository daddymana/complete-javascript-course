'use strict';

console.log('-> Challenge 1 START 👉');

const calculateAverage = (scroreOne, scoreTwo, scoreThree) => (scroreOne + scoreTwo + scoreThree) / 3;

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  }
}

// const avgDolphins = calculateAverage(44, 23, 71);
// const avgKoalas = calculateAverage(85, 54, 41);
const avgDolphins = calculateAverage(65, 54, 49);
const avgKoalas = calculateAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));

console.log('-> Challenge 1 END 👋');
console.log('******************************');