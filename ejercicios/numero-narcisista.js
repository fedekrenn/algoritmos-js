function narcissisticNumber (num) {
  const numberToArray = num.toString().split('')

  const exponentiation = numberToArray.length

  const result = numberToArray.reduce((acc, num) => {
    acc += parseInt(num) ** exponentiation
    return acc
  }, 0)
  return result === num
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('narcissisticNumber', () => {
  it('should return true when the number is narcissistic', () => {
    assert.strictEqual(narcissisticNumber(153), true)
    assert.strictEqual(narcissisticNumber(370), true)
    assert.strictEqual(narcissisticNumber(371), true)
    assert.strictEqual(narcissisticNumber(9474), true)
  })

  it('should return false when the number is not narcissistic', () => {
    assert.strictEqual(narcissisticNumber(12), false)
    assert.strictEqual(narcissisticNumber(123), false)
    assert.strictEqual(narcissisticNumber(1234), false)
  })
})
