const calculator = require('./calculator');

describe('Calculator', () => {
  test('Sum', () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });

    test('Subtract', () => {
    expect(calculator.subtract(10, 5)).toEqual(5);
  });

    test('Multiply', () => {
    expect(calculator.multiply(5, 5)).toEqual(25);
  });

  test('Divide', () => {
    expect(calculator.divide(100, 10)).toEqual(10);
  });

  test('Divide by zero', () => {
    expect(calculator.divide(10, 0)).toEqual('Error!');
  });
})