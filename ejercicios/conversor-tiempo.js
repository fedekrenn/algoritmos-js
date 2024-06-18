/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
*/

function getMilliseconds (days, hours, minutes, seconds) {
  const convertedSeconds = seconds * 1000
  const convertedMinutes = minutes * 60 * 1000
  const convertedHours = hours * 60 * 60 * 1000
  const convertedDays = days * 24 * 60 * 60 * 1000

  return convertedSeconds + convertedMinutes + convertedHours + convertedDays
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Get Milliseconds', () => {
  it('Should return a correct quantity of milliseconds when i set a time info', () => {
    assert.strictEqual(getMilliseconds(0, 1, 0, 0), 3600000)
    assert.strictEqual(getMilliseconds(1, 0, 0, 0), 86400000)
    assert.strictEqual(getMilliseconds(0, 0, 1, 0), 60000)
  })
})
