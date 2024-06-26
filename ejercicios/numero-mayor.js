/* Kata: Encontrar el número mayor en una matriz

Tu tarea es escribir una función que encuentre el número mayor en una matriz bidimensional (matriz).
La matriz se representa como un array de arrays, donde cada subarray representa una fila de la matriz.

Escribe una función llamada 'findLargestNumber' que tome una matriz como argumento y devuelva el número
más grande encontrado en esa matriz.

Ejemplo:

findLargestNumber([[3, 5, 2], [11, 9, 8], [7, 6, 4]]) debería devolver 11
findLargestNumber([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) debería devolver 9
findLargestNumber([[17, 23], [42, 3], [7, 8, 19]]) debería devolver 42

 */

function findLargestNumber (matrix) {
  let largestNumber = matrix[0][0]

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largestNumber) {
        largestNumber = matrix[i][j]
      }
    }
  }

  return largestNumber
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Find largest number in matrix', () => {
  it('Should return the largest number in the matrix', () => {
    assert.equal(findLargestNumber([[3, 5, 2], [11, 9, 8], [7, 6, 4]]), 11)
    assert.equal(findLargestNumber([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 9)
    assert.equal(findLargestNumber([[17, 23], [42, 3], [7, 8, 19]]), 42)
    assert.equal(findLargestNumber([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]), -1)
  })
})
