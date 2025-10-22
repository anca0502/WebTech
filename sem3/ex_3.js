// const formatString = (s, ...format) => {
//   let modified = s;
//   for (let i = 0; i < format.length; i++) {
//     if (modified.indexOf("{" + i + "}") !== -1) {
//       modified = modified.replace("{" + i + "}", format[i]);
//     }
//   }
//   return modified;
// };

// console.log(
//   formatString("this is a {0} string  and we've {1} it ", "nice", "modified")
// );

// implementați o funcție de formatare a unui string care suportă parametrii numiți; de exemplu
// "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".

const formatString = (s, format) => {
  let modified = s;
  for (let key in format) {
    modified = modified.replace("{" + key + "}", format[key]);
  }
  return modified;
};

console.log(
  formatString("un {substantiv} este {adjectiv} ", {
    substantiv: "calut",
    adjectiv: "dragut",
  })
);
