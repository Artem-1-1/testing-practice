const capitalizeStr = require('./capitalize')

describe('Capitalize word', () => {
  test('capitalize word', () => {
    expect(capitalizeStr('hello')).toEqual('Hello');
  });

  test('capitalize string', () => {
    expect(capitalizeStr('hello, world')).toEqual('Hello, world');
  });

  test('capitalize letter', () => {
    expect(capitalizeStr('h')).toEqual('H');
  })
})