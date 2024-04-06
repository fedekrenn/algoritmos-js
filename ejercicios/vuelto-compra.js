/* Tu trabajo es realizar un software para controlar unas cajas de supermercados.
* Queremos que dado un vuelto en pesos, nos diga que billetes o monedas tenemos que
* dar de vuelto, el formato que se espera es un array con los importes.
* Tenemos disponibles los siguientes billetes y monedas: $1, $2, $5, $10, $20, $50,
* $100, $500, $1000
*/

function calculateChange (ammount) {
  const bills = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
  const buffer = []

  let change = ammount

  while (change > 0) {
    const index = bills.findIndex((num) => num > change)
    const maxNum = bills[index - 1]
    buffer.push(maxNum)
    change -= maxNum
  }

  return buffer
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Calculate change', () => {
  it('Should return the change', () => {
    assert.deepEqual(calculateChange(215), [100, 100, 10, 5])
    assert.deepEqual(calculateChange(300), [100, 100, 100])
    assert.deepEqual(calculateChange(10), [10])
    assert.deepEqual(calculateChange(44), [20, 20, 2, 2])
  })
})
