const eventBus = require('./eventBus');

let firstEventUnsubscribe = eventBus.subscribe('event1', (name, secondName) => console.log(`Hello ${name} ${secondName}`));
eventBus.subscribe('event1', (name, secondName) => console.log(`Hello again ${name} ${secondName}`));

eventBus.publish('event1', 'Nikola', 'Emilov');

//The first greeting is deleted
firstEventUnsubscribe()

eventBus.publish('event1', 'Georgi', 'Georgiev');