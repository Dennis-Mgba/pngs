
var url = 'http://mylogger.io/log'; // let us imagine that we are going to send an http request to this end point

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// the url varaible and the log function are both scoped to this module

module.exports.log = log; // equal to the log function
module.exports.endpoint = url;
