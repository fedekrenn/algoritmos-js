/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

function ticTacToe (matrix) {
  if (matrix.length !== 3) return 'Nulo'

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) return matrix[i][0]

    if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) return matrix[0][i]

    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) return matrix[0][0]

    if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) return matrix[0][0]
  }

  return 'Empate'
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Tic Tac Toe', () => {
  const test1 = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
  ]

  const test2 = [
    ['O', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
  ]

  const test3 = [
    ['O', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
  ]

  const test4 = [1, 2, 3, 4]

  it('Should return X if X wins', () => {
    assert.equal(ticTacToe(test1), 'X')
  })

  it('Should return O if O wins', () => {
    assert.equal(ticTacToe(test2), 'O')
    assert.equal(ticTacToe(test3), 'O')
  })

  it('Should return "Nulo" in nobody wins', () => {
    assert.equal(ticTacToe(test4), 'Nulo')
  })
})
