// const sampleDictionary = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "lazy",
//   "dog",
// ];

// const sampleText = `
//     best
//     read
//     on
//     windy
//     nights
// `;
// const checkAcrostic = (text, dictionary) => {
//   const candidate = text
//     .split("\n")
//     .filter((e) => e)
//     .map((e) => e.trim())
//     .map((e) => e[0])
//     .join("");

//   return dictionary.indexOf(candidate) !== -1;
// };

// console.log(checkAcrostic(sampleText, sampleDictionary));
const censorText = (text, dictionary) => {
  let censored = text;
  for (const word of dictionary) {
    const pattern = new RegExp(`\\b${word}\\b`, "gi");
    censored = censored.replace(pattern, (match) => {
      if (match.length <= 2) return match;
      const middle = "*".repeat(match.length - 2);
      return match[0] + middle + match[match.length - 1];
    });
  }
  return censored;
};

const sampleText = "javascript este minunat";
const dictionary = ["este"];
console.log(censorText(sampleText, dictionary));
