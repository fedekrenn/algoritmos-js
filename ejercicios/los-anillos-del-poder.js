/*
 * ¡La Tierra Media está en guerra! En ella lucharán razas leales
 * a Sauron contra otras bondadosas que no quieren que el mal reine
 * sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3),
 *   Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2),
 *   Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre
 * los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate.
 *   Dependiendo de la suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable
 *   de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco
 *     2 Pelosos empatan contra 1 Orco
 *     3 Pelosos ganan a 1 Orco
 */

function calcBattleResult (goodArmy, enemyArmy) {
  const kindRace = {
    Pelosos: 1,
    'Sureños buenos': 2,
    Enanos: 3,
    Númenóreanos: 4,
    Elfos: 5
  }

  const evilRace = {
    'Sureños malos': 2,
    Orcos: 2,
    Goblins: 2,
    Huargos: 3,
    Trolls: 5
  }

  const goodArmyPower = goodArmy.reduce((acc, integrant) => {
    const power = kindRace[integrant]
    acc += power
    return acc
  }, 0)

  const enemyArmyPower = enemyArmy.reduce((acc, integrant) => {
    const power = evilRace[integrant]
    acc += power
    return acc
  }, 0)

  return goodArmyPower > enemyArmyPower
    ? 'Good wins! ✨'
    : enemyArmyPower === goodArmyPower
      ? 'It´s a tie! 🤝'
      : 'Evil wins! 👹'
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Rigs of power', () => {
  it('Should return that evil wins', () => {
    assert.strictEqual(
      calcBattleResult(['Pelosos'], ['Orcos']),
      'Evil wins! 👹'
    )

    assert.strictEqual(
      calcBattleResult(['Sureños buenos'], ['Trolls']),
      'Evil wins! 👹'
    )

    assert.strictEqual(
      calcBattleResult(['Elfos', 'Pelosos'], ['Orcos', 'Trolls']),
      'Evil wins! 👹'
    )

    assert.strictEqual(
      calcBattleResult(['Númenóreanos', 'Enanos'], ['Huargos', 'Trolls']),
      'Evil wins! 👹'
    )
  })

  it('Should return that good wins', () => {
    assert.strictEqual(
      calcBattleResult(['Elfos'], ['Orcos']),
      'Good wins! ✨'
    )

    assert.strictEqual(
      calcBattleResult(['Númenóreanos', 'Sureños buenos'], ['Sureños malos', 'Orcos']),
      'Good wins! ✨'
    )

    assert.strictEqual(
      calcBattleResult(['Enanos', 'Pelosos'], ['Goblins']),
      'Good wins! ✨'
    )

    assert.strictEqual(
      calcBattleResult(['Elfos', 'Pelosos', 'Pelosos'], ['Orcos', 'Goblins']),
      'Good wins! ✨'
    )
  })

  it('Should return that it´s a tie', () => {
    assert.strictEqual(
      calcBattleResult(['Sureños buenos', 'Pelosos', 'Pelosos'], ['Sureños malos', 'Goblins']),
      'It´s a tie! 🤝'
    )

    assert.strictEqual(
      calcBattleResult(['Númenóreanos', 'Pelosos'], ['Huargos', 'Sureños malos']),
      'It´s a tie! 🤝'
    )

    assert.strictEqual(
      calcBattleResult(['Pelosos', 'Pelosos', 'Sureños buenos'], ['Orcos', 'Orcos']),
      'It´s a tie! 🤝'
    )
  })

  it('Should handle edge cases', () => {
    assert.strictEqual(
      calcBattleResult([], []),
      'It´s a tie! 🤝'
    )

    assert.strictEqual(
      calcBattleResult([], ['Trolls']),
      'Evil wins! 👹'
    )

    assert.strictEqual(
      calcBattleResult(['Elfos'], []),
      'Good wins! ✨'
    )

    assert.strictEqual(
      calcBattleResult(['Enanos', 'Pelosos'], ['Orcos', 'Sureños malos']),
      'It´s a tie! 🤝'
    )
  })
})
