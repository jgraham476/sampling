//making a change!!

var express = require("express");
var app = express();


app.get('/', function(request, response){
	response.send("Hello World");
});

app.listen(8888);

//app.engine('.html' ,require('jade'));
//app.set('view engine', 'jade');
