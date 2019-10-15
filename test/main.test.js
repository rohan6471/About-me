QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST calc', assert => {
  assert.equal(calc(2), 12.57, 'short int')
  assert.equal(calc(235), 173494.45, 'Integer type')
  assert.equal(calc(12345), 478775657.35, 'long')
  assert.equal(calc(20.5), 1320.25, 'Float type')
  assert.equal(calc(3.1234), 30.65, 'Double type')
  assert.throws(function () { calc('a'); }, new Error('The given argument is not a number'), 'Passing in character raises an error');


})