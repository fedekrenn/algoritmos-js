/*
Escribe una función en JavaScript que tome una cadena como parámetro y devuelva un array con las
subcadenas palíndromas que se pueden formar. Una subcadena es una secuencia de caracteres contiguos en la
cadena original. Un palíndromo es una secuencia de caracteres que se lee igual de izquierda a derecha
que de derecha a izquierda.

*/

function findPalindromicSubstrings (string) {
  const buffer = []
  buffer.push(string.trim().toLowerCase().split(''))

  const partial = [...string.trim().toLowerCase()]

  for (let i = 0; i <= partial.length; i++) {
    if (partial.toString() == partial.toReversed() && partial.length >= 3) {
      buffer.push(partial.join(''))
    }

    partial.pop()
    partial.shift()
  }

  return buffer.flat()
}

// Tests
const chai = require('chai')
const assert = chai.assert

/* IMPORTANTE
Los test no pueden correrse porque mocha no tiene soporte con el nuevo método de strings de JS
String.prototype.toReversed, correrlo en el navegador
*/

describe('Find palindromic substrings', () => {
  it('Test 1', () => {
    assert.deepEqual(findPalindromicSubstrings('ababa'), ['a', 'b', 'a', 'b', 'a', 'ababa', 'bab'])
  })

  it('Test 2', () => {
    assert.deepEqual(findPalindromicSubstrings('racecar'), ['r', 'a', 'c', 'e', 'c', 'a', 'r', 'aceca', 'cec'])
  })

  it('Test 3', () => {
    assert.deepEqual(findPalindromicSubstrings('Aibofobia'), ['a', 'i', 'b', 'o', 'f', 'o', 'b', 'i', 'a', 'aibofobia', 'ibofobi', 'bofob', 'ofo'])
  })
})
