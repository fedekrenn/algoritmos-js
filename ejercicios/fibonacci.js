/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
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

describe('Fibonacci', () => {
  it('Test 1', () => {
    assert.deepEqual(fibonacci(2), '0, 1')
  })

  it('Test 2', () => {
    assert.deepEqual(fibonacci(3), '0, 1, 1')
  })

  it('Test 3', () => {
    assert.deepEqual(fibonacci(6), '0, 1, 1, 2, 3, 5')
  })

  it('Test 4', () => {
    assert.deepEqual(fibonacci(7), '0, 1, 1, 2, 3, 5, 8')
  })

  it('Test 5', () => {
    assert.deepEqual(fibonacci(9), '0, 1, 1, 2, 3, 5, 8, 13, 21')
  })

  it('Test 6', () => {
    assert.deepEqual(fibonacci(10), '0, 1, 1, 2, 3, 5, 8, 13, 21, 34')
  })
})
