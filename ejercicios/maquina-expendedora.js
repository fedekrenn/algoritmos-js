/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje y retornar todas las monedas. ✅
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200. ✅
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas. ✅
 */

function vendingMachine (coins, productId) {
  const validCoins = [1, 5, 10, 50, 100, 200]

  const products = [
    { id: 1, name: 'lapicera', price: 6 },
    { id: 2, name: 'Play Station', price: 500 },
    { id: 3, name: 'Sandwich', price: 10 },
    { id: 4, name: 'Moto', price: 1000 },
    { id: 5, name: 'Bike', price: 300 }
  ]

  const findedProduct = products.find(product => product.id === productId)
  const totalCoins = coins.reduce((acc, el) => acc + el, 0)

  if (!findedProduct) return { error: 'El producto no existe', coins }
  if (!coins.every(coin => validCoins.includes(coin))) return { error: 'Monedas no válidas', coins }
  if (totalCoins < findedProduct.price) return { error: 'El dinero es insuficiente', coins }
  if (totalCoins === findedProduct.price) return { coins: [] }

  let change = totalCoins - findedProduct.price
  const buffer = []

  while (change > 0) {
    const coinToReturn = validCoins.findLast(coin => coin <= change)
    buffer.push(coinToReturn)
    change -= coinToReturn
  }

  return { coins: buffer }
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Vending Machine', () => {
  it('Should return the product and the change', () => {
    assert.deepEqual(vendingMachine([5, 5], 1), { coins: [1, 1, 1, 1] })
    assert.deepEqual(vendingMachine([200, 200, 200], 2), { coins: [100] })
    assert.deepEqual(vendingMachine([50], 3), { coins: [10, 10, 10, 10] })
    assert.deepEqual(vendingMachine([200, 200, 200, 200, 200, 100], 4), { coins: [100] })
    assert.deepEqual(vendingMachine([200, 200], 5), { coins: [100] })
  })

  it('Should return an error if the product does not exist', () => {
    assert.deepEqual(vendingMachine([100, 50], 6), { error: 'El producto no existe', coins: [100, 50] })
  })

  it('Should return an error if the coins are not valid', () => {
    assert.deepEqual(vendingMachine([5, 20, 17, 2], 1), { error: 'Monedas no válidas', coins: [5, 20, 17, 2] })
  })

  it('Should return an error if the coins are not enough', () => {
    assert.deepEqual(vendingMachine([5, 10, 50, 100], 4), { error: 'El dinero es insuficiente', coins: [5, 10, 50, 100] })
  })

  it('Should return an empty array if there is no change', () => {
    assert.deepEqual(vendingMachine([5, 1], 1), { coins: [] })
  })
})
