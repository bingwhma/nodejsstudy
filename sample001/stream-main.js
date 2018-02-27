
var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
	
	console.log('*** data ***');
		
	data += chunk;
});

readerStream.on('end', function() {
	
	console.log('*** end ***');
	
	console.log(data);
});

readerStream.on('error', function(err){
	
	console.log('*** error ***');
	
	console.log(err.stack)
});

readerStream.on('finish ', function(){
	console.log('finish ')
});

console.log("**** over ***");
