'use strict';

let hasDrivesLIcense = false;
const passTest = true;

if (passTest) hasDrivesLIcense = true;
if (hasDrivesLIcense) console.log('I can drive!');


const daniele = {
  firstName: 'Daniele',
  lastName: 'Manassero',
  birthYear: 1984,
  job: 'developer ',
  friends: ['Fulvio', 'Marcvo', 'Enrico'],
  hasDrivesLIcense: true,

  calcAge: function() {
    this.age = 2022 - this.birthYear;
    return this.age
  },

  getSummary: function() {
    return `${this.firstName} è un ${this.job} di ${this.calcAge()} e ${this.hasDrivesLIcense ? 'ha' : 'non ha'} la patente di guida`
  }
}

console.log(daniele);
console.log(daniele.lastName);

const nameKey = 'Name';
console.log(daniele[`first${nameKey}`]);
console.log(daniele[`last${nameKey}`]);

// const interestedIn = prompt('Cosa vuoi sapere di Daniele? Scegli tra firstName, lastName, age, job e friends');
// if (daniele[interestedIn]) {
//   console.log(`Daniele's ${interestedIn}: `, daniele[interestedIn]);
// } else {
//   console.log('Richiesta sbagliata! Scegli tra firstName, lastName, age, job e friends');
// }

daniele.location = 'Italy';

console.log(`${daniele.firstName} ha ${daniele.friends.length} amici, e il suo migliore amico si chiama ${daniele.friends[0]}`);

console.log(daniele.getSummary());