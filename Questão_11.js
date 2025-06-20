//Q11. Número maior que a média entre 3

// Com function:

function QuantidadeNumerosMaioresMediaEntreEles(numero1, numero2, numero3){
const media = (numero1+numero2+numero3)/3
const numero1Maior = numero1>media
const numero2Maior = numero2>media
const numero3Maior = numero3>media
if (numero1Maior && numero2Maior) return 2
else
  if (numero1Maior && numero3Maior) return 2
  else
    if (numero2Maior && numero3Maior) return 2
    else
      if (numero1Maior===numero2Maior && numero2Maior===numero3Maior) return 0
      else return 1
}

// Arrow:

const quantidadeValoresMaioresMedia = (numero1, numero2, numero3) => {
const media = (numero1 + numero2 + numero3) / 3
const numeroUmMaior = numero1 > media
const numeroDoisMaior = numero2 > media
const numeroTresMaior = numero3 > media
if (numero1 === numero2 && numero2 == numero3) return 0
else
  if (numeroUmMaior && numeroDoisMaior) return 2
  else
    if (numeroDoisMaior && numeroTresMaior) return 2
    else
      if (numeroUmMaior && numeroTresMaior) return 2
      else return 1
}

// Anônima:

const quantidadeValoresMaioresMedia = (funcao, numero1, numero2, numero3) => funcao(numero1, numero2, numero3)
  
const resposta = quantidadeValoresMaioresMedia((numero1, numero2, numero3) => {

const media = (numero1 + numero2 + numero3) / 3

if (numero1 === numero2 && numero2 == numero3) return 0
else
  if (numero1 > media && numero2 > media) return 2
  else
    if (numero2 > media && numero3 > media) return 2
    else
      if (numero1 > media && numero3 > media) return 2
      else return 1
}, 2, 3, 4)

// Currying:

const numerosMaioresQueMedia = (numero1) => (numero2) => (numero3) => {

const media = (numero1 + numero2 + numero3)/3

if ((numero1 > media && numero2 > media) || (numero1 > media && numero3 > media) || (numero3 > media && numero2 > media)) return 2
else
  if ((numero1 > media) || (numero2 > media) || (numero3 > media)) return 1
  else return 0

}

const resultado = numerosMaioresQueMedia(2)(2)(3)

