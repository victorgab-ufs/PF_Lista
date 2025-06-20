//Q7. Retornar Menor Valor

// Com function:

function retornarMenorValorDentre3(numero1, numero2, numero3){
const comparacao1 = numero1<=numero2
const comparacao2 = numero2<=numero3
const comparacao3 = numero1<=numero3
const comparacao4 = numero2<=numero1
if (numero1===numero2 && numero2===numero3) return numero1
else
  if (comparacao1 && comparacao3) return numero1
  else
    if (comparacao2 && comparacao4) return numero2
    else return numero3
}

// Arrow: 

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

// Anônima:

const menorValorEntreTresNumeros = (funcao, numero1, numero2, numero3) => funcao(numero1, numero2, numero3) 

const resultado = menorValorEntreTresNumeros((numero1, numero2, numero3) => {

if (numero1 <= numero2 && numero1 <= numero3) return numero1
else
  if (numero2 <= numero3 && numero2 <= numero1) return numero2
  else return numero3

}, 90, 195, 167)

// Currying:

const menorValorEntreTres = (valor1) => (valor2) => (valor3) => {

if (valor1 === valor2 && valor2 === valor3) return valor1
else
  if (valor1 < valor2 && valor1 < valor3) return valor1
  else
    if (valor2 < valor3 && valor2 < valor1) return valor2
    else return valor3

}

const resultado = menorValorEntreTres(10)(20)(4)


