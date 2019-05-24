// Objeto é uma coleção dinâmica de pares chave/valor

// Primeiro exemplo

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto) // Vai printar geral
delete produto.preco
console.log(produto) 

// Segundo exemplo

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Nicolas',
        idade: 20,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 1223
        }
    },
    // Array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }]
}


console.log(carro.condutores[1])


delete carro.condutores

// console.log(carro.condutores[1]) // Vai dar erro
console.log(carro.condutores) // Não vai dar erro, so vai dar que o valor "undefined" não existe

console.log(carro)