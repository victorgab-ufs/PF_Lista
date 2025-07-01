//Q2. Programa para calcular a área de uma circunferência dado o valor do raio

// Com function:

function areaCircunferencia(raio, pi=3.14){
return pi*raio*raio
}

// Arrow:

const areaCirculo = (raio, pi=3.14) => pi*raio**2

// Função Anônima: 

const areaCirculo = (funcao, raio, pi=3.14) => funcao(raio, pi)
const resultado = areaCirculo((raio, pi) => pi*raio*raio, 10)
console.log(resultado)

// Currying: 

const formulaAreaCirculo = (pi) => (raio) => pi*raio*raio
const areaCirculo = formulaAreaCirculo(3.14)
const resultado = areaCirculo(10)
