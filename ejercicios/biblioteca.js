/*
En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. 
Por suerte, no hay dos libros con el mismo número de páginas. Necesitamos que la función reciba 
un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del 
libro con menos páginas y el índice del libro con más páginas.
*/

function minAndMaxWord(words) {
  return words.reduce(
    (acc, el, i, arr) => {
      if (el < arr[0]) {
        return [i, acc[1]];
      }
      if (el > arr[1]) {
        return [acc[0], i];
      }
      return acc;
    },
    [0, 0]
  );
}

// Tests

const chai = require("chai");
const assert = chai.assert;

describe("Min and max word", function () {
  const test1 = [999, 255, 121];

  it("Test 1", function () {
    assert.deepEqual(minAndMaxWord(test1), [2, 0]);
  });

  const test2 = [2, 1, 3, 4, 5, 6, 7, 8, 9];

  it("Test 2", function () {
    assert.deepEqual(minAndMaxWord(test2), [1, 8]);
  });

  const test3 = [5, 10, 15, 20];

  it("Test 3", function () {
    assert.deepEqual(minAndMaxWord(test3), [0, 3]);
  });
});
