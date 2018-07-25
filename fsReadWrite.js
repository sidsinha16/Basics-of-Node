var fs = require('fs');

var readBuffStream = fs.createReadStream(__dirname+'/text.txt','utf-8');
var writeBufferStream = fs.createWriteStream(__dirname+'/writeMe.txt','utf-8');

readBuffStream.on('data',function(buff){
  writeBufferStream.write(buff);
})
