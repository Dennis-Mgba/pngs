const http = require('http');
const path = require('path');
const fs   = require('fs');

// create a new server object and put it ina variable

// const server = http.createServer( function(req, res){    // set up server
//     if (req.url === '/') {      // if it hits this url
//          // use fs module to read file and use path module to get at the file
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), function(err, content) {
//             if(err) throw err;
//             res.writeHead(200, { 'Content-Type' : 'text.html' });
//             res.end(content);
//         });
//     }
//
//     if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), function(err, content) {
//             if(err) throw err;
//             res.writeHead(200, { 'Content-Type' : 'text.html' });
//             res.end(content);
//         });
//     }
//
//     if (req.url === '/api/users') {
//         const users = [
//             { name: 'Bob Smith', age: 40, email: 'Bsmith@mail.prsn' },
//             { name: 'John Doe',  age: 30, email: 'johnD@mail.prsn' },
//             { name: 'Hedges Yung',  age: 26, email: 'HY@mail.prsn' }
//         ];
//         res.writeHead(200, { 'Content-Type' : 'application/json' });
//         res.end(JSON.stringify(users));
//     }
//      console.log(req.url);
// });


// Another example
// const server = http.createServer(function(req, res){
//     console.log('Request made: ' + req.url);
//     if(req.url === '/home' || req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/about.html').pipe(res);
//     } else if (req.url === '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/error.html').pipe(res);
//     }
// });

const server = http.createServer(function(req, res){
    // Build file path and get file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log(filePath);

    // Get an extension of filePath defined above
    let extName = path.extname(filePath);
    // Initial content type
    let contentType = 'text/html';

    // check and evalaute file extension and set content type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // read file - to load the files
    fs.readFile(filePath, function(err, content) {
        if (err) {
        // check for error codes
            if (err.code == 'ENOENT') {
                // Page not found - if a pae/ file isn't found in the application
                fs.readFile(path.join(__dirname, 'public', '404.html'), function(err, content) {
                    res.writeHead(200, { 'Content-Type' : 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Some other server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // success
            res.writeHead(200, { 'Content-Type' : contentType });
            res.end(content, 'utf8');
        }
    });

});

// define our custom port - the process.env.PORT refers to the production server when we deploy our application or local server = 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
});
