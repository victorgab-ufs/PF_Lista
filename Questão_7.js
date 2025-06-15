//Q7. Retornar Menor Valor

//function retornarMenorValorDentre3(numero1, numero2, numero3){
//const comparacao1 = numero1<=numero2
//const comparacao2 = numero2<=numero3
//const comparacao3 = numero1<=numero3
//const comparacao4 = numero2<=numero1
//if (numero1===numero2 && numero2===numero3) return numero1
//else
//  if (comparacao1 && comparacao3) return numero1
//  else
//    if (comparacao2 && comparacao4) return numero2
//    else return numero3
//}

const menorValorEntreTresNumeros = (numero1, numero2, numero3) => {
const umMenorQueDois = numero1 <= numero2
const umMenorQueTres = numero1 <= numero3
const doisMenorQueTres = numero2 <= numero3
const tresMenorQueUm = numero3 <= numero1
if (umMenorQueDois && doisMenorQueTres) return numero1
else
if (doisMenorQueTres && tresMenorQueUm) return numero2
else return numero3
}

