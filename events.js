const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("newListener", (event, listener) => {
  console.log("new listener added");
});

myEmitter.on("removeListener", (event, listener) => {
  console.log("listener removed");
});

myEmitter.on("event", (error) => {
  if (error) {
    console.error("an error occurred!");
  }

  console.log("an event occurred!");
});

myEmitter.addListener("event2", () => {
  console.log("yet another event occurred!");
});

myEmitter.emit("event");
myEmitter.emit("event", new Error("whoops!"));
myEmitter.emit("event2");
