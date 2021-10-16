const sum = require('./task1');

test('takes 2 integers and returns the sum of every number between', () => {
  expect(sum(3, 5)).toBe(12);
});