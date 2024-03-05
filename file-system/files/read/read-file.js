const fs = require("node:fs");
const fsPromise = require("node:fs/promises");

// reads a file using utf8 encoding and a callback
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); // 'hello world'
});

// reads a file using utf8 encoding and a promise
fsPromise
  .readFile("test.txt", "utf8")
  .then((data) => {
    console.log(data); // 'hello world'
  })
  .catch((err) => {
    console.error(err);
  });

// reads a file using utf8 encoding and async/await
async function readAFile() {
  try {
    const data = await fsPromise.readFile("test.txt", "utf8");
    console.log(data); // 'hello world'
  } catch (err) {
    console.error(err);
  }
}
readAFile();

// reads a file using a stream and pipes it to stdout
function printFile(fileName, encoding = "utf8") {
  fs.createReadStream(fileName, encoding).pipe(process.stdout);
}
printFile("test.txt");
