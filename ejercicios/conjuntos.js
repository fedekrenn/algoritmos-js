/*
* Crea una función que reciba dos array, un booleano y retorne un array.
* - Si el booleano es verdadero buscará y retornará los elementos comunes
*   de los dos array.
* - Si el booleano es falso buscará y retornará los elementos no comunes
*   de los dos array.
* - No se pueden utilizar operaciones del lenguaje que
*   lo resuelvan directamente.
*/

function conjunts (arr1, arr2, bool) {
  if (bool) {
    return arr1.filter(num => {
      return arr2.includes(num)
    })
  } else {
    const noIncludedIn1 = arr1.filter((num) => !arr2.includes(num))
    const noIncludedIn2 = arr2.filter((num) => !arr1.includes(num))

    return noIncludedIn1.concat(noIncludedIn2)
  }
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('conjunts', () => {
  it('should return common elements when bool is true', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    const bool = true
    const expected = [2, 3]
    assert.deepEqual(conjunts(arr1, arr2, bool), expected)
  })

  it('should return non-common elements when bool is false', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    const bool = false
    const expected = [1, 4]
    assert.deepEqual(conjunts(arr1, arr2, bool), expected)
  })

  it('should return an empty array when both arrays are empty', () => {
    const arr1 = []
    const arr2 = []
    const bool = true
    const expected = []
    assert.deepEqual(conjunts(arr1, arr2, bool), expected)
  })

  it('should return an empty array when bool is true and there are no common elements', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const bool = true
    const expected = []
    assert.deepEqual(conjunts(arr1, arr2, bool), expected)
  })

  it('should return all elements when bool is false and there are no common elements', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const bool = false
    const expected = [1, 2, 3, 4, 5, 6]
    assert.deepEqual(conjunts(arr1, arr2, bool), expected)
  })
})
