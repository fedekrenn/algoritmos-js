/*
* Escribe una función que reciba un número entero positivo y devuelva la suma
* de cada uno de sus dígitos elevado a la potencia de su posición (empezando desde 1).
* Por ejemplo:
* - 123 => 1^1 + 2^2 + 3^3 = 1 + 4 + 27 = 32
* - 89 => 8^1 + 9^2 = 8 + 81 = 89
* - 695 => 6^1 + 9^2 + 5^3 = 6 + 81 + 125 = 212
*/

function sumDigitsPowered (num) {
  if (num < 0) return 0

  const digits = num.toString().split('')

  return digits.reduce((acc, digit, index) => {
    const position = index + 1
    const digitValue = parseInt(digit)
    return acc + Math.pow(digitValue, position)
  }, 0)
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Suma de dígitos elevado a su posición', () => {
  it('Should return the sum of digits raised to their position', () => {
    assert.equal(sumDigitsPowered(123), 32)
    assert.equal(sumDigitsPowered(89), 89)
    assert.equal(sumDigitsPowered(695), 212)
    assert.equal(sumDigitsPowered(1), 1)
    assert.equal(sumDigitsPowered(5), 5)
  })

  it('Should return 0 for negative numbers', () => {
    assert.equal(sumDigitsPowered(-5), 0)
    assert.equal(sumDigitsPowered(-123), 0)
  })

  it('Should handle single digit numbers correctly', () => {
    assert.equal(sumDigitsPowered(0), 0)
    assert.equal(sumDigitsPowered(7), 7)
    assert.equal(sumDigitsPowered(9), 9)
  })

  it('Should handle larger numbers', () => {
    assert.equal(sumDigitsPowered(1234), 288)
    assert.equal(sumDigitsPowered(12), 5)
  })
})
