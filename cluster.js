const cluster = require("cluster");
const http = require("http");
const os = require("os");

const port = 3000;

// Define a function to handle requests
function handleRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello from worker ${process.pid}`);
}

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log(`Starting a new worker`);
    cluster.fork();
  });
} else {
  // Create an HTTP server for the worker process
  const server = http.createServer(handleRequest);

  server.listen(port, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
