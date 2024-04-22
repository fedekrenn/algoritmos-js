/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function obstacleRace (actions, stage) {
  if (actions.length !== stage.length) return false
  for (let i = 0; i < actions.length; i++) {
    const incorrectAction1 = actions[i] === 'jump' && stage[i] === '_'
    const incorrectAction2 = actions[i] === 'run' && stage[i] === '|'
    if (incorrectAction1 || incorrectAction2) {
      return false
    }
  }
  return true
}

// Test

const chai = require('chai')
const assert = chai.assert

describe('obstacleRace', () => {
  it('should return true if the athlete has passed the obstacle', () => {
    assert.strictEqual(obstacleRace(['run', 'jump', 'run', 'jump', 'run', 'jump'], '_|_|_|'), true)
    assert.strictEqual(obstacleRace(['run', 'run', 'run', 'run', 'run', 'run'], '______'), true)
    assert.strictEqual(obstacleRace(['jump', 'jump', 'jump', 'jump', 'jump', 'jump'], '||||||'), true)
    assert.strictEqual(obstacleRace(['run', 'run', 'jump', 'run', 'jump', 'jump'], '__|_||'), true)
  })

  it('should return false if the athlete has not passed the obstacle', () => {
    assert.strictEqual(obstacleRace(['run', 'run', 'jump', 'jump', 'run', 'jump'], '_|_|_|_'), false)
    assert.strictEqual(obstacleRace(['run', 'run', 'jump', 'run', 'run', 'run'], '_______'), false)
    assert.strictEqual(obstacleRace(['jump', 'jump', 'run', 'jump', 'run', 'jump'], '|||||||'), false)
    assert.strictEqual(obstacleRace(['run', 'run', 'jump', 'run', 'run', 'jump', 'jump'], '__|_||_'), false)
  })
})
