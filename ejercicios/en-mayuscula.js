/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
*/

function capitalizeString (inputString) {
  if (inputString === '') return ''

  const convertToLower = inputString.toLowerCase()
  const splitted = convertToLower.split(' ')
  const upperCaseFirstLetter = splitted.map(word => {
    const firstLetter = word[0]
    return word.replace(firstLetter, firstLetter.toUpperCase())
  })
  return upperCaseFirstLetter.join(' ')
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('capitalizeString', () => {
  it('should capitalize first letter of each word', () => {
    assert.strictEqual(capitalizeString('hello world'), 'Hello World')
    assert.strictEqual(capitalizeString('hello world!'), 'Hello World!')
    assert.strictEqual(capitalizeString('hello world! how are you?'), 'Hello World! How Are You?')
  })

  it('should work with single word', () => {
    assert.strictEqual(capitalizeString('hello'), 'Hello')
  })

  it('should work with empty string', () => {
    assert.strictEqual(capitalizeString(''), '')
  })
})
