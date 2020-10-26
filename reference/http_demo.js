const http = require('http');

// Create Server Object
http.createServer(function(req, res) {
    // when we make a request, next is to write a response
    res.write('Hello Human! you are on the browser now.');
    res.end()
}).listen(5000, function() {console.log('Sever running...')});
