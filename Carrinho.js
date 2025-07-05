const carrinho = [
  
  {nome: 'Água com gás 500mL', qtde: 1, preco: 1.89, fragil: false},
  {nome: 'Água sem gás 500mL', qtde: 1, preco: 1.69, fragil: false},
  {nome: 'Kit Coca-Cola e Fanta 2L', qtde: 1, preco: 17.49, fragil: false},
  {nome: 'Coca Zero 200mL', qtde: 3, preco: 1.99, fragil: false},
  {nome: 'Refrigerante de limão 500mL', qtde: 2, preco: 4.19, fragil: false},
  {nome: 'Salgadinho de Milho', qtde: 1, preco: 1.79, fragil: true},
  {nome: 'Barra de Cereal', qtde: 7, preco: 1.99, fragil: true},
  {nome: 'Café', qtde: 4, preco: 11.29, fragil: true},
  {nome: 'Achocolatado 550g', qtde: 1, preco: 14.99, fragil: true},
  {nome: 'Mistura para bolo', qtde: 2, preco: 4.59, fragil: true},
  {nome: 'Maionese', qtde: 2, preco: 4.69, fragil: false},
  {nome: 'Farinha de Trigo', qtde: 1, preco: 4.39, fragil: true},
  {nome: 'Açúcar', qtde: 3, preco: 4.15, fragil: true},
  {nome: 'Sal', qtde: 1, preco: 1.19, fragil: true},
  {nome: 'Azeitonas', qtde: 1, preco: 3.99, fragil: true},
  {nome: 'Milho de pipoca', qtde: 1, preco: 3.29, fragil: false},
  {nome: 'Tempero Chimichurri', qtde: 1, preco: 6.19, fragil: false},
  {nome: 'Feijão', qtde: 3, preco: 5.19, fragil: false},
  {nome: 'Aveia', qtde: 1, preco: 3.29, fragil: false},
  {nome: 'Wafer limão', qtde: 1, preco: 1.55, fragil: true},
  {nome: 'Leite em pó', qtde: 3, preco: 15.49, fragil: true},
  {nome: 'Cream Cracker', qtde: 2, preco: 4.39, fragil: true},
  {nome: 'Pacote de copo Descartável', qtde: 1, preco: 4.69, fragil: true},
  {nome: 'Leite em pó desnatado', qtde: 1, preco: 10.49, fragil: true},
  {nome: 'Salgadinho batata ondulada', qtde: 1, preco: 3.29, fragil: true},
  {nome: 'Barra de chocolate', qtde: 2, preco: 5.99, fragil: true},
  {nome: 'Leite condensado', qtde: 2, preco: 5.99, fragil: false},
  {nome: 'Creme de leite', qtde: 7, preco: 2.79, fragil: false},
  {nome: 'Biscoito torta de limão', qtde: 1, preco: 4.39, fragil: true},
  {nome: 'Biscoito recheado', qtde: 1, preco: 2.09, fragil: true},
  {nome: 'Bolinho', qtde: 1, preco: 1.79, fragil: true},
  {nome: 'Salgadinho conchinha', qtde: 1, preco: 2.19, fragil: true},
  {nome: 'Nescau Cereal', qtde: 2, preco: 1.99, fragil: true},
  {nome: 'Biscoito coquinho', qtde: 1, preco: 4.79, fragil: true},
  {nome: 'Extrato de tomate', qtde: 2, preco: 3.99, fragil: false},
  {nome: 'Molho pronto', qtde: 6, preco: 1.59, fragil: false},
  {nome: 'Sardinha com molho de tomate', qtde: 1, preco: 4.99, fragil: false},
  {nome: 'Macarrão', qtde: 3, preco: 3.29, fragil: true},
  {nome: 'Leite de coco', qtde: 2, preco: 1.65, fragil: false},
  {nome: 'Vinagre', qtde: 1, preco: 1.59, fragil: false},
  {nome: 'Papel alumínio', qtde: 1, preco: 3.39, fragil: false},
  {nome: 'Saco de lixo', qtde: 1, preco: 7.99, fragil: false},
  {nome: 'Colorífico', qtde: 2, preco: 0.85, fragil: true},
  {nome: 'Flocão de milho', qtde: 4, preco: 1.49, fragil: false},
  {nome: 'Goiabada', qtde: 2, preco: 2.69, fragil: false},
  {nome: 'Farinha de mandioca', qtde: 4, preco: 5.39, fragil: true},
  {nome: 'Arroz', qtde: 4, preco: 6.15, fragil: false},
  {nome: 'Óleo de soja', qtde: 2, preco: 9.99, fragil: false},
  {nome: 'Manteiga', qtde: 1, preco: 5.44, fragil: false},
  {nome: 'Sabonete em barra', qtde: 4, preco: 2.79, fragil: false},
  
]



const total = 

(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50) =>  
    
p1.qtde * p1.preco +
p2.qtde * p2.preco +
p3.qtde * p3.preco +
p4.qtde * p4.preco +
p5.qtde * p5.preco +
p6.qtde * p6.preco +
p7.qtde * p7.preco +
p8.qtde * p8.preco +
p9.qtde * p9.preco +
p10.qtde * p10.preco +
p11.qtde * p11.preco +
p12.qtde * p12.preco +
p13.qtde * p13.preco +
p14.qtde * p14.preco + 
p15.qtde * p15.preco + 
p16.qtde * p16.preco +
p17.qtde * p17.preco +
p18.qtde * p18.preco +
p19.qtde * p19.preco +
p20.qtde * p20.preco +
p21.qtde * p21.preco +
p22.qtde * p22.preco +
p23.qtde * p23.preco +
p24.qtde * p24.preco +
p25.qtde * p25.preco +
p26.qtde * p26.preco +
p27.qtde * p27.preco +
p28.qtde * p28.preco +
p29.qtde * p29.preco +
p30.qtde * p30.preco +
p31.qtde * p31.preco +
p32.qtde * p32.preco +
p33.qtde * p33.preco +
p34.qtde * p34.preco +
p35.qtde * p35.preco +
p36.qtde * p36.preco +
p37.qtde * p37.preco +
p38.qtde * p38.preco +
p39.qtde * p39.preco +
p40.qtde * p40.preco +
p41.qtde * p41.preco +
p42.qtde * p42.preco +
p43.qtde * p43.preco +
p44.qtde * p44.preco +
p45.qtde * p45.preco +
p46.qtde * p46.preco +
p47.qtde * p47.preco +
p48.qtde * p48.preco +
p49.qtde * p49.preco +
p50.qtde * p50.preco


const frageis = (p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
p41,p42,p43,p44,p45,p46,p47,p48,p49,p50) => {

const parcial1 = p1.fragil ? p1.qtde * p1.preco : 0
const parcial2 = p2.fragil ? p2.qtde * p2.preco : 0
const parcial3 = p3.fragil ? p3.qtde * p3.preco : 0
const parcial4 = p4.fragil ? p4.qtde * p4.preco : 0
const parcial5 = p5.fragil ? p5.qtde * p5.preco : 0
const parcial6 = p6.fragil ? p6.qtde * p6.preco : 0
const parcial7 = p7.fragil ? p7.qtde * p7.preco : 0
const parcial8 = p8.fragil ? p8.qtde * p8.preco : 0
const parcial9 = p9.fragil ? p9.qtde * p9.preco : 0
const parcial10 = p10.fragil ? p10.qtde * p10.preco : 0
const parcial11 = p11.fragil ? p11.qtde * p11.preco : 0
const parcial12 = p12.fragil ? p12.qtde * p12.preco : 0
const parcial13 = p13.fragil ? p13.qtde * p13.preco : 0
const parcial14 = p14.fragil ? p14.qtde * p14.preco : 0
const parcial15 = p15.fragil ? p15.qtde * p15.preco : 0
const parcial16 = p16.fragil ? p16.qtde * p16.preco : 0
const parcial17 = p17.fragil ? p17.qtde * p17.preco : 0
const parcial18 = p18.fragil ? p18.qtde * p18.preco : 0
const parcial19 = p19.fragil ? p19.qtde * p19.preco : 0
const parcial20 = p20.fragil ? p20.qtde * p20.preco : 0
const parcial21 = p21.fragil ? p21.qtde * p21.preco : 0
const parcial22 = p22.fragil ? p22.qtde * p22.preco : 0
const parcial23 = p23.fragil ? p23.qtde * p23.preco : 0
const parcial24 = p24.fragil ? p24.qtde * p24.preco : 0
const parcial25 = p25.fragil ? p25.qtde * p25.preco : 0
const parcial26 = p26.fragil ? p26.qtde * p26.preco : 0
const parcial27 = p27.fragil ? p27.qtde * p27.preco : 0
const parcial28 = p28.fragil ? p28.qtde * p28.preco : 0
const parcial29 = p29.fragil ? p29.qtde * p29.preco : 0
const parcial30 = p30.fragil ? p30.qtde * p30.preco : 0
const parcial31 = p31.fragil ? p31.qtde * p31.preco : 0
const parcial32 = p32.fragil ? p32.qtde * p32.preco : 0
const parcial33 = p33.fragil ? p33.qtde * p33.preco : 0
const parcial34 = p34.fragil ? p34.qtde * p34.preco : 0
const parcial35 = p35.fragil ? p35.qtde * p35.preco : 0
const parcial36 = p36.fragil ? p36.qtde * p36.preco : 0
const parcial37 = p37.fragil ? p37.qtde * p37.preco : 0
const parcial38 = p38.fragil ? p38.qtde * p38.preco : 0
const parcial39 = p39.fragil ? p39.qtde * p39.preco : 0
const parcial40 = p40.fragil ? p40.qtde * p40.preco : 0
const parcial41 = p41.fragil ? p41.qtde * p41.preco : 0
const parcial42 = p42.fragil ? p42.qtde * p42.preco : 0
const parcial43 = p43.fragil ? p43.qtde * p43.preco : 0
const parcial44 = p44.fragil ? p44.qtde * p44.preco : 0
const parcial45 = p45.fragil ? p45.qtde * p45.preco : 0
const parcial46 = p46.fragil ? p46.qtde * p46.preco : 0
const parcial47 = p47.fragil ? p47.qtde * p47.preco : 0
const parcial48 = p48.fragil ? p48.qtde * p48.preco : 0
const parcial49 = p49.fragil ? p49.qtde * p49.preco : 0
const parcial50 = p50.fragil ? p50.qtde * p50.preco : 0

return parcial1 + parcial2 + parcial3 + parcial4 + parcial5 + parcial6 + parcial7 + parcial8 + parcial9 + parcial10 + parcial11 + parcial12 + parcial13 + parcial14 + parcial15 + parcial16 + parcial17 + parcial18 + parcial19 + parcial20 + parcial21 + parcial22 + parcial23 + parcial24 + parcial25 + parcial26 + parcial27 + parcial28 + parcial29 + parcial30 + parcial31 + parcial32 + parcial33 + parcial34 + parcial35 + parcial36 + parcial37 + parcial38 + parcial39 + parcial40 + parcial41 + parcial42 + parcial43 + parcial44 + parcial45 + parcial46 + parcial47 + parcial48 + parcial49 + parcial50

}




const desconto = (percentual=0) => (valor) => (1-percentual)*valor
const desconto10 = desconto(0.1)
const desconto5 = desconto(0.05)



const calcular = (desconto) => (calculo) =>

(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50) => 

desconto(calculo(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
p41,p42,p43,p44,p45,p46,p47,p48,p49,p50)) 



const todosDesconto10 = calcular(desconto10)(total)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6],carrinho[7],carrinho[8],carrinho[9],carrinho[10],carrinho[11],carrinho[12],carrinho[13],carrinho[14],carrinho[15],carrinho[16],carrinho[17],carrinho[18],carrinho[19],carrinho[20],carrinho[21],carrinho[22],carrinho[23],carrinho[24],carrinho[25],carrinho[26],carrinho[27],carrinho[28],carrinho[29],carrinho[30],carrinho[31],carrinho[32],carrinho[33],carrinho[34],carrinho[35],carrinho[36],carrinho[37],carrinho[38],carrinho[39],carrinho[40],carrinho[41],carrinho[42],carrinho[43],carrinho[44],carrinho[45],carrinho[46],carrinho[47],carrinho[48],carrinho[49],carrinho[50])



const frageisDesconto5 = calcular(desconto5)(frageis)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6],carrinho[7],carrinho[8],carrinho[9],carrinho[10],carrinho[11],carrinho[12],carrinho[13],carrinho[14],carrinho[15],carrinho[16],carrinho[17],carrinho[18],carrinho[19],carrinho[20],carrinho[21],carrinho[22],carrinho[23],carrinho[24],carrinho[25],carrinho[26],carrinho[27],carrinho[28],carrinho[29],carrinho[30],carrinho[31],carrinho[32],carrinho[33],carrinho[34],carrinho[35],carrinho[36],carrinho[37],carrinho[38],carrinho[39],carrinho[40],carrinho[41],carrinho[42],carrinho[43],carrinho[44],carrinho[45],carrinho[46],carrinho[47],carrinho[48],carrinho[49],carrinho[50])



const todosSemDesconto = calcular(desconto(0))(total)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4],carrinho[5],carrinho[6],carrinho[7],carrinho[8],carrinho[9],carrinho[10],carrinho[11],carrinho[12],carrinho[13],carrinho[14],carrinho[15],carrinho[16],carrinho[17],carrinho[18],carrinho[19],carrinho[20],carrinho[21],carrinho[22],carrinho[23],carrinho[24],carrinho[25],carrinho[26],carrinho[27],carrinho[28],carrinho[29],carrinho[30],carrinho[31],carrinho[32],carrinho[33],carrinho[34],carrinho[35],carrinho[36],carrinho[37],carrinho[38],carrinho[39],carrinho[40],carrinho[41],carrinho[42],carrinho[43],carrinho[44],carrinho[45],carrinho[46],carrinho[47],carrinho[48],carrinho[49],carrinho[50])


// valor total do carrinho
console.log(`O valor total do carrinho é R$ ${todosSemDesconto}`)

// frágeis com 5% de desconto
console.log(`Os frágeis com 5% de desconto custam R$ ${frageisDesconto5}`)

// valor do carrinho com 10% de desconto
console.log(`O valor total com 10% de desconto é R$ ${todosDesconto10}`)