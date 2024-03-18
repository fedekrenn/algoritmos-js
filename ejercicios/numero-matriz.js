/* Kata: Encontrar el elemento más grande en una matriz
 *
 * Tu tarea es escribir una función que encuentre el elemento más grande en una matriz bidimensional.
 *
 * Escribe una función llamada 'findLargestElement' que tome una matriz como argumento y devuelva el número más grande
 * encontrado en esa matriz.
 *
 * Ejemplo:
 *
 * findLargestElement([
 *   [3, 5, 2],
 *   [11, 9, 8],
 *   [7, 6, 4]
 * ]) debería devolver 11 (que es el elemento más grande en la matriz).
 *
 * findLargestElement([
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]) debería devolver 9 (que es el elemento más grande en la matriz).
 *
 */

function findLargestElement (matrix) {
  let largestElement = matrix[0][0]

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largestElement) {
        largestElement = matrix[i][j]
      }
    }
  }

  return largestElement
}

// Pruebas

const chai = require('chai')
const assert = chai.assert

describe('Encontrar el elemento más grande en una matriz', () => {
  it('Test 1', () => {
    assert.equal(
      findLargestElement([
        [3, 5, 2],
        [11, 9, 8],
        [7, 6, 4]
      ]),
      11
    )
  })

  it('Test 2', () => {
    assert.equal(
      findLargestElement([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]),
      9
    )
  })

  it('Test 3', () => {
    assert.equal(
      findLargestElement([
        [17, 23],
        [42, 3],
        [7, 8, 19]
      ]),
      42
    )
  })
})
