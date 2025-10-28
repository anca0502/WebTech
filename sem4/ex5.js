// const orderCoffee = (type) => {
//   const types = {
//     REGULAR: "REGULAR",
//     SPECIAL: "SPECIAL",
//   };

//   if (Object.values(types).indexOf(type) === -1) {
//     throw new Error("coffee error");
//   } else {
//     console.log(`preparing ${type} coffee`);
//   }
// };

// try {
//   orderCoffee("REGULAR");
//   orderCoffee("SWEET_COFFEE_NO_SUGAR");
// } catch (err) {
//   console.log(err);
// }

// implementați funcția increaseSalary
//  care primește ca parametrii un array de salarii
//  și un număr reprezentând procentul cu care se vor
//  mări (ex 10). Funcția aruncă excepții dacă primul
//  parametru nu este un array sau al doilea parametru
//  nu este un număr.
const increaseSalary = (salaries, p) => {
  if (Array.isArray(salaries) != true) {
    throw new Error("wrong input of salaries");
  } else if (typeof p != "number") {
    throw new Error("wrong input of %");
  } else {
    for (let i = 0; i < salaries.length; i++) {
      salaries[i] = salaries[i] + (p / 100) * salaries[i];
    }
  }
};
salaries = [10, 20, 30];
try {
  increaseSalary(salaries, 10);
  increaseSalary(5, 10);
  increaseSalary(salaries, procent);
} catch (err) {
  console.log(err);
}
