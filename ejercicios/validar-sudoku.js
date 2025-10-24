/*
 * Crea una función que valide si un tablero de Sudoku 9x9 es válido.
 * - El tablero puede estar incompleto (con celdas vacías representadas como 0).
 * - Para que sea válido debe cumplir:
 *   1. Cada fila no puede tener números repetidos (del 1-9)
 *   2. Cada columna no puede tener números repetidos (del 1-9)
 *   3. Cada subcuadrícula de 3x3 no puede tener números repetidos (del 1-9)
 * - Los ceros (0) representan celdas vacías y no cuentan como duplicados.
 * - Debe retornar true si el tablero es válido, false si no lo es.
 */

function validarSudoku (tablero) {
  if (tablero.length !== 9) return false

  for (let i = 0; i < tablero.length; i++) {
    if (tablero[i].length !== 9) return false
  }

  // Función auxiliar para verificar si hay duplicados
  const tieneDuplicados = (arr) => {
    const filtrados = arr.filter((num) => num !== 0)
    return filtrados.length !== new Set(filtrados).size
  }

  // Validar filas
  for (let fila = 0; fila < 9; fila++) {
    if (tieneDuplicados(tablero[fila])) return false
  }

  // Validar columnas
  for (let col = 0; col < 9; col++) {
    const columna = []
    for (let fila = 0; fila < 9; fila++) {
      columna.push(tablero[fila][col])
    }
    if (tieneDuplicados(columna)) return false
  }

  // Validar subcuadrículas 3x3
  for (let boxFila = 0; boxFila < 9; boxFila += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const subcuadricula = []

      for (let i = boxFila; i < boxFila + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
          subcuadricula.push(tablero[i][j])
        }
      }

      if (tieneDuplicados(subcuadricula)) return false
    }
  }

  return true
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Validar Sudoku', () => {
  it('Debe retornar true para un tablero válido completo', () => {
    const tableroValido = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
    assert.isTrue(validarSudoku(tableroValido))
  })

  it('Debe retornar true para un tablero válido incompleto', () => {
    const tableroIncompleto = [
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
    assert.isTrue(validarSudoku(tableroIncompleto))
  })

  it('Debe retornar false para un tablero con filas duplicadas', () => {
    const tableroInvalido = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 1, 9] // Dos 1's en la misma fila
    ]
    assert.isFalse(validarSudoku(tableroInvalido))
  })

  it('Debe retornar false para un tablero con columnas duplicadas', () => {
    const tableroInvalido = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [5, 4, 5, 2, 8, 6, 1, 7, 9] // Primera columna tiene dos 5's
    ]
    assert.isFalse(validarSudoku(tableroInvalido))
  })

  it('Debe retornar false para un tablero con subcuadrículas duplicadas', () => {
    const tableroInvalido = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [5, 9, 8, 3, 4, 2, 5, 6, 7], // La primera subcuadrícula tiene dos 5's
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
    assert.isFalse(validarSudoku(tableroInvalido))
  })

  it('Debe retornar false para un tablero de tamaño incorrecto', () => {
    const tableroIncorrecto = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    assert.isFalse(validarSudoku(tableroIncorrecto))
  })
})
