const http = require("node:http");

http.get("http://localhost:3000", (response) => {
  const { statusCode, headers } = response;
  const contentType = headers["content-type"];

  let error;
  if (statusCode !== 200) {
    error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
  } else if (!contentType.startsWith("application/json")) {
    error = new Error(
      "Invalid content-type.\n" +
        `Expected application/json but received ${contentType}`
    );
  }

  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    response.resume();
    return;
  }

  response.setEncoding("utf8");
  let rawData = "";

  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response
    .on("end", () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (error) {
        console.error(error.message);
      }
    })
    .on("error", (error) => {
      console.error(error.message);
    });
});

const postJSON = () => {
  const postData = JSON.stringify({ message: "Hello World" });

  const options = {
    hostname: "localhost",
    port: 3000,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  const request = http.request(options, (response) => {
    const { statusCode, headers } = response;
    const contentType = headers["content-type"];

    let error;
    if (statusCode !== 200) {
      error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    } else if (!contentType.startsWith("application/json")) {
      error = new Error(
        "Invalid content-type.\n" +
          `Expected application/json but received ${contentType}`
      );
    }

    if (error) {
      console.error(error.message);
      // Consume response data to free up memory
      response.resume();
      return;
    }

    response.setEncoding("utf8");
    let rawData = "";

    response.on("data", (chunk) => {
      rawData += chunk;
    });
    response
      .on("end", () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (error) {
          console.error(error.message);
        }
      })
      .on("error", (error) => {
        console.error(error.message);
      });
  });

  request.on("error", (error) => {
    console.error(error.message);
  });

  request.write(postData);
  request.end();
};
postJSON();
