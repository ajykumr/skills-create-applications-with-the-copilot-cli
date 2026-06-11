const { add, subtract, multiply, divide } = require('../calculator');

describe('calculator functions', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow(/Division by zero/i);
  });

  test('supports floating point addition', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6, 5);
  });
});

