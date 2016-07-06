var express = require('express');
var path = require('path');
var app = express();
var port = 3000;


app.listen(port, function() {
  console.log('Started Express server on port', port);
});

app.use(express.static('public'));
