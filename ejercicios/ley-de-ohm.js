/*
* Crea una función que calcule el valor del parámetro perdido
* correspondiente a la ley de Ohm.
* - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará
*   el valor del tercero (redondeado a 2 decimales).
* - Si los parámetros son incorrectos o insuficientes, la función retornará
*   la cadena de texto "Invalid values".

V = Voltaje -> R * I
R = Resistencia -> V / I
I = Corriente -> V / R

*/

function ohmValue (args) {
  const { v, r, i } = args || {}

  if (!v && !r && !i) return 'Invalid values because no values were provided'
  if (Object.keys(args).length !== 2) return 'Invalid values because the number of values is incorrect'

  if (!v) return `V: ${r * i}`
  if (!r) return `R: ${v / i}`
  if (!i) return `I: ${v / r}`
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('ohmValue', () => {
  it('should return the missing parameter', () => {
    assert.strictEqual(ohmValue({ r: 10, i: 5 }), 'V: 50')
    assert.strictEqual(ohmValue({ v: 50, i: 5 }), 'R: 10')
    assert.strictEqual(ohmValue({ v: 50, r: 10 }), 'I: 5')
  })

  it('should return "Invalid values" if the number of values is incorrect', () => {
    assert.strictEqual(ohmValue({ v: 50, r: 10, i: 5 }), 'Invalid values because the number of values is incorrect')
  })

  it('should return "Invalid values" if no values were provided', () => {
    assert.strictEqual(ohmValue(), 'Invalid values because no values were provided')
  })
})
