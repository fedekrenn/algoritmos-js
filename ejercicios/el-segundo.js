/*
* Dado un listado de números, encuentra el SEGUNDO más grande
*/

function findSecondLargest (numbers) {
  return numbers.sort((a, b) => b - a)[1]
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Find second largest', () => {
  it('Should return the second largest num in list of nums', () => {
    assert.equal(findSecondLargest([1, 2, 3, 4, 5, 6]), 5)
    assert.equal(findSecondLargest([2, 1, 2, 4, 5, 50, 131]), 50)
  })
})
