const os = require("node:os");

// CPU architecture
console.log(os.arch()); // 'x64'
// computer hostname
console.log(os.hostname()); // 'DESKTOP-123'
// os type
console.log(os.type()); // 'Linux'
// number of threads available
console.log(os.availableParallelism()); // 16
