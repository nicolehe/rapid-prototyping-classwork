var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello world!');
});

app.listen(8000, function(){
  console.log('started server on 8000');
});