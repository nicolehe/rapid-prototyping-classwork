var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello world!');
});

var server = app.listen(8000, function(){
  console.log('started server on 8000');
});