function hello() {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			resolve('JavaScripte');
			console.log('*******resolved**********');
		}, 2000);
	});
}

console.log('=1=%s', Date.now());

hello().then((val) => {
	console.log('result is : %s', val);
	
	console.log('=2=%s', Date.now());
});

console.log('=3=%s', Date.now());