/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

function countTo100 () {
  for (let i = 1; i <= 100; i++) {
    console.log(i)
  }
}

function countTo100Recursively (i = 1) {
  console.log(i)
  if (i < 100) countTo100Recursively(i + 1)
}

function countTo100WithWhile () {
  let i = 1
  while (i <= 100) {
    console.log(i)
    i++
  }
}

function countTo100WithDoWhile () {
  let i = 1
  do {
    console.log(i)
    i++
  } while (i <= 100)
}

function countTo100WithArray () {
  Array.from({ length: 100 }, (_, i) => console.log(i + 1))
}

function countTo100WithArrayAndForEach () {
  Array.from({ length: 100 }, (_, i) => i + 1).forEach((num) => console.log(num))
}

console.log(countTo100())
console.log(countTo100Recursively())
console.log(countTo100WithWhile())
console.log(countTo100WithDoWhile())
console.log(countTo100WithArray())
console.log(countTo100WithArrayAndForEach())
