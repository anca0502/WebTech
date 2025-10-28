// String.prototype.capitalizedWords = function () {
//   return this.replace(/\b[a-z]/g, (match) => match.toUpperCase());
// };

// console.log("these words will be calipalized".capitalizedWords());

// implementați metoda 'times' pe tipul Number,
//  astfel încât 3.times(() => {}) să execute funcția de 3 ori.

Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
};
(3).times(() => console.log("Hi"));
