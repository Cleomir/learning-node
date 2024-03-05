const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const path = require("node:path");

// appends to a file using utf8 encoding and a callback
fs.appendFile(
  path.resolve(__dirname, "file.txt"),
  "\nhello world1 appended",
  "utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("data written");
  }
);

// appends to a file using utf8 encoding and a promise
fsPromise
  .appendFile(
    path.resolve(__dirname, "file.txt"),
    "\nhello world2 appended",
    "utf8"
  )
  .then(() => {
    console.log("data written");
  })
  .catch((err) => {
    console.error(err);
  });

// appends to a file using utf8 encoding and async/await
async function appendToFile() {
  try {
    await fsPromise.appendFile(
      path.resolve(__dirname, "file.txt"),
      "\nhello world3 appended",
      "utf8"
    );
    console.log("data written");
  } catch (err) {
    console.error(err);
  }
}
appendToFile();

// appends to a file using a stream
function appendToFileWithStream(fileName, data) {
  fs.createWriteStream(fileName, { flags: "a" }).write(data);
}
appendToFileWithStream(
  path.resolve(__dirname, "file.txt"),
  "\nhello world4 appended"
);
