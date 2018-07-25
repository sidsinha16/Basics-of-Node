var http = require('http');
var fs = require('fs');
// var writeStream = fs.createWriteStream(__dirname+'/write.txt');
//
// readStream.pipe(writeStream);

var server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  var readStream = fs.createReadStream(__dirname+'/index.html','utf8');
  readStream.pipe(res);
})

server.listen(3000,'localhost');
console.log("Server started");
