/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function balancedExpresion (expresion) {
  const stack = []
  const openingSymbols = ['(', '[', '{']
  const closingSymbols = [')', ']', '}']

  for (let i = 0; i < expresion.length; i++) {
    const isOpenChar = openingSymbols.includes(expresion[i])
    const isclosingSymbolsChar = closingSymbols.includes(expresion[i])

    if (isOpenChar) {
      stack.push(expresion[i])
    } else if (isclosingSymbolsChar) {
      const previousElement = stack.pop()
      const isBalanced = openingSymbols.indexOf(previousElement) === closingSymbols.indexOf(expresion[i])

      if (!isBalanced) {
        return false
      }
    }
  }

  return stack.length === 0
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Balanced expresion', () => {
  it('Should return true if the expresion is balanced', () => {
    assert.isTrue(balancedExpresion('()'))
    assert.isTrue(balancedExpresion('([])'))
    assert.isTrue(balancedExpresion('({})'))
    assert.isTrue(balancedExpresion('([]{})'))
    assert.isTrue(balancedExpresion('([]{})'))
    assert.isTrue(balancedExpresion('([]{})'))
  })

  it('Should return false if the expresion is not balanced', () => {
    assert.isFalse(balancedExpresion(')('))
    assert.isFalse(balancedExpresion('([]'))
    assert.isFalse(balancedExpresion('({)}'))
    assert.isFalse(balancedExpresion('([]{)'))
    assert.isFalse(balancedExpresion('([]{)'))
    assert.isFalse(balancedExpresion('([]{)'))
  })
})
