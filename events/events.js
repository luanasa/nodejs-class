const { EventEmitter } = require('events');

const event = new EventEmitter()

console.log(event)

event.on('sayingSomething'), (message) => console.log('I heard you')
// event.once('sayingSomething'), (message) => console.log('I heard you')


event.emit('sayingSomething')
event.emit('sayingSomething' , "Luana")