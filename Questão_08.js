//Q8. Quadrado

// Com function:

function elevarQuartaPotencia(numero){
const numeroQuadrado = numero*numero
return numeroQuadrado*numeroQuadrado
}

// Arrow:

const quartaPotencia = (numero) => numero**2
const numero = 3
const quadrado = numero*numero
const resultado = quartaPotencia(quadrado)

// Anônima:

const quartaPotencia = (funcao, numero) => funcao(numero)
const resultado = quartaPotencia((base) => base**4, 2)

// Currying: 

const potencia = (expoente) => (base) => base**expoente
const quadrado = potencia(2)
const quartaPotencia = quadrado(3)**2



