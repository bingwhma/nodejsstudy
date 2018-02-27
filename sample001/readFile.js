
var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
	if (err) return console.error(error);
	
	console.log('*****read file successfully********');
	console.log(data.toString());
	
});