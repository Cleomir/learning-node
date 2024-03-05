const fs = require("node:fs");

const stats = fs.stat(path.resolve(__dirname, "file.txt"), (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats);
  console.log("isFile: ", stats.isFile());
  console.log("isDirectory: ", stats.isDirectory());
  console.log("isSymbolicLink: ", stats.isSymbolicLink());
  console.log("size: ", stats.size);
  console.log("birth time: ", stats.birthtime);
  console.log("modified time: ", stats.mtime);
  console.log("access time: ", stats.atime);
  console.log("file permissions", stats.mode.toString(8));
});
