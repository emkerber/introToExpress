var express = require('express'); //incorporates Express
var path = require('path'); //incorporates path
var app = express(); 
var port = 3000;

//tells the application to listen on port 3000 and log a message when it starts
app.listen(port, function() {
  console.log('Started Express server on port', port);
});

//send an html page to the client
app.use(express.static('public'));
