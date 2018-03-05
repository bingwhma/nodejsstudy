let o = {};

console.log(o);

let o1 = {a:1}
console.log(o1.a);

let a = {'a':1}
console.log(a.a);
a.b = 3;
console.log(a.b);
delete a.a

console.log(a);	


let hello = {
	title: 'XXXX',
get name() {
	return this.title
},
set name(val) {
	this.title = val
}

}

console.log(hello.title)
console.log(hello.name)
hello.name = 'update';
console.log(hello.name);


// object copy
let sample = {
	a: 1
}
let o2 = {};

Object.assign(o2,sample);

o2.b = 'xxxx';

console.log(sample);
console.log(o2);


//entries/keys/values
let ents = {
	a:1,
	b:2,
	c:3
}

console.log(Object.entries(ents));


Object.entries(ents).forEach(element => {
	console.log(element);
});

Object.keys(ents).forEach(element => {
	console.log(element);
});

Object.values(ents).forEach(element => {
	console.log(element);
});