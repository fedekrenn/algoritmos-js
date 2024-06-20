/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function stopTimeSum (a, b, seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a + b
      resolve(result)
    }, seconds * 1000)
  })
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Stop time sum', function () {
  this.timeout(5000)

  it('Should return the sum of 2 numbers after a few seconds', async function () {
    const result = await stopTimeSum(1, 2, 2)
    assert.strictEqual(result, 3)
  })

  it('Should return the sum of 2 numbers after a few seconds', async function () {
    const result = await stopTimeSum(3, 3, 3)
    assert.strictEqual(result, 6)
  })
})
