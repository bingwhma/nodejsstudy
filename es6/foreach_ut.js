
let myArr = [2,3,4,5,6,7];

console.log('for of sample');
for (let val of myArr) {
	console.log(val);
}

console.log('for in sample');
for (let index in myArr) {
	console.log(myArr[index]);
}

let items = [1,3,5,6,2,7,0]

// find方法比较好理解，这里的参数n代表数组里的每一项，
// 然后find方法内部通过遍历数组里的每一项，找到＜0的这一项
console.log('start finding');
let items2 = items.find((item) => item < 3);
console.log(items2);

console.log('start filtering');
let items3 = items.filter((item) => item > 3);
console.log(items3);

let items4 = items.map((item) => item * 2);
console.log(items4);

let items5 = items.reduce((p, c) => p + c);
console.log(items5);
