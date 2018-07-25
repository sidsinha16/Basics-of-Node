var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  if(req.url === '/' || req.url === '/home'){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream(__dirname+'/index.html','utf8').pipe(res);
  }else if(req.url === '/contact' || req.url === '/api/contact'){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.createReadStream(__dirname+'/contact.html','utf8').pipe(res);
  }else{
    var myObj = {"name":"sid"}
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(myObj));
  }
})

server.listen(3000,'localhost');
