/*
* Crea una función que reciba un texto y muestre cada palabra en una línea,
* formando un marco rectangular de asteriscos.
* - ¿Qué te parece el reto? Se vería así:
*   **********
*   * ¿Qué   *
*   * te     *
*   * parece *
*   * el     *
*   * reto?  *
*   **********
*/

const getMaxLength = (arr) => arr.reduce((longestElement, el) => {
  return el.length > longestElement ? el.length : longestElement
}, 0)

function frameWords (text) {
  const splitted = text.split(' ')
  const maxLength = getMaxLength(splitted)

  const horizontalBorder = '*'.repeat(maxLength + 4)

  const framedWords = splitted.map(word => {
    const partial = '* '.concat(word)
    return partial
      .concat(' '.repeat(maxLength + 4 - partial.length - 1))
      .concat('*')
  })

  const final = [horizontalBorder, ...framedWords, horizontalBorder]
  return final.join('\n')
}

console.log(frameWords('Hola! Mi nombre es federico!'))
console.log(frameWords('a b c'))
console.log(frameWords('Bueno, vamos a contar una historia de un héroe de capa blanca'))
