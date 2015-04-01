var expect = require('chai').expect,
    Module = require('../index'),
    module = new Module();

describe('#convert - invalid numbers', function() {
	it('onez', function() { 
		expect(module.convert('onez')).to.equal(undefined);
	});
	it('infiniti', function() { 
		expect(module.convert('infiniti')).to.equal(undefined);
	});
	it('three three three', function() { 
		expect(module.convert('three three three')).to.equal(undefined);
	});
	it('one thousand million', function() { 
		expect(module.convert('one thousand million')).to.equal(undefined); 
	});
	it('a billion and a half', function() { 
		expect(module.convert('a billion and a half')).to.equal(undefined);
	});
	it('half a billion', function() { 
		expect(module.convert('half a billion')).to.equal(undefined);
	});
	it('not even a number', function() { 
		expect(module.convert('not even a number')).to.equal(undefined); 
	});
	it('seven point two', function() { 
		expect(module.convert('seven point two')).to.equal(undefined); 
	});
	it('blah blah blah', function() { 
		expect(module.convert('blah blah blah')).to.equal(undefined);
	});
	it('12 million', function() {
		expect(module.convert('12 million')).to.equal(undefined);
	});
	it('three hundred hundred', function() {
		expect(module.convert('three hundred hundred')).to.equal(undefined);
	});

	it('seven forty', function() {
		expect(module.convert('seven forty')).to.equal(undefined);
	});

	it('forty forty', function() {
		expect(module.convert('forty forty')).to.equal(undefined);
	});

	it('hundred thousand', function() {
		expect(module.convert('hundred thousand')).to.equal(undefined);
	});

	it('hundred thousand and seven', function() {
		expect(module.convert('hundred thousand and seven')).to.equal(undefined);
	});

	it('trillion billion million thousand', function() {
		expect(module.convert('trillion billion million thousand')).to.equal(undefined);
	});

	it('ten gazillion', function() {
		expect(module.convert('ten gazillion')).to.equal(undefined);
	});

	it('ten and a half thousand', function() {
		expect(module.convert('ten and a half thousand')).to.equal(undefined);
	});

	it('negative negtive ten', function() {
		expect(module.convert('negative negtive ten')).to.equal(undefined);
	});

	it('ten negative', function() {
		expect(module.convert('negative negtive ten')).to.equal(undefined);
	});

	it('three million negative hundred thousand', function() {
		expect(module.convert('three million negative hundred thousand')).to.equal(undefined);
	});
});