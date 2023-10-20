const fs = require("fs");
console.log("inicio de programa 1");

const data = fs.readFileSync("archivo.txt", "utf8");

console.log(data);
console.log("fin del programa 2");
