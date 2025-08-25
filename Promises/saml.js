const fs = require('fs').promises;

const part1 = "screte.txt";
const Encoding = "utf8";

fs.readFile(part1, Encoding)
  .then(data1 => {
    console.log("First file content:", data1);
    return fs.readFile("data.txt", Encoding);
  })
  .then(data2 => {
    console.log("Final result:", data2);
  })
  .catch(err => {
    console.error("Error reading files:", err);
  });
