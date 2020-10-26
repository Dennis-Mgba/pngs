// bring in the event emitter module
const EventEmitter = require('events');
// bring in the UUID module - it's an id formatter
const uuid = require('uuid');
// console.log(uuid.v4());

// create a class
class Logger extends EventEmitter {
    log(msg) {
        // call event - 'this' here partain to the class
        this.emit('message', {
            id: uuid.v4(),
            msg
        });
    }
}
// next is to export the logger class function constructor
module.exports = Logger;
