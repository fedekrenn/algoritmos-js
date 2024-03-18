/* Kata: Contar letras en una cadena
 *
 * Tu tarea es escribir una función que cuente cuántas veces aparece cada letra en una cadena de texto.
 * La función debe crear un objeto donde las claves son las letras encontradas
 * y los valores son la cantidad de veces que aparece cada letra en la cadena.
 *
 *
 * Ejemplo:
 *
 * countLetters("hello") debería devolver { "h": 1, "e": 1, "l": 2, "o": 1 }
 * countLetters("programming") debería devolver { "p": 1, "r": 2, "o": 1, "g": 2, "a": 1, "m": 2, "i": 1, "n": 1 }
 * countLetters("javascript") debería devolver { "j": 1, "a": 2, "v": 1, "s": 1, "c": 1, "r": 1, "i": 1, "p": 1, "t": 1 }
 *
 */

function countLetters (str) {
  return str.split('').reduce((acc, character) => {
    acc[character] ? acc[character]++ : acc[character] = 1
    return acc
  }, {})
}

// Pruebas

const chai = require('chai')
const assert = chai.assert

describe('Contar letras en una cadena', () => {
  it('Test 1', () => {
    assert.deepEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 })
  })

  it('Test 2', () => {
    assert.deepEqual(countLetters('programming'), { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 })
  })

  it('Test 3', () => {
    assert.deepEqual(countLetters('javascript'), { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 })
  })
})
