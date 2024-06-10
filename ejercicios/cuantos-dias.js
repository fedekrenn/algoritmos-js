/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function parseDate (_date) {
  const [day, month, year] = _date.split('/')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

function calculateDaysDifference (date1, date2) {
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
  if (!dateRegex.test(date1) || !dateRegex.test(date2)) {
    throw new Error('El formato de las fechas no es correcto')
  }
  const parsedDate1 = parseDate(date1)
  const parsedDate2 = parseDate(date2)
  const timeDifference = parsedDate1.getTime() - parsedDate2.getTime()
  const totalDays = timeDifference / 1000 / 60 / 60 / 24
  return Math.abs(Math.ceil(totalDays))
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('calculateDaysDifference', () => {
  it('should return 0 when both dates are the same', () => {
    assert.strictEqual(calculateDaysDifference('01/01/2021', '01/01/2021'), 0)
  })

  it('should return 1 when the difference is 1 day', () => {
    assert.strictEqual(calculateDaysDifference('01/01/2021', '02/01/2021'), 1)
  })

  it('Should return correct number of days when dates are in different months', () => {
    assert.strictEqual(calculateDaysDifference('01/01/2021', '01/02/2021'), 31)
    assert.strictEqual(calculateDaysDifference('01/02/2021', '01/03/2021'), 28)
    assert.strictEqual(calculateDaysDifference('01/01/2021', '01/02/2024'), 1126)
  })
})
