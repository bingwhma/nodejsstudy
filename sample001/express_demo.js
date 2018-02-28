
var express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.send('Hello World');
});

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('app, access address is http://%s:%s', host, port);
});