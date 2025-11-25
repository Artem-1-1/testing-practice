const reverseString = require('./reverseString');

describe('Reverse string', () => {
  test('reverse single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverse multiple words', () => {
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });

  test('work with number and char', () => {
    expect(reverseString('123! Hello, world1')).toEqual('1dlrow ,olleH !321');
  });

  test('work with empty string', () => {
    expect(reverseString('')).toEqual('');
  })
})