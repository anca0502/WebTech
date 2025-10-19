// let sayHello = (name) => {
//   return "Hello, ${name}!";
// };

let sayHello = (name) => `Hello, ${name}!`;
console.log(sayHello(process.argv[2]));
