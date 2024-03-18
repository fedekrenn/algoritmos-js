/*
Escribe una función llamada isValidBoard que tome una matriz 2D de 9x9 como parámetro
y verifique que en ninguno de sus subniveles haya números repetidos. Punto a tener en cuenta:
El juego puede o no estar finalizado, quizás está a media partida, por lo que los espacios vacíos
se representan con el número 0.

El código debe cumplir las siguientes reglas:

- Cada fila debe contener los números del 1 al 9 sin repetición.
- La matriz 2D estará representada por un array de arrays, donde cada sub-array representa una fila.
Los números serán representados por valores numéricos del 1 al 9, y los espacios
vacíos por el número 0.
- El código debe retornar true si no hay números repetidos en ninguna fila, de lo contrario false.
*/

function isValidBoard (board) {
  const buffer = []

  for (let i = 0; i < board.length; i++) {
    const quantityObject = board[i].reduce((acc, num) => {
      acc[num] ? acc[num]++ : (acc[num] = 1)
      return acc
    }, {})

    // Los ceros representan valores vaciós, donde todavía el usuario no ingresó números, por eso los borramos
    delete quantityObject['0']

    const hasDuplicated = Object.values(quantityObject).some((num) => num > 1)
    buffer.push(hasDuplicated)
  }

  return buffer.every((bool) => bool === false)
}

// Tests

const chai = require('chai')
const assert = chai.assert

const validBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

const invalidBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 8, 9] // Se repite el número 8 en la última fila
]

describe('Verificando el tablero', () => {
  it('Tablero válido', () => {
    assert.deepEqual(isValidBoard(validBoard), true)
  })

  it('Tablero inválido', () => {
    assert.deepEqual(isValidBoard(invalidBoard), false)
  })
})
