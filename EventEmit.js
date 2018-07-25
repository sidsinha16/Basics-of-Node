let events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on("click",function(msg){
  console.log(msg);
})
eventEmitter.emit("click","On click Event");
