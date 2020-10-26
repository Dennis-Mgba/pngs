const url = require('url');

// extentiate a new url, put a url with some parameters
const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active&plan=achiever');

// Serialized uRL - get the actual url
// console.log(myUrl.href);
console.log(myUrl.toString());

// To get the HOST (ie root domain)
console.log(myUrl.host);        // can get the port
// console.log(myUrl.hostname);    // does not get the port

// path name - the file path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// get params object - ie get the params as an  object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('pay-stat', 'paid');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach(function(value, name) {
    console.log(`${name}: ${value}`)
});
