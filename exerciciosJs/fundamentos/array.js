// Uma array é um vetor, ou seja, uma estrutura unidimensinal.
// É uma estrutura que permite agrupar multiplos valores de uma forma linear
// Cada valor tem um indice (identificador)
// CARACTERISTICAS
// 1) O array é heterogenio, ou seja, pode ter vários tipos dentro de um array
// 2) Ele não é fixo, ou seja, ele pode aumentar ou diminutir o tamanho

const valores = ["Texto", 1, false]
console.log("O tipo do "+valores[0] +" = "+ typeof valores[0])
console.log("O tipo do "+valores[1] +" = "+ typeof valores[1])
console.log("O tipo do "+valores[2] +" = "+ typeof valores[2])

console.log(valores[0], valores[1])
console.log(valores[3]) // Repara que esse cara não existe

// Já que não existe vamos adicionar

valores[3] = 1 + 2
console.log(valores[3]) // Agora ele existe

// Vamos ver qual o tamanho do array

console.log(valores.length)

//  Uma forma de adicionar em massa
valores.push({id: 4}, false, null, 'teste')
console.log(valores.length)
console.log(valores)

// Esse cara está muito grande, vamos tirar alguem

delete valores[2]
console.log(valores)

console.log(typeof valores) // Um array é um Objeto no JS

console.log("É BONITO O ARRAY PERMITIR VÁRIOS TIPOS, MAIS PRESE EM ARRAYS HOMOGÊNIOS")