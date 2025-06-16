//Q6. Quantos números são iguais

// Com function:

function quantidadeNumeroslguais(numero1, numero2, numero3){
if (numero1===numero2 && numero2===numero3) return 3
else
  if (numero1!==numero2 && numero2!==numero3 && numero1!==numero3) return 0
  else return 2
}

// Arrow:

const quantidadeNumeroslguais = (numero1, numero2, numero3) => {
if (numero1===numero2 && numero2==numero3) return 3
  else
    if (numero1!==numero2 && numero2!==numero3 && numero1!==numero3) return
    else return 2
}

// Anônima:

const quantidadeNumerosIguais = (funcao, numero1, numero2, numero3) => funcao(numero1, numero2, numero3)

const conclusao = (n1, n2, n3) => {

if (n1===n2 && n2==n3) return 3
  else
    if (n1!==n2 && n2!==n3 && n1!==n3) return 0
    else return 2
}

const resposta = quantidadeNumerosIguais((n1, n2, n3) => conclusao(2, 1, 1))

console.log(resposta)





