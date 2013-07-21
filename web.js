fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
//var buffer = new Buffer(50);
  response.send(fs.readFileSync('./index1.html', "utf8"));
//response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
