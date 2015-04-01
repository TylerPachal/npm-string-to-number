var expect = require('chai').expect,
    Module = require('../index'),
    module = new Module();

describe('#convert - single digits', function() {
	it('zero to 0', function() { 
		expect(module.convert('zero')).to.equal(0);
	});
	it('one to 1', function() { 
		expect(module.convert('one')).to.equal(1);
	});
	it('two to 2', function() { 
		expect(module.convert('two')).to.equal(2);
	});
	it('three to 3', function() { 
		expect(module.convert('three')).to.equal(3); 
	});
	it('four to 4', function() { 
		expect(module.convert('four')).to.equal(4);
	});
	it('five to 5', function() { 
		expect(module.convert('five')).to.equal(5);
	});
	it('six to 6', function() { 
		expect(module.convert('six')).to.equal(6); 
	});
	it('seven to 7', function() { 
		expect(module.convert('seven')).to.equal(7); 
	});
	it('eight to 8', function() { 
		expect(module.convert('eight')).to.equal(8);
	});
	it('nine to 9', function() {
		expect(module.convert('nine')).to.equal(9);
	});
});

describe('#convert - 11 to 19', function() {
	it('eleven to 11', function() { 
		expect(module.convert('eleven')).to.equal(11);
	});
	it('twelve to 12', function() { 
		expect(module.convert('twelve')).to.equal(12);
	});
	it('thirteen to 13', function() { 
		expect(module.convert('thirteen')).to.equal(13);
	});
	it('fourteen to 14', function() { 
		expect(module.convert('fourteen')).to.equal(14);
	});
	it('fifteen to 15', function() { 
		expect(module.convert('fifteen')).to.equal(15);
	});
	it('sixteen to 16', function() { 
		expect(module.convert('sixteen')).to.equal(16);
	});
	it('seventeen to 17', function() { 
		expect(module.convert('seventeen')).to.equal(17);
	});
	it('eighteen to 18', function() { 
		expect(module.convert('eighteen')).to.equal(18);
	});
	it('nineteen to 19', function() { 
		expect(module.convert('nineteen')).to.equal(19);
	});
});

describe('#convert - multiples of 10', function() {
	it('ten to 10', function() { 
		expect(module.convert('ten')).to.equal(10);
	});
	it('twenty to 20', function() { 
		expect(module.convert('twenty')).to.equal(20);
	});
	it('thirty to 30', function() { 
		expect(module.convert('thirty')).to.equal(30);
	});
	it('fourty to 40', function() { 
		expect(module.convert('fourty')).to.equal(40);
	});
	it('fifty to 50', function() { 
		expect(module.convert('fifty')).to.equal(50);
	});
	it('sixty to 60', function() { 
		expect(module.convert('sixty')).to.equal(60);
	});
	it('seventy to 70', function() { 
		expect(module.convert('seventy')).to.equal(70);
	});
	it('eighty to 80', function() { 
		expect(module.convert('eighty')).to.equal(80);
	});
	it('ninety to 90', function() { 
		expect(module.convert('ninety')).to.equal(90);
	});
});

describe('#convert - features with larger number', function() {
	it('one million seven hundred fifty-nine thousand seven hundred and twenty-two to 1759722', function() { 
		expect(module.convert('one million seven hundred fifty-nine thousand seven hundred and twenty-two')).to.equal(1759722);
	});
	it('one-million-seven-hundred-fifty-nine-thousand-seven-hundred-and-twenty-two-to 1759722', function() { 
		expect(module.convert('one-million-seven-hundred-fifty-nine-thousand-seven-hundred-and-twenty-two')).to.equal(1759722);
	});
	it('seventeen million to 17000000', function() { 
		expect(module.convert('seventeen million')).to.equal(17000000);
	});
	it('three hundred and sixty nine billion to 369000000000', function() { 
		expect(module.convert('three hundred and sixty nine billion')).to.equal(369000000000);
	});
	it('seven hundred and ninety nine billion five hundred thirty two million six hundred thousand and seven to 799532600007', function() { 
		expect(module.convert('seven hundred and ninety nine billion five hundred thirty two million six hundred thousand and seven')).to.equal(799532600007);
	});
});

describe('#convert - negative numbers', function() {
	it('negative seven hundred and twenty-two to -722', function() { 
		expect(module.convert('negative seven hundred and twenty-two')).to.equal(-722);
	});
	it('minus seven hundred and thirty three to -733', function() { 
		expect(module.convert('minus seven hundred and thirty three')).to.equal(-733);
	});
});

describe('#convert - random tests', function() {
	it('seven hundred to 700', function() { 
		expect(module.convert('seven hundred')).to.equal(700);
	});

	it('negative six hundred eighty three to -683', function() { 
		expect(module.convert('negative six hundred eighty three')).to.equal(-683);
	});

	it('three-hundred-thousand to 300000', function() { 
		expect(module.convert('three-hundred-thousand')).to.equal(300000);
	});

	it('three hundred thousand and forty two to 300042', function() { 
		expect(module.convert('three hundred thousand and forty two')).to.equal(300042);
	});


});
