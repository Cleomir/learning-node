const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const path = require("node:path");

// creates a directory using a callback
fs.mkdir(path.resolve(__dirname, "dir1"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("directory created");
});

// creates a directory using a promise
fsPromise
  .mkdir(path.resolve(__dirname, "dir2"))
  .then(() => {
    console.log("directory created");
  })
  .catch((err) => {
    console.error(err);
  });

// creates a directory using async/await
async function createADirectory() {
  try {
    await fsPromise.mkdir(path.resolve(__dirname, "dir3"));
    console.log("directory created");
  } catch (err) {
    console.error(err);
  }
}
createADirectory();

// removes a directory using a callback
fs.rmdir(path.resolve(__dirname, "dir1"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("directory removed");
});

// removes a directory using a promise
fsPromise
  .rmdir(path.resolve(__dirname, "dir2"))
  .then(() => {
    console.log("directory removed");
  })
  .catch((err) => {
    console.error(err);
  });

// removes a directory using async/await
async function removeADirectory() {
  try {
    await fsPromise.rmdir(path.resolve(__dirname, "dir3"));
    console.log("directory removed");
  } catch (err) {
    console.error(err);
  }
}
removeADirectory();
