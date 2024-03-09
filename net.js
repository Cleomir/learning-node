const net = require("node:net");

// Create a new server
const server = net.createServer((socket) => {
  // Listen for messages from the client
  socket.on("data", (data) => {
    console.log(data.toString());
  });
  // Send a message to the client
  socket.end("Hello from the server!");
});
server.listen(1337);

// Create a new client
const client = net.createConnection({ port: 1337 }, () => {
  // Send a message to the server
  client.write("Hello from the client!");
});

// Listen for messages from the server
client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});
