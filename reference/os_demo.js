const os = require('os');

// plateform
console.log(os.platform());

// CPU Architechture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Get available free memory
console.log(os.freemem());

// Get total memory
console.log(os.totalmem());

// Get info of the home directory
console.log(os.homedir());

// Get the number of time my system has been on
console.log(os.uptime());
