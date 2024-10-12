/*
* Dado un array de enteros ordenado y sin repetidos,
* crea una función que calcule y retorne todos los que faltan entre
* el mayor y el menor.
* - Lanza un error si el array de entrada no es correcto.
*/

function lostNumbers (numsArr) {
  if (!Array.isArray(numsArr) || numsArr.length === 0) {
    throw new Error('The input must be an array with at least one element')
  }

  const maxNum = Math.max(...numsArr)
  const minNum = Math.min(...numsArr)

  const buffer = []

  for (let i = minNum; i <= maxNum; i++) {
    if (!numsArr.includes(i)) buffer.push(i)
  }

  return buffer
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('lostNumbers', () => {
  it('should return an array with the missing numbers', () => {
    assert.deepStrictEqual(lostNumbers([1, 2, 3, 6, 10]), [4, 5, 7, 8, 9])
    assert.deepStrictEqual(lostNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [])
    assert.deepStrictEqual(lostNumbers([1, 2, 3, 4, 5, 6, 10]), [7, 8, 9])
  })

  it('should throw an error if the input is not an array', () => {
    assert.throws(() => lostNumbers('string'), Error, 'The input must be an array with at least one element')
  })

  it('should throw an error if the array is empty', () => {
    assert.throws(() => lostNumbers([]), Error, 'The input must be an array with at least one element')
  })
})
