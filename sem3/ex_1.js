// const words = [
//   "fox",
//   "wolf",
//   "snake",
//   "crocodile",
//   "lion",
//   "cat",
//   "crocodile",
//   "horse",
// ];

// const forbiddenWord = "crocodile";
// const minLength = 4;

// const filterWords = (words, forbiddenWord, minLength) => {
//   const result = words.filter((word) => {
//     if (word !== forbiddenWord && word.length >= minLength) {
//       return true;
//     }
//     return false;
//   });
//   return result;
// };

// console.log(filterWords(words, forbiddenWord, minLength));

// folosiți metodele map și filter pentru a procesa un array de numere reprezentând ani de naștere obținând vârstele peste 18 ani.

const years = [2005, 2004, 2013, 2009, 1975, 1946, 2000];
const crtYear = 2025;
const dif = 18;

const getAge = (years) => {
  return years.map((year) => {
    return crtYear - year;
  });
};

ages = getAge(years);

const filterAges = (ages, dif) => {
  const result = ages.filter((age) => {
    if (age >= dif) {
      return true;
    }
    return false;
  });
  return result;
};
// console.log(getAge(years));

console.log(filterAges(ages, dif));

// const getTotalArea = (squareDimensions) => {
//   return squareDimensions
//     .map((side) => {
//       return side * side;
//     })
//     .reduce((prev, current) => {
//       return prev + current;
//     }, 0);
// };

// const squareDimensions = [3, 5, 12, 3, 5, 3];

// const result = getTotalArea(squareDimensions);
// console.log("result: ", result);
