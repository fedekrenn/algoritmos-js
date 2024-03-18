/*
Te gustan los bloques de construcción. Te gustan especialmente los bloques de construcción que son cuadrados. ¡Y lo que te gusta aún más es organizarlos en un cuadrado de bloques de construcción cuadrados!

Sin embargo, a veces no puedes organizarlos en un cuadrado. ¡En cambio, terminas con un rectángulo ordinario! ¡Esas cosas malditas! Si solo tuvieras una forma de saber si estás trabajando en vano... ¡Espera! ¡Eso es! Solo tienes que verificar si el número de bloques de construcción es un cuadrado perfecto.

Tarea
Dado un número entero, determina si es un número cuadrado:

En matemáticas, un número cuadrado o cuadrado perfecto es un entero que es el cuadrado de otro entero; en otras palabras, es el producto de algún entero consigo mismo.

Las pruebas siempre usarán algún número entero, así que no te preocupes por eso en lenguajes de tipo dinámico.

Ejemplo:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

function isSquare (n) {
  return parseInt(Math.sqrt(n)) - Math.sqrt(n) === 0
}

// TESTS

const chai = require('chai')
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("You're a square!", () => {
  it('Sample Tests', () => {
    assert.strictEqual(
      isSquare(-1),
      false,
      '-1: Negative numbers cannot be square numbers'
    )
    assert.strictEqual(isSquare(0), true, '0 is a square number (0 * 0)')
    assert.strictEqual(isSquare(3), false, '3 is not a square number')
    assert.strictEqual(isSquare(4), true, '4 is a square number (2 * 2)')
    assert.strictEqual(isSquare(25), true, '25 is a square number (5 * 5)')
    assert.strictEqual(isSquare(26), false, '26 is not a square number')
  })
})
