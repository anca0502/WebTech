// funcție care primește ca parametrii un array de numere
// și un număr și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.

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

const numbers = [3, 5, 12, 3, 5, 3];
const div = 3;
const getSumofDiv = (numbers, div) => {
  return numbers
    .map((d) => {
      if (d % div === 0) {
        return d;
      } else return 0;
    })
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const res = getSumofDiv(numbers, div);
console.log(res);
