// Import the Logger object constructor module and use
const Logger = require('./Logger');
const logger = new Logger;

logger.on('message', data => {
    console.log('Called Listener: ', data);
});

logger.log('Here is the message...');
logger.log('Another message...');
logger.log('Yet a third message...');
