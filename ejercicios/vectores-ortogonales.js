/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

function orthogonalVectors (...args) {
  if (!args.every(arr => arr.length === args[0].length)) return false

  const buffer = []

  for (let i = 0; i < args[0].length; i++) {
    let resultado = 1
    for (let j = 0; j < args.length; j++) {
      resultado *= args[j][i]
    }
    buffer.push(resultado)
  }

  return buffer.reduce((acc, el) => acc + el, 0) === 0
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Orthonal Vectors finder', () => {
  it('Should return "true" if a pair of arrays is an orthogonal vector', () => {
    assert.isTrue(orthogonalVectors([1, 0], [0, 5]))
    assert.isTrue(orthogonalVectors([0, 4], [-7, 0]))
    assert.isTrue(orthogonalVectors([3, 2], [-2, 3]))
    assert.isTrue(orthogonalVectors([0, -8], [6, 0]))
    assert.isTrue(orthogonalVectors([9, 0], [0, -3]))
  })

  it('Should return "false" if the length of the arrays is different', () => {
    assert.isFalse(orthogonalVectors([1, 1, 3], [0, 5]))
    assert.isFalse(orthogonalVectors([0, 4, 3], [-7, 0, 9, 25]))
  })

  it('Should return "false" if not the same length', () => {
    assert.isFalse(orthogonalVectors([1, 0], [0, 5, 0]))
    assert.isFalse(orthogonalVectors([0, 4, 3], [-7, 0]))
  })
})
