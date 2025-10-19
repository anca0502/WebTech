// const sampleString = "the quick brown fox jumps over the lazy dog";

// const getCounts = (text) => {
//   const words = text.split(" ");
//   const result = {};
//   for (let word of words) {
//     if (word in result) {
//       result[word]++;
//     } else {
//       result[word] = 1;
//     }
//   }
//   for (let word in result) {
//     result[word] /= words.length;
//   }
//   return result;
// };

// console.log(getCounts(sampleString));

// implementează o funcție care calculează frecvențele relative de apariție a unor litere într-un text,
//  excluzând caracterul pentru spațiu.

const sampleString = "the quick brown fox jumps over the lazy dog";
const getCounts = (text) => {
  const letters = text.split("");
  const result = {};
  for (i = 0; i < letters.length; i++) {
    if (letters[i] != " ") {
      if (letters[i] in result) {
        result[letters[i]]++;
      } else {
        result[letters[i]] = 1;
      }
    }
  }
  for (let letter in result) {
    result[letter] /= letters.length;
  }
  return result;
};
console.log(getCounts(sampleString));
