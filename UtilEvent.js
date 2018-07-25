var events = require('events');
var util = require('util');

var user = function(name){
  this.name = name;
}

let sid = new user("sid");
let mike = new user("mike");
let branda = new user("branda");
let person = [sid,mike,branda];

person.forEach(function(item){
  item.on('click',function(msg){
    console.log(msg);
  });
});

// sid.emit('click',"Hello");

// var events = require('events');
// var util = require('util');
//
// var person = function(name){
//   this.name = name;
// }
//
// util.inherits(person,events.EventEmitter);
//
// var t1 = new person("test1");
// var t2 = new person("test2");
// var t3 = new person("test3");
// var people = [t1,t2,t3];
// // console.log(people);
// people.forEach(function(item){
//   item.on("click",function(msg){
//       console.log(item.name +' said '+ msg);
//   })
//   // console.log(item.name);
// })
// t1.emit("click","Hello");
// t2.emit("click","Hii");
// t3.emit("click","How are you all");
