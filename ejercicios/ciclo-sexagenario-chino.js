/*
* Crea un función, que dado un año, indique el elemento
* y animal correspondiente en el ciclo sexagenario del zodíaco chino.
* - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
* - El ciclo sexagenario se corresponde con la combinación de los elementos
*   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
*   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
*   (en este orden).
* - Cada elemento se repite dos años seguidos.
* - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
*/

function cicloSexagenarioChino (year) {
  const elementos = ['Madera', 'Fuego', 'Tierra', 'Metal', 'Agua']
  const animales = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Oveja', 'Mono', 'Gallo', 'Perro', 'Cerdo']

  let result
  let indexElemento = 0
  let indexAnimal = 0

  for (let i = 1984; i <= year; i++) {
    if (indexElemento >= 5) indexElemento = 0
    if (indexAnimal >= 12) indexAnimal = 0
    if (i === year) {
      result = `Año ${i}: ${animales[indexAnimal]} de ${elementos[indexElemento]}`
    }
    if (i % 2 === 1) indexElemento++
    indexAnimal++
  }

  return result
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('Chinese sexagenary cycle', () => {
  it('Should return the corresponding element and animal in the Chinese sexagenary cycle', () => {
    assert.equal(cicloSexagenarioChino(1984), 'Año 1984: Rata de Madera')
    assert.equal(cicloSexagenarioChino(1986), 'Año 1986: Tigre de Fuego')
    assert.equal(cicloSexagenarioChino(2024), 'Año 2024: Dragón de Madera')
  })
})
