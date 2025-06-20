//Q4. Classifique o triângulo em escaleno, equilátero ou isósceles

// Com function:

function tipoTriangulo(lado1, lado2, lado3){
if (lado1===lado2 && lado2===lado3) console.log('equilatero')
else
  if (lado1!==lado2 && lado1!==lado3 && lado2!==lado3) console.log('escaleno')
  else console.log('isósceles')
}

// Arrow:

const tipoTriangulo = (lado1, lado2, lado3) => {
if (lado1===lado2 &&lado2===lado3) return 'Equilátero'
else
if (lado1!==lado2 && lado2!==lado3 && lado1!==lado3) return "Escaleno"
else return "Isósceles"
}

// Anônima:

const tipoTriangulo = (funcao, lado1, lado2, lado3) => funcao(lado1, lado2, lado3)

const resposta = tipoTriangulo((lado1, lado2, lado3) => {

if (lado1===lado2 &&lado2===lado3) return 'Equilátero'
else
  if (lado1!==lado2 && lado2!==lado3 && lado1!==lado3) return "Escaleno"
  else return "Isósceles"

}, 1, 2, 3)

// Currying:

const tipoTriangulo = (lado1) => (lado2) => (lado3) => {

if (lado1 === lado2 && lado2 === lado3 && lado1=== lado3) return 'Equilátero'
else
  if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) return 'Escaleno'
  else return 'Isósceles'

}

const resultado = tipoTriangulo(1)(1)(1)
