var http = require('http');

var server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'application/json'})
  let myObj = {
      'name':"sid",
      'city' :"cortana"
  }
  res.end(JSON.stringify(myObj));
})

server.listen(3000,'localhost');
console.log("Server started");
