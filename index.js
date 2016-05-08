var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(fs.readFileSync('./index.html'));
  response.end();
});

server.listen(8000);