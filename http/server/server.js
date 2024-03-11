const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  const { method, headers, httpVersion, url } = request;
  console.log({ method, headers, httpVersion, url });

  if (url === "/page" && method === "GET") {
    response.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.createReadStream(path.resolve(__dirname, "page.html"), "utf-8").pipe(
      response
    );
  } else if (url === "/" && method === "GET") {
    response.writeHead(200, "OK", { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Hello World" }));
  } else if (url === "/" && method === "POST") {
    let body = "";

    request.setEncoding("utf-8");
    request
      .on("data", (chunk) => {
        body += chunk;
      })
      .on("end", () => {
        console.log("Body data: ", body);

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
