function balancedExpresion (expresion) {
  const stack = []
  const open = ['(', '[', '{']
  const close = [')', ']', '}']

  for (let i = 0; i < expresion.length; i++) {
    const isOpenChar = open.includes(expresion[i])
    const isCloseChar = close.includes(expresion[i])

    if (isOpenChar) {
      stack.push(expresion[i])
    } else if (isCloseChar) {
      const last = stack.pop()
      const isBalanced = open.indexOf(last) === close.indexOf(expresion[i])

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
