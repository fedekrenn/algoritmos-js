/*
 * Crea una función que valide códigos de barras EAN-13.
 * - El código EAN-13 consiste en 13 dígitos.
 * - El último dígito es un dígito de control calculado con un algoritmo específico.
 * - Para validar: suma los dígitos en posiciones impares, suma los dígitos en posiciones pares
 *   y multiplícalos por 3, suma ambos resultados y el módulo 10 debe ser 0.
 * - Si no es 0, el dígito de control es 10 menos ese resultado módulo 10.
 * - La función debe retornar true si el código es válido, false en caso contrario.
 */

function validateEAN13 (code) {
  const digits = code.split('').map(Number)

  if (digits.length !== 13) return false

  /*
  let oddSum = 0
  let evenSum = 0

  for (let i = 0; i < 12; i++) {
    if (i % 2 === 0) {
      oddSum += digits[i]
    } else {
      evenSum += digits[i]
    }
  }
    */

  const { oddSum, evenSum } = digits.reduce((acc, digit, index) => {
    if (index < 12) {
      if (index % 2 === 0) {
        acc.oddSum += digit
      } else {
        acc.evenSum += digit
      }
    }
    return acc
  }, { oddSum: 0, evenSum: 0 })

  const total = oddSum + (evenSum * 3)
  const checkDigit = (10 - (total % 10)) % 10

  return checkDigit === digits[12]
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Validador EAN-13', () => {
  describe('validateEAN13', () => {
    it('Should return true for valid EAN-13 codes', () => {
      assert.strictEqual(validateEAN13('7501031311309'), true, '7501031311309 debería ser válido')
      assert.strictEqual(validateEAN13('8901030801532'), true, '8901030801532 debería ser válido')
      assert.strictEqual(validateEAN13('1234567890128'), true, '1234567890128 debería ser válido')
    })

    it('Should return false for invalid EAN-13 codes', () => {
      assert.strictEqual(validateEAN13('7501031311308'), false, '7501031311308 no debería ser válido')
      assert.strictEqual(validateEAN13('8901030801533'), false, '8901030801533 no debería ser válido')
      assert.strictEqual(validateEAN13('1234567890129'), false, '1234567890129 no debería ser válido')
    })

    it('Should return false for codes with incorrect length', () => {
      assert.strictEqual(validateEAN13('123456789'), false, 'Código muy corto no debería ser válido')
      assert.strictEqual(validateEAN13('12345678901234'), false, 'Código muy largo no debería ser válido')
      assert.strictEqual(validateEAN13(''), false, 'Código vacío no debería ser válido')
    })

    it('Should return false for codes with non-numeric characters', () => {
      assert.strictEqual(validateEAN13('123456789012a'), false, 'Código con letras no debería ser válido')
      assert.strictEqual(validateEAN13('123-456-789012'), false, 'Código con guiones no debería ser válido')
    })
  })
})
