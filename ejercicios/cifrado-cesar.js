/*
 * Crea una función que decodifique un mensaje cifrado con el cifrado César.
 * - La función recibe un string y un número entero (el desplazamiento).
 * - Solo se deben desplazar letras (mayúsculas y minúsculas), el resto de los caracteres se mantiene igual.
 * - El desplazamiento puede ser positivo o negativo.
 * - El alfabeto es circular: si se pasa de la 'z', vuelve a la 'a'.
 * - El mensaje decodificado debe ser devuelto como resultado.
 */

function decodeCaesarCipher (message, shift) {
  const aCode = 'a'.charCodeAt()
  const zCode = 'z'.charCodeAt()
  const ACode = 'A'.charCodeAt()
  const ZCode = 'Z'.charCodeAt()

  return message.split('').map(char => {
    const code = char.charCodeAt()

    const validLower = code >= aCode && code <= zCode
    const validUpper = code >= ACode && code <= ZCode

    const validCharacterCode = validLower ? aCode : ACode

    if (validLower || validUpper) {
      let newCode = ((code - validCharacterCode - shift) % 26)
      if (newCode < 0) newCode += 26
      return String.fromCharCode(validCharacterCode + newCode)
    }

    return char
  }).join('')
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Cifrado César', () => {
  it('Should decode a simple message with positive shift', () => {
    assert.strictEqual(decodeCaesarCipher('Khoor Zruog!', 3), 'Hello World!')
    assert.strictEqual(decodeCaesarCipher('D', 3), 'A')
    assert.strictEqual(decodeCaesarCipher('d', 3), 'a')
  })

  it('Should decode a message with negative shift', () => {
    assert.strictEqual(decodeCaesarCipher('Ebiil Tloia!', -3), 'Hello World!')
    assert.strictEqual(decodeCaesarCipher('A', -3), 'D')
    assert.strictEqual(decodeCaesarCipher('a', -3), 'd')
  })

  it('Should keep non-letter characters unchanged', () => {
    assert.strictEqual(decodeCaesarCipher('1234!@#$', 5), '1234!@#$')
    assert.strictEqual(decodeCaesarCipher('¡Hola, mundo!', 1), '¡Gnkz, ltmcn!')
  })

  it('Should work with full alphabet wrap-around', () => {
    assert.strictEqual(decodeCaesarCipher('A', 1), 'Z')
    assert.strictEqual(decodeCaesarCipher('a', 1), 'z')
    assert.strictEqual(decodeCaesarCipher('Z', 1), 'Y')
    assert.strictEqual(decodeCaesarCipher('z', 1), 'y')
  })
})
