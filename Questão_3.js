//Q3. Programa para determinar se três valores passados podem representar um triângulo ou não.

//FUNCTION

//function existeTriangulo(lado1, lado2, lado3){
//if (lado1+lado2>lado3 && lado1+lado3>lado2 && lado3+lado2>lado1) return 'É triângulo.'
//else return 'Não é triângulo.'
//}

//ARROW

const existeTriangulo = (lado1, lado2, lado3) => lado1 && lado2 && lado3
const lado1 = 1
const lado2 = 2
const lado3 = 3
const comparacao1 = lado1+lado2>lado3
const comparacao2 = lado1+lado3>lado2
const comparacao3 = lado2+lado3>lado1
console.log(existeTriangulo(comparacao1, comparacao2, comparacao3))





