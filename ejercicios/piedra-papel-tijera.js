/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Player 1" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function rockPaperScissors (plays) {
  function checkWinner (play1, play2) {
    const winningCombinations = {
      R: 'S',
      S: 'P',
      P: 'R'
    }
    return winningCombinations[play1] === play2
  }

  const validPlays = ['R', 'S', 'P']

  let player1Points = 0
  let player2Points = 0
  let hasError = false

  plays.forEach(play => {
    if (!validPlays.includes(play[0]) || !validPlays.includes(play[1])) {
      hasError = true
      return
    }

    if (checkWinner(play[0], play[1])) {
      player1Points++
    } else if (checkWinner(play[1], play[0])) {
      player2Points++
    }
  })

  if (hasError) return 'Jugada no válida'

  if (player1Points > player2Points) {
    return 'Player 1'
  } else if (player2Points > player1Points) {
    return 'Player 2'
  } else {
    return 'Tie'
  }
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Rock, paper or scissors', () => {
  it('Should return who wins', () => {
    assert.deepEqual(rockPaperScissors([['R', 'S'], ['S', 'R'], ['P', 'S']]), 'Player 2')
    assert.deepEqual(rockPaperScissors([['S', 'R'], ['R', 'S'], ['S', 'P']]), 'Player 1')
    assert.deepEqual(rockPaperScissors([['S', 'R'], ['S', 'R'], ['S', 'R']]), 'Player 2')
  })

  it('Should return "Tie" if there´s no winner', () => {
    assert.deepEqual(rockPaperScissors([['S', 'S'], ['R', 'R'], ['P', 'P']]), 'Tie')
    assert.deepEqual(rockPaperScissors([['R', 'R']]), 'Tie')
  })

  it('Should return an error if there is an invalid option', () => {
    assert.deepEqual(rockPaperScissors([['T', 'R']]), 'Jugada no válida')
  })
})
