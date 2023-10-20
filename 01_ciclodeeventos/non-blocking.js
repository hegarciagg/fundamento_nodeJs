const fs = require("fs");

console.log("inicio de programa");

fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("fin del programa 2");
