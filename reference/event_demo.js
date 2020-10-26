// bring in the event emitter module
const EventEmitter = require('events');

// create an emitter class
class MyEmitter extends EventEmitter{}

// Init object - create a const variable caled myEmitter and extentiate the MyEmitter class
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('shoot', function() {
    console.log('Event fired!')
});

// Init event
myEmitter.emit('shoot');
myEmitter.emit('shoot');    // if you call that multiple times
myEmitter.emit('shoot');
myEmitter.emit('shoot');
