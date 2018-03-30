
var util = require("util");


function Base() {
	this.name = 'base';
	this.base = 1991;
	
	this.sayHello = function() {
		console.log("hello " + this.name);
	};
}

Base.prototype.showName = function() {
	console.log(this.name);
};

function Sub() {
	this.name = 'Sub';
}

util.inherits(Sub, Base);
var objBase = new Base();

objBase.showName();
objBase.sayHello();

console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);


//注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属性和 sayHello函数都没有被 Sub继承。
// 同时，在原型中定义的属性不会被console.log作为对象的属性输出。
// 如果我们去掉 objSub.sayHello(); 这行的注释，将会出错


console.log('**********************************************'); 
console.log(util.inspect(objBase)); 
console.log(util.inspect(objBase, true));

console.log(util.inspect(objSub)); 
console.log(util.inspect(objSub, true));