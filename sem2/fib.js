// const checkPrime = (n) => {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (!(n % i)) {
//       return false;
//     }
//   }
//   return true;
// };

// if (process.argv.length <= 2) {
//   console.log("not enough parameters");
// } else {
//   console.log(checkPrime(parseInt(process.argv[2])));
// }

// implementează o funcție care calculează elementul de un anumit ordin al șirului lui Fibonacci,
// primind acest ordin ca parametru de linie de comandă.

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n > 1) {
    let res = 0;
    let x = 1;
    for (i = 0; i < n; i++) {
      res = res + x;
      x = res - x;
    }
    return res;
  }
}

console.log(fib(parseInt(process.argv[2])));
