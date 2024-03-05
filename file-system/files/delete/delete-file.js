const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const path = require("node:path");

// deletes a file using a callback
fs.unlink(path.resolve(__dirname, "file.txt"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file deleted");
});

// deletes a file using a promise
fsPromise
  .unlink(path.resolve(__dirname, "file.txt"))
  .then(() => {
    console.log("file deleted");
  })
  .catch((err) => {
    console.error(err);
  });

// deletes a file using async/await
async function deleteAFile() {
  try {
    await fsPromise.unlink(path.resolve(__dirname, "file.txt"));
    console.log("file deleted");
  } catch (err) {
    console.error(err);
  }
}
deleteAFile();
