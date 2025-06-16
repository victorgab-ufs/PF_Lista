//Q13. Velocidade (tempo/posição)

// Com function:

function velocidade(instanteT, posicaoX){
const posicao = posicaoX - 500
const tempo = instanteT - 0
const velocidadeMedia = posicao/tempo
return `${velocidadeMedia} m/s`
}

// Arrow:

const velocidadeXnoPontoT = (posicao, tempo) => posicao/tempo
const posicaoFinal = 1000
const posicao = posicaoFinal - 500
const tempo = 5
const velocidade = velocidadeXnoPontoT(posicao, tempo)

// Anônima:

const velocidadePontual = (funcao, posicao, tempo) => funcao(posicao, tempo)
const valorDaVelocidade = velocidadePontual((posicao, tempo) => (posicao-500)/(tempo-5), 1000, 10)


