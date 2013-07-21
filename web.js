fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
var buffer = new Buffer(50);
 var len = buffer.write(fs.readFileSync('./index.html', "utf8"),0,"buffer.write(fs.readFileSync('./index.html', "utf8"),0,"ascii" );ascii" );
  
response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
