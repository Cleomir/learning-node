// Import the file system module
const fs = require("fs");

// Function to copy a file
function copyFile(sourceFilename, destinationFilename, callback) {
  const input = fs.createReadStream(sourceFilename);
  const output = fs.createWriteStream(destinationFilename);

  // When data is available to read from the source file
  input.on("data", (chunk) => {
    // Write the data to the destination file
    const hasRoom = output.write(chunk);
    // If the destination file is not ready to write more data, pause the source file stream
    if (!hasRoom) {
      input.pause();
    }
  });

  // When there is no more data to read from the source file
  input.on("end", () => {
    // Close the destination file stream
    output.end();
  });

  // If there is an error reading from the source file
  input.on("error", (error) => {
    // Call the callback with the error and exit the process
    callback(error);
    process.exit();
  });

  // When the destination file is ready to write more data
  output.on("drain", () => {
    // Resume the source file stream
    input.resume();
  });

  // If there is an error writing to the destination file
  output.on("error", (error) => {
    // Call the callback with the error and exit the process
    callback(error);
    process.exit();
  });

  // When all data has been written to the destination file
  output.on("finish", () => {
    // Call the callback with no error
    callback(null);
  });
}

// Get the source and destination file names from the command line arguments
const from = process.argv[2];
const to = process.argv[3];

console.log(`Copying file from ${from} to ${to}`);

copyFile(from, to, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("File copied successfully");
  }
});
