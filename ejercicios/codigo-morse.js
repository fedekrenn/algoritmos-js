/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
*/

function convertToMorse (text) {
  const dictionary = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----'
  }

  const partial = text.toLowerCase().split(' ')
  const final = []

  for (let i = 0; i < partial.length; i++) {
    const memi = []
    for (let j = 0; j < partial[i].length; j++) {
      const fefo = dictionary[partial[i][j]]
      memi.push(fefo)
    }
    final.push(memi.join(' '))
  }

  return final.join('  ')
}

// Test

const chai = require('chai')
const assert = chai.assert

describe('Código Morse', () => {
  it('Should return a correct morse code', () => {
    assert.strictEqual(convertToMorse('Hola'), '.... --- .-.. .-', 'Primero')
    assert.strictEqual(convertToMorse('Esta es una prueba'), '. ... - .-  . ...  ..- -. .-  .--. .-. ..- . -... .-', 'Segundo')
    assert.strictEqual(convertToMorse('123'), '.---- ..--- ...--', 'Tercero')
    assert.strictEqual(convertToMorse('Hola mucho gusto'), '.... --- .-.. .-  -- ..- -.-. .... ---  --. ..- ... - ---', 'Cuarto')
    assert.strictEqual(convertToMorse('Programa para traducir a codigo morse'), '.--. .-. --- --. .-. .- -- .-  .--. .- .-. .-  - .-. .- -.. ..- -.-. .. .-.  .-  -.-. --- -.. .. --. ---  -- --- .-. ... .', 'Quinto')
  })
})
