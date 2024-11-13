/*
* Tus colegas han estado mirando por encima de tu hombro. Cuando deberías haber
* estado haciendo tu aburrido trabajo real, has estado usando las computadoras de
* trabajo para pasar horas interminables en CodeWars.
* En una reunión de equipo, una persona declara al grupo que no estás trabajando.
* Estás en problemas. Rápidamente tienes que evaluar el ambiente en la habitación
* para decidir si debes recoger tus cosas y marcharte.
* Dado un objeto (meet) que contiene nombres de miembros del equipo como claves y
* su calificación de felicidad de 1 a 10 como valor, debes evaluar la calificación
* general de felicidad del grupo. Si es <= 5, devuelve '¡Sal ahora mismo!'. De lo
* contrario, devuelve '¡Buen trabajo, campeón!'.
* La calificación de felicidad será la puntuación total dividida por el número de
* personas en la habitación. Ten en cuenta que tu jefe está en la habitación (boss),
* su puntuación vale el doble de su valor nominal (pero sigue siendo solo una persona).
*/

function outed (meet, boss) {
  const arrOfMates = Object.entries(meet)

  const sum = arrOfMates.reduce((acc, mate) => {
    return mate[0] === boss ? (acc += mate[1] * 2) : (acc += mate[1])
  }, 0)

  return sum / arrOfMates.length >= 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}

// Tests

const chai = require('chai')
const assert = chai.assert

describe('The Office', () => {
  it('Should return the message to the team', () => {
    assert.strictEqual(
      outed(
        {
          tim: 0,
          jim: 2,
          randy: 0,
          sandy: 7,
          andy: 0,
          katie: 5,
          laura: 1,
          saajid: 2,
          alex: 3,
          john: 2,
          mr: 0
        },
        'laura'
      ),
      'Get Out Now!'
    )
    assert.strictEqual(
      outed(
        {
          tim: 1,
          jim: 3,
          randy: 9,
          sandy: 6,
          andy: 7,
          katie: 6,
          laura: 9,
          saajid: 9,
          alex: 9,
          john: 9,
          mr: 8
        },
        'katie'
      ),
      'Nice Work Champ!'
    )
    assert.strictEqual(
      outed(
        {
          tim: 2,
          jim: 4,
          randy: 0,
          sandy: 5,
          andy: 8,
          katie: 6,
          laura: 2,
          saajid: 2,
          alex: 3,
          john: 2,
          mr: 8
        },
        'john'
      ),
      'Get Out Now!'
    )
  })
})
