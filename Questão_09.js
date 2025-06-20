//Q9. OU Exclusivo

// Com function:

function calcularOuExclusivo(proposicaoA, proposicaoB){
const AouB = proposicaoA || proposicaoB
const negacaoAeB = !(proposicaoA && proposicaoB)
const ouExclusivo = (AouB && negacaoAeB)
return ouExclusivo
}

// Arrow: 

const ouExclusivo = (expressaoP, expressaoQ) => expressaoP && expressaoQ
const afirmacaoA = true
const afirmacaoB = true
const expressaoP = afirmacaoA || afirmacaoB
const expressaoQ = !(afirmacaoA && afirmacaoB)
const resultado = ouExclusivo(expressaoP, expressaoQ)

// Anônima:

const ouExclusivo = (funcao, expressaoP, expressaoQ) => funcao(expressaoP, expressaoQ)
const afirmacaoA = true
const afirmacaoB = true
const expressaoP = afirmacaoA || afirmacaoB
const expressaoQ = !(afirmacaoA && afirmacaoB)
const resultado = ouExclusivo((afirmacaoA, afirmacaoB) => expressaoP && expressaoQ)

// Currying: 

const ouExclusivo = (AouB) => (negacaoAeB) => (AouB && negacaoAeB)
const AouB = (expressaoA) => (expressaoB) => (expressaoA || expressaoB)
const negacaoAeB = (expressaoA) => (expressaoB) => !(expressaoA && expressaoB)
const conclusaoA = false
const conclusaoB = true
const resultado = ouExclusivo(AouB(conclusaoA)(conclusaoB))(negacaoAeB(conclusaoA)(conclusaoB))

