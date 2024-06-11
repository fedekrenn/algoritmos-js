/*
* Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su
* resultado e imprímelo.
* - El .txt se corresponde con las entradas de una calculadora.
* - Cada línea tendrá un número o una operación representada por un
*   símbolo (alternando ambos).
* - Soporta números enteros y decimales.
* - Soporta las operaciones suma "+", resta "-", multiplicación "*"
*   y división "/".
* - El resultado se muestra al finalizar la lectura de la última
*   línea (si el .txt es correcto).
* - Si el formato del .txt no es correcto, se indicará que no se han
*   podido resolver las operaciones.
*/

const fs = require('node:fs')
const path = require('node:path')

function operation (acc, simbol, num) {
  if (simbol === '+') return Number(acc) + Number(num)
  if (simbol === '-') return Number(acc) - Number(num)
  if (simbol === '*') return Number(acc) * Number(num)
  if (simbol === '/') return Number(acc) / Number(num)
}

function calculator (fileName) {
  if (path.extname(fileName) !== '.txt') {
    throw new Error('El archivo debe ser un .txt')
  }

  const dataFromFile = fs.readFileSync(fileName, 'utf8')
  const arr = dataFromFile.split('\r\n')

  const result = arr.slice(2).reduce((acc, el) => {
    if (isNaN(el)) {
      acc.operator = el
    } else {
      acc.currentResult = operation(acc.currentResult, acc.operator, el)
    }
    return acc
  }, { currentResult: arr[0], operator: arr[1] })

  return result.currentResult
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Calculate from file', () => {
  it('Should return the result of the operations in the file', () => {
    assert.equal(calculator('./files/challenge21.txt'), 200)
  })

  it('Should throw an error if the file is not a .txt', () => {
    assert.throws(() => calculator('./anagrama.js'), 'El archivo debe ser un .txt')
  })
})
