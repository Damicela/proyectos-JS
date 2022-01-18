let numero = 3
let divisor = 2
let dividendo = 1

while (divisor < numero && dividendo < 3 ){
  let resto = numero % divisor
  if (resto === 0) {
    dividendo++
  }
  divisor++
}

if ( dividendo <= 2) {
  console.log('primo')
} else {
  console.log('no primo')
}