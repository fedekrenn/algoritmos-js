/*
 * Escribe una función que determine si un número entero positivo es un número perfecto.
 * Un número perfecto es aquel que es igual a la suma de sus divisores positivos propios
 * (excluyendo al número mismo).
 *
 * Ejemplos:
 * - 6 es perfecto porque sus divisores son 1, 2, 3 y 1 + 2 + 3 = 6
 * - 28 es perfecto porque sus divisores son 1, 2, 4, 7, 14 y 1 + 2 + 4 + 7 + 14 = 28
 *
 * Adicionalmente, crea una función que encuentre todos los números perfectos
 * hasta un límite dado.
 */

function isPerfectNumber (num) {
  if (num <= 1) return false

  let divisorSum = 0

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisorSum += i
    }
  }

  return divisorSum === num
}

function findPerfectNumbers (limit) {
  const perfectNumbers = []

  for (let i = 1; i <= limit; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i)
    }
  }

  return perfectNumbers
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Perfect Numbers', () => {
  describe('isPerfectNumber', () => {
    it('Should return true for perfect numbers', () => {
      assert.equal(isPerfectNumber(6), true)
      assert.equal(isPerfectNumber(28), true)
      assert.equal(isPerfectNumber(496), true)
    })

    it('Should return false for non-perfect numbers', () => {
      assert.equal(isPerfectNumber(1), false)
      assert.equal(isPerfectNumber(5), false)
      assert.equal(isPerfectNumber(8), false)
      assert.equal(isPerfectNumber(12), false)
      assert.equal(isPerfectNumber(24), false)
      assert.equal(isPerfectNumber(100), false)
    })

    it('Should return false for numbers less than or equal to 1', () => {
      assert.equal(isPerfectNumber(0), false)
      assert.equal(isPerfectNumber(-5), false)
    })
  })

  describe('findPerfectNumbers', () => {
    it('Should find all perfect numbers up to a given limit', () => {
      assert.deepEqual(findPerfectNumbers(10), [6])
      assert.deepEqual(findPerfectNumbers(30), [6, 28])
      assert.deepEqual(findPerfectNumbers(500), [6, 28, 496])
    })

    it('Should return empty array when no perfect numbers exist in range', () => {
      assert.deepEqual(findPerfectNumbers(5), [])
      assert.deepEqual(findPerfectNumbers(1), [])
    })
  })
})
