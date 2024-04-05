/*
* Crea un programa se encargue de transformar un número
* decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
*/

function convertToBinary (decimal) {
  let number = decimal
  let binary = ''

  while (number != 0) {
    const reminder = number % 2
    number = Math.floor(number / 2)
    binary = reminder + binary
  }
  return parseInt(binary) || 0
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Convert to binary', () => {
  it('Should convert a decimal number into a binary', () => {
    assert.strictEqual(convertToBinary(75), 1001011, '75 => 1001011')
    assert.strictEqual(convertToBinary(10), 1010, '10 => 1010')
    assert.strictEqual(convertToBinary(100), 1100100, '100 => 1100100')
    assert.strictEqual(convertToBinary(1000), 1111101000, '1000 => 1111101000')
    assert.strictEqual(convertToBinary(354), 101100010, '354 => 101100010')
  })

  it('Should return 0 if the number is 0', () => {
    assert.strictEqual(convertToBinary(0), 0, '0 => 0')
  })

  it('Shouldn\'t return a string', () => {
    assert.isNumber(convertToBinary(75), '75 => 1001011')
    assert.isNumber(convertToBinary(10), '10 => 1010')
    assert.isNumber(convertToBinary(100), '100 => 1100100')
    assert.isNumber(convertToBinary(1000), '1000 => 1111101000')
    assert.isNumber(convertToBinary(354), '354 => 101100010')
  })
})
