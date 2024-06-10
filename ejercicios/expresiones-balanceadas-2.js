/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function balancedExpresion2 (str1, str2) {
  const out1 = str1.split('').filter(char => !str2.includes(char)).join()
  const out2 = str2.split('').filter(char => !str1.includes(char)).join()
  return { out1, out2 }
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Balanced expresion 2', () => {
  it('Should return the characters that are not present in the other string', () => {
    assert.deepEqual(balancedExpresion2('abc', 'def'), { out1: 'a,b,c', out2: 'd,e,f' })
    assert.deepEqual(balancedExpresion2('abc', 'abc'), { out1: '', out2: '' })
    assert.deepEqual(balancedExpresion2('abc', 'defg'), { out1: 'a,b,c', out2: 'd,e,f,g' })
    assert.deepEqual(balancedExpresion2('abc', 'defabc'), { out1: '', out2: 'd,e,f' })
    assert.deepEqual(balancedExpresion2('arbol', 'bola'), { out1: 'r', out2: '' })
  })
})
