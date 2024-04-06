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

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Anagram', () => {
  it('should return true if two words are anagrams', () => {
    assert.deepEqual(isAnagram('hello', 'llohe'), true)
    assert.deepEqual(isAnagram('hello', 'helo'), false)
    assert.deepEqual(isAnagram('hello', 'hello'), false)
    assert.deepEqual(isAnagram('rata', 'tara'), true)
    assert.deepEqual(isAnagram('anagram', 'nagaram'), true)
  })
})
