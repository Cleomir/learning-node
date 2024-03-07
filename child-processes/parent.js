const childProcess = require("node:child_process");

const child = childProcess.fork("./child.js");

child.send("Hello from the parent process!");
child.on("message", (message) => {
  console.log(message);
  child.disconnect();
});
