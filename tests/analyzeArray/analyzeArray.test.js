const analyzeArray = require('./analyzeArray');

test('Normal array', () => {
  expect(analyzeArray([10, 5, 6, 9, 8])).toEqual({
    average : 7.6,
    min: 5, 
    max: 10, 
    length: 5
  });
});

test('array with non-number', () => {
  expect(analyzeArray([1, 2, 3, 4, '5'])).toBe('not an array');
});