//Q12. Raízes da equação do segundo grau

//function raizesEquacaoSegundoGrau(a,b,c){
//const delta = (b**2)-(4*a*c)
//const raizMaior = ((-1)*b+(delta)**0.5)/(2*a)
//const raizMenor = ((-1)*b-(delta)**0.5)/(2*a)
//return `raízes: ${raizMaior} e ${raizMenor}`
//}

const raizesEquacaoSegundoGrau = (coeficienteA, coeficienteB, coeficienteC) => {
const delta = (coeficienteB**2)-(4*coeficienteA*coeficienteC)
const maiorRaiz = (-coeficienteB+(delta**0.5))/(2*coeficienteA)
const menorRaiz = (-coeficienteB-(delta**0.5))/(2*coeficienteA)
const raizes = `Menor: ${menorRaiz} Maior: ${maiorRaiz}`
if (delta < 0) return 'Não há raízes reais'
else return raizes
}

