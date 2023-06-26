/* 
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra 
"JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de 
la fila y el índice de la columna.
*/

function findJavaScript(matrix) {
  const buffer = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "JavaScript") {
        buffer.push(i, j);
      }
    }
  }

  if (buffer.length === 0) {
    buffer.push(-1, -1);
  }

  return buffer;
}

// Una manera más óptima con reduce

function findJavaScriptReduce(matrix) {
  return matrix.reduce(
    (acc, mtx, i) => {
      const ix = mtx.indexOf("JavaScript");

      if (ix !== -1) {
        return [i, ix];
      } else {
        return acc;
      }
    },
    [-1, -1]
  );
}

// TESTS

const chai = require("chai");
const assert = chai.assert;

describe("Find JavaScript", function () {
  it("Test 1", function () {
    const test1 = [
      ["HTML", "CSS", "JavaScript"],
      ["Java", "C++", "Python"],
      ["Ruby", "Go", "Swift"],
    ];

    assert.deepEqual(findJavaScript(test1), [0, 2]);
    assert.deepEqual(findJavaScriptReduce(test1), [0, 2]);
  });

  it("Test 2", function () {
    const test2 = [
      ["HTML", "CSS", "JS"],
      ["Java", "C++", "Python"],
      ["Ruby", "JavaScript", "Swift"],
    ];

    assert.deepEqual(findJavaScript(test2), [2, 1]);
    assert.deepEqual(findJavaScriptReduce(test2), [2, 1]);
  });

  it("Test 3", function () {
    const test3 = [
      ["HTML", "CSS", "JS", "PHP", "Kotlin"],
      ["Java", "C++", "Python", "C#", "Swift"],
      ["Ruby", "Rust", "Lisp", "Go", "JavaScript"],
    ];

    assert.deepEqual(findJavaScript(test3), [2, 4]);
    assert.deepEqual(findJavaScriptReduce(test3), [2, 4]);
  });

  it("Test 4", function () {
    const test4 = [
      ["HTML", "CSS", "JS", "PHP", "Kotlin"],
      ["Java", "C++", "Python", "C#", "Swift"],
      ["Ruby", "Rust", "Lisp", "Go", "Miau"],
    ];

    assert.deepEqual(findJavaScript(test4), [-1, -1]);
    assert.deepEqual(findJavaScriptReduce(test4), [-1, -1]);
  });
});
