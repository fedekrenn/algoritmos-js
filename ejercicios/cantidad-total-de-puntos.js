/*
Nuestro equipo de fútbol ha terminado el campeonato.

Los resultados de los partidos de nuestro equipo se registran en una colección de cadenas. Cada partido se representa por una cadena en el formato "x:y", donde x es la puntuación de nuestro equipo e y es la puntuación del equipo contrario.

Por ejemplo: ["3:1", "2:2", "0:1", ...]

Se otorgan puntos para cada partido de la siguiente manera:

si x > y: 3 puntos (victoria)
si x < y: 0 puntos (derrota)
si x = y: 1 punto (empate)

Necesitamos escribir una función que tome esta colección y devuelva la cantidad de puntos que nuestro equipo (x) obtuvo en el campeonato según las reglas mencionadas anteriormente.
*/

function points (games) {
  return games.reduce((acc, game) => {
    const result = game.split(':')
    if (result[0] > result[1]) {
      return acc + 3
    } else if (result[0] == result[1]) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
}

// TESTS

const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe('Total amount of points', function () {
  it('Sample Tests', function () {
    assert.strictEqual(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']), 30)
    assert.strictEqual(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']), 10)
    assert.strictEqual(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']), 0)
    assert.strictEqual(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']), 15)
    assert.strictEqual(points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4']), 12)
  })
})
