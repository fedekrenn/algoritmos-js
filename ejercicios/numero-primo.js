/*
* Escribe un programa que a partir de un número entero positivo, muestre por
* pantalla si es primo o no
*/

function esPrimo (num) {
  if (num <= 1) return false

  const esDivisiblePorUno = num % 1 === 0
  const esDivisiblePorSiMismo = num % num === 0

  const divisoresNoValidos = [2, 3, 4, 5, 6, 7, 8, 9]

  const esNoValido = divisoresNoValidos.some(d => {
    if (d === num) return false
    return num % d === 0
  })

  if (esNoValido || !esDivisiblePorSiMismo || !esDivisiblePorUno) return false

  return true
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Is prime number', () => {
  it('Should return true if the number is prime', () => {
    assert.equal(esPrimo(2), true)
    assert.equal(esPrimo(3), true)
    assert.equal(esPrimo(5), true)
    assert.equal(esPrimo(7), true)
    assert.equal(esPrimo(11), true)
    assert.equal(esPrimo(13), true)
  })

  it('Should return false if the number is not prime', () => {
    assert.equal(esPrimo(1), false)
    assert.equal(esPrimo(4), false)
    assert.equal(esPrimo(6), false)
    assert.equal(esPrimo(8), false)
    assert.equal(esPrimo(9), false)
    assert.equal(esPrimo(10), false)
  })
})
