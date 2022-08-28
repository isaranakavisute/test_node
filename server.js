var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World of My Node.JS Version 10.0');
}).listen(8080);

console.log("server starting at port 8080");