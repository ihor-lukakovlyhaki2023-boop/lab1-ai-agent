const { hello, add } = require('../src/index');

describe('Basic Application Tests', () => {
  test('should return Hello, World!', () => {
    expect(hello()).toBe("Hello, World!");
  });

  test('BasicAddition', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });
});
