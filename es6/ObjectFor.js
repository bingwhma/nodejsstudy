//entries/keys/values
let ents = {
	a:1,
	b:2,
	c:3
};



Object.keys(ents).forEach(element => {
	console.log(element);
});
console.log(Object.keys(ents));


// ES7 �L�꘢��āC��������Object.keys�z���IObject.values�aObject.entries�B
console.log(Object.values(ents));
console.log(Object.entries(ents));

/*

console.log(Object.entries(ents));


Object.entries(ents).forEach(element => {
	console.log(element);
});
*/


/*
Object.values(ents).forEach(element => {
	console.log(element);
});

*/