//Demo - Node.js Events Module
//importing the events module
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

//new instance of the EventEmitter Class
let myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);

myEmitter.emit('celebration', 'Birthday!!');