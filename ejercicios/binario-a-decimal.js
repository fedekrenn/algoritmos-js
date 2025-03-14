/*
* Crea un programa se encargue de transformar un número binario
* a decimal sin utilizar funciones propias del lenguaje que
* lo hagan directamente.
*/

function binaryToDecimal (binary) {
  const partial = String(binary).split('').reverse()

  return partial.reduce((acc, el, i) => {
    const factory = el * 2 ** i
    return acc + factory
  }, 0)
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Binary to decimal', () => {
  it('Should return the decimal number of a binary number', () => {
    assert.strictEqual(binaryToDecimal(101), 5)
    assert.strictEqual(binaryToDecimal(1101), 13)
    assert.strictEqual(binaryToDecimal(100101), 37)
    assert.strictEqual(binaryToDecimal(111111), 63)
  })
})
