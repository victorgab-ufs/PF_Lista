//Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.

// Com function: 

function existeTriangulo(lado1, lado2, lado3){
if (lado1+lado2>lado3 && lado1+lado3>lado2 && lado3+lado2>lado1) return 'É triângulo.'
else return 'Não é triângulo.'
}

// Arrow:

const existeTriangulo = (lado1, lado2, lado3) => lado1 && lado2 && lado3
const lado1 = 1
const lado2 = 2
const lado3 = 3
const comparacao1 = lado1+lado2>lado3
const comparacao2 = lado1+lado3>lado2
const comparacao3 = lado2+lado3>lado1
console.log(existeTriangulo(comparacao1, comparacao2, comparacao3))

// Função anônima:

const existeTriangulo = (funcao, lado1, lado2, lado3) => funcao(lado1, lado2, lado3)

const lado1 = 2
const lado2 = 1
const lado3 = 4

const comparacao1 = lado1+lado2>lado3
const comparacao2 = lado1+lado3>lado2
const comparacao3 = lado2+lado3>lado1

const conclusao = existeTriangulo((lado1, lado2, lado3) => (comparacao1 && comparacao2 && comparacao3), lado1, lado2, lado3)

const resposta = (conclusao===true) ? 'É Triângulo' : 'Não é Triângulo'

// Currying:

const existenciaTriangulo = (lado1) => (lado2) => (lado3) => {

if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) return true
else return false

}

const resposta = existenciaTriangulo(2)(1)(2)





