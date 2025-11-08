// reimplementați metoda reduce(reduceleft) ca o funcție globală
// const sampleArray = [1, 2, 3, 4, 5];

// const map = (array, transformation) => {
//   const result = [];
//   for (const element of array) {
//     result.push(transformation(element));
//   }
//   return result;
// };
// console.log(map(sampleArray, (x) => x * 2));
const reduce = (array, reducer, initialValue) => {
  let accumulator = initialValue;
  let startIndex = 0;
  if (accumulator === undefined) {
    if (array.length === 0)
      throw new TypeError("Reduce of empty array with no initial value");
    accumulator = array[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i], i, array);
  }
  return accumulator;
};

const sampleArray = [1, 2, 3, 4, 5];
const sum = reduce(sampleArray, (acc, x) => acc + x, 0);
console.log(sum);
const product = reduce(sampleArray, (acc, x) => acc * x, 1);
console.log(product);
