var app = require('express')();
var http = require('http');
var server = http.createServer().listen(3000, 'localhost');

server.on('request', function(req, res){
  console.log("Req received!");
  res.write('you hit the server baby');
  res.end();
});