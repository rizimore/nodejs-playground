// Events
// - emitters
// - listeners

const EventEmitter = require('events'); // class
const emitter = new EventEmitter(); // object

// register a listener
emitter.on('log', function (args) {
    console.log(args);
});

// emit is basically issue some signal
emitter.emit('log', 'Hello, LOG1!');
emitter.emit('log', 'Hello, LOG2!');
