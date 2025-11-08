const average = (numbers) => {
  return numbers.reduce((acc, x) => acc + x, 0) / numbers.length;
};

const sampleArray = [10, 20, 30, 40, 50];
console.log(average(sampleArray));
