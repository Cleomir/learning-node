const childProcess = require("node:child_process");

let listing = childProcess.execSync("ls -l", { encoding: "utf-8" });
console.log(listing);

listing = childProcess.execFileSync("ls", ["-la"], { encoding: "utf-8" });
console.log(listing);

// spawn a child process to run the "ls -lh /usr" command
const ls = childProcess.spawn("ls", ["-lh", "/usr"]);
ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
