const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const path = require("node:path");

// writes to a file using utf8 encoding and a callback
fs.writeFile(
  path.resolve(__dirname, "test1.txt"),
  "hello world1",
  "utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file written");
  }
);

// writes to a file using utf8 encoding and a promise
fsPromise
  .writeFile(path.resolve(__dirname, "test2.txt"), "hello world2", "utf8")
  .then(() => {
    console.log("file written");
  })
  .catch((err) => {
    console.error(err);
  });

// writes to a file using utf8 encoding and async/await
async function writeAFile() {
  try {
    await fsPromise.writeFile(
      path.resolve(__dirname, "test3.txt"),
      "hello world3",
      "utf8"
    );
    console.log("file written");
  } catch (err) {
    console.error(err);
  }
}
writeAFile();

// writes to a file using a stream
function writeToFile(fileName, data) {
  fs.createWriteStream(fileName).write(data);
}
writeToFile(path.resolve(__dirname, "test4.txt"), "hello world4");
