/*
 * Crea una función que valide si un número de tarjeta de crédito es válido
 * utilizando el algoritmo de Luhn.
 *
 * El algoritmo de Luhn funciona de la siguiente manera:
 * 1. Desde el dígito más a la derecha (dígito de verificación) hacia la izquierda,
 *    duplica el valor de cada segundo dígito.
 * 2. Si el resultado de duplicar es mayor que 9, resta 9 al resultado.
 * 3. Suma todos los dígitos.
 * 4. Si el total es divisible por 10, el número es válido.
 *
 * Además, la función debe:
 * - Aceptar números como string o como número.
 * - Ignorar espacios y guiones en el string de entrada.
 * - Retornar false si contiene caracteres no válidos.
 * - Retornar false si tiene menos de 13 o más de 19 dígitos.
 *
 * Ejemplo del algoritmo con 4539148803436467:
 * Dígitos:     4  5  3  9  1  4  8  8  0  3  4  3  6  4  6  7
 * Duplicados:  8  5  6  9  2  4  16 8  0  3  8  3  12 4  12 7
 * Ajustados:   8  5  6  9  2  4  7  8  0  3  8  3  3  4  3  7
 * Suma: 8+5+6+9+2+4+7+8+0+3+8+3+3+4+3+7 = 80
 * 80 % 10 = 0 → Válido
 */

function validateCreditCard (number) {
  // Remove spaces and dashes
  const cleanNumber = String(number).replace(/[\s-]/g, '')

  // Check that it only contains digits
  if (!/^\d+$/.test(cleanNumber)) {
    return false
  }

  // Check valid length (13-19 digits)
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false
  }

  // Apply Luhn algorithm
  const digits = cleanNumber.split('').map(Number).reverse()

  let sum = 0
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i]

    // Double every second digit (odd indices after reversing)
    if (i % 2 === 1) {
      digit *= 2
      // If greater than 9, subtract 9
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
  }

  return sum % 10 === 0
}

// Additional function: detect card type
function detectCardType (number) {
  const cleanNumber = String(number).replace(/[\s-]/g, '')

  if (!/^\d+$/.test(cleanNumber)) {
    return 'Invalid'
  }

  // Visa: starts with 4, length 13 or 16
  if (
    /^4/.test(cleanNumber) &&
    (cleanNumber.length === 13 || cleanNumber.length === 16)
  ) {
    return 'Visa'
  }

  // MasterCard: starts with 51-55 or 2221-2720, length 16
  if (
    /^(5[1-5]|2[2-7][2-9][0-9])/.test(cleanNumber) &&
    cleanNumber.length === 16
  ) {
    return 'MasterCard'
  }

  // American Express: starts with 34 or 37, length 15
  if (/^3[47]/.test(cleanNumber) && cleanNumber.length === 15) {
    return 'American Express'
  }

  // Discover: starts with 6011, 644-649, or 65, length 16-19
  if (
    /^(6011|64[4-9]|65)/.test(cleanNumber) &&
    cleanNumber.length >= 16 &&
    cleanNumber.length <= 19
  ) {
    return 'Discover'
  }

  return 'Unknown'
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Credit Card Validation - Luhn Algorithm', () => {
  describe('validateCreditCard', () => {
    it('Should return true for valid card numbers', () => {
      assert.isTrue(validateCreditCard('4539148803436467'))
      assert.isTrue(validateCreditCard('4532015112830366'))
      assert.isTrue(validateCreditCard('5425233430109903'))
      assert.isTrue(validateCreditCard('374245455400126'))
    })

    it('Should return false for invalid card numbers', () => {
      assert.isFalse(validateCreditCard('4539148803436468'))
      assert.isFalse(validateCreditCard('1234567890123456'))
      assert.isFalse(validateCreditCard('0000000000000000'))
    })

    it('Should accept numbers with spaces and dashes', () => {
      assert.isTrue(validateCreditCard('4539 1488 0343 6467'))
      assert.isTrue(validateCreditCard('4539-1488-0343-6467'))
      assert.isTrue(validateCreditCard('4539 - 1488 - 0343 - 6467'))
    })

    it('Should accept numbers as number type', () => {
      assert.isTrue(validateCreditCard(4539148803436467))
    })

    it('Should return false for invalid characters', () => {
      assert.isFalse(validateCreditCard('4539a488034b6467'))
      assert.isFalse(validateCreditCard('abcdefghijklmnop'))
      assert.isFalse(validateCreditCard('4539!488@034#6467'))
    })

    it('Should return false for invalid lengths', () => {
      assert.isFalse(validateCreditCard('123456789012')) // 12 digits
      assert.isFalse(validateCreditCard('12345678901234567890')) // 20 digits
    })
  })

  describe('detectCardType', () => {
    it('Should detect Visa cards', () => {
      assert.strictEqual(detectCardType('4539148803436467'), 'Visa')
      assert.strictEqual(detectCardType('4111111111111111'), 'Visa')
    })

    it('Should detect MasterCard cards', () => {
      assert.strictEqual(detectCardType('5425233430109903'), 'MasterCard')
      assert.strictEqual(detectCardType('5500000000000004'), 'MasterCard')
    })

    it('Should detect American Express cards', () => {
      assert.strictEqual(detectCardType('374245455400126'), 'American Express')
      assert.strictEqual(detectCardType('378282246310005'), 'American Express')
    })

    it('Should detect Discover cards', () => {
      assert.strictEqual(detectCardType('6011111111111117'), 'Discover')
      assert.strictEqual(detectCardType('6500000000000002'), 'Discover')
    })

    it('Should return Unknown for other types', () => {
      assert.strictEqual(detectCardType('1234567890123456'), 'Unknown')
    })

    it('Should return Invalid for numbers with invalid characters', () => {
      assert.strictEqual(detectCardType('abcd1234efgh5678'), 'Invalid')
    })
  })
})
