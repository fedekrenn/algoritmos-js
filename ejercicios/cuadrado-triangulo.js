/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

function drawSquare (size) {
  let flag = size

  do {
    console.log(' *'.repeat(size))
    flag--
  } while (flag > 0)
}

function drawTriangle (size) {
  let flag = 1

  do {
    console.log(' *'.repeat(flag))
    flag++
  } while (flag <= size)

  flag = size - 1

  do {
    console.log(' *'.repeat(flag))
    flag--
  } while (flag > 0)
}

function drawFigure (size, figure) {
  if (figure === 'square') {
    drawSquare(size)
  }

  if (figure === 'triangle') {
    drawTriangle(size)
  }
}

// Tests

console.log(drawFigure(5, 'square'))
console.log(drawFigure(15, 'triangle'))
console.log(drawFigure(10, 'square'))
console.log(drawFigure(10, 'triangle'))
