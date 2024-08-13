/*
* Crea una función que ordene y retorne una matriz de números.
* - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
*   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
*   o de mayor a menor.
* - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
*   automáticamente.
*/

function sortList (arr, order) {
  let enableSorting = true

  while (enableSorting) {
    let totalItems = 1
    for (let i = 0; i < arr.length - 1; i++) {
      const actualElement = arr[i]
      const nextElement = arr[i + 1]
      const descending = order === 'desc' ? actualElement < nextElement : actualElement > nextElement

      if (descending) {
        arr.splice(i, 1)
        arr.splice(i + 1, 0, actualElement)
      } else {
        totalItems++
      }
    }

    if (totalItems === arr.length) {
      enableSorting = false
    }
  }

  return arr
}

// Tests

const chai = require('chai')
const { assert } = chai

describe('Sorting lists', () => {
  it('Should return a sorted array', () => {
    assert.deepEqual(sortList([2, 1]), [1, 2])
    assert.deepEqual(sortList([2, 1, 3]), [1, 2, 3])
    assert.deepEqual(sortList([2, 1, 3, 4]), [1, 2, 3, 4])
    assert.deepEqual(sortList([2, 1, 3, 4, 5]), [1, 2, 3, 4, 5])
  })
})
