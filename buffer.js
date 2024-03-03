const { Buffer } = require("node:buffer");

const stringBuffer = Buffer.from("Hello World", "utf8");
const binaryBuffer = Buffer.from([
  0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57, 0x6f, 0x72, 0x6c, 0x64,
]);

console.log(stringBuffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log(stringBuffer.toString("hex")); // 48656c6c6f20576f726c64
console.log(stringBuffer.toString("base64")); // SGVsbG8gV29ybGQ=

console.log(binaryBuffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log(binaryBuffer.toString()); // Hello World

const newBuffer = Buffer.alloc(10, "a", "utf8");
console.log(newBuffer.toString()); // aaaaaaaaaa
