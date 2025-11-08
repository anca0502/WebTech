// function addToArray(array, ...args) {
//     for (var i = 0; i < args.length; i++) {
//         array.push(args[i]);
//     }

//     return array
// }

// let array = ["a"]
// console.log(addToArray(array, "b", "c").join(", "))

// funcție care primește ca parametrii
//  două array-uri de aceeași lungime și returnează un array cu elementele din cele două surse intercalate.

function inter(s1, s2) {
  let res = [];
  if (s1.length === s2.length) {
    for (i = 0; i < s1.length; i++) {
      res.push(s1[i]);
      res.push(s2[i]);
    }
    return res;
  } else return -1;
}

console.log(inter([1, 2], ["a", "b", "c"]));
