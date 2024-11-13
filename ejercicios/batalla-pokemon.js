/*
 * Crea un programa que calcule el daño de un ataque durante
 * una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico
 *   (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */

function calculateDamage (attackerType, defenderType, attackerPower, defenderPower) {
  const typeAdvantage = {
    Agua: ['Fuego'],
    Fuego: ['Planta'],
    Planta: ['Agua', 'Eléctrico'],
    Eléctrico: ['Agua']
  }

  const attackerIsValid = typeAdvantage[attackerType] !== undefined
  const defenderIsValid = typeAdvantage[defenderType] !== undefined

  if (!attackerIsValid || !defenderIsValid) throw new Error('Invalid type')

  const attackerHasAdvantage = typeAdvantage[attackerType]?.includes(defenderType)
  const defenderHasAdvantage = typeAdvantage[defenderType]?.includes(attackerType)

  let damageMultiplier = 1

  if (attackerHasAdvantage) {
    damageMultiplier = 2
  } else if (defenderHasAdvantage) {
    damageMultiplier = 0.5
  }

  const damage = 50 * (attackerPower / defenderPower) * damageMultiplier

  return damage
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('calculateDamage', () => {
  it('should return the damage of the attack with equal powers but attacket type advantage', () => {
    assert.strictEqual(calculateDamage('Agua', 'Fuego', 50, 50), 100)
    assert.strictEqual(calculateDamage('Fuego', 'Planta', 50, 50), 100)
    assert.strictEqual(calculateDamage('Planta', 'Agua', 50, 50), 100)
    assert.strictEqual(calculateDamage('Planta', 'Eléctrico', 50, 50), 100)
    assert.strictEqual(calculateDamage('Eléctrico', 'Agua', 50, 50), 100)
  })

  it('should return the damage of the attack with different powers', () => {
    assert.strictEqual(calculateDamage('Agua', 'Fuego', 100, 50), 200)
    assert.strictEqual(calculateDamage('Fuego', 'Planta', 50, 100), 50)
    assert.strictEqual(calculateDamage('Planta', 'Agua', 50, 100), 50)
    assert.strictEqual(calculateDamage('Planta', 'Eléctrico', 100, 50), 200)
    assert.strictEqual(calculateDamage('Eléctrico', 'Agua', 75, 100), 75)
  })

  it('should return the damage of the attack with type disadvantage', () => {
    assert.strictEqual(calculateDamage('Agua', 'Planta', 50, 50), 25)
    assert.strictEqual(calculateDamage('Fuego', 'Agua', 50, 50), 25)
    assert.strictEqual(calculateDamage('Eléctrico', 'Planta', 50, 50), 25)
    assert.strictEqual(calculateDamage('Planta', 'Fuego', 50, 50), 25)
  })

  it('should return the damage of the attack with no advantage or disadvantage', () => {
    assert.strictEqual(calculateDamage('Agua', 'Agua', 50, 50), 50)
    assert.strictEqual(calculateDamage('Fuego', 'Fuego', 100, 50), 100)
    assert.strictEqual(calculateDamage('Planta', 'Planta', 75, 75), 50)
    assert.strictEqual(calculateDamage('Eléctrico', 'Eléctrico', 100, 50), 100)
  })

  it('should throw an error if the type is invalid', () => {
    assert.throws(() => calculateDamage('Agua', 'Tierra', 50, 50), 'Invalid type')
    assert.throws(() => calculateDamage('Tierra', 'Agua', 50, 50), 'Invalid type')
  })
})
