const sortByKey = (array, key) => {
  return array.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

const people = [
  { name: "Ana", age: 25 },
  { name: "Mihai", age: 30 },
  { name: "Elena", age: 20 },
];

console.log(sortByKey(people, "name"));
console.log(sortByKey(people, "age"));
