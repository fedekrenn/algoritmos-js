/*
 * ¡Han anunciado un nuevo "The Legend of Zelda"!
 * Se llamará "Tears of the Kingdom" y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos
 * "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda
 * que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento
 *   (si no encuentras el día exacto puedes usar el mes, o incluso inventártelo)
 */

const games = [
  {
    id: 1,
    title: 'The Legend of Zelda',
    releaseDate: '21/02/1986'
  },

  {
    id: 2,
    title: 'The Legend of Zelda: A Link to the Past',
    releaseDate: '21/11/1991'
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Ocarina of Time',
    releaseDate: '21/11/1998'
  },
  {
    id: 4,
    title: 'The Legend of Zelda: Majora\'s Mask',
    releaseDate: '27/04/2000'
  },
  {
    id: 5,
    title: 'The Legend of Zelda: The Wind Waker',
    releaseDate: '13/12/2002'
  },
  {
    id: 6,
    title: 'The Legend of Zelda: Twilight Princess',
    releaseDate: '19/11/2006'
  },
  {
    id: 7,
    title: 'The Legend of Zelda: Skyward Sword',
    releaseDate: '03/03/2011'
  },
  {
    id: 8,
    title: 'The Legend of Zelda: Breath of the Wild',
    releaseDate: '03/04/2017'
  }
]

function parseDate (dateString) {
  const [day, month, year] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day)
}

function convertDaysInTime (days) {
  const years = parseInt(days / 365)
  let remainingDays = days % 365
  let months = 0

  if (remainingDays > 30) {
    months = parseInt(remainingDays / 30)
    remainingDays = remainingDays % 30
  }

  return {
    years,
    days: parseInt(remainingDays),
    months
  }
}

function getZeldaReleaseDates (game1Id, game2Id) {
  const game1 = games.find(({ id }) => id === game1Id)
  const game2 = games.find(({ id }) => id === game2Id)

  if (!game1 || !game2) {
    throw new Error('Uno o ambos juegos no existen.')
  }

  const date1 = parseDate(game1.releaseDate)
  const date2 = parseDate(game2.releaseDate)

  const difference = Math.abs(date1 - date2)

  const seconds = difference / 1000
  const hours = seconds / 60 / 60

  return convertDaysInTime(hours / 24)
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Zelda games release dates', () => {
  it('Should return the difference between 2 games', () => {
    assert.deepEqual(getZeldaReleaseDates(1, 8), { years: 31, months: 1, days: 19 })
    assert.deepEqual(getZeldaReleaseDates(1, 2), { years: 5, months: 9, days: 3 })
    assert.deepEqual(getZeldaReleaseDates(5, 6), { years: 3, months: 11, days: 12 })
  })

  it('Should return an error if one of the games does not exist', () => {
    assert.throw(() => getZeldaReleaseDates(1, 9), Error, 'Uno o ambos juegos no existen.')
  })
})
