//Q11. Número maior que a média entre 3

//function QuantidadeNumerosMaioresMediaEntreEles(numero1, numero2, numero3){
//const media = (numero1+numero2+numero3)/3
//const numero1Maior = numero1>media
//const numero2Maior = numero2>media
//const numero3Maior = numero3>media
//if (numero1Maior && numero2Maior) return 2
//else
//  if (numero1Maior && numero3Maior) return 2
//  else
//    if (numero2Maior && numero3Maior) return 2
//    else
//      if (numero1Maior===numero2Maior && numero2Maior===numero3Maior) return 0
//      else return 1
//}

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

