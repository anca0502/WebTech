// function fibGen() {
//   const cache = [1, 1];
//   const fib = (index) => {
//     if (index < cache.length) {
//       console.log("found " + index);
//       return cache[index];
//     } else {
//       console.log("calculated " + index);
//       cache[index] = fib(index - 1) + fib(index - 2);
//       return cache[index];
//     }
//   };
//   return fib;
// }

// const fib = fibGen();
// console.log(fib(1));
// console.log(fib(5));
// console.log(fib(3));

// implementați o variantă recursiva
//  a unei funcții de exponențiere.
//  Atât rezultatele finale
// cât și cele intermediare vor fi memoizate.
function expGen(value) {
  const cache = [1, value];
  const exp = (p) => {
    if (p < cache.length) {
      console.log("found" + p);
      return cache[p];
    } else {
      console.log("calculated " + p);
      cache[p] = exp(p - 1) * value;
      return cache[p];
    }
  };
  return exp;
}

const exp = expGen(2);
console.log(exp(1));
console.log(exp(5));
console.log(exp(3));
