const process = require("node:process");

// CPU architecture
console.log(process.arch); // x64
// current working directory
console.log(process.cwd());
// Node.js version
console.log(process.version); // v16.13.0
// an object containing environment variables
console.log(process.env);
// run after the current operation ends, before the next event loops iteration begins
process.nextTick(() => {
  console.log("Next tick");
});
// platform
console.log(process.platform); // linux
// node version
console.log(process.version); // v20.10.0
