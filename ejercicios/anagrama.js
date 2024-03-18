/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram (string1, string2) {
  if (string1.toLowerCase() === string2.toLowerCase()) return false

  const firstWord = string1.split('').sort()
  const secondWord = string2.split('').sort()
  return firstWord.join('') === secondWord.join('')
}

// Test
const chai = require('chai')
const assert = chai.assert

describe('Anagram', () => {
  it('Test 1', () => {
    assert.deepEqual(isAnagram('hello', 'llohe'), true)
  })

  it('Test 2', () => {
    assert.deepEqual(isAnagram('hello', 'helo'), false)
  })

  it('Test 3', () => {
    assert.deepEqual(isAnagram('hello', 'hello'), false)
  })

  it('Test 4', () => {
    assert.deepEqual(isAnagram('rata', 'tara'), true)
  })

  it('Test 5', () => {
    assert.deepEqual(isAnagram('anagram', 'nagaram'), true)
  })
})
