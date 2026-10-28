
const { sumar, restar } = require('./calculadora');

test('La suma de 5 + 3 debe ser 8', () => {
  expect(sumar(5, 3)).toBe(8);
});

test('La resta de 10 - 4 debe ser 6', () => {
  expect(restar(10, 4)).toBe(6);
});
