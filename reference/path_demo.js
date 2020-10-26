const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// file extension
 console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
// we acn also do
console.log(path.parse(__filename).dir);

// Concatenate paths
// say we want to create a path that will end with ./test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
