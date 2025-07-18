/*
 * Crea una función que determine si un número es un número de Armstrong.
 * Un número de Armstrong (también llamado número pluperfecto) es un número que es igual
 * a la suma de sus propios dígitos elevados a la potencia del número de dígitos.
 *
 * Ejemplos:
 * - 9 es un número de Armstrong porque: 9^1 = 9
 * - 153 es un número de Armstrong porque: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * - 9474 es un número de Armstrong porque: 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474
 *
 * La función debe:
 * - Recibir un número entero positivo
 * - Retornar true si es un número de Armstrong, false en caso contrario
 * - Manejar números de cualquier cantidad de dígitos
 */

function isArmstrongNumber (num) {
  const digits = num.toString().split('')
  const numberOfDigits = digits.length

  const sum = digits.reduce((acc, el) => {
    return acc + Math.pow(parseInt(el), numberOfDigits)
  }, 0)

  return sum === num
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Armstrong Numbers', () => {
  describe('isArmstrongNumber', () => {
    it('should return true for single digit numbers', () => {
      assert.strictEqual(isArmstrongNumber(0), true, '0 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(1), true, '1 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(5), true, '5 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(9), true, '9 debería ser un número de Armstrong')
    })

    it('should return true for valid Armstrong numbers', () => {
      assert.strictEqual(isArmstrongNumber(153), true, '153 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(370), true, '370 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(371), true, '371 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(407), true, '407 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(1634), true, '1634 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(8208), true, '8208 debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(9474), true, '9474 debería ser un número de Armstrong')
    })

    it('should return false for non-Armstrong numbers', () => {
      assert.strictEqual(isArmstrongNumber(10), false, '10 no debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(100), false, '100 no debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(152), false, '152 no debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(372), false, '372 no debería ser un número de Armstrong')
      assert.strictEqual(isArmstrongNumber(1633), false, '1633 no debería ser un número de Armstrong')
    })
  })
})
