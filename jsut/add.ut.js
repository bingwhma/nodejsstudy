const add = require('./add')

const char = require('chai');

expect = char.expect;

describe('add', function() {
	it('1+1=2', function () {
		expect(add(1,1)).to.be.equal(2);
	});
});