const caesarCipher = require('./caesarCipher');

describe('z to a', () => {
  test('z to z', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc');
  });
  
  test('HeLLo to KhOOr', () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
  });

  test('Hello, World! to Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
  });

})