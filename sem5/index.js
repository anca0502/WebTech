// let crypto = require("crypto-js");
// let word1 = "word1";
// let word2 = "word2";
// let crypt = crypto.AES.encrypt(
//   JSON.stringify(word1),
//   "secret key 123"
// ).toString();

// console.log(crypt);
// let bytes = crypto.AES.decrypt(crypt, "secret key 123");
// let decrypt = JSON.parse(bytes.toString(crypto.enc.Utf8));

// console.log(decrypt);
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "testDir");
const filePath = path.join(dirPath, "fisier.txt");
fs.mkdirSync(dirPath, { recursive: true });
console.log("Director creat:", dirPath);
fs.writeFileSync(filePath, "Hello fisier!");
console.log("Fișier creat:", filePath);
fs.rm(dirPath, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error("Eroare la ștergere:", err);
  } else {
    console.log("Director șters:", dirPath);
  }
});
