
var hello = require('./hello');

hello.world();

var Hello = require('./hello2');

hello2 = new Hello();
hello2.setName('linyi');

hello2.sayHello();