const path = require("node:path");

// print the current working directory
console.log(process.cwd());
console.log(__dirname);
console.log(path.resolve());

// print the current file name
console.log(__filename);

// path separator
console.log(path.sep); // '/'

const p = "src/pkg/test.js";
// file name
console.log(path.basename(p)); // 'test.js'

// extension of the file
console.log(path.extname(p)); // '.js'

// directory name
console.log(path.dirname(p)); // 'src/pkg'

// convert the path to an object
console.log(path.parse(p)); // { root: '', dir: 'src/pkg', base: 'test.js', ext: '.js', name: 'test' }

// convert the path object back to a path
console.log(path.format(path.parse(p))); // 'src/pkg\test.js'

// removes the extra slashes and dots
console.log(path.normalize("src/pkg////test.js")); // 'src/pkg/test.js'
console.log(path.normalize("src/pkg/./test.js")); // 'src/pkg/test.js'
console.log(path.normalize("src/pkg/../test.js")); // 'src/test.js'

// join and normalize the paths
console.log(path.join("src", "pkg", "test.js")); // 'src/pkg/test.js'

// returns an absolute path, starting with the last arguments and working its way to the first, stopping after the first absolute path is constructed
console.log(path.resolve("t.js"));
console.log(path.resolve("src", "pkg", "test.js"));
console.log(path.resolve("/tmp", "t.js")); // '/tmp/t.js'
