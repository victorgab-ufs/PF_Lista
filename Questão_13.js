//Q13. Velocidade (tempo/posição)

//function velocidade(instanteT, posicaoX){
//const posicao = posicaoX - 500
//const tempo = instanteT - 0
//const velocidadeMedia = posicao/tempo
//return `${velocidadeMedia} m/s`
//}

const velocidadeXnoPontoT = (posicao, tempo) => posicao/tempo
const posicaoFinal = 1000
const posicao = posicaoFinal - 500
const tempo = 5
const velocidade = velocidadeXnoPontoT(posicao, tempo)

