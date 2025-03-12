/*
 * Escribe una función que reciba un número entero positivo y retorne
 * su representación en números romanos.
 * - Los números romanos se representan con las letras I, V, X, L, C, D, M.
 * - Se deben seguir las reglas de notación romana.
 */

function toRoman (num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ]

  let result = ''
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral
      num -= value
    }
  }
  return result
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Roman Numerals', () => {
  it('should convert numbers to Roman numerals correctly', () => {
    assert.strictEqual(toRoman(1), 'I')
    assert.strictEqual(toRoman(4), 'IV')
    assert.strictEqual(toRoman(9), 'IX')
    assert.strictEqual(toRoman(14), 'XIV')
    assert.strictEqual(toRoman(40), 'XL')
    assert.strictEqual(toRoman(90), 'XC')
    assert.strictEqual(toRoman(100), 'C')
    assert.strictEqual(toRoman(400), 'CD')
    assert.strictEqual(toRoman(500), 'D')
    assert.strictEqual(toRoman(900), 'CM')
    assert.strictEqual(toRoman(1000), 'M')
    assert.strictEqual(toRoman(1987), 'MCMLXXXVII')
    assert.strictEqual(toRoman(3999), 'MMMCMXCIX')
  })
})
