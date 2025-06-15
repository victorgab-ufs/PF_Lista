//Q1. Programa para calcular a área de um retângulo dados os comprimentos de duas arestas

// Com function:

function areaRetangulo(aresta1, aresta2){
return aresta1*aresta2
}

// Arrow

const areaRetangulo = (lado1, lado2) => lado1*lado2

// Anônima

const areaRetangulo = (funcao, lado1, lado2) => funcao(lado1, lado2)
const resultado = areaRetangulo((lado1, lado2) => lado1*lado2, 15, 20)
console.log(resultado)
