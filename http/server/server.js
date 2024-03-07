const http = require("node:http");

const server = http.createServer((request, response) => {
  const { method, headers, httpVersion, url } = request;
  console.log({ method, headers, httpVersion, url });

  if (url === "/" && method === "GET") {
    response.writeHead(200, "OK", { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Hello World" }));
  } else if (url === "/" && method === "POST") {
    const body = [];

    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        const bodyString = Buffer.concat(body).toString();
        console.log("Body data: ", bodyString);

        response.writeHead(200, "OK", { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "success" }));
      })
      .on("error", (error) => {
        console.error(error.message);
      });
  } else if (url === "/" && method === "PATCH") {
    const path = url.split("/").slice(1);
    console.log("Path: ", path);

    response.writeHead(200, "OK", { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "success" }));
  } else {
    response.writeHead(404, "Not Found", {
      "Content-Type": "application/json",
    });
    response.end("Not Found");
  }
});

server.listen(3000);