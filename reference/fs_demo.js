const fs = require('fs');
const path = require('path');

// create a new folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created ...');
// });


// // create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'my-file.txt'), 'Writing: Hello world!', function(err){
//     if(err) throw err;
//     console.log('Created and wrote into file ...');
// });


// Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'my-file.txt'), 'Writing: Hello world in my-file.txt!', function(err){
//     if(err) throw err;
//     console.log('Created and wrote into file ...');
//
// // this code below append new statement to thw already written file
//     fs.appendFile(path.join(__dirname, '/test', 'my-file.txt'), ' - Appending this node message here', function(err){
//         if(err) throw err;
//         console.log('Appended file ...');
//     });
// });


// Read file
fs.readFile(path.join(__dirname, '/test', 'my-file.txt'), 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

// Rename file
// fs.rename(path.join(__dirname, '/test', 'my-file.txt'), path.join(__dirname, '/test', 'new-file.txt'), function(err){
//     if(err) throw err;
//     console.log('File renamed...');
// });
