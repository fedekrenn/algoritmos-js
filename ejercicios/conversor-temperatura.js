/*
 * Crea una función que transforme grados Celsius en Fahrenheit
 * y viceversa.
 *
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°"
 *   y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 */

function temperatureConversor (temp) {
  const regex = /^-?\d+(\.\d+)?°(C|F)$/
  const match = regex.test(temp)

  if (!match) {
    throw new Error(
      "Invalid temperature format. Use a format like '32°C' or '74°F'."
    )
  }

  const isCelcius = temp.toLowerCase().includes('°c')
  const numberTemp = Number(temp.slice(0, -2))

  if (isCelcius) {
    return (numberTemp * 1.8 + 32).toFixed(2) + '°F'
  } else {
    return ((numberTemp - 32) * (5 / 9)).toFixed(2) + '°C'
  }
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Transform °C to °F and vice versa', () => {
  it('Should return °F when receive a °C', () => {
    assert.equal(temperatureConversor('32°C'), '89.60°F')
    assert.equal(temperatureConversor('35°C'), '95.00°F')
    assert.equal(temperatureConversor('0°C'), '32.00°F')
  })

  it('Should return °C when receive a °F', () => {
    assert.equal(temperatureConversor('74°F'), '23.33°C')
    assert.equal(temperatureConversor('92°F'), '33.33°C')
    assert.equal(temperatureConversor('32°F'), '0.00°C')
  })

  it('Should throw an error when receive a wrong format', () => {
    assert.throws(
      () => temperatureConversor('32C'),
      Error,
      "Invalid temperature format. Use a format like '32°C' or '74°F'."
    )
    assert.throws(
      () => temperatureConversor('74F'),
      Error,
      "Invalid temperature format. Use a format like '32°C' or '74°F'."
    )
    assert.throws(
      () => temperatureConversor('32'),
      Error,
      "Invalid temperature format. Use a format like '32°C' or '74°F'."
    )
  })
})
