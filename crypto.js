const crypto = require("node:crypto");

const randomUUID = crypto.randomUUID();
console.log(randomUUID);

// hmac is a hash-based message authentication code that uses a secret key to sign and verify data using a cryptographic hash function like sha256
const hmacHash = crypto
  .createHmac("sha256", "a secret")
  .update("some data to hash")
  .digest("hex");
console.log(hmacHash);

console.log(crypto.randomBytes(16).toString("hex"));
