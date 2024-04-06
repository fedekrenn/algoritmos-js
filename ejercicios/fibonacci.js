/*
 * Escribe un programa que imprima los números de la sucesión
 * de Fibonacci empezando en 0 hasta el número que el usuario indique.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci (quantity) {
  if (quantity === 1) return '0'
  const buffer = [0, 1]
  if (quantity === 2) return buffer.join(', ')

  for (let i = 2; i < quantity; i++) {
    const partialOne = buffer[i - 1]
    const partialTwo = buffer[i - 2]
    buffer.push(partialOne + partialTwo)
  }

  return buffer.join(', ')
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Fibonacci secuence', () => {
  it('Should return the fibonacci secuence', () => {
    assert.deepEqual(fibonacci(2), '0, 1')
    assert.deepEqual(fibonacci(3), '0, 1, 1')
    assert.deepEqual(fibonacci(6), '0, 1, 1, 2, 3, 5')
    assert.deepEqual(fibonacci(7), '0, 1, 1, 2, 3, 5, 8')
    assert.deepEqual(fibonacci(9), '0, 1, 1, 2, 3, 5, 8, 13, 21')
    assert.deepEqual(fibonacci(10), '0, 1, 1, 2, 3, 5, 8, 13, 21, 34')
  })
})
