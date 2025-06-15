//Q5. Distância Euclidiana

//function distanciaEuclidianaEntreDoisPontos(x1,y1,x2,y2){
//const a = y1-y2
//const b = x1-x2
//return ((a*a)+(b*b))**0.5
//}

const distanciaEntreDoisPontos = (deltaX, deltaY) => ((deltaX**2)+(deltaY**2))**0.5
const x1 = 0
const y1 = 3
const x2 = 4
const y2 = 0
const deltaX = x1 - x2
const deltaY = y1 - y2
const resultadoDistancia = distanciaEntreDoisPontos(deltaX, deltaY)

