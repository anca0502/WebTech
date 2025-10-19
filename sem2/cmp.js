// funcție care returnează numărul de caractere diferite între două string-uri de aceeași lungime primite ca parametri.
// Dacă string-urile primite nu sunt de aceeași lungime, funcția va returna -1.
function cmpStrings(s1, s2) {
  cnt = 0;
  if (s1.length === s2.length) {
    for (i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) cnt++;
    }
    return cnt;
  } else return -1;
}

console.log(cmpStrings("aBcDe", "AbCdE"));
