/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function greatestCommonDivisor (num1, num2) {
  if (num1 % 1 !== 0 || num2 % 1 !== 0) return 'Los números deben ser enteros'
  if (num1 < 1 || num2 < 1) return 'Los números deben ser mayores a cero'

  function getFactors (num) {
    const buffer = []

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) buffer.push(i)
    }

    return buffer
  }

  const num1Factors = getFactors(num1)
  const num2Factors = getFactors(num2)

  const [largestArr, shortestArr] =
    num1Factors.length > num2Factors.length
      ? [num1Factors, num2Factors]
      : [num2Factors, num1Factors]

  return Math.max(...largestArr.filter((num) => shortestArr.includes(num)))
}

function leastCommonMultiple (num1, num2) {
  if (num1 % 1 !== 0 || num2 % 1 !== 0) return 'Los números deben ser enteros'
  if (num1 < 1 || num2 < 1) return 'Los números deben ser mayores a cero'

  const gcd = greatestCommonDivisor(num1, num2)
  if (typeof gcd === 'string') return gcd

  return (num1 * num2) / gcd
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Greatest common divisor', () => {
  it('Should return the greatest common divisor of two numbers', () => {
    assert.equal(greatestCommonDivisor(48, 18), 6)
    assert.equal(greatestCommonDivisor(56, 98), 14)
    assert.equal(greatestCommonDivisor(101, 103), 1)
    assert.equal(greatestCommonDivisor(60, 45), 15)
    assert.equal(greatestCommonDivisor(24, 36), 12)
    assert.equal(greatestCommonDivisor(17, 31), 1)
  })

  it('Should return an error if the numbers are not integers', () => {
    assert.equal(greatestCommonDivisor(48.5, 18), 'Los números deben ser enteros')
    assert.equal(greatestCommonDivisor(56, 98.5), 'Los números deben ser enteros')
  })

  it('Should return an error if the numbers are not greater than zero', () => {
    assert.equal(greatestCommonDivisor(0, 18), 'Los números deben ser mayores a cero')
    assert.equal(greatestCommonDivisor(56, -1), 'Los números deben ser mayores a cero')
  })
})

describe('Least common multiple', () => {
  it('Should return the least common multiple of two numbers', () => {
    assert.equal(leastCommonMultiple(48, 18), 144)
    assert.equal(leastCommonMultiple(56, 98), 392)
    assert.equal(leastCommonMultiple(101, 103), 10403)
    assert.equal(leastCommonMultiple(60, 45), 180)
    assert.equal(leastCommonMultiple(24, 36), 72)
    assert.equal(leastCommonMultiple(17, 31), 527)
  })

  it('Should return an error if the numbers are not integers', () => {
    assert.equal(leastCommonMultiple(48.5, 18), 'Los números deben ser enteros')
    assert.equal(leastCommonMultiple(56, 98.5), 'Los números deben ser enteros')
  })

  it('Should return an error if the numbers are not greater than zero', () => {
    assert.equal(leastCommonMultiple(0, 18), 'Los números deben ser mayores a cero')
    assert.equal(leastCommonMultiple(56, -1), 'Los números deben ser mayores a cero')
  })
})
