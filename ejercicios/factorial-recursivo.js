/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function recursiveFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}

// Test

const chai = require("chai");
const assert = chai.assert;

describe("recursiveFactorial", () => {
  it("Should return the factorial of a given number", () => {
    assert.equal(recursiveFactorial(0), 1);
    assert.equal(recursiveFactorial(1), 1);
    assert.equal(recursiveFactorial(2), 2);
    assert.equal(recursiveFactorial(3), 6);
    assert.equal(recursiveFactorial(4), 24);
    assert.equal(recursiveFactorial(5), 120);
    assert.equal(recursiveFactorial(6), 720);
    assert.equal(recursiveFactorial(7), 5040);
    assert.equal(recursiveFactorial(8), 40320);
    assert.equal(recursiveFactorial(9), 362880);
    assert.equal(recursiveFactorial(10), 3628800);
  });
});
