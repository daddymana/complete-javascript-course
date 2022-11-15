console.log('-> Challenge 1 START 👉');

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

console.log('-> Challenge 1 END 👋');

/******************************************/

console.log('-> Challenge 2 START 👉');
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})!`);
}
console.log('-> Challenge 2 END 👋');