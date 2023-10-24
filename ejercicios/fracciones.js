/* Kata: Calculadora de Fracciones

Tu tarea es escribir una calculadora de fracciones que pueda sumar, restar, multiplicar y dividir fracciones.
Debes implementar las siguientes funciones:

1. `sumarFracciones`: Esta función debe tomar dos fracciones representadas como objetos y devolver su suma.

2. `restarFracciones`: Esta función debe tomar dos fracciones representadas como objetos y devolver su resta.

3. `multiplicarFracciones`: Esta función debe tomar dos fracciones representadas como objetos y devolver su multiplicación.

4. `dividirFracciones`: Esta función debe tomar dos fracciones representadas como objetos y devolver su división.

Las fracciones se representan como objetos con las propiedades `numerador` y `denominador`. Por ejemplo:
{ numerador: 1, denominador: 2 } representa la fracción 1/2.

Ejemplo de uso:

sumarFracciones({ numerador: 1, denominador: 2 }, { numerador: 1, denominador: 3 }) debería devolver
{ numerador: 5, denominador: 6 } (que es la suma de 1/2 y 1/3).

Recuerda simplificar las fracciones resultantes a su forma más reducida.

 */

function sumarFracciones (fraccion1, fraccion2) {
  const mcm = (fraccion1.denominador * fraccion2.denominador) / gcd(fraccion1.denominador, fraccion2.denominador)
  const numerador = (mcm / fraccion1.denominador) * fraccion1.numerador + (mcm / fraccion2.denominador) * fraccion2.numerador
  const divisorComun = gcd(numerador, mcm)
  return {
    numerador: numerador / divisorComun,
    denominador: mcm / divisorComun
  }
}

function restarFracciones (fraccion1, fraccion2) {
  const mcm = (fraccion1.denominador * fraccion2.denominador) / gcd(fraccion1.denominador, fraccion2.denominador)
  const numerador = (mcm / fraccion1.denominador) * fraccion1.numerador - (mcm / fraccion2.denominador) * fraccion2.numerador
  const divisorComun = gcd(numerador, mcm)
  return {
    numerador: numerador / divisorComun,
    denominador: mcm / divisorComun
  }
}

function multiplicarFracciones (fraccion1, fraccion2) {
  const numerador = fraccion1.numerador * fraccion2.numerador
  const denominador = fraccion1.denominador * fraccion2.denominador
  const divisorComun = gcd(numerador, denominador)
  return {
    numerador: numerador / divisorComun,
    denominador: denominador / divisorComun
  }
}

function dividirFracciones (fraccion1, fraccion2) {
  const numerador = fraccion1.numerador * fraccion2.denominador
  const denominador = fraccion1.denominador * fraccion2.numerador
  const divisorComun = gcd(numerador, denominador)
  return {
    numerador: numerador / divisorComun,
    denominador: denominador / divisorComun
  }
}

function gcd (a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Calculadora de Fracciones', function () {
  it('Test 1: Sumar Fracciones', function () {
    const resultado = sumarFracciones({ numerador: 1, denominador: 2 }, { numerador: 1, denominador: 3 })
    assert.deepEqual(resultado, { numerador: 5, denominador: 6 })
  })

  it('Test 2: Restar Fracciones', function () {
    const resultado = restarFracciones({ numerador: 3, denominador: 4 }, { numerador: 1, denominador: 4 })
    assert.deepEqual(resultado, { numerador: 1, denominador: 2 })
  })

  it('Test 3: Multiplicar Fracciones', function () {
    const resultado = multiplicarFracciones({ numerador: 2, denominador: 3 }, { numerador: 3, denominador: 4 })
    assert.deepEqual(resultado, { numerador: 1, denominador: 2 })
  })

  it('Test 4: Dividir Fracciones', function () {
    const resultado = dividirFracciones({ numerador: 3, denominador: 5 }, { numerador: 2, denominador: 7 })
    assert.deepEqual(resultado, { numerador: 21, denominador: 10 })
  })
})
