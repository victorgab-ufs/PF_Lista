//Q14. Escrever assunto por extenso

// Com function:

function algarismoPorExtenso(algarismo){
if (algarismo === 0) return 'zero'
if (algarismo === 1) return 'um'
if (algarismo === 2) return 'dois'
if (algarismo === 3) return 'tres'
if (algarismo === 4) return 'quatro'
if (algarismo === 5) return 'cinco'
if (algarismo === 6) return 'seis'
if (algarismo === 7) return 'sete'
if (algarismo === 8) return 'oito'
if (algarismo === 9) return 'nove'
}

// Arrow:

const algarismoPorExtenso = (algarismo) => {
if (algarismo === 0) return 'zero'
if (algarismo === 1) return 'um'
if (algarismo === 2) return 'dois'
if (algarismo === 3) return 'tres'
if (algarismo === 4) return 'quatro'
if (algarismo === 5) return 'cinco'
if (algarismo === 6) return 'seis'
if (algarismo === 7) return 'sete'
if (algarismo === 8) return 'oito'
if (algarismo === 9) return 'nove'
}

// Anônima:

const algarismoPorExtenso = (funcao, algarismo) => funcao(algarismo)

const algarismos = (algarismo) => {

if (algarismo === 0) return 'zero'
if (algarismo === 1) return 'um'
if (algarismo === 2) return 'dois'
if (algarismo === 3) return 'tres'
if (algarismo === 4) return 'quatro'
if (algarismo === 5) return 'cinco'
if (algarismo === 6) return 'seis'
if (algarismo === 7) return 'sete'
if (algarismo === 8) return 'oito'
if (algarismo === 9) return 'nove'

}

const resultado = algarismos(algarismoPorExtenso(numero => numero, 2))

