/* Kata: Calcular promedios de estudiantes
 *
 * Tu tarea es escribir una función que calcule el promedio de calificaciones de un grupo de estudiantes.
 * Cada estudiante se representa como un objeto con el nombre del estudiante y un array de calificaciones.
 * La función debe devolver un objeto donde las claves son los nombres de los estudiantes y los valores son los promedios
 * de calificaciones de cada estudiante.
 *
 * Escribe una función llamada 'calculateAverageGrades' que tome un array de objetos de estudiantes como argumento y devuelva
 * un objeto con los promedios de calificaciones de cada estudiante.
 *
 * Ejemplo:
 *
 * calculateAverageGrades([
 *   { name: 'Alice', grades: [90, 95, 88] },
 *   { name: 'Bob', grades: [80, 70, 92] },
 *   { name: 'Charlie', grades: [95, 88, 92] }
 * ]) debería devolver { 'Alice': 91, 'Bob': 80.67, 'Charlie': 91.67 }
 *
 */

function calculateAverageGrades (students) {
  const averageGrades = {}

  students.forEach((student) => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0)
    const average = sum / student.grades.length
    averageGrades[student.name] = average.toFixed(2)
  })

  return averageGrades
}

// Pruebas

const chai = require('chai')
const assert = chai.assert

describe('Calcular promedios de estudiantes', () => {
  it('Test 1', () => {
    assert.deepEqual(
      calculateAverageGrades([
        { name: 'Alice', grades: [90, 95, 88] },
        { name: 'Bob', grades: [80, 70, 92] },
        { name: 'Charlie', grades: [95, 88, 92] }
      ]),
      { Alice: '91.00', Bob: '80.67', Charlie: '91.67' }
    )
  })

  it('Test 2', () => {
    assert.deepEqual(
      calculateAverageGrades([
        { name: 'Eve', grades: [100, 95, 98] },
        { name: 'David', grades: [85, 90, 88] },
        { name: 'Frank', grades: [75, 80, 70] }
      ]),
      { Eve: '97.67', David: '87.67', Frank: '75.00' }
    )
  })
})
