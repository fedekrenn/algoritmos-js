/*
 * Crea una función que decodifique mensajes encriptados según las siguientes reglas:
 * - El mensaje es un string que puede contener letras, números y símbolos especiales.
 * - Algunos números deben ser reemplazados por letras según el siguiente mapeo:
 *     0 → "o", 1 → "i", 3 → "e", 4 → "a", 5 → "s", 7 → "t"
 * - Si en el mensaje aparece el símbolo ">", se debe intercambiar la letra anterior y la siguiente,
 *   aplicando el mapeo si corresponde.
 * - Si aparece el símbolo "*", se debe saltar el siguiente carácter.
 * - Solo se deben conservar letras, números y los signos "¿", "?", "¡", "!" y espacios.
 * - El mensaje decodificado debe ser devuelto como resultado.
 */

function decodeMessage (message) {
  const mapping = {
    0: 'o',
    1: 'i',
    3: 'e',
    4: 'a',
    5: 's',
    7: 't'
  }

  const regex = /^[\p{L}0-9¿?!¡ ]+$/u

  let newMsg = ''

  for (let i = 0; i < message.length; i++) {
    const char = message[i]

    if (char === '>') {
      if (i > 0 && i < message.length - 1) {
        const prevChar = message[i - 1]
        const nextChar = message[i + 1]

        newMsg = newMsg.slice(0, -1)

        const decodedNextChar = mapping[nextChar] || nextChar
        newMsg += decodedNextChar

        i++

        const decodedPrevChar = mapping[prevChar] || prevChar
        newMsg += decodedPrevChar
      }
      continue
    }

    if (char === '*') {
      i++
      continue
    }
    if (!regex.test(message[i])) {
      continue
    }

    const decodedChar = mapping[char] || char
    newMsg += decodedChar
  }

  return newMsg
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Code Mars, first exercise', () => {
  const msg =
    '†‡¡4>myd4y m4yd4y*z! ¿H$$··0‡‡l4#? ¿hy>4 &%4··lg*6u13n *l4h1*q? ¡*¡*¡N3c3%5170 4yud4*x!*#║¤'
  const msg2 = 'ab>cd'
  const msg3 = '¡H0l4!'

  it('Should return a correct decoded msg', () => {
    assert.strictEqual(
      decodeMessage(msg),
      '¡mayday mayday! ¿Hola? ¿hay alguien ahi? ¡Necesito ayuda!',
      'El mensaje no es el correcto'
    )
    assert.strictEqual(
      decodeMessage(msg2),
      'acbd',
      'El mensaje no es el correcto'
    )
    assert.strictEqual(
      decodeMessage(msg3),
      '¡Hola!',
      'El mensaje no es el correcto'
    )
  })
})
