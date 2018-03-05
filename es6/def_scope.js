{
	let a = 10;
	var b = 1;
}


console.log(b);
// console.log(a);  // ReferenceError: a is not defined.


var i = 5;

for (var i = 0; i < 10; i++) {
}
console.log(i);  // 10

for (let i = 0; i < 20; i++) {
}
console.log(i); // 10

for(let b = 0; b < 3; b++) {
	// console.log(b);   // ReferenceError: b is not defined
	let b = 'abc';
	console.log(b);
}