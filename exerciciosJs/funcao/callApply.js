function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // Neste caso o resultado vai ser NaN, pois o this da function, está pegando o CONTEXTO GLOBAL da parada
console.log(produto.getPreco()) // Aqui vai dar certo pois ele está pegando o CONTEXTO DO OBJETO produto

// Agora com Call e Apply

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


/** ESTRUTURA DE UM CALL
 * bla.call(Contexto, param1, param2)
 */

 console.log(getPreco.call(carro, 0.15, '$'))

 /** ESTRUTURA DE UM APPLY
 * bla.call(Contexto,array[param1, param2])
 */

console.log(getPreco.apply(carro, [0.15, '$']))