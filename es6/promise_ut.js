function hello(index) {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			resolve(index);
		}, 2000);
	});
}

console.log('=1=%s', Date.now());

let arr = [1,2,3,4,5,6,7,8]
for(item of arr) {
	hello(item).then((val) => {
	console.log(`result is : ${val}`);
if (val === 2){
	return Promise.resolve(false);
}
	return Promise.resolve(`result is : ${val}`);
}) .then((data2) => {
        console.log('************', data2);
        return Promise.resolve('ok');
}) .then((data2) => {
        console.log('************DONE');
        return;
});

}


console.log('=3=%s', Date.now());