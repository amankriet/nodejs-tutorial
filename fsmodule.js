const fs = require("fs");

const fsSync = fs.readFileSync("index.js", "utf-8");
console.log(fsSync);

fs.readFile("second.js", "utf-8", (err, data) => {
  console.log(err, data);

  fs.writeFile("index.js", fsSync + data, () => {
    console.log("written to index.js");
  });
});

console.log("end");
