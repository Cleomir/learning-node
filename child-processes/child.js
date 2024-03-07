process.on("message", (message) => {
  console.log(message);
  process.send("Hello from the child process!");
});
