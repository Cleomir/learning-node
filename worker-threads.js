const threads = require("node:worker_threads");

// Check if the current thread is the main thread
if (threads.isMainThread) {
  // Create a new worker thread
  const worker = new threads.Worker(__filename);
  worker.on("message", (msg) => {
    console.log(msg);
  });
  worker.on("error", (err) => {
    console.error(err);
  });
  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(new Error(`Worker stopped with exit code ${code}`));
    }
  });

  // Send a message to the worker thread
  worker.postMessage("Hello from the main thread!");
} else {
  // Listen for messages from the main thread
  threads.parentPort.on("message", (msg) => {
    console.log(msg);
    threads.parentPort.postMessage("Hello from the worker thread!");
  });
}
