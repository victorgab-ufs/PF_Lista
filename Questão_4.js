//Q4. Classifique o triângulo em escaleno, equilátero ou isósceles

//function tipoTriangulo(lado1, lado2, lado3){
//if (lado1===lado2 && lado2===lado3) console.log('equilatero')
//else
//if (lado1!==lado2 && lado1!==lado3 && lado2!==lado3) console.log('escaleno')
//else console.log('isósceles')
//}

const tipoTriangulo = (lado1, lado2, lado3) => {
if (lado1===lado2 &&lado2===lado3) return 'Equilátero'
else
if (lado1!==lado2 && lado2!==lado3 && lado1!==lado3) return "Escaleno"
else return "Isósceles"
}

