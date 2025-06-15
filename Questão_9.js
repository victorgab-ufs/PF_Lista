//Q9. OU Exclusivo

//function calcularOuExclusivo(proposicaoA, proposicaoB){
//const AouB = proposicaoA || proposicaoB
//const negacaoAeB = !(proposicaoA && proposicaoB)
//const ouExclusivo = (AouB && negacaoAeB)
//return ouExclusivo
//}

const ouExclusivo = (expressaoP, expressaoQ) => expressaoP && expressaoQ
const afirmacaoA = true
const afirmacaoB = true
const expressaoP = afirmacaoA || afirmacaoB
const expressaoQ = !(afirmacaoA && afirmacaoB)
const resultado = ouExclusivo(expressaoP, expressaoQ)



