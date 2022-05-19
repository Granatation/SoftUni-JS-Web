const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('play', (song) => {
    console.log(`${song} playing right now`);
});

eventEmitter.emit('play', 'Beautiful by Eminem')