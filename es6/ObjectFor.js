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


// ES7 有一个提案，引入了跟Object.keys配套的Object.values和Object.entries。
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