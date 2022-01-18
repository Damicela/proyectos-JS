let posicion = 0
let altura = 1300
let salto = 4
let cantidadDesaltos = 0

while (posicion <= altura) {
  cantidadDesaltos++
  posicion = posicion + salto
  if (posicion <= altura) {
    posicion--
  }
}

console.log( 'el sapo salio en el salto numero ' + cantidadDesaltos)