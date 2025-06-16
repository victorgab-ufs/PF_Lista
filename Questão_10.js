//Q10. Citação Bibliográfica

// Com function:

function nomeComoCitacaoBibliografica(nome, sobrenome){
return `${sobrenome}, ${nome}.`
}

// Com arrow:

const citacaoBibliografica = (nome, sobrenome) => `${sobrenome}, ${nome}.`
const nome = 'Victor'
const sobrenome = 'Santos'
const citacaoPronta = citacaoBibliografica(nome, sobrenome)

// Anônima:

