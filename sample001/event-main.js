
var events = require('events');
var os = require('os');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log("连接成功。");
	
	eventEmitter.emit("data_received");
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
	console.log('数据接收成功。');
});


eventEmitter.emit('connection');

console.log(process.memoryUsage());
console.log((os.totalmem()/ (1024 * 1024 * 1024)).toFixed(1));

process.exit();

console.log("！！！程序执行完毕！！！")