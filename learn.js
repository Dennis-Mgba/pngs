// function sayHello(name) {
//     console.log('Hello ' + name);
// }
//
// sayHello('Denden');

// console.log(module);

// var logger = require('./logger');
// // console.log(logger);
//
// logger.log('message');

// var http = require('http');
// var sayDate = require('./date.js');
//
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});    // the 200 is th status of the code in the head of the browser
//   res.write("The date and time are currently: " + sayDate.myDateTime()); // the response that will written n the browser
//   res.end();    // close the connection
// }).listen(8080);    // the port the browser should listen for on your local server
//
// // to ensure that the browser is listen on port 8080, log out
// console.log('Listening on port 8080...');


// const Person = require('./person');
//
// const person1 = new Person('Jenny', 23);
// const person2 = new Person('Kim', 30);
//
// person1.greeting();
// person2.greeting();


// const Logger = require('./logger');
//
// // extentiate the logger because the logger is a class
// const logger = new Logger();
//
// logger.on('message', function(data) {
//     console.log('Called Listener :', data)
// });
//
//
// // call
// logger.log('Hello humans!');
// logger.log('How are you doing humans!');
// logger.log('Let\'s work together humans!');
